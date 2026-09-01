import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/bitcoin/how-bitcoin-wallets-work";
const TITLE = "How Bitcoin Wallets Work: Private Keys, Addresses & Signing | CryptoBeacon";
const DESC =
  "A plain-language technical guide to how Bitcoin wallets actually work — private keys, public keys, wallet addresses, HD wallets, and transaction signing explained from first principles.";
const PUBLISHED = "2026-09-01";

const faqs: { q: string; a: string }[] = [
  {
    q: "What is a Bitcoin private key?",
    a: "A private key is a 256-bit random number that acts as the master secret for a wallet. It is used to mathematically derive a public key and sign transactions, proving ownership of funds without revealing the key itself.",
  },
  {
    q: "How is a Bitcoin address generated from a private key?",
    a: "A private key is run through elliptic curve multiplication (secp256k1) to produce a public key. The public key is then hashed twice (SHA-256 then RIPEMD-160) and encoded with a checksum to produce a wallet address. The process is one-way — you cannot reverse an address back to a private key.",
  },
  {
    q: "What is an HD wallet?",
    a: "A Hierarchical Deterministic (HD) wallet uses a single seed phrase (BIP-39) to deterministically generate a tree of private/public key pairs. This means one backup — the seed phrase — can restore every address and key the wallet has ever generated.",
  },
  {
    q: "Can two people accidentally generate the same Bitcoin address?",
    a: "Theoretically possible but cryptographically negligible. The address space is 2^160 — a number so astronomically large that a collision in practice would require more energy than the sun produces in its lifetime.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Bitcoin Wallets Work: Private Keys, Addresses & Transaction Signing",
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
    "how bitcoin wallets work, bitcoin private key explained, bitcoin public key address, HD wallet BIP39, bitcoin transaction signing, secp256k1 elliptic curve",
  articleSection: "Bitcoin",
  wordCount: 950,
  isAccessibleForFree: true,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cryptobeacon.site/" },
    { "@type": "ListItem", position: 2, name: "Bitcoin", item: "https://www.cryptobeacon.site/bitcoin" },
    { "@type": "ListItem", position: 3, name: "How Bitcoin Wallets Work", item: URL },
  ],
};

export const Route = createFileRoute("/bitcoin/how-bitcoin-wallets-work")({
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
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
  component: ArticlePage,
});

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 font-headline-md text-headline-md md:text-headline-lg text-primary mt-xxl mb-md">
      {children}
    </h2>
  );
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
            <li><Link to="/bitcoin" className="hover:text-secondary">Bitcoin</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">How Bitcoin Wallets Work</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#F7931A] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Bitcoin · Explainer
        </span>

        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          How Bitcoin Wallets Work
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          Private keys, public keys, addresses, HD wallets, and transaction signing — explained from first principles.
        </p>

        <Author />

        <H2 id="not-storing-bitcoin">Wallets don't store Bitcoin</H2>
        <P>
          The name "wallet" is misleading. A Bitcoin wallet doesn't hold Bitcoin the way a physical wallet holds cash. Bitcoin itself exists only as entries in the blockchain — a global ledger maintained by tens of thousands of nodes. What a wallet actually stores is a <strong>private key</strong>: a secret number that proves you have the right to spend specific Bitcoin.
        </P>
        <P>
          Think of it this way: the Bitcoin belongs to whoever can sign for it. The private key is your signature authority. The wallet is the software or hardware that manages and protects that key.
        </P>

        <H2 id="private-key">The private key</H2>
        <P>
          A Bitcoin private key is a randomly generated 256-bit number — a number between 1 and approximately 10<sup>77</sup>. This number is so large that generating the same one twice by accident is considered cryptographically impossible.
        </P>
        <P>
          The private key is usually represented as a 64-character hexadecimal string or encoded in a format called WIF (Wallet Import Format). It must be kept completely secret. Anyone who knows your private key controls your Bitcoin.
        </P>

        <H2 id="public-key-address">From private key to address</H2>
        <P>
          The private key is fed through a mathematical process called <strong>elliptic curve multiplication</strong> (using a specific curve called secp256k1) to produce a <strong>public key</strong>. This process is one-way — you can derive a public key from a private key, but you cannot reverse it.
        </P>
        <P>
          The public key is then hashed twice — first through SHA-256, then through RIPEMD-160 — and a checksum is added. The result is encoded and presented as a <strong>Bitcoin address</strong>: the familiar string beginning with "1", "3", or "bc1" that you share with others to receive funds.
        </P>

        <div className="my-xl p-lg rounded-xl bg-surface-container-low border border-outline-variant font-mono text-sm overflow-x-auto">
          <div className="flex flex-col gap-sm text-on-surface">
            <div className="flex items-center gap-md">
              <span className="text-[#F7931A] font-semibold w-32 shrink-0">Private Key</span>
              <span className="text-on-surface-variant">→ 256-bit random number (your secret)</span>
            </div>
            <div className="flex items-center gap-md">
              <span className="text-[#F59E0B] font-semibold w-32 shrink-0">Public Key</span>
              <span className="text-on-surface-variant">→ derived via secp256k1 elliptic curve (shareable)</span>
            </div>
            <div className="flex items-center gap-md">
              <span className="text-[#0F9D58] font-semibold w-32 shrink-0">Address</span>
              <span className="text-on-surface-variant">→ SHA-256 + RIPEMD-160 hash of public key</span>
            </div>
          </div>
        </div>

        <H2 id="signing">Transaction signing</H2>
        <P>
          When you send Bitcoin, your wallet constructs a transaction and signs it with your private key using the <strong>ECDSA algorithm</strong> (Elliptic Curve Digital Signature Algorithm). The signature proves that you authorized the transaction without revealing your private key.
        </P>
        <P>
          The Bitcoin network verifies the signature using your public key. If the signature is valid, the transaction is accepted and broadcast to the network. Miners include it in a block, and the transfer is complete.
        </P>

        <H2 id="hd-wallets">HD wallets and seed phrases</H2>
        <P>
          Early wallets generated a single private key. If you lost it, you lost everything. Modern wallets use a <strong>Hierarchical Deterministic (HD)</strong> structure, defined by the BIP-32 and BIP-44 standards. An HD wallet generates a master seed — your <strong>seed phrase</strong> — and uses it to derive a virtually unlimited tree of private/public key pairs.
        </P>
        <P>
          This means your seed phrase is the root of your entire wallet. One 12-word or 24-word backup phrase can restore every address and key the wallet has ever generated, on any compatible wallet software. It also means that if someone finds your seed phrase, they have access to all of it.
        </P>
        <P>
          Read more:{" "}
          <Link to="/bitcoin/what-is-a-bitcoin-seed-phrase" className="text-secondary underline">
            What Is a Bitcoin Seed Phrase?
          </Link>
        </P>

        {/* FAQ */}
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
            <Link to="/bitcoin/bitcoin-wallets-complete-guide" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Bitcoin Wallets: Complete Guide</h3>
            </Link>
            <Link to="/bitcoin/what-is-a-bitcoin-seed-phrase" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">What Is a Bitcoin Seed Phrase?</h3>
            </Link>
            <Link to="/guides/what-is-a-private-key" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Bitcoin Private Keys Explained</h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
