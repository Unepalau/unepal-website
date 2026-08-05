const countries = [
  ['🇳🇵', 'Nepal'],
  ['🇦🇺', 'Australia'],
  ['🇺🇸', 'USA'],
  ['🇬🇧', 'UK'],
  ['🇨🇦', 'Canada'],
  ['🇯🇵', 'Japan'],
  ['🇰🇷', 'South Korea'],
  ['🇦🇪', 'UAE'],
];

export default function Ticker() {
  return (
    <section className="relative z-10 border-y border-[#E4E6EB] bg-white py-8 sm:py-10">
      <div className="container mx-auto grid items-center gap-6 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-brand-primary">Nepal and beyond</p>
          <h2 className="mt-2 text-2xl font-extrabold text-[#071632] sm:text-3xl">
            Built for Nepalese communities across Nepal and around the world.
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 lg:justify-end" aria-label="Places where uNepal is useful">
          {countries.map(([flag, name]) => (
            <span key={name} className="inline-flex items-center gap-2 rounded-lg border border-[#E4E6EB] bg-[#F3F4F6] px-3 py-2 text-sm font-extrabold text-[#1C1E21]">
              <span aria-hidden="true" className="text-base leading-none">
                {flag}
              </span>
              {name}
            </span>
          ))}
          <span className="inline-flex items-center gap-2 rounded-lg bg-[#071632] px-4 py-2 text-sm font-extrabold text-white">
            <i className="fa-solid fa-earth-asia text-brand-primary" />
            Growing community
          </span>
        </div>
      </div>
    </section>
  );
}
