import Link from 'next/link';
import { ANDROID_PLAY_STORE_URL, IOS_APP_STORE_URL } from '@/lib/storeLinks';
import Icon from './Icon';

export default function DownloadBand() {
  return (
    <section id="download" className="section bg-[#F7F4EE]">
      <div className="site-shell">
        <div className="download-stage">
          <div>
            <span className="eyebrow eyebrow--dark">uNepal 5.0.5</span>
            <h2 className="mt-6 max-w-3xl font-display text-[2.7rem] font-extrabold leading-[.96] tracking-[-0.055em] text-[#F7F4EE] sm:text-6xl">Your Nepalese life, ready when you are.</h2>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/64 sm:text-lg">Android 5.0.5 is live now. iOS 5.0.5 is currently Waiting for Review.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={ANDROID_PLAY_STORE_URL} className="button button--red">Get it on Google Play</a>
              <a href={IOS_APP_STORE_URL} className="button border border-white/15 bg-white/6 text-white hover:bg-white/10">View App Store listing</a>
            </div>
          </div>

          <div className="download-statuses" aria-label="App availability">
            <div className="download-status">
              <span className="download-status__icon"><Icon name="home" className="h-7 w-7" /></span>
              <div><strong>Android 5.0.5</strong><span><i className="status-dot status-dot--live" />Live</span></div>
            </div>
            <div className="download-status">
              <span className="download-status__icon"><Icon name="notification" className="h-7 w-7" /></span>
              <div><strong>iOS 5.0.5</strong><span><i className="status-dot status-dot--review" />Waiting for Review</span></div>
            </div>
            <Link href="/download" className="text-center text-xs font-bold text-white/54 underline decoration-white/20 underline-offset-4 hover:text-white">Download options and status</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
