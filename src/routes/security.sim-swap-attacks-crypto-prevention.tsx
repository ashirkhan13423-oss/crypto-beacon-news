import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";
import hero from "@/assets/hacked-wallet-emergency.webp";

const URL = "https://www.cryptobeacon.site/security/sim-swap-attacks-crypto-prevention";
const TITLE = "SIM Swap Attacks on Crypto Accounts: Prevention Guide";
const DESC = "A SIM swap attack allows hackers to bypass SMS 2FA and steal your crypto assets. Learn how this attack works and implement our checklist to prevent it.";
const PUBLISHED = "2026-10-02";
let MODIFIED = PUBLISHED;
let keyTakeaway = "Never use SMS for two-factor authentication (2FA) on your crypto exchange accounts. Always use an authenticator app (like Authy or Google Authenticator) or a hardware security key (like YubiKey).";

const faqs = [
  { q: "How do I know if I've been SIM swapped?", a: "Your phone will suddenly lose cellular service and display 'No Service' or 'Emergency Calls Only' because your number has been activated on the attacker's SIM card." },
  { q: "Will a SIM swap let attackers access my hardware wallet?", a: "No. A SIM swap only gives attackers access to accounts secured by SMS, such as centralized exchanges (Coinbase, Binance) or webmail. Hardware wallets require physical possession of the device and the PIN." },
  { q: "Can my telecom provider prevent a SIM swap?", a: "Most providers offer a 'SIM PIN' or 'Port Freeze' feature, but these can sometimes be bypassed by skilled social engineers. Removing SMS 2FA entirely is the only guaranteed protection." }
];

export const Route = createFileRoute("/security/sim-swap-attacks-crypto-prevention")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/security/sim-swap-attacks-crypto-prevention', publishedTime: PUBLISHED, section: 'Security' }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: TITLE, description: DESC, imageUrl: "", datePublished: PUBLISHED, dateModified: MODIFIED, url: URL, section: "Security", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Security", item: "https://www.cryptobeacon.site/security" },
        { name: TITLE, item: URL }
      ])) }
    ],
  }),
  component: ArticlePage,
});

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id} className="scroll-mt-28 font-headline-md text-headline-md md:text-headline-lg text-primary mt-xxl mb-md">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">{children}</p>;
}

function ArticlePage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <article>
        <nav aria-label="Breadcrumb" className="mb-lg font-label-caps text-label-caps text-on-surface-variant">
          <ol className="flex flex-wrap items-center gap-xs">
            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link to="/security" className="hover:text-secondary">Security</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">SIM Swap Prevention</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-red-600 text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security · Account Takeover
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          SIM Swap Attacks on Crypto Accounts: Prevention Checklist
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          SMS-based security is fundamentally broken. Learn how attackers hijack phone numbers to drain exchange accounts, and how to stop them.
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <H2 id="mechanics">How a SIM Swap Attack Works</H2>
        <P>A SIM swap doesn't involve hacking your phone. Instead, it involves hacking the human at your mobile carrier.</P>
        <div className="bg-surface-container p-md rounded-xl border border-outline mb-xl">
          <ol className="list-decimal pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li><strong>Reconnaissance:</strong> The attacker finds out your phone number, email, and the crypto exchange you use (often via data breaches).</li>
            <li><strong>Social Engineering:</strong> They call your mobile carrier (AT&T, Verizon, T-Mobile, etc.) pretending to be you. They claim their phone was lost or destroyed and request that the number be transferred to a new SIM card they control.</li>
            <li><strong>The Swap:</strong> If the customer service rep is tricked (or bribed), they authorize the transfer. Your phone immediately loses service.</li>
            <li><strong>Account Takeover:</strong> The attacker initiates a password reset on your crypto exchange and email accounts. The verification codes are texted to your phone number—which the attacker now receives on their device.</li>
            <li><strong>The Drain:</strong> They log in, reset passwords, and withdraw your crypto.</li>
          </ol>
        </div>

        <H2 id="checklist">The Prevention Checklist</H2>
        <P>Take these steps immediately to immunize your crypto accounts against SIM swap attacks.</P>
        
        <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface mb-xl">
          <li>
            <strong>1. Remove SMS 2FA from Everywhere:</strong> Go to the security settings of your crypto exchanges, email provider (Gmail/Proton), and password manager. Disable SMS 2FA.
          </li>
          <li>
            <strong>2. Switch to an Authenticator App or Security Key:</strong> Replace SMS with an app like Authy, Google Authenticator, or preferably, a hardware security key like a YubiKey. These cannot be bypassed by a telecom employee.
          </li>
          <li>
            <strong>3. Add a PIN/Passcode with Your Carrier:</strong> Contact your mobile provider and add a strict security PIN to your account. Instruct them that no changes can be made without this PIN.
          </li>
          <li>
            <strong>4. Avoid Linking Your Primary Number:</strong> Do not use your primary public phone number for sensitive financial accounts. Consider using a VoIP number (like Google Voice) for account registrations, as they cannot be SIM swapped in the traditional way.
          </li>
          <li>
            <strong>5. Secure Your Email First:</strong> Your email address is the master key to your digital life. If an attacker gets into your email, they can reset exchange passwords. Secure your email with a hardware key.
          </li>
        </ul>

        <FAQ faqs={faqs} />
        <RelatedArticles currentUrl={URL} />
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
