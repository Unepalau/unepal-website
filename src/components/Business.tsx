import Image from 'next/image';
import FadeIn from './FadeIn';

export default function Business() {
  return (
    <section id="business" className="py-24 sm:py-32 relative overflow-hidden bg-slate-900 text-white">
      {/* Background with Dark Mode Aesthetics */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=2000')] mix-blend-overlay object-cover"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(0,86,210,0.2),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(227,24,55,0.15),transparent_40%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold tracking-wider text-[10px] sm:text-xs uppercase mb-4 shadow-sm">
            Pages & Business
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
            Discover <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Nepali-owned businesses</span> near you. <i className="fa-solid fa-store text-blue-400 ml-1"></i>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Support local by finding restaurants, services, and organisations directly on uNepal Pages.
          </p>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          <FadeIn>
            <article className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,86,210,0.15)] h-full flex flex-col">
              <div className="h-60 relative overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&q=80&w=900"
                  alt="Local business discovery" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                <div className="absolute left-6 bottom-6 flex flex-wrap gap-2">
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-lg border border-white/10">Directory</span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-lg border border-white/10">Local</span>
                </div>
              </div>
              <div className="p-8 flex-1">
                <div className="inline-flex items-center gap-2 text-red-400 font-bold text-sm mb-4">
                  <i className="fa-solid fa-store"></i> <span>Discover Pages</span>
                </div>
                <h3 className="text-2xl font-black mb-3 leading-tight">Find useful local businesses and organisations</h3>
                <p className="text-slate-400 leading-relaxed">Find businesses through search, Bazaar, and community activity effortlessly.</p>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.1}>
            <article className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,86,210,0.15)] h-full flex flex-col">
              <div className="h-60 relative overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=900"
                  alt="Page updates and posts" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                <div className="absolute left-6 bottom-6 flex flex-wrap gap-2">
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-lg border border-white/10">Follow</span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-lg border border-white/10">Updates</span>
                </div>
              </div>
              <div className="p-8 flex-1">
                <div className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm mb-4">
                  <i className="fa-solid fa-bullhorn"></i> <span>Follow Updates</span>
                </div>
                <h3 className="text-2xl font-black mb-3 leading-tight">Keep up with offers, posts, and announcements</h3>
                <p className="text-slate-400 leading-relaxed">Follow updates from local businesses to never miss out on community offers.</p>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.2}>
            <article className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,86,210,0.15)] h-full flex flex-col">
              <div className="h-60 relative overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=900"
                  alt="Direct messages with pages" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                <div className="absolute left-6 bottom-6 flex flex-wrap gap-2">
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-lg border border-white/10">Message</span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-lg border border-white/10">Contact</span>
                </div>
              </div>
              <div className="p-8 flex-1">
                <div className="inline-flex items-center gap-2 text-orange-400 font-bold text-sm mb-4">
                  <i className="fa-solid fa-comments"></i> <span>Connect Directly</span>
                </div>
                <h3 className="text-2xl font-black mb-3 leading-tight">Ask questions and reach out easily</h3>
                <p className="text-slate-400 leading-relaxed">Message businesses directly as soon as you find them without leaving the app.</p>
              </div>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
