import Image from 'next/image';
import Link from 'next/link';

const footerGroups = [
  {
    title: 'Product',
    links: [
      ['Home Feed', '/#features'],
      ['Hamro TV', '/#hamro-tv'],
      ['Bazaar', '/#bazaar'],
      ['Community', '/#community'],
      ['Business', '/#business'],
    ],
  },
  {
    title: 'Features',
    links: [
      ['Groups', '/#community-spaces'],
      ['Pages', '/#community-spaces'],
      ['Events', '/#events'],
      ['Messages', '/#features'],
      ['Search', '/#features'],
    ],
  },
  {
    title: 'Business',
    links: [
      ['Business Directory', '/#business'],
      ['Create Business', '/#profiles'],
      ['Create Page', '/#profiles'],
      ['Promote Services', '/#business'],
    ],
  },
  {
    title: 'Legal',
    links: [
      ['Privacy Policy', '/privacy'],
      ['Terms of Service', '/terms'],
      ['Community Guidelines', '/community'],
      ['Child Safety Standards', '/child-safety-standards'],
    ],
  },
  {
    title: 'Support',
    links: [
      ['Contact', '/#contact'],
      ['Safety Reports', '/#contact'],
      ['Help', 'mailto:hello@unepal.com'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#071632] pb-20 pt-10 text-white lg:pb-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-9 lg:grid-cols-[0.9fr_1.7fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative h-11 w-11 overflow-hidden rounded-xl bg-white">
                <Image src="/assets/logo.png" alt="uNepal" fill className="object-contain" />
              </span>
              <div>
                <span className="block text-2xl font-extrabold text-white">uNepal</span>
                <span className="text-sm font-bold text-white/74">Hamro Social Network for Nepalese everywhere.</span>
              </div>
            </Link>
            <p className="mt-5 max-w-md text-sm font-semibold leading-7 text-white/74">
              A social media and community platform for Nepalese everywhere, built around posts, groups, pages, Bazaar, Hamro TV, events, businesses, messaging, and local discovery.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {[
                ['Facebook', 'https://www.facebook.com/unepalsocialnetwork/', 'fa-facebook-f'],
                ['Instagram', 'https://www.instagram.com/unepalapp/', 'fa-instagram'],
                ['TikTok', 'https://www.tiktok.com/@unepalapp', 'fa-tiktok'],
              ].map(([label, href, icon]) => (
                <a key={label} href={href} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/8 text-white hover:bg-white/14" aria-label={label}>
                  <i className={`fa-brands ${icon}`} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h4 className="mb-4 text-xs font-extrabold uppercase tracking-[0.16em] text-white/64">{group.title}</h4>
                <ul className="space-y-3 text-sm font-bold text-white/78">
                  {group.links.map(([label, href]) => (
                    <li key={label}>
                      <Link href={href} className="transition-colors hover:text-white">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs font-semibold text-white/64 sm:text-sm md:flex-row md:items-center">
          <p>Built for Nepalese communities across Nepal and around the world.</p>
          <p>&copy; 2026 uNepal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
