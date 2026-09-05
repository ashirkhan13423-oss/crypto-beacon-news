import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import fedRateHero from "@/assets/news-bitcoin-fed-rate-hike.jpg";
import etfFedHero from "@/assets/news-bitcoin-etf-fed-stress-test.jpg";
import scHero from "@/assets/news-standard-chartered-uae.jpg";
import macroTestHero from "@/assets/news-btc-september-macro-test.jpg";
import rallyHero from "@/assets/news-bitcoin-rally.jpg";
import ethMergeHero from "@/assets/ethereum-merge-two-years.jpg";
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
      name: "September Fed Rate-Hike Bets Rise: What Oil, Yields and Jobs Data Mean for Bitcoin",
      url: "https://www.cryptobeacon.site/news/bitcoin-fed-rate-hike-jobs-report-september-2026",
    },
    {
      "@type": "WebPage",
      name: "Bitcoin ETF Outflows and Hawkish Fed Speech: Is the Crypto Rally Losing Momentum?",
      url: "https://www.cryptobeacon.site/news/bitcoin-etf-outflows-hawkish-fed-speech-crypto-rally",
    },
    {
      "@type": "WebPage",
      name: "Standard Chartered Launches Bitcoin and Ether Spot Trading for UAE Institutions",
      url: "https://www.cryptobeacon.site/news/standard-chartered-uae-institutional-bitcoin-ether-trading",
    },
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
            to="/news/bitcoin-fed-rate-hike-jobs-report-september-2026"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={fedRateHero}
                alt="Abstract illustration representing Bitcoin, global markets, oil, and interest rates interconnected with macro pressure"
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
                September Fed Rate-Hike Bets Rise: What Oil, Yields and Jobs Data Mean for Bitcoin
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Why Friday's jobs report matters more for Bitcoin than the latest geopolitical headline. A complete guide to the macro transmission chain affecting crypto in September 2026.
              </p>
            </div>
          </Link>

          <Link
            to="/news/bitcoin-etf-outflows-hawkish-fed-speech-crypto-rally"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={etfFedHero}
                alt="Illustration showing the Federal Reserve seal with downward red arrows, a Bitcoin chart with a dip, and Ethereum with upward green arrows"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={1600}
                height={900}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                News · ETF & Fed
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                Bitcoin ETF Outflows and Hawkish Fed Speech: Is the Crypto Rally Losing Momentum?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Bitcoin ETF outflows ended a nine-session inflow streak after Kevin Warsh's hawkish Jackson Hole speech. Here is what the Fed, ETF flows and Ethereum's divergence reveal about the rally's foundations.
              </p>
            </div>
          </Link>

          <Link
            to="/news/standard-chartered-uae-institutional-bitcoin-ether-trading"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={scHero}
                alt="Abstract illustration of a modern bank building blending into a digital network, representing traditional finance adopting crypto"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={1600}
                height={900}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                News · Institutional Crypto
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                Standard Chartered Launches Bitcoin and Ether Spot Trading for UAE Institutions
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Standard Chartered has launched deliverable spot trading for Bitcoin and Ether for institutional clients in the UAE. Explore how this move bridges traditional finance and crypto.
              </p>
            </div>
          </Link>

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
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
