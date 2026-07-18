import FadeIn from './FadeIn';
import SmartDownloadLink from './SmartDownloadLink';
import { ANDROID_PLAY_STORE_URL, IOS_APP_STORE_URL } from '@/lib/storeLinks';
import { HeroProductMockup } from './MarketingMockups';

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#F8FAFC] pt-24 text-[#071632] sm:pt-28 lg:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_55%_at_14%_0%,rgba(255,55,82,0.18)_0%,rgba(255,155,170,0.11)_30%,rgba(255,255,255,0)_68%),radial-gradient(ellipse_76%_58%_at_88%_8%,rgba(0,80,190,0.14)_0%,rgba(125,166,230,0.09)_34%,rgba(255,255,255,0)_72%),radial-gradient(ellipse_80%_54%_at_50%_70%,rgba(255,255,255,0.82)_0%,rgba(248,250,252,0.46)_42%,rgba(255,255,255,0)_76%),linear-gradient(180deg,#FFFFFF_0%,#FAFBFF_44%,#FFF8FA_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-white via-white/80 to-transparent" />
      <div className="absolute left-1/2 top-32 -z-10 h-[38rem] w-[86rem] -translate-x-1/2 rounded-full bg-white/38 blur-[72px]" />

      <div className="container mx-auto px-4 pb-10 sm:px-6 sm:pb-16 lg:pb-20">
        <div className="mx-auto grid max-w-6xl gap-8">
          <FadeIn className="hero-copy mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E4E6EB] bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-primary shadow-sm">
              <i className="fa-solid fa-heart" />
              Hamro Social Network
            </span>

            <h1 className="hero-title mx-auto mt-5 max-w-5xl text-[2.35rem] font-extrabold leading-[1.02] tracking-normal text-[#071632] sm:mt-6 sm:text-6xl lg:text-[5.6rem]">
              uNepal is Hamro Social Network for Nepalese everywhere.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base font-semibold leading-7 text-[#65676B] sm:text-lg sm:leading-8">
              Connect with your community, share posts, discover local updates, find rooms, jobs, services, events, businesses, videos, and more in one app.
            </p>

            <div className="hero-cta-row mt-7 justify-center">
              <a href={ANDROID_PLAY_STORE_URL} className="hero-cta-badge store-badge store-badge--android store-badge--large justify-center">
                <i className="fab fa-google-play store-badge__icon" />
                <span className="store-badge__text">
                  <span className="store-badge__eyebrow">Get it on</span>
                  <span className="store-badge__label">Google Play</span>
                </span>
              </a>
              <a href={IOS_APP_STORE_URL} className="hero-cta-badge store-badge store-badge--ios store-badge--large justify-center">
                <i className="fab fa-apple store-badge__icon" />
                <span className="store-badge__text">
                  <span className="store-badge__eyebrow">Download on</span>
                  <span className="store-badge__label">App Store</span>
                </span>
              </a>
            </div>

            <SmartDownloadLink className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-[#E4E6EB] bg-white px-4 py-2 text-sm font-extrabold text-[#071632] shadow-sm hover:text-brand-primary">
              Explore features
              <i className="fa-solid fa-arrow-right text-xs" />
            </SmartDownloadLink>

            <p className="mt-4 text-sm font-bold text-[#65676B]">
              Built for Nepalese communities across Nepal and around the world.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mx-auto w-full max-w-5xl">
            <HeroProductMockup />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
