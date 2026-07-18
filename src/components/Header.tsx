"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  ['Features', '/#features'],
  ['Community', '/#community'],
  ['Bazaar', '/#bazaar'],
  ['Business', '/#business'],
  ['Contact', '/#contact'],
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      {isMenuOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-40 bg-[#071632]/50 backdrop-blur-sm lg:hidden"
        />
      )}
      <header
        id="header"
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          isScrolled
            ? 'border-[#E4E6EB] bg-white/94 py-2 shadow-[0_18px_44px_-36px_rgba(7,22,50,0.45)] backdrop-blur-xl'
            : 'border-transparent bg-white py-2 sm:py-3'
        }`}
      >
        {!isScrolled && (
          <div className="pointer-events-none absolute inset-x-0 top-full h-16 bg-gradient-to-b from-white via-white/80 to-white/0" />
        )}
        <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="logo-lockup" aria-label="uNepal home">
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl bg-white shadow-sm sm:h-10 sm:w-10">
              <Image src="/assets/logo.png" alt="uNepal logo" fill className="object-contain" />
            </div>
            <div className="logo-stack">
              <span className="text-lg font-extrabold leading-none text-brand-primary sm:text-xl">uNepal</span>
              <span className="mt-1 text-[10px] font-bold text-[#65676B] sm:text-[11px]">Hamro Social Network</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navItems.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="rounded-xl px-3 py-2 text-sm font-extrabold text-[#071632]/72 transition hover:bg-[#FFF2F4] hover:text-brand-primary"
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/download"
            className="hidden h-11 items-center justify-center rounded-xl bg-brand-primary px-5 text-sm font-extrabold text-white shadow-[0_14px_30px_-22px_rgba(230,0,35,0.9)] transition hover:bg-brand-blue lg:inline-flex"
          >
            Download App
          </Link>

          <button
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E4E6EB] bg-white text-[#071632] shadow-sm transition hover:bg-[#FFF2F4] focus:outline-none focus:ring-2 focus:ring-brand-primary/25 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full overflow-hidden border-t border-[#E4E6EB] bg-white shadow-2xl lg:hidden">
            <div className="container mx-auto grid gap-1 px-4 py-3">
              {navItems.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl border border-transparent px-3 py-2.5 text-sm font-extrabold text-[#071632] hover:border-[#E4E6EB] hover:bg-[#F8FAFC]"
                >
                  <span className="inline-flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-brand-primary" />
                    {label}
                  </span>
                  <i className="fa-solid fa-chevron-right text-[10px] text-[#65676B]" />
                </Link>
              ))}
              <Link
                href="/download"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-brand-primary px-4 text-sm font-extrabold text-white"
              >
                Download App
              </Link>
            </div>
          </div>
        )}
        </div>
      </header>
    </>
  );
}
