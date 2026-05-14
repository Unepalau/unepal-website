import type { Metadata } from 'next';
import Link from 'next/link';

import PolicyPage, {
  PolicyLead,
  PolicyList,
  PolicySection,
} from '@/components/policy/PolicyPage';

export const metadata: Metadata = {
  title: 'Child Safety Standards | uNepal',
  description:
    'uNepal Child Safety Standards: zero-tolerance policy against CSAE, reporting pathways, and enforcement for our community worldwide.',
  alternates: {
    canonical: 'https://www.unepal.com/child-safety-standards',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.unepal.com/child-safety-standards',
    title: 'Child Safety Standards | uNepal',
    description:
      'Zero-tolerance policy against CSAE with reporting and enforcement details for the uNepal community.',
    images: ['https://www.unepal.com/assets/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Child Safety Standards | uNepal',
    description: 'Zero-tolerance policy against CSAE with reporting and enforcement details.',
    images: ['https://www.unepal.com/assets/og-image.png'],
  },
};

const helpfulLinks = [
  { href: '/#community', label: 'Community' },
  { href: '/#contact', label: 'Contact' },
  { href: '/community', label: 'Community Guidelines' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
];

const toc = [
  { href: '#zero-tolerance', label: 'Zero-tolerance for CSAE' },
  { href: '#definition', label: 'Who is a child' },
  { href: '#prohibited', label: 'Prohibited conduct' },
  { href: '#reporting', label: 'Reporting a concern' },
  { href: '#enforcement', label: 'Review and escalation' },
  { href: '#age-limits', label: 'Age limits and interactions' },
  { href: '#detection', label: 'Detection and prevention' },
  { href: '#contact', label: 'Contact' },
];

const relatedLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/community', label: 'Community Guidelines' },
];

export default function ChildSafetyStandards() {
  return (
    <PolicyPage
      badge="Safety First"
      title="Child Safety Standards"
      description="These standards apply globally to all features of uNepal, including our website and mobile application. We maintain a zero-tolerance policy for Child Sexual Abuse and Exploitation, or CSAE, and take rapid action on reports."
      status="Effective: 21 October 2025 | Last updated: 7 April 2026"
      helpfulLinks={helpfulLinks}
      toc={toc}
      relatedLinks={relatedLinks}
      intro={
        <PolicyLead>
          The safety of children using or interacting with our Services is our highest
          priority. By using uNepal, you agree to adhere strictly to these Child Safety
          Standards.
        </PolicyLead>
      }
      note={
        <p className="border-t border-slate-200 pt-4 text-xs font-medium leading-6 text-slate-500">
          This page satisfies Google Play&apos;s published safety standards requirement by
          explicitly prohibiting CSAE, naming the app and developer, and providing clear
          reporting and enforcement information.
        </p>
      }
    >
      <PolicySection id="zero-tolerance" title="1) Zero-tolerance for CSAE">
        <p>
          uNepal has a <strong>zero-tolerance policy</strong> for <strong>Child Sexual Abuse
          and Exploitation</strong>, including grooming, sexualisation of minors, sexual
          content involving minors, trafficking, extortion, or any conduct that endangers a
          child. Such content and behaviour are prohibited on the app and may result in
          immediate removal, permanent account and device enforcement, and emergency
          escalation where appropriate.
        </p>
      </PolicySection>

      <PolicySection id="definition" title="2) Who is a child">
        <p>
          A child means any person under the age of 18. If we cannot reasonably verify that a
          person is 18 or older, we treat them as a child.
        </p>
      </PolicySection>

      <PolicySection id="prohibited" title="3) Prohibited content and conduct">
        <PolicyList>
          <li>Any sexual or romantic content featuring a child, including images, videos, text, emojis, or AI-generated depictions.</li>
          <li>Soliciting, contacting, or grooming a child for sexual purposes.</li>
          <li>Sexualised comments, sexual jokes, fetishisation, or requests involving a child.</li>
          <li>Sexual exploitation, trafficking, extortion, threats, or blackmail involving a child.</li>
          <li>Links to, instructions for, or admission of possession or distribution of CSAE material.</li>
          <li>Attempts to bypass or defeat our age gates, verification, or enforcement actions.</li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="reporting" title="4) Reporting a concern">
        <p>If you see content or behaviour that may involve CSAE or child endangerment, report it immediately:</p>
        <PolicyList>
          <li><strong>In-app:</strong> Tap <em>Report</em> on posts, profiles, listings, or messages and choose <em>Child Safety</em>.</li>
          <li><strong>Block first if needed:</strong> If a user is contacting or grooming you or someone else, use the block tool immediately and then report.</li>
          <li><strong>Email:</strong> <a href="mailto:hello@unepal.com" className="font-bold text-brand-primary">hello@unepal.com</a></li>
          <li><strong>Website:</strong> Use our <Link href="/#contact" className="font-bold text-brand-primary">contact section</Link>.</li>
          <li><strong>Imminent danger:</strong> Contact local police first.</li>
        </PolicyList>
        <p>Include links, usernames, and any context that helps us act quickly.</p>
      </PolicySection>

      <PolicySection id="enforcement" title="5) Review, removal, and escalation">
        <PolicyList>
          <li><strong>Rapid triage:</strong> Child-safety reports are prioritised and reviewed by trained moderators.</li>
          <li><strong>24-hour action target:</strong> Valid child-safety reports are prioritised for review and action within 24 hours.</li>
          <li><strong>Immediate action:</strong> We remove suspected CSAE content, disable sharing, and restrict involved accounts.</li>
          <li><strong>Permanent bans:</strong> Confirmed or strongly suspected CSAM-related conduct may trigger permanent account and device bans.</li>
          <li><strong>Escalation:</strong> Where appropriate, we report to law enforcement, relevant cybercrime units, child-protection hotlines, or bodies such as AFP, Nepal Police Cyber Bureau, and NCMEC, and preserve evidence consistent with applicable local laws.</li>
          <li><strong>Appeals:</strong> You may appeal moderation actions via the email above.</li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="age-limits" title="6) Age limits and interactions">
        <PolicyList>
          <li>The app is designed for users 16+ and intended for adults. Features connecting adults and minors are limited and monitored.</li>
          <li>Adults are prohibited from requesting or exchanging sexual content with anyone who appears to be a child.</li>
          <li>We may restrict messaging and discovery when signals suggest a user may be under 18.</li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="detection" title="7) Detection and prevention">
        <PolicyList>
          <li>We combine user reports, automated signals, and human review to detect potential CSAE.</li>
          <li>We use keyword, image, and behaviour-based signals to flag risk and limit reach while content is reviewed.</li>
          <li>We maintain mechanisms for blocking abusive users, filtering objectionable content, and restricting accounts while safety reviews are underway.</li>
          <li>We retain and share information with authorities when legally required or to protect children from harm.</li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="education" title="8) Education and resources">
        <p>
          Parents and guardians should discuss safe online behaviour with children and seek
          guidance from local authorities and child-safety organisations.
        </p>
      </PolicySection>

      <PolicySection id="contact" title="9) Contact">
        <p>
          Questions about these standards? Email{' '}
          <a href="mailto:hello@unepal.com" className="font-bold text-brand-primary">
            hello@unepal.com
          </a>{' '}
          or use our{' '}
          <Link href="/#contact" className="font-bold text-brand-primary">
            website contact section
          </Link>
          .
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
