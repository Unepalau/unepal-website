import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Business from '@/components/Business';
import DownloadCTA from '@/components/DownloadCTA';
import Contact from '@/components/Contact';
import ProductShowcase from '@/components/ProductShowcase';
import TrustSafety from '@/components/TrustSafety';
import AppExperienceShowcase from '@/components/AppExperienceShowcase';
import MobileStickyDownload from '@/components/MobileStickyDownload';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'uNepal',
    operatingSystem: 'iOS, Android',
    applicationCategory: 'SocialNetworkingApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'AUD',
    },
    description: 'uNepal is Hamro Social Network for Nepalese everywhere - bringing posts, groups, pages, Bazaar, Hamro TV, events, business discovery, messaging, and local community updates into one app.',
    image: 'https://www.unepal.com/assets/hero-mockup.jpg',
  };

  return (
    <>
      {/* Structured Data for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <main className="pb-20 lg:pb-0">
        <Hero />
        <AppExperienceShowcase />
        <ProductShowcase />
        <Business />
        <TrustSafety />
        <DownloadCTA />
        <Contact />
      </main>

      <MobileStickyDownload />

      <Footer />
    </>
  );
}
