import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/security/exchange-account-security";
const TITLE = "Exchange Account Security: Protect Your Crypto on Centralised Exchanges | CryptoBeacon";
const DESC = "How to properly secure a cryptocurrency exchange account — strong passwords, withdrawal whitelists, 2FA, API key security, phishing-resistant authentication...";
const PUBLISHED = "2026-09-01";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  { q: "What is the most important security step for an exchange account?", a: "Enabling a hardware security key (FIDO2/WebAuthn, like a YubiKey) as your primary 2FA method. This is phishing-resistant — even if you enter your credentials on a fake site, the attacker cannot complete login without physically having your key. This single step prevents the vast majority of exchange account takeovers." },
  { q: "What is a withdrawal whitelist?", a: "A withdrawal whitelist restricts crypto withdrawals from your account to a pre-approved list of addresses. Any withdrawal to an address not on the whitelist is blocked. Even if an attacker gains access to your account, they cannot withdraw to their own address. Most major exchanges offer this in security settings." },
  { q: "Are API keys dangerous?", a: "API keys with withdrawal permissions are extremely dangerous if leaked. They allow automated access to your account, including withdrawals, without the usual 2FA protection (some exchanges bypass 2FA for API key operations). Only create API keys if you specifically need them, give them the minimum required permissions, and treat them like passwords." },
  { q: "What should I do if my exchange account is compromised?", a: "Immediately: change your password from a secure, uncompromised device, revoke all API keys, contact the exchange's security team to freeze the account, enable withdrawal freezing if available, and review recent login history and activity. Document everything for potential law enforcement reporting." },
];




export const Route = createFileRoute("/security/exchange-account-security")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/security/exchange-account-security', publishedTime: PUBLISHED, section: 'Security' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "Exchange Account Security: Protect Your Crypto on Centralised Exchanges | CryptoBeacon", description: "How to properly secure a cryptocurrency exchange account — strong passwords, withdrawal whitelists, 2FA, API key security, phishing-resistant authentication...", imageUrl: `https://www.cryptobeacon.site${""}`, datePublished: "2026-09-01", dateModified: "2026-09-01", url: "https://www.cryptobeacon.site/security/exchange-account-security", section: "Security", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Security", item: "https://www.cryptobeacon.site/security" },
        { name: "Exchange Account Security: Protect Your Crypto on Centralised Exchanges | CryptoBeacon", item: "https://www.cryptobeacon.site/security/exchange-account-security" }
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

const steps = [
  { priority: "Critical", step: "Use a hardware security key for 2FA", desc: "A FIDO2/WebAuthn hardware key (YubiKey, Google Titan) is phishing-resistant — even a fake exchange site cannot capture it. This is the most important security upgrade for any exchange account.", color: "#EF4444" },
  { priority: "Critical", step: "Enable withdrawal whitelist", desc: "Restrict withdrawals to pre-approved addresses. Even if your account is compromised, the attacker cannot move funds to their wallet. Find this in Security Settings on Binance, Coinbase, Kraken, and most major exchanges.", color: "#EF4444" },
  { priority: "High", step: "Use a unique, strong password", desc: "Generate a long random password with a password manager (Bitwarden, 1Password). Never reuse passwords between sites. Exchange account passwords are high-value targets for credential stuffing attacks.", color: "#F59E0B" },
  { priority: "High", step: "Use a dedicated email address", desc: "Create an email address used only for your exchange account — no sign-ups, no newsletters. This limits exposure in data breaches. Use a provider with strong 2FA (Gmail with security key, ProtonMail).", color: "#F59E0B" },
  { priority: "High", step: "Enable login notifications", desc: "Turn on email and/or SMS alerts for new logins and withdrawal requests. Unusual login activity — unfamiliar country, device, or time — is an early warning of compromise.", color: "#F59E0B" },
  { priority: "Medium", step: "Minimise or delete API keys", desc: "API keys with trade and withdrawal permissions are high-risk. Delete any keys you don't actively use. Keys you do need should have the minimum required permissions — no withdrawal rights unless absolutely necessary.", color: "#0F9D58" },
  { priority: "Medium", step: "Always access via bookmark", desc: "Never navigate to your exchange by searching. Bookmark it after verifying the URL the first time. Phishing sites targeting Coinbase, Binance, and Kraken are common in paid search results.", color: "#0F9D58" },
];

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
            <li className="text-primary">Exchange Account Security</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-[#2563EB] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security · Accounts
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          Exchange Account Security
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          Exchange accounts holding crypto are high-value targets. These seven steps protect yours against the most common attack vectors.
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <H2 id="steps">The seven security steps</H2>
        <div className="space-y-md my-lg">
          {steps.map((s, i) => (
            <div key={i} className="p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
              <div className="flex items-center gap-sm mb-sm">
                <span className="font-label-caps text-[11px] px-sm py-xs rounded-full text-white" style={{ background: s.color }}>{s.priority}</span>
                <h3 className="font-headline-sm text-headline-sm text-primary">{s.step}</h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <H2 id="custody">A word on custody</H2>
        <P>Even a perfectly secured exchange account carries risks that self-custody eliminates: exchange insolvency (FTX), regulatory freezes, or hacks of the exchange's own infrastructure. For significant holdings you don't need to trade regularly, a hardware <Link to="/glossary#wallet" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Wallet">wallet</Link> is the appropriate complement to an exchange account.</P>
        <P>Learn more: <Link to="/guides/exchange-or-personal-wallet-crypto-storage" className="text-secondary underline">Exchange or Personal Wallet — Which Should You Use? →</Link></P>
        <P>For 2FA method comparison: <Link to="/security/two-factor-authentication-for-crypto" className="text-secondary underline">Two-Factor Authentication for Crypto →</Link></P>

        <RelatedArticles currentUrl={URL} />
              </article>
</main>
      <SiteFooter />
    </div>
  );
}
