import { createFileRoute } from "@tanstack/react-router";
import { ArticleGrid } from "@/components/ArticleGrid";
import { z } from "zod";
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
import symbiosisHero from "@/assets/symbiosis-bridge-exploit-hero.jpg";
import { Newspaper } from "lucide-react";

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Crypto News",
  url: "https://www.cryptobeacon.site/news",
  hasPart: [
    {
      "@type": "WebPage",
      name: "Symbiosis Bitcoin Bridge Exploit Mints Unbacked syBTC: What Users Should Check",
      url: "https://www.cryptobeacon.site/news/symbiosis-bitcoin-bridge-exploit-sybtc-unbacked-mint",
    },
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

const searchSchema = z.object({ page: z.number().catch(1).optional().default(1) });

export const Route = createFileRoute("/news/")({ validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Crypto News — CryptoBeacon" },
      { name: "description", content: "Latest crypto news, macroeconomic impacts, institutional adoption, and regulatory updates." },
      { property: "og:title", content: "Crypto News — CryptoBeacon" },
      { property: "og:description", content: "Latest crypto news, macroeconomic impacts, institutional adoption, and regulatory updates." },
      { property: "og:url", content: "https://www.cryptobeacon.site/news" },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.cryptobeacon.site/news" }],
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
          <ArticleGrid category="News" currentPage={page} />
      </main>
      <SiteFooter />
    </div>
  );
}
