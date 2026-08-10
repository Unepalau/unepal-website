import Link from 'next/link';
import { ANDROID_PLAY_STORE_URL, IOS_APP_STORE_URL } from '@/lib/storeLinks';
import Icon from './Icon';

export default function DownloadBand() {
  return (
    <section id="download" className="section bg-[#F7F4EE]">
      <div className="site-shell">
        <div className="download-stage">
          <div>
            <span className="eyebrow">Get the app</span>
            <h2 className="mt-6 max-w-3xl font-display text-[2.7rem] font-extrabold leading-[.96] tracking-[-0.055em] text-[#071632] sm:text-6xl">Your Nepalese life, ready when you are.</h2>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[#65676B] sm:text-lg">Choose your platform and take uNepal with you.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={ANDROID_PLAY_STORE_URL} className="button button--red">Get it on Google Play</a>
              <a href={IOS_APP_STORE_URL} className="button button--outline">View App Store listing</a>
            </div>
          </div>

          <div className="download-statuses" aria-label="App availability">
            <div className="download-status">
              <span className="download-status__icon"><Icon name="home" className="h-7 w-7" /></span>
              <div><strong>Google Play</strong><span>Download for Android</span></div>
            </div>
            <div className="download-status">
              <span className="download-status__icon"><Icon name="notification" className="h-7 w-7" /></span>
              <div><strong>App Store</strong><span>View the iPhone app</span></div>
            </div>
            <Link href="/download" className="text-center text-xs font-bold text-[#65676B] underline decoration-[#E60023]/25 underline-offset-4 hover:text-[#E60023]">See download options</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
