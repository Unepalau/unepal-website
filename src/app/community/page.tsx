import type { Metadata } from 'next';

import PolicyPage, {
  PolicyList,
  PolicySection,
  PolicyLead,
  PolicyNote,
  PolicySubsection,
} from '@/components/policy/PolicyPage';
import { SOCIAL_IMAGE } from '@/lib/siteMetadata';

export const metadata: Metadata = {
  title: 'Community Guidelines | uNepal',
  description:
    'Community Guidelines for uNepal covering moderation, safety, and respectful participation.',
  alternates: {
    canonical: 'https://www.unepal.com/community',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.unepal.com/community',
    title: 'Community Guidelines | uNepal',
    description:
      'Read uNepal Community Guidelines for safe, respectful, and legal participation.',
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community Guidelines | uNepal',
    description:
      'Community Guidelines for uNepal covering moderation, safety, and respectful participation.',
    images: [SOCIAL_IMAGE],
  },
};

const helpfulLinks = [
  { href: '/#features', label: 'Features' },
  { href: '/#community', label: 'Community' },
  { href: '/#contact', label: 'Contact' },
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/privacy', label: 'Privacy Policy' },
];

const toc = [
  { href: '#scope-principles', label: 'Scope and principles' },
  { href: '#participation-identity', label: 'Participation and identity' },
  { href: '#content-standards', label: 'Content standards' },
  { href: '#listings-commercial', label: 'Listings and commercial areas' },
  { href: '#community-areas', label: 'Community spaces' },
  { href: '#messaging', label: 'Messaging and interactions' },
  { href: '#enforcement', label: 'Enforcement' },
  { href: '#reports-appeals', label: 'Reporting and appeals' },
];

const relatedLinks = [
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/child-safety-standards', label: 'Child Safety Standards' },
];

export default function CommunityGuidelines() {
  return (
    <PolicyPage
      badge="Community Rules"
      title="Community Guidelines"
      description="By using uNepal you agree to these Guidelines, our Terms, and our Privacy Policy. These rules apply globally across home feeds, community spaces, listings, news, blogs, messaging, and tools."
      status="Last updated: 7 April 2026"
      helpfulLinks={helpfulLinks}
      toc={toc}
      relatedLinks={relatedLinks}
      intro={
        <PolicyLead>
          uNepal&apos;s goal is simple: help Nepalese worldwide, and friends of the community,
          connect, find what they need, and keep culture close. If local laws or standards
          are stricter than these Guidelines, you must follow the stricter rules.
        </PolicyLead>
      }
      note={
        <PolicyNote>
          Emergencies or imminent danger? Contact your local emergency services first.
        </PolicyNote>
      }
    >
      <PolicySection id="scope-principles" title="1) Scope and principles">
        <PolicyList>
          <li><strong>Respect people.</strong> No harassment, hate, threats, slurs, or doxxing.</li>
          <li><strong>Be truthful.</strong> No scams, impersonation, or deceptive content.</li>
          <li><strong>Stay legal.</strong> Follow local laws and regulations.</li>
          <li><strong>Protect privacy.</strong> Do not post others&apos; private details without consent.</li>
          <li><strong>Be relevant.</strong> Post in the right place and avoid duplication and spam.</li>
          <li><strong>Use original or authorised content.</strong> Respect intellectual property.</li>
          <li><strong>Think safety-first.</strong> If it risks real-world harm, do not post it.</li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="participation-identity" title="2) Participation and identity">
        <PolicyList>
          <li><strong>One personal account per person.</strong> Businesses may operate separate business pages.</li>
          <li><strong>No fake onboarding.</strong> Fake accounts, impersonation, disposable-number onboarding, or VOIP-based verification evasion are prohibited.</li>
          <li><strong>Real-world responsibility.</strong> Whether you use your name or a handle, you are responsible for what you post, sell, or advertise.</li>
          <li><strong>Pages and Business representation.</strong> Only create or manage a Page or Business you legitimately represent.</li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="content-standards" title="3) Content standards (everywhere)">
        <p>Not allowed, including but not limited to:</p>
        <PolicyList>
          <li>Hate or dehumanising content, praise for violence, or terrorist activity.</li>
          <li>Harassment, stalking, sexual harassment, or non-consensual intimate images.</li>
          <li>Graphic violence, self-harm promotion, or sexually explicit media outside lawful contexts.</li>
          <li>Criminal activity, weapons, illicit drugs, stolen goods, or counterfeit items.</li>
          <li>Fraud and scams, including fee-to-apply jobs or rent-before-viewing demands.</li>
          <li>Privacy violations, identity documents, bank details, or doxxing.</li>
          <li>IP infringement, pirated media, or deepfakes used to mislead.</li>
          <li>Misinformation that poses immediate risk.</li>
          <li>Spam, fake reviews, engagement bait, bots, or automation without permission.</li>
          <li>Solicitation for paid adult services or exploitative content.</li>
        </PolicyList>
        <PolicyNote>
          Sensitive or graphic material should be labelled where contextually necessary. Do not
          post gore or shock content.
        </PolicyNote>
      </PolicySection>

      <PolicySection id="listings-commercial" title="4) Listings and commercial areas (Explore)">
        <p>uNepal is a community-first platform, not a broker. You are responsible for legal compliance and honesty in listings.</p>
        <PolicySubsection title="4.1 Marketplace">
          <PolicyList>
            <li>Be accurate about condition, price, location, and delivery or pickup.</li>
            <li>No illegal or regulated items, counterfeit goods, stolen property, or adult sexual services.</li>
            <li>Meet safely in public places and verify items before paying.</li>
          </PolicyList>
        </PolicySubsection>
        <PolicySubsection title="4.2 Services">
          <PolicyList>
            <li>Offer only services you can lawfully provide.</li>
            <li>Be clear on scope, pricing, availability, and how to contact you.</li>
            <li>No guaranteed-results claims for regulated or professional areas.</li>
          </PolicyList>
        </PolicySubsection>
        <PolicySubsection title="4.3 Events">
          <PolicyList>
            <li>Include organiser, date, time, venue, free or paid status, and age or safety requirements.</li>
            <li>Do not oversell capacity and follow venue rules and safety laws.</li>
            <li>Organisers and attendees are responsible for real-world conduct.</li>
          </PolicyList>
        </PolicySubsection>
        <PolicySubsection title="4.4 Rentals">
          <PolicyList>
            <li>Provide truthful rent, suburb or state, availability, inclusions, bond, and house rules.</li>
            <li>No discrimination and no unlawful fees.</li>
            <li>No rent-bidding language. Be ready to verify right-to-let if asked.</li>
          </PolicyList>
        </PolicySubsection>
        <PolicySubsection title="4.5 Jobs">
          <PolicyList>
            <li>Include employer or Page, title, location, duties, hours, and pay information where applicable.</li>
            <li>No fees to apply, no unlawful unpaid trials, and no below-minimum pay.</li>
            <li>Be honest about visa and work-rights requirements.</li>
          </PolicyList>
        </PolicySubsection>
      </PolicySection>

      <PolicySection id="community-areas" title="5) Community (Circles, Pages, Business Directory)">
        <PolicyList>
          <li><strong>Circles and moderation:</strong> Circle creators and admins must moderate effectively and fairly in line with global uNepal rules.</li>
          <li><strong>Local privacy warning:</strong> Joining hyper-local groups can reveal approximate demographic or suburb-level signals.</li>
          <li><strong>Pages:</strong> Use Pages for official updates, offers, and service info. Keep business identity current.</li>
          <li><strong>Directory:</strong> Only legitimate businesses. Verified badges, if offered, can be removed for misuse.</li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="discussions-downvoting" title="6) Discussions and vote moderation">
        <PolicyList>
          <li><strong>Quality through voting:</strong> Our discussion forums rely on user voting to surface quality content.</li>
          <li><strong>Downvoting rules:</strong> Downvoting is meant for low-quality content, off-topic spam, or misleading information, not harmless disagreement.</li>
          <li><strong>Vote manipulation:</strong> Coordinated brigading against a specific user or group is considered harassment.</li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="news-blogs-recipes" title="7) News, Blogs, and Recipes">
        <PolicyList>
          <li><strong>News:</strong> Clearly state sources, distinguish reporting from opinion, and avoid plagiarism.</li>
          <li><strong>Blogs:</strong> Use your own words, cite references, and debate ideas rather than attacking people.</li>
          <li><strong>Recipes:</strong> Share ingredients and steps, and use your own photos or licensed images.</li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="messaging" title="8) Messaging, comments, and interactions">
        <PolicyList>
          <li>No spam or mass unsolicited messages.</li>
          <li>No harassment, stalking, threats of physical harm, or pressure for money or sensitive documents.</li>
          <li>Keep disagreements civil. Attack ideas, not people.</li>
          <li>Do not publish private messages without consent unless reporting abuse to us.</li>
          <li>Messages are not end-to-end encrypted, so avoid sharing sensitive personal or financial details.</li>
          <li>Use block, mute, and report tools when someone is abusive or unsafe.</li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="reviews" title="9) Ratings and reviews">
        <PolicyList>
          <li>Reviews must reflect first-hand experience. No review swaps or paid or fake ratings.</li>
          <li>Businesses and Pages may reply politely to feedback but must not disclose private customer information.</li>
          <li>Coordinated brigading to manipulate ratings is prohibited.</li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="media-minors-privacy" title="10) Media, minors, and privacy">
        <PolicyList>
          <li>Get consent before posting identifiable photos or videos of others.</li>
          <li>Take extra care with minors. Avoid school uniforms, precise locations, and full names.</li>
          <li>Remove media upon a valid privacy request, such as a parent requesting removal of a child&apos;s image.</li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="tools" title="11) Tools (Calendar, Rashifal, Forex, Calculators)">
        <p>These are informational tools only, not financial, legal, medical, or migration advice.</p>
        <PolicyList>
          <li><strong>Financial data:</strong> Market data is informational only. uNepal is not a registered financial adviser or broker.</li>
          <li><strong>Forex and calculators:</strong> Informational only. Verify with official sources before decisions.</li>
          <li><strong>Astrology and Rashifal:</strong> Provided for entertainment purposes only.</li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="frequency-promotions" title="12) Frequency, cross-posting, and promotions">
        <PolicyList>
          <li>Do not flood feeds. Reposting identical promos daily or blasting multiple Circles will be treated as spam.</li>
          <li>Disclose paid partnerships or sponsorships with clear labels.</li>
          <li>Keep promotions accurate. No bait pricing or bait-and-switch.</li>
          <li>Advertisers and brands are legally responsible for the claims, offers, and compliance of their own ads.</li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="enforcement" title="13) Enforcement (how we act)">
        <p>We look at severity, intent, impact, and history. Possible actions include:</p>
        <PolicyList>
          <li><strong>Educate and nudge:</strong> Labels, edit suggestions, re-categorise, or merge duplicates.</li>
          <li><strong>Remove or limit:</strong> Delete content, hide it from discovery, limit posting or messaging, or require verification.</li>
          <li><strong>Suspend:</strong> Temporary account restriction.</li>
          <li><strong>Ban:</strong> Permanent removal for egregious or repeated violations.</li>
          <li><strong>Device ban:</strong> Permanent device-level restrictions for severe abuse or repeated enforcement evasion.</li>
          <li><strong>Escalate:</strong> Contact venues, platforms, or authorities where legally required or to prevent harm.</li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="reports-appeals" title="14) Reporting and appeals">
        <PolicyList>
          <li>Tap <strong>Report</strong> on any post, profile, or listing, or email <a href="mailto:hello@unepal.com" className="font-bold text-brand-primary">hello@unepal.com</a> for urgent issues.</li>
          <li>Use block or mute tools immediately if another user is abusive or unsafe.</li>
          <li>Include links, screenshots, and a short description of the problem.</li>
          <li>We prioritise valid child-safety and serious-abuse reports for action within 24 hours.</li>
          <li>If your post is removed or your account restricted, you can appeal within 14 days.</li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="brand-ip" title="15) Brand and IP use">
        <PolicyList>
          <li>Do not use uNepal&apos;s brand, logos, or UI elements without permission.</li>
          <li>Do not imitate official government or emergency service logos, and clearly identify parody or satire.</li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="special-topics" title="16) Special topics">
        <PolicyList>
          <li><strong>Politics and public interest:</strong> Debate is welcome; hate or targeted harassment is not.</li>
          <li><strong>Health and crisis events:</strong> Avoid harmful misinformation and link to official guidance when in doubt.</li>
          <li><strong>Fundraising:</strong> Be transparent about who receives funds, how, and through what platform.</li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="updates-contact" title="17) Updates and contact">
        <p>
          We may update these Guidelines as features or laws change. Major updates will be
          announced in-app. Questions or feedback can be sent to{' '}
          <a href="mailto:hello@unepal.com" className="font-bold text-brand-primary">
            hello@unepal.com
          </a>
          .
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
