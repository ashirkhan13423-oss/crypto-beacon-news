import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/guides-smart-contract.jpg";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/guides/what-is-a-smart-contract-explained";
const TITLE = "What is a Smart Contract? Explained Simply | CryptoBeacon";
const DESC = "A beginner-friendly explanation of smart contracts, how they automate transactions, and their role in the crypto ecosystem.";
const PUBLISHED = "2026-09-12";

const faqs: { q: string; a: string }[] = [
  {
    q: "Can a smart contract be changed once deployed?",
    a: "Generally, no. Smart contracts are immutable by design, meaning their code cannot be altered once it lives on the blockchain. Upgradability can be programmed in via proxy contracts, but it introduces centralization risks.",
  },
  {
    q: "What happens if there is a bug in the code?",
    a: "Because they are immutable and handle money automatically, bugs can be catastrophic. Hackers often exploit vulnerabilities to drain funds, which is why professional smart contract auditing is critical.",
  },
  {
    q: "Do smart contracts have legal standing?",
    a: "In some jurisdictions, yes. However, traditional legal systems are still adapting to blockchain technology, and the legal enforceability of \"code is law\" remains a complex gray area.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What is a Smart Contract? Explained Simply",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Person",
    name: "CryptoBeacon Editorial",
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
  articleSection: "Guides",
  wordCount: 1850,
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
      name: "What is a Smart Contract? Explained Simply",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/guides/what-is-a-smart-contract-explained")({
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
    links: [
      { rel: "canonical", href: "https://www.cryptobeacon.site/guides/what-is-a-smart-contract-explained" }],
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
            <li className="text-primary">What is a Smart Contract? Explained Simply</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#F7931A] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What is a Smart Contract? Explained Simply
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>September 12, 2026</time>}
          readTime="8 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high" src={hero}
            alt="What is a Smart Contract? Explained Simply"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>
        

<P>The term <strong>smart contract</strong> is often thrown around as the revolutionary technology behind decentralized finance (DeFi), NFTs, and Web3. First conceptualized by computer scientist Nick Szabo in the 1990s, smart contracts have moved from theory to reality, primarily popularized by the Ethereum blockchain.</P>

<H2 id="what-is-it">What Exactly is a Smart Contract?</H2>

<P>Simply put, a smart contract is a self-executing computer program that lives on a blockchain. It contains a set of rules (written in code) that automatically execute when predetermined conditions are met. Think of it like a digital vending machine: you insert a coin, select an item, and the machine automatically dispenses the product. There is no human clerk involved to verify the transaction.</P>

<P>In the crypto space, smart contracts facilitate trustless transactions. If Alice wants to buy a digital asset from Bob, they don't need a middleman or an escrow agent. They use a smart contract: Alice sends funds, Bob sends the asset, and the contract automatically swaps them simultaneously. If either party fails to deliver, the contract cancels the transaction.</P>

<H2 id="the-backbone-of-defi">The Backbone of Decentralized Applications (dApps)</H2>

<P>Smart contracts are the building blocks of dApps. When you trade on a decentralized exchange (like Uniswap) or take out a crypto loan (like on Aave), you are interacting purely with smart contracts. These programs run exactly as coded without any downtime, censorship, or third-party interference.</P>

<div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Key Takeaways</h3>
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>Smart contracts are self-executing lines of code stored on a blockchain.</li>
            <li>They remove the need for intermediaries (banks, lawyers, brokers) by automating agreements.</li>
            <li>Because they are immutable, any flaw in the code is permanent and can lead to irreversible financial loss.</li>
          </ul>
        </div>


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
            considered financial or investment advice. Past performance is not indicative of future results.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/ethereum/what-is-a-smart-contract"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Smart Contract on Ethereum
              </h3>
            </Link>\n            <Link
              to="/ethereum/what-is-an-erc-20-token"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                ERC-20 Token Explained
              </h3>
            </Link>\n            <Link
              to="/guides/coin-vs-token-difference"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Coin vs Token
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
