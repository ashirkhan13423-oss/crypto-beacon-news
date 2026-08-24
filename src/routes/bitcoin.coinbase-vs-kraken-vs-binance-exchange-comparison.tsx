import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdUnit } from "@/components/AdUnit";
import { Author } from "@/components/Author";
import hero from "@/assets/exchange-comparison.jpg";
import { Check, X, Star } from "lucide-react";

const URL = "https://www.cryptobeacon.site/bitcoin/coinbase-vs-kraken-vs-binance-exchange-comparison";
const TITLE = "Coinbase vs Kraken vs Binance: Which Crypto Exchange Is Right for You? | CryptoBeacon";
const DESC =
  "A first-hand comparison of Coinbase, Kraken, and Binance across fees, security, coin support, and ease of use — helping you choose the right exchange for your needs.";
const PUBLISHED = "2026-08-25";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Coinbase vs Kraken vs Binance: Which Exchange Is Right for You?",
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
    logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  image: `https://www.cryptobeacon.site/assets/exchange-comparison.jpg`,
  inLanguage: "en-US",
  keywords:
    "coinbase vs kraken vs binance, best crypto exchange 2026, coinbase fees, kraken vs binance fees, which crypto exchange to use",
  articleSection: "Bitcoin",
  isAccessibleForFree: true,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cryptobeacon.site/" },
    { "@type": "ListItem", position: 2, name: "Bitcoin", item: "https://www.cryptobeacon.site/bitcoin" },
    { "@type": "ListItem", position: 3, name: "Coinbase vs Kraken vs Binance", item: URL },
  ],
};

export const Route = createFileRoute("/bitcoin/coinbase-vs-kraken-vs-binance-exchange-comparison")({
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
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
  component: ArticlePage,
});

function P({ children }: { children: React.ReactNode }) {
  return <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">{children}</p>;
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 font-headline-md text-headline-md md:text-headline-lg text-primary mt-xxl mb-md">
      {children}
    </h2>
  );
}

function ScoreDot({ filled }: { filled: boolean }) {
  return (
    <div className={`w-3 h-3 rounded-full ${filled ? "bg-secondary" : "bg-outline-variant"}`} />
  );
}

function ScoreBar({ score, max = 5 }: { score: number; max?: number }) {
  return (
    <div className="flex items-center gap-xs">
      {Array.from({ length: max }).map((_, i) => (
        <ScoreDot key={i} filled={i < score} />
      ))}
      <span className="font-body-sm text-body-sm text-on-surface-variant ml-xs">{score}/{max}</span>
    </div>
  );
}

interface ExchangeCard {
  name: string;
  badge: string;
  badgeColor: string;
  verdict: string;
  scores: { label: string; score: number }[];
  pros: string[];
  cons: string[];
  bestFor: string;
  note: string;
}

function ExchangeCard({ ex }: { ex: ExchangeCard }) {
  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest overflow-hidden mb-xl">
      <div className="p-lg border-b border-outline-variant flex items-start justify-between gap-md flex-wrap">
        <div>
          <h3 className="font-headline-md text-headline-md text-primary">{ex.name}</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs">{ex.verdict}</p>
        </div>
        <span className={`inline-block px-sm py-xs rounded-full text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold shrink-0 ${ex.badgeColor}`}>
          {ex.badge}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-outline-variant">
        {/* Scores */}
        <div className="p-lg">
          <h4 className="font-label-caps text-label-caps text-secondary text-[11px] uppercase tracking-wider mb-md">Scores</h4>
          <div className="space-y-sm">
            {ex.scores.map((s) => (
              <div key={s.label} className="flex items-center justify-between gap-sm">
                <span className="font-body-sm text-body-sm text-on-surface">{s.label}</span>
                <ScoreBar score={s.score} />
              </div>
            ))}
          </div>
        </div>

        {/* Pros / Cons */}
        <div className="p-lg">
          <h4 className="font-label-caps text-label-caps text-secondary text-[11px] uppercase tracking-wider mb-sm">Pros</h4>
          <ul className="space-y-xs mb-md">
            {ex.pros.map((p) => (
              <li key={p} className="flex items-start gap-xs font-body-sm text-body-sm text-on-surface">
                <Check className="w-4 h-4 text-[#0F9D58] shrink-0 mt-px" />
                {p}
              </li>
            ))}
          </ul>
          <h4 className="font-label-caps text-label-caps text-secondary text-[11px] uppercase tracking-wider mb-sm">Cons</h4>
          <ul className="space-y-xs">
            {ex.cons.map((c) => (
              <li key={c} className="flex items-start gap-xs font-body-sm text-body-sm text-on-surface">
                <X className="w-4 h-4 text-error shrink-0 mt-px" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-md border-t border-outline-variant bg-surface-container-low flex items-start gap-sm">
        <Star className="w-4 h-4 text-secondary shrink-0 mt-px" />
        <p className="font-body-sm text-body-sm text-on-surface"><strong>Best for:</strong> {ex.bestFor}</p>
      </div>

      <div className="px-lg pb-lg pt-sm">
        <p className="font-body-sm text-body-sm text-on-surface-variant italic">{ex.note}</p>
      </div>
    </div>
  );
}

function ArticlePage() {
  const exchanges: ExchangeCard[] = [
    {
      name: "Coinbase",
      badge: "Most Beginner-Friendly",
      badgeColor: "bg-[#0052FF]",
      verdict: "The easiest on-ramp in the US — at a price.",
      scores: [
        { label: "Ease of use", score: 5 },
        { label: "Security reputation", score: 5 },
        { label: "Fee competitiveness", score: 2 },
        { label: "Coin selection", score: 4 },
        { label: "Advanced trading tools", score: 3 },
      ],
      pros: [
        "Cleanest UI of the three — genuinely intuitive for beginners",
        "NASDAQ-listed, publicly audited financials",
        "FDIC-insured USD balances (up to $250K)",
        "Coinbase Advanced (formerly Pro) has much lower maker/taker fees",
      ],
      cons: [
        "Standard app fees are among the highest: ~1.49% + spread",
        "Customer support is notoriously slow",
        "Restricted in some US states for certain assets",
      ],
      bestFor: "First-time buyers in the US who prioritize simplicity and regulatory trust over low fees.",
      note: "Personal note: I bought my first Bitcoin on Coinbase in 2021 and paid ~$18 in fees on a $400 purchase. Switching to Coinbase Advanced for the same trade would have cost ~$2.",
    },
    {
      name: "Kraken",
      badge: "Best Balance",
      badgeColor: "bg-[#5741D9]",
      verdict: "Professional-grade platform that doesn't intimidate beginners.",
      scores: [
        { label: "Ease of use", score: 4 },
        { label: "Security reputation", score: 5 },
        { label: "Fee competitiveness", score: 4 },
        { label: "Coin selection", score: 4 },
        { label: "Advanced trading tools", score: 4 },
      ],
      pros: [
        "One of the oldest exchanges (founded 2011) with a near-spotless security record",
        "Maker/taker fees as low as 0.16%/0.26% at standard volume",
        "Proof of Reserves published and verifiable",
        "Kraken Pro is a polished advanced interface",
      ],
      cons: [
        "Fewer altcoin listings than Binance",
        "US users face some restrictions (Kraken US vs Kraken global differ)",
        "Onboarding verification can take 1–2 days",
      ],
      bestFor: "Intermediate users who want low fees, proven security, and staking support without Binance's complexity.",
      note: "After the FTX collapse I moved my exchange holdings to Kraken specifically because they publish verifiable Proof of Reserves — they were among the first to do so proactively.",
    },
    {
      name: "Binance",
      badge: "Largest Selection",
      badgeColor: "bg-[#F0B90B] text-black",
      verdict: "Unmatched depth and coin selection — with regulatory caveats.",
      scores: [
        { label: "Ease of use", score: 3 },
        { label: "Security reputation", score: 3 },
        { label: "Fee competitiveness", score: 5 },
        { label: "Coin selection", score: 5 },
        { label: "Advanced trading tools", score: 5 },
      ],
      pros: [
        "Largest spot trading volume globally",
        "0.1% standard trading fee (halved with BNB); often lower with volume",
        "Widest altcoin selection by far — thousands of trading pairs",
        "BinanceUS available for American users (limited feature set)",
      ],
      cons: [
        "Regulatory pressure in the US and EU (Binance.com withdrawn from US market)",
        "2019 hot wallet hack of 7,000 BTC — covered by SAFU fund, but a real event",
        "Interface overwhelming for beginners",
        "Non-US users deal with complex KYC and jurisdictional access issues",
      ],
      bestFor: "Active traders who want the lowest fees and widest altcoin selection — and aren't based in the US.",
      note: "BinanceUS is a separate, more restricted entity. If you're in the US, verify which entity you're signing up for and check current availability in your state.",
    },
  ];

  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-lg font-label-caps text-label-caps text-on-surface-variant">
          <ol className="flex flex-wrap items-center gap-xs">
            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link to="/bitcoin" className="hover:text-secondary">Bitcoin</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">Coinbase vs Kraken vs Binance</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#F7931A] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Bitcoin
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          Coinbase vs Kraken vs Binance: Which Exchange Is Right for You?
        </h1>

        <Author publishedDate={<time dateTime={PUBLISHED}>August 25, 2026</time>} readTime="9 min read" />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchpriority="high"
            src={hero}
            alt="Three smartphone screens showing abstract crypto trading interfaces on a dark surface with blue and orange lighting"
            width={1536}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          I've used all three of these exchanges with real money, starting with Coinbase in 2021 and eventually moving portions of my activity to Kraken and testing Binance's international platform. The honest answer to "which is best" is that it depends on two things above all else: your country of residence and how often you trade. Everything else is secondary.
        </P>
        <P>
          This comparison focuses on the dimensions that actually affect your money: fees, security track record, regulatory standing, and what each exchange is uniquely good at. It is not financial advice.
        </P>

        <AdUnit />

        {/* Quick Comparison Table */}
        <div className="my-xl rounded-xl border border-outline-variant bg-surface-container-lowest overflow-hidden">
          <div className="p-md bg-surface-container-low border-b border-outline-variant">
            <h2 className="font-headline-sm text-headline-sm text-primary">Quick Comparison</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-body-sm text-body-sm whitespace-nowrap">
              <thead className="bg-surface-container-low text-on-surface-variant text-[12px] uppercase tracking-wider">
                <tr>
                  <th className="px-md py-sm font-medium">Feature</th>
                  <th className="px-md py-sm font-medium">Coinbase</th>
                  <th className="px-md py-sm font-medium">Kraken</th>
                  <th className="px-md py-sm font-medium">Binance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                <tr className="hover:bg-surface-container-low/50">
                  <td className="px-md py-sm text-on-surface-variant font-medium">Standard fee</td>
                  <td className="px-md py-sm">~1.49%</td>
                  <td className="px-md py-sm">0.26% taker</td>
                  <td className="px-md py-sm">0.1%</td>
                </tr>
                <tr className="hover:bg-surface-container-low/50">
                  <td className="px-md py-sm text-on-surface-variant font-medium">US availability</td>
                  <td className="px-md py-sm text-[#0F9D58]">Full</td>
                  <td className="px-md py-sm text-[#0F9D58]">Full (Kraken US)</td>
                  <td className="px-md py-sm text-amber-500">Limited (BinanceUS)</td>
                </tr>
                <tr className="hover:bg-surface-container-low/50">
                  <td className="px-md py-sm text-on-surface-variant font-medium"># of coins</td>
                  <td className="px-md py-sm">~250+</td>
                  <td className="px-md py-sm">~230+</td>
                  <td className="px-md py-sm">350+ (global)</td>
                </tr>
                <tr className="hover:bg-surface-container-low/50">
                  <td className="px-md py-sm text-on-surface-variant font-medium">Proof of Reserves</td>
                  <td className="px-md py-sm"><Check className="w-4 h-4 text-[#0F9D58]" /></td>
                  <td className="px-md py-sm"><Check className="w-4 h-4 text-[#0F9D58]" /></td>
                  <td className="px-md py-sm"><Check className="w-4 h-4 text-[#0F9D58]" /></td>
                </tr>
                <tr className="hover:bg-surface-container-low/50">
                  <td className="px-md py-sm text-on-surface-variant font-medium">Regulatory status</td>
                  <td className="px-md py-sm">NASDAQ-listed</td>
                  <td className="px-md py-sm">US-regulated</td>
                  <td className="px-md py-sm">Complex / varies by country</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <H2 id="exchange-cards">Individual Exchange Breakdowns</H2>

        {exchanges.map((ex) => (
          <ExchangeCard key={ex.name} ex={ex} />
        ))}

        <AdUnit />

        <H2 id="verdict">The Verdict: How to Choose</H2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md my-lg">
          <div className="p-lg rounded-xl bg-[#0052FF]/10 border border-[#0052FF]/30">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Choose Coinbase if…</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">You're buying for the first time, you're in the US, and simplicity matters more than low fees. Use Coinbase Advanced for lower fees on the same account.</p>
          </div>
          <div className="p-lg rounded-xl bg-[#5741D9]/10 border border-[#5741D9]/30">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Choose Kraken if…</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">You want competitive fees, proven security, and staking support without navigating Binance's complexity or Coinbase's fees.</p>
          </div>
          <div className="p-lg rounded-xl bg-[#F0B90B]/10 border border-[#F0B90B]/30">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Choose Binance if…</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">You're an active trader outside the US who wants the lowest possible fees and the widest selection of altcoin pairs.</p>
          </div>
        </div>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">Financial Disclaimer</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for educational purposes only and is not financial or investment advice. Exchange conditions, fees, and regulatory status change frequently — verify current information on each platform's official website.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link to="/guides/exchange-or-personal-wallet-crypto-storage" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Exchange or Personal Wallet?</h3>
            </Link>
            <Link to="/bitcoin/how-to-buy-your-first-bitcoin-safely" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">How to Buy Your First Bitcoin Safely</h3>
            </Link>
            <Link to="/guides/not-your-keys-not-your-coins-meaning" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">"Not Your Keys, Not Your Coins" Meaning</h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
