import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "uNepal — Hamro Social Network",
    short_name: "uNepal",
    description:
      "A social and community platform for Nepalese people across Nepal and around the world.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#071632",
    icons: [
      {
        src: "/assets/manifest-icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/assets/manifest-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
