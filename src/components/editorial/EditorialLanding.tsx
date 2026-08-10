'use client';

import Image from 'next/image';
import {
  AndroidLogo,
  AppleLogo,
  ArrowRight,
  CalendarBlank,
  ChatCircleText,
  Handbag,
  List,
  MagnifyingGlass,
  MapPin,
  Play,
  UsersThree,
  X,
} from '@phosphor-icons/react';
import { useState } from 'react';
import { ANDROID_PLAY_STORE_URL, IOS_APP_STORE_URL } from '@/lib/storeLinks';
import styles from './EditorialLanding.module.css';

const discoveryItems = [
  { id: 'places', label: 'Places', prompt: 'Find places across Nepal', Icon: MapPin, target: '#discover' },
  { id: 'community', label: 'Community', prompt: 'Find a community near you', Icon: UsersThree, target: '#community' },
  { id: 'videos', label: 'Videos', prompt: 'Watch stories from Nepal', Icon: Play, target: '#watch' },
  { id: 'bazaar', label: 'Bazaar', prompt: 'Explore the local Bazaar', Icon: Handbag, target: '#bazaar' },
  { id: 'events', label: 'Events', prompt: 'See what is happening nearby', Icon: CalendarBlank, target: '#events' },
] as const;

const chapters = [
  { id: 'community', number: '01', title: 'Connect locally', copy: 'Join the conversations, groups and everyday moments that matter to you.', Icon: UsersThree },
  { id: 'discover', number: '02', title: 'Discover nearby', copy: 'Move from trusted places to useful local businesses without losing your flow.', Icon: MapPin },
  { id: 'watch', number: '03', title: 'Share the moment', copy: 'Watch short stories, culture and community updates made for the way you browse.', Icon: Play },
] as const;

export default function EditorialLanding() {
  const [activeDiscovery, setActiveDiscovery] = useState<(typeof discoveryItems)[number]['id']>('places');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const selectedDiscovery = discoveryItems.find((item) => item.id === activeDiscovery) ?? discoveryItems[0];

  const chooseDiscovery = (item: (typeof discoveryItems)[number]) => {
    setActiveDiscovery(item.id);
    document.querySelector(item.target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="uNepal home">
          <Image src="/assets/logo.png" alt="" width={54} height={54} priority />
          <span>uNepal</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <a href="#community">Community</a>
          <a href="#discover">Discover</a>
          <a href="#bazaar">Bazaar</a>
          <a href="#about">About</a>
        </nav>

        <a className={styles.headerCta} href={ANDROID_PLAY_STORE_URL} target="_blank" rel="noreferrer">
          Get the app <ArrowRight weight="bold" aria-hidden="true" />
        </a>

        <button className={styles.menuButton} type="button" aria-label="Toggle menu" aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((open) => !open)}>
          {mobileMenuOpen ? <X weight="bold" aria-hidden="true" /> : <List weight="bold" aria-hidden="true" />}
        </button>

        {mobileMenuOpen ? (
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            {['Community', 'Discover', 'Bazaar', 'About'].map((label) => (
              <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)}>{label}</a>
            ))}
            <a className={styles.mobileDownload} href={ANDROID_PLAY_STORE_URL} target="_blank" rel="noreferrer">Get the app</a>
          </nav>
        ) : null}
      </header>

      <main id="top">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroImage}>
            <Image
              src="/assets/editorial/hero-nepalese-life.webp"
              alt="Nepalese people connecting in a lively Kathmandu neighbourhood"
              fill
              priority
              sizes="100vw"
              className={styles.cover}
            />
          </div>

          <div className={styles.heroShade} aria-hidden="true" />
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>The everyday app for Nepal</p>
            <h1 id="hero-title">One place <em>for</em><br />Nepalese life.</h1>
            <p className={styles.heroIntro}>Community, Bazaar, short videos, events and local discovery—brought together with purpose.</p>

            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href={ANDROID_PLAY_STORE_URL} target="_blank" rel="noreferrer">
                Get uNepal for Android <ArrowRight weight="bold" aria-hidden="true" />
              </a>
              <a className={styles.textLink} href="#discover">Explore the experience <span aria-hidden="true">↓</span></a>
            </div>

          </div>

          <aside className={styles.heroMoment} aria-label="Featured community moment">
            <span className={styles.momentIcon}><ChatCircleText weight="fill" aria-hidden="true" /></span>
            <div><small>Community</small><strong>Morning in Kathmandu</strong></div>
            <span className={styles.momentMeta}>Now</span>
          </aside>

          <div className={styles.discoveryDock} role="search" aria-label="Discover uNepal">
            <div className={styles.searchPrompt}>
              <MagnifyingGlass weight="bold" aria-hidden="true" />
              <span>{selectedDiscovery.prompt}</span>
            </div>
            <div className={styles.discoveryTabs} role="tablist" aria-label="Discovery categories">
              {discoveryItems.map((item) => {
                const Icon = item.Icon;
                return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={activeDiscovery === item.id}
                  className={activeDiscovery === item.id ? styles.activeDiscovery : undefined}
                  onClick={() => chooseDiscovery(item)}
                >
                  <Icon weight={activeDiscovery === item.id ? 'fill' : 'regular'} aria-hidden="true" />
                  <span>{item.label}</span>
                </button>
                );
              })}
            </div>
          </div>
        </section>

        <section id="discover" className={styles.discoverySection} aria-labelledby="discovery-title">
          <div className={styles.sectionLead}>
            <div>
              <p className={styles.kicker}>Made for everyday Nepalese life</p>
              <h2 id="discovery-title">Everything you need.<br /><em>All in one place.</em></h2>
            </div>
            <p>Move from conversations to places, stories and events without jumping between disconnected experiences.</p>
          </div>

          <div className={styles.chapterGrid}>
            {chapters.map(({ id, number, title, copy, Icon }, index) => (
              <article id={id} className={styles.chapter} key={id}>
                <div className={styles.chapterImage}>
                  <Image
                    src="/assets/editorial/discovery-triptych.webp"
                    alt=""
                    width={2048}
                    height={683}
                    sizes="(max-width: 800px) 100vw, 33vw"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className={styles.triptychImage}
                    style={{ left: `${index * -100}%` }}
                  />
                </div>
                <div className={styles.chapterOverlay} aria-hidden="true" />
                <span className={styles.chapterNumber}>{number}</span>
                <div className={styles.chapterCopy}>
                  <span><Icon weight="fill" aria-hidden="true" /></span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="bazaar" className={styles.bazaarSection} aria-labelledby="bazaar-title">
          <Image
            src="/assets/editorial/bazaar-culture.webp"
            alt="Nepalese artisans and local craft at a community market"
            fill
            sizes="100vw"
            className={styles.cover}
          />
          <div className={styles.bazaarCopy}>
            <p className={styles.lightKicker}>Bazaar & culture</p>
            <h2 id="bazaar-title">Shop local.<br />Celebrate Nepal.</h2>
            <p>Discover locally made goods, trusted businesses and events that keep culture moving.</p>
            <a href="#download">Explore uNepal <ArrowRight weight="bold" aria-hidden="true" /></a>
          </div>
          <div className={styles.marketNote}>
            <Handbag weight="fill" aria-hidden="true" />
            <div><small>From the Bazaar</small><strong>Made close to home</strong></div>
          </div>
          <div id="events" className={styles.eventNote}>
            <CalendarBlank weight="fill" aria-hidden="true" />
            <div><small>Upcoming events</small><strong>See what’s happening nearby</strong></div>
          </div>
        </section>

        <section id="about" className={styles.aboutSection} aria-labelledby="about-title">
          <p className={styles.kicker}>One connected experience</p>
          <div className={styles.aboutGrid}>
            <h2 id="about-title">Less switching.<br />More belonging.</h2>
            <p>uNepal brings the useful parts of Nepalese digital life into one considered place—designed for people in Nepal and Nepalese communities everywhere.</p>
          </div>
          <div className={styles.featureRail}>
            {[
              ['Community', 'Conversations with context', UsersThree],
              ['Discover', 'Places worth knowing', MapPin],
              ['Watch', 'Stories with a pulse', Play],
              ['Bazaar', 'Local value, easier to find', Handbag],
              ['Events', 'What is happening next', CalendarBlank],
            ].map(([title, copy, Icon], index) => (
              <div className={styles.featureItem} key={String(title)}>
                <span className={styles.featureIndex}>0{index + 1}</span>
                <Icon weight="regular" aria-hidden="true" />
                <strong>{String(title)}</strong>
                <small>{String(copy)}</small>
              </div>
            ))}
          </div>
        </section>

        <section id="download" className={styles.downloadSection} aria-labelledby="download-title">
          <div className={styles.downloadCopy}>
            <p className={styles.kicker}>Your place is here</p>
            <h2 id="download-title">Start with uNepal.</h2>
            <p>Everything Nepalese life needs, together in one thoughtfully designed app.</p>
          </div>
          <div className={styles.storeChoices}>
            <a className={styles.storeCard} href={ANDROID_PLAY_STORE_URL} target="_blank" rel="noreferrer">
              <AndroidLogo weight="fill" aria-hidden="true" />
              <span><small>Google Play</small><strong>Download for Android</strong></span>
              <ArrowRight weight="bold" aria-hidden="true" />
            </a>
            <a className={`${styles.storeCard} ${styles.storeCardMuted}`} href={IOS_APP_STORE_URL} target="_blank" rel="noreferrer">
              <AppleLogo weight="fill" aria-hidden="true" />
              <span><small>App Store</small><strong>View the iPhone app</strong></span>
              <ArrowRight weight="bold" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a className={styles.footerBrand} href="#top" aria-label="uNepal home"><Image src="/assets/logo.png" alt="" width={46} height={46} /><span>uNepal</span></a>
        <p>Made for Nepalese people.</p>
        <nav aria-label="Legal links"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/child-safety-standards">Safety</a><a href="mailto:info@unepal.com">Contact</a></nav>
      </footer>
    </div>
  );
}
