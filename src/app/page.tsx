import EditorialLanding from '@/components/editorial/EditorialLanding';

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
      <EditorialLanding />
    </>
  );
}
