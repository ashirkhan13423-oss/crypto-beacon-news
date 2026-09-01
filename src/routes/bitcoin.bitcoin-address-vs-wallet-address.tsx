import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/bitcoin/bitcoin-address-vs-wallet-address";
const TITLE = "Bitcoin Address vs Wallet Address: What's the Difference? | CryptoBeacon";
const DESC =
  "Are a Bitcoin address and a wallet address the same thing? Learn how Bitcoin addresses are generated, the types of addresses (Legacy, SegWit, Taproot), address reuse risks, and how change addresses work.";
const PUBLISHED = "2026-09-01";

const faqs: { q: string; a: string }[] = [
  {
    q: "Are a Bitcoin address and a wallet address the same thing?",
    a: "A wallet address and a Bitcoin address are the same concept — a string derived from your public key that others use to send you Bitcoin. The phrase 'wallet address' is informal; 'Bitcoin address' is the technical term. One wallet can generate an unlimited number of addresses.",
  },
  {
    q: "Is it safe to reuse a Bitcoin address?",
    a: "It is technically functional but not recommended. Reusing an address links all your transactions together on the public ledger, reducing privacy. Modern HD wallets generate a new address for each transaction automatically, so there is usually no reason to reuse one.",
  },
  {
    q: "What are the different types of Bitcoin addresses?",
    a: "Legacy (P2PKH) addresses start with '1'. SegWit (P2SH) addresses start with '3'. Native SegWit (bech32) addresses start with 'bc1q'. Taproot (bech32m) addresses start with 'bc1p'. Newer formats generally offer lower transaction fees.",
  },
  {
    q: "What is a change address?",
    a: "When you spend Bitcoin, the entire UTXO (unspent output) is consumed. Any leftover amount is sent to a change address — a new address in your own wallet — rather than going to the miner. This is handled automatically by your wallet software.",
  },
  {
    q: "Can two wallets have the same Bitcoin address?",
    a: "The probability is so low it is considered cryptographically impossible. There are approximately 2^160 possible Bitcoin addresses — more than the number of atoms on Earth.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bitcoin Address vs Wallet Address: What's the Difference?",
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
    "bitcoin address vs wallet address, bitcoin address types, legacy segwit taproot address, bitcoin change address, address reuse bitcoin, bech32 bitcoin address",
  articleSection: "Bitcoin",
  wordCount: 850,
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
    { "@type": "ListItem", position: 3, name: "Bitcoin Address vs Wallet Address", item: URL },
  ],
};

export const Route = createFileRoute("/bitcoin/bitcoin-address-vs-wallet-address")({
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

const addressTypes = [
  { prefix: "1...", name: "Legacy (P2PKH)", notes: "Original format. Fully supported everywhere. Highest fees.", color: "#F59E0B" },
  { prefix: "3...", name: "SegWit (P2SH)", notes: "Wrapped SegWit. ~25% lower fees than Legacy.", color: "#2563EB" },
  { prefix: "bc1q...", name: "Native SegWit (bech32)", notes: "~40% lower fees. Most wallets now default to this.", color: "#0F9D58" },
  { prefix: "bc1p...", name: "Taproot (bech32m)", notes: "Newest format. Enhanced privacy and smart contract support.", color: "#8B5CF6" },
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
            <li><Link to="/bitcoin" className="hover:text-secondary">Bitcoin</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">Bitcoin Address vs Wallet Address</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#2563EB] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Bitcoin · Explainer
        </span>

        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          Bitcoin Address vs Wallet Address
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          New users often wonder whether these terms mean different things. They don't — but there's more nuance than the simple answer suggests.
        </p>

        <Author />

        <H2 id="same-thing">They are the same thing</H2>
        <P>
          A "wallet address" and a "Bitcoin address" refer to the same thing: a unique string of characters — typically 26 to 35 characters long — that represents a destination for Bitcoin. You share this with someone when you want to receive Bitcoin, just as you would share a bank account number.
        </P>
        <P>
          The phrase "wallet address" is informal shorthand. When people say "what's your wallet address?", they are asking for your Bitcoin receiving address. There is no technical distinction between the two terms.
        </P>

        <H2 id="one-wallet-many-addresses">One wallet, many addresses</H2>
        <P>
          Here is where it gets important: a single wallet does not equal a single address. Modern HD wallets (using the BIP-32/44 standard) can generate an <em>unlimited</em> number of Bitcoin addresses, all controlled by the same seed phrase.
        </P>
        <P>
          Most wallets automatically generate a new receiving address every time you receive Bitcoin. This is a privacy feature — it prevents an observer from linking all your incoming transactions together on the public blockchain. All those addresses still belong to your wallet and funds received to any of them remain under your control.
        </P>

        <H2 id="address-types">The four Bitcoin address types</H2>
        <P>
          Bitcoin addresses come in four formats, each starting with a different prefix. They are all valid and interoperable — you can send to any format from any other format — but newer formats cost less in transaction fees.
        </P>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md my-lg">
          {addressTypes.map((t) => (
            <div key={t.name} className="p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
              <div className="font-mono text-sm font-bold mb-xs" style={{ color: t.color }}>{t.prefix}</div>
              <div className="font-headline-sm text-headline-sm text-primary mb-xs">{t.name}</div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{t.notes}</p>
            </div>
          ))}
        </div>

        <H2 id="address-reuse">Why address reuse is bad for privacy</H2>
        <P>
          Bitcoin's blockchain is public. Every transaction is visible to anyone. If you reuse the same address for multiple incoming payments, anyone can see the full history: how much you've received, from how many senders, and potentially correlate your identity if any of those senders is a known entity.
        </P>
        <P>
          This is why modern wallets display a new address for every transaction. The old addresses still work — you can receive to them forever — but generating fresh ones is better practice.
        </P>

        <H2 id="change-addresses">Change addresses explained</H2>
        <P>
          Bitcoin transactions work differently from bank transfers. When you spend Bitcoin, your wallet selects one or more unspent outputs (UTXOs) large enough to cover the amount. The entire UTXO is consumed as the "input." If it is larger than what you're sending, the leftover is sent back to a <strong>change address</strong> — a new address in your own wallet — rather than being given to the miner.
        </P>
        <P>
          Your wallet handles this automatically. You don't need to configure it. Just be aware that when you look at your transaction history, you may see change outputs going to addresses you recognise as yours.
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
            <Link to="/bitcoin/how-bitcoin-wallets-work" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">How Bitcoin Wallets Work</h3>
            </Link>
            <Link to="/guides/what-is-a-crypto-wallet-address" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">What Is a Crypto Wallet Address?</h3>
            </Link>
            <Link to="/bitcoin/bitcoin-wallets-complete-guide" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Bitcoin Wallets: Complete Guide</h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
