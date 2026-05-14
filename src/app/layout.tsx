import type { Metadata } from "next";
import { Noto_Sans, Urbanist } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "uNepal — The community platform for Nepalese worldwide",
  description: "Join 10,000+ Nepalese on uNepal, the all-in-one community app for housing, jobs, marketplace, events, messaging, local news, and culture. Available worldwide.",
  keywords: "nepali community app, nepali housing, nepali rentals, nepali jobs app, nepali marketplace, nepali events, nepali news, diaspora community, local noticeboards, nepali games, groups feature, uNepal",
  openGraph: {
    type: "website",
    locale: "en",
    title: "uNepal — The community platform for Nepalese worldwide",
    description: "Join 10,000+ Nepalese on uNepal for housing, jobs, marketplace, events, messaging, and local news in one app.",
    url: "https://www.unepal.com/",
    siteName: "uNepal",
    images: [
      {
        url: "https://www.unepal.com/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "uNepal app screenshots on phone frames showing Explore, Community, and Calendar views",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "uNepal — The community platform for Nepalese worldwide",
    description: "Join 10,000+ Nepalese on uNepal for housing, jobs, marketplace, events, messaging, and local news in one app.",
    images: ["https://www.unepal.com/assets/og-image.png"]
  }
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
