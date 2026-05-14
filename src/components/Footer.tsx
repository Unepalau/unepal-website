import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
<footer className="bg-white border-t border-gray-100 pt-16 sm:pt-24 pb-24 lg:pb-12 text-slate-800">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="grid gap-12 lg:gap-16 grid-cols-1 md:grid-cols-12 mb-16">

        {/* Brand & Vision */}
        <div className="md:col-span-5 lg:col-span-4 space-y-6">
          <Link href="/" className="inline-flex items-center gap-3 mb-2">
            <Image src="/assets/logo.png" alt="uNepal" width={40} height={40} className="h-10 w-auto drop-shadow-sm object-contain" />
            <span className="text-2xl font-black text-brand-primary tracking-tight">uNepal</span>
          </Link>
          <p className="text-slate-600 leading-relaxed font-medium">
            A platform for community updates, local discovery, and everyday Nepali life.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Built for Nepalese communities across Nepal and the diaspora.
          </p>
        </div>

        {/* Links Grid */}
        <div className="md:col-span-7 lg:col-span-6 lg:col-start-6 grid grid-cols-2 sm:grid-cols-3 gap-8">

          <div>
            <h4 className="font-black text-slate-900 mb-5 text-sm uppercase tracking-widest text-brand-primary">Explore</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li><Link href="/#features" className="hover:text-brand-primary transition-colors">Features</Link></li>
              <li><Link href="/#business" className="hover:text-brand-primary transition-colors">Business Pages</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-5 text-sm uppercase tracking-widest text-brand-blue">Legal</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li><Link href="/privacy" className="hover:text-brand-blue transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-brand-blue transition-colors">Terms of Service</Link></li>
              <li><Link href="/community" className="hover:text-brand-blue transition-colors">Community Guidelines</Link></li>
              <li><Link href="/child-safety-standards" className="hover:text-brand-blue transition-colors">Child Safety
                  Standards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-5 text-sm uppercase tracking-widest text-orange-500">Connect</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li>
                <a href="mailto:hello@unepal.com"
                  className="hover:text-brand-primary transition-colors flex items-center gap-2 group">
                  <i className="fa-solid fa-envelope text-slate-300 group-hover:text-brand-primary transition-colors"></i>
                  Support
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/unepalapp"
                  className="hover:text-[#1877F2] transition-colors flex items-center gap-2 group">
                  <i className="fa-brands fa-facebook-f text-slate-300 group-hover:text-[#1877F2] transition-colors"></i>
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/unepalapp/"
                  className="hover:text-[#E4405F] transition-colors flex items-center gap-2 group">
                  <i className="fa-brands fa-instagram text-slate-300 group-hover:text-[#E4405F] transition-colors"></i>
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@unepalapp"
                  className="hover:text-black transition-colors flex items-center gap-2 group">
                  <i className="fa-brands fa-tiktok text-slate-300 group-hover:text-black transition-colors"></i> TikTok
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div
          className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
          Made with <i className="fa-solid fa-heart text-brand-primary animate-pulse mx-1"></i> for Nepal
          <div className="relative w-4 h-4 ml-1 sm:ml-2">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg" alt="Nepal Flag"
              fill className="object-contain" />
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 font-semibold">
          &copy; 2026 uNepal. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  );
}
