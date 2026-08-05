import type { Metadata } from "next";
import localFont from "next/font/local";
import { SITE_URL, SOCIAL_IMAGE } from "@/lib/siteMetadata";
import "./globals.css";

const notoSans = localFont({
  src: "./fonts/NotoSans-Variable.ttf",
  variable: "--font-noto-sans",
  weight: "100 900",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const urbanist = localFont({
  src: "./fonts/Urbanist-Variable.ttf",
  variable: "--font-urbanist",
  weight: "100 900",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "uNepal - Hamro Social Network for Nepalese everywhere",
  description:
    "uNepal is Hamro Social Network for Nepalese everywhere - bringing posts, groups, pages, Bazaar, Hamro TV, events, business discovery, messaging, and local community updates into one app.",
  keywords:
    "Nepalese community app, Nepalese social network, Nepalese housing, Nepalese rentals, Nepalese jobs app, uNepal Bazaar, Nepalese events, Hamro TV, business directory, uNepal",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/assets/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en",
    title: "uNepal - Hamro Social Network for Nepalese everywhere",
    description:
      "Posts, groups, pages, Bazaar, Hamro TV, events, business discovery, messaging, and local community updates for Nepalese communities.",
    url: `${SITE_URL}/`,
    siteName: "uNepal",
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "uNepal - Hamro Social Network for Nepalese everywhere",
    description:
      "Posts, groups, pages, Bazaar, Hamro TV, events, business discovery, messaging, and local community updates for Nepalese communities.",
    images: [SOCIAL_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${urbanist.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
