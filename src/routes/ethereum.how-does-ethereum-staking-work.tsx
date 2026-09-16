import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/ethereum-staking-mechanism.jpg";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/ethereum/how-does-ethereum-staking-work";
const TITLE = "How Does Ethereum Staking Work? | CryptoBeacon";
const DESC = "Understanding the mechanics of Proof-of-Stake on Ethereum and how validators secure the network.";
const PUBLISHED = "2026-09-12";

const faqs: { q: string; a: string }[] = [
  {
    q: "How much ETH do I need to stake?",
    a: "To run your own validator node, you need exactly 32 ETH. However, you can stake any fraction of an ETH using liquid staking pools like Lido or centralized exchanges like Coinbase.",
  },
  {
    q: "What are the risks of staking Ethereum?",
    a: "Risks include smart contract bugs (if using pools), slashing (if your validator behaves maliciously or goes offline), and temporary lockup periods.",
  },
  {
    q: "What is Liquid Staking?",
    a: "Liquid staking allows you to stake your ETH and receive a receipt token (like stETH) in return, which you can trade or use in DeFi while still earning staking rewards.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Does Ethereum Staking Work?",
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
  articleSection: "Ethereum",
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
      name: "Ethereum",
      item: "https://www.cryptobeacon.site/ethereum",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "How Does Ethereum Staking Work?",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/ethereum/how-does-ethereum-staking-work")({
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
    links: [
      { rel: "canonical", href: "https://www.cryptobeacon.site/ethereum/how-does-ethereum-staking-work" }],
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
            <li className="text-primary">How Does Ethereum Staking Work?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#F7931A] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Ethereum
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          How Does Ethereum Staking Work?
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>September 12, 2026</time>}
          readTime="8 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high" src={hero}
            alt="How Does Ethereum Staking Work?"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>
        

<P>In 2022, Ethereum executed "The Merge," transitioning the network from a highly energy-intensive Proof-of-Work (PoW) system to a much more efficient Proof-of-Stake (PoS) consensus mechanism. Instead of relying on miners with powerful graphics cards, Ethereum now relies on "validators" who lock up their own capital to secure the network. This process is known as <strong>Ethereum staking</strong>.</P>

<H2 id="what-is-staking">What is Staking?</H2>

<P>Staking is the act of locking up a certain amount of cryptocurrency in a smart contract to participate in running the blockchain. On Ethereum, users must lock up 32 ETH to activate a validator software client. These validators are responsible for storing data, processing transactions, and adding new blocks to the blockchain.</P>

<P>In return for this service, validators are rewarded with newly issued ETH and a portion of the network's transaction fees. This provides a steady yield to participants, often likened to earning interest in a traditional savings account, though it carries different risks.</P>

<H2 id="the-slashing-mechanism">The Slashing Mechanism</H2>

<P>Proof-of-Stake replaces the physical cost of electricity (used in Bitcoin) with financial risk. If a validator acts maliciously—such as trying to process fraudulent transactions or running modified software to cheat the system—the network automatically penalizes them. This penalty is called "slashing," where a portion of their staked 32 ETH is confiscated and burned, and the validator is ejected from the network. This financial threat ensures validators act honestly.</P>

<div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Key Takeaways</h3>
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>Ethereum staking requires locking up ETH to secure the network, replacing energy-intensive mining.</li>
            <li>Validators earn yields in the form of new ETH and transaction fees for honestly proposing and verifying blocks.</li>
            <li>Malicious behavior or excessive downtime can result in "slashing," meaning you lose a portion of your staked ETH.</li>
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
              to="/security/how-to-store-crypto-seed-phrase-safely"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Store Seed Phrase Safely
              </h3>
            </Link>\n            <Link
              to="/ethereum/what-is-ethereum-staking"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Ethereum Staking Basics
              </h3>
            </Link>\n            <Link
              to="/ethereum/proof-of-stake-explained"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Proof of Stake Explained
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
