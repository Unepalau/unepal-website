import Image from 'next/image';
import FadeIn from './FadeIn';

const marketTags = [
  ['Housing', 'fa-house'],
  ['Jobs', 'fa-briefcase'],
  ['Services', 'fa-handshake'],
  ['Items', 'fa-store'],
];

const mediaTags = [
  ['Videos', 'fa-play'],
  ['Reels', 'fa-clapperboard'],
  ['Events', 'fa-ticket'],
];

function ArtworkCard({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-[#E4E6EB] bg-white p-2 shadow-[0_34px_90px_-60px_rgba(7,22,50,0.48)] sm:p-3">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.35rem] bg-[#F8FAFC]">
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 54vw, 100vw" className="object-cover" />
        {children}
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <>
      <section id="bazaar" className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <FadeIn>
              <span className="inline-flex rounded-full bg-[#FFF2F4] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-primary">
                Bazaar and everyday needs
              </span>
              <h2 className="mt-5 max-w-2xl text-[2rem] font-extrabold leading-[1.09] text-[#071632] sm:text-[3.35rem]">
                Find rooms, jobs, services, and local needs through your community.
              </h2>
              <p className="mt-5 max-w-xl text-base font-semibold leading-8 text-[#65676B]">
                A local marketplace for the practical things people need every day.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {marketTags.map(([label, icon], index) => (
                  <span key={label} className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-extrabold ${index === 0 ? 'bg-brand-primary text-white' : 'bg-[#F3F4F6] text-[#071632]'}`}>
                    <i className={`fa-solid ${icon}`} />
                    {label}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <ArtworkCard src="/assets/section-marketplace-art.png" alt="uNepal marketplace artwork">
                <div className="absolute bottom-4 left-4 max-w-[24rem] rounded-2xl border border-white/80 bg-white/88 p-4 shadow-sm backdrop-blur">
                  <p className="text-xs font-extrabold uppercase text-brand-primary">Local discovery</p>
                  <p className="mt-1 text-base font-extrabold text-[#071632]">Rooms, jobs, services, and nearby items</p>
                </div>
              </ArtworkCard>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="hamro-tv" className="relative overflow-hidden bg-[#F8FAFC] py-14 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(230,0,35,0.08),transparent_26%),radial-gradient(circle_at_90%_30%,rgba(0,56,147,0.08),transparent_26%)]" />
        <div className="container relative mx-auto px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <FadeIn>
              <span className="inline-flex rounded-full bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-primary shadow-sm">
                Hamro TV
              </span>
              <h2 className="mt-5 max-w-2xl text-[2rem] font-extrabold leading-[1.09] text-[#071632] sm:text-[3.35rem]">
                Watch and discover videos on Hamro TV.
              </h2>
              <p className="mt-5 max-w-xl text-base font-semibold leading-8 text-[#65676B]">
                Videos, reels, and local stories presented with a more energetic media-first feel.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {mediaTags.map(([label, icon], index) => (
                  <span key={label} className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-extrabold ${index === 0 ? 'bg-brand-blue text-white' : 'bg-white text-[#071632]'}`}>
                    <i className={`fa-solid ${icon}`} />
                    {label}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <ArtworkCard src="/assets/section-media-art.png" alt="uNepal Hamro TV media artwork">
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 rounded-2xl border border-white/80 bg-white/88 p-4 shadow-sm backdrop-blur sm:left-auto sm:max-w-[26rem]">
                  <div>
                    <p className="text-xs font-extrabold uppercase text-brand-primary">Now playing</p>
                    <p className="mt-1 text-base font-extrabold text-[#071632]">Community videos and local moments</p>
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-primary text-white shadow-lg">
                    <i className="fa-solid fa-play" />
                  </span>
                </div>
              </ArtworkCard>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
