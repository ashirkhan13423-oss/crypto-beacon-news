import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/news-clarity-act.jpg";

const URL = "https://www.cryptobeacon.site/news/what-is-the-clarity-act-crypto";
const TITLE = "What Is the Clarity Act, and What Would It Actually Change? | CryptoBeacon";
const DESC =
  "What is the Clarity Act crypto: a factual explanation of the proposed U.S. bill, securities vs commodities classifications, and legislative status.";
const PUBLISHED = "2026-08-30";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "What Is the Clarity Act, and What Would It Actually Change?",
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
    "what is the clarity act crypto, crypto clarity act bill, sec vs cftc crypto regulation, securities vs commodities crypto classification, crypto legislative status 2026",
  articleSection: "News",
  wordCount: 1100,
  isAccessibleForFree: true,
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
      name: "News",
      item: "https://www.cryptobeacon.site/news",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Clarity Act Explained",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/news/what-is-the-clarity-act-crypto")({
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
      { property: "article:section", content: "News" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "https://www.cryptobeacon.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
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
              <Link to="/news" className="hover:text-secondary">
                News
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary text-ellipsis overflow-hidden whitespace-nowrap">
              What Is the Clarity Act?
            </li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          News
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What Is the Clarity Act, and What Would It Actually Change?
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 30, 2026</time>}
          readTime="5 min read"
        />

        {/* PROMINENT DATED BANNER */}
        <div className="mt-md mb-lg border-l-4 border-[#2563EB] bg-[#2563EB]/10 p-md rounded-r-md">
          <p className="font-headline-sm text-headline-sm text-primary font-bold">
            Status as of August 30, 2026
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
            This article details the legislative status and contents of the Clarity Act as of late August 2026. Because congressional bills are subject to amendments, votes, and procedural changes, the status of this legislation may change rapidly.
          </p>
        </div>

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchpriority="high"
            src={hero}
            alt="Illustration showing abstract Capitol lines, balanced scales, and a gavel representing cryptocurrency regulation"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>

        <P>
          The question of how to regulate digital assets has been a central debate in Washington for years. Much of the conflict centers around which federal agency holds jurisdiction over cryptocurrencies. Currently, the Securities and Exchange Commission (SEC) and the Commodity Futures Trading Commission (CFTC) share overlapping and sometimes conflicting oversight.
        </P>
        <P>
          The proposed <strong>Clarity Act</strong> is a legislative push designed to resolve this regulatory gridlock by setting explicit statutory boundaries. But what is the bill's objective, and what would it actually change for the industry and everyday retail investors?
        </P>

        <H2 id="the-core-problem">The Jurisdictional Turf War: SEC vs. CFTC</H2>
        <P>
          To understand <strong>what is the Clarity Act crypto</strong> bill trying to address, you must understand the current legal friction. Under existing U.S. law, assets classified as <strong>securities</strong> fall under the SEC's oversight, while assets classified as <strong>commodities</strong> fall under the CFTC's jurisdiction.
        </P>
        <P>
          Securities laws carry stringent compliance requirements, including mandatory registration, disclosure filings, and centralized reporting. Commodity laws, by contrast, focus primarily on derivatives markets, trading manipulation, and fraud, offering a less burdensome regulatory path for spot markets.
        </P>
        <P>
          In the absence of crypto-specific federal legislation, regulators have relied on judicial interpretations of the 90-year-old Howey Test to determine asset classification on a case-by-case basis. This has led to enforcement actions against token creators and exchanges, which the industry criticizes as "regulation by enforcement."
        </P>

        <H2 id="proposed-changes">What the Clarity Act Would Change</H2>
        <P>
          The Clarity Act seeks to establish a clear, statutory framework for classifying digital assets. Its main proposals include:
        </P>
        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface marker:text-secondary mb-lg">
          <li>
            <strong>Defining "Decentralized" Networks:</strong> The bill establishes specific mathematical and operational criteria to measure network decentralization. If a blockchain network is deemed sufficiently decentralized (meaning no single entity controls more than a specified percentage of the voting power or development), its native token is automatically classified as a commodity.
          </li>
          <li>
            <strong>CFTC Spot Market Oversight:</strong> The CFTC would be granted formal authority to regulate spot (non-derivative) markets for digital commodities. This would replace the current state-by-state money transmitter license regime with a unified federal oversight program for crypto exchanges.
          </li>
          <li>
            <strong>Clear Path for Securities Transitions:</strong> For tokens that start as securities (such as during a capital raise), the bill outlines a clear procedural path to transition into commodities once the underlying network achieves decentralization.
          </li>
          <li>
            <strong>Stablecoin Regulation:</strong> The bill introduces a separate licensing framework for stablecoin issuers, requiring them to hold 1-to-1 cash reserves or high-quality liquid assets, backed by monthly independent audits.
          </li>
        </ul>

        <H2 id="legislative-status">Current Status: Late August 2026</H2>
        <P>
          As of August 30, 2026, the Clarity Act remains a legislative proposal. It passed the House of Representatives earlier this year with bipartisan support but has faced slower progress in the Senate.
        </P>
        <P>
          In mid-August, President Trump publicly urged the Senate to pass the bill, which contributed to renewed market optimism and price movements. The Senate Committee on Banking, Housing, and Urban Affairs has scheduled a key procedural vote on the legislation for mid-September 2026.
        </P>
        <P>
          If the bill passes the procedural vote, it will move to a full Senate floor vote. If passed with amendments, it must return to the House for reconciliation before it can be signed into law. If it fails the procedural vote or is stalled, the current case-by-case judicial enforcement regime will continue.
        </P>

        <H2 id="impact-on-investors">What It Means for Retail Users</H2>
        <P>
          If passed, the Clarity Act would have direct implications for retail investors, though it would not immediately affect trading day-to-day:
        </P>
        <div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>
              <strong>Asset Listings:</strong> Exchanges would have a clear legal guide on which tokens they can list without fearing SEC litigation, potentially leading to more stable token offerings.
            </li>
            <li>
              <strong>Consumer Disclosures:</strong> Token issuers would be required to publish basic disclosures regarding project development and supply metrics, increasing transparency.
            </li>
            <li>
              <strong>Custodial Protections:</strong> Qualified custodians would be required to hold customer assets in segregated accounts, preventing exchanges from commingling funds.
            </li>
          </ul>
        </div>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Factual Reporting Policy
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article reports on the proposed text and legislative status of a U.S. congressional bill. CryptoBeacon holds no editorial position on whether the bill is beneficial or detrimental to the industry. The information presented is factual and is not investment advice or a prediction of legislative outcomes.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <Link
              to="/news/bitcoin-rally-august-2026"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">News</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Bitcoin Rallies Toward $77,000 (Aug 2026)
              </h3>
            </Link>
            <Link
              to="/news/why-governments-regulate-cryptocurrency"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">News</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Why Governments Regulate Cryptocurrency
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
