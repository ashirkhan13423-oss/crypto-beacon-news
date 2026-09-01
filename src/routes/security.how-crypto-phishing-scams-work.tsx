import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus, AlertTriangle } from "lucide-react";

const URL = "https://www.cryptobeacon.site/security/how-crypto-phishing-scams-work";
const TITLE = "How Crypto Phishing Scams Work: Attack Types Explained | CryptoBeacon";
const DESC =
  "A technical breakdown of how crypto phishing scams work — DNS hijacking, fake dApps, approval phishing, spear phishing, and browser extension attacks — with how to defend against each.";
const PUBLISHED = "2026-09-01";

const faqs: { q: string; a: string }[] = [
  { q: "What makes crypto phishing different from regular phishing?", a: "Crypto phishing is more damaging because transactions are irreversible. If a regular bank phishing attack succeeds, the bank can often reverse charges. In crypto, once you sign a malicious transaction or hand over a seed phrase, the funds are gone with no recourse. This irreversibility makes crypto an especially attractive target." },
  { q: "What is approval phishing?", a: "Approval phishing tricks you into signing an ERC-20 token approval transaction, giving a malicious contract unlimited permission to spend a specific token from your wallet. You may think you are doing something harmless (like claiming an airdrop), but the signature grants the attacker's contract the ability to drain your wallet of that token at any time." },
  { q: "Can phishing attacks bypass hardware wallets?", a: "A hardware wallet prevents private key theft but does not prevent approval phishing. If you sign a malicious approval transaction on your hardware wallet — even without knowing it — the approval is valid. Always read the full transaction data on the hardware wallet's screen before confirming." },
  { q: "What is a DNS hijacking attack in crypto?", a: "DNS hijacking replaces a legitimate website's DNS record so that visitors are redirected to an attacker's identical-looking clone. The URL in the browser may look correct but the website is controlled by the attacker. Several major DeFi protocols have been compromised this way." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Crypto Phishing Scams Work: Attack Types Explained",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Ashir", url: "https://www.cryptobeacon.site/author", worksFor: { "@type": "Organization", name: "CryptoBeacon" } },
  publisher: { "@type": "Organization", name: "CryptoBeacon", logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  inLanguage: "en-US",
  keywords: "how crypto phishing works, crypto approval phishing, DNS hijacking crypto, fake dApp phishing, spear phishing crypto, crypto phishing attack types",
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
    { "@type": "ListItem", position: 3, name: "How Crypto Phishing Scams Work", item: URL },
  ],
};

export const Route = createFileRoute("/security/how-crypto-phishing-scams-work")({
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

const attackTypes = [
  { num: "01", name: "Seed Phrase Phishing", desc: "Fake wallet websites or apps prompt you to enter your seed phrase to 'restore' or 'verify' your wallet. Once entered, your funds are immediately drained. These sites are often promoted through paid search ads.", defend: "Your seed phrase is never needed by any online service. Never enter it anywhere except on your hardware wallet device itself during initial setup." },
  { num: "02", name: "Approval Phishing", desc: "You are asked to sign a transaction that appears routine (claiming a reward, minting an NFT) but is actually an ERC-20 approval granting an attacker's contract unlimited spending rights for a token you hold.", defend: "Read every transaction detail before signing. If a site asks you to approve spending of tokens when you just wanted to claim something free, that is a red flag." },
  { num: "03", name: "DNS Hijacking", desc: "Attackers compromise the DNS records of legitimate DeFi protocols. Users who navigate to the correct URL are served the attacker's clone site. The URL looks legitimate but the site is controlled by attackers.", defend: "Bookmark trusted DeFi sites rather than searching or following links. Check social media for warnings before interacting with a protocol during market volatility when attacks often occur." },
  { num: "04", name: "Spear Phishing", desc: "Targeted attacks against specific individuals — developers, influencers, or large holders. Attackers impersonate colleagues, investors, or journalists and send tailored messages with malicious links or attachments.", defend: "Verify unexpected contact through a secondary channel. Never open unsolicited attachments. Use a separate air-gapped machine for signing large transactions." },
  { num: "05", name: "Browser Extension Attacks", desc: "Malicious browser extensions can intercept wallet connection requests, modify transaction data on-the-fly, or read clipboard content to replace addresses. Extensions with broad permissions are dangerous.", defend: "Minimise browser extensions on any browser used for crypto. Use a separate browser profile or dedicated browser solely for Web3 interactions." },
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
            <li className="text-primary">How Crypto Phishing Scams Work</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-red-600 text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security · Phishing
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          How Crypto Phishing Scams Work
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          Understanding the mechanics of crypto phishing is the first step to avoiding it. Here are the five most common attack types — with exactly how each works and how to defend against it.
        </p>
        <Author />

        <div className="my-xl p-lg rounded-xl border border-red-500/30 bg-red-500/5 flex gap-md">
          <AlertTriangle className="text-red-400 shrink-0 mt-1" size={20} />
          <p className="font-body-md text-body-md text-on-surface leading-relaxed">
            Crypto phishing is uniquely dangerous because <strong>transactions are irreversible</strong>. Unlike bank fraud, there is no chargeback mechanism and no customer support line that can recover stolen funds.
          </p>
        </div>

        <H2 id="attack-types">The five attack types</H2>
        <div className="space-y-lg my-lg">
          {attackTypes.map((a) => (
            <div key={a.num} className="p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
              <div className="flex items-start gap-md mb-md">
                <span className="font-mono text-2xl font-bold text-red-400">{a.num}</span>
                <h3 className="font-headline-md text-headline-md text-primary pt-1">{a.name}</h3>
              </div>
              <div className="mb-sm">
                <span className="font-label-caps text-label-caps text-on-surface-variant mb-xs block">How it works</span>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">{a.desc}</p>
              </div>
              <div>
                <span className="font-label-caps text-label-caps text-secondary mb-xs block">Defence</span>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{a.defend}</p>
              </div>
            </div>
          ))}
        </div>

        <H2 id="general">Universal anti-phishing habits</H2>
        <ul className="list-disc list-inside space-y-sm mb-md font-body-lg text-body-lg text-on-surface">
          <li>Never click crypto-related links from email, Discord, Telegram, or Twitter DMs</li>
          <li>Bookmark all sites you use regularly — never search for them</li>
          <li>Verify the exact URL character-by-character, including TLD (.com vs .io vs .net)</li>
          <li>Read every transaction on your hardware wallet screen before confirming</li>
          <li>Never share your seed phrase or private key with anyone or anything</li>
        </ul>

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
            <Link to="/security/how-to-avoid-crypto-phishing-scams" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">How to Avoid Crypto Phishing Scams</h3>
            </Link>
            <Link to="/security/how-to-identify-a-fake-crypto-website" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Identify a Fake Crypto Website</h3>
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
