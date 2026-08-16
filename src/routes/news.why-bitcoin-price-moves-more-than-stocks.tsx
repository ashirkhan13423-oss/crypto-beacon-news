import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/news-bitcoin-volatility.svg";
import { Plus, PieChart, Lock, Clock, Droplets, Building2 } from "lucide-react";

const URL = "https://www.cryptobeacon.site/news/why-bitcoin-price-moves-more-than-stocks";
const TITLE = "Why Does Bitcoin's Price Move More Than Stocks? | CryptoBeacon";
const DESC =
  "A plain-language look at the structural reasons Bitcoin's price swings more than traditional assets — no predictions, just the mechanics.";
const PUBLISHED = "2026-08-12";

const faqs: { q: string; a: string }[] = [
  {
    q: "Why does Bitcoin move more than the stock market?",
    a: "A combination of a smaller, younger market, a fixed and unresponsive supply, continuous 24/7 trading, and comparatively thinner liquidity all contribute to larger price swings than traditional assets typically see.",
  },
  {
    q: "Will Bitcoin become less volatile over time?",
    a: "Many market observers expect maturing infrastructure and deeper liquidity to gradually moderate volatility, but there's no fixed timeline, and it isn't guaranteed.",
  },
  {
    q: "Does Bitcoin's fixed supply cause price swings?",
    a: "It's a contributing structural factor — because supply can't adjust to meet sudden shifts in demand the way many traditional assets can, that adjustment tends to show up in price instead.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Why Does Bitcoin's Price Move More Than Traditional Assets?",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Person",
    name: "Marcus Vance",
    jobTitle: "Senior Market & Macro Analyst",
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
    "why does bitcoin's price move more than stocks, bitcoin volatility explained simply, why is crypto more volatile than traditional markets, bitcoin market structure explained",
  articleSection: "News",
  wordCount: 750,
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
      name: "News",
      item: "https://www.cryptobeacon.site/news",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Why Bitcoin's Price Moves More Than Traditional Assets",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/news/why-bitcoin-price-moves-more-than-stocks")({
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

function AdUnit() {
  return (
    <div className="my-xl flex flex-col items-center justify-center p-md bg-surface-container-lowest border border-outline-variant rounded-lg min-h-[120px] mx-auto w-full max-w-[728px]">
      <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest mb-xs">
        Advertisement
      </span>
      <div className="w-full h-[90px] bg-surface-container flex items-center justify-center rounded">
        <span className="text-on-surface-variant text-sm">Ad Placeholder</span>
      </div>
    </div>
  );
}

const factors = [
  { icon: <PieChart className="w-5 h-5 text-secondary" />, title: "Market Size", desc: "Smaller market capitalization" },
  { icon: <Lock className="w-5 h-5 text-secondary" />, title: "Fixed Supply", desc: "Inflexible supply curve" },
  { icon: <Clock className="w-5 h-5 text-secondary" />, title: "24/7 Trading", desc: "Continuous global trading" },
  { icon: <Droplets className="w-5 h-5 text-secondary" />, title: "Liquidity Depth", desc: "Thinner order book depth" },
  { icon: <Building2 className="w-5 h-5 text-secondary" />, title: "Infrastructure", desc: "Maturing market mechanisms" },
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
              <Link to="/news" className="hover:text-secondary">
                News
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">Why Bitcoin's Price Moves More Than Stocks</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          News
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          Why Does Bitcoin's Price Move More Than Traditional Assets?
        </h1>

        <div className="mt-md flex flex-wrap items-center gap-md font-body-md text-body-md text-on-surface-variant">
          <span>By <Link to="/about" className="text-secondary font-medium hover:underline">Marcus Vance</Link> (Senior Macro Analyst) · Reviewed by CryptoBeacon Editorial</span>
          <span aria-hidden>·</span>
          <time dateTime={PUBLISHED}>August 12, 2026</time>
          <span aria-hidden>·</span>
          <span>4 min read</span>
        </div>

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            src={hero}
            alt="Illustration representing Bitcoin's price movement compared to traditional markets"
            width={1536}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          Bitcoin's price is known for moving further and faster than stocks, bonds, or major currencies. This isn't random — it comes down to a handful of structural differences between Bitcoin's market and the markets you're used to seeing in traditional finance. This article looks at the mechanics, not the direction — it won't predict where price is headed, only explain why it tends to move the way it does.
        </P>
        <P>This article is educational. It isn't financial advice.</P>

        {/* Inline 5-Icon Row for Structural Factors */}
        <div className="my-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-sm">
          {factors.map((f) => (
            <div
              key={f.title}
              className="p-md rounded-lg border border-outline-variant bg-surface-container-lowest flex flex-col items-center text-center gap-xs"
            >
              <div aria-hidden className="p-sm rounded-full bg-secondary/10">
                {f.icon}
              </div>
              <span className="font-headline-sm text-sm font-semibold text-primary">{f.title}</span>
              <span className="font-body-md text-xs text-on-surface-variant">{f.desc}</span>
            </div>
          ))}
        </div>

        {/* Ad Unit #1: After intro */}
        <AdUnit />

        <H2 id="smaller-younger-market">A Smaller, Younger Market</H2>
        <P>
          Traditional stock markets have existed for well over a century and involve enormous amounts of capital moving through highly developed infrastructure. Bitcoin's market is, by comparison, still young and smaller in overall size. In smaller markets, a given amount of buying or selling activity moves the price more than the same activity would in a much larger, deeper market — simply because there's less on the other side of the trade to absorb it.
        </P>

        <H2 id="fixed-predictable-supply">Fixed, Predictable Supply</H2>
        <P>
          Bitcoin has a fixed maximum supply, and new coins enter circulation at a known, unchangeable rate. Unlike a company that can issue more shares, or a central bank that can adjust currency supply in response to conditions, Bitcoin's supply side cannot flex to meet a sudden change in demand. When demand shifts quickly, that entire adjustment has to happen through price rather than supply.
        </P>

        <H2 id="market-never-closes">A Market That Never Closes</H2>
        <P>
          Stock exchanges open and close on a fixed schedule, which naturally smooths out how information gets absorbed into price. Bitcoin trades continuously, every day, everywhere in the world. This means reactions to news or shifts in sentiment can happen immediately, at any hour, without the pause a traditional market's closing hours would otherwise provide.
        </P>

        <H2 id="thinner-liquidity">Thinner Liquidity Than It Appears</H2>
        <P>
          Even though Bitcoin is the most liquid cryptocurrency, its liquidity is still thinner than most major stocks or currency pairs relative to how much attention it receives. Thinner liquidity means large trades can move the price more noticeably, and it can take less unusual activity to create a visible swing than it would in a deeper market.
        </P>

        {/* Ad Unit #2: After "Thinner Liquidity Than It Appears" */}
        <AdUnit />

        <H2 id="infrastructure">A Market Still Establishing Its Infrastructure</H2>
        <P>
          Traditional finance has spent decades building the infrastructure — clearing systems, circuit breakers, market makers — that helps absorb shocks and reduce erratic price behavior. Bitcoin's market infrastructure is comparatively newer and still developing, which means fewer of these stabilizing mechanisms are in place. Over time, as infrastructure matures, this is often expected to reduce some volatility, though it's not something that happens on any fixed timeline.
        </P>

        <H2 id="key-takeaways">Key Takeaways</H2>
        <div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface marker:text-secondary">
            <li>Bitcoin's price moves more than traditional assets largely due to market structure, not randomness.</li>
            <li>A smaller, younger market, a fixed and inflexible supply, continuous 24/7 trading, and thinner liquidity all contribute to larger price swings.</li>
            <li>These are structural characteristics of the market itself, not predictions about future price direction.</li>
            <li>As the market's infrastructure matures over time, some of this volatility may moderate, though the timeline for that isn't predictable.</li>
          </ul>
        </div>

        {/* Ad Unit #3: After "Key Takeaways" */}
        <AdUnit />

        <H2 id="faq">Frequently Asked Questions</H2>
        <div className="divide-y divide-outline-variant border-y border-outline-variant">
          {faqs.map((f) => (
            <details key={f.q} className="group py-md">
              <summary className="cursor-pointer list-none flex justify-between items-start gap-md font-headline-sm text-headline-sm text-primary">
                <span>{f.q}</span>
                <Plus className="text-secondary transition-transform group-open:rotate-45 shrink-0" />
              </summary>
              <p className="mt-sm font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <H2 id="conclusion">Conclusion</H2>
        <P>
          Bitcoin's price behavior isn't mysterious — it's a direct consequence of market structure: size, supply mechanics, trading hours, liquidity, and infrastructure maturity. Understanding these mechanics doesn't tell you where the price is headed, but it does explain why it tends to move the way it does.
        </P>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be considered financial or investment advice. It does not predict or speculate about future price movement.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
