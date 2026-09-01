import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/security/what-is-a-seed-phrase";
const TITLE = "What Is a Seed Phrase? Security Guide for Crypto Users | CryptoBeacon";
const DESC =
  "A security-focused guide to seed phrases — why they are the highest-value target in crypto, how attackers try to steal them, and the threat model every self-custody user should understand.";
const PUBLISHED = "2026-09-01";

const faqs: { q: string; a: string }[] = [
  { q: "What is a seed phrase in simple terms?", a: "A seed phrase is 12 or 24 words that serve as the master backup for your entire cryptocurrency wallet. Anyone who has these words can regenerate your wallet's private keys and access all your funds on any supported blockchain, on any compatible wallet app." },
  { q: "Why is a seed phrase so valuable to attackers?", a: "A seed phrase is the equivalent of the master key to every account in a bank, plus every safe deposit box, plus an unlimited power of attorney — except that crypto transactions are irreversible. Stealing someone's seed phrase gives instant, irrecoverable access to everything they hold in that wallet." },
  { q: "Where do most seed phrase thefts happen?", a: "The majority happen through phishing (fake wallet websites or apps), social engineering (fake support agents), or digital storage (cloud photos, email drafts, notes apps). Physical theft of written seed phrases is less common but also occurs." },
  { q: "Does the order of words matter?", a: "Yes. A seed phrase must be entered in the exact original order to restore the wallet correctly. The same 12 words in a different order generate a completely different wallet (or an invalid phrase). Always record words with their numbered positions." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is a Seed Phrase? Security Guide for Crypto Users",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Ashir", url: "https://www.cryptobeacon.site/author", worksFor: { "@type": "Organization", name: "CryptoBeacon" } },
  publisher: { "@type": "Organization", name: "CryptoBeacon", logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  inLanguage: "en-US",
  keywords: "what is a seed phrase security, seed phrase threat model, seed phrase theft how, crypto seed phrase risk, protect seed phrase from hackers",
  articleSection: "Security",
  wordCount: 800,
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
    { "@type": "ListItem", position: 3, name: "What Is a Seed Phrase?", item: URL },
  ],
};

export const Route = createFileRoute("/security/what-is-a-seed-phrase")({
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
            <li className="text-primary">What Is a Seed Phrase?</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-[#8B5CF6] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security · Seed Phrase
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          What Is a Seed Phrase?
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          A security-focused explanation of what seed phrases are, why they make you a target, and the threat model every self-custody user must understand.
        </p>
        <Author />

        <H2 id="what-is">What is a seed phrase?</H2>
        <P>A seed phrase is a sequence of 12 or 24 random words — selected from a standardised list of 2,048 words (BIP-39) — that encodes your wallet's master cryptographic secret. Every private key in your wallet is mathematically derived from this phrase. It is the root of everything.</P>
        <P>When you set up a hardware wallet, software wallet, or most non-custodial wallets, the first thing they do is generate a seed phrase and ask you to write it down. This backup is what lets you restore your wallet on a new device if the original is lost, damaged, or stolen.</P>

        <H2 id="why-target">Why seed phrases are the primary target</H2>
        <P>From an attacker's perspective, a seed phrase is the most valuable data they can steal from a crypto user. Unlike a password, it cannot be reset. Unlike a credit card number, there is no fraud department to call. Unlike a private key, a single seed phrase gives access to every address and every blockchain supported by that wallet standard.</P>
        <P>The economics are straightforward: stealing one seed phrase can yield immediate, irreversible access to the victim's entire self-custody holdings. This is why enormous resources — sophisticated phishing campaigns, fake apps, social engineering scripts, malware — are deployed specifically to obtain seed phrases.</P>

        <H2 id="attack-vectors">How attackers steal seed phrases</H2>
        <div className="space-y-md my-lg">
          {[
            { method: "Fake wallet websites", desc: "Clones of MetaMask, Trust Wallet, or Ledger websites that prompt 'restoration' — entering your phrase sends it directly to the attacker.", color: "#EF4444" },
            { method: "Phishing emails and DMs", desc: "Messages claiming your wallet needs to be verified, secured, or migrated. They contain links to seed-harvesting sites.", color: "#EF4444" },
            { method: "Fake support agents", desc: "Scammers pose as wallet company employees on Twitter, Discord, Reddit, or Telegram and ask for your seed phrase to 'help' with an issue.", color: "#F59E0B" },
            { method: "Digital storage theft", desc: "If you photograph your seed phrase and it is backed up to iCloud, Google Photos, or Dropbox, attackers who gain access to your cloud account get your phrase.", color: "#F59E0B" },
            { method: "Malware keyloggers", desc: "Malicious software monitors keystrokes and clipboard. If you ever type or paste your seed phrase, it may be captured and sent to an attacker.", color: "#EF4444" },
          ].map((a) => (
            <div key={a.method} className="flex gap-md p-md rounded-lg border border-outline-variant bg-surface-container-lowest">
              <div className="w-2 rounded-full flex-shrink-0" style={{ background: a.color }} />
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">{a.method}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <H2 id="rules">The non-negotiable rules</H2>
        <ul className="list-disc list-inside space-y-sm mb-md font-body-lg text-body-lg text-on-surface">
          <li>Never type your seed phrase into any website, app, or form — ever</li>
          <li>Never photograph it or store it digitally in any form</li>
          <li>Never share it with anyone, including family, under any circumstances</li>
          <li>Write it down physically during wallet setup and store it securely offline</li>
          <li>Make at least two physical copies and store them in separate locations</li>
        </ul>
        <P>Full storage guide: <Link to="/security/how-to-store-crypto-seed-phrase-safely" className="text-secondary underline">How to Store a Seed Phrase Safely →</Link></P>

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
            <Link to="/security/how-to-store-crypto-seed-phrase-safely" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">How to Store a Seed Phrase Safely</h3>
            </Link>
            <Link to="/security/private-key-vs-seed-phrase" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Private Key vs Seed Phrase</h3>
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
