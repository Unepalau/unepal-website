'use client';

import Image from 'next/image';
import {
  ArrowRight,
  Briefcase,
  Buildings,
  CalendarDots,
  CaretRight,
  ChatCircle,
  FilmSlate,
  Heart,
  List,
  MapPin,
  Play,
  Plus,
  ShareNetwork,
  ShieldCheck,
  ShoppingBagOpen,
  Storefront,
  UsersThree,
  VideoCamera,
  Wrench,
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

const featureTabs = ['Community', 'Bazaar', 'Jobs & Housing', 'Discover', 'Hamro TV'] as const;
type FeatureTab = (typeof featureTabs)[number];

const bazaarCategories = ['Jobs', 'Housing', 'Services', 'Buy & Sell', 'Requests'] as const;
type BazaarCategory = (typeof bazaarCategories)[number];

const bazaarDemo: Record<BazaarCategory, { title: string; location: string; meta: string }> = {
  Jobs: { title: 'Graphic Designer', location: 'Remote', meta: 'Flexible work' },
  Housing: { title: 'Room for rent', location: 'Kathmandu', meta: 'Bright, furnished room' },
  Services: { title: 'Home cleaning', location: 'Bhaktapur', meta: 'Flexible bookings' },
  'Buy & Sell': { title: 'Dining table', location: 'Lalitpur', meta: 'Solid wood' },
  Requests: { title: 'Handyman needed', location: 'Kathmandu', meta: 'Small home project' },
};

const appIcons = {
  community: '/assets/app-icons/community.svg',
  bazaar: '/assets/app-icons/bazaar.svg',
  business: '/assets/app-icons/business.svg',
  home: '/assets/app-icons/home.svg',
  message: '/assets/app-icons/message.svg',
  video: '/assets/app-icons/video.svg',
} as const;

function AppIcon({ name, size = 20 }: { name: keyof typeof appIcons; size?: number }) {
  return <Image src={appIcons[name]} alt="" width={size} height={size} aria-hidden="true" />;
}

function StoreBadges({ compact = false, eager = false }: { compact?: boolean; eager?: boolean }) {
  return (
    <div className={`${styles.storeBadges} ${compact ? styles.storeBadgesCompact : ''}`} aria-label="Download uNepal">
      <a href={IOS_APP_STORE_URL} target="_blank" rel="noreferrer" aria-label="Download uNepal on the App Store">
        <Image src="/assets/store-badges/app-store.svg" alt="Download on the App Store" width={120} height={40} loading={eager ? "eager" : "lazy"} />
      </a>
      <a href={ANDROID_PLAY_STORE_URL} target="_blank" rel="noreferrer" aria-label="Get uNepal on Google Play">
        <Image src="/assets/store-badges/google-play.png" alt="Get it on Google Play" width={646} height={250} loading={eager ? "eager" : "lazy"} />
      </a>
    </div>
  );
}

function MarketingNavBar({ mobileMenuOpen, onToggle }: { mobileMenuOpen: boolean; onToggle: () => void }) {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#top" aria-label="uNepal home">
        <Image src="/assets/logo.png" alt="" width={46} height={46} priority />
        <span>uNepal</span>
      </a>
      <nav className={styles.desktopNav} aria-label="Primary navigation">
        {primaryNav.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
      </nav>
      <a className={styles.headerCta} href="#download">Get the app<ArrowRight weight="bold" aria-hidden="true" /></a>
      <button className={styles.menuButton} type="button" aria-label="Toggle navigation menu" aria-expanded={mobileMenuOpen} onClick={onToggle}>
        {mobileMenuOpen ? <X weight="bold" aria-hidden="true" /> : <List weight="bold" aria-hidden="true" />}
      </button>
      {mobileMenuOpen ? (
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {primaryNav.map((item) => <a key={item.label} href={item.href} onClick={onToggle}>{item.label}</a>)}
          <a className={styles.mobileCta} href="#download" onClick={onToggle}>Get the app</a>
        </nav>
      ) : null}
    </header>
  );
}

function MarketingProfileChip({ label = 'Community members' }: { label?: string }) {
  return (
    <div className={styles.profileChip} aria-label={label}>
      <span><UsersThree weight="fill" aria-hidden="true" /></span>
      <span><AppIcon name="community" size={16} /></span>
      <span><Heart weight="fill" aria-hidden="true" /></span>
      <strong>+8</strong>
    </div>
  );
}

function MarketingPostCard({ compact = false }: { compact?: boolean }) {
  return (
    <article className={`${styles.appCard} ${styles.postCard} ${compact ? styles.postCardCompact : ''}`}>
      <div className={styles.groupHeader}>
        <span className={styles.groupMark}><UsersThree weight="fill" aria-hidden="true" /></span>
        <span><strong>Bagmati Community</strong><small>Public group · Community</small></span>
        <button type="button">Join</button>
      </div>
      <div className={styles.postAuthor}><span className={styles.profileMark}>U</span><span><strong>Community update</strong><small>Just now · Public</small></span></div>
      <h3>Weekend community meetup this Saturday.</h3>
      {!compact ? <p>Come along, meet your neighbours and share what is happening locally.</p> : null}
      <div className={styles.reactionContext}><MarketingProfileChip label="Community members who reacted" /><span>Community members</span></div>
      <div className={styles.reactionRow}>
        <button type="button"><Heart weight="fill" aria-hidden="true" />Like</button>
        <button type="button"><ChatCircle aria-hidden="true" />Comment</button>
        <button type="button"><ShareNetwork aria-hidden="true" />Share</button>
      </div>
    </article>
  );
}

function MarketingGroupCard() {
  return (
    <article className={`${styles.appCard} ${styles.groupCard}`}>
      <p className={styles.cardLabel}>Popular groups</p>
      <div><span className={styles.groupMark}><UsersThree weight="fill" aria-hidden="true" /></span><span><strong>Bagmati Community</strong><small>Public group</small></span></div>
      <div><span className={styles.groupMarkAlt}><AppIcon name="community" size={18} /></span><span><strong>Local Helpers</strong><small>Community group</small></span></div>
      <a href="#download">View all</a>
    </article>
  );
}

function MarketingEventCard({ compact = false }: { compact?: boolean }) {
  return (
    <article className={`${styles.appCard} ${styles.eventCard} ${compact ? styles.eventCardCompact : ''}`}>
      <span className={styles.cardIcon}><CalendarDots weight="bold" aria-hidden="true" /></span>
      <span><small>Event</small><strong>Community Meetup</strong><span>Kathmandu · Saturday</span></span>
    </article>
  );
}

function MarketingBazaarCard({ compact = false, category = 'Housing' }: { compact?: boolean; category?: BazaarCategory }) {
  const listing = bazaarDemo[category];
  return (
    <article className={`${styles.appCard} ${styles.bazaarCard} ${compact ? styles.bazaarCardCompact : ''}`}>
      <div>
        <span className={styles.tag}>{category}</span>
        <h3>{listing.title}</h3>
        <p><MapPin weight="fill" aria-hidden="true" />{listing.location}</p>
        {!compact ? <small>{listing.meta}</small> : null}
      </div>
      {category === 'Housing' ? <Image src="/assets/marketing/room-kathmandu.webp" alt="Bright furnished room used for a fictional uNepal Bazaar listing" width={1600} height={900} sizes="(max-width: 620px) 92vw, (max-width: 900px) 55vw, 42vw" /> : <span className={styles.listingIcon}>{category === 'Jobs' ? <Briefcase /> : category === 'Services' ? <Wrench /> : <ShoppingBagOpen />}</span>}
    </article>
  );
}

function MarketingVideoCard({ compact = false }: { compact?: boolean }) {
  return (
    <article id="hamro-tv" className={`${styles.videoCard} ${compact ? styles.videoCardCompact : ''}`}>
      <Image src="/assets/marketing/community-stories.webp" alt="A fictional Hamro TV community storytelling studio" width={1600} height={900} sizes="(max-width: 620px) 92vw, (max-width: 900px) 88vw, 45vw" />
      <div className={styles.videoOverlay}>
        <span><VideoCamera weight="fill" aria-hidden="true" />Hamro TV</span>
        <h3>Community Stories</h3>
        {!compact ? <p>Local voices and everyday moments.</p> : null}
        <button type="button" aria-label="Play Community Stories"><Play weight="fill" aria-hidden="true" /></button>
      </div>
    </article>
  );
}

function MarketingCalendar() {
  const days = [null, null, null, null, null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  return (
    <article className={`${styles.appCard} ${styles.calendarCard}`} aria-label="August 2026 calendar">
      <div><strong>August 2026</strong><CalendarDots weight="bold" aria-hidden="true" /></div>
      <div className={styles.weekdays}>{['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => <span key={`${day}-${index}`}>{day}</span>)}</div>
      <div className={styles.calendarDays}>{days.map((day, index) => <span key={index} className={day === 10 ? styles.calendarToday : undefined}>{day}</span>)}</div>
    </article>
  );
}

function MarketingCategoryTabs({ value, onChange }: { value: BazaarCategory; onChange: (value: BazaarCategory) => void }) {
  return (
    <div className={styles.categoryTabs} aria-label="Bazaar categories">
      {bazaarCategories.map((category) => (
        <button key={category} type="button" aria-pressed={value === category} onClick={() => onChange(category)}>{category}</button>
      ))}
    </div>
  );
}

function AppShellHeader() {
  return (
    <div className={styles.appShellHeader}>
      <span><Image src="/assets/logo.png" alt="" width={30} height={30} /><strong>uNepal</strong></span>
      <span className={styles.appHeaderActions}><AppIcon name="message" size={19} /><AppIcon name="video" size={19} /></span>
    </div>
  );
}

function AppQuickActions() {
  return (
    <div className={styles.quickActions}>
      <button type="button"><Plus weight="bold" /><span>Post</span></button>
      <button type="button"><AppIcon name="bazaar" size={19} /><span>Bazaar</span></button>
      <button type="button"><VideoCamera weight="fill" /><span>Reel</span></button>
      <button type="button"><AppIcon name="business" size={19} /><span>Business</span></button>
    </div>
  );
}

function MarketingAppShell({ mode = 'Community', compact = false }: { mode?: FeatureTab; compact?: boolean }) {
  const [category, setCategory] = useState<BazaarCategory>(mode === 'Jobs & Housing' ? 'Jobs' : 'Housing');
  return (
    <div className={`${styles.appShell} ${compact ? styles.appShellCompact : ''}`}>
      <AppShellHeader />
      <div className={styles.composer}><span className={styles.profileMark}>U</span><span>Share something...</span><button type="button" aria-label="Create a post"><Plus weight="bold" /></button></div>
      <AppQuickActions />
      {mode === 'Community' ? <MarketingPostCard compact={compact} /> : null}
      {mode === 'Bazaar' || mode === 'Jobs & Housing' ? (
        <div className={styles.shellMarketplace}>
          <MarketingCategoryTabs value={category} onChange={setCategory} />
          <MarketingBazaarCard category={category} compact={compact} />
        </div>
      ) : null}
      {mode === 'Discover' ? <div className={styles.shellDiscover}><MarketingVideoCard compact /><MarketingEventCard compact /></div> : null}
      {mode === 'Hamro TV' ? <MarketingVideoCard compact={compact} /> : null}
    </div>
  );
}

function FeatureIcon({ feature }: { feature: FeatureTab }) {
  if (feature === 'Community') return <UsersThree weight="fill" />;
  if (feature === 'Bazaar') return <Storefront weight="fill" />;
  if (feature === 'Jobs & Housing') return <Briefcase weight="fill" />;
  if (feature === 'Discover') return <Buildings weight="fill" />;
  return <FilmSlate weight="fill" />;
}

function SectionCopy({ label, title, copy, cta }: { label: string; title: React.ReactNode; copy: string; cta: string }) {
  return (
    <div className={styles.sectionCopy}>
      <p className={styles.kicker}>{label}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
      <a href="#download">{cta}<ArrowRight weight="bold" aria-hidden="true" /></a>
    </div>
  );
}

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState<FeatureTab>('Community');
  const [bazaarCategory, setBazaarCategory] = useState<BazaarCategory>('Housing');

  const focusFeature = (feature: FeatureTab) => {
    setActiveFeature(feature);
    requestAnimationFrame(() => document.getElementById(`feature-tab-${feature.toLowerCase().replaceAll(' ', '-').replace('&', 'and')}`)?.focus());
  };

  const handleFeatureKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, feature: FeatureTab) => {
    const currentIndex = featureTabs.indexOf(feature);
    let nextIndex = currentIndex;

    if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % featureTabs.length;
    else if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + featureTabs.length) % featureTabs.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = featureTabs.length - 1;
    else return;

    event.preventDefault();
    focusFeature(featureTabs[nextIndex]);
  };

  return (
    <div className={styles.page}>
      <MarketingNavBar mobileMenuOpen={mobileMenuOpen} onToggle={() => setMobileMenuOpen((open) => !open)} />
      <main id="top">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.heroEyebrow}><span>uNepal</span> / Hamro Social Network</p>
              <h1 id="hero-title">Your Nepalese world.<br /><span>One connected place.</span></h1>
              <p>Community, Bazaar, videos and everyday connection—thoughtfully brought together in one app.</p>
              <StoreBadges eager />
            </div>
            <div className={styles.heroVisual} aria-label="Curated uNepal marketing preview">
              <div className={styles.heroShell}><MarketingAppShell compact /></div>
              <div className={styles.heroBazaar}><MarketingBazaarCard compact /></div>
              <div className={styles.heroEvent}><MarketingEventCard compact /></div>
            </div>
          </div>
        </section>

        <section className={styles.featureDemo} aria-labelledby="feature-demo-title">
          <h2 id="feature-demo-title" className={styles.srOnly}>Explore uNepal features</h2>
          <div className={styles.featureTabs} role="tablist" aria-label="Explore uNepal features">
            {featureTabs.map((feature) => (
              <button
                id={`feature-tab-${feature.toLowerCase().replaceAll(' ', '-').replace('&', 'and')}`}
                key={feature}
                type="button"
                role="tab"
                tabIndex={activeFeature === feature ? 0 : -1}
                aria-selected={activeFeature === feature}
                aria-controls="feature-preview"
                onClick={() => setActiveFeature(feature)}
                onKeyDown={(event) => handleFeatureKeyDown(event, feature)}
              >
                <FeatureIcon feature={feature} /><span>{feature}</span>
              </button>
            ))}
          </div>
          <div
            id="feature-preview"
            key={activeFeature}
            className={styles.featurePanel}
            role="tabpanel"
            tabIndex={0}
            aria-labelledby={`feature-tab-${activeFeature.toLowerCase().replaceAll(' ', '-').replace('&', 'and')}`}
          >
            <div className={styles.featureCopy}>
              <p className={styles.kicker}>Inside uNepal</p>
              <h2>{activeFeature === 'Community' ? 'Stay close to your community.' : activeFeature === 'Bazaar' ? 'Find local value with less noise.' : activeFeature === 'Jobs & Housing' ? 'Make the next move easier.' : activeFeature === 'Discover' ? 'See what is happening around you.' : 'Watch stories that feel closer.'}</h2>
              <p>{activeFeature === 'Community' ? 'One clear place for groups, posts and everyday conversation.' : activeFeature === 'Bazaar' ? 'Browse concise listings across jobs, housing, services and more.' : activeFeature === 'Jobs & Housing' ? 'Useful opportunities, presented simply and clearly.' : activeFeature === 'Discover' ? 'Events, businesses and local stories in one connected view.' : 'Community-led video and local highlights, without the clutter.'}</p>
            </div>
            <MarketingAppShell mode={activeFeature} />
          </div>
        </section>

        <section id="community" className={styles.communitySection} aria-labelledby="community-title">
          <div className={styles.sectionInner}>
            <SectionCopy label="Community" title={<>Your people,<br />in one place.</>} copy="Join groups, share moments and stay connected to the communities that matter." cta="Explore Community" />
            <div className={styles.communityVisual}>
              <MarketingPostCard />
              <MarketingGroupCard />
              <div className={styles.peopleCard}><p className={styles.cardLabel}>People around you</p><MarketingProfileChip /><span>Find familiar faces and new connections.</span></div>
            </div>
          </div>
        </section>

        <div className={styles.productPair}>
          <section id="bazaar" className={styles.bazaarSection} aria-labelledby="bazaar-title">
            <SectionCopy label="Bazaar" title={<>Find. Post. Get things<br />done locally.</>} copy="Buy, sell, hire or request—everything useful in one clear place." cta="Explore Bazaar" />
            <MarketingCategoryTabs value={bazaarCategory} onChange={setBazaarCategory} />
            <MarketingBazaarCard category={bazaarCategory} />
            <div className={styles.listingRows}>
              <button type="button" onClick={() => setBazaarCategory('Jobs')}><Briefcase /><span><strong>Graphic Designer</strong><small>Remote</small></span><CaretRight /></button>
              <button type="button" onClick={() => setBazaarCategory('Buy & Sell')}><ShoppingBagOpen /><span><strong>Dining table</strong><small>Lalitpur</small></span><CaretRight /></button>
            </div>
          </section>

          <section id="discover" className={styles.discoverSection} aria-labelledby="discover-title">
            <SectionCopy label="Discover" title={<>Watch local stories<br />that inspire.</>} copy="Discover community video, events and useful dates without the noise." cta="Explore Discover" />
            <MarketingVideoCard />
            <div className={styles.discoverSupport}><MarketingEventCard /><MarketingCalendar /></div>
          </section>
        </div>

        <section id="business" className={styles.trustSection} aria-label="More ways to connect">
          <div><ShieldCheck weight="fill" /><span><strong>Safe & respectful</strong><small>Clear community tools</small></span></div>
          <div><Briefcase weight="fill" /><span><strong>Jobs & housing</strong><small>Useful local opportunities</small></span></div>
          <div><Storefront weight="fill" /><span><strong>Local business</strong><small>Services made easier</small></span></div>
          <div><ChatCircle weight="fill" /><span><strong>Easy messaging</strong><small>Connection in one place</small></span></div>
        </section>

        <section id="download" className={styles.downloadSection} aria-labelledby="download-title">
          <div className={styles.downloadInner}>
            <div className={styles.downloadCopy}>
              <div className={styles.downloadBrand}><Image src="/assets/logo.png" alt="" width={52} height={52} /><span>uNepal</span></div>
              <h2 id="download-title">Make everyday<br />more <span>connected.</span></h2>
              <p>Community, Bazaar and local discovery—together in one thoughtfully designed app.</p>
              <StoreBadges compact />
            </div>
            <div className={styles.downloadVisual}><MarketingAppShell compact /></div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a className={styles.footerBrand} href="#top" aria-label="uNepal home"><Image src="/assets/logo.png" alt="" width={38} height={38} /><span>uNepal</span></a>
        <p>Made for Nepalese people.</p>
        <nav aria-label="Legal links"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/child-safety-standards">Safety</a><a href="/community">Community Guidelines</a><a href="mailto:hello@unepal.com">Contact</a></nav>
        <small>Apple and the Apple logo are trademarks of Apple Inc. Google Play and the Google Play logo are trademarks of Google LLC.</small>
      </footer>
    </div>
  );
}
