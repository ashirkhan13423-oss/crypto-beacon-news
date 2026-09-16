import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
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
    links: [
      { rel: "canonical", href: "https://www.cryptobeacon.site/news/bitcoin-rally-august-2026" }],
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

        <p className="italic text-on-surface-variant mb-lg font-body-sm mt-md">
          Market conditions as of August 21, 2026. This is a dated market snapshot.
        </p>

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high" src={hero}
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


        <H2 id="what-happened">What Happened</H2>
        <P>
          Bitcoin opened Thursday, August 20 at $69,289.44, up 7.1% from the prior day, and continued climbing to $71,980.32 by mid-morning. By Friday, August 21, it was trading around $76,712.47.
        </P>

        <H2 id="what-drove-the-move">What Drove the Move</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface marker:text-secondary mb-lg">
          <li>
            <strong>A policy push in Washington.</strong> President Trump publicly urged Congress to pass the{" "}
            <Link to="/news/what-is-the-clarity-act-crypto" className="text-secondary hover:underline">
              Clarity Act
            </Link>
            , legislation that would define whether cryptocurrencies are regulated as securities or commodities. The bill remains stalled in the Senate with a procedural vote scheduled for September.
          </li>
          <li>
            <strong>A Treasury announcement affecting yields.</strong> The U.S. Treasury announced it would double long-term debt buybacks, which contributed to a{" "}
            <Link to="/bitcoin/why-do-bond-yields-affect-bitcoin-price" className="text-secondary hover:underline">
              decline in long-term Treasury yields
            </Link>{" "}
            — a shift that tends to make non-yielding assets like Bitcoin comparatively more attractive to some investors.
          </li>
          <li>
            <strong>A {" "}
            <Link to="/guides/what-is-a-short-squeeze-crypto-explained" className="text-secondary hover:underline">
              short squeeze
            </Link>
            .</strong> The combination of the Treasury announcement and regulatory optimism triggered a wave of short-position liquidations in Bitcoin futures, which can accelerate a price move once it starts, independent of new buying demand.
          </li>
          <li>
            <strong>A proposed SEC framework.</strong> Earlier in the week, the SEC announced proposed rules providing a clearer framework for crypto companies to raise capital, which also contributed to positive sentiment.
          </li>
        </ul>




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

        <div className="mt-xl text-center">
          <p className="font-body-sm text-on-surface-variant">
            <em>Disclaimer: This article is a factual report published on August 21, 2026, for informational purposes only. It is not financial advice.</em>
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
              to="/guides/why-governments-regulate-cryptocurrency"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
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
