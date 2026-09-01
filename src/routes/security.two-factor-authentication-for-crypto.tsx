import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/security/two-factor-authentication-for-crypto";
const TITLE = "Two-Factor Authentication for Crypto: SMS vs TOTP vs Hardware Keys | CryptoBeacon";
const DESC =
  "A complete guide to two-factor authentication for cryptocurrency accounts — SMS vs TOTP apps vs hardware security keys, the risks of each method, and how to set up the most secure option.";
const PUBLISHED = "2026-09-01";

const faqs: { q: string; a: string }[] = [
  { q: "Is SMS 2FA safe for crypto accounts?", a: "SMS 2FA is significantly less secure than app-based TOTP or hardware keys. SIM swap attacks — where an attacker convinces your mobile carrier to transfer your number to their SIM — can bypass SMS 2FA. Several high-profile crypto account takeovers have used this method. Avoid SMS 2FA for exchange accounts if alternatives are offered." },
  { q: "What is a TOTP authenticator app?", a: "TOTP (Time-based One-Time Password) apps like Google Authenticator, Authy, or 1Password generate a new 6-digit code every 30 seconds using a shared secret. These are significantly more secure than SMS because they don't traverse the phone network and cannot be SIM-swapped." },
  { q: "What is a hardware security key?", a: "A hardware security key (YubiKey, Google Titan, etc.) is a physical USB or NFC device that uses FIDO2/WebAuthn cryptography to prove your identity. Crucially, it is bound to the legitimate website domain — it will not respond to phishing sites, even convincing ones. This makes it phishing-resistant, unlike SMS or TOTP." },
  { q: "What happens if I lose my 2FA device?", a: "For TOTP apps: if you have backup codes (save these when setting up) or have backed up your authenticator's secrets, you can recover. For hardware keys: register a second key as a backup and store it safely. Without recovery options, losing your 2FA device can lock you out — always set up backup methods during initial 2FA configuration." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Two-Factor Authentication for Crypto: SMS vs TOTP vs Hardware Keys",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Ashir", url: "https://www.cryptobeacon.site/author", worksFor: { "@type": "Organization", name: "CryptoBeacon" } },
  publisher: { "@type": "Organization", name: "CryptoBeacon", logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  inLanguage: "en-US",
  keywords: "two factor authentication crypto, 2FA for crypto exchanges, SMS 2FA risks, TOTP authenticator crypto, hardware security key crypto, YubiKey crypto account, SIM swap crypto",
  articleSection: "Security",
  wordCount: 900,
  isAccessibleForFree: true,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cryptobeacon.site/" },
    { "@type": "ListItem", position: 2, name: "Security", item: "https://www.cryptobeacon.site/security" },
    { "@type": "ListItem", position: 3, name: "Two-Factor Authentication for Crypto", item: URL },
  ],
};

export const Route = createFileRoute("/security/two-factor-authentication-for-crypto")({
  head: () => ({
    meta: [
      { title: TITLE }, { name: "description", content: DESC },
      { property: "og:title", content: TITLE }, { property: "og:description", content: DESC },
      { property: "og:type", content: "article" }, { property: "og:url", content: URL },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
      { property: "article:published_time", content: PUBLISHED }, { property: "article:section", content: "Security" },
      { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: TITLE }, { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
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

const methods = [
  {
    rank: "3rd (Weakest)", name: "SMS 2FA", how: "A one-time code is sent to your phone number via text message each time you log in.", pros: ["Easy to set up", "No additional app needed", "Works on any phone"], cons: ["Vulnerable to SIM swap attacks", "Codes can be intercepted via SS7 protocol vulnerabilities", "Carrier employees can be social-engineered"], verdict: "Avoid for exchange accounts if better options are available. Some exchanges require it as a base — in that case, layer TOTP on top.", color: "#EF4444",
  },
  {
    rank: "2nd", name: "TOTP Authenticator App", how: "An app (Google Authenticator, Authy, 1Password) generates a new 6-digit code every 30 seconds using a shared secret established during setup.", pros: ["Not tied to your phone number", "Cannot be SIM swapped", "Works offline"], cons: ["Can be phished if you enter the code on a fake site (attacker relays it instantly)", "If device is lost without backup, recovery is difficult", "Codes expire quickly and require app access"], verdict: "A significant security upgrade over SMS. Recommended for most users. Back up your seeds when setting up.", color: "#F59E0B",
  },
  {
    rank: "1st (Strongest)", name: "Hardware Security Key (FIDO2/WebAuthn)", how: "A physical device (YubiKey, Google Titan, Apple Passkey on device) uses cryptographic challenge-response tied to the exact website domain. It physically must be present and the domain must match.", pros: ["Phishing-resistant — will not authenticate on fake sites", "Cannot be SIM swapped", "Nothing to type or share"], cons: ["Higher upfront cost (~$25–$60)", "Physical device can be lost (register two)", "Not all exchanges support it yet"], verdict: "The gold standard for exchange account security. If your exchange supports it (Coinbase, Kraken, Binance do), use it.", color: "#0F9D58",
  },
];

function ArticlePage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <nav aria-label="Breadcrumb" className="mb-lg font-label-caps text-label-caps text-on-surface-variant">
          <ol className="flex flex-wrap items-center gap-xs">
            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link to="/security" className="hover:text-secondary">Security</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">Two-Factor Authentication for Crypto</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security · 2FA
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          Two-Factor Authentication for Crypto
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          Not all 2FA is equal — especially for crypto accounts. Here is the honest comparison of SMS, authenticator apps, and hardware keys, with a clear recommendation.
        </p>
        <Author />

        <H2 id="methods">The three 2FA methods compared</H2>
        <div className="space-y-xl my-lg">
          {methods.map((m) => (
            <div key={m.name} className="p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
              <div className="flex items-start justify-between mb-md flex-wrap gap-sm">
                <h3 className="font-headline-md text-headline-md text-primary">{m.name}</h3>
                <span className="font-label-caps text-[11px] px-sm py-xs rounded-full text-white" style={{ background: m.color }}>{m.rank}</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-md"><strong>How it works:</strong> {m.how}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-md mb-md">
                <div>
                  <span className="font-label-caps text-label-caps text-[#0F9D58] mb-xs block">Pros</span>
                  <ul className="space-y-xs">
                    {m.pros.map((p) => <li key={p} className="font-body-sm text-body-sm text-on-surface flex items-start gap-xs"><span className="text-[#0F9D58] shrink-0">+</span>{p}</li>)}
                  </ul>
                </div>
                <div>
                  <span className="font-label-caps text-label-caps text-red-400 mb-xs block">Cons</span>
                  <ul className="space-y-xs">
                    {m.cons.map((c) => <li key={c} className="font-body-sm text-body-sm text-on-surface flex items-start gap-xs"><span className="text-red-400 shrink-0">−</span>{c}</li>)}
                  </ul>
                </div>
              </div>
              <div className="p-sm rounded-lg border border-outline-variant bg-surface-container">
                <span className="font-label-caps text-label-caps text-secondary mb-xs block">Verdict</span>
                <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">{m.verdict}</p>
              </div>
            </div>
          ))}
        </div>

        <H2 id="setup-priority">Priority order</H2>
        <P>If your exchange supports hardware security keys: enable them as primary 2FA and keep TOTP as backup. If not: use a TOTP authenticator app and never use SMS alone. Back up your TOTP seeds in a secure, offline location when you set them up.</P>

        <section className="mt-xxl" aria-label="Frequently asked questions">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Frequently Asked Questions</h2>
          <div className="space-y-md">
            {faqs.map((f, i) => (
              <details key={i} className="group border border-outline-variant rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-lg cursor-pointer list-none">
                  <span className="font-body-lg text-body-lg text-primary font-semibold pr-md">{f.q}</span>
                  <Plus size={18} className="text-secondary shrink-0 group-open:rotate-45 transition-transform" />
                </summary>
                <div className="px-lg pb-lg">
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link to="/security/exchange-account-security" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Exchange Account Security</h3>
            </Link>
            <Link to="/security/how-to-avoid-crypto-phishing-scams" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Avoid Crypto Phishing Scams</h3>
            </Link>
            <Link to="/security/crypto-security-hub" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Crypto Security Hub</h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
