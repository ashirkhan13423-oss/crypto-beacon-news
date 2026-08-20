import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/bitcoin-halving.jpg";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/bitcoin/what-is-the-bitcoin-halving";
const TITLE = "What is the Bitcoin Halving? The Supply Schedule Explained | CryptoBeacon";
const DESC =
  "A clear, financial breakdown of Bitcoin's hard-capped supply, how the block subsidy halves every four years, and its historical market implications.";
const PUBLISHED = "2026-08-20";

const faqs: { q: string; a: string }[] = [
  {
    q: "When is the next Bitcoin halving?",
    a: "The most recent Bitcoin halving occurred in April 2024. Because halvings happen exactly every 210,000 blocks (roughly every four years), the next one is projected to occur in 2028.",
  },
  {
    q: "Does the halving mean the price will double?",
    a: "No. While historical halvings have correlated with subsequent bull markets, a supply reduction does not mathematically guarantee a price increase. Price is determined by both supply and demand.",
  },
  {
    q: "What happens when all 21 million Bitcoins are mined?",
    a: "Once the last Bitcoin is mined (estimated around the year 2140), the block subsidy will drop to zero. Miners will then be compensated entirely by transaction fees paid by users sending Bitcoin.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What is the Bitcoin Halving? The Supply Schedule Explained",
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
    "bitcoin halving, bitcoin supply schedule, 21 million bitcoin, block subsidy, bitcoin miners reward, btc halving, crypto economics",
  articleSection: "Bitcoin",
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
      name: "Bitcoin",
      item: "https://www.cryptobeacon.site/bitcoin",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "What is the Bitcoin Halving?",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/bitcoin/what-is-the-bitcoin-halving")({
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
            <li className="text-primary">What is the Bitcoin Halving?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#F7931A] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Bitcoin
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What is the Bitcoin Halving? The Supply Schedule Explained
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 20, 2026</time>}
          readTime="7 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchpriority="high" src={hero}
            alt="Abstract golden glowing geometric block structure physically dividing in half, representing the bitcoin halving"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>

        <P>
          In traditional finance, central banks manage fiat currency by printing or destroying money at their discretion. This flexible monetary policy is designed to manage inflation and economic growth, but it often results in the slow, persistent devaluation of the currency over time. Bitcoin, on the other hand, operates on a fundamentally different, mathematically predictable model.
        </P>
        <P>
          At the core of Bitcoin's monetary policy is the <strong>halving</strong> (sometimes called the "halvening"). It is an automated, unalterable event hardcoded into the Bitcoin protocol that cuts the supply of newly issued Bitcoins in half every four years. 
        </P>
        <P>
          <em>This article is educational. It isn't financial advice.</em>
        </P>

        <H2 id="how-new-bitcoin-is-created">How New Bitcoin is Created</H2>
        <P>
          To understand the halving, you first have to understand how new Bitcoins enter circulation. The Bitcoin network is secured by "miners"—computers that dedicate enormous processing power to validate transaction blocks and add them to the blockchain.
        </P>
        <P>
          In exchange for doing this work and securing the network, the protocol awards the winning miner a specific amount of newly created Bitcoin. This is called the <strong>block subsidy</strong> (or block reward). A new block is mined approximately every 10 minutes.
        </P>
        <P>
          When Bitcoin was launched by Satoshi Nakamoto in 2009, the block subsidy was 50 BTC. Every 10 minutes, 50 brand-new Bitcoins were created and awarded to a miner. 
        </P>

        <H2 id="the-mechanics-of-the-halving">The Mechanics of the Halving</H2>
        <P>
          Embedded deep within Bitcoin's source code is a simple rule: after every 210,000 blocks are mined, the block subsidy is cut exactly in half. Because blocks are mined roughly every 10 minutes, 210,000 blocks take approximately four years to process.
        </P>
        <P>
          Here is how the supply schedule has played out so far:
        </P>
        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li><strong>2009 (Genesis):</strong> 50 BTC per block</li>
          <li><strong>2012 (First Halving):</strong> 25 BTC per block</li>
          <li><strong>2016 (Second Halving):</strong> 12.5 BTC per block</li>
          <li><strong>2020 (Third Halving):</strong> 6.25 BTC per block</li>
          <li><strong>2024 (Fourth Halving):</strong> 3.125 BTC per block</li>
        </ul>
        <P>
          This schedule will continue until roughly the year 2140, when the subsidy will drop below 1 satoshi (the smallest unit of Bitcoin) and become zero. At that point, exactly 21 million Bitcoins will have been created, and no more will ever be mined.
        </P>

        <H2 id="why-does-the-halving-matter">Why Does the Halving Matter?</H2>
        <P>
          The halving is significant for several economic and psychological reasons:
        </P>
        
        <h3 className="font-headline-sm text-headline-sm text-primary mt-lg mb-sm">Predictable Inflation</h3>
        <P>
          Because of the halving schedule, Bitcoin's inflation rate is entirely transparent and constantly decreasing. After the 2024 halving, Bitcoin's annual inflation rate dropped to less than 1%, making it "harder" money than gold (which typically sees a 1.5% to 2% supply increase per year due to mining). 
        </P>
        
        <h3 className="font-headline-sm text-headline-sm text-primary mt-lg mb-sm">The Supply Shock</h3>
        <P>
          Miners have significant operational costs (electricity, hardware) and frequently sell the Bitcoin they mine to cover these expenses. This creates a constant, structural sell pressure on the market. When a halving occurs, the amount of Bitcoin miners receive—and consequently sell—is cut in half overnight. This reduction in daily supply issuance can lead to price appreciation if demand for the asset remains constant or increases.
        </P>

        <H2 id="historical-market-cycles">Historical Market Cycles</H2>
        <P>
          Historically, Bitcoin halvings have been closely watched by the market because they have correlated with massive, cyclical price increases. 
        </P>
        <div className="border-l-4 border-[#F7931A] bg-[#F7931A]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li><strong>2012:</strong> Bitcoin was trading around $12. A year later, it surpassed $1,000.</li>
            <li><strong>2016:</strong> Bitcoin was trading around $650. By late 2017, it hit nearly $20,000.</li>
            <li><strong>2020:</strong> Bitcoin was trading around $8,800. In 2021, it reached nearly $69,000.</li>
          </ul>
        </div>
        <P>
          While this historical pattern is undeniable, critics argue that the sample size (three previous cycles) is too small to definitively prove the halving causes the bull run, pointing instead to global macroeconomic factors like quantitative easing and interest rates. Regardless, the halving narrative remains a powerful psychological driver in the cryptocurrency market.
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
            considered financial or investment advice. Past performance is not indicative of future results.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

