import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import macroTestHero from "@/assets/news-btc-september-macro-test.jpg";
import rallyHero from "@/assets/news-bitcoin-rally.jpg";
import ethMergeHero from "@/assets/ethereum-merge-two-years.jpg";
import forkHero from "@/assets/news-blockchain-fork.png";
import pausesHero from "@/assets/news-paused-withdrawals.jpg";
import volatilityHero from "@/assets/news-bitcoin-volatility.svg";
import regulationHero from "@/assets/news-crypto-regulation.jpg";
import clarityActHero from "@/assets/news-clarity-act.jpg";
import { Newspaper } from "lucide-react";

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Crypto News",
  url: "https://www.cryptobeacon.site/news",
  hasPart: [
    {
      "@type": "WebPage",
      name: "Bitcoin's September Rally Faces a New Macro Test: Oil, Yields and the Fed",
      url: "https://www.cryptobeacon.site/news/bitcoin-september-rally-macro-test",
    },
    {
      "@type": "WebPage",
      name: "What Is the Clarity Act, and What Would It Actually Change?",
      url: "https://www.cryptobeacon.site/news/what-is-the-clarity-act-crypto",
    },
    {
      "@type": "WebPage",
      name: "Bitcoin Rallies Toward $77,000 — What's Driving the Move",
      url: "https://www.cryptobeacon.site/news/bitcoin-rally-august-2026",
    },
    {
      "@type": "WebPage",
      name: "The Ethereum Merge: Two Years Later — What Actually Changed",
      url: "https://www.cryptobeacon.site/news/ethereum-merge-two-years-later",
    },
    {
      "@type": "WebPage",
      name: "What Is a Blockchain Fork? Explained Simply",
      url: "https://www.cryptobeacon.site/news/what-is-a-blockchain-fork",
    },
    {
      "@type": "WebPage",
      name: "What Does It Mean When an Exchange Pauses Withdrawals?",
      url: "https://www.cryptobeacon.site/news/what-it-means-when-exchange-pauses-withdrawals",
    },
    {
      "@type": "WebPage",
      name: "Why Does Bitcoin's Price Move More Than Stocks?",
      url: "https://www.cryptobeacon.site/news/why-bitcoin-price-moves-more-than-stocks",
    },
    {
      "@type": "WebPage",
      name: "Why Do Governments Regulate Cryptocurrency? Full Guide",
      url: "https://www.cryptobeacon.site/news/why-governments-regulate-cryptocurrency",
    }
  ],
};

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: "Crypto News — CryptoBeacon" },
      { name: "description", content: "Latest crypto news and market updates." },
      { property: "og:title", content: "Crypto News — CryptoBeacon" },
      { property: "og:description", content: "Latest crypto news and market updates." },
      { property: "og:url", content: "https://www.cryptobeacon.site/news" },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.cryptobeacon.site/news" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(collectionSchema) }],
  }),
  component: NewsHub,
});

function NewsHub() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-gutter py-xl">
        <header className="mb-xl border-b border-outline-variant pb-lg">
          <div className="flex items-center space-x-md mb-md">
            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant">
              <Newspaper className="text-on-surface-variant" style={{ fontSize: "20px" }} />
            </div>
            <h1 className="font-display-lg text-display-lg text-primary">Crypto News</h1>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Latest updates and market movements.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          <Link
            to="/news/bitcoin-september-rally-macro-test"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={macroTestHero}
                alt="Illustration showing Bitcoin squeezed between rising oil prices and climbing Treasury yields with the Federal Reserve building in the background"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={1600}
                height={900}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                News · Macro Analysis
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                Bitcoin's September Rally Faces a New Macro Test: Oil, Yields and the Fed
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Brent crude near $96, the 10-year yield approaching 4.8%, and a 68% chance of a September Fed rate hike are pressuring Bitcoin. Here is the full transmission chain.
              </p>
            </div>
          </Link>

          <Link
            to="/news/what-is-the-clarity-act-crypto"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={clarityActHero}
                alt="Illustration showing Capitol lines, balanced scales, and a regulatory gavel"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={1600}
                height={900}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                News · Regulation
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                What Is the Clarity Act, and What Would It Actually Change?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                An objective, factual look at the proposed U.S. crypto bill, its securities vs. commodities classifications, stablecoin rules, and Senate status.
              </p>
            </div>
          </Link>

          <Link
            to="/news/bitcoin-rally-august-2026"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={rallyHero}
                alt="Illustration representing a Bitcoin price chart showing a recent upward move"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={1600}
                height={900}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                News · Market Update
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                Bitcoin Rallies Toward $77,000 — What's Driving the Move
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Bitcoin climbed sharply the week of August 18–21, 2026. Here's a factual, dated look at what happened and why.
              </p>
            </div>
          </Link>

          <Link
            to="/news/ethereum-merge-two-years-later"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={ethMergeHero}
                alt="Illustration representing the Ethereum Merge"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={1600}
                height={900}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                News · Analysis
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                The Ethereum Merge: Two Years Later — What Actually Changed
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A factual retrospective on the Ethereum Merge at its two-year mark (September 2024): what the upgrade delivered, what it didn't, and what the data shows now.
              </p>
            </div>
          </Link>

          <Link
            to="/news/what-is-a-blockchain-fork"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={forkHero}
                alt="Illustration representing a blockchain fork"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={1600}
                height={900}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                News · Explainer
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                What Is a Blockchain Fork? Explained Simply
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A plain-language explainer on what a blockchain fork is, the difference between hard and soft forks, and why cryptocurrencies sometimes split into two.
              </p>
            </div>
          </Link>

          <Link
            to="/news/what-it-means-when-exchange-pauses-withdrawals"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={pausesHero}
                alt="Illustration representing a paused withdrawal on an exchange"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={1600}
                height={900}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                News · Guide
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                What Does It Mean When an Exchange Pauses Withdrawals?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Your crypto exchange paused withdrawals — is that normal or a red flag? A comprehensive guide to understanding exchange liquidity, routine maintenance, and warning signs of insolvency.
              </p>
            </div>
          </Link>

          <Link
            to="/news/why-bitcoin-price-moves-more-than-stocks"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={volatilityHero}
                alt="Illustration representing Bitcoin price volatility"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={1600}
                height={900}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                News · Explainer
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                Why Does Bitcoin's Price Move More Than Stocks?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A plain-language look at the structural reasons Bitcoin's price swings more than traditional assets — no predictions, just the mechanics.
              </p>
            </div>
          </Link>

          <Link
            to="/news/why-governments-regulate-cryptocurrency"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={regulationHero}
                alt="Illustration representing cryptocurrency regulation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={1600}
                height={900}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                News · Guide
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                Why Do Governments Regulate Cryptocurrency? Full Guide
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                An in-depth editorial guide on why governments regulate crypto, the major global legal frameworks (MiCA, SEC, FATF), and what regulations mean for retail investors.
              </p>
            </div>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
