import Image from "next/image";
import FadeIn from "./FadeIn";

const pillars = [
  {
    id: "community-spaces",
    title: "Groups and Pages",
    detail: "Posts, communities, and local updates",
    icon: "fa-people-group",
  },
  {
    id: "profiles",
    title: "Profiles",
    detail: "People discovery, friends, and messaging",
    icon: "fa-user-group",
  },
  {
    id: "events",
    title: "Events",
    detail: "Gatherings, search, and local discovery",
    icon: "fa-ticket",
  },
  {
    id: undefined,
    title: "Nepali Calendar",
    detail: "Dates and community events in one place",
    icon: "fa-calendar-days",
  },
];

const panels = [
  {
    src: "/assets/section-social-art.png",
    alt: "uNepal social feed artwork",
    className: "left-0 top-16 w-[38%] -rotate-6 opacity-80",
  },
  {
    src: "/assets/section-community-art.png",
    alt: "uNepal community artwork",
    className: "right-0 top-10 w-[40%] rotate-6 opacity-80",
  },
  {
    src: "/assets/section-marketplace-art.png",
    alt: "uNepal Bazaar artwork",
    className: "left-[10%] bottom-2 w-[42%] rotate-3 opacity-90",
  },
  {
    src: "/assets/section-media-art.png",
    alt: "uNepal media artwork",
    className: "right-[9%] bottom-0 w-[42%] -rotate-3 opacity-90",
  },
];

export default function AppExperienceShowcase() {
  return (
    <section
      id="features"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#071632] py-14 text-white sm:py-20 lg:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(230,0,35,0.35),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(47,128,237,0.30),transparent_30%),linear-gradient(135deg,#071632_0%,#0A1C40_42%,#10172F_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-white/20" />
      <div className="absolute -left-28 top-20 -z-10 h-72 w-72 rounded-full bg-brand-primary/25 blur-3xl" />
      <div className="absolute -right-28 bottom-20 -z-10 h-80 w-80 rounded-full bg-brand-blue/35 blur-3xl" />

      <div
        id="community"
        className="container mx-auto scroll-mt-24 px-4 sm:px-6"
      >
        <FadeIn className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/80 backdrop-blur">
            One uNepal experience
          </span>
          <h2 className="mt-6 text-[2.25rem] font-extrabold leading-[1.04] sm:text-6xl lg:text-[5.2rem]">
            Everything feels connected, not scattered.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-semibold leading-8 text-white/68 sm:text-lg">
            uNepal brings social, community, Bazaar, business, events, and media
            into one app-style experience for Nepalese everywhere.
          </p>
        </FadeIn>

        <FadeIn
          delay={0.1}
          className="relative mx-auto mt-12 min-h-[560px] max-w-6xl sm:mt-16 lg:min-h-[650px]"
        >
          <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="absolute left-1/2 top-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

          {panels.map((panel) => (
            <div
              key={panel.src}
              className={`absolute hidden overflow-hidden rounded-[1.35rem] border border-white/15 bg-white/10 p-1 shadow-[0_35px_90px_-42px_rgba(0,0,0,0.72)] backdrop-blur md:block ${panel.className}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.05rem]">
                <Image
                  src={panel.src}
                  alt={panel.alt}
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}

          <div className="absolute left-1/2 top-1/2 z-20 w-[min(92vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/18 bg-white p-3 shadow-[0_44px_120px_-46px_rgba(0,0,0,0.82)]">
            <div className="relative overflow-hidden rounded-[1.55rem] bg-[#F8FAFC] p-4 text-[#071632] sm:p-5">
              <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-brand-primary/10 blur-3xl" />
              <div className="absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-brand-blue/10 blur-3xl" />

              <div className="relative rounded-[1.25rem] bg-white p-4 shadow-sm">
                <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#65676B]">
                  Illustrative app preview
                </p>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF2F4] text-brand-primary">
                    <i className="fa-solid fa-layer-group" />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold">One app experience</p>
                    <p className="mt-0.5 text-xs font-bold text-[#65676B]">
                      Connected tools for everyday community life
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative mt-4 grid grid-cols-2 gap-3">
                {pillars.map(({ id, title, detail, icon }, index) => (
                  <div
                    key={title}
                    id={id}
                    className="min-h-[128px] scroll-mt-28 rounded-[1.2rem] border border-[#E4E6EB] bg-white p-4 text-left shadow-sm"
                  >
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl ${index % 2 === 0 ? "bg-[#FFF2F4] text-brand-primary" : "bg-[#F2F5FA] text-brand-blue"}`}
                    >
                      <i className={`fa-solid ${icon}`} />
                    </span>
                    <p className="mt-4 text-sm font-extrabold text-[#071632]">
                      {title}
                    </p>
                    <p className="mt-1 text-[11px] font-semibold leading-4 text-[#65676B]">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
