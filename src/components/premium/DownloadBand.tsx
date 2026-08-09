import Link from 'next/link';
import { ANDROID_PLAY_STORE_URL, IOS_APP_STORE_URL } from '@/lib/storeLinks';

export default function DownloadBand() {
  return (
    <section id="download" className="section bg-[#F3F4F6]">
      <div className="site-shell">
        <div className="relative overflow-hidden rounded-[34px] bg-[#0B4EA2] px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
          <div className="download-band__glow" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="eyebrow eyebrow--dark">uNepal 5.0.5</span>
              <h2 className="mt-6 max-w-3xl font-display text-[2.7rem] font-extrabold leading-[.96] tracking-[-0.055em] text-white sm:text-6xl">Carry the whole Nepalese community with you.</h2>
              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/72 sm:text-lg">Android 5.0.5 is live now. iOS 5.0.5 is currently Waiting for Review.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href={ANDROID_PLAY_STORE_URL} className="button button--light min-w-56 justify-center">Get it on Google Play</a>
              <a href={IOS_APP_STORE_URL} className="button button--ghost min-w-56 justify-center">View App Store listing</a>
              <Link href="/download" className="text-center text-xs font-bold text-white/62 underline decoration-white/20 underline-offset-4 hover:text-white">Download options and status</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
