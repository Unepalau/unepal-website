import Icon from './Icon';

const items = [
  ['lock', 'Privacy controls', 'Settings and controls designed to help people manage their experience.'],
  ['community', 'Community standards', 'Clear expectations for respectful participation across public spaces.'],
  ['message', 'Human support', 'Direct routes for support, moderation, privacy, and safety concerns.'],
];

export default function TrustStrip() {
  return (
    <section id="safety" className="section section--sm scroll-mt-20 bg-white">
      <div className="site-shell">
        <div className="grid gap-5 border-y border-[#E4E6EB] py-10 md:grid-cols-3">
          {items.map(([icon, title, text]) => (
            <article key={title} className="flex gap-4 px-1 md:px-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[16px] bg-[#F2F5FA]"><Icon name={icon} className="h-5 w-5" /></span>
              <div><h3 className="font-display text-lg font-extrabold text-[#071632]">{title}</h3><p className="mt-1 text-sm font-medium leading-6 text-[#65676B]">{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
