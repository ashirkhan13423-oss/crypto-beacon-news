import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Shield, Key, Smartphone, HardDrive, BookOpen, AlertTriangle, Lock, Wallet } from "lucide-react";

const URL = "https://www.cryptobeacon.site/bitcoin/bitcoin-wallets-complete-guide";
const TITLE = "Bitcoin Wallets: Complete Beginner's Guide | CryptoBeacon";
const DESC =
  "Everything you need to know about Bitcoin wallets — how they work, types of wallets, seed phrases, private keys, security, and common scams. The definitive self-custody hub.";
const PUBLISHED = "2026-09-01";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bitcoin Wallets: Complete Beginner's Guide",
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
  inLanguage: "en-US",
  keywords:
    "bitcoin wallet guide, bitcoin self-custody, bitcoin seed phrase, hot wallet cold wallet, custodial non-custodial wallet, bitcoin private key, hardware wallet bitcoin",
  articleSection: "Bitcoin",
  isAccessibleForFree: true,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cryptobeacon.site/" },
    { "@type": "ListItem", position: 2, name: "Bitcoin", item: "https://www.cryptobeacon.site/bitcoin" },
    { "@type": "ListItem", position: 3, name: "Bitcoin Wallets: Complete Guide", item: URL },
  ],
};

const sections = [
  {
    icon: <BookOpen size={20} />,
    title: "What Is a Bitcoin Wallet?",
    desc: "A Bitcoin wallet doesn't store Bitcoin — it stores the private keys that prove ownership. Learn what wallets actually do and why the distinction matters.",
    to: "/bitcoin/what-is-a-bitcoin-wallet",
    tag: "Start Here",
    color: "#F7931A",
  },
  {
    icon: <Key size={20} />,
    title: "How Bitcoin Wallets Work",
    desc: "Private keys, public keys, wallet addresses, and transaction signing — the technical mechanics behind self-custody explained plainly.",
    to: "/bitcoin/how-bitcoin-wallets-work",
    tag: "Explainer",
    color: "#F59E0B",
  },
  {
    icon: <Smartphone size={20} />,
    title: "Hot Wallet vs Cold Wallet",
    desc: "Internet-connected software wallets versus offline hardware wallets. Which suits your situation and how to use both together.",
    to: "/guides/hot-wallets-vs-cold-wallets-explained",
    tag: "Comparison",
    color: "#0F9D58",
  },
  {
    icon: <Shield size={20} />,
    title: "What Is a Bitcoin Seed Phrase?",
    desc: "The 12 or 24 words that unlock your entire wallet. What they are, how they're generated, and why losing them means losing your Bitcoin.",
    to: "/bitcoin/what-is-a-bitcoin-seed-phrase",
    tag: "Essential",
    color: "#8B5CF6",
  },
  {
    icon: <Lock size={20} />,
    title: "How to Store a Seed Phrase Safely",
    desc: "Paper vs metal backups, geographic distribution, what never to do. A practical storage guide for every security level.",
    to: "/security/how-to-store-crypto-seed-phrase-safely",
    tag: "Security",
    color: "#EF4444",
  },
  {
    icon: <AlertTriangle size={20} />,
    title: "What Happens If You Lose Your Seed Phrase?",
    desc: "The hard truth: there is no recovery authority. Understand what permanent loss means and why urgency of backup cannot be overstated.",
    to: "/bitcoin/what-happens-if-you-lose-your-seed-phrase",
    tag: "Risk",
    color: "#EF4444",
  },
  {
    icon: <Key size={20} />,
    title: "Bitcoin Private Keys Explained",
    desc: "What a private key is, how it differs from a seed phrase, and why you should never share it with anyone, ever.",
    to: "/guides/what-is-a-private-key",
    tag: "Explainer",
    color: "#F59E0B",
  },
  {
    icon: <Wallet size={20} />,
    title: "Bitcoin Address vs Wallet Address",
    desc: "Are they the same thing? What a Bitcoin address actually represents, address reuse risks, and how change addresses work.",
    to: "/bitcoin/bitcoin-address-vs-wallet-address",
    tag: "Explainer",
    color: "#2563EB",
  },
  {
    icon: <Lock size={20} />,
    title: "Custodial vs Non-Custodial Wallets",
    desc: "\"Not your keys, not your coins.\" The critical difference between exchange custody and true self-custody, and when each makes sense.",
    to: "/guides/exchange-or-personal-wallet-crypto-storage",
    tag: "Comparison",
    color: "#0F9D58",
  },
  {
    icon: <HardDrive size={20} />,
    title: "Hardware Wallets Explained",
    desc: "Ledger, Trezor, and Coldcard compared. How hardware wallets keep private keys offline and what to look for when buying one.",
    to: "/guides/hardware-wallet-comparison-guide",
    tag: "Guide",
    color: "#6366F1",
  },
  {
    icon: <AlertTriangle size={20} />,
    title: "Common Bitcoin Wallet Scams",
    desc: "Fake wallet apps, clipboard hijackers, seed phrase phishing, and supply chain attacks on hardware devices. Know them before they find you.",
    to: "/bitcoin/common-bitcoin-wallet-scams",
    tag: "Security",
    color: "#EF4444",
  },
];

export const Route = createFileRoute("/bitcoin/bitcoin-wallets-complete-guide")({
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
      { property: "article:section", content: "Bitcoin" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-lg font-label-caps text-label-caps text-on-surface-variant">
          <ol className="flex flex-wrap items-center gap-xs">
            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link to="/bitcoin" className="hover:text-secondary">Bitcoin</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">Bitcoin Wallets: Complete Guide</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#F7931A] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold mb-md">
          Bitcoin · Self-Custody Hub
        </span>

        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mb-md leading-tight">
          Bitcoin Wallets: Complete Beginner's Guide
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-xl max-w-3xl">
          Understanding Bitcoin wallets is the single most important skill in crypto. Without it, you're either trusting someone else with your money or risking losing it permanently. This hub covers everything — from what a wallet actually is, to how seed phrases work, to the scams targeting beginners.
        </p>

        <Author />

        {/* Intro callout */}
        <div className="my-xl p-lg rounded-xl border border-[#F7931A]/30 bg-[#F7931A]/5">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-sm">The most important concept in crypto</h2>
          <p className="font-body-md text-body-md text-on-surface leading-relaxed">
            A Bitcoin wallet does <strong>not</strong> store Bitcoin. Bitcoin itself lives on the blockchain. What a wallet stores are the <strong>private keys</strong> — the cryptographic proof that you own specific UTXOs (unspent transaction outputs) on the network. If someone else holds your keys, they hold your Bitcoin. This is why the phrase "not your keys, not your coins" exists.
          </p>
        </div>

        {/* Article grid */}
        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md md:text-headline-lg text-primary mb-lg">
            Everything in this cluster
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {sections.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group flex gap-md p-lg rounded-xl border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: s.color + "20", color: s.color }}
                >
                  {s.icon}
                </div>
                <div>
                  <span className="font-label-caps text-label-caps text-secondary">{s.tag}</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mt-xs mb-xs group-hover:underline decoration-secondary">
                    {s.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Why self-custody matters */}
        <section className="mt-xxl p-xl rounded-xl bg-surface-container-low border border-outline-variant">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Why self-custody matters</h2>
          <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
            When you keep Bitcoin on an exchange, the exchange holds the private keys on your behalf. You have an IOU — a record in their database. History has shown that exchanges can be hacked (Mt. Gox, Bitfinex), become insolvent (FTX), freeze withdrawals, or face regulatory action that locks your account.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
            Self-custody means holding your own private keys in a wallet you control. No counterparty can freeze your funds, go bankrupt, or restrict your access. The tradeoff is personal responsibility: if you lose your seed phrase and your device fails, there is no recovery.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            This guide gives you everything you need to make that transition safely, or to understand the risks before you do.
          </p>
        </section>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">Financial Disclaimer</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This guide is for informational and educational purposes only. It does not constitute financial or investment advice. Always research wallet products independently before storing significant value.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
