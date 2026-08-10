import type { Metadata } from 'next';
import Link from 'next/link';

import PolicyPage, {
  PolicyLead,
  PolicyList,
  PolicyNote,
  PolicySection,
  PolicySubsection,
} from '@/components/policy/PolicyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | uNepal',
  description:
    'Learn how uNepal collects, uses, and protects information across our website and mobile app.',
  alternates: {
    canonical: 'https://www.unepal.com/privacy',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.unepal.com/privacy',
    title: 'Privacy Policy | uNepal',
    description:
      'Learn how uNepal collects, uses, and protects information across our website and mobile app.',
    images: ['https://www.unepal.com/assets/hero-mockup.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | uNepal',
    description:
      'Learn how uNepal collects, uses, and protects information across our website and mobile app.',
    images: ['https://www.unepal.com/assets/hero-mockup.jpg'],
  },
};

const helpfulLinks = [
  { href: '/#features', label: 'Features' },
  { href: '/#community', label: 'Community' },
  { href: '/#contact', label: 'Contact' },
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/community', label: 'Community Guidelines' },
];

const toc = [
  { href: '#scope', label: 'What this Policy covers' },
  { href: '#collection', label: 'What we collect' },
  { href: '#purposes', label: 'Why we use it' },
  { href: '#sharing', label: 'How we share information' },
  { href: '#rights', label: 'Your choices and rights' },
  { href: '#security', label: 'Security' },
  { href: '#retention', label: 'Retention' },
  { href: '#complaints', label: 'Complaints and contact' },
];

const relatedLinks = [
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/community', label: 'Community Guidelines' },
  { href: '/child-safety-standards', label: 'Child Safety Standards' },
];

export default function PrivacyPolicy() {
  return (
    <PolicyPage
      badge="Legal Document"
      title="Privacy Policy"
      description="This Policy explains how we collect, use, share, and protect personal information when you use the uNepal website and mobile application. It is written to apply globally and reflects privacy laws that may apply where our services are used."
      status="Last updated: 7 April 2026"
      helpfulLinks={helpfulLinks}
      toc={toc}
      relatedLinks={relatedLinks}
      intro={
        <PolicyLead>
          If you do not agree with this Policy, please do not use our services. &quot;Personal
          information&quot; means information about an identified person or someone reasonably
          identifiable, or similar definitions under applicable law. If local laws provide
          stronger protections, we apply those protections to the extent required.
        </PolicyLead>
      }
      note={
        <PolicyNote>
          If you are not satisfied with our response, you may contact your local privacy
          regulator.
        </PolicyNote>
      }
    >
      <PolicySection id="scope" title="1) What this Policy covers">
        <p>
          This Policy applies to our website, unepal.com, and mobile application,
          collectively the Services, including Profiles, Posts, Circles, Pages, Business
          Directory, Marketplace, Rentals, Jobs, Services, Events, Blogs, Recipes, Hamro TV,
          Discussions, Rewards, notifications, contact forms, and admin banners.
        </p>
      </PolicySection>

      <PolicySection id="collection" title="2) What we collect">
        <PolicySubsection title="A. You give us">
          <PolicyList>
            <li>
              <strong>Account and profile:</strong> Name, email, phone, password, profile
              photo, suburb or postcode, bio, and any additional information you add.
            </li>
            <li>
              <strong>Auth and onboarding records:</strong> Verification data such as phone
              numbers, OTP request metadata, login timestamps, IP and device signals, and
              anti-fraud records used to secure account creation and prevent fake account
              abuse.
            </li>
            <li>
              <strong>Listings, posts, and interactions:</strong> Details and media for
              Marketplace, Rentals, Jobs, Services, Events, Blogs, Recipes, community
              Circles, and Discussions, including your comments and votes.
            </li>
            <li>
              <strong>Rewards and gamification:</strong> Information related to your
              participation in the Rewards system, including point accumulation from actions
              within the app.
            </li>
            <li>
              <strong>Pages and directory:</strong> Page name, category, logos, contact
              details, service area, and hours.
            </li>
            <li>
              <strong>Events and RSVPs:</strong> Event submissions, RSVP status, and
              attendance intent where you choose to mark yourself as going or interested.
            </li>
            <li>
              <strong>Messages and reports:</strong> Content you send to other users or to
              us through support and safety reports.
            </li>
          </PolicyList>
        </PolicySubsection>

        <PolicySubsection title="B. Collected automatically">
          <PolicyList>
            <li>
              <strong>Usage and device:</strong> App actions, video view durations on Hamro
              TV, session duration, crash logs, IP address, model, operating system, app
              version, and diagnostics.
            </li>
            <li>
              <strong>Approximate location:</strong> Based on the network or suburb you
              provide to power local discovery. We do not collect precise GPS unless you
              deliberately include an address in a listing.
            </li>
            <li>
              <strong>Group and community signals:</strong> Joining local Circles, groups,
              Pages, or local discussions may reveal approximate demographic or suburb-level
              relevance to other members of that community.
            </li>
            <li>
              <strong>Website requests and cookies:</strong> Our hosting and delivery
              providers may process standard technical request data such as IP address,
              browser type, device information, and requested pages to serve and secure the
              site. We do not use Google Analytics or third-party website analytics tags on
              the website.
            </li>
          </PolicyList>
        </PolicySubsection>

        <PolicySubsection title="C. From service providers">
          <PolicyList>
            <li>
              <strong>Firebase (Google):</strong> Authentication, messaging, and storage for
              app features, including technical identifiers, tokens, and service logs.
            </li>
            <li>
              <strong>Website hosting and delivery providers:</strong> Technical request
              processing needed to deliver, cache, and secure the website.
            </li>
            <li>
              <strong>Email providers:</strong> If you contact us by email or through the
              website contact section, your message will be handled through standard email
              systems used by you and by us.
            </li>
            <li>
              <strong>Payments (future):</strong> If added later, processors may share
              billing status and transaction references.
            </li>
          </PolicyList>
        </PolicySubsection>

        <PolicySubsection title="D. Sensitive information">
          <p>
            We do not deliberately seek sensitive information. If you include it in content,
            you consent to us handling it under this Policy.
          </p>
        </PolicySubsection>
      </PolicySection>

      <PolicySection id="purposes" title="3) Why we use it">
        <PolicyList>
          <li>
            <strong>Run the app:</strong> Create and manage accounts, profiles, listings,
            Pages, posts, messages, notifications, Rewards tracking, and saved alerts.
          </li>
          <li>
            <strong>Safety and moderation:</strong> Detect and prevent scams, fraud, and
            abuse, review reports, and enforce policies.
          </li>
          <li>
            <strong>Personalisation:</strong> Recommend relevant Circles, Pages, listings,
            videos, and events based on your interactions.
          </li>
          <li>
            <strong>Service improvement:</strong> Fix crashes, improve performance, and build
            features based on support, moderation, reliability, and product feedback.
          </li>
          <li>
            <strong>Legal and compliance:</strong> Handle complaints and respond to lawful
            requests.
          </li>
          <li>
            <strong>Marketing (optional):</strong> Send product updates or promotions with
            consent and easy opt-out.
          </li>
        </PolicyList>

        <PolicySubsection title="Messaging, blocking, and moderator review">
          <PolicyList>
            <li>
              <strong>Encryption expectations:</strong> In-app messaging is encrypted in
              transit, but it is not described as end-to-end encrypted unless we expressly
              state otherwise.
            </li>
            <li>
              <strong>Block and safety tools:</strong> We provide controls such as block
              lists, report flows, and notification settings so you can control who can
              interact with you.
            </li>
            <li>
              <strong>Review on report:</strong> If content or behaviour is reported for
              harassment, scams, child-safety concerns, or other policy violations,
              authorised moderators and global admins may review relevant chat logs, media,
              metadata, and account activity needed to investigate the report.
            </li>
          </PolicyList>
        </PolicySubsection>

        <PolicySubsection title="Legal bases where required by law">
          <PolicyList>
            <li>
              <strong>Contract / providing the Services:</strong> We process account,
              profile, messaging, listing, and support data when needed to provide the
              features you request.
            </li>
            <li>
              <strong>Legitimate interests:</strong> We process data to keep the platform
              secure, prevent abuse, understand reliability issues, improve product
              performance, and respond to safety concerns.
            </li>
            <li>
              <strong>Consent:</strong> We rely on consent for optional marketing and where
              you choose to provide optional or sensitive information.
            </li>
            <li>
              <strong>Legal obligations and claims:</strong> We may process and retain
              information where necessary to comply with law, resolve disputes, enforce our
              terms, or protect people from harm.
            </li>
          </PolicyList>
        </PolicySubsection>
      </PolicySection>

      <PolicySection id="sharing" title="4) How we share information">
        <PolicySubsection title="A. With other users">
          <p>
            Your name, photo, and content are shown according to the audience you choose,
            such as public, followers, or Circle members.
          </p>
        </PolicySubsection>
        <PolicySubsection title="B. With service providers">
          <p>
            We rely on trusted vendors to operate the app, including Firebase, hosting and
            CDN providers, and standard email infrastructure. They process data on our behalf
            or under their own terms depending on the service.
          </p>
        </PolicySubsection>
        <PolicySubsection title="C. Legal and safety">
          <p>
            We may disclose information to comply with law, protect people from harm,
            investigate breaches, or answer regulator requests.
          </p>
        </PolicySubsection>
        <PolicySubsection title="D. Business changes">
          <p>
            If our company is sold or restructured, information may transfer as part of the
            process, subject to this Policy.
          </p>
        </PolicySubsection>
        <PolicySubsection title="E. Aggregated insights">
          <p>
            We may share de-identified or aggregated statistics, such as feature usage, video
            views, or popular discussions, that do not identify any individual.
          </p>
        </PolicySubsection>
      </PolicySection>

      <PolicySection id="overseas" title="5) Cross-border disclosure">
        <p>
          Our providers may process or store data in the United States and other countries
          where their infrastructure or support teams operate. Where required by law, we rely
          on contractual commitments, adequacy mechanisms, or similar safeguards designed to
          protect transferred personal information.
        </p>
      </PolicySection>

      <PolicySection id="rights" title="6) Your choices and rights">
        <PolicyList>
          <li>
            <strong>Access:</strong> Ask for a copy of your personal information.
          </li>
          <li>
            <strong>Correction:</strong> Ask us to fix inaccurate or outdated information.
          </li>
          <li>
            <strong>Privacy controls:</strong> Choose audiences for posts and listings, and
            manage alerts, push notifications, blocking, and messaging preferences.
          </li>
          <li>
            <strong>Marketing opt-out:</strong> Unsubscribe from emails or SMS and turn off
            push notifications in device settings.
          </li>
          <li>
            <strong>Delete account:</strong> Request deletion in-app, where available, or by
            email. We remove data from active systems after validation and then let remaining
            backup copies expire under our normal cycle unless retention is still required.
          </li>
          <li>
            <strong>Regional rights:</strong> Depending on where you live, you may also have
            rights to object to or restrict processing, withdraw consent, request data
            portability, or appeal decisions about your data.
          </li>
        </PolicyList>
        <p>
          To exercise a right, email{' '}
          <a href="mailto:hello@unepal.com" className="font-bold text-brand-primary">
            hello@unepal.com
          </a>{' '}
          with &quot;Privacy Request&quot; in the subject, or use our{' '}
          <Link href="/#contact" className="font-bold text-brand-primary">
            contact section
          </Link>
          .
        </p>
      </PolicySection>

      <PolicySection id="security" title="7) Security">
        <p>
          We use technical and organisational measures, including encryption in transit,
          restricted access, Firebase Authentication and App Check, logging, and monitoring.
          No system is 100% secure, so keep your device and credentials safe.
        </p>
        <PolicySubsection title="User-generated content safety commitments">
          <PolicyList>
            <li>
              <strong>Blocking and filtering:</strong> We maintain mechanisms that allow
              users and moderators to block abusive users, report objectionable content, and
              filter or restrict content under review.
            </li>
            <li>
              <strong>24-hour action target:</strong> We prioritise valid reports involving
              child safety, violent threats, severe harassment, and similar high-risk user
              content and aim to review and take action within 24 hours.
            </li>
            <li>
              <strong>Zero-tolerance CSAM response:</strong> Suspected Child Sexual Abuse
              Material or related exploitation activity may lead to immediate removal,
              permanent account and device bans, evidence preservation, and reporting to law
              enforcement or child-protection hotlines without prior notice.
            </li>
          </PolicyList>
        </PolicySubsection>
      </PolicySection>

      <PolicySection id="children" title="8) Children and young people">
        <p>
          The app is for people aged 16 and over. If you are 16 or 17, you confirm a parent
          or guardian has consented. If we learn that someone under 16 has an account, we
          will close it and delete personal information from active systems where practical.
        </p>
      </PolicySection>

      <PolicySection id="payments" title="9) Payments and premium features (future)">
        <p>The app is currently free. If we introduce payments, subscriptions, or paid placements, we will:</p>
        <PolicyList>
          <li>Use a PCI-compliant processor for billing data.</li>
          <li>Update this Policy and our Terms.</li>
          <li>Ask for any extra consents that are needed.</li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="retention" title="10) Retention">
        <p>
          We keep different categories of personal information for different periods. Account,
          profile, and in-app content are generally kept while your account is active. Support
          enquiries, moderation reports, audit logs, and security records may be retained
          longer where reasonably necessary for safety, fraud prevention, legal compliance, or
          dispute resolution.
        </p>
        <p>
          Phone numbers used for authentication are typically kept while the account is active
          and for a limited period after deletion where needed to prevent fraud, investigate
          abuse, or comply with legal obligations. OTP request logs, verification metadata,
          and related anti-fraud records may also be retained for security review windows.
        </p>
      </PolicySection>

      <PolicySection id="ndb" title="11) Data breach notifications">
        <p>
          If a data breach is likely to cause serious harm, we will assess it promptly and
          notify affected individuals and regulators as required by law, including any
          mandatory breach-notification schemes that apply.
        </p>
      </PolicySection>

      <PolicySection id="changes" title="12) Changes to this Policy">
        <p>
          We may update this Policy if our practices or the law change. For material changes,
          we will give reasonable notice in-app or by email. Using the app after the new
          effective date means you accept the updated Policy.
        </p>
      </PolicySection>

      <PolicySection id="complaints" title="13) Complaints and contact">
        <div className="rounded-[1.6rem] border border-slate-200 bg-slate-50/80 p-6">
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:hello@unepal.com" className="font-bold text-brand-primary">
              hello@unepal.com
            </a>
          </p>
          <p>
            <strong>Website:</strong> Use our{' '}
            <Link href="/#contact" className="font-bold text-brand-primary">
              contact section
            </Link>{' '}
            to send us a message directly
          </p>
          <p>
            <strong>Copyright notices:</strong> Send infringement reports to{' '}
            <a
              href="mailto:hello@unepal.com?subject=Copyright%20Notice"
              className="font-bold text-brand-primary"
            >
              hello@unepal.com
            </a>{' '}
            with the subject &quot;Copyright Notice&quot;
          </p>
        </div>
      </PolicySection>
    </PolicyPage>
  );
}
