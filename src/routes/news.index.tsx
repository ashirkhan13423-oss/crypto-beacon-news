import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import etfFedHero from "@/assets/news-bitcoin-etf-fed-stress-test.jpg";
import scHero from "@/assets/news-standard-chartered-uae.jpg";
import macroTestHero from "@/assets/news-btc-september-macro-test.jpg";
import rallyHero from "@/assets/news-bitcoin-rally.jpg";
import ethMergeHero from "@/assets/ethereum-merge-two-years.jpg";
import clarityActHero from "@/assets/news-clarity-act.jpg";
import oilHero from "@/assets/news-oil-btc-impact.jpg";
import trezorHero from "@/assets/trezor-phishing-breach.jpg";
import { Newspaper } from "lucide-react";

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Crypto News",
  url: "https://www.cryptobeacon.site/news",
  hasPart: [
    {
      "@type": "WebPage",
      name: "Trezor Email Breach Sends Fake Wallet Alert to 347,000 Users: What to Do",
      url: "https://www.cryptobeacon.site/news/trezor-brevo-phishing-email-breach-2026",
    },
    {
      "@type": "WebPage",
      name: "Oil Above $100 Ahead of U.S. CPI: What It Means for Bitcoin and Crypto",
      url: "https://www.cryptobeacon.site/news/oil-above-100-bitcoin-crypto-cpi-impact",
    },
    {
      "@type": "WebPage",
      name: "Bitcoin's September Rally Faces a New Macro Test: Oil, Yields and the Fed",
      url: "https://www.cryptobeacon.site/news/bitcoin-september-rally-macro-test",
    },
    {
      "@type": "WebPage",
      name: "Bitcoin Rallies Toward $77,000 — What's Driving the Move",
      url: "https://www.cryptobeacon.site/news/bitcoin-rally-august-2026",
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
      name: "What Is the Clarity Act, and What Would It Actually Change?",
      url: "https://www.cryptobeacon.site/news/what-is-the-clarity-act-crypto",
    },
    {
      "@type": "WebPage",
      name: "The Ethereum Merge: Two Years Later — What Actually Changed",
      url: "https://www.cryptobeacon.site/news/ethereum-merge-two-years-later",
    },
    {
      "@type": "WebPage",
      name: "Why Are Crypto ATMs Everywhere?",
      url: "https://www.cryptobeacon.site/news/why-are-crypto-atms-everywhere",
    },
    {
      "@type": "WebPage",
      name: "On-Chain Trading vs Exchange Trading",
      url: "https://www.cryptobeacon.site/news/what-is-on-chain-trading-vs-exchange",
    },
  ],
};

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: "Crypto News — CryptoBeacon" },
      { name: "description", content: "Latest crypto news, macroeconomic impacts, institutional adoption, and regulatory updates." },
      { property: "og:title", content: "Crypto News — CryptoBeacon" },
      { property: "og:description", content: "Latest crypto news, macroeconomic impacts, institutional adoption, and regulatory updates." },
      { property: "og:url", content: "https://www.cryptobeacon.site/news" },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.cryptobeacon.site/news" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(collectionSchema) }],
  }),
  component: NewsHub,
});

function NewsCard({ to, image, tag, title, desc, alt }: { to: string; image: string; tag: string; title: string; desc: string; alt: string }) {
  return (
    <Link
      to={to}
      className="group flex flex-col rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all h-full"
    >
      <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden border-b border-outline-variant">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={1600}
          height={900}
        />
      </div>
      <div className="p-lg flex flex-col flex-grow">
        <span className="font-label-caps text-label-caps text-secondary font-semibold mb-xs">
          {tag}
        </span>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-sm group-hover:underline decoration-secondary">
          {title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mt-auto">
          {desc}
        </p>
      </div>
    </Link>
  );
}

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
            <h1 className="font-display-lg text-display-lg text-primary">Crypto News & Analysis</h1>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Objective reporting on cryptocurrency developments that have meaningful relevance to readers, supported by named and verifiable sources. We do not cover every price movement — stories are selected when a development adds useful context beyond the price change itself.
          </p>
        </header>

        <section className="mb-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg border-b border-outline-variant pb-xs">
            Security & Breaches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            <NewsCard
              to="/news/trezor-brevo-phishing-email-breach-2026"
              image={trezorHero}
              alt="A digital illustration of a compromised email warning, with a hardware wallet symbol and a phishing hook, in a modern, dark mode, high-tech crypto aesthetic"
              tag="News · Security"
              title="Trezor Email Breach Sends Fake Wallet Alert to 347,000 Users: What to Do"
              desc="A compromised third-party email provider sent fake Trezor security alerts to 347,000 users. Learn how this phishing attack happened and how to protect your seed phrase."
            />
          </div>
        </section>

        <section className="mb-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg border-b border-outline-variant pb-xs">
            Markets & Macro
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            <NewsCard
              to="/news/oil-above-100-bitcoin-crypto-cpi-impact"
              image={oilHero}
              alt="Conceptual 3D illustration showing a sleek, modern barrel of oil and a glowing orange Bitcoin symbol."
              tag="News · Macro"
              title="Oil Above $100 Ahead of U.S. CPI: What It Means for Bitcoin and Crypto"
              desc="Brent crude remains above $100 after Middle East escalation, raising a new inflation and rate-risk threat for Bitcoin and broader crypto markets ahead of key U.S. CPI data."
            />
            <NewsCard
              to="/news/bitcoin-september-rally-macro-test"
              image={macroTestHero}
              alt="Illustration showing Bitcoin squeezed between rising oil prices and climbing Treasury yields with the Federal Reserve building in the background"
              tag="News · Macro Analysis"
              title="Bitcoin's September Rally Faces a New Macro Test: Oil, Yields and the Fed"
              desc="Brent crude near $96, the 10-year yield approaching 4.8%, and a 68% chance of a September Fed rate hike are pressuring Bitcoin. Here is the full transmission chain."
            />
            <NewsCard
              to="/news/bitcoin-rally-august-2026"
              image={rallyHero}
              alt="Illustration representing a Bitcoin price chart showing a recent upward move"
              tag="News · Market Update"
              title="Bitcoin Rallies Toward $77,000 — What's Driving the Move"
              desc="Bitcoin climbed sharply the week of August 18–21, 2026. Here's a factual, dated look at what happened and why."
            />
          </div>
        </section>

        <section className="mb-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg border-b border-outline-variant pb-xs">
            ETFs & Institutional
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            <NewsCard
              to="/news/bitcoin-etf-outflows-hawkish-fed-speech-crypto-rally"
              image={etfFedHero}
              alt="Illustration showing the Federal Reserve seal with downward red arrows, a Bitcoin chart with a dip, and Ethereum with upward green arrows"
              tag="News · ETF & Fed"
              title="Bitcoin ETF Outflows and Hawkish Fed Speech: Is the Crypto Rally Losing Momentum?"
              desc="Bitcoin ETF outflows ended a nine-session inflow streak after Kevin Warsh's hawkish Jackson Hole speech. Here is what the Fed, ETF flows and Ethereum's divergence reveal about the rally's foundations."
            />
            <NewsCard
              to="/news/standard-chartered-uae-institutional-bitcoin-ether-trading"
              image={scHero}
              alt="Abstract illustration of a modern bank building blending into a digital network, representing traditional finance adopting crypto"
              tag="News · Institutional Crypto"
              title="Standard Chartered Launches Bitcoin and Ether Spot Trading for UAE Institutions"
              desc="Standard Chartered has launched deliverable spot trading for Bitcoin and Ether for institutional clients in the UAE. Explore how this move bridges traditional finance and crypto."
            />
          </div>
        </section>

        <section className="mb-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg border-b border-outline-variant pb-xs">
            Regulation & Policy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            <NewsCard
              to="/news/what-is-the-clarity-act-crypto"
              image={clarityActHero}
              alt="Illustration showing Capitol lines, balanced scales, and a regulatory gavel"
              tag="News · Regulation"
              title="What Is the Clarity Act, and What Would It Actually Change?"
              desc="An objective, factual look at the proposed U.S. crypto bill, its securities vs. commodities classifications, stablecoin rules, and Senate status."
            />
          </div>
        </section>

        <section className="mb-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg border-b border-outline-variant pb-xs">
            Ethereum & Network
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            <NewsCard
              to="/news/ethereum-merge-two-years-later"
              image={ethMergeHero}
              alt="Illustration representing the Ethereum Merge"
              tag="News · Analysis"
              title="The Ethereum Merge: Two Years Later — What Actually Changed"
              desc="A factual retrospective on the Ethereum Merge at its two-year mark (September 2024): what the upgrade delivered, what it didn't, and what the data shows now."
            />
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
