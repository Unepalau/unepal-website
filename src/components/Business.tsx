import FadeIn from "./FadeIn";

const businesses = [
  ["Learning and tutoring", "Education and training", "fa-graduation-cap"],
  ["Local groceries", "Food and retail", "fa-basket-shopping"],
  ["Professional services", "Local services", "fa-briefcase"],
];

const actions = [
  ["Create Page", "fa-flag"],
  ["Create Business", "fa-building"],
  ["Business Directory", "fa-list"],
  ["Direct Messages", "fa-message"],
];

export default function Business() {
  return (
    <section id="business" className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
          <FadeIn className="min-w-0">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-[#E4E6EB] bg-[#F8FAFC] p-3 shadow-[0_34px_90px_-60px_rgba(7,22,50,0.48)] sm:p-4">
              <div className="absolute -left-16 top-10 h-52 w-52 rounded-full bg-brand-primary/10 blur-3xl" />
              <div className="absolute -right-16 bottom-4 h-56 w-56 rounded-full bg-brand-blue/10 blur-3xl" />
              <div className="relative rounded-[1.35rem] bg-white p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E4E6EB] pb-4">
                  <div className="min-w-0">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-primary">
                      Local directory
                    </p>
                    <p className="mt-1 text-xl font-extrabold text-[#071632]">
                      Business directory
                    </p>
                  </div>
                  <div className="flex max-w-full flex-wrap rounded-2xl bg-[#F3F4F6] p-1 text-xs font-extrabold text-[#65676B]">
                    <span className="rounded-xl bg-white px-3 py-2 text-brand-primary shadow-sm sm:px-4">
                      Area
                    </span>
                    <span className="px-3 py-2 sm:px-4">Category</span>
                    <span className="px-3 py-2 sm:px-4">Map</span>
                  </div>
                </div>

                <div className="mt-4 grid gap-3">
                  {businesses.map(([name, type, icon], index) => (
                    <article
                      key={name}
                      className="rounded-[1.25rem] border border-[#E4E6EB] bg-white p-4 shadow-[0_14px_30px_-28px_rgba(7,22,50,0.55)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_42px_-32px_rgba(7,22,50,0.5)]"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl ${index === 1 ? "bg-[#F2F5FA] text-brand-blue" : "bg-[#FFF2F4] text-brand-primary"}`}
                        >
                          <i className={`fa-solid ${icon} text-lg`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[1.02rem] font-extrabold text-[#071632]">
                            {name}
                          </p>
                          <p className="mt-1 text-sm font-semibold text-[#65676B]">
                            {type}
                          </p>
                          <p className="mt-1 text-xs font-bold text-[#65676B]">
                            Illustrative category
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="min-w-0">
            <span className="inline-flex rounded-full bg-[#FFF2F4] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-primary">
              Business Pages
            </span>
            <h2 className="mt-5 max-w-2xl text-[2rem] font-extrabold leading-[1.09] text-[#071632] sm:text-[3.35rem]">
              Pages and businesses that people can actually discover.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-[#65676B]">
              Create a page, list a business, share updates, receive messages,
              and make local services easier to find.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-2 sm:gap-3">
              {actions.map(([label, icon]) => (
                <div
                  key={label}
                  className="flex min-h-24 flex-col justify-between rounded-[1.15rem] border border-[#E4E6EB] bg-white p-3 font-extrabold text-[#071632] shadow-sm sm:min-h-0 sm:flex-row sm:items-center sm:justify-start sm:gap-3 sm:p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF2F4] text-brand-primary">
                    <i className={`fa-solid ${icon}`} />
                  </span>
                  <span className="text-sm leading-tight sm:text-base">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
