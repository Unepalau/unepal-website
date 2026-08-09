import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ConnectionSection from '@/components/premium/ConnectionSection';
import DiscoverGrid from '@/components/premium/DiscoverGrid';
import DownloadBand from '@/components/premium/DownloadBand';
import Hero from '@/components/premium/Hero';
import PremiumHeader from '@/components/premium/PremiumHeader';
import ProductStrip from '@/components/premium/ProductStrip';
import TrustStrip from '@/components/premium/TrustStrip';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'uNepal',
    operatingSystem: 'Android, iOS',
    applicationCategory: 'SocialNetworkingApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
    description: 'uNepal brings posts, communities, Bazaar, Hamro TV, events, businesses, and local discovery together for Nepalese people.',
    image: 'https://www.unepal.com/assets/app-ui/og-premium-app.jpg',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PremiumHeader />
      <main>
        <Hero />
        <ProductStrip />
        <ConnectionSection />
        <DiscoverGrid />
        <TrustStrip />
        <DownloadBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
