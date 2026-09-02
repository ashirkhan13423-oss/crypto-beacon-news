import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdUnit } from "@/components/AdUnit";
import { Author } from "@/components/Author";
import hero from "@/assets/read-block-explorer.jpg";
import { Search } from "lucide-react";

const URL = "https://www.cryptobeacon.site/guides/how-to-read-a-block-explorer";
const TITLE = "How to Read a Block Explorer (Beginner's Guide) | CryptoBeacon";
const DESC =
  "A straightforward guide to using block explorers like Mempool.space and Etherscan to track your transactions, verify balances, and read blockchain data.";
const PUBLISHED = "2026-08-20";

const faqs: { q: string; a: string }[] = [
  {
    q: "Are block explorers free to use?",
    a: "Yes, almost all block explorers are completely free and open to the public. They simply read and display data that is already publicly available on the blockchain.",
  },
  {
    q: "Can I cancel a transaction using a block explorer?",
    a: "No. A block explorer is simply a viewer — a window into the blockchain. You cannot interact, send, or cancel transactions from an explorer. It only displays information.",
  },
  {
    q: "Why isn't my transaction showing up on the explorer?",
    a: "If you just sent it, it might take a few moments to propagate through the network. If it never appears, the transaction was likely never broadcast by your wallet, or you are looking at the wrong blockchain network.",
  },
  {
    q: "Is it safe to type my wallet address into a block explorer?",
    a: "Yes, it is perfectly safe. Your wallet address is public information. However, you should never type your private key or seed phrase into a block explorer (or any website).",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: TITLE,
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
    "how to read a block explorer, what is etherscan, how to check bitcoin transaction, crypto block explorer guide, mempool space tutorial",
  articleSection: "Guides",
  wordCount: 1300,
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
      name: "Guides",
      item: "https://www.cryptobeacon.site/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to Read a Block Explorer",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/guides/how-to-read-a-block-explorer")({
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
      { property: "article:section", content: "Guides" },
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
              <Link to="/guides" className="hover:text-secondary">
                Guides
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">Read a Block Explorer</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#2563EB] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          How to Read a Block Explorer
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 20, 2026</time>}
          readTime="6 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high" src={hero}
            alt="Glowing digital screen displaying blockchain transaction data"
            width={1600}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          A block explorer is effectively the search engine for a blockchain. It allows anyone with
          an internet connection to view all historical and real-time data on the network, including
          balances, transaction histories, and network fees.
        </P>
        <P>
          If you send cryptocurrency from an exchange to your wallet and it doesn't show up
          immediately, your first instinct might be panic. Learning how to read a block explorer
          cures this panic. It allows you to verify exactly where your transaction is, whether it's
          stuck waiting for a block, or if it has already been confirmed.
        </P>
        <P>
          I remember the sheer terror of my first large Bitcoin transfer. I stared at my empty wallet for twenty minutes before someone showed me how to paste the transaction ID into Mempool.space, where I instantly saw it was just waiting for the next block to be mined.
        </P>
        <P>
          <em>This article is educational. It isn't financial advice.</em>
        </P>

        {/* Layout D: Horizontal Jump Links */}
        <nav className="my-xl flex flex-wrap gap-sm font-body-md text-body-md">
          {[
            { id: "what-is-it", label: "What is an Explorer?" },
            { id: "txid", label: "Finding Your Transaction" },
            { id: "anatomy", label: "Anatomy of a Transaction" },
            { id: "popular", label: "Popular Explorers" },
            { id: "faq", label: "FAQ" },
          ].map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-md py-xs rounded-full border border-outline-variant text-on-surface hover:border-secondary hover:text-secondary transition-colors"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <H2 id="what-is-it">1. What is a Block Explorer?</H2>
        <P>
          Blockchains are public ledgers. Every transaction ever made is recorded and visible to
          anyone. However, raw blockchain data is just a continuous stream of cryptographic hashes
          and code. A block explorer provides a graphical user interface (GUI) to make this data
          readable for humans.
        </P>
        <P>
          You don't need an account to use an explorer, and using one is completely anonymous.
          Explorers read data from the blockchain; they cannot write to it or alter transactions.
        </P>

        <H2 id="txid">2. Finding Your Transaction (TXID)</H2>
        <P>
          The most common reason to use a block explorer is to check the status of a transaction you
          just sent or are waiting to receive.
        </P>
        <P>
          Every transaction is assigned a unique identifier called a <strong>Transaction ID (TXID)</strong>
          or Transaction Hash. If you withdraw from an exchange, they will provide this TXID in your
          withdrawal history. If you send from a personal wallet, you can view the TXID in the
          wallet's transaction details.
        </P>
        <P>
          To track your transfer, simply copy the TXID, open a block explorer for the relevant
          network, and paste the TXID into the main search bar.
        </P>

        <H2 id="anatomy">3. Anatomy of a Transaction Page</H2>
        <P>
          When you search for a TXID, you will see a screen densely packed with information. Don't be
          intimidated; you only need to focus on a few key fields:
        </P>
        <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li>
            <strong>Status:</strong> This is the most important field. It will show as either
            "Unconfirmed/Pending" (waiting in the mempool), "Confirmed/Success" (included in a
            block), or "Failed" (common on smart contract networks if gas runs out).
          </li>
          <li>
            <strong>From / To:</strong> These are the sending and receiving addresses. Verify that
            the "To" address exactly matches the address you intended to send to.
          </li>
          <li>
            <strong>Amount:</strong> The total amount of crypto transferred.
          </li>
          <li>
            <strong>Fee:</strong> The network fee paid to miners/validators to process the
            transaction.
          </li>
          <li>
            <strong>Block Height / Confirmations:</strong> The block number your transaction was
            included in, and how many subsequent blocks have been built on top of it. More
            confirmations mean the transaction is more permanent.
          </li>
        </ul>

        <AdUnit />

        <H2 id="popular">4. Popular Block Explorers by Network</H2>
        <P>
          Because blockchains are distinct networks, you must use an explorer designed for the
          specific coin you are sending. If you search a Bitcoin TXID on an Ethereum explorer, it
          will return no results.
        </P>
        <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li>
            <strong>Bitcoin:</strong> Mempool.space is widely considered the best modern Bitcoin
            explorer, offering excellent visual representations of the mempool and transaction fees.
          </li>
          <li>
            <strong>Ethereum:</strong> Etherscan is the gold standard for Ethereum, allowing deep
            dives into smart contract interactions and token transfers.
          </li>
          <li>
            <strong>Solana:</strong> Solscan and Solana Explorer are the primary tools for tracking
            Solana's high-speed transactions.
          </li>
        </ul>

        {/* Layout D: Card-based FAQ */}
        <H2 id="faq">Frequently Asked Questions</H2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md mb-xl">
          {faqs.map((f) => (
            <div key={f.q} className="p-lg rounded-xl border border-outline-variant bg-surface-container-low flex flex-col">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-sm font-semibold">
                {f.q}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {f.a}
              </p>
            </div>
          ))}
        </div>

        <H2 id="conclusion">Conclusion</H2>
        <P>
          Block explorers are essential tools for demystifying cryptocurrency. By learning how to
          input a TXID or a wallet address, you gain independent verification of your funds, freeing
          you from relying entirely on a wallet app's interface to tell you what is happening behind
          the scenes.
        </P>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be
            considered financial advice. 
          </p>
        </div>

        <H2 id="sources">Sources</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://mempool.space"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Mempool.space — Bitcoin Mempool and Transaction Explorer
            </a>
          </li>
          <li>
            <a
              href="https://etherscan.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Etherscan — Ethereum Blockchain Explorer
            </a>
          </li>
          <li>
            <a
              href="https://developer.bitcoin.org/reference/rpc/getrawtransaction.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Bitcoin Developer Reference — Transaction Data and TXID Structure
            </a>
          </li>
        </ul>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/guides/what-is-a-crypto-wallet-address"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                What is a Wallet Address?
              </h3>
            </Link>
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
              to="/ethereum/ethereum-layer-2-scaling-rollups-explained"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Ethereum Layer 2 Scaling
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

