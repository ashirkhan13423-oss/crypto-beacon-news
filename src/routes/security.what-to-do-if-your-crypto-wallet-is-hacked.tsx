import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdUnit } from "@/components/AdUnit";
import { Author } from "@/components/Author";
import hero from "@/assets/hacked-wallet-emergency.jpg";
import { Zap, Clock, FileText, AlertTriangle } from "lucide-react";

const URL = "https://www.cryptobeacon.site/security/what-to-do-if-your-crypto-wallet-is-hacked";
const TITLE = "What to Do If Your Crypto Wallet Is Hacked: Emergency Action Guide | CryptoBeacon";
const DESC =
  "If your crypto wallet has been compromised, every second counts. This emergency guide covers exactly what to do — in order — from the moment you realize something is wrong.";
const PUBLISHED = "2026-08-25";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What to Do If Your Crypto Wallet Is Hacked",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Person",
    name: "Ashir",
    url: "https://www.cryptobeacon.site/author",
    worksFor: { "@type": "Organization", name: "CryptoBeacon" },
  },
  publisher: {
    "@type": "Organization",
    name: "CryptoBeacon",
    logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  image: `https://www.cryptobeacon.site/assets/hacked-wallet-emergency.jpg`,
  inLanguage: "en-US",
  keywords:
    "crypto wallet hacked what to do, crypto stolen emergency, metamask hacked, recover hacked crypto wallet, crypto drainer attack response",
  articleSection: "Security",
  isAccessibleForFree: true,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cryptobeacon.site/" },
    { "@type": "ListItem", position: 2, name: "Security", item: "https://www.cryptobeacon.site/security" },
    { "@type": "ListItem", position: 3, name: "What to Do If Your Wallet Is Hacked", item: URL },
  ],
};

export const Route = createFileRoute("/security/what-to-do-if-your-crypto-wallet-is-hacked")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:section", content: "Security" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "https://www.cryptobeacon.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
  component: ArticlePage,
});

function P({ children }: { children: React.ReactNode }) {
  return <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">{children}</p>;
}

type UrgencyTier = "immediate" | "24h" | "after";
interface ActionItem { action: string; detail: string }

function TierHeader({ tier }: { tier: UrgencyTier }) {
  const config = {
    immediate: {
      icon: <Zap className="w-5 h-5" />,
      label: "ACT NOW — Within Minutes",
      bg: "bg-red-500/10",
      border: "border-red-500",
      text: "text-red-500",
      badge: "bg-red-500 text-white",
    },
    "24h": {
      icon: <Clock className="w-5 h-5" />,
      label: "WITHIN 24 HOURS",
      bg: "bg-amber-500/10",
      border: "border-amber-500",
      text: "text-amber-500",
      badge: "bg-amber-500 text-white",
    },
    after: {
      icon: <FileText className="w-5 h-5" />,
      label: "AFTER THE IMMEDIATE CRISIS",
      bg: "bg-[#2563EB]/10",
      border: "border-[#2563EB]",
      text: "text-[#2563EB]",
      badge: "bg-[#2563EB] text-white",
    },
  }[tier];

  return (
    <div className={`flex items-center gap-sm px-md py-sm rounded-t-xl border-t border-l border-r ${config.border} ${config.bg}`}>
      <span className={`${config.text}`}>{config.icon}</span>
      <span className={`font-label-caps text-label-caps font-bold tracking-widest ${config.text}`}>{config.label}</span>
    </div>
  );
}

function ActionTier({ tier, actions }: { tier: UrgencyTier; actions: ActionItem[] }) {
  const config = {
    immediate: { border: "border-red-500", bg: "bg-red-500/5", num: "text-red-500 bg-red-500/15" },
    "24h": { border: "border-amber-500", bg: "bg-amber-500/5", num: "text-amber-500 bg-amber-500/15" },
    after: { border: "border-[#2563EB]", bg: "bg-[#2563EB]/5", num: "text-[#2563EB] bg-[#2563EB]/15" },
  }[tier];

  return (
    <div className="mb-xl">
      <TierHeader tier={tier} />
      <div className={`rounded-b-xl border-b border-l border-r ${config.border} ${config.bg} divide-y divide-outline-variant/40`}>
        {actions.map((item, i) => (
          <div key={i} className="flex gap-md p-md">
            <div className={`w-7 h-7 rounded-full ${config.num} flex items-center justify-center shrink-0 font-bold text-sm mt-px`}>
              {i + 1}
            </div>
            <div>
              <strong className="font-body-lg text-body-lg text-on-surface block">{item.action}</strong>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-xs">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArticlePage() {
  const immediateActions: ActionItem[] = [
    {
      action: "Stop all interaction with the compromised wallet",
      detail: "Do not try to 'rescue' funds by sending more ETH for gas. Attackers often run automated drainer scripts that will immediately sweep any ETH you send in. Interacting with the wallet can make things worse.",
    },
    {
      action: "Move remaining funds to a clean wallet — immediately",
      detail: "If the wallet still has assets the attacker hasn't drained yet, move them to a brand-new wallet (one you've never used before, on a different device if possible). Use the fastest, cheapest gas setting to front-run the attacker's sweep transaction.",
    },
    {
      action: "Revoke all active token approvals from the compromised address",
      detail: "Go to revoke.cash, connect the compromised wallet as read-only, and revoke all approvals. This stops drainer contracts that have been granted unlimited spending rights from continuing to pull tokens.",
    },
    {
      action: "Disconnect the wallet from every dApp immediately",
      detail: "In MetaMask: Settings → Connected Sites → disconnect all. In Rabby: check each site's permissions. This limits the attacker's ability to request further signatures from apps that remember your wallet.",
    },
  ];

  const within24hActions: ActionItem[] = [
    {
      action: "Identify how the compromise happened",
      detail: "Check your browser extensions for recently installed unknown extensions. Look for clipboard hijackers, keyloggers, or any software you recently downloaded. If your seed phrase was ever stored digitally, assume it was exposed.",
    },
    {
      action: "Quarantine or wipe the compromised device",
      detail: "If you suspect malware on the device used with the compromised wallet, do not use it for crypto again until it has been fully wiped and reinstalled. Using the same device is how people get hacked a second time.",
    },
    {
      action: "Report to exchanges if funds were transferred there",
      detail: "Check the blockchain explorer to trace where funds went. If they landed at a centralized exchange address (Coinbase, Binance, Kraken), file a report with that exchange's fraud team immediately. Exchanges can freeze accounts pending investigation.",
    },
    {
      action: "Document everything for potential legal action",
      detail: "Screenshot your wallet address, transaction hashes, timestamps, and the addresses funds were sent to. Save these. In several countries, crypto theft can be pursued legally if the attacker's identity is later identified.",
    },
  ];

  const afterActions: ActionItem[] = [
    {
      action: "File a report with your local cybercrime authority",
      detail: "In the US: IC3.gov (FBI Internet Crime Complaint Center). In the UK: Action Fraud. In the EU: Your national cybercrime unit. Recovery is rare, but reports build a paper trail that helps law enforcement track serial attackers.",
    },
    {
      action: "Set up a new wallet with a hardware device",
      detail: "Your next wallet should be a hardware wallet (Ledger, Trezor, or Coldcard). Software wallets are convenient but remain vulnerable to the malware and phishing attacks that likely caused this compromise.",
    },
    {
      action: "Audit your security habits",
      detail: "How did your seed phrase get exposed? Was it a phishing site, a malicious browser extension, a malware download, or a seed phrase stored in your email? Fix the root cause — not just the symptom.",
    },
  ];

  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-lg font-label-caps text-label-caps text-on-surface-variant">
          <ol className="flex flex-wrap items-center gap-xs">
            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link to="/security" className="hover:text-secondary">Security</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">What to Do If Your Wallet Is Hacked</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-error text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What to Do If Your Crypto Wallet Is Hacked
        </h1>

        <Author publishedDate={<time dateTime={PUBLISHED}>August 25, 2026</time>} readTime="8 min read" />

        {/* Critical Warning Banner */}
        <div className="mt-md mb-lg border-l-4 border-red-500 bg-red-500/10 p-md rounded-r-md flex gap-sm">
          <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-px" />
          <div>
            <p className="font-headline-sm text-headline-sm text-red-500 font-bold">If this is happening right now: don't read top-to-bottom. Jump to "Act Now" immediately.</p>
            <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Every minute matters when a wallet drainer is active.</p>
          </div>
        </div>

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchpriority="high"
            src={hero}
            alt="Cracked digital security shield with red warning glow and broken blockchain wallet icon"
            width={1536}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          A compromised crypto wallet is one of the few online security incidents where the damage can be permanent and instantaneous. Unlike a bank fraud incident — where your bank can reverse a transaction — blockchain transfers are final. Once funds leave your wallet to an attacker's address, they are gone unless you can trace them to an exchange that cooperates with law enforcement.
        </P>
        <P>
          This guide is structured by urgency, not by topic. Skip the sections that aren't relevant to your timeline.
        </P>

        <P><em>This article is for educational purposes only and is not legal or financial advice.</em></P>

        <AdUnit />

        <h2 className="scroll-mt-28 font-headline-md text-headline-md md:text-headline-lg text-primary mt-xxl mb-md" id="action-tiers">
          Emergency Action Plan — By Urgency
        </h2>

        <ActionTier tier="immediate" actions={immediateActions} />
        <ActionTier tier="24h" actions={within24hActions} />
        <ActionTier tier="after" actions={afterActions} />

        <AdUnit />

        <h2 className="scroll-mt-28 font-headline-md text-headline-md md:text-headline-lg text-primary mt-xxl mb-md" id="can-i-recover">
          Can I Recover Stolen Crypto?
        </h2>
        <P>
          Bluntly: rarely. Blockchain transactions are irreversible by design. The scenarios where recovery is possible are narrow: the attacker sent funds to a centralized exchange (where their KYC identity might be known), law enforcement gets involved quickly and the exchange cooperates, or a vulnerability in a smart contract is used and a white-hat counter-exploit recovers funds before the attacker can move them.
        </P>
        <P>
          Most successful drainer attacks move funds through multiple wallets and mixers within minutes of the initial theft. The window for intervention is extremely short. The best defense is prevention — the actions above are damage control after the fact.
        </P>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">Disclaimer</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only. It is not legal advice. If you believe you are the victim of a crime, consult a legal professional and contact law enforcement.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link to="/security/how-to-avoid-crypto-phishing-scams" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">How to Avoid Crypto Phishing Scams</h3>
            </Link>
            <Link to="/security/how-to-revoke-smart-contract-approvals" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">How to Revoke Smart Contract Approvals</h3>
            </Link>
            <Link to="/security/how-to-store-crypto-seed-phrase-safely" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">How to Store Your Seed Phrase Safely</h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
