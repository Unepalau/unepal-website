import FadeIn from './FadeIn';

const safetyItems = [
  ['Real profiles', 'Signals for people, pages, and businesses.', 'fa-user-check'],
  ['Reporting', 'Clear flows for content and messages.', 'fa-flag'],
  ['Moderation', 'Standards for healthier conversations.', 'fa-shield-halved'],
  ['Privacy', 'Controls for accounts and blocking.', 'fa-lock'],
];

export default function TrustSafety() {
  return (
    <section id="safety" className="bg-[#F3F4F6] py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn className="overflow-hidden rounded-[1.75rem] border border-[#E4E6EB] bg-white shadow-[0_34px_90px_-64px_rgba(7,22,50,0.45)]">
          <div className="grid gap-10 p-5 sm:p-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:p-10">
            <div>
              <span className="inline-flex rounded-full bg-[#F2F5FA] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-blue">
                Trust and safety
              </span>
              <h2 className="mt-5 max-w-xl text-[2.15rem] font-extrabold leading-[1.08] text-[#071632] sm:text-[3rem]">
                Practical controls for safer community spaces.
              </h2>
              <p className="mt-4 max-w-lg text-base font-semibold leading-7 text-[#65676B]">
                Trust features stay simple and understandable across members, pages, listings, and messages.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {safetyItems.map(([title, copy, icon], index) => (
                <article key={title} className="rounded-[1.15rem] border border-[#E4E6EB] bg-[#F8FAFC] p-3 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_20px_42px_-34px_rgba(7,22,50,0.5)] sm:p-4">
                  <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm sm:mb-4 sm:h-11 sm:w-11 ${index % 2 === 0 ? 'text-brand-primary' : 'text-brand-blue'}`}>
                    <i className={`fa-solid ${icon}`} />
                  </div>
                  <h3 className="text-sm font-extrabold text-[#071632] sm:text-base">{title}</h3>
                  <p className="mt-1 text-xs font-semibold leading-5 text-[#65676B] sm:mt-2 sm:text-sm sm:leading-6">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
