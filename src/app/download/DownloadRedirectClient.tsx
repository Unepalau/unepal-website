'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import {
  ANDROID_PLAY_STORE_URL,
  IOS_APP_STORE_URL,
  getDownloadDestination,
} from '@/lib/storeLinks';

export default function DownloadRedirectClient() {
  const destination = getDownloadDestination('');

  useEffect(() => {
    if (!destination) {
      return;
    }

    const redirectTimer = window.setTimeout(() => {
      window.location.replace(destination);
    }, 200);

    return () => window.clearTimeout(redirectTimer);
  }, [destination]);

  return (
    <div className="relative overflow-hidden rounded-[2.25rem] border border-white/80 bg-white/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.10)] backdrop-blur sm:p-10 lg:p-12">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(237,27,36,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(0,56,147,0.12),transparent_35%)]" />
      <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary/10 bg-brand-primary/5 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-brand-primary">
        App Download
      </span>
      <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
        Taking you to the right store.
      </h1>
      <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
        We detected your device and prepared the best download destination for uNepal.
        If the redirect does not open automatically, use one of the buttons below.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href={ANDROID_PLAY_STORE_URL}
          className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-black text-white transition-all hover:-translate-y-0.5 hover:bg-brand-primary"
        >
          Google Play
        </a>
        <a
          href={IOS_APP_STORE_URL}
          className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-black text-slate-900 transition-all hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue"
        >
          App Store
        </a>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 text-sm font-black text-slate-700 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white"
        >
          Go to Homepage
        </Link>
      </div>

      <p className="mt-6 text-sm font-semibold text-slate-500">
        Current destination:{' '}
        <span className="text-slate-700" suppressHydrationWarning>
          {destination || 'Choose a store'}
        </span>
      </p>
    </div>
  );
}
