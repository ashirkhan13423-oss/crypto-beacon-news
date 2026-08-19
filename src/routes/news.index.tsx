import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import regulationHero from "@/assets/news-crypto-regulation.jpg";
import blockchainForkHero from "@/assets/news-blockchain-fork.png";
import pausedHero from "@/assets/news-paused-withdrawals.svg";
import bitcoinVolatilityHero from "@/assets/news-bitcoin-volatility.svg";
import { Newspaper } from "lucide-react";

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Crypto News",
  url: "https://www.cryptobeacon.site/news",
  hasPart: [
    {
      "@type": "WebPage",
      name: "Why Do Governments Regulate Cryptocurrency?",
      url: "https://www.cryptobeacon.site/news/why-governments-regulate-cryptocurrency",
    },
    {
      "@type": "WebPage",
      name: "What Is a Blockchain Fork?",
      url: "https://www.cryptobeacon.site/news/what-is-a-blockchain-fork",
    },
    {
      "@type": "WebPage",
      name: "What Does It Mean When a Crypto Exchange Pauses Withdrawals?",
      url: "https://www.cryptobeacon.site/news/what-it-means-when-exchange-pauses-withdrawals",
    },
    {
      "@type": "WebPage",
      name: "Why Does Bitcoin's Price Move More Than Stocks?",
      url: "https://www.cryptobeacon.site/news/why-bitcoin-price-moves-more-than-stocks",
    },
  ],
};

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: "Crypto Currency News & Industry Analysis — CryptoBeacon" },
      {
        name: "description",
        content:
          "Institutional crypto currency news, policy explainers, market telemetry, and political regulation developments.",
      },
      { property: "og:title", content: "Crypto Currency News & Industry Analysis — CryptoBeacon" },
      {
        property: "og:description",
        content:
          "Institutional crypto currency news, policy explainers, market telemetry, and political regulation developments.",
      },
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
      <main className="flex-grow w-full max-w-max_width mx-auto px-gutter py-xl">
        <header className="mb-xl border-b border-outline-variant pb-lg">
          <div className="flex items-center space-x-md mb-md">
            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant">
              <Newspaper
                className="text-on-surface-variant"
                style={{ fontVariationSettings: "'FILL' 1", fontSize: "20px" }}
              />
            </div>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary">
              Crypto Currency News &amp; Analysis
            </h1>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Get authoritative <strong>crypto currency news</strong>, market telemetry breakdowns,
            and institutional policy coverage on regulatory initiatives and market developments.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          <Link
            to="/news/why-governments-regulate-cryptocurrency"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={regulationHero}
                alt="Illustration representing government oversight of cryptocurrency"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1536}
                height={896}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                News · Explainer
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                Why Do Governments Regulate Cryptocurrency?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A plain-language explainer on why governments regulate crypto, the main categories
                of rules, and what that means for everyday users.
              </p>
            </div>
          </Link>

          <Link
            to="/news/what-is-a-blockchain-fork"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden border-b border-outline-variant">
              <img
                src={blockchainForkHero}
                alt="Abstract illustration representing a blockchain splitting into two separate paths"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={1536}
                height={896}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                News · Explainer
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                What Is a Blockchain Fork?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A plain-language explainer on what a blockchain fork is, the difference between hard
                and soft forks, and why cryptocurrencies sometimes split into two.
              </p>
            </div>
          </Link>

          <Link
            to="/news/what-it-means-when-exchange-pauses-withdrawals"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden border-b border-outline-variant">
              <img
                src={pausedHero}
                alt="Illustration representing a paused crypto withdrawal process"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={1536}
                height={896}
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
                Your crypto exchange paused withdrawals — is that normal or a red flag? A clear
                framework for telling routine maintenance from a genuine warning sign.
              </p>
            </div>
          </Link>

          <Link
            to="/news/why-bitcoin-price-moves-more-than-stocks"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={bitcoinVolatilityHero}
                alt="Illustration representing Bitcoin's price movement compared to traditional markets"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={1536}
                height={896}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                News · Guide
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                Why Does Bitcoin's Price Move More Than Stocks?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A plain-language look at the structural reasons Bitcoin's price swings more than
                traditional assets.
              </p>
            </div>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
