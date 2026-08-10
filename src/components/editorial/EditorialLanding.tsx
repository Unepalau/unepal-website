'use client';

import Image from 'next/image';
import {
  ArrowRight,
  CalendarBlank,
  ChatCircleText,
  Compass,
  Handbag,
  List,
  MapPin,
  Play,
  Sparkle,
  UsersThree,
  X,
} from '@phosphor-icons/react';
import { useState } from 'react';
import { ANDROID_PLAY_STORE_URL, IOS_APP_STORE_URL } from '@/lib/storeLinks';
import styles from './EditorialLanding.module.css';

const productViews = [
  {
    id: 'community',
    label: 'Community',
    title: 'Your people, in one place.',
    copy: 'Follow everyday moments, join local conversations and stay close to the communities that matter.',
    image: '/assets/app-ui/home-feed.webp',
    alt: 'The uNepal community home feed',
    Icon: UsersThree,
  },
  {
    id: 'bazaar',
    label: 'Bazaar',
    title: 'Local finds, easier to discover.',
    copy: 'Browse useful listings and connect with the people and businesses behind them.',
    image: '/assets/app-ui/bazaar-marketplace.webp',
    alt: 'The uNepal Bazaar marketplace',
    Icon: Handbag,
  },
  {
    id: 'watch',
    label: 'Hamro TV',
    title: 'A fresh view of Nepal.',
    copy: 'Move through videos, culture and stories made for quick, enjoyable discovery.',
    image: '/assets/app-ui/hamro-tv.webp',
    alt: 'Hamro TV inside the uNepal app',
    Icon: Play,
  },
  {
    id: 'events',
    label: 'Events',
    title: 'Know what is happening next.',
    copy: 'Find celebrations, gatherings and useful dates without leaving the app.',
    image: '/assets/app-ui/nepali-calendar-events.webp',
    alt: 'Nepalese calendar and events inside uNepal',
    Icon: CalendarBlank,
  },
] as const;

const essentials = [
  { title: 'Community', copy: 'Conversations with context.', Icon: UsersThree },
  { title: 'Discover', copy: 'Places worth knowing.', Icon: Compass },
  { title: 'Hamro TV', copy: 'Stories with a pulse.', Icon: Play },
  { title: 'Bazaar', copy: 'Local value, easier to find.', Icon: Handbag },
  { title: 'Events', copy: 'What is happening next.', Icon: CalendarBlank },
] as const;

function StoreBadges({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`${styles.storeBadges} ${compact ? styles.storeBadgesCompact : ''}`} aria-label="Download uNepal">
      <a className={styles.appleBadge} href={IOS_APP_STORE_URL} target="_blank" rel="noreferrer" aria-label="Download uNepal on the App Store">
        <Image src="/assets/store-badges/app-store.svg" alt="Download on the App Store" width={120} height={40} />
      </a>
      <a className={styles.googleBadge} href={ANDROID_PLAY_STORE_URL} target="_blank" rel="noreferrer" aria-label="Get uNepal on Google Play">
        <Image src="/assets/store-badges/google-play.png" alt="Get it on Google Play" width={646} height={250} />
      </a>
    </div>
  );
}

export default function EditorialLanding() {
  const [activeView, setActiveView] = useState<(typeof productViews)[number]['id']>('community');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const selectedView = productViews.find((item) => item.id === activeView) ?? productViews[0];
  const SelectedIcon = selectedView.Icon;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="uNepal home">
          <Image src="/assets/logo.png" alt="" width={54} height={54} priority />
          <span>uNepal</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <a href="#inside">Inside the app</a>
          <a href="#discover">Discover</a>
          <a href="#about">About</a>
        </nav>

        <a className={styles.headerCta} href="#download">
          Get the app <ArrowRight weight="bold" aria-hidden="true" />
        </a>

        <button className={styles.menuButton} type="button" aria-label="Toggle menu" aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((open) => !open)}>
          {mobileMenuOpen ? <X weight="bold" aria-hidden="true" /> : <List weight="bold" aria-hidden="true" />}
        </button>

        {mobileMenuOpen ? (
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            <a href="#inside" onClick={() => setMobileMenuOpen(false)}>Inside the app</a>
            <a href="#discover" onClick={() => setMobileMenuOpen(false)}>Discover</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a className={styles.mobileDownload} href="#download" onClick={() => setMobileMenuOpen(false)}>Get the app</a>
          </nav>
        ) : null}
      </header>

      <main id="top">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <div className={styles.heroPill}><Sparkle weight="fill" aria-hidden="true" /> One app for Nepalese life</div>
            <h1 id="hero-title">Everything Nepalese.<br /><span>All in one app.</span></h1>
            <p className={styles.heroIntro}>Community, local discovery, Bazaar, videos and events—thoughtfully brought together in uNepal.</p>
            <StoreBadges />
            <a className={styles.exploreLink} href="#inside">See what is inside <ArrowRight weight="bold" aria-hidden="true" /></a>
          </div>

          <div className={styles.productStage} aria-label="A preview of the uNepal app">
            <div className={styles.stageGlow} aria-hidden="true" />
            <div className={styles.phoneFrame}>
              <div className={styles.phoneSpeaker} aria-hidden="true" />
              <div className={styles.phoneScreen}>
                <Image src="/assets/app-ui/home-feed.webp" alt="The uNepal app home feed" width={720} height={1600} priority loading="eager" sizes="(max-width: 800px) 72vw, 340px" />
              </div>
            </div>

            <div className={`${styles.appWidget} ${styles.communityWidget}`}>
              <span><ChatCircleText weight="fill" aria-hidden="true" /></span>
              <div><small>Community</small><strong>See what your people are sharing</strong></div>
            </div>
            <div className={`${styles.appWidget} ${styles.placesWidget}`}>
              <span><MapPin weight="fill" aria-hidden="true" /></span>
              <div><small>Nearby</small><strong>Discover places around you</strong></div>
            </div>
            <div className={styles.quickRail} aria-label="uNepal essentials">
              {essentials.slice(0, 4).map(({ title, Icon }) => (
                <div key={title}><Icon weight="fill" aria-hidden="true" /><span>{title}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section id="discover" className={styles.lifeBanner} aria-labelledby="life-banner-title">
          <Image src="/assets/editorial/hero-nepalese-life.webp" alt="Nepalese people connecting in a lively Kathmandu neighbourhood" fill loading="eager" sizes="100vw" className={styles.cover} />
          <div className={styles.lifeShade} aria-hidden="true" />
          <div className={styles.lifeCopy}>
            <p>Made for all Nepalese people</p>
            <h2 id="life-banner-title">From your neighbourhood<br />to all of Nepal.</h2>
          </div>
        </section>

        <section id="inside" className={styles.insideSection} aria-labelledby="inside-title">
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>Meet the app</p>
            <h2 id="inside-title">One smooth experience.<br /><span>Many ways to belong.</span></h2>
            <p>Tap through a few of the real experiences already inside uNepal.</p>
          </div>

          <div className={styles.productTabs} role="tablist" aria-label="Explore uNepal features">
            {productViews.map(({ id, label, Icon }) => (
              <button key={id} id={`product-tab-${id}`} type="button" role="tab" aria-controls="product-panel" aria-selected={activeView === id} className={activeView === id ? styles.activeProductTab : undefined} onClick={() => setActiveView(id)}>
                <Icon weight={activeView === id ? 'fill' : 'regular'} aria-hidden="true" />
                {label}
              </button>
            ))}
          </div>

          <div id="product-panel" className={styles.productDemo} role="tabpanel" aria-labelledby={`product-tab-${selectedView.id}`}>
            <div className={styles.demoCopy}>
              <span className={styles.demoIcon}><SelectedIcon weight="fill" aria-hidden="true" /></span>
              <p className={styles.demoLabel}>{selectedView.label}</p>
              <h3>{selectedView.title}</h3>
              <p>{selectedView.copy}</p>
              <a href="#download">Get uNepal <ArrowRight weight="bold" aria-hidden="true" /></a>
            </div>
            <div className={styles.demoVisual}>
              <div className={styles.demoScreen}>
                <Image key={selectedView.image} src={selectedView.image} alt={selectedView.alt} width={720} height={1600} sizes="(max-width: 800px) 88vw, 520px" />
              </div>
              <span className={styles.demoCaption}>Actual uNepal app experience</span>
            </div>
          </div>
        </section>

        <section id="about" className={styles.essentialsSection} aria-labelledby="essentials-title">
          <div className={styles.essentialsLead}>
            <p className={styles.kicker}>Everything works together</p>
            <h2 id="essentials-title">Less switching.<br />More living.</h2>
          </div>
          <div className={styles.essentialsGrid}>
            {essentials.map(({ title, copy, Icon }, index) => (
              <article className={styles.essentialCard} key={title}>
                <span className={styles.cardNumber}>0{index + 1}</span>
                <span className={styles.cardIcon}><Icon weight="fill" aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="download" className={styles.downloadSection} aria-labelledby="download-title">
          <div className={styles.downloadLogo}><Image src="/assets/logo.png" alt="" width={92} height={92} /></div>
          <div className={styles.downloadCopy}>
            <p className={styles.kicker}>Start with uNepal</p>
            <h2 id="download-title">Your Nepalese world,<br />ready when you are.</h2>
            <p>Download uNepal and bring community, discovery and everyday usefulness into one place.</p>
            <StoreBadges compact />
          </div>
          <div className={styles.downloadDecor} aria-hidden="true">
            <span><UsersThree weight="fill" /></span>
            <span><Handbag weight="fill" /></span>
            <span><Play weight="fill" /></span>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a className={styles.footerBrand} href="#top" aria-label="uNepal home"><Image src="/assets/logo.png" alt="" width={46} height={46} /><span>uNepal</span></a>
        <p>Made for Nepalese people.</p>
        <nav aria-label="Legal links"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/child-safety-standards">Safety</a><a href="mailto:info@unepal.com">Contact</a></nav>
        <small className={styles.trademark}>Apple and the Apple logo are trademarks of Apple Inc. Google Play and the Google Play logo are trademarks of Google LLC.</small>
      </footer>
    </div>
  );
}
