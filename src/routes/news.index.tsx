import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import rallyHero from "@/assets/news-bitcoin-rally.jpg";
import { Newspaper } from "lucide-react";

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Crypto News",
  url: "https://www.cryptobeacon.site/news",
  hasPart: [
    {
      "@type": "WebPage",
      name: "Bitcoin Rallies Toward $77,000 — What's Driving the Move",
      url: "https://www.cryptobeacon.site/news/bitcoin-rally-august-2026",
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
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
