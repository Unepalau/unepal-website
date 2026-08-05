import FadeIn from './FadeIn';
import SmartDownloadLink from './SmartDownloadLink';
import { CompactProductMockup } from './MarketingMockups';
import { ANDROID_PLAY_STORE_URL, IOS_APP_STORE_URL } from '@/lib/storeLinks';

export default function DownloadCTA() {
  return (
    <section id="download" className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(230,0,35,0.10),transparent_28%),radial-gradient(circle_at_82%_24%,rgba(0,56,147,0.09),transparent_30%)]" />
      <div className="container relative mx-auto px-4 sm:px-6">
        <FadeIn className="grid items-center gap-10 overflow-hidden rounded-[1.75rem] border border-[#E4E6EB] bg-white/88 p-5 shadow-[0_34px_90px_-60px_rgba(7,22,50,0.45)] backdrop-blur sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.64fr)] lg:p-10">
          <div className="max-w-3xl text-center lg:text-left">
            <span className="inline-flex rounded-full bg-[#FFF2F4] px-4 py-2 text-[12px] font-extrabold text-brand-primary">
              Free on iOS and Android
            </span>
            <h2 className="mt-5 max-w-3xl text-[2.25rem] font-extrabold leading-[1.08] text-[#071632] sm:text-[3.35rem]">
              Start using uNepal from wherever you are.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-8 text-[#65676B] lg:mx-0">
              Join Nepalese communities for posts, groups, Bazaar, Hamro TV, events, pages, businesses, and local discovery.
            </p>

            <div className="hero-cta-row mt-7 lg:justify-start">
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

            <SmartDownloadLink className="mt-4 inline-flex h-11 items-center justify-center rounded-xl border border-[#E4E6EB] bg-white px-5 text-sm font-extrabold text-[#071632] transition hover:bg-[#F3F4F6]">
              Download for this device
            </SmartDownloadLink>
          </div>

          <div className="mx-auto w-full max-w-[340px] lg:max-w-[360px]">
            <CompactProductMockup />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
