import Image from 'next/image';
import Icon from './Icon';

export default function ConnectionSection() {
  return (
    <section className="section overflow-hidden bg-white" aria-labelledby="connection-title">
      <div className="site-shell">
        <div className="grid overflow-hidden rounded-[32px] bg-[#071632] lg:grid-cols-[.85fr_1.15fr]">
          <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-14">
            <span className="eyebrow eyebrow--dark"><Icon name="message" className="h-4 w-4" />Connection</span>
            <h2 id="connection-title" className="mt-6 max-w-xl font-display text-[2.55rem] font-extrabold leading-[.98] tracking-[-0.055em] text-white sm:text-6xl">Start with a place. Stay for the people.</h2>
            <p className="mt-6 max-w-lg text-base font-medium leading-8 text-white/66 sm:text-lg">Community posts, groups, pages, reactions, and replies help everyday conversations keep moving—without turning the website into a second app.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Groups', 'Pages', 'Reactions', 'Replies'].map((item) => <span key={item} className="rounded-full border border-white/12 bg-white/[.07] px-4 py-2 text-sm font-bold text-white/78">{item}</span>)}
            </div>
          </div>
          <div className="relative min-h-[34rem] overflow-hidden bg-[#E9EDF5]">
            <Image src="/assets/app-ui/groups-directory.webp" alt="Real uNepal groups and public community posts" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover object-top" />
            <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-[#071632] to-transparent lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
