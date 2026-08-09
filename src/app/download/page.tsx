import type { Metadata } from 'next';
import DownloadRedirectClient from './DownloadRedirectClient';

export const metadata: Metadata = {
  title: 'Download uNepal',
  description: 'Download uNepal 5.0.5 for Android and check current iOS availability.',
  alternates: { canonical: '/download' },
  openGraph: {
    type: 'website',
    url: '/download',
    title: 'Download uNepal',
    description: 'Android 5.0.5 is live. iOS 5.0.5 is currently Waiting for Review.',
    images: ['/assets/app-ui/og-premium-app.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download uNepal',
    description: 'Android 5.0.5 is live. iOS 5.0.5 is currently Waiting for Review.',
    images: ['/assets/app-ui/og-premium-app.jpg'],
  },
};

export default function DownloadPage() {
  return <DownloadRedirectClient />;
}
