import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/bitcoin-bond-yields.jpg";

const URL = "https://www.cryptobeacon.site/bitcoin/why-do-bond-yields-affect-bitcoin-price";
const TITLE = "Why Do Falling Bond Yields Affect Bitcoin's Price? | CryptoBeacon";
const DESC =
  "Why do bond yields affect bitcoin price: a macroeconomic look at treasury yields, opportunity cost, risk-free returns, and capital flows to digital assets.";
const PUBLISHED = "2026-08-30";

const faqs = [
  {
    q: "What is a bond yield?",
    a: "A bond yield is the annual rate of interest returned to an investor who holds a government debt security (like a U.S. Treasury bond). Yields move inversely to bond prices: when demand for bonds rises, bond prices increase, and yields fall.",
  },
  {
    q: "Why is Bitcoin called a 'non-yielding' asset?",
    a: "Unlike bonds (which pay interest coupons) or stocks (which can pay dividends), holding physical Bitcoin or gold does not generate passive cash flow or interest directly. The only return comes from potential price appreciation over time.",
  },
  {
    q: "Do falling bond yields guarantee Bitcoin will rise?",
    a: "No. While lower yields historically create favorable conditions for risk assets by reducing the opportunity cost of holding them, price moves are determined by multiple factors. If global liquidity drops or systemic risk spikes, both bonds and risk assets can fall together.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Do Falling Bond Yields Affect Bitcoin's Price?",
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
    "why do bond yields affect bitcoin price, treasury yields bitcoin relationship, risk free rate crypto, opportunity cost non yielding assets, macroeconomic liquidity crypto, bond buyback bitcoin",
  articleSection: "Bitcoin",
  wordCount: 1200,
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
      name: "Bond yields and price",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/bitcoin/why-do-bond-yields-affect-bitcoin-price")({
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
            <li className="text-primary text-ellipsis overflow-hidden whitespace-nowrap">
              Yields and Bitcoin
            </li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#F7931A] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Bitcoin
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          Why Do Falling Bond Yields Affect Bitcoin's Price?
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 30, 2026</time>}
          readTime="6 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high"
            src={hero}
            alt="Macroeconomic diagram showing falling bond yield charts on the left and capital flows leading to a rising Bitcoin chart on the right"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>

        <P>
          To beginners, the relationship between traditional macroeconomic indicators and decentralized cryptocurrencies can seem disconnected. A common source of confusion is the bond market: why would an announcement regarding U.S. Treasury debt buybacks or a decline in government bond yields cause Bitcoin’s price to rally?
        </P>
        <P>
          The connection is not driven by the technology of the blockchain itself, but by global capital structures and investor risk allocation. To explain <strong>why do bond yields affect bitcoin price</strong>, we must explore the concept of risk-free returns, opportunity cost, and asset yield comparisons.
        </P>

        <H2 id="risk-free-rate">The Baseline: U.S. Treasuries as the 'Risk-Free' Rate</H2>
        <P>
          In global finance, U.S. government bonds (Treasuries) are considered the safest available investment because they are backed by the taxing power of the U.S. government. The interest rate these bonds pay is known as the **risk-free rate of return**.
        </P>
        <P>
          Every institutional investor uses this risk-free rate as a benchmark. If you can earn 5% interest per year on a 10-year U.S. Treasury bond with virtually zero risk of default, any other investment you make—whether it is stocks, real estate, gold, or cryptocurrency—must offer a higher potential return to justify the risk of losing your capital.
        </P>

        <H2 id="opportunity-cost">The Mechanism of Opportunity Cost</H2>
        <P>
          Bitcoin, like physical gold, is a **non-yielding asset**. Unlike corporate stocks (which can distribute dividends) or government bonds (which pay interest coupons), holding Bitcoin does not pay the owner passive income. The only financial return comes from potential spot price appreciation.
        </P>
        <P>
          Because Bitcoin pays no interest, it competes directly with yielding assets. This competition is governed by **opportunity cost**—the lost benefit of choosing one investment over another.
        </P>
        <P>
          When bond yields are high (e.g., 5%), the opportunity cost of holding a non-yielding asset like Bitcoin or gold is high. You are giving up a guaranteed 5% return. However, when bond yields fall (e.g., to 3% or lower), the opportunity cost of holding Bitcoin drops. Because the safe return is lower, the relative attraction of non-yielding, fixed-supply assets rises.
        </P>

        <div className="border-l-4 border-[#F7931A] bg-[#F7931A]/5 p-lg rounded-r-lg mb-md">
          <p className="font-headline-sm text-headline-sm text-primary font-bold">
            The Opportunity Cost Shift
          </p>
          <ul className="list-disc pl-lg space-y-xs font-body-md text-body-md text-on-surface mt-xs">
            <li><strong>Rising Bond Yields:</strong> Higher opportunity cost to hold Bitcoin. Capital often flows out of risk assets and non-yielding assets back into government debt.</li>
            <li><strong>Falling Bond Yields:</strong> Lower opportunity cost to hold Bitcoin. Capital shifts away from low-yielding bonds toward risk assets and fixed-supply stores of value.</li>
          </ul>
        </div>

        <H2 id="liquidity-transmission">The Liquidity Transmission Channel</H2>
        <P>
          Yields do not fall in a vacuum; they fall because bond prices are rising, or because central banks and governments are injecting liquidity into the market.
        </P>
        <P>
          For example, when the U.S. Treasury conducts debt buybacks (purchasing bonds back from the public), it injects cash directly into the banking system while taking bonds out of circulation. This increased demand for bonds drives bond prices up and yields down. The institutions that sold their bonds to the government are now holding cash, which they must reallocate.
        </P>
        <P>
          A portion of this newly injected liquidity naturally flows into risk-on assets. Because Bitcoin operates as a highly liquid risk asset on global trading desks, it acts as a sensitive barometer for excess monetary liquidity.
        </P>

        <H2 id="long-term-implications">Inflation and Fixed Supply</H2>
        <P>
          Finally, yields often fall when markets expect central banks to cut interest rates in response to slowing economic growth or inflation.
        </P>
        <P>
          If interest rates are cut, fiat currencies tend to lose purchasing power over time relative to scarce, hard assets. Because Bitcoin has an immutable, hard-capped supply of 21 million coins (as detailed in our halving coverage), investors view it as a structural hedge against monetary expansion. When falling yields signal upcoming interest rate cuts, demand for fixed-supply hedges increases.
        </P>

        <H2 id="faq">Frequently Asked Questions</H2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md mb-xl">
          {faqs.map((f) => (
            <div key={f.q} className="p-lg rounded-xl border border-outline-variant bg-surface-container-low">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-sm font-semibold">{f.q}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <H2 id="sources">Sources</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://www.federalreserve.gov/monetarypolicy.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              US Federal Reserve — Monetary Policy
            </a>
          </li>
          <li>
            <a
              href="https://www.investopedia.com/terms/o/opportunitycost.asp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Investopedia — Opportunity Cost
            </a>
          </li>
        </ul>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Macroeconomic Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Macroeconomic relationships are complex and dynamic. While falling bond yields historically ease pressure on risk assets, this correlation is not absolute. Markets are influenced by numerous variables, including fiscal policies, geopolitics, and global liquidity trends. Past performance does not indicate future results.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <Link
              to="/bitcoin/what-is-bitcoin-mining"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                What Is Bitcoin Mining?
              </h3>
            </Link>
            <Link
              to="/news/bitcoin-rally-august-2026"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">News</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Bitcoin Rallies Toward $77,000 (Aug 2026)
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
