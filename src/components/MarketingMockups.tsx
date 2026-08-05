import Image from 'next/image';

const quickActions = [
  ['Post', 'fa-pen-to-square'],
  ['Photo', 'fa-image'],
  ['Bazaar', 'fa-store'],
  ['Event', 'fa-ticket'],
];

const storyItems = [
  ['Story', 'fa-plus'],
  ['Highlights', 'fa-star'],
  ['Friends', 'fa-user-group'],
  ['Local', 'fa-location-dot'],
];

const navItems = [
  ['Home', 'fa-house'],
  ['Hamro TV', 'fa-tv'],
  ['Bazaar', 'fa-store'],
  ['Community', 'fa-users'],
  ['Profile', 'fa-user'],
];

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-4 py-2.5 text-[11px] font-extrabold text-[#071632]">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <i className="fa-solid fa-signal text-[10px]" />
        <i className="fa-solid fa-wifi text-[10px]" />
        <i className="fa-solid fa-battery-three-quarters text-[12px]" />
      </div>
    </div>
  );
}

function AppHeader() {
  return (
    <div className="flex items-center justify-between px-4 pb-3">
      <div className="flex items-center gap-3">
        <Image src="/assets/logo.png" alt="uNepal logo" width={32} height={32} className="rounded-xl" />
        <div>
          <p className="text-sm font-extrabold leading-none text-brand-primary">uNepal</p>
          <p className="mt-1 text-[10px] font-bold text-[#65676B]">Hamro Social Network</p>
        </div>
      </div>
      <div className="flex gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF2F4] text-brand-primary">
          <i className="fa-solid fa-magnifying-glass text-sm" />
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand-primary">
          <i className="fa-regular fa-message text-sm" />
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F2F5FA] text-brand-blue">
          <i className="fa-regular fa-bell text-sm" />
        </span>
      </div>
    </div>
  );
}

function FeedCard() {
  return (
    <article className="mx-3 rounded-2xl border border-[#E4E6EB] bg-white p-3.5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F2F5FA] text-brand-blue">
          <i className="fa-solid fa-users" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-extrabold text-[#071632]">Community update</p>
          <p className="text-[11px] font-bold text-[#65676B]">Kathmandu - public</p>
        </div>
        <span className="rounded-full bg-[#FFF2F4] px-3 py-1 text-[10px] font-extrabold text-brand-primary">Live</span>
      </div>
      <p className="mt-3 text-sm font-semibold leading-6 text-[#1C1E21]">
        Looking for trusted rooms, jobs, events, and local services nearby?
      </p>
      <div className="mt-3 grid grid-cols-3 gap-2 border-t border-[#E4E6EB] pt-3 text-center text-[11px] font-extrabold text-[#65676B]">
        <span><i className="fa-regular fa-heart mr-1 text-brand-primary" />Like</span>
        <span><i className="fa-regular fa-comment mr-1 text-brand-blue" />Comment</span>
        <span><i className="fa-regular fa-paper-plane mr-1" />Share</span>
      </div>
    </article>
  );
}

function MainPhone() {
  return (
    <div className="relative mx-auto w-[min(100%,330px)] rounded-[2.25rem] bg-white p-[7px] shadow-[0_34px_90px_-46px_rgba(7,22,50,0.52),inset_0_0_0_1px_rgba(7,22,50,0.06)] sm:w-[min(100%,365px)] sm:rounded-[2.45rem] sm:p-2">
      <div className="absolute left-1/2 top-2 z-20 h-1 w-16 -translate-x-1/2 rounded-full bg-[#D7DAE2]" />
      <div className="relative overflow-hidden rounded-[1.85rem] border border-[#E4E6EB] bg-[#F3F4F6] sm:rounded-[2rem]">
        <StatusBar />
        <AppHeader />
        <div className="mx-3 mb-2 grid grid-cols-4 gap-2">
          {storyItems.map(([label, icon], index) => (
            <div key={label} className="flex min-w-[64px] flex-col items-center justify-center rounded-2xl bg-white px-2 py-2 text-center shadow-sm">
              <div className={`flex h-9 w-9 items-center justify-center rounded-full border-2 ${index === 0 ? 'border-brand-primary bg-[#FFF2F4] text-brand-primary' : 'border-[#E4E6EB] bg-[#F8FAFC] text-[#8A94A6]'}`}>
                <i className={`fa-solid ${icon} text-[11px]`} />
              </div>
              <p className="mt-1 w-full truncate text-center text-[9px] font-extrabold leading-none text-[#65676B]">{label}</p>
            </div>
          ))}
        </div>
        <div className="mx-3 rounded-2xl bg-white p-2.5 shadow-sm">
          <div className="flex items-center gap-3">
            <Image src="/assets/favicon.png" alt="" width={30} height={30} className="rounded-xl" />
            <div className="flex-1 rounded-full bg-[#F3F4F6] px-3 py-2.5 text-xs font-bold text-[#65676B]">
              What do you want to share?
            </div>
          </div>
        </div>

        <div className="mx-3 mt-2.5 grid grid-cols-4 gap-2">
          {quickActions.map(([label, icon]) => (
            <div key={label} className="flex min-h-[72px] min-w-0 flex-col items-center justify-center rounded-2xl bg-white p-2 text-center shadow-sm sm:min-h-[78px] sm:p-2.5">
              <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-xl bg-[#FFF2F4] text-brand-primary sm:h-8 sm:w-8">
                <i className={`fa-solid ${icon} text-sm`} />
              </div>
              <p className="mt-2 w-full truncate text-center text-[9px] font-extrabold leading-none text-[#071632] sm:text-[11px]">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-2.5 grid gap-2.5 pb-2.5">
          <FeedCard />
          <article className="mx-3 rounded-2xl border border-[#E4E6EB] bg-white p-3.5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-extrabold text-[#071632]">Bazaar listing</p>
                <p className="text-[11px] font-bold text-[#65676B]">Today near you</p>
              </div>
              <span className="rounded-full bg-[#F2F5FA] px-3 py-1 text-[10px] font-extrabold text-brand-blue">Bazaar</span>
            </div>
            <div className="mt-3 grid grid-cols-[48px_1fr] gap-3 sm:grid-cols-[58px_1fr]">
              <div className="rounded-xl bg-[#FFF2F4] p-3 text-center text-brand-primary">
                <i className="fa-solid fa-couch text-lg" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-[#071632]">Room, rides, jobs, and items</p>
                <p className="mt-1 text-[11px] font-bold text-[#65676B]">Organized by place and intent</p>
              </div>
            </div>
          </article>
        </div>

        <div className="grid grid-cols-5 border-t border-[#E4E6EB] bg-white px-1 py-2">
          {navItems.map(([label, icon], index) => (
            <div key={label} className={`min-w-0 text-center text-[7px] font-extrabold sm:text-[9px] ${index === 0 ? 'text-brand-primary' : 'text-[#65676B]'}`}>
              <i className={`fa-solid ${icon} block text-[12px] sm:text-sm`} />
              <span className="mt-1 block truncate leading-none">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AppCard({
  title,
  detail,
  icon,
  className,
}: {
  title: string;
  detail: string;
  icon: string;
  className: string;
}) {
  return (
    <div className={`absolute hidden w-[180px] rounded-2xl border border-[#E4E6EB] bg-white/95 p-4 shadow-[0_18px_46px_-32px_rgba(7,22,50,0.45)] backdrop-blur lg:block ${className}`}>
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF2F4] text-brand-primary">
          <i className={`fa-solid ${icon}`} />
        </span>
        <div>
          <p className="text-sm font-extrabold text-[#071632]">{title}</p>
          <p className="mt-0.5 text-xs font-bold leading-5 text-[#65676B]">{detail}</p>
        </div>
      </div>
    </div>
  );
}

export function HeroProductMockup() {
  return (
    <div className="hero-mockup relative mx-auto flex min-h-[400px] w-full max-w-[660px] items-start justify-center pt-1 sm:min-h-[610px] sm:items-center sm:pt-0 lg:min-h-[650px]">
      <div className="absolute inset-x-8 bottom-12 top-12 hidden rounded-[3rem] border border-[#E4E6EB] bg-white/60 shadow-[0_30px_80px_-70px_rgba(7,22,50,0.55)] sm:block" />
      <div className="absolute h-[72%] w-[72%] rounded-full bg-brand-primary/10 blur-3xl" />
      <div className="absolute bottom-10 right-12 h-[58%] w-[58%] rounded-full bg-brand-blue/10 blur-3xl" />

      <AppCard title="Community" detail="Groups, pages, posts" icon="fa-users" className="left-4 top-24 -rotate-3" />
      <AppCard title="Bazaar" detail="Items and services" icon="fa-store" className="right-2 top-28 rotate-3" />
      <AppCard title="Housing" detail="Rooms and rentals" icon="fa-house" className="right-14 bottom-24 -rotate-2" />
      <AppCard title="Jobs" detail="Community hiring" icon="fa-briefcase" className="left-[-4px] top-[310px] rotate-2" />
      <AppCard title="Hamro TV" detail="Videos and reels" icon="fa-tv" className="left-10 bottom-24 rotate-2" />

      <MainPhone />
    </div>
  );
}

export function CompactProductMockup() {
  return (
    <div className="mx-auto w-full max-w-[360px] rounded-[2.3rem] border border-[#E4E6EB] bg-white p-2 shadow-[0_28px_70px_-42px_rgba(7,22,50,0.45)]">
      <div className="overflow-hidden rounded-[1.9rem] bg-[#F3F4F6] text-[#071632]">
        <StatusBar />
        <AppHeader />
        <div className="grid gap-3 px-4 pb-4">
          {[
            ['Community', 'Posts, groups, pages', 'fa-users'],
            ['Bazaar', 'Housing, jobs, items', 'fa-store'],
            ['Local discovery', 'Events, media, services', 'fa-location-dot'],
          ].map(([title, detail, icon]) => (
            <div key={title} className="rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF2F4] text-brand-primary">
                  <i className={`fa-solid ${icon}`} />
                </span>
                <div>
                  <p className="text-sm font-extrabold">{title}</p>
                  <p className="text-xs font-bold text-[#65676B]">{detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
