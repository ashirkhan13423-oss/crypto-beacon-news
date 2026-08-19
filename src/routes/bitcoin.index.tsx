import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import sendHero from "@/assets/bitcoin-send-safely.jpg";
import walletHero from "@/assets/bitcoin-what-is-a-wallet.png";
import miningHero from "@/assets/bitcoin-what-is-mining.png";
import { Bitcoin } from "lucide-react";

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Bitcoin",
  url: "https://www.cryptobeacon.site/bitcoin",
  hasPart: [
    {
      "@type": "WebPage",
      name: "How to Send Bitcoin Safely",
      url: "https://www.cryptobeacon.site/bitcoin/how-to-send-bitcoin-safely",
    },
    {
      "@type": "WebPage",
      name: "What Is a Bitcoin Wallet?",
      url: "https://www.cryptobeacon.site/bitcoin/what-is-a-bitcoin-wallet",
    },
    {
      "@type": "WebPage",
      name: "What Is Bitcoin Mining?",
      url: "https://www.cryptobeacon.site/bitcoin/what-is-bitcoin-mining",
    },
  ],
};

export const Route = createFileRoute("/bitcoin/")({
  head: () => ({
    meta: [
      { title: "Bitcoin (BTC): Benchmark Crypto Currency Price & Architecture — CryptoBeacon" },
      {
        name: "description",
        content:
          "Definitive Bitcoin analysis: global crypto currency price factors, network difficulty, halving mechanics, and transaction security.",
      },
      {
        property: "og:title",
        content: "Bitcoin (BTC): Benchmark Crypto Currency Price & Architecture — CryptoBeacon",
      },
      {
        property: "og:description",
        content:
          "Definitive Bitcoin analysis: global crypto currency price factors, network difficulty, and transaction security.",
      },
      { property: "og:url", content: "https://www.cryptobeacon.site/bitcoin" },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.cryptobeacon.site/bitcoin" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(collectionSchema) }],
  }),
  component: BitcoinPage,
});

function BitcoinPage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-max_width mx-auto px-gutter py-xl">
        <header className="mb-xl border-b border-outline-variant pb-lg">
          <div className="flex items-center space-x-md mb-md">
            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant">
              <Bitcoin
                className="text-on-surface-variant"
                style={{ fontVariationSettings: "'FILL' 1", fontSize: "20px" }}
              />
            </div>
            <h1 className="font-display-lg text-display-lg text-primary">Bitcoin (BTC)</h1>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            The foundational <strong>crypto currency</strong> of the digital asset ecosystem —
            in-depth analysis of supply caps, global <strong>crypto currency price</strong> drivers,
            and network safety.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          <Link
            to="/bitcoin/how-to-send-bitcoin-safely"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={sendHero}
                alt="Illustration representing a Bitcoin transaction moving safely between wallets"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1600}
                height={896}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                Bitcoin · Guide
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                How to Send Bitcoin Safely
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                How Bitcoin transactions actually work, the mistakes that cause permanent loss, and
                a simple checklist to send safely every time.
              </p>
            </div>
          </Link>
          <Link
            to="/bitcoin/what-is-a-bitcoin-wallet"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={walletHero}
                alt="Illustration contrasting a hot software wallet and a cold hardware wallet"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                Bitcoin · Guide
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                What Is a Bitcoin Wallet?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Hot, cold, and custodial wallets explained — what a Bitcoin wallet actually stores
                and which type is right for your situation.
              </p>
            </div>
          </Link>
          <Link
            to="/bitcoin/what-is-bitcoin-mining"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={miningHero}
                alt="Abstract illustration of Bitcoin mining with glowing coins and computational nodes"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                Bitcoin · Explainer
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                What Is Bitcoin Mining?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                How new Bitcoin is created, what proof of work actually means, and why the halving
                matters.
              </p>
            </div>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
