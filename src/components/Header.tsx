"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ANDROID_PLAY_STORE_URL, IOS_APP_STORE_URL } from '@/lib/storeLinks';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="logo-lockup">
            <div className="relative w-[36px] h-[36px] mr-2">
              <Image src="/assets/logo.png" alt="uNepal logo" fill className="object-contain" />
            </div>
            <div className="logo-stack">
              <span className="logo-text">uNepal</span>
              <span className="logo-tagline">Hamro Social Network</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6" aria-label="Primary">
            <Link href="/#features" className="nav-link font-medium hover:text-brand-primary transition-colors">Features</Link>
            <Link href="/#explore" className="nav-link font-medium hover:text-brand-primary transition-colors">Explore</Link>
            <Link href="/#business" className="nav-link font-medium hover:text-brand-primary transition-colors">Business</Link>
            <Link href="/#contact" className="nav-link font-medium hover:text-brand-primary transition-colors">Contact</Link>
            <div className="header-store-links" aria-label="Download uNepal app">
              <a href={ANDROID_PLAY_STORE_URL}
                className="header-store-link header-store-link--android">
                <i className="fab fa-google-play header-store-link__icon"></i>
                <span className="header-store-link__text">
                  <span className="header-store-link__eyebrow">Get it on</span>
                  <span className="header-store-link__label">Google Play</span>
                </span>
              </a>
              <a href={IOS_APP_STORE_URL}
                className="header-store-link header-store-link--ios">
                <i className="fab fa-apple header-store-link__icon"></i>
                <span className="header-store-link__text">
                  <span className="header-store-link__eyebrow">Download on</span>
                  <span className="header-store-link__label">App Store</span>
                </span>
              </a>
            </div>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="lg:hidden p-4 bg-white/95 backdrop-blur-xl rounded-2xl absolute top-full left-4 right-4 mt-2 shadow-2xl border border-gray-100"
          >
            <div className="flex flex-col gap-2 text-right items-end w-full">
              <Link href="/#features" onClick={() => setIsMenuOpen(false)}
                className="nav-link w-full py-3 px-4 rounded-lg hover:bg-gray-50 text-gray-700 font-medium text-right">Features</Link>
              <Link href="/#explore" onClick={() => setIsMenuOpen(false)}
                className="nav-link w-full py-3 px-4 rounded-lg hover:bg-gray-50 text-gray-700 font-medium text-right">Explore</Link>
              <Link href="/#business" onClick={() => setIsMenuOpen(false)}
                className="nav-link w-full py-3 px-4 rounded-lg hover:bg-gray-50 text-gray-700 font-medium text-right">Business</Link>
              <Link href="/#contact" onClick={() => setIsMenuOpen(false)}
                className="nav-link w-full py-3 px-4 rounded-lg hover:bg-gray-50 text-gray-700 font-medium text-right">Contact</Link>

              <div className="flex flex-col w-full gap-3 mt-2">
                <a href={ANDROID_PLAY_STORE_URL}
                  className="store-badge store-badge--android store-badge--large w-full justify-center">
                  <i className="fab fa-google-play store-badge__icon"></i>
                  <span className="store-badge__text">
                    <span className="store-badge__eyebrow">Get it on</span>
                    <span className="store-badge__label">Google Play</span>
                  </span>
                </a>
                <a href={IOS_APP_STORE_URL}
                  className="store-badge store-badge--ios store-badge--large w-full justify-center">
                  <i className="fab fa-apple store-badge__icon"></i>
                  <span className="store-badge__text">
                    <span className="store-badge__eyebrow">Download on</span>
                    <span className="store-badge__label">App Store</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
