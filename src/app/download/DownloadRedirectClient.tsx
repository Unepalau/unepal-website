import Image from 'next/image';
import Link from 'next/link';
import { ANDROID_PLAY_STORE_URL, IOS_APP_STORE_URL } from '@/lib/storeLinks';

export default function DownloadRedirectClient() {
  return (
    <main className="min-h-screen bg-[#F3F4F6] px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-6xl overflow-hidden rounded-[30px] border border-[#E4E6EB] bg-white shadow-[0_24px_64px_rgba(7,22,50,.12)] lg:grid-cols-[.88fr_1.12fr]">
        <section className="flex flex-col justify-center p-7 sm:p-12 lg:p-14">
          <Link href="/" className="flex w-fit items-center gap-2.5" aria-label="Back to uNepal home">
            <Image src="/assets/logo.png" alt="" width={42} height={42} className="h-10 w-10 object-contain" />
            <span className="font-display text-2xl font-extrabold tracking-[-.04em] text-[#E60023]">uNepal</span>
          </Link>
          <span className="eyebrow mt-12">Version 5.0.5</span>
          <h1 className="mt-6 max-w-xl font-display text-[3rem] font-extrabold leading-[.94] tracking-[-.06em] text-[#071632] sm:text-6xl">Your Nepalese world, ready to go.</h1>
          <p className="mt-6 max-w-lg text-base font-medium leading-8 text-[#65676B] sm:text-lg">Community, Bazaar, Hamro TV, events, businesses, and everyday connection in one app.</p>

          <div className="mt-9 grid gap-4">
            <a href={ANDROID_PLAY_STORE_URL} className="rounded-[18px] border border-[#E60023] bg-[#FFF2F4] p-5 shadow-[0_8px_20px_rgba(7,22,50,.08)] transition hover:-translate-y-0.5">
              <span className="flex items-center justify-between gap-4"><span><span className="block text-xs font-extrabold uppercase tracking-[.11em] text-[#E60023]">Available now</span><span className="mt-1 block font-display text-xl font-extrabold text-[#071632]">Get it on Google Play</span></span><span className="text-2xl text-[#E60023]" aria-hidden="true">→</span></span>
            </a>
            <a href={IOS_APP_STORE_URL} className="rounded-[18px] border border-[#E4E6EB] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#0B4EA2] hover:bg-[#F2F5FA]">
              <span className="flex items-center justify-between gap-4"><span><span className="block text-xs font-extrabold uppercase tracking-[.11em] text-[#0B4EA2]">Waiting for Review</span><span className="mt-1 block font-display text-xl font-extrabold text-[#071632]">View App Store listing</span></span><span className="text-2xl text-[#0B4EA2]" aria-hidden="true">→</span></span>
              <span className="mt-2 block text-xs font-medium leading-5 text-[#65676B]">iOS 5.0.5 is not yet confirmed publicly live.</span>
            </a>
          </div>

          <Link href="/" className="mt-8 text-sm font-bold text-[#65676B] underline decoration-[#C9CDD4] underline-offset-4 hover:text-[#071632]">Return to the website</Link>
        </section>
        <section className="relative min-h-[36rem] overflow-hidden bg-[#071632] lg:min-h-0" aria-label="uNepal interface preview">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(11,78,162,.85),transparent_42%),radial-gradient(circle_at_15%_88%,rgba(230,0,35,.28),transparent_38%)]" />
          <div className="absolute left-1/2 top-12 w-[20rem] -translate-x-1/2 rotate-2 overflow-hidden rounded-[34px] border-[9px] border-[#111827] bg-white shadow-[0_36px_80px_rgba(0,0,0,.36)] sm:w-[24rem] lg:top-20">
            <Image src="/assets/app-ui/home-feed.webp" alt="Real uNepal home feed" width={720} height={1600} className="h-auto w-full" priority />
          </div>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/12 bg-[#071632]/80 px-4 py-2 text-xs font-bold text-white/72 backdrop-blur">Real uNepal 5.0.5 interface</p>
        </section>
      </div>
    </main>
  );
}
