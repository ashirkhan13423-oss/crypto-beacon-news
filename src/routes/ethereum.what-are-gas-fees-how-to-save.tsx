import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/ethereum-gas-fees.jpg";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/ethereum/what-are-gas-fees-how-to-save";
const TITLE = "What Are Ethereum Gas Fees and How to Save on Them? | CryptoBeacon";
const DESC =
  "An explainer on how network congestion drives up transaction costs on Ethereum, how Gwei works, and practical strategies for minimizing fees using Layer 2 networks.";
const PUBLISHED = "2026-08-20";

const faqs: { q: string; a: string }[] = [
  {
    q: "Why are Ethereum gas fees sometimes so high?",
    a: "Gas fees spike when network demand outpaces the blockchain's capacity. Because Ethereum can only process about 15-30 transactions per second natively, users must bid higher fees during periods of congestion to get their transactions prioritized by validators.",
  },
  {
    q: "What is a Gwei?",
    a: "Gwei is a tiny denomination of Ether (ETH), representing one billionth of a single ETH. Gas prices are usually quoted in Gwei because the numbers are much easier to read (e.g., 20 Gwei instead of 0.000000020 ETH).",
  },
  {
    q: "Do I lose my gas fee if my transaction fails?",
    a: "Yes. The gas fee pays for the computational work the network validators perform. If a transaction fails (e.g., because you set the gas limit too low, or a smart contract reverted), the validators still did the work, so the fee is consumed and not refunded.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Are Ethereum Gas Fees and How to Save on Them?",
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
    "ethereum gas fees, what is gwei, how to save on gas, eth transaction fees, layer 2 rollups, lower gas fees",
  articleSection: "Ethereum",
  wordCount: 1350,
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
      name: "Ethereum",
      item: "https://www.cryptobeacon.site/ethereum",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "What Are Ethereum Gas Fees?",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/ethereum/what-are-gas-fees-how-to-save")({
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
      { property: "article:section", content: "Ethereum" },
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
              <Link to="/ethereum" className="hover:text-secondary">
                Ethereum
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">What Are Ethereum Gas Fees?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#627EEA] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Ethereum
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What Are Ethereum Gas Fees and How to Save on Them?
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 20, 2026</time>}
          readTime="7 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchpriority="high" src={hero}
            alt="Abstract dark mode digital illustration representing glowing data packets flowing through a network with a meter showing cost"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>

        <P>
          If you have ever tried to send a transaction on Ethereum during a busy market period, you have likely experienced "sticker shock" at the estimated network fee. These transaction costs, commonly referred to as <strong>gas fees</strong>, are a fundamental mechanic of how the Ethereum network operates, secures itself, and allocates its limited computational resources.
        </P>
        <P>
          This guide breaks down exactly what gas is, why it can become incredibly expensive, and practical, actionable strategies you can use to minimize your fees without sacrificing security.
        </P>
        <P>
          <em>This article is educational. It isn't financial advice.</em>
        </P>

        <H2 id="what-is-gas">What is Gas?</H2>
        <P>
          Ethereum is essentially a massive, decentralized global computer. When you send a transaction—whether it's transferring ETH to a friend, swapping tokens on Uniswap, or minting an NFT—you are asking this global computer to perform computational work on your behalf.
        </P>
        <P>
          "Gas" is the unit that measures the amount of computational effort required to execute a specific operation. A simple transfer of ETH requires exactly 21,000 units of gas. A complex smart contract interaction, like providing liquidity to a decentralized exchange, might require 150,000 to 300,000 units of gas.
        </P>
        <P>
          You pay for this gas in Ether (ETH), but because the amounts are so small, the price of gas is usually denominated in <strong>Gwei</strong>. One Gwei is equal to one billionth of a single ETH (0.000000001 ETH).
        </P>

        <H2 id="why-do-gas-fees-spike">Why Do Gas Fees Spike?</H2>
        <P>
          Ethereum's base layer can only process roughly 15 to 30 transactions per second. However, during periods of high market volatility, highly anticipated NFT mints, or major airdrops, thousands of users attempt to transact at the exact same moment.
        </P>
        <P>
          Because block space is strictly limited, Ethereum uses a fee market to determine whose transactions get processed first. Users essentially bid against each other by offering to pay a higher "priority fee" (tip) to the validators. If you want your transaction processed immediately during a congested period, you must outbid other users, which drives the overall price of gas up rapidly.
        </P>

        <H2 id="how-to-save-on-gas-fees">How to Save on Gas Fees</H2>
        <P>
          You don't always have to pay exorbitant fees. By understanding how the network operates, you can use several strategies to drastically reduce your transaction costs.
        </P>

        <h3 className="font-headline-sm text-headline-sm text-primary mt-lg mb-sm">1. Use Layer 2 Networks (Rollups)</h3>
        <P>
          The most effective way to bypass high Ethereum mainnet fees is to not use the mainnet at all for everyday transactions. <strong>Layer 2 (L2) rollups</strong> like Arbitrum, Optimism, and Base process transactions on their own faster, cheaper networks, and then "roll up" batches of those transactions into a single compressed proof that is settled on the Ethereum mainnet.
        </P>
        <P>
          By using an L2, you inherit Ethereum's robust security but pay only a fraction of the cost—often a few cents instead of tens of dollars. Most major decentralized applications (Uniswap, Aave, OpenSea) are fully supported on these L2 networks.
        </P>

        <h3 className="font-headline-sm text-headline-sm text-primary mt-lg mb-sm">2. Time Your Transactions</h3>
        <P>
          Gas prices fluctuate significantly based on global timezones and network activity. Historically, the most expensive times to transact are during US business hours on weekdays.
        </P>
        <P>
          Conversely, the cheapest times to transact are often on weekends, or during the late night/early morning hours in the US (when both the US and Europe are largely asleep). If your transaction is not urgent—such as moving funds to cold storage or consolidating wallets—wait for a low-gas window.
        </P>

        <h3 className="font-headline-sm text-headline-sm text-primary mt-lg mb-sm">3. Monitor Gas Trackers</h3>
        <P>
          Before initiating a transaction, always check a gas tracker like Etherscan's Gas Tracker or Blocknative. These tools show the current average gas price in Gwei. By knowing the current baseline, you can ensure your wallet software isn't overestimating the fee, and you can make an informed decision about whether to wait for network traffic to cool down.
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

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be
            considered financial or investment advice.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

