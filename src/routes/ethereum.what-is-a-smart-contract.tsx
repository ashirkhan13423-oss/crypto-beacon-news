import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdUnit } from "@/components/AdUnit";
import { Author } from "@/components/Author";
import hero from "@/assets/smart-contract.jpg";
import { FileCode2 } from "lucide-react";

const URL = "https://www.cryptobeacon.site/ethereum/what-is-a-smart-contract";
const TITLE = "What is a Smart Contract? How Blockchain Code Works | CryptoBeacon";
const DESC =
  "A beginner-friendly explanation of smart contracts, the self-executing code that powers decentralized finance (DeFi), NFTs, and the Ethereum network.";
const PUBLISHED = "2026-08-20";

const faqs: { q: string; a: string }[] = [
  {
    q: "Are smart contracts legally binding?",
    a: "Usually, no. The word 'contract' is slightly misleading. They are simply computer programs that execute exactly as written. They are not legal agreements recognized by a court, though some lawyers are exploring ways to bridge the two.",
  },
  {
    q: "Can a smart contract be changed once deployed?",
    a: "Generally, no. Once a smart contract is deployed to a blockchain like Ethereum, its code is immutable. However, developers sometimes build 'upgradeable' contracts using proxy patterns, which introduces centralization risks.",
  },
  {
    q: "Does Bitcoin have smart contracts?",
    a: "Bitcoin has very basic scripting capabilities that allow for things like multi-signature wallets, but it does not have the complex, 'Turing-complete' smart contracts that Ethereum has. Ethereum was built specifically for this purpose.",
  },
  {
    q: "What happens if a smart contract has a bug?",
    a: "If there is a flaw in the code, a hacker can exploit it. Because the blockchain cannot be easily reversed, funds stolen due to a smart contract bug are almost always gone forever.",
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
    "what is a smart contract, how do smart contracts work, ethereum smart contracts, solidity basics, crypto defi code",
  articleSection: "Ethereum",
  wordCount: 1400,
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
      name: "What is a Smart Contract?",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/ethereum/what-is-a-smart-contract")({
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
            <li className="text-primary">What is a Smart Contract?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#627EEA] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Ethereum
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What is a Smart Contract?
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 20, 2026</time>}
          readTime="8 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high" src={hero}
            alt="Glowing digital contract made of code and nodes"
            width={1600}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          If Bitcoin is a decentralized calculator that only tracks who sent money to whom, Ethereum
          is a decentralized smartphone that can run applications. The technology that makes these
          applications possible is the "smart contract."
        </P>
        <P>
          Coined by computer scientist Nick Szabo in the 1990s, a smart contract is simply a piece of
          code running on a blockchain. It acts as a digital vending machine: if you input the correct
          funds and meet the pre-programmed conditions, it automatically outputs the expected result,
          without requiring a middleman to oversee the transaction.
        </P>
        <P>
          My first "aha!" moment with smart contracts happened when I took out a loan on a DeFi platform. Instead of filling out paperwork and waiting days for bank approval, the smart contract verified my collateral and instantly deposited the loan into my wallet in seconds.
        </P>

        {/* Layout A: Executive Summary Top Card */}
        <div className="my-xl p-lg rounded-xl border border-outline-variant bg-surface-container-low shadow-sm">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-md flex items-center gap-xs">
            <FileCode2 className="text-[#627EEA] w-6 h-6 shrink-0" /> Executive Summary: Smart Contracts
          </h2>
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed">
            <li>
              <strong>Self-Executing Code:</strong> They automatically trigger actions when pre-defined conditions are met.
            </li>
            <li>
              <strong>No Middlemen:</strong> They eliminate the need for banks, brokers, or lawyers to verify a transaction.
            </li>
            <li>
              <strong>Immutable:</strong> Once deployed to the blockchain, the code generally cannot be changed or stopped by anyone.
            </li>
            <li>
              <strong>The Foundation of DeFi:</strong> All decentralized exchanges, NFT marketplaces, and lending protocols are built on smart contracts.
            </li>
          </ul>
        </div>

        <aside className="my-xl p-lg rounded-lg border border-outline-variant bg-surface-container-low">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-sm">
            Table of Contents
          </h2>
          <ol className="list-decimal list-inside space-y-xs font-body-md text-body-md text-on-surface">
            <li>
              <a href="#how-it-works" className="hover:underline decoration-secondary">
                How a Smart Contract Works
              </a>
            </li>
            <li>
              <a href="#use-cases" className="hover:underline decoration-secondary">
                Real-World Use Cases
              </a>
            </li>
            <li>
              <a href="#vulnerabilities" className="hover:underline decoration-secondary">
                The Problem with Code is Law
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline decoration-secondary">
                Frequently Asked Questions
              </a>
            </li>
          </ol>
        </aside>

        <H2 id="how-it-works">1. How a Smart Contract Works</H2>
        <P>
          Imagine you want to bet a friend $50 on the outcome of a football game. Normally, you have
          to trust each other to pay up, or hold the money with a trusted third party (like an escrow agent or betting house) who charges a fee.
        </P>
        <P>
          With a smart contract, you both deposit $50 into a piece of code on the blockchain. The code
          states: "If Team A wins, send $100 to Alice. If Team B wins, send $100 to Bob." 
        </P>
        <P>
          Since a blockchain cannot naturally browse the internet to see the game score, the smart contract 
          is connected to an 'oracle' (a trusted data feed) that reports the final score of the game into 
          the blockchain environment. As soon as the game ends and the oracle updates the data, the contract 
          executes immediately, sending the money to the winner. No trust is needed, there are no arguments, 
          and no middleman takes a significant cut.
        </P>
        <P>
          This execution is powered by network nodes. Every computer on the Ethereum network runs this code 
          to verify the outcome, ensuring that no single server can manipulate the result.
        </P>

        <H2 id="use-cases">2. Real-World Use Cases</H2>
        <P>
          While betting is a simple example, smart contracts power complex financial ecosystems worth
          billions of dollars:
        </P>
        <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li><strong>Decentralized Exchanges (DEXs):</strong> Platforms like Uniswap use smart contracts to hold pools of tokens, allowing users to swap assets directly with the contract based on an algorithmic pricing curve, completely replacing traditional market makers.</li>
          <li><strong>Lending and Borrowing:</strong> Protocols like Aave use contracts to allow users to deposit collateral (like Ethereum) and automatically borrow stablecoins against it. If the collateral drops in value, the contract automatically liquidates it to repay the loan.</li>
          <li><strong>NFTs:</strong> Non-Fungible Tokens are simply smart contracts that prove ownership of a specific digital asset, guaranteeing scarcity and tracking royalty payments automatically on secondary sales.</li>
        </ul>

        <AdUnit />

        <H2 id="vulnerabilities">3. The Problem with "Code is Law"</H2>
        <P>
          The greatest strength of a smart contract is also its greatest weakness: it executes exactly
          as written, blindly and without human nuance. In traditional finance, if a bank makes an error, 
          a judge can order a reversal. On a blockchain, the code *is* the final arbiter.
        </P>
        <P>
          If a developer makes a mistake and leaves a logical flaw in the code (such as a reentrancy vulnerability or poor access controls), a hacker can exploit it. Because the contract is immutable (unchangeable), the developers cannot simply hit a "pause" button and fix the code once it is deployed. 
        </P>
        <P>
          To mitigate this, some projects use "upgradeable" contracts (where a proxy contract points to a new version of the code). However, this introduces centralization, meaning a small group of developers could theoretically change the rules on users. Navigating this tradeoff between pure immutability (security via mathematics) and upgradeability (security via human intervention) is one of the biggest challenges in Web3.
        </P>

        <H2 id="faq">4. Frequently Asked Questions</H2>
        {/* Layout A: 2-column Grid FAQ */}
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
          Smart contracts are the engine of Web3. They remove the need to trust humans or corporations
          by replacing them with verifiable code. While the technology is still in its infancy and
          carries significant risks, it represents a fundamental shift in how digital agreements and
          financial services can operate on a global scale.
        </P>

        <H2 id="sources">Sources & Further Reading</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://ethereum.org/en/developers/docs/smart-contracts/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Ethereum.org — Introduction to Smart Contracts
            </a>
          </li>
          <li>
            <a
              href="https://www.ibm.com/topics/smart-contracts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              IBM — What are smart contracts on blockchain?
            </a>
          </li>
        </ul>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Educational Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only. Interacting with smart
            contracts carries the risk of total loss of funds.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/ethereum/ethereum-layer-2-scaling-rollups-explained"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Layer 2 Rollups Explained
              </h3>
            </Link>
            <Link
              to="/ethereum/can-you-send-bitcoin-to-an-ethereum-address"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Send BTC to an ETH Address?
              </h3>
            </Link>
            <Link
              to="/security/defi-risks-explained"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                DeFi Risks Explained
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

