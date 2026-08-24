import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdUnit } from "@/components/AdUnit";
import { Author } from "@/components/Author";
import hero from "@/assets/news-bitcoin-rally.jpg";

const URL = "https://www.cryptobeacon.site/news/bitcoin-rally-august-2026";
const TITLE = "Bitcoin Rallies Toward $77K: What's Driving It (Aug 2026) | CryptoBeacon";
const DESC =
  "Bitcoin climbed sharply the week of August 18–21, 2026. Here's a factual, dated look at what happened and why — no predictions.";
const PUBLISHED = "2026-08-21";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Bitcoin Rallies Toward $77,000 — What's Driving the Move",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Organization",
    name: "CryptoBeacon",
    url: "https://www.cryptobeacon.site",
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
    "bitcoin price rally august 2026, why is bitcoin price up this week, bitcoin clarity act price, bitcoin short squeeze august 2026",
  articleSection: "News",
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
      name: "Bitcoin Rallies Toward $77,000 (Aug 2026)",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/news/bitcoin-rally-august-2026")({
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
            <li className="text-primary">Bitcoin Rallies Toward $77,000 (Aug 2026)</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          News
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          Bitcoin Rallies Toward $77,000 — What's Driving the Move
        </h1>

        <Author publishedDate={<time dateTime={PUBLISHED}>August 21, 2026</time>} readTime="5 min read" />

        {/* PROMINENT DATED BANNER */}
        <div className="mt-md mb-lg border-l-4 border-[#2563EB] bg-[#2563EB]/10 p-md rounded-r-md">
          <p className="font-headline-sm text-headline-sm text-primary font-bold">
            Last updated: August 21, 2026.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
            This is a dated market snapshot, not evergreen content — figures below reflect this specific week and will age quickly.
          </p>
        </div>

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchpriority="high" src={hero}
            alt="Illustration representing a Bitcoin price chart showing a recent upward move"
            width={1536}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          Bitcoin moved sharply higher over the week of August 18–21, 2026, climbing from the low-$60,000s to above $76,000. Here's a factual look at what happened and why, without speculation about where it goes next.
        </P>
        <P>
          This article reports on events as they occurred and is not financial advice. It does not predict future price movement.
        </P>

        <AdUnit />

        <H2 id="what-happened">What Happened</H2>
        <P>
          Bitcoin opened Thursday, August 20 at $69,289.44, up 7.1% from the prior day, and continued climbing to $71,980.32 by mid-morning. By Friday, August 21, it was trading around $76,712.47.
        </P>

        <H2 id="what-drove-the-move">What Drove the Move</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface marker:text-secondary mb-lg">
          <li>
            <strong>A policy push in Washington.</strong> President Trump publicly urged Congress to pass the Clarity Act, legislation that would define whether cryptocurrencies are regulated as securities or commodities. The bill remains stalled in the Senate with a procedural vote scheduled for September.
          </li>
          <li>
            <strong>A Treasury announcement affecting yields.</strong> The U.S. Treasury announced it would double long-term debt buybacks, which contributed to a decline in long-term Treasury yields — a shift that tends to make non-yielding assets like Bitcoin comparatively more attractive to some investors.
          </li>
          <li>
            <strong>A short squeeze.</strong> The combination of the Treasury announcement and regulatory optimism triggered a wave of short-position liquidations in Bitcoin futures, which can accelerate a price move once it starts, independent of new buying demand.
          </li>
          <li>
            <strong>A proposed SEC framework.</strong> Earlier in the week, the SEC announced proposed rules providing a clearer framework for crypto companies to raise capital, which also contributed to positive sentiment.
          </li>
        </ul>

        <AdUnit />

        <H2 id="what-this-article-isnt-saying">What This Article Isn't Saying</H2>
        <P>
          This piece reports what happened and the stated reasons behind it — it does not predict where Bitcoin's price goes from here, and it deliberately excludes the price targets and forecasts currently circulating elsewhere. Short-term price moves, including this one, don't reliably indicate future direction.
        </P>

        <H2 id="key-takeaways">Key Takeaways</H2>
        <div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface marker:text-secondary">
            <li>Bitcoin rose from the low-$60,000s to above $76,000 over the week of August 18–21, 2026.</li>
            <li>The move coincided with a political push for crypto-specific legislation, a Treasury announcement affecting bond yields, a short squeeze in futures markets, and a proposed SEC framework.</li>
            <li>This is a snapshot of a specific week, not a forecast — treat any price target you see elsewhere with appropriate skepticism.</li>
          </ul>
        </div>

        <H2 id="sources">Sources</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://www.coindesk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              CoinDesk — Bitcoin Market Coverage, August 2026
            </a>
          </li>
          <li>
            <a
              href="https://cointelegraph.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              CoinTelegraph — Regulatory & Market News, August 2026
            </a>
          </li>
          <li>
            <a
              href="https://www.sec.gov/news/press-releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              U.S. SEC — Press Releases and Policy Announcements
            </a>
          </li>
        </ul>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is a factual, dated report on market events and is for informational purposes only. It is not financial or investment advice, and it does not predict future price movement. Figures reflect the date noted above and will not be updated after publication unless explicitly refreshed.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/guides/why-bitcoin-price-moves-more-than-stocks"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Why Bitcoin's Price Moves More Than Stocks
              </h3>
            </Link>
            <Link
              to="/bitcoin/what-is-the-bitcoin-halving"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                What Is the Bitcoin Halving?
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
