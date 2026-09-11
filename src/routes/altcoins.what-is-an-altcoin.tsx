import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdUnit } from "@/components/AdUnit";
import { Author } from "@/components/Author";
import { Cpu, DollarSign, Settings, Zap } from "lucide-react";

// Needs custom illustration
const hero = "/placeholder-altcoin-hero.png"; 

const URL = "https://www.cryptobeacon.site/altcoins/what-is-an-altcoin";
const TITLE = "What Is an Altcoin? The Complete Guide to Cryptocurrency Alternatives | CryptoBeacon";
const DESC =
  "A complete guide to altcoins: understand smart contract platforms, stablecoins, utility tokens, and meme coins. Learn what makes an altcoin different from Bitcoin.";
const PUBLISHED = "2026-09-12";

const faqs: { q: string; a: string }[] = [
  {
    q: "Is Ethereum considered an altcoin?",
    a: "Yes. In the strictest definition, any cryptocurrency other than Bitcoin is an altcoin. However, because Ethereum is so large and established, many people consider it in a category of its own.",
  },
  {
    q: "Are altcoins a good investment?",
    a: "Altcoins generally carry much higher risk than Bitcoin. While they can offer higher potential returns, they also have a higher rate of failure, lower liquidity, and greater volatility.",
  },
  {
    q: "What is the difference between a coin and a token?",
    a: "A 'coin' typically refers to a cryptocurrency that operates on its own independent blockchain (like Ethereum or Solana). A 'token' is a cryptocurrency built on top of an existing blockchain (like an ERC-20 token on Ethereum). Both fall under the broad category of altcoins.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "What Is an Altcoin? The Complete Guide to Cryptocurrency Alternatives",
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
  keywords: "what is an altcoin, cryptocurrency alternatives, stablecoin, utility token, smart contract platform, meme coin",
  articleSection: "Altcoins",
  wordCount: 1000,
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
      name: "Altcoins",
      item: "https://www.cryptobeacon.site/altcoins",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "What Is an Altcoin?",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/altcoins/what-is-an-altcoin")({
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
      { property: "article:section", content: "Altcoins" },
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

const altcoinCategories = [
  {
    icon: <Cpu />,
    title: "Smart Contract Platforms",
    body: "These are foundational networks designed to host decentralized applications (dApps). They act as a base layer for other projects to build upon.",
    noteColor: "#0F9D58",
  },
  {
    icon: <DollarSign />,
    title: "Stablecoins",
    body: "Cryptocurrencies designed to maintain a stable value, typically pegged to a fiat currency like the US dollar. They provide a stable medium of exchange.",
    noteColor: "#2563EB",
  },
  {
    icon: <Settings />,
    title: "Utility Tokens",
    body: "Tokens designed to serve a specific function within a particular ecosystem or application, such as paying for network fees or accessing a service.",
    noteColor: "#0A0B0D",
  },
  {
    icon: <Zap />,
    title: "Meme Coins",
    body: "Cryptocurrencies that originated from internet memes or jokes. While largely speculative, some have grown to achieve significant community backing.",
    noteColor: "#0F9D58",
  },
];

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
              <Link to="/altcoins" className="hover:text-secondary">
                Altcoins
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">What Is an Altcoin?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#0A0B0D] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Altcoins
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What Is an Altcoin? The Complete Guide to Cryptocurrency Alternatives
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>September 12, 2026</time>}
          readTime="5 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D] flex items-center justify-center min-h-[300px]">
          <span className="text-on-surface-variant">Needs custom illustration</span>
        </figure>

        <P>
          In the simplest terms, an "altcoin" refers to any cryptocurrency other than Bitcoin. 
          When Bitcoin was introduced in 2009, it established the framework for decentralized digital currency. 
          As the technology proved viable, thousands of alternative projects emerged, aiming to improve upon 
          Bitcoin's design or target entirely different use cases.
        </P>

        <div className="my-xl">
          <AdUnit />
        </div>

        <H2 id="why-do-we-need-altcoins">1. Why Do We Need Altcoins?</H2>
        <P>
          Bitcoin was built to be a secure, decentralized digital money network. To achieve its unmatched security, 
          it made deliberate design trade-offs, prioritizing safety and predictability over speed or complex programmability. 
          This is exactly{" "}
          <Link
            to="/guides/why-bitcoin-price-moves-more-than-stocks"
            className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
          >
            why Bitcoin's price behavior and mechanics
          </Link>{" "}
          differ from traditional assets.
        </P>
        <P>
          Altcoins exist to fill the gaps. Some developers wanted faster transaction times, enhanced privacy, or 
          the ability to execute complex programmable agreements known as smart contracts. 
          These different goals led to the creation of thousands of specialized cryptocurrencies.
        </P>

        <H2 id="broad-categories">2. Broad Categories of Altcoins</H2>
        <P>
          The term "altcoin" is a massive umbrella that covers everything from multi-billion dollar decentralized 
          computing platforms to temporary speculative tokens. Understanding the market requires dividing it into categories.
        </P>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md my-lg">
          {altcoinCategories.map((c) => (
            <div
              key={c.title}
              className="p-lg rounded-lg border border-outline-variant bg-surface-container-lowest flex flex-col gap-sm"
            >
              <div
                aria-hidden
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 [&>svg]:w-5 [&>svg]:h-5"
                style={{
                  backgroundColor: `${c.noteColor}18`,
                  border: `1px solid ${c.noteColor}30`,
                  color: c.noteColor,
                }}
              >
                {c.icon}
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">{c.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed flex-grow">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <div className="my-xl">
          <AdUnit />
        </div>

        <H2 id="key-takeaways">3. Key Takeaways</H2>
        <div className="pl-lg border-l-4 border-[#0F9D58] bg-surface-container-low p-md rounded-r-lg my-lg">
          <ul className="list-disc pl-md space-y-sm font-body-lg text-body-lg text-on-surface leading-relaxed">
            <li><strong>Broad Definition:</strong> Any cryptocurrency that is not Bitcoin is technically an altcoin.</li>
            <li><strong>Diverse Utility:</strong> Altcoins serve many functions, from facilitating smart contracts to acting as stable digital dollars.</li>
            <li><strong>Risk Profile:</strong> Altcoins generally carry a higher risk and volatility profile compared to Bitcoin.</li>
            <li><strong>Evolution:</strong> The altcoin ecosystem acts as a testing ground for new cryptographic technologies and economic models.</li>
          </ul>
        </div>

        <div className="my-xl">
          <AdUnit />
        </div>

        <H2 id="faq">Frequently Asked Questions</H2>
        <div className="space-y-md mb-xl">
          {faqs.map((f) => (
            <div key={f.q} className="p-lg rounded-xl border border-outline-variant bg-surface-container-low">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-sm font-semibold">{f.q}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be
            considered financial advice. The cryptocurrency market is highly volatile, and altcoins 
            carry significant risks. Readers should research specific projects and practices 
            appropriate to their own financial situation.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/guides/what-is-a-blockchain-fork"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                What Is a Blockchain Fork?
              </h3>
            </Link>
            <Link
              to="/guides/what-is-a-stablecoin"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                What is a Stablecoin?
              </h3>
            </Link>
            <Link
              to="/guides/why-bitcoin-price-moves-more-than-stocks"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Why Bitcoin Moves More Than Stocks
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
