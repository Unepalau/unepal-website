import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import Contact, { resolveContactEndpoint } from "../Contact";

const endpoint = "https://us-central1-unepalwebsite.cloudfunctions.net/contact";

async function openAndCompleteForm() {
  const user = userEvent.setup();
  const opener = screen.getByRole("button", { name: "Contact us" });
  await user.click(opener);
  await user.type(screen.getByLabelText(/Name/), "Demo Person");
  await user.type(screen.getByLabelText(/Email/), "demo@example.com");
  await user.type(screen.getByLabelText(/Message/), "A safe component test.");
  return { user, opener };
}

describe("resolveContactEndpoint", () => {
  it("uses only the verified uNepal Firebase Function", () => {
    expect(resolveContactEndpoint()).toBe(endpoint);
    expect(resolveContactEndpoint(endpoint)).toBe(endpoint);
    expect(resolveContactEndpoint("/api/contact")).toBeNull();
    expect(resolveContactEndpoint("https://example.com/contact")).toBeNull();
  });
});

describe("Contact modal", () => {
  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it("moves focus into the dialog, closes with Escape, and restores the opener", async () => {
    const user = userEvent.setup();
    render(<Contact endpoint={endpoint} />);
    const opener = screen.getByRole("button", { name: "Contact us" });

    await user.click(opener);

    expect(screen.getByRole("dialog")).toHaveAttribute("open");
    expect(screen.getByLabelText(/Name/)).toHaveFocus();

    await user.keyboard("{Escape}");

    expect(screen.getByRole("dialog", { hidden: true })).not.toHaveAttribute(
      "open",
    );
    expect(opener).toHaveFocus();
  });

  it("wraps Tab and Shift+Tab within the dialog", async () => {
    const user = userEvent.setup();
    render(<Contact endpoint={endpoint} />);
    await user.click(screen.getByRole("button", { name: "Contact us" }));

    const closeButton = screen.getByRole("button", {
      name: "Close contact form",
    });
    const submitButton = screen.getByRole("button", { name: "Send Message" });

    closeButton.focus();
    await user.tab({ shift: true });
    expect(submitButton).toHaveFocus();

    await user.tab();
    expect(closeButton).toHaveFocus();
  });

  it("prevents duplicate submission and resets the form after success", async () => {
    let resolveRequest: ((value: Response) => void) | undefined;
    const fetchMock = vi.spyOn(globalThis, "fetch").mockImplementation(
      () =>
        new Promise<Response>((resolve) => {
          resolveRequest = resolve;
        }),
    );

    render(<Contact endpoint={endpoint} autoCloseDelayMs={60_000} />);
    const { user } = await openAndCompleteForm();
    const submitButton = screen.getByRole("button", { name: "Send Message" });

    await user.click(submitButton);
    fireEvent.submit(submitButton.closest("form")!);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("button", { name: "Sending..." })).toBeDisabled();

    resolveRequest?.(
      new Response(JSON.stringify({ message: "Message sent successfully." }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );

    expect(await screen.findByRole("status")).toHaveTextContent(
      "Your message has been sent",
    );
    expect(screen.getByLabelText(/Name/)).toHaveValue("");
    expect(screen.getByLabelText(/Email/)).toHaveValue("");
    expect(screen.getByLabelText(/Message/)).toHaveValue("");
  });

  it("announces server errors without resetting the form", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ message: "Please try again later." }), {
        status: 503,
        headers: { "Content-Type": "application/json" },
      }),
    );

    render(<Contact endpoint={endpoint} />);
    const { user } = await openAndCompleteForm();
    await user.click(screen.getByRole("button", { name: "Send Message" }));

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Please try again later.",
    );
    expect(screen.getByLabelText(/Name/)).toHaveValue("Demo Person");
  });

  it("announces network errors and offers the support email", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValue(
      new TypeError("Network unavailable"),
    );

    render(<Contact endpoint={endpoint} />);
    const { user } = await openAndCompleteForm();
    await user.click(screen.getByRole("button", { name: "Send Message" }));

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "hello@unepal.com",
    );
  });

  it("does not submit when no approved endpoint is available", async () => {
    const fetchMock = vi.spyOn(globalThis, "fetch");
    const user = userEvent.setup();
    render(<Contact endpoint={null} />);

    await user.click(screen.getByRole("button", { name: "Contact us" }));

    expect(screen.getByRole("status")).toHaveTextContent(
      "Online messaging is unavailable",
    );
    expect(screen.getByRole("button", { name: "Send Message" })).toBeDisabled();
    await waitFor(() => expect(fetchMock).not.toHaveBeenCalled());
  });
});
