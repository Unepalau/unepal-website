import Image from 'next/image';
import { ANDROID_PLAY_STORE_URL } from '@/lib/storeLinks';
import Icon from './Icon';

const dockItems = [
  ['home', 'Home', '#experience'],
  ['video', 'Hamro TV', '#experience'],
  ['bazaar', 'Bazaar', '#experience'],
  ['community', 'Community', '#community'],
];

export default function Hero() {
  return (
    <section className="motion-hero overflow-hidden bg-[#071632] pt-[6.75rem] text-white sm:pt-[7.25rem]">
      <div className="site-shell relative grid min-h-[calc(100vh-6.75rem)] items-center gap-6 pb-36 lg:grid-cols-[0.96fr_1.04fr] lg:gap-0 lg:pb-40">
        <div className="relative z-10 py-12 lg:py-16">
          <span className="eyebrow eyebrow--dark">The app for Nepalese life</span>
          <h1 className="mt-7 font-display text-[3.55rem] font-extrabold leading-[0.91] tracking-[-0.06em] text-[#F7F4EE] sm:text-[4.1rem] lg:text-[4.15rem]">
            <span className="block">All of Nepalese life,</span>
            <span className="block text-[#E60023]">moving together.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base font-medium leading-8 text-white/66 sm:text-lg sm:leading-8">
            Posts, Community, Bazaar, Hamro TV, events, businesses, and everyday connection for Nepalese people.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={ANDROID_PLAY_STORE_URL} aria-label="Get uNepal for Android" className="button bg-[#F7F4EE] px-5 text-[#071632] shadow-[0_16px_36px_rgba(0,0,0,.28)] hover:bg-white">Get uNepal for Android</a>
          </div>
        </div>

        <div className="hero-art" aria-label="Graphic representation of uNepal Community, Bazaar, Hamro TV, and Events">
          <Image src="/assets/brand-graphics/hero-motion-objects.png" alt="" width={1200} height={900} priority className="h-auto w-full object-contain" />
          <span className="hero-feature-label hero-feature-label--community"><Icon name="community" className="h-4 w-4" />Community</span>
          <span className="hero-feature-label hero-feature-label--bazaar"><Icon name="bazaar" className="h-4 w-4" />Bazaar</span>
          <span className="hero-feature-label hero-feature-label--tv"><Icon name="video" className="h-4 w-4" />Hamro TV</span>
          <span className="hero-feature-label hero-feature-label--events"><Icon name="notification" className="h-4 w-4" />Events</span>
        </div>

        <div className="hero-dock" aria-label="Explore uNepal">
          <nav className="grid flex-1 grid-cols-4" aria-label="Product navigation">
            {dockItems.map(([icon, label, href], index) => (
              <a key={label} href={href} className={`hero-dock__item ${index === 0 ? 'hero-dock__item--active' : ''}`}>
                <Icon name={icon} className="h-5 w-5" />
                <span>{label}</span>
              </a>
            ))}
          </nav>
          <div className="hero-dock__status">
            <span><i className="status-dot status-dot--live" />Android 5.0.5 <strong>Live</strong></span>
            <span><i className="status-dot status-dot--review" />iOS 5.0.5 <strong>Waiting for Review</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
