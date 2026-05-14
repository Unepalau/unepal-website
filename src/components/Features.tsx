import Image from 'next/image';
import FadeIn from './FadeIn';

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-gray-50/50 overflow-hidden border-t border-gray-100">
      {/* Ambient glowing orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[5%] right-[-5%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(227,24,55,0.08)_0%,transparent_70%)] blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] left-[-8%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(24,90,227,0.08)_0%,transparent_70%)] blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-red-50 border border-red-100 text-brand-primary font-bold tracking-wider text-[10px] sm:text-xs uppercase mb-4 shadow-sm">
            Designed for Our Community
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Built for <span className="bg-gradient-to-r from-red-600 via-brand-primary to-brand-blue bg-clip-text text-transparent drop-shadow-sm">everyday community life</span> <i className="fa-solid fa-heart text-red-500 ml-1 animate-bounce"></i>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 mt-6 leading-relaxed max-w-2xl mx-auto">
            uNepal brings the best parts of your local community into one seamless, premium application.
          </p>
        </FadeIn>

        <div className="max-w-6xl mx-auto flex flex-col gap-24 mt-8">
          {/* Article 1: Community */}
          <FadeIn className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center group">
            <div className="order-1 relative flex justify-center perspective-1000">
              <div className="relative w-full max-w-[260px] mx-auto transition-transform duration-500 group-hover:scale-105 group-hover:rotate-y-12 aspect-[1/2]">
                <div className="absolute inset-0 bg-teal-200 rounded-full blur-[80px] opacity-30 -z-10 mt-10"></div>
                <Image src="/assets/Screenshots/community_screen.png" alt="Nepali community discussion"
                  fill sizes="260px"
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-[40px] border-[8px] border-white/80" />
                <div className="absolute -left-8 top-12 flex gap-2 z-10 animate-float-slow">
                  <span className="bg-white/90 backdrop-blur-md shadow-xl text-xs font-bold py-2 px-4 rounded-2xl text-teal-700 border border-teal-50">
                    <i className="fa-solid fa-comments mr-2"></i>Discussion
                  </span>
                </div>
                <div className="absolute -right-6 bottom-20 flex gap-2 z-10 animate-float-delayed">
                  <span className="bg-white/90 backdrop-blur-md shadow-xl text-xs font-bold py-2 px-4 rounded-2xl text-teal-700 border border-teal-50">
                    <i className="fa-solid fa-users mr-2"></i>Forums
                  </span>
                </div>
              </div>
            </div>
            <div className="order-2 lg:pr-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-teal-50 text-teal-700 text-sm font-bold mb-6 border border-teal-100 shadow-sm">
                <i className="fa-solid fa-users"></i>
                <span>Community</span>
              </div>
              <h3 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                Spaces that feel <span className="bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent">truly local.</span>
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
                Ask, share, and follow conversations in dedicated community spaces. Feel closer to your people wherever you are.
              </p>
              <ul className="space-y-5 text-base sm:text-lg text-gray-700 font-medium">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0 mt-0.5"><i className="fa-solid fa-check text-xs"></i></div>
                  <span>Forum-style threads with active voting and ranking.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0 mt-0.5"><i className="fa-solid fa-check text-xs"></i></div>
                  <span>Dedicated spaces for highly specific interests.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0 mt-0.5"><i className="fa-solid fa-check text-xs"></i></div>
                  <span>Country, state, and suburb-based local groups.</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Article 2: Bazaar */}
          <FadeIn className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center group">
            <div className="order-2 lg:order-1 lg:pl-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-orange-50 text-orange-600 text-sm font-bold mb-6 border border-orange-100 shadow-sm">
                <i className="fa-solid fa-store"></i>
                <span>Bazaar</span>
              </div>
              <h3 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                A marketplace built for <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">your community.</span>
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
                Buy, sell, and rent within your local Nepali community. Find rooms, jobs, and items with complete trust.
              </p>
              <ul className="space-y-5 text-base sm:text-lg text-gray-700 font-medium">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5"><i className="fa-solid fa-check text-xs"></i></div>
                  <span>High-quality marketplace and shop-style selling.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5"><i className="fa-solid fa-check text-xs"></i></div>
                  <span>Secure rentals, jobs, and professional services.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5"><i className="fa-solid fa-check text-xs"></i></div>
                  <span>Business pages to promote local discovery.</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative flex justify-center perspective-1000">
              <div className="relative w-full max-w-[260px] mx-auto transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-y-12 aspect-[1/2]">
                <div className="absolute inset-0 bg-orange-200 rounded-full blur-[80px] opacity-30 -z-10 mt-10"></div>
                <Image src="/assets/Screenshots/bazaar_screen.png" alt="Marketplace interaction"
                  fill sizes="260px"
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-[40px] border-[8px] border-white/80" />
                <div className="absolute -left-8 top-12 flex gap-2 z-10 animate-float-slow">
                  <span className="bg-white/90 backdrop-blur-md shadow-xl text-xs font-bold py-2 px-4 rounded-2xl text-orange-700 border border-orange-50">
                    <i className="fa-solid fa-cart-shopping mr-2"></i>Marketplace
                  </span>
                </div>
                <div className="absolute -right-6 bottom-20 flex gap-2 z-10 animate-float-delayed">
                  <span className="bg-white/90 backdrop-blur-md shadow-xl text-xs font-bold py-2 px-4 rounded-2xl text-orange-700 border border-orange-50">
                    <i className="fa-solid fa-house mr-2"></i>Real Estate
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Article 3: Explore */}
          <div id="explore" className="scroll-mt-28">
            <FadeIn className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center group">
              <div className="order-1 relative flex justify-center perspective-1000">
                <div className="relative w-full max-w-[260px] mx-auto transition-transform duration-500 group-hover:scale-105 group-hover:rotate-y-12 aspect-[1/2]">
                  <div className="absolute inset-0 bg-indigo-200 rounded-full blur-[80px] opacity-30 -z-10 mt-10"></div>
                  <Image src="/assets/Screenshots/explore_screen.png" alt="News and media content"
                    fill sizes="260px"
                    className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-[40px] border-[8px] border-white/80" />
                  <div className="absolute -left-8 top-12 flex gap-2 z-10 animate-float-slow">
                    <span className="bg-white/90 backdrop-blur-md shadow-xl text-xs font-bold py-2 px-4 rounded-2xl text-indigo-700 border border-indigo-50">
                      <i className="fa-solid fa-play mr-2"></i>Hamro TV
                    </span>
                  </div>
                  <div className="absolute -right-6 bottom-20 flex gap-2 z-10 animate-float-delayed">
                    <span className="bg-white/90 backdrop-blur-md shadow-xl text-xs font-bold py-2 px-4 rounded-2xl text-indigo-700 border border-indigo-50">
                      <i className="fa-solid fa-newspaper mr-2"></i>News
                    </span>
                  </div>
                </div>
              </div>
              <div className="order-2 lg:pr-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-600 text-sm font-bold mb-6 border border-indigo-100 shadow-sm">
                  <i className="fa-solid fa-compass"></i>
                  <span>Explore & Events</span>
                </div>
                <h3 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                  Events, festivals, and <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">fresh daily content.</span>
                </h3>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
                  Stay updated with Nepali events and gatherings happening in your city, plus live news and local culture.
                </p>
                <ul className="space-y-5 text-base sm:text-lg text-gray-700 font-medium">
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5"><i className="fa-solid fa-check text-xs"></i></div>
                    <span>Live news, events, and community festivals.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5"><i className="fa-solid fa-check text-xs"></i></div>
                    <span>Immersive short and long-form video player.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5"><i className="fa-solid fa-check text-xs"></i></div>
                    <span>Convenient daily info, calendars, and tools.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Safety Section inside Features */}
        <FadeIn className="max-w-6xl mx-auto mt-32 sm:mt-40">
          <div className="text-center mb-16 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-brand-blue mb-6 shadow-sm">
              <i className="fa-solid fa-shield-halved text-sm"></i>
              <span className="text-xs font-bold uppercase tracking-wider">Built on Trust</span>
            </span>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-gray-900 tracking-tight">
              Safety built-in for <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">real interactions.</span>
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Profiles, ratings, and active moderation help you connect with total confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
            <div className="bg-white/80 backdrop-blur-xl p-8 sm:p-10 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 text-yellow-600 flex items-center justify-center border border-yellow-100 text-2xl shadow-inner mb-6">
                <i className="fa-solid fa-star"></i>
              </div>
              <h4 className="text-2xl font-black text-gray-900 mb-3">User Ratings</h4>
              <p className="text-base text-gray-600 leading-relaxed">
                Community ratings help trustworthy members stand out in our marketplace.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl p-8 sm:p-10 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 text-brand-primary flex items-center justify-center border border-red-100 text-2xl shadow-inner mb-6">
                <i className="fa-solid fa-flag"></i>
              </div>
              <h4 className="text-2xl font-black text-gray-900 mb-3">Active Reporting</h4>
              <p className="text-base text-gray-600 leading-relaxed">
                Clear reporting paths and active moderation teams when something feels wrong.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl p-8 sm:p-10 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-brand-blue flex items-center justify-center border border-blue-100 text-2xl shadow-inner mb-6">
                <i className="fa-solid fa-user-check"></i>
              </div>
              <h4 className="text-2xl font-black text-gray-900 mb-3">Real Profiles</h4>
              <p className="text-base text-gray-600 leading-relaxed">
                A network built on real identities helps ensure safer, more meaningful interactions.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
