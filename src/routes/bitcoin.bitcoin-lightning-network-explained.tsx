import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/bitcoin-lightning-network.jpg";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/bitcoin/bitcoin-lightning-network-explained";
const TITLE =
  "The Bitcoin Lightning Network Explained: Instant, Cheap Bitcoin Payments | CryptoBeacon";
const DESC =
  "How the Bitcoin Lightning Network works — payment channels, routing, HTLCs, and the trade-offs compared to on-chain transactions — explained in plain language.";
const PUBLISHED = "2026-08-29";

const faqs: { q: string; a: string }[] = [
  {
    q: "Is the Lightning Network safe?",
    a: "Lightning is generally safe for small and medium payments, but it requires your wallet (or node) to be online to receive payments and to watch for potential channel fraud. Hardware wallets don't natively support Lightning, so Lightning funds live in hot wallets. Most users keep only spending amounts in Lightning and store savings on-chain or in cold storage.",
  },
  {
    q: "What happens if a Lightning channel closes while I'm offline?",
    a: "If the other party attempts to close the channel dishonestly (broadcasting an old state), you have a time window — called a 'justice period' — to submit a penalty transaction and claim all funds in the channel. Watchtower services can monitor this on your behalf if you're frequently offline.",
  },
  {
    q: "Can I receive Lightning payments without running a node?",
    a: "Yes. Custodial Lightning wallets (like Wallet of Satoshi) handle channel management for you. Non-custodial mobile wallets like Phoenix and Breez also manage channels automatically. The trade-off is that custodial wallets hold your funds; non-custodial wallets require small on-chain fees to open channels.",
  },
  {
    q: "Are Lightning payments traceable?",
    a: "Lightning offers stronger privacy than on-chain transactions in some respects. Payments are routed through multiple hops using onion encryption (similar to Tor), so intermediate routing nodes see only the previous and next hop — not the full payment path. However, the sender and recipient nodes can identify each other if they connect directly.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Bitcoin Lightning Network Explained: Instant, Cheap Bitcoin Payments",
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
    logo: {
      "@type": "ImageObject",
      url: "https://www.cryptobeacon.site/favicon.png",
    },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  image: `https://www.cryptobeacon.site${hero}`,
  inLanguage: "en-US",
  keywords:
    "bitcoin lightning network, lightning payments, payment channels, HTLC, bitcoin scaling, instant bitcoin, lightning node",
  articleSection: "Bitcoin",
  wordCount: 1500,
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
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.cryptobeacon.site/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Bitcoin",
      item: "https://www.cryptobeacon.site/bitcoin",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Lightning Network Explained",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/bitcoin/bitcoin-lightning-network-explained")({
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
      { name: "twitter:image", content: "https://www.cryptobeacon.site/og-image.png" },
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
    <h2
      id={id}
      className="scroll-mt-28 font-headline-md text-headline-md md:text-headline-lg text-primary mt-xxl mb-md"
    >
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">{children}</p>
  );
}

function ArticlePage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-lg font-label-caps text-label-caps text-on-surface-variant"
        >
          <ol className="flex flex-wrap items-center gap-xs">
            <li>
              <Link to="/" className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link to="/bitcoin" className="hover:text-secondary">
                Bitcoin
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">Lightning Network Explained</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#F7931A] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Bitcoin
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          The Bitcoin Lightning Network Explained: Instant, Cheap Bitcoin Payments
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 29, 2026</time>}
          readTime="7 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchpriority="high"
            src={hero}
            alt="Glowing lightning bolt channels connecting two Bitcoin wallets across a dark network grid"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>

        <P>
          Bitcoin's base layer — the blockchain — processes roughly 7 transactions per second
          globally. For a payment network aspiring to serve billions of people, that is a bottleneck.
          The <strong>Lightning Network</strong> is Bitcoin's primary solution: a second-layer
          protocol that enables near-instant, low-fee payments without touching the blockchain for
          every transaction.
        </P>
        <P>
          <em>This article is educational. It isn't financial advice.</em>
        </P>

        <H2 id="the-problem">Why Bitcoin Needs a Second Layer</H2>
        <P>
          Every on-chain Bitcoin transaction must be broadcast to the entire network, included in a
          block by a miner, and then confirmed by thousands of full nodes worldwide. This process
          takes 10 minutes on average for the first confirmation (more for higher security), and
          each block has limited space — meaning demand drives fees up during congestion.
        </P>
        <P>
          For buying coffee or making micropayments, this model is impractical. The Lightning
          Network solves this by moving the bulk of transactions off-chain between parties who trust
          each other to settle — and only uses the blockchain to open and close the channel.
        </P>

        <H2 id="payment-channels">How Payment Channels Work</H2>
        <P>
          A Lightning payment channel is a two-party relationship secured by a multi-signature
          Bitcoin transaction locked on-chain. Here's how it works step by step:
        </P>
        <div className="border-l-4 border-[#F7931A] bg-[#F7931A]/5 p-lg rounded-r-lg mb-md">
          <ol className="list-decimal pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>
              Alice and Bob open a channel by co-signing a <strong>funding transaction</strong>{" "}
              that locks a set amount of bitcoin on-chain (e.g., 0.01 BTC).
            </li>
            <li>
              They can now send bitcoin back and forth instantly by signing updated{" "}
              <strong>commitment transactions</strong> — off-chain messages that redistribute the
              channel balance. These are never broadcast to the blockchain.
            </li>
            <li>
              When they're done, either party broadcasts the final commitment transaction to the
              blockchain. The on-chain settlement distributes the final balances and closes the
              channel.
            </li>
          </ol>
        </div>
        <P>
          Only two on-chain transactions occur regardless of how many payments happen in between:
          one to open the channel and one to close it.
        </P>

        <H2 id="routing">Routing Payments Across the Network</H2>
        <P>
          You don't need a direct channel with every person you want to pay. The Lightning Network
          routes payments through a web of existing channels using{" "}
          <strong>Hashed Timelock Contracts (HTLCs)</strong>.
        </P>
        <P>
          If Alice wants to pay Carol but only has a channel with Bob, and Bob has a channel with
          Carol, Lightning routes the payment Alice → Bob → Carol. Each hop is secured by an HTLC:
          a conditional payment that only releases funds when the recipient reveals a cryptographic
          secret. If any hop fails, the payment is cancelled atomically — no one loses money.
        </P>
        <P>
          Routing nodes (like Bob in this example) earn tiny fees for forwarding payments — typically
          a base fee of 1 satoshi plus a proportional fee of ~0.01% or less. This fee structure
          makes micropayments viable in a way that on-chain transactions never could.
        </P>

        <H2 id="trade-offs">Trade-offs vs. On-Chain Transactions</H2>
        <P>
          Lightning is a genuine improvement for frequent small payments, but it's not a replacement
          for on-chain transactions in every context.
        </P>
        <div className="border-l-4 border-[#F7931A] bg-[#F7931A]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>
              <strong>Speed:</strong> Lightning payments settle in milliseconds. On-chain
              transactions take 10+ minutes for the first confirmation.
            </li>
            <li>
              <strong>Fees:</strong> Lightning fees are typically fractions of a cent. On-chain fees
              vary widely with network demand and can reach $10–$50+ during congestion.
            </li>
            <li>
              <strong>Security model:</strong> On-chain transactions are final after sufficient
              confirmations. Lightning requires both parties (or a watchtower) to monitor for
              fraudulent channel closures.
            </li>
            <li>
              <strong>Custody:</strong> Lightning funds live in hot wallets. Large savings should
              stay in cold storage, not Lightning channels.
            </li>
          </ul>
        </div>

        <H2 id="how-to-use">How to Use Lightning Today</H2>
        <P>
          You don't need to run a Lightning node to use the network. Non-custodial mobile wallets
          like <strong>Phoenix</strong> (by ACINQ) and <strong>Breez</strong> handle channel
          management automatically. Custodial options like{" "}
          <strong>Wallet of Satoshi</strong> are the simplest entry point but involve third-party
          custody of your funds.
        </P>
        <P>
          For those who want full control, running a Lightning node using software like{" "}
          <strong>LND</strong> or <strong>Core Lightning</strong> provides the deepest level of
          sovereignty — but requires managing liquidity, channel balances, and uptime.
        </P>

        <H2 id="faq">FAQ</H2>
        <div className="divide-y divide-outline-variant border-y border-outline-variant">
          {faqs.map((f) => (
            <details key={f.q} className="group py-md">
              <summary className="cursor-pointer list-none flex justify-between items-start gap-md font-headline-sm text-headline-sm text-primary">
                <span>{f.q}</span>
                <Plus className="text-secondary transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-sm font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <H2 id="sources">Sources</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://lightning.network/lightning-network-paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Joseph Poon & Thaddeus Dryja — The Bitcoin Lightning Network (Original Paper)
            </a>
          </li>
          <li>
            <a
              href="https://bitcoin.org/en/bitcoin-core/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Bitcoin.org — Bitcoin Core
            </a>
          </li>
          <li>
            <a
              href="https://docs.lightning.engineering/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Lightning Engineering — LND Documentation
            </a>
          </li>
        </ul>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be
            considered financial or investment advice.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/bitcoin/how-to-send-bitcoin-safely"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                How to Send Bitcoin Safely
              </h3>
            </Link>
            <Link
              to="/bitcoin/what-is-a-bitcoin-node"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                What Is a Bitcoin Node?
              </h3>
            </Link>
            <Link
              to="/ethereum/ethereum-layer-2-scaling-rollups-explained"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Ethereum Layer 2 Scaling & Rollups Explained
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
