"use client";

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";

const SUPPORT_EMAIL = "hello@unepal.com";
const VERIFIED_CONTACT_ENDPOINT =
  "https://us-central1-unepalwebsite.cloudfunctions.net/contact";

export function resolveContactEndpoint(
  configuredEndpoint?: string,
): string | null {
  const candidate = configuredEndpoint?.trim() || VERIFIED_CONTACT_ENDPOINT;

  try {
    const url = new URL(candidate);
    const isExpectedEndpoint =
      url.protocol === "https:" &&
      url.hostname === "us-central1-unepalwebsite.cloudfunctions.net" &&
      url.pathname === "/contact" &&
      !url.username &&
      !url.password;

    return isExpectedEndpoint ? url.toString() : null;
  } catch {
    return null;
  }
}

const buildContactEndpoint = resolveContactEndpoint(
  process.env.NEXT_PUBLIC_CONTACT_API_URL,
);

type ContactProps = {
  endpoint?: string | null;
  autoCloseDelayMs?: number;
};

export default function Contact({
  endpoint = buildContactEndpoint,
  autoCloseDelayMs = 1200,
}: ContactProps) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const openerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const restoreOpenerFocus = () => {
    window.requestAnimationFrame(() => openerRef.current?.focus());
  };

  const closeContactForm = () => {
    clearCloseTimer();
    setIsOpen(false);
    if (dialogRef.current?.open) dialogRef.current.close();
    restoreOpenerFocus();
  };

  const openContactForm = () => {
    clearCloseTimer();
    setStatus("idle");
    setErrorMessage("");
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) return;

    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();

    window.requestAnimationFrame(() => firstInputRef.current?.focus());
  }, [isOpen]);

  useEffect(() => () => clearCloseTimer(), []);

  const keepFocusInDialog = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeContactForm();
      return;
    }

    if (event.key !== "Tab") return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const focusable = Array.from(
      dialog.querySelectorAll<HTMLElement>(
        "button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href]",
      ),
    ).filter((element) => element.getAttribute("aria-hidden") !== "true");

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    if (!endpoint) {
      setStatus("error");
      setErrorMessage(
        `Online messaging is unavailable right now. Please email ${SUPPORT_EMAIL} directly.`,
      );
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "General support").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage("Name, email, and message are required.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const result = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          result?.message ||
            `We could not send your message right now. Please email ${SUPPORT_EMAIL} directly.`,
        );
        return;
      }

      setStatus("success");
      form.reset();
      closeTimerRef.current = setTimeout(closeContactForm, autoCloseDelayMs);
    } catch {
      setStatus("error");
      setErrorMessage(
        `We could not send your message right now. Please email ${SUPPORT_EMAIL} directly.`,
      );
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 bg-[#F3F4F6] py-10 sm:py-16 lg:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn className="overflow-hidden rounded-[1.5rem] border border-[#E4E6EB] bg-white shadow-[0_24px_70px_-58px_rgba(7,22,50,0.45)]">
          <div className="grid gap-5 p-5 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-[#FFF2F4] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-primary">
                Contact
              </span>
              <h2 className="mt-4 max-w-3xl text-[1.85rem] font-extrabold leading-[1.1] text-[#071632] sm:text-[3rem]">
                Need help with uNepal?
              </h2>
              <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-[#65676B] sm:text-lg sm:leading-8">
                Send a message to the uNepal team and we will respond as soon as
                possible.
              </p>
            </div>

            <button
              ref={openerRef}
              type="button"
              onClick={openContactForm}
              className="focus-ring inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-[1rem] bg-brand-primary px-7 py-4 text-base font-extrabold text-white shadow-[0_18px_36px_-24px_rgba(230,0,35,0.9)] transition-colors hover:bg-brand-blue sm:w-auto"
            >
              Contact us
              <i className="fa-solid fa-arrow-right text-sm" />
            </button>
          </div>
        </FadeIn>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-description"
        onCancel={(event) => {
          event.preventDefault();
          closeContactForm();
        }}
        onKeyDown={keepFocusInDialog}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeContactForm();
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-[1.5rem] bg-white p-0 text-left shadow-[0_28px_90px_-32px_rgba(7,22,50,0.7)] backdrop:bg-[#071632]/55 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#E4E6EB] px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-primary">
              Contact
            </p>
            <h2
              id="contact-modal-title"
              className="mt-1 text-2xl font-extrabold leading-tight text-[#071632]"
            >
              Send us a message
            </h2>
            <p
              id="contact-modal-description"
              className="mt-2 text-sm font-semibold text-[#65676B]"
            >
              Required fields are marked with an asterisk.
            </p>
          </div>
          <button
            type="button"
            onClick={closeContactForm}
            className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E4E6EB] bg-white text-[#071632] shadow-sm transition hover:bg-[#F8FAFC]"
            aria-label="Close contact form"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        <form
          id="contact-form"
          className="max-h-[78vh] overflow-y-auto bg-[#F8FAFC] p-5 sm:p-6"
          onSubmit={handleSubmit}
        >
          {!endpoint ? (
            <div
              role="status"
              className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-semibold text-amber-950"
            >
              Online messaging is unavailable right now. Email{" "}
              <a
                className="font-extrabold underline"
                href={`mailto:${SUPPORT_EMAIL}`}
              >
                {SUPPORT_EMAIL}
              </a>
              .
            </div>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-bold text-[#1C1E21]"
              >
                Name <span className="text-brand-primary">*</span>
              </label>
              <input
                ref={firstInputRef}
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="focus-ring w-full rounded-[1rem] border border-[#E4E6EB] bg-white px-4 py-3 text-[#1C1E21] shadow-sm placeholder:text-[#7B8493]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-bold text-[#1C1E21]"
              >
                Email <span className="text-brand-primary">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="focus-ring w-full rounded-[1rem] border border-[#E4E6EB] bg-white px-4 py-3 text-[#1C1E21] shadow-sm placeholder:text-[#7B8493]"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="contact-subject"
              className="mb-2 block text-sm font-bold text-[#1C1E21]"
            >
              Subject
            </label>
            <select
              id="contact-subject"
              name="subject"
              className="focus-ring w-full rounded-[1rem] border border-[#E4E6EB] bg-white px-4 py-3 text-[#1C1E21] shadow-sm"
            >
              <option>General support</option>
              <option>Privacy request</option>
              <option>Child safety report</option>
              <option>Moderation appeal</option>
              <option>Business enquiry</option>
            </select>
          </div>

          <div className="mt-4">
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-bold text-[#1C1E21]"
            >
              Message <span className="text-brand-primary">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              className="focus-ring w-full resize-y rounded-[1rem] border border-[#E4E6EB] bg-white px-4 py-3 text-[#1C1E21] shadow-sm placeholder:text-[#7B8493]"
              placeholder="Include links, usernames, and context that will help us respond faster."
            />
          </div>

          {status === "success" ? (
            <div
              role="status"
              aria-live="polite"
              className="mt-4 rounded-xl border border-brand-blue/15 bg-white px-5 py-4 text-center text-sm font-semibold text-brand-blue"
            >
              Your message has been sent to {SUPPORT_EMAIL}.
            </div>
          ) : null}
          {status === "error" ? (
            <div
              role="alert"
              aria-live="assertive"
              className="mt-4 rounded-xl border border-brand-primary/15 bg-white px-5 py-4 text-center text-sm font-semibold text-brand-primary"
            >
              {errorMessage}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={status === "sending" || !endpoint}
            className="focus-ring mt-5 min-h-11 w-full rounded-[1rem] bg-brand-primary py-4 text-base font-extrabold text-white shadow-[0_18px_36px_-24px_rgba(230,0,35,0.9)] transition-colors hover:bg-brand-blue disabled:cursor-not-allowed disabled:bg-[#E4E6EB] disabled:text-[#65676B]"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </dialog>
    </section>
  );
}
