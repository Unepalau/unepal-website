'use client';

import Image from 'next/image';
import {
  ArrowRight,
  Heart,
  List,
  LockKey,
  ShieldCheck,
  UsersThree,
  X,
} from '@phosphor-icons/react';
import { useState } from 'react';
import { ANDROID_PLAY_STORE_URL, IOS_APP_STORE_URL } from '@/lib/storeLinks';
import styles from './LandingPage.module.css';

const primaryNav = [
  { label: 'Community', href: '#community' },
  { label: 'Bazaar', href: '#bazaar' },
  { label: 'Discover', href: '#discover' },
  { label: 'Business', href: '#business' },
  { label: 'Hamro TV', href: '#hamro-tv' },
] as const;

const productNav = [
  { label: 'All in one', href: '#top' },
  { label: 'Community', href: '#community' },
  { label: 'Bazaar', href: '#bazaar' },
  { label: 'Discover', href: '#discover' },
  { label: 'Hamro TV', href: '#hamro-tv' },
  { label: 'Events', href: '#events' },
  { label: 'Business', href: '#business' },
] as const;

const marketplaceCategories = ['Jobs', 'Housing', 'Services', 'Buy & Sell', 'Requests'] as const;

function StoreBadges({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`${styles.storeBadges} ${compact ? styles.storeBadgesCompact : ''}`} aria-label="Download uNepal">
      <a href={IOS_APP_STORE_URL} target="_blank" rel="noreferrer" aria-label="Download uNepal on the App Store">
        <Image src="/assets/store-badges/app-store.svg" alt="Download on the App Store" width={120} height={40} />
      </a>
      <a href={ANDROID_PLAY_STORE_URL} target="_blank" rel="noreferrer" aria-label="Get uNepal on Google Play">
        <Image src="/assets/store-badges/google-play.png" alt="Get it on Google Play" width={646} height={250} />
      </a>
    </div>
  );
}

function SectionCopy({
  label,
  title,
  copy,
  cta,
  href,
}: {
  label: string;
  title: React.ReactNode;
  copy: string;
  cta: string;
  href: string;
}) {
  return (
    <div className={styles.sectionCopy}>
      <p className={styles.kicker}>{label}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
      <a href={href}>{cta}<ArrowRight weight="bold" aria-hidden="true" /></a>
    </div>
  );
}

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState('All in one');

  function selectProduct(label: string, href: string) {
    setActiveProduct(label);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="uNepal home">
          <Image src="/assets/logo.png" alt="" width={48} height={48} priority />
          <span>uNepal</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {primaryNav.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
        </nav>

        <a className={styles.headerCta} href="#download">Get the app<ArrowRight weight="bold" aria-hidden="true" /></a>

        <button
          className={styles.menuButton}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X weight="bold" aria-hidden="true" /> : <List weight="bold" aria-hidden="true" />}
        </button>

        {mobileMenuOpen ? (
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            {primaryNav.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)}>{item.label}</a>
            ))}
            <a className={styles.mobileCta} href="#download" onClick={() => setMobileMenuOpen(false)}>Get the app</a>
          </nav>
        ) : null}
      </header>

      <main id="top">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.heroEyebrow}><span>uNepal</span> / Hamro Social Network</p>
              <h1 id="hero-title">Your Nepalese world,<br /><span>in motion.</span></h1>
              <p>Community, Bazaar, videos, events and everyday connection—together in one app.</p>
              <StoreBadges />
            </div>

            <div className={styles.heroVisual} aria-label="Real uNepal Home, Hamro TV and Nepali Calendar screens">
              <article className={`${styles.appSurface} ${styles.heroHome}`}>
                <Image src="/assets/app-ui/home-feed.webp" alt="uNepal Home community feed" width={720} height={1600} priority sizes="(max-width: 720px) 86vw, 370px" />
              </article>
              <article className={`${styles.appSurface} ${styles.heroTv}`}>
                <Image src="/assets/app-ui/hamro-tv.webp" alt="Hamro TV video discovery in uNepal" width={720} height={1600} priority sizes="(max-width: 720px) 45vw, 285px" />
              </article>
              <article className={`${styles.appSurface} ${styles.heroCalendar}`}>
                <Image src="/assets/app-ui/calendar-event.webp" alt="Nepali Calendar and public event in uNepal" width={900} height={1536} priority sizes="(max-width: 720px) 45vw, 260px" />
              </article>
            </div>
          </div>

          <div className={styles.productRailWrap}>
            <div className={styles.productRail} role="tablist" aria-label="Explore uNepal products">
              {productNav.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  role="tab"
                  aria-selected={activeProduct === item.label}
                  className={activeProduct === item.label ? styles.productActive : undefined}
                  onClick={() => selectProduct(item.label, item.href)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="community" className={`${styles.productSection} ${styles.communitySection}`} aria-labelledby="community-title">
          <div className={styles.sectionInner}>
            <SectionCopy
              label="Community"
              title={<>Your people,<br />in one place.</>}
              copy="Follow everyday moments, join local conversations and stay close to the communities that matter."
              cta="Explore Community"
              href="#download"
            />
            <div className={styles.communityVisual} aria-labelledby="community-title">
              <article className={`${styles.appSurface} ${styles.communityMain}`}>
                <Image src="/assets/app-ui/community-feed.webp" alt="uNepal Community feed" width={900} height={1600} sizes="(max-width: 720px) 74vw, 420px" loading="eager" />
              </article>
              <article className={`${styles.appSurface} ${styles.communityGroup}`}>
                <Image src="/assets/app-ui/groups-directory.webp" alt="Public groups directory in uNepal" width={720} height={1600} sizes="(max-width: 720px) 58vw, 250px" />
              </article>
              <article className={`${styles.appSurface} ${styles.communityPost}`}>
                <Image src="/assets/app-ui/community-post.webp" alt="Public uNepal community post with reactions" width={900} height={983} sizes="(max-width: 720px) 58vw, 270px" />
              </article>
            </div>
          </div>
        </section>

        <section id="bazaar" className={`${styles.productSection} ${styles.bazaarSection}`} aria-labelledby="bazaar-title">
          <div className={styles.sectionInner}>
            <SectionCopy
              label="Bazaar"
              title={<>Local value,<br />easier to find.</>}
              copy="Buy, sell, offer services and find what you need—locally and globally."
              cta="Explore Bazaar"
              href="#download"
            />
            <div className={styles.bazaarVisual} aria-labelledby="bazaar-title">
              <article className={`${styles.appSurface} ${styles.bazaarMain}`}>
                <Image src="/assets/app-ui/bazaar-marketplace.webp" alt="uNepal Bazaar marketplace" width={720} height={1600} sizes="(max-width: 720px) 78vw, 430px" loading="eager" />
              </article>
              <article className={`${styles.appSurface} ${styles.bazaarDetail}`}>
                <Image src="/assets/app-ui/bazaar-listing.webp" alt="A public listing inside uNepal Bazaar" width={720} height={1600} sizes="(max-width: 720px) 58vw, 280px" />
              </article>
              <div className={styles.categoryList} aria-label="Bazaar categories">
                {marketplaceCategories.map((category) => <span key={category}>{category}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="discover" className={`${styles.productSection} ${styles.discoverSection}`} aria-labelledby="discover-title">
          <div className={styles.sectionInner}>
            <SectionCopy
              label="Discover"
              title={<>Watch, listen<br />and explore more.</>}
              copy="Videos, events, businesses and useful dates—one connected view of what matters."
              cta="Explore Discover"
              href="#download"
            />
            <div className={styles.discoverVisual} aria-labelledby="discover-title">
              <article id="hamro-tv" className={`${styles.appSurface} ${styles.discoverTv}`}>
                <Image src="/assets/app-ui/hamro-tv-grid.webp" alt="Hamro TV featured and latest videos" width={900} height={1200} sizes="(max-width: 720px) 82vw, 520px" />
              </article>
              <article id="events" className={`${styles.appSurface} ${styles.discoverCalendar}`}>
                <Image src="/assets/app-ui/calendar-event.webp" alt="Nepali Calendar and public events" width={900} height={1536} sizes="(max-width: 720px) 48vw, 260px" />
              </article>
              <article id="business" className={`${styles.appSurface} ${styles.discoverBusiness}`}>
                <Image src="/assets/app-ui/business-directory.webp" alt="uNepal business directory" width={720} height={1600} sizes="(max-width: 720px) 48vw, 260px" />
              </article>
            </div>
          </div>
        </section>

        <section className={styles.trustSection} aria-label="Connection and trust">
          <div className={styles.trustInner}>
            <div><ShieldCheck weight="fill" aria-hidden="true" /><span><strong>Your safety comes first.</strong><small>Clear tools and standards.</small></span></div>
            <div><LockKey weight="fill" aria-hidden="true" /><span><strong>Respectful by design.</strong><small>Privacy-aware communities.</small></span></div>
            <div><UsersThree weight="fill" aria-hidden="true" /><span><strong>Real people. Real connection.</strong><small>Made for everyday life.</small></span></div>
            <div><Heart weight="fill" aria-hidden="true" /><span><strong>Built for Nepalese people.</strong><small>Wherever life takes you.</small></span></div>
          </div>
        </section>

        <section id="download" className={styles.downloadSection} aria-labelledby="download-title">
          <div className={styles.downloadInner}>
            <div className={styles.downloadBrand} aria-hidden="true"><Image src="/assets/logo.png" alt="" width={112} height={112} /></div>
            <div className={styles.downloadCopy}>
              <p className={styles.kicker}>uNepal</p>
              <h2 id="download-title">Make everyday<br />more connected.</h2>
              <p>Bring community, Bazaar, video and events into one place.</p>
              <StoreBadges compact />
            </div>
            <div className={`${styles.appSurface} ${styles.downloadVisual}`}>
              <Image src="/assets/app-ui/home-composer.webp" alt="Create and share from the uNepal Home screen" width={900} height={1200} sizes="(max-width: 720px) 84vw, 390px" />
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a className={styles.footerBrand} href="#top" aria-label="uNepal home">
          <Image src="/assets/logo.png" alt="" width={38} height={38} />
          <span>uNepal</span>
        </a>
        <p>Made for Nepalese people.</p>
        <nav aria-label="Legal links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/child-safety-standards">Safety</a>
          <a href="/community">Community Guidelines</a>
          <a href="mailto:hello@unepal.com">Contact</a>
        </nav>
        <small>Apple and the Apple logo are trademarks of Apple Inc. Google Play and the Google Play logo are trademarks of Google LLC.</small>
      </footer>
    </div>
  );
}
