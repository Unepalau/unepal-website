import type { Metadata } from 'next';
import DownloadRedirectClient from './DownloadRedirectClient';

export const metadata: Metadata = {
  title: 'Download uNepal',
  description: 'Download uNepal for Android or view the iPhone app.',
  alternates: { canonical: '/download' },
  openGraph: {
    type: 'website',
    url: '/download',
    title: 'Download uNepal',
    description: 'Download uNepal for Android or view the iPhone app.',
    images: ['/assets/app-ui/og-premium-app.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download uNepal',
    description: 'Download uNepal for Android or view the iPhone app.',
    images: ['/assets/app-ui/og-premium-app.jpg'],
  },
};

export default function DownloadPage() {
  return <DownloadRedirectClient />;
}
