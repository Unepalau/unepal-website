'use client';

import Image from 'next/image';
import { useState } from 'react';
import Icon from './Icon';

const products = [
  {
    id: 'home',
    label: 'Home',
    icon: 'home',
    title: 'Your Nepalese world, in one feed.',
    text: 'Follow stories, share an update, and move straight into the parts of uNepal you use most.',
    image: '/assets/app-ui/home-composer.webp',
    alt: 'Real uNepal home composer and feed interface',
  },
  {
    id: 'tv',
    label: 'Hamro TV',
    icon: 'video',
    title: 'A living stream of Nepalese video.',
    text: 'Browse public video and reels from creators and communities in a fast visual grid.',
    image: '/assets/app-ui/hamro-tv-grid.webp',
    alt: 'Real uNepal Hamro TV interface',
  },
  {
    id: 'bazaar',
    label: 'Bazaar',
    icon: 'bazaar',
    title: 'Find what the community can offer.',
    text: 'Explore services, jobs, rentals, items, and open requests with local and global scope filters.',
    image: '/assets/app-ui/bazaar-listing.webp',
    alt: 'Real uNepal Bazaar listing interface',
  },
  {
    id: 'community',
    label: 'Community',
    icon: 'community',
    title: 'Local conversation with real context.',
    text: 'Move between community, groups, and pages without losing the place and people that matter.',
    image: '/assets/app-ui/community-post.webp',
    alt: 'Real uNepal community interface',
  },
];

export default function ProductStrip() {
  const [activeId, setActiveId] = useState('home');
  const active = products.find((item) => item.id === activeId) ?? products[0];

  return (
    <section className="section section--sm bg-white" aria-labelledby="product-strip-title">
      <div className="site-shell">
        <div className="overflow-hidden rounded-[28px] border border-[#E4E6EB] bg-[#F3F4F6] shadow-[0_16px_34px_rgba(7,22,50,.08)]">
          <div className="border-b border-[#E4E6EB] bg-white p-2 sm:p-3">
            <div className="grid grid-cols-4 gap-1" role="tablist" aria-label="Explore uNepal products">
              {products.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active.id === item.id}
                  aria-controls="product-panel"
                  onClick={() => setActiveId(item.id)}
                  className={`flex min-h-12 items-center justify-center gap-2 rounded-[14px] px-2 text-xs font-extrabold transition sm:text-sm ${active.id === item.id ? 'bg-[#FFF2F4] text-[#E60023]' : 'text-[#65676B] hover:bg-[#F3F4F6] hover:text-[#071632]'}`}
                >
                  <Icon name={item.icon} className="h-5 w-5" />
                  <span className="hidden min-[380px]:inline">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div id="product-panel" role="tabpanel" className="grid min-h-[31rem] lg:grid-cols-[0.72fr_1.28fr]">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <span className="eyebrow">Inside uNepal</span>
              <h2 id="product-strip-title" className="mt-5 max-w-lg font-display text-3xl font-extrabold leading-[1.03] tracking-[-0.045em] text-[#071632] sm:text-5xl">{active.title}</h2>
              <p className="mt-5 max-w-md text-base font-medium leading-7 text-[#65676B] sm:text-lg">{active.text}</p>
            </div>
            <div className="relative min-h-[24rem] overflow-hidden border-t border-[#E4E6EB] bg-[#E9EDF5] lg:border-l lg:border-t-0">
              <Image src={active.image} alt={active.alt} fill sizes="(max-width: 1024px) 100vw, 64vw" className="object-cover object-top transition duration-500" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#071632]/15 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
