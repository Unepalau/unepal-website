import Image from 'next/image';
import Icon from './Icon';

const signals = [
  ['video', 'Hamro TV', 'Public video and reels'],
  ['notification', 'Events', 'Dates and public events'],
  ['business', 'Businesses', 'Local and wider discovery'],
];

export default function DiscoverGrid() {
  return (
    <section id="discover" className="section section--sm scroll-mt-20 bg-[#F7F4EE]" aria-labelledby="discover-title">
      <div className="site-shell">
        <div className="discover-motion">
          <Image src="/assets/brand-graphics/discovery-motion-banner.webp" alt="" fill sizes="(max-width: 1280px) 100vw, 1216px" className="object-cover" />
          <div className="discover-motion__copy">
            <span className="eyebrow eyebrow--dark">Discover</span>
            <h2 id="discover-title" className="mt-6 max-w-lg font-display text-[2.7rem] font-extrabold leading-[.96] tracking-[-0.055em] text-white sm:text-6xl">Useful parts, moving in one rhythm.</h2>
            <p className="mt-6 max-w-md text-base font-medium leading-8 text-white/66 sm:text-lg">Bazaar, Hamro TV, events, and businesses stay visually connected, so moving through uNepal feels simple.</p>
          </div>
        </div>

        <div className="signal-row" aria-label="uNepal discovery features">
          {signals.map(([icon, title, text]) => (
            <article key={title} className="signal-card">
              <span className="signal-card__icon"><Icon name={icon} className="h-6 w-6" /></span>
              <div><h3 className="font-display text-xl font-extrabold text-[#071632]">{title}</h3><p className="mt-1 text-sm font-medium leading-6 text-[#65676B]">{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
