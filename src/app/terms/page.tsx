import type { Metadata } from 'next';
import Link from 'next/link';

import PolicyPage, {
  PolicyLead,
  PolicyList,
  PolicySection,
} from '@/components/policy/PolicyPage';

export const metadata: Metadata = {
  title: 'Terms & Conditions | uNepal',
  description: 'uNepal Terms & Conditions for using the website and mobile app worldwide.',
  alternates: {
    canonical: 'https://www.unepal.com/terms',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.unepal.com/terms',
    title: 'Terms & Conditions | uNepal',
    description: 'Read the uNepal terms of service for using the website and mobile app worldwide.',
    images: ['https://www.unepal.com/assets/hero-mockup.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | uNepal',
    description: 'Read the uNepal terms of service for using the website and mobile app worldwide.',
    images: ['https://www.unepal.com/assets/hero-mockup.jpg'],
  },
};

const helpfulLinks = [
  { href: '/#features', label: 'Features' },
  { href: '/#community', label: 'Community' },
  { href: '/#contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/community', label: 'Community Guidelines' },
];

const toc = [
  { href: '#who-may-use', label: 'Who may use uNepal' },
  { href: '#account-security', label: 'Account and security' },
  { href: '#your-content', label: 'Your content and permissions' },
  { href: '#acceptable-use', label: 'Acceptable use' },
  { href: '#listings', label: 'Listings' },
  { href: '#safety', label: 'Safety and takedowns' },
  { href: '#acl', label: 'Consumer rights and disclaimers' },
  { href: '#law', label: 'Disputes and governing law' },
];

const relatedLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/community', label: 'Community Guidelines' },
  { href: '/child-safety-standards', label: 'Child Safety Standards' },
];

export default function TermsOfService() {
  return (
    <PolicyPage
      badge="Legal Document"
      title="Terms & Conditions"
      description="These Terms govern your use of the uNepal website, mobile application, and related services worldwide. If local laws grant you additional mandatory rights, those rights continue to apply."
      status="Last updated: 7 April 2026"
      helpfulLinks={helpfulLinks}
      toc={toc}
      relatedLinks={relatedLinks}
      intro={
        <PolicyLead>
          By downloading, accessing, or using uNepal, including our website and mobile
          application, you agree to these Terms and to our{' '}
          <Link href="/privacy" className="font-bold text-brand-primary">
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href="/community" className="font-bold text-brand-primary">
            Community Guidelines
          </Link>
          . If you do not agree, please do not use our Services.
        </PolicyLead>
      }
    >
      <PolicySection id="who-may-use" title="1) Who may use uNepal">
        <PolicyList>
          <li>
            <strong>Minimum age:</strong> You must be 16 or older, or the minimum age
            required by the app store in your region, whichever is higher.
          </li>
          <li>
            <strong>One person, one account:</strong> One personal account per person.
            Businesses may operate separate business pages.
          </li>
          <li>
            <strong>Core community:</strong> The experience is designed for Nepalese
            worldwide, but anyone may use the app if they follow these Terms.
          </li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="account-security" title="2) Your account and security">
        <PolicyList>
          <li>
            <strong>Accuracy:</strong> Provide truthful name, email or phone, and other
            profile data, and keep it current.
          </li>
          <li>
            <strong>No fake onboarding:</strong> Fake accounts, impersonation, use of
            disposable or unauthorised VOIP numbers for OTP verification, or use of another
            person&apos;s identity details are prohibited.
          </li>
          <li>
            <strong>Keep it safe:</strong> You are responsible for your login and devices.
            Notify us immediately about unauthorised access.
          </li>
          <li>
            <strong>Verification:</strong> We may request identity documents, business
            licences, or right-to-let proof to keep the platform secure.
          </li>
          <li>
            <strong>Compatibility:</strong> You need a supported device, operating system,
            and data plan. Any carrier or app store fees are yours.
          </li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="what-unepal-is" title="3) What uNepal is, and is not">
        <PolicyList>
          <li>
            <strong>Platform only:</strong> We provide community spaces, discovery tools,
            and listings. We do not broker, insure, background-check, or become a party to
            transactions between users.
          </li>
          <li>
            <strong>No built-in payments:</strong> uNepal does not hold, transfer, or settle
            money between users and is not a bank or financial adviser.
          </li>
          <li>
            <strong>Information only:</strong> Content is general information, not legal,
            financial, tenancy, employment, or migration advice.
          </li>
          <li>
            <strong>Third-party services:</strong> Some links, embeds, or integrations may be
            provided by third parties and can change or go offline.
          </li>
          <li>
            <strong>Transact at your own risk:</strong> Real-world transactions, inspections,
            job applications, rentals, services, and event attendance happen entirely at your
            own physical, financial, and legal risk.
          </li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="your-content" title="4) Your content and permissions">
        <PolicyList>
          <li>
            <strong>You own it:</strong> You keep the rights to the content you post.
          </li>
          <li>
            <strong>Licence to us:</strong> You grant uNepal a worldwide, royalty-free,
            transferable, sublicensable, perpetual licence to host, store, reproduce, adapt,
            publish, display, and distribute your content to operate, protect, promote, and
            improve the app, subject to your deletion rights and our retention obligations.
          </li>
          <li>
            <strong>Licence to other users:</strong> You grant other users a limited licence
            to access and interact with your content within the app, subject to your settings
            and these Terms.
          </li>
          <li>
            <strong>Promises:</strong> Your content must be lawful, accurate, not infringe
            intellectual property or privacy rights, and you must have the necessary consents
            for anyone shown.
          </li>
          <li>
            <strong>Retention:</strong> You are responsible for backups. We may remove or
            retain content to comply with the law or our Policies.
          </li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="acceptable-use" title="5) Acceptable use">
        <p>You agree not to post, list, message, or otherwise engage in:</p>
        <PolicyList>
          <li>
            <strong>Illegal, hateful, or harmful conduct:</strong> Fraud, scams,
            impersonation, doxxing, harassment, threats, sexualisation of minors, or
            instructions to commit a crime.
          </li>
          <li>
            <strong>Discrimination:</strong> Content that promotes hatred or prejudice based
            on protected attributes under applicable law.
          </li>
          <li>
            <strong>Spam and manipulation:</strong> Bots or scraping without consent, mass
            unsolicited messages, fake reviews, coordinated voting, or engagement baiting.
          </li>
          <li>
            <strong>IP abuse and unsafe goods:</strong> Counterfeit items, unauthorised IP
            use, or regulated or prohibited goods such as weapons, illegal drugs,
            prescription medication, wildlife products, stolen goods, or adult services.
          </li>
          <li>
            <strong>Security interference:</strong> Bypassing access controls, probing,
            scraping sensitive data, or reverse-engineering beyond what the law permits.
          </li>
          <li>
            <strong>Non-compliant listings:</strong> Jobs below minimum legal pay, rentals
            that break tenancy or anti-discrimination laws, pyramid schemes, or pay-to-work
            scams.
          </li>
        </PolicyList>
        <p>
          See the{' '}
          <Link href="/community" className="font-bold text-brand-primary">
            Community Guidelines
          </Link>{' '}
          for more detail. Breaches may lead to removal, limits, or account closure.
        </p>
      </PolicySection>

      <PolicySection id="rewards-and-discussions" title="6) Rewards and discussions">
        <PolicyList>
          <li>
            <strong>Rewards system:</strong> Points acquired through the Rewards system have
            no monetary value and cannot be redeemed for cash or used for real-life gambling.
          </li>
          <li>
            <strong>Anti-gaming:</strong> We actively monitor for artificial gaming of the
            Rewards or Discussion voting systems.
          </li>
          <li>
            <strong>Right to revoke:</strong> We may wipe scores, reset points, remove
            badges, or reverse rewards outcomes where we reasonably suspect abuse, fraud,
            bugs, or manipulation.
          </li>
          <li>
            <strong>Discussion forums:</strong> Robust debate is welcome, but all
            participation is subject to moderation and voting rules.
          </li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="listings" title="7) Listings: Rentals, Jobs, Services, Marketplace">
        <PolicyList>
          <li>
            <strong>Accuracy and disclosure:</strong> Listings must be accurate, current, and
            include all required disclosures such as rent, fees, or service scope.
          </li>
          <li>
            <strong>Business authenticity:</strong> Business Pages, directory profiles, and
            advertisements must represent a real business, organisation, or storefront that
            you are authorised to represent.
          </li>
          <li>
            <strong>Housing laws:</strong> Rental and housing content must comply with local
            fair housing, tenancy, anti-discrimination, and advertising laws.
          </li>
          <li>
            <strong>Jobs compliance:</strong> Do not advertise pay below minimum entitlements
            or create unlawful unpaid trials.
          </li>
          <li>
            <strong>No scam verticals:</strong> MLM schemes, pyramid schemes, fee-to-apply
            roles, pay-to-work offers, fake recruiter accounts, or misleading business
            opportunity listings are prohibited.
          </li>
          <li>
            <strong>Proof and checks:</strong> We may request documents, such as right-to-let,
            licences, or business proof.
          </li>
          <li>
            <strong>Safety and due diligence:</strong> We do not run background checks. You
            are responsible for verifying listings, people, and goods or services.
          </li>
          <li>
            <strong>No guarantees:</strong> We do not verify every listing and do not
            guarantee tenancy, employment, or service outcomes.
          </li>
          <li>
            <strong>Prohibited items:</strong> Prohibited categories include weapons, illegal
            drugs, prescription medicines, wildlife products, stolen goods, counterfeit
            goods, and adult sexual services.
          </li>
          <li>
            <strong>Advertising responsibility:</strong> Advertisers, sponsors, and
            businesses are legally responsible for the claims, offers, pricing, and
            compliance of their own ads and promotions.
          </li>
          <li>
            <strong>Reviews and ratings:</strong> Keep reviews honest and based on genuine
            experiences. We may moderate for fraud or policy conflicts.
          </li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="messages" title="8) Notifications and messaging">
        <PolicyList>
          <li>
            <strong>Service messages:</strong> You will receive transactional notices such as
            policy updates or safety alerts.
          </li>
          <li>
            <strong>Marketing:</strong> Where required by law, we will obtain consent and
            include easy opt-outs for commercial messages.
          </li>
          <li>
            <strong>Saved alerts:</strong> Manage saved searches and notifications in
            settings.
          </li>
          <li>
            <strong>Blocking tools:</strong> We provide controls such as blocking, muting,
            reporting, and notification settings to help you control who can contact you.
          </li>
          <li>
            <strong>Chat deletion:</strong> Deleting or clearing a conversation removes it
            from your inbox only. Other participants may retain their copies.
          </li>
          <li>
            <strong>Security note:</strong> Messaging in the app is not end-to-end encrypted.
          </li>
          <li>
            <strong>Moderator access:</strong> Authorised moderators and global admins may
            review reported chat content and account activity when needed to investigate
            harassment, scams, child-safety concerns, or other policy violations.
          </li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="privacy" title="9) Privacy and data">
        <PolicyList>
          <li>
            <strong>Privacy Policy:</strong> Our Privacy Policy details what we collect, why,
            how we protect it, and your rights under applicable privacy laws.
          </li>
          <li>
            <strong>Website requests:</strong> Our website may process standard technical
            request data needed to deliver and secure pages, but we do not use third-party
            website analytics tags.
          </li>
          <li>
            <strong>Contact forms:</strong> Messages submitted through our website contact
            section or email links are handled according to our Privacy Policy.
          </li>
          <li>
            <strong>App services:</strong> The app uses third-party providers, such as
            Firebase, for authentication, storage, messaging, and security.
          </li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="ip" title="10) Intellectual property">
        <PolicyList>
          <li>
            <strong>Our IP:</strong> The app, UI, code, logos, and other trademarks belong to
            us or our licensors.
          </li>
          <li>
            <strong>Your licence:</strong> We grant you a personal, revocable,
            non-transferable licence to use the app on your device.
          </li>
          <li>
            <strong>Feedback:</strong> Suggestions or ideas may be used without obligation or
            compensation.
          </li>
          <li>
            <strong>IP notices:</strong> If you believe content infringes your rights,
            contact{' '}
            <a href="mailto:hello@unepal.com" className="font-bold text-brand-primary">
              hello@unepal.com
            </a>
            .
          </li>
          <li>
            <strong>News and fair use:</strong> News snippets, headlines, and links may be
            aggregated for informational purposes only.
          </li>
          <li>
            <strong>User author liability:</strong> Blog and similar long-form authors remain
            legally responsible for their own claims.
          </li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="third-parties" title="11) Third-party services and stores">
        <p>
          The app depends on third-party vendors, such as hosting, messaging, and, if
          introduced, payments. Their terms apply. You also accept the Apple App Store and
          Google Play terms, and neither Apple nor Google is a party to your agreement with
          uNepal, except as required by law.
        </p>
      </PolicySection>

      <PolicySection id="safety" title="12) Safety, reporting, and takedowns">
        <PolicyList>
          <li>
            <strong>Moderation:</strong> We may review, limit, demote, or remove content or
            accounts that threaten safety or breach these Terms or related Policies.
          </li>
          <li>
            <strong>Automated review:</strong> We use automated tools, including AI, to
            detect harmful or policy-violating content. These tools can make mistakes and you
            can request review or appeal.
          </li>
          <li>
            <strong>Report and filter tools:</strong> Use in-app reporting, blocking,
            muting, and moderation tools to flag or limit scams, harassment, illegal, or
            restricted content.
          </li>
          <li>
            <strong>Response timing:</strong> We prioritise flagged child-safety and serious
            abuse reports and aim to review valid reports within 24 hours.
          </li>
          <li>
            <strong>CSAM and device bans:</strong> Suspected Child Sexual Abuse Material or
            related exploitation behaviour may result in immediate removal, permanent account
            and device bans, preservation of evidence, and reporting to law enforcement.
          </li>
          <li>
            <strong>Lawful requests:</strong> We cooperate with regulators and law
            enforcement when required by law.
          </li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="acl" title="13) Consumer rights, warranties, and disclaimers">
        <PolicyList>
          <li>
            <strong>Your rights:</strong> Nothing in these Terms excludes the non-excludable
            rights you have under applicable consumer laws.
          </li>
          <li>
            <strong>Service basis:</strong> Except for non-excludable guarantees, the app is
            provided on an &quot;as is&quot; and &quot;as available&quot; basis.
          </li>
          <li>
            <strong>Availability:</strong> We may suspend, limit, or change features for
            maintenance, security, operational reasons, or events beyond our control.
          </li>
          <li>
            <strong>Financial data disclaimer:</strong> Market information is provided for
            informational purposes only and is not financial advice.
          </li>
          <li>
            <strong>Astrology disclaimer:</strong> Rashifal, horoscope, or astrology features
            are provided for entertainment purposes only.
          </li>
          <li>
            <strong>Your responsibility:</strong> You remain responsible for your own
            decisions and transactions with others.
          </li>
        </PolicyList>
      </PolicySection>

      <PolicySection id="liability" title="14) Liability cap">
        <p>
          To the maximum extent permitted by law, we are not liable for indirect,
          incidental, special, or consequential losses or loss of profits, data, or
          goodwill. Where liability cannot be excluded, our aggregate liability for direct
          loss arising from the Services is capped at the greater of AUD $100 or the amount
          you paid to us in the 12 months before the claim.
        </p>
      </PolicySection>

      <PolicySection id="indemnity" title="15) Indemnity">
        <p>
          To the extent permitted by law, if you use the app commercially or in material
          breach of these Terms, you will indemnify uNepal and our officers, employees, and
          agents against third-party losses, claims, or costs arising from your unlawful
          content, your misuse of the app, or your breach of these Terms or applicable law.
        </p>
      </PolicySection>

      <PolicySection id="termination" title="16) Suspension and termination">
        <p>
          We may suspend or terminate access if we reasonably believe there is a breach, a
          risk to people or property, or a need to comply with the law. Enforcement can
          include warnings, temporary suspensions, permanent account closure, or device bans.
        </p>
        <p>
          Moderation outcomes may be limited, temporary, permanent, account-level, or
          device-level. Some safety decisions, especially those involving serious abuse,
          fraud, ban evasion, or child exploitation, may be final.
        </p>
      </PolicySection>

      <PolicySection id="changes" title="17) Changes to these Terms">
        <p>
          We may update these Terms. For material changes we will give reasonable notice,
          such as in-app or by email. Continuing to use the app after the new effective date
          means you accept the changes.
        </p>
      </PolicySection>

      <PolicySection id="law" title="18) Disputes and governing law">
        <p>
          Contact us first via{' '}
          <a href="mailto:hello@unepal.com" className="font-bold text-brand-primary">
            hello@unepal.com
          </a>{' '}
          or through our{' '}
          <Link href="/#contact" className="font-bold text-brand-primary">
            website contact section
          </Link>
          . If unresolved, disputes will be handled under applicable law, subject to any
          mandatory local rights and consumer protections that cannot be excluded.
        </p>
      </PolicySection>

      <PolicySection id="general" title="19) General">
        <PolicyList>
          <li>
            <strong>Severability:</strong> If a clause is invalid, the rest of the Terms
            remain effective.
          </li>
          <li>
            <strong>Assignment:</strong> You may not assign your rights without our consent.
            We may assign to an affiliate or successor with notice.
          </li>
          <li>
            <strong>No waiver:</strong> Our failure to enforce these Terms is not a waiver.
          </li>
          <li>
            <strong>Language:</strong> English governs.
          </li>
        </PolicyList>
      </PolicySection>
    </PolicyPage>
  );
}
