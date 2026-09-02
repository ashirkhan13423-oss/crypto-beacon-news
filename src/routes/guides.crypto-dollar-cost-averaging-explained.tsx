import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/guides-dca-explained.jpg";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/guides/crypto-dollar-cost-averaging-explained";
const TITLE = "Dollar-Cost Averaging (DCA) in Crypto: What It Is and How It Works | CryptoBeacon";
const DESC =
  "A plain-language guide to Dollar-Cost Averaging (DCA) in crypto. Learn how this systematic investment strategy reduces volatility risk and removes emotion from buying Bitcoin and Ethereum.";
const PUBLISHED = "2026-08-29";

const faqs: { q: string; a: string }[] = [
  {
    q: "Is DCA better than buying the dip?",
    a: "Mathematically and psychologically, usually yes. 'Buying the dip' requires timing the market, which even professional traders struggle to do consistently. Waiting for a dip often means you miss out on long periods of growth. DCA ensures you are constantly acquiring assets regardless of short-term noise.",
  },
  {
    q: "How often should I DCA?",
    a: "The most common intervals are weekly, bi-weekly (aligning with paychecks), or monthly. The exact interval matters less than the consistency. Choose a schedule you can afford and stick to it automatically.",
  },
  {
    q: "Do I have to do this manually?",
    a: "No. Most major crypto exchanges (like Coinbase, Kraken, and Strike) offer automated recurring buys. You set the amount and the frequency, and the exchange automatically deducts the funds from your connected bank account.",
  },
  {
    q: "Does DCA guarantee a profit?",
    a: "No. DCA is a strategy for accumulating an asset while reducing volatility risk. If the asset you are buying goes to zero, your DCA strategy will also go to zero. It works best for assets you believe have long-term structural value, like Bitcoin.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dollar-Cost Averaging (DCA) in Crypto: What It Is and How It Works",
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
    "crypto DCA, dollar cost averaging, buying bitcoin, crypto investment strategy, recurring buys, buy the dip",
  articleSection: "Guides",
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
      name: "Guides",
      item: "https://www.cryptobeacon.site/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Dollar-Cost Averaging Explained",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/guides/crypto-dollar-cost-averaging-explained")({
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
              <Link to="/guides" className="hover:text-secondary">
                Guides
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">Dollar-Cost Averaging Explained</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#34A853] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          Dollar-Cost Averaging (DCA) in Crypto: What It Is and How It Works
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 29, 2026</time>}
          readTime="5 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high"
            src={hero}
            alt="Glowing teal financial chart showing steady upward steps representing dollar-cost averaging in crypto"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>

        <P>
          Cryptocurrency markets are famously volatile. A 20% swing in a single week is completely
          normal. For new investors, this volatility is terrifying. It leads to emotional decisions:
          panic-buying when prices are high (FOMO) and panic-selling when prices crash.
        </P>
        <P>
          <strong>Dollar-Cost Averaging (DCA)</strong> is a traditional finance strategy that is
          exceptionally effective in crypto. It removes the emotion, eliminates the need to "time the
          market," and mathematically reduces your exposure to sudden price drops.
        </P>
        <P>
          <em>This article is educational. It isn't financial advice.</em>
        </P>

        <H2 id="what-is-dca">What Is Dollar-Cost Averaging?</H2>
        <P>
          Dollar-Cost Averaging means investing a fixed amount of money at regular, predetermined
          intervals — regardless of what the price is doing.
        </P>
        <P>
          Instead of taking $1,200 and trying to guess the exact right day to buy Bitcoin, you buy
          $100 worth of Bitcoin on the 1st of every month for a year.
        </P>
        <div className="border-l-4 border-[#34A853] bg-[#34A853]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>When the price is <strong>high</strong>, your $100 buys fewer coins.</li>
            <li>When the price is <strong>low</strong>, your $100 automatically buys more coins.</li>
          </ul>
        </div>
        <P>
          Over time, this averages out the cost of your investment. You won't catch the absolute
          bottom of the market, but you also won't buy the absolute top.
        </P>

        <H2 id="why-it-works">Why DCA Is Highly Effective in Crypto</H2>
        <P>
          Crypto markets are driven heavily by sentiment. When Bitcoin is at an all-time high, the
          news is overwhelmingly positive, making you want to buy. When it crashes, the news declares
          crypto dead, making you want to sell. This is the exact opposite of what a profitable
          investor should do.
        </P>
        <P>
          DCA solves the psychological burden of investing:
        </P>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface mb-md">
          <li><strong>No more FOMO:</strong> You don't need to stress about missing a rally, because you are always accumulating.</li>
          <li><strong>Crashes become opportunities:</strong> When the market drops 30%, you don't panic. You know that your next automated buy will acquire significantly more crypto for the same dollar amount.</li>
          <li><strong>It's automated:</strong> It turns investing from an active, stressful daily decision into a passive background habit.</li>
        </ul>

        <H2 id="lump-sum-vs-dca">Lump Sum vs. DCA</H2>
        <P>
          If you suddenly receive a large amount of money (like a bonus or inheritance), should you
          invest it all at once (Lump Sum) or spread it out (DCA)?
        </P>
        <P>
          Statistically, in traditional stock markets that trend upwards smoothly, lump-sum investing
          beats DCA about 66% of the time, simply because you have more money in the market for
          longer. However, crypto is different. The volatility is much more extreme.
        </P>
        <P>
          If you lump-sum into crypto the day before a 50% market correction, the psychological toll
          can cause you to panic sell and take a permanent loss. DCA sacrifices some potential upside
          in exchange for massive downside protection and peace of mind. For most people, the mental
          benefit of DCA far outweighs the statistical edge of lump-sum investing.
        </P>

        <H2 id="how-to-start">How to Start a Crypto DCA Strategy</H2>
        <P>
          You don't need to manually log in and click "Buy" every Friday. Most major regulated
          exchanges (like Coinbase, Kraken, and Strike) have automated recurring buy features.
        </P>
        <ol className="list-decimal pl-lg space-y-sm font-body-md text-body-md text-on-surface mb-md">
          <li><strong>Choose your asset:</strong> Typically Bitcoin or Ethereum for long-term holding.</li>
          <li><strong>Choose your amount and frequency:</strong> For example, $50 every Friday. Treat it like a subscription.</li>
          <li><strong>Automate it:</strong> Set up the recurring buy in your exchange app linked to your bank account.</li>
          <li><strong>Self-Custody (Optional but Recommended):</strong> Once your balance grows to a meaningful amount, periodically withdraw it to your own hardware wallet to eliminate exchange risk.</li>
        </ol>

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

        <H2 id="sources">Sources</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://www.investopedia.com/terms/d/dollarcostaveraging.asp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Investopedia — Dollar-Cost Averaging (DCA)
            </a>
          </li>
          <li>
            <a
              href="https://dcabtc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              DCA Bitcoin Calculator
            </a>
          </li>
        </ul>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be
            considered financial or investment advice.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/bitcoin/how-to-buy-your-first-bitcoin-safely"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                How to Buy Your First Bitcoin Safely
              </h3>
            </Link>
            <Link
              to="/guides/crypto-portfolio-rebalancing-explained"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Crypto Portfolio Rebalancing Explained
              </h3>
            </Link>
            <Link
              to="/guides/why-bitcoin-price-moves-more-than-stocks"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Why Crypto Prices Are So Volatile
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
