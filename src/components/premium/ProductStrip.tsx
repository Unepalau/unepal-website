'use client';

import { useState } from 'react';
import Icon from './Icon';

const products = [
  { id: 'home', label: 'Home', icon: 'home', eyebrow: 'Your starting point', title: 'Everything opens from one familiar place.', text: 'Share a post, move into Bazaar, watch Hamro TV, or join a community without losing your place.' },
  { id: 'tv', label: 'Hamro TV', icon: 'video', eyebrow: 'Watch and discover', title: 'Nepalese video, given room to move.', text: 'Explore public video and reels through a focused visual experience inside uNepal.' },
  { id: 'bazaar', label: 'Bazaar', icon: 'bazaar', eyebrow: 'Find what is useful', title: 'Local needs and wider discovery, together.', text: 'Move between local, country, and global scope for listings, services, jobs, rentals, and open requests.' },
  { id: 'community', label: 'Community', icon: 'community', eyebrow: 'Conversation with context', title: 'Places for people to gather and participate.', text: 'Community posts, groups, and pages keep public conversation connected to the places that matter.' },
] as const;

const homeActions = [['send', 'Post'], ['bazaar', 'Bazaar'], ['video', 'Reel'], ['message', 'Blog']];

export default function ProductStrip() {
  const [activeId, setActiveId] = useState<(typeof products)[number]['id']>('home');
  const [scope, setScope] = useState('Local');
  const active = products.find((item) => item.id === activeId) ?? products[0];

  return (
    <section id="experience" className="section scroll-mt-20 bg-[#F7F4EE]" aria-labelledby="experience-title">
      <div className="site-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">A connected app</span>
          <h2 id="experience-title" className="mt-6 font-display text-[2.9rem] font-extrabold leading-[.94] tracking-[-.055em] text-[#071632] sm:text-6xl">One app. Every useful part connected.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-[#65676B] sm:text-lg">Posts, video, listings, events, and communities move through the same clear uNepal rhythm.</p>
        </div>

        <div className="product-studio mt-12">
          <div className="product-studio__tabs" role="tablist" aria-label="Explore the uNepal app">
            {products.map((item) => (
              <button key={item.id} type="button" role="tab" aria-selected={active.id === item.id} aria-controls="product-studio-panel" onClick={() => setActiveId(item.id)} className={`product-tab ${active.id === item.id ? 'product-tab--active' : ''}`}>
                <Icon name={item.icon} className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div id="product-studio-panel" role="tabpanel" className="product-studio__panel">
            <div className="product-studio__copy">
              <span className="text-xs font-extrabold uppercase tracking-[.14em] text-[#E60023]">{active.eyebrow}</span>
              <h3 className="mt-4 max-w-xl font-display text-4xl font-extrabold leading-[.98] tracking-[-.05em] text-[#071632] sm:text-5xl">{active.title}</h3>
              <p className="mt-5 max-w-lg text-base font-medium leading-8 text-[#65676B]">{active.text}</p>
              <a href="#download" className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#071632] underline decoration-[#E60023] decoration-2 underline-offset-8">Get uNepal <span aria-hidden="true">→</span></a>
            </div>

            <div className="product-widget" aria-live="polite">
              <div className="product-widget__bar">
                <span className="flex items-center gap-2 font-display text-lg font-extrabold text-[#071632]"><Icon name={active.icon} className="h-5 w-5" />{active.label}</span>
                <span className="rounded-full bg-[#FFF2F4] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[.1em] text-[#E60023]">Inside uNepal</span>
              </div>

              {active.id === 'home' ? (
                <div className="grid gap-4 p-5 sm:p-7">
                  <div className="rounded-[22px] bg-[#F3F4F6] p-5">
                    <p className="font-display text-2xl font-extrabold tracking-[-.04em] text-[#071632]">What would you like to do?</p>
                    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {homeActions.map(([icon, label]) => <button key={label} type="button" className="widget-action"><Icon name={icon} className="h-6 w-6" /><span>{label}</span></button>)}
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="widget-note"><Icon name="community" className="h-6 w-6" /><span><strong>Community</strong><small>Groups, pages, and public posts</small></span></div>
                    <div className="widget-note"><Icon name="business" className="h-6 w-6" /><span><strong>Discover</strong><small>Events and businesses</small></span></div>
                  </div>
                </div>
              ) : null}

              {active.id === 'tv' ? (
                <div className="p-5 sm:p-7">
                  <div className="media-widget">
                    <span className="media-widget__play"><Icon name="video" className="h-9 w-9" /></span>
                    <div><p className="font-display text-3xl font-extrabold text-white">Hamro TV</p><p className="mt-2 text-sm font-semibold text-white/62">Public video and reels in one visual space.</p></div>
                  </div>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#E4E6EB]"><div className="h-full w-2/5 rounded-full bg-[#E60023]" /></div>
                </div>
              ) : null}

              {active.id === 'bazaar' ? (
                <div className="grid gap-5 p-5 sm:p-7">
                  <label className="sr-only" htmlFor="bazaar-search">Search Bazaar</label>
                  <input id="bazaar-search" type="search" placeholder="Search listings, services, and jobs" className="h-14 rounded-[18px] border border-[#E4E6EB] bg-[#F7F4EE] px-5 text-sm font-semibold text-[#071632] outline-none focus:border-[#E60023] focus:ring-4 focus:ring-[#E60023]/10" />
                  <div className="grid grid-cols-3 gap-2 rounded-[18px] bg-[#F3F4F6] p-1.5" aria-label="Bazaar discovery scope">
                    {['Local', 'Country', 'Global'].map((item) => <button key={item} type="button" onClick={() => setScope(item)} className={`rounded-[14px] px-3 py-3 text-sm font-extrabold transition ${scope === item ? 'bg-white text-[#E60023] shadow-sm' : 'text-[#65676B]'}`}>{item}</button>)}
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {['Listings', 'Services', 'Open requests'].map((item) => <div key={item} className="widget-note"><Icon name="bazaar" className="h-5 w-5" /><strong>{item}</strong></div>)}
                  </div>
                </div>
              ) : null}

              {active.id === 'community' ? (
                <div className="grid gap-4 p-5 sm:p-7">
                  <div className="grid grid-cols-3 gap-2 rounded-[18px] bg-[#F3F4F6] p-1.5">
                    {['Community', 'Groups', 'Pages'].map((item, index) => <button key={item} type="button" className={`rounded-[14px] px-2 py-3 text-sm font-extrabold ${index === 0 ? 'bg-white text-[#E60023] shadow-sm' : 'text-[#65676B]'}`}>{item}</button>)}
                  </div>
                  <div className="widget-community">
                    <span className="widget-community__icon"><Icon name="community" className="h-7 w-7" /></span>
                    <div><p className="font-display text-2xl font-extrabold text-[#071632]">A place for meaningful participation.</p><p className="mt-2 text-sm font-medium leading-6 text-[#65676B]">Public posts, groups, pages, reactions, and replies—kept in one familiar rhythm.</p></div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
