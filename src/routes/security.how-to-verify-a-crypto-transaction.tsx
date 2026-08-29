import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/security-verify-transaction.jpg";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/security/how-to-verify-a-crypto-transaction";
const TITLE = "How to Verify a Crypto Transaction Using a Block Explorer | CryptoBeacon";
const DESC =
  "A practical guide to checking the status of any crypto transaction. Learn how to read a transaction ID, understand block confirmations, and know when a payment is truly final.";
const PUBLISHED = "2026-08-29";

const faqs: { q: string; a: string }[] = [
  {
    q: "Why is my transaction taking so long?",
    a: "Usually, this means you paid a network fee (gas fee or miner fee) that is too low for current network conditions. Miners prioritize transactions with higher fees. Your transaction is sitting in the 'mempool' waiting to be processed.",
  },
  {
    q: "Can a transaction be cancelled once it's broadcast?",
    a: "Usually no. Once a transaction is picked up by miners and confirmed in a block, it is cryptographically irreversible. If it is still pending in the mempool (0 confirmations), advanced users can sometimes 'Replace-By-Fee' (RBF) or 'cancel' it by sending a new transaction with a higher fee, but this is technically complex and not guaranteed.",
  },
  {
    q: "What does 'Dropped' or 'Failed' status mean?",
    a: "A 'Failed' transaction (common on Ethereum) means the smart contract execution encountered an error (like running out of gas), but you still pay the gas fee. A 'Dropped' transaction means it was in the mempool for too long with too low a fee, and nodes eventually forgot about it. The funds never left your wallet.",
  },
  {
    q: "Is it safe to share my TXID?",
    a: "Yes. A TXID (Transaction ID) contains no private keys and cannot be used to steal your funds. It is safe to share with customer support or the person you are paying so they can verify the transaction status.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Verify a Crypto Transaction Using a Block Explorer",
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
    "verify crypto transaction, block explorer, check transaction status, TXID, blockchain confirmations, mempool, etherscan, blockchair",
  articleSection: "Security",
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
      name: "Security",
      item: "https://www.cryptobeacon.site/security",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Verify Crypto Transaction",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/security/how-to-verify-a-crypto-transaction")({
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
              <Link to="/security" className="hover:text-secondary">
                Security
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">Verify Crypto Transaction</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#EAB308] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          How to Verify a Crypto Transaction Using a Block Explorer
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 29, 2026</time>}
          readTime="6 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchpriority="high"
            src={hero}
            alt="Glowing transaction ID hash on a dark terminal screen with green verification checkmarks"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>

        <P>
          In traditional banking, if a transfer hasn't arrived, you have to call customer service and
          trust what they tell you. In crypto, you are your own customer service. Because public
          blockchains are completely transparent, you can independently verify the exact status of
          any transaction at any time using a tool called a <strong>block explorer</strong>.
        </P>
        <P>
          <em>This article is educational. It isn't financial advice.</em>
        </P>

        <H2 id="what-is-a-txid">Step 1: Get the Transaction ID (TXID)</H2>
        <P>
          Every crypto transaction generates a unique alphanumeric receipt called a Transaction ID
          (TXID), sometimes also called a transaction hash. It usually looks like a long string of
          random characters (e.g., <code>0x7a2...</code> on Ethereum, or <code>f38b...</code> on
          Bitcoin).
        </P>
        <P>
          If you sent the funds from an exchange (like Coinbase or Kraken), you can find the TXID in
          your withdrawal history. If you used a personal wallet, click on the transaction in your
          activity tab to view the details, and you will see the TXID there.
        </P>
        <P>
          <strong>Security Note:</strong> It is completely safe to share a TXID with someone (like
          customer support or a merchant you are paying). A TXID only proves that a specific payment
          occurred; it cannot be used to access or steal your funds.
        </P>

        <H2 id="using-block-explorer">Step 2: Enter It Into a Block Explorer</H2>
        <P>
          A block explorer is a search engine for a specific blockchain. It reads the public ledger
          and displays it in a human-readable format.
        </P>
        <div className="border-l-4 border-[#EAB308] bg-[#EAB308]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>
              <strong>For Bitcoin (BTC):</strong> Use explorers like mempool.space, Blockchair, or
              Blockchain.com.
            </li>
            <li>
              <strong>For Ethereum (ETH) and ERC-20 tokens:</strong> Use Etherscan.io.
            </li>
            <li>
              <strong>For Solana (SOL):</strong> Use Solscan.io or Solana Explorer.
            </li>
          </ul>
        </div>
        <P>
          Go to the correct explorer for the network you used, paste your TXID into the search bar,
          and hit Enter.
        </P>

        <H2 id="reading-the-status">Step 3: Understand the Status</H2>
        <P>
          When you pull up the transaction page, the most important field is the <strong>Status</strong>
          or <strong>Confirmations</strong> count.
        </P>

        <h3 className="font-headline-sm text-headline-sm text-primary mt-lg mb-sm">Pending / Unconfirmed / 0 Confirmations</h3>
        <P>
          This means you successfully broadcast the transaction to the network, but miners (or
          validators) have not yet included it in a block. The transaction is sitting in the "mempool"
          (the waiting room for transactions). If network traffic is high and your fee was low, it
          might stay here for hours or even days. The funds have technically not moved yet.
        </P>

        <h3 className="font-headline-sm text-headline-sm text-primary mt-lg mb-sm">Confirmed / Success</h3>
        <P>
          This means the transaction has been permanently written into the blockchain. The funds have
          officially moved from the sender to the receiver.
        </P>
        <P>
          <strong>How many confirmations is "safe"?</strong><br/>
          Every time a new block is added <em>after</em> the block containing your transaction, your
          transaction gains one confirmation.
        </P>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface mb-md">
          <li><strong>Bitcoin:</strong> Exchanges usually require 3 to 6 confirmations (30–60 minutes) to consider a deposit final and irreversible.</li>
          <li><strong>Ethereum:</strong> Exchanges usually require 12 to 64 confirmations (3–12 minutes) for finality.</li>
        </ul>

        <h3 className="font-headline-sm text-headline-sm text-primary mt-lg mb-sm">Failed / Reverted (Smart Contract Networks)</h3>
        <P>
          On networks like Ethereum, a transaction can fail if it runs out of "gas" (the fee limit
          was set too low for the required computation) or if a smart contract condition wasn't met.
          In this case, the main funds never leave your wallet, but <strong>you still lose the network fee</strong> you paid for the attempt.
        </P>

        <H2 id="what-if-txid-not-found">What If the Explorer Says "Not Found"?</H2>
        <P>
          If you search your TXID and the explorer says "Sorry, we are unable to locate this Transaction Hash," it usually means one of two things:
        </P>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface mb-md">
          <li><strong>You are on the wrong explorer.</strong> Make sure you aren't searching a Polygon TXID on the Ethereum Etherscan, for example.</li>
          <li><strong>The platform hasn't broadcast it yet.</strong> If you are withdrawing from an exchange, they often give you a TXID immediately, but it can take their backend systems a few minutes to actually broadcast it to the public network. Wait 10 minutes and refresh the page.</li>
        </ul>

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
              href="https://mempool.space/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Mempool.space Documentation — Understanding the Mempool
            </a>
          </li>
          <li>
            <a
              href="https://info.etherscan.com/checking-transaction-status/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Etherscan Info — Checking Transaction Status
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
              to="/guides/how-to-read-a-block-explorer"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                How to Read a Block Explorer
              </h3>
            </Link>
            <Link
              to="/guides/what-is-a-crypto-wallet-address"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                What Is a Crypto Wallet Address?
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
