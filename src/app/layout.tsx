import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const notoSans = localFont({
  src: '../../public/assets/fonts/NotoSans-Variable.ttf',
  variable: '--font-noto-sans',
  display: 'swap',
});

const urbanist = localFont({
  src: '../../public/assets/fonts/Urbanist-Variable.ttf',
  variable: '--font-urbanist',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.unepal.com'),
  title: { default: 'uNepal — Nepalese people, closer', template: '%s | uNepal' },
  description: 'Posts, community, Bazaar, Hamro TV, events, businesses, and everyday connection for Nepalese people.',
  keywords: ['Nepalese community app', 'Nepalese social network', 'uNepal', 'Hamro TV', 'Nepalese marketplace', 'Nepalese business directory'],
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }, { url: '/assets/favicon.png', type: 'image/png' }],
    shortcut: '/favicon.ico',
    apple: '/assets/logo.png',
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en',
    title: 'uNepal — Nepalese people, closer',
    description: 'Posts, community, Bazaar, Hamro TV, events, businesses, and everyday connection for Nepalese people.',
    url: '/',
    siteName: 'uNepal',
    images: [{ url: '/assets/app-ui/og-premium-app.jpg', width: 1200, height: 630, alt: 'Real uNepal app interfaces for community, Bazaar, and discovery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'uNepal — Nepalese people, closer',
    description: 'Posts, community, Bazaar, Hamro TV, events, businesses, and everyday connection for Nepalese people.',
    images: ['/assets/app-ui/og-premium-app.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${notoSans.variable} ${urbanist.variable}`}>
      <body>{children}</body>
    </html>
  );
}
