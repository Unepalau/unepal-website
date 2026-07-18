import Image from 'next/image';
import FadeIn from './FadeIn';

export default function Features() {
  return (
    <section id="community" className="bg-[#F3F4F6] py-16 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white bg-white p-2 shadow-[0_34px_90px_-60px_rgba(7,22,50,0.5)] sm:p-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.35rem] bg-[#F8FAFC]">
                <Image
                  src="/assets/section-social-art.png"
                  alt="uNepal social feed artwork"
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute left-4 top-4 rounded-full border border-white/75 bg-white/86 px-4 py-2 text-xs font-extrabold text-[#071632] shadow-sm backdrop-blur">
                  <i className="fa-solid fa-heart mr-2 text-brand-primary" />
                  Posts, stories, groups
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-primary shadow-sm">
              Social community
            </span>
            <h2 className="mt-5 max-w-2xl text-[2.25rem] font-extrabold leading-[1.07] text-[#071632] sm:text-[3.35rem]">
              A familiar social feed built for Nepalese community life.
            </h2>
            <p className="mt-5 max-w-xl text-base font-semibold leading-8 text-[#65676B]">
              Share posts, photos, stories, local updates, and conversations in one clean community feed.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
