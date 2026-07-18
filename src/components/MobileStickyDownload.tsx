'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import SmartDownloadLink from './SmartDownloadLink';

export default function MobileStickyDownload() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 560);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="mobile-sticky-download" className={`fixed inset-x-0 bottom-0 z-50 p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] transition-transform duration-200 lg:hidden ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="mx-auto flex max-w-[28rem] items-center gap-3 rounded-2xl border border-[#E4E6EB] bg-white/96 p-2 shadow-[0_-14px_34px_-26px_rgba(7,22,50,0.65)] backdrop-blur-xl">
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl bg-white shadow-sm">
            <Image src="/assets/logo.png" alt="uNepal logo" fill className="object-contain" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-extrabold leading-tight text-[#071632]">Download uNepal</p>
          <p className="mt-0.5 truncate text-[10px] font-bold text-[#65676B]">Free on iOS and Android</p>
        </div>
        <SmartDownloadLink className="inline-flex h-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary px-4 text-sm font-extrabold text-white shadow-[0_12px_26px_-18px_rgba(230,0,35,0.85)]">
          Get app
        </SmartDownloadLink>
      </div>
    </div>
  );
}
