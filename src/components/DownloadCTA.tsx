import Image from 'next/image';
import FadeIn from './FadeIn';
import { ANDROID_PLAY_STORE_URL, IOS_APP_STORE_URL } from '@/lib/storeLinks';

export default function DownloadCTA() {
  return (
    <section id="download" className="py-20 sm:py-32 relative overflow-hidden bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn className="max-w-6xl mx-auto rounded-[3rem] bg-slate-900 overflow-hidden relative shadow-[0_30px_60px_rgba(0,0,0,0.15)] group">
          {/* Animated Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-brand-blue to-slate-900 opacity-95 z-0"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=2000')] mix-blend-overlay opacity-20 object-cover z-0 transition-transform duration-1000 group-hover:scale-105"></div>

          {/* Premium Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3"></div>

          <div className="relative z-10 p-12 sm:p-20 flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Content */}
            <div className="text-center lg:text-left flex-1 text-white max-w-2xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-bold tracking-widest uppercase mb-8 shadow-sm">
                <i className="fa-solid fa-rocket text-red-400"></i> Get the app free
              </span>
              <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tight leading-[1.1]">
                Join the network today.
              </h2>
              <p className="text-xl text-white/80 mb-12 font-medium leading-relaxed">
                A single unified platform for everyday Nepali life. Download now to connect with 10,000+ members worldwide.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href={ANDROID_PLAY_STORE_URL}
                  className="store-badge store-badge--android store-badge--large hover:ring-4 ring-offset-4 ring-offset-slate-900 hover:ring-red-500/40 transition-all hover:-translate-y-1 w-full sm:w-auto justify-center">
                  <i className="fab fa-google-play store-badge__icon"></i>
                  <span className="store-badge__text">
                    <span className="store-badge__eyebrow">Get it on</span>
                    <span className="store-badge__label">Google Play</span>
                  </span>
                </a>
                <a href={IOS_APP_STORE_URL}
                  className="store-badge store-badge--ios store-badge--large hover:ring-4 ring-offset-4 ring-offset-slate-900 hover:ring-blue-500/40 transition-all hover:-translate-y-1 w-full sm:w-auto justify-center">
                  <i className="fab fa-apple store-badge__icon"></i>
                  <span className="store-badge__text">
                    <span className="store-badge__eyebrow">Download on</span>
                    <span className="store-badge__label">App Store</span>
                  </span>
                </a>
              </div>
            </div>

            {/* Premium QR Code Card */}
            <div className="hidden lg:flex flex-col items-center gap-6 shrink-0 lg:mr-8 perspective-1000">
              <div className="p-6 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform rotate-y-[-10deg] rotate-x-[10deg] group-hover:rotate-0 transition-all duration-700">
                <div className="bg-white p-4 rounded-2xl relative w-40 h-40">
                  <Image src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://unepal.com.au"
                    alt="Download QR Code" fill sizes="160px"
                    className="rounded-xl group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-white/70 drop-shadow-sm">Scan to Download</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
