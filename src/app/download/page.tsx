import type { Metadata } from 'next';

import DownloadRedirectClient from './DownloadRedirectClient';

export const metadata: Metadata = {
  title: 'Download uNepal',
  description: 'Download uNepal for iPhone or Android.',
  alternates: {
    canonical: 'https://www.unepal.com/download',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.unepal.com/download',
    title: 'Download uNepal',
    description: 'Download uNepal for iPhone or Android.',
    images: ['https://www.unepal.com/assets/hero-mockup.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download uNepal',
    description: 'Download uNepal for iPhone or Android.',
    images: ['https://www.unepal.com/assets/hero-mockup.jpg'],
  },
};

export default function DownloadPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fbfbfd_0%,#f8fafc_24%,#ffffff_100%)] px-6 py-16 text-slate-900 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10rem] top-20 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(237,27,36,0.10)_0%,rgba(237,27,36,0)_72%)] blur-3xl" />
        <div className="absolute right-[-10rem] top-[18rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(0,56,147,0.12)_0%,rgba(0,56,147,0)_72%)] blur-3xl" />
      </div>
      <div className="mx-auto flex min-h-[80vh] max-w-4xl items-center justify-center">
        <DownloadRedirectClient />
      </div>
    </main>
  );
}