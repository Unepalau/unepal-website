import Image from 'next/image';
import Icon from './Icon';

const cards = [
  { title: 'Hamro TV', text: 'Public video and reels in one fast visual feed.', image: '/assets/app-ui/hamro-tv.webp', alt: 'Real Hamro TV screen in uNepal', icon: 'video', className: 'lg:row-span-2' },
  { title: 'Nepali Calendar', text: 'Nepali dates and public events, close at hand.', image: '/assets/app-ui/calendar-event.webp', alt: 'Real Nepali Calendar and event screen in uNepal', icon: 'notification', className: '' },
  { title: 'Business Directory', text: 'Browse Nepalese businesses across local and global scopes.', image: '/assets/app-ui/business-directory.webp', alt: 'Real business directory screen in uNepal', icon: 'business', className: '' },
];

export default function DiscoverGrid() {
  return (
    <section id="discover" className="section scroll-mt-20 bg-[#F3F4F6]">
      <div className="site-shell">
        <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <span className="eyebrow">Discover</span>
            <h2 className="mt-6 max-w-2xl font-display text-[2.6rem] font-extrabold leading-[.98] tracking-[-0.055em] text-[#071632] sm:text-6xl">More of everyday Nepal, already inside.</h2>
          </div>
          <p className="max-w-2xl text-base font-medium leading-8 text-[#65676B] sm:text-lg lg:justify-self-end">Video, events, the Nepali calendar, and business discovery share one familiar visual system—so exploring feels effortless.</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:grid-rows-2">
          {cards.map((card) => (
            <article key={card.title} className={`discover-card group ${card.className}`}>
              <div className="relative min-h-[22rem] flex-1 overflow-hidden bg-white lg:min-h-0">
                <Image src={card.image} alt={card.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top transition duration-700 group-hover:scale-[1.018]" />
              </div>
              <div className="flex items-start gap-4 border-t border-[#E4E6EB] bg-white p-5 sm:p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] bg-[#FFF2F4]"><Icon name={card.icon} className="h-5 w-5" /></span>
                <div>
                  <h3 className="font-display text-xl font-extrabold tracking-[-0.03em] text-[#071632]">{card.title}</h3>
                  <p className="mt-1 text-sm font-medium leading-6 text-[#65676B]">{card.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
