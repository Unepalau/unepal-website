import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Ticker from '@/components/Ticker';
import Features from '@/components/Features';
import Business from '@/components/Business';
import DownloadCTA from '@/components/DownloadCTA';
import Contact from '@/components/Contact';
import Image from 'next/image';
import SmartDownloadLink from '@/components/SmartDownloadLink';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'uNepal',
    operatingSystem: 'iOS, Android',
    applicationCategory: 'SocialNetworkingApplication',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'AUD',
    },
    description: 'The all-in-one community app for housing, jobs, marketplace, events, messaging, local news, and culture for Nepalese worldwide.',
    image: 'https://www.unepal.com/assets/og-image.png',
  };

  return (
    <>
      {/* Structured Data for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <main>
        <Hero />
        <Ticker />
        <Features />
        <Business />
        <DownloadCTA />
        <Contact />
      </main>

      {/* Sticky Mobile Download Bar */}
      <div id="sticky-download-bar"
        className="fixed bottom-0 inset-x-0 z-50 p-4 transition-transform duration-500 translate-y-full lg:hidden">
        <div
          className="bg-white/95 backdrop-blur-xl rounded-2xl p-3 flex items-center justify-between gap-4 shadow-[0_-15px_50px_rgba(0,0,0,0.15)] border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image src="/assets/favicon.png" alt="uNepal App Icon" fill
                className="rounded-xl shadow-sm border border-gray-100 object-contain" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm leading-tight">uNepal App</h4>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">Free on iOS & Android</p>
            </div>
          </div>
          <SmartDownloadLink
            className="bg-gradient-to-r from-brand-blue to-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 whitespace-nowrap">
            Get App
          </SmartDownloadLink>
        </div>
      </div>

      <Footer />
    </>
  );
}
