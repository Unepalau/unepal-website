import Image from 'next/image';
import Link from 'next/link';
import Icon from './Icon';

export default function ConnectionSection() {
  return (
    <section id="community" className="section section--sm scroll-mt-20 bg-white" aria-labelledby="connection-title">
      <div className="site-shell">
        <div className="community-banner">
          <Image src="/assets/brand-graphics/community-connection-banner.webp" alt="" fill sizes="(max-width: 1280px) 100vw, 1216px" className="object-cover" />
          <div className="community-banner__copy">
            <span className="eyebrow"><Icon name="community" className="h-4 w-4" />Community</span>
            <h2 id="connection-title" className="mt-6 max-w-xl font-display text-[2.7rem] font-extrabold leading-[.96] tracking-[-0.055em] text-[#071632] sm:text-6xl">Connection should feel human.</h2>
            <p className="mt-6 max-w-lg text-base font-medium leading-8 text-[#65676B] sm:text-lg">Public posts, groups, pages, reactions, and replies give Nepalese communities room to gather around the places and interests they share.</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {['Community posts', 'Groups', 'Pages', 'Reactions', 'Replies'].map((item) => <span key={item} className="rounded-full border border-[#071632]/8 bg-white/78 px-4 py-2 text-sm font-bold text-[#071632] backdrop-blur">{item}</span>)}
            </div>
            <Link href="/community" className="button button--red mt-8">Explore Community</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
