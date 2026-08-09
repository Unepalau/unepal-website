import Image from 'next/image';
import Link from 'next/link';
import { ANDROID_PLAY_STORE_URL } from '@/lib/storeLinks';
import AppScreen from './AppScreen';

export default function Hero() {
  return (
    <section className="hero-section overflow-hidden bg-white pt-[7.25rem] sm:pt-[8.5rem]">
      <div className="site-shell grid min-h-[calc(100vh-5rem)] items-center gap-10 pb-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12 lg:pb-20">
        <div className="relative z-10 py-8 lg:py-16">
          <span className="eyebrow">The app for Nepalese life</span>
          <h1 className="mt-6 max-w-[12ch] font-display text-[3.5rem] font-extrabold leading-[0.91] tracking-[-0.065em] text-[#071632] sm:text-7xl lg:text-[5.4rem]">
            Nepalese people, <span className="text-[#E60023]">closer.</span>
          </h1>
          <p className="mt-5 max-w-xl text-[15px] font-medium leading-7 text-[#65676B] sm:mt-7 sm:text-xl sm:leading-9">
            Posts, community, Bazaar, Hamro TV, events, businesses—and everyday connection for Nepalese people.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-2.5 sm:mt-9 sm:flex sm:gap-3">
            <a href={ANDROID_PLAY_STORE_URL} aria-label="Get uNepal for Android" className="button button--red justify-center px-3 sm:justify-start sm:px-5"><span className="sm:hidden">Get Android</span><span className="hidden sm:inline">Get uNepal for Android</span></a>
            <Link href="/download" className="button button--outline justify-center px-3 sm:justify-start sm:px-5"><span className="sm:hidden">iOS status</span><span className="hidden sm:inline">iOS availability</span></Link>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold text-[#65676B] sm:mt-7 sm:gap-x-5 sm:text-sm">
            <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#10B981] shadow-[0_0_0_5px_rgba(16,185,129,.12)]" />Android live</span>
            <span className="text-[#C9CDD4]" aria-hidden="true">•</span>
            <span>iOS in review</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Real uNepal app interface preview">
          <div className="hero-visual__halo" aria-hidden="true" />
          <AppScreen src="/assets/app-ui/home-feed.webp" alt="uNepal home feed shown inside a neutral device frame" className="hero-phone" priority />
          <div className="hero-crop hero-crop--community">
            <div className="hero-crop__label"><span className="h-2 w-2 rounded-full bg-[#E60023]" /> Community</div>
            <Image src="/assets/app-ui/community-post.webp" alt="Public uNepal community post interface" width={900} height={975} className="h-auto w-full" priority />
          </div>
          <div className="hero-crop hero-crop--bazaar">
            <div className="hero-crop__label"><span className="h-2 w-2 rounded-full bg-[#0B4EA2]" /> Bazaar</div>
            <Image src="/assets/app-ui/bazaar-listing.webp" alt="Public uNepal Bazaar listing interface" width={900} height={1108} className="h-auto w-full" priority />
          </div>
          <p className="absolute bottom-1 right-2 rounded-full border border-[#E4E6EB] bg-white/92 px-3 py-1.5 text-[11px] font-bold text-[#65676B] shadow-sm backdrop-blur">Captured from uNepal 5.0.5</p>
        </div>
      </div>
    </section>
  );
}
