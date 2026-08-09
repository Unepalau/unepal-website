import Image from 'next/image';
import Link from 'next/link';

const links = [
  ['Privacy', '/privacy'],
  ['Terms', '/terms'],
  ['Community guidelines', '/community'],
  ['Child safety', '/child-safety-standards'],
  ['Support', '/#contact'],
];

export default function Footer() {
  return (
    <footer className="border-t border-[#071632]/8 bg-white py-9 text-[#071632]">
      <div className="site-shell grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-[14px] bg-white"><Image src="/assets/logo.png" alt="" width={42} height={42} className="object-contain" /></span>
          <div><span className="block font-display text-xl font-extrabold">uNepal</span><span className="text-xs font-semibold text-[#65676B]">Nepalese people, closer.</span></div>
        </Link>
        <div className="md:justify-self-end">
          <nav className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Footer navigation">{links.map(([label, href]) => <Link key={label} href={href} className="text-sm font-bold text-[#65676B] transition hover:text-[#E60023]">{label}</Link>)}</nav>
          <p className="mt-4 text-xs font-medium text-[#8A8D91] md:text-right">© 2026 uNepal. Built for Nepalese people in Nepal and around the world.</p>
        </div>
      </div>
    </footer>
  );
}
