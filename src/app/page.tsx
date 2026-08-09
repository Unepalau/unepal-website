import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ConnectionSection from '@/components/premium/ConnectionSection';
import DiscoverGrid from '@/components/premium/DiscoverGrid';
import DownloadBand from '@/components/premium/DownloadBand';
import FeatureSection from '@/components/premium/FeatureSection';
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
        <FeatureSection
          id="community"
          eyebrow="Community"
          title="The local conversation, without the noise."
          description="uNepal brings public posts, groups, and pages into one familiar place—built around the communities Nepalese people already share."
          image="/assets/app-ui/community-post.webp"
          imageAlt="Real Bagmati community feed in uNepal"
          icon="community"
          points={['Local community spaces', 'Public groups and pages', 'Posts, reactions, and replies', 'Clear place context']}
          tone="navy"
        />
        <FeatureSection
          id="bazaar"
          eyebrow="Bazaar"
          title="Useful things, found through community."
          description="Search public listings, services, jobs, rentals, and open requests. Switch from local to wider discovery when you need to."
          image="/assets/app-ui/bazaar-listing.webp"
          imageAlt="Real uNepal Bazaar with public listing and scope filters"
          icon="bazaar"
          points={['Local, country, and global scope', 'Listings and open requests', 'Services, jobs, and rentals', 'Community-led discovery']}
          tone="white"
          reverse
        />
        <DiscoverGrid />
        <ConnectionSection />
        <TrustStrip />
        <DownloadBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
