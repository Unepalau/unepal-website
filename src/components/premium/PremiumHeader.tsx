'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navItems = [
  ['Community', '#community'],
  ['Bazaar', '#experience'],
  ['Discover', '#discover'],
  ['Safety', '#safety'],
];

export default function PremiumHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#071632]/8 bg-white/88 text-[#071632] shadow-[0_8px_30px_rgba(7,22,50,.06)] backdrop-blur-xl">
      <div className="site-shell flex h-[4.75rem] items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-2.5" aria-label="uNepal home">
          <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-white">
            <Image src="/assets/logo.png" alt="" width={42} height={42} className="h-10 w-10 object-contain" priority />
          </span>
          <span className="font-display text-[1.45rem] font-extrabold tracking-[-0.04em] text-[#E60023]">uNepal</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-bold text-[#65676B] transition hover:text-[#E60023]">{label}</a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Link href="/download" className="button button--red px-5 py-3 text-sm">Download the app</Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-[14px] border border-[#071632]/10 bg-[#F7F4EE] text-[#071632] sm:hidden"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#071632]/8 bg-white px-5 pb-6 pt-4 sm:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-[14px] px-4 py-3 text-base font-bold text-[#65676B] hover:bg-[#FFF2F4] hover:text-[#E60023]">{label}</a>
            ))}
            <Link href="/download" onClick={() => setOpen(false)} className="button button--red mt-3 justify-center py-3.5">Download the app</Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
