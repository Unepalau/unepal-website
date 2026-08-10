import Image from 'next/image';
import Icon from './Icon';

type FeatureSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  points: string[];
  tone?: 'white' | 'soft' | 'navy';
  reverse?: boolean;
};

export default function FeatureSection({ id, eyebrow, title, description, image, imageAlt, icon, points, tone = 'white', reverse = false }: FeatureSectionProps) {
  return (
    <section id={id} className={`section scroll-mt-20 overflow-hidden ${tone === 'soft' ? 'bg-[#F3F4F6]' : tone === 'navy' ? 'bg-[#071632] text-white' : 'bg-white'}`}>
      <div className={`site-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <div>
          <span className={`eyebrow ${tone === 'navy' ? 'eyebrow--dark' : ''}`}>
            <Icon name={icon} className="h-4 w-4" />
            {eyebrow}
          </span>
          <h2 className={`mt-6 max-w-xl font-display text-[2.55rem] font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-6xl ${tone === 'navy' ? 'text-white' : 'text-[#071632]'}`}>{title}</h2>
          <p className={`mt-6 max-w-xl text-base font-medium leading-8 sm:text-lg ${tone === 'navy' ? 'text-white/66' : 'text-[#65676B]'}`}>{description}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2" aria-label={`${eyebrow} highlights`}>
            {points.map((point) => (
              <li key={point} className={`flex items-center gap-3 rounded-[16px] border px-4 py-3 text-sm font-bold ${tone === 'navy' ? 'border-white/10 bg-white/[.06] text-white/82' : 'border-[#E4E6EB] bg-white text-[#1C1E21]'}`}>
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#E60023]" />{point}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className={`absolute -inset-5 -z-10 rounded-[40px] ${tone === 'navy' ? 'bg-[#0B4EA2]/35' : 'bg-[#F2F5FA]'}`} />
          <div className="relative overflow-hidden rounded-[30px] border border-white/60 bg-white shadow-[0_28px_70px_rgba(7,22,50,.16)]">
            <Image src={image} alt={imageAlt} width={900} height={1100} sizes="(max-width: 1024px) 100vw, 50vw" className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
