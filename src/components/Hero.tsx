import Image from 'next/image';
import FadeIn from './FadeIn';
import { ANDROID_PLAY_STORE_URL, IOS_APP_STORE_URL } from '@/lib/storeLinks';

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 sm:pt-32 pb-8 sm:pb-12 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      {/* Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-10%] w-[300px] sm:w-[500px] md:w-[900px] h-[300px] sm:h-[500px] md:h-[900px] bg-[radial-gradient(circle,rgba(227,24,55,0.12)_0%,transparent_70%)] blur-[60px] md:blur-[100px] animate-pulse-slow">
        </div>
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[250px] sm:w-[450px] md:w-[700px] h-[250px] sm:h-[450px] md:h-[700px] bg-[radial-gradient(circle,rgba(24,90,227,0.12)_0%,transparent_70%)] blur-[60px] md:blur-[100px] animate-pulse-slow">
        </div>
        {/* Stylized Nepal Map Watermark */}
        <svg
          className="absolute top-1/2 right-0 lg:right-20 w-[150px] sm:w-[300px] md:w-[600px] h-auto opacity-[0.03] text-red-600 transform -translate-y-1/2 rotate-[-5deg]"
          viewBox="0 0 100 80" fill="currentColor">
          <path d="M0,0 L70,35 L40,35 L90,80 L0,80 Z" style={{"display":"none"}} /> {/* Fallback */}
          <path d="M2,25 L40,5 L90,15 L98,40 L80,70 L30,65 L5,50 Z" /> {/* Abstract Map Shape */}
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Hero Content */}
          <FadeIn className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="hero-download-kicker flex items-center justify-center lg:justify-start gap-2 mb-6">
              <span
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-[11px] font-bold uppercase tracking-wider border border-brand-primary/20">
                <i className="fa-solid fa-earth-asia mr-1.5"></i> Connecting the Nepali Diaspora
              </span>
            </div>

            <h1
              className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8 text-gray-900 drop-shadow-sm max-w-2xl mx-auto lg:mx-0">
              The <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-red-500 to-brand-blue">Global
                Hub</span> for Nepalese.
            </h1>

            <p className="text-xl sm:text-3xl text-gray-900 font-extrabold mb-6 sm:mb-8 leading-tight">
              Your community, marketplace, and <span className="text-brand-blue">local discovery</span>—all in one premium
              app.
            </p>

            <p className="text-lg sm:text-xl text-gray-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Join the fastest-growing network bridging Nepali communities worldwide. From finding your next home to
              staying connected with local events.
            </p>

            <div className="hero-download-stack space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href={ANDROID_PLAY_STORE_URL}
                  className="store-badge store-badge--android store-badge--large">
                  <i className="fab fa-google-play store-badge__icon"></i>
                  <span className="store-badge__text">
                    <span className="store-badge__eyebrow">Get it on</span>
                    <span className="store-badge__label">Google Play</span>
                  </span>
                </a>
                <a href={IOS_APP_STORE_URL}
                  className="store-badge store-badge--ios store-badge--large">
                  <i className="fab fa-apple store-badge__icon"></i>
                  <span className="store-badge__text">
                    <span className="store-badge__eyebrow">Download on</span>
                    <span className="store-badge__label">App Store</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
              <div
                className="flex items-center gap-3 px-4 py-3 sm:py-2 bg-white/50 backdrop-blur-md border border-gray-100 rounded-2xl shadow-sm transition-all hover:shadow-md hover:scale-[1.02] cursor-default w-full sm:w-auto">
                <div
                  className="w-8 h-8 rounded-full bg-red-50 text-brand-primary flex items-center justify-center text-xs shrink-0">
                  <i className="fa-solid fa-users"></i></div>
                <div className="leading-none">
                  <p className="text-xs font-bold text-gray-900 uppercase tracking-wider">Verified Community</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Professional Network</p>
                </div>
              </div>
              <div
                className="flex items-center gap-3 px-4 py-3 sm:py-2 bg-white/50 backdrop-blur-md border border-gray-100 rounded-2xl shadow-sm transition-all hover:shadow-md hover:scale-[1.02] cursor-default w-full sm:w-auto">
                <div
                  className="w-8 h-8 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center text-xs shrink-0">
                  <i className="fa-solid fa-store"></i></div>
                <div className="leading-none">
                  <p className="text-xs font-bold text-gray-900 uppercase tracking-wider">Marketplace Hub</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Housing & Jobs</p>
                </div>
              </div>
              <div
                className="flex items-center gap-3 px-4 py-3 sm:py-2 bg-white/50 backdrop-blur-md border border-gray-100 rounded-2xl shadow-sm transition-all hover:shadow-md hover:scale-[1.02] cursor-default w-full sm:w-auto">
                <div
                  className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs shrink-0">
                  <i className="fa-solid fa-shield-halved"></i></div>
                <div className="leading-none">
                  <p className="text-xs font-bold text-gray-900 uppercase tracking-wider">Safe & Secure</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Privacy First</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Hero Visual (Social Cluster) */}
          <FadeIn className="w-full lg:w-1/2 relative perspective-1000" delay={0.2}>
            <div className="hero-cluster">
              {/* Central Phone */}
              <div
                className="relative w-[180px] h-[360px] sm:w-[320px] sm:h-[640px] mx-auto z-10 transition-all duration-300 hover:scale-[1.02]">
                <Image fill sizes="(max-width: 640px) 180px, 320px" className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                  src="/assets/Screenshots/hero_banner.png" alt="uNepal App Onboarding" priority />
              </div>

              {/* Floating Notification 1: Message */}
              <div
                className="absolute top-12 -left-6 lg:-left-20 z-30 animate-float-slow hidden md:flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-white max-w-[240px]"
                style={{"boxShadow":"0 10px 40px -10px rgba(0,0,0,0.15), 0 0 20px -5px rgba(227,24,55,0.05)"}}>
                <div
                  className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center text-lg shrink-0 shadow-inner">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="flex flex-col text-left overflow-hidden">
                  <span className="font-bold text-sm text-gray-900 border-b border-transparent">New Message</span>
                  <span className="text-xs text-gray-600 font-medium truncate">Sarita: Is the room still available?</span>
                </div>
              </div>

              {/* Floating Notification 2: Marketplace/Ride Share */}
              <div
                className="absolute bottom-24 -right-4 lg:-right-16 z-30 animate-float-delayed hidden md:flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-white max-w-[240px]"
                style={{"boxShadow":"0 10px 40px -10px rgba(0,0,0,0.15), 0 0 20px -5px rgba(24,90,227,0.05)"}}>
                <div
                  className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-[15px] shrink-0 shadow-inner">
                  <i className="fa-solid fa-car"></i>
                </div>
                <div className="flex flex-col text-left overflow-hidden">
                  <span className="font-bold text-sm text-gray-900 border-b border-transparent">Ride Share</span>
                  <span className="text-xs text-gray-600 font-medium truncate">Kathmandu &rarr; Pokhara • 2 Seats</span>
                </div>
              </div>

              {/* Floating Notification 3: Hamro TV */}
              <div
                className="absolute top-1/3 -right-8 lg:-right-24 z-30 animate-float-slow hidden md:flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-white max-w-[240px]"
                style={{"animationDuration":"8s","boxShadow":"0 10px 40px -10px rgba(0,0,0,0.15), 0 0 20px -5px rgba(0,0,0,0.05)"}}>
                <div
                  className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[13px] shrink-0 shadow-inner">
                  <i className="fa-solid fa-play ml-0.5"></i>
                </div>
                <div className="flex flex-col text-left overflow-hidden">
                  <span className="font-bold text-sm text-gray-900 border-b border-transparent">Hamro TV</span>
                  <span className="text-[11px] text-gray-600 font-medium truncate">Nepali New Year Parade <span
                      className="text-red-500 animate-pulse ml-0.5">🔴 Live</span></span>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
