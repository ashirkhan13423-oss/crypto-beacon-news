import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import nyknycHero from "@/assets/keys-coins-meaning.jpg";
import exchangeHero from "@/assets/exchange-vs-wallet.png";
import walletAddressHero from "@/assets/guides-wallet-address.png";
import hotColdHero from "@/assets/hot-vs-cold-wallets.jpg";
import privateKeyHero from "@/assets/guides-private-key.jpg";
import dcaHero from "@/assets/guides-dca-explained.jpg";
import { BookOpen } from "lucide-react";

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Crypto Guides",
  url: "https://www.cryptobeacon.site/guides",
  hasPart: [
    {
      "@type": "WebPage",
      name: '"Not Your Keys, Not Your Coins" — What It Means',
      url: "https://www.cryptobeacon.site/guides/not-your-keys-not-your-coins-meaning",
    },
    {
      "@type": "WebPage",
      name: "Should You Keep Your Crypto on an Exchange or Move It to Your Own Wallet?",
      url: "https://www.cryptobeacon.site/guides/exchange-or-personal-wallet-crypto-storage",
    },
    {
      "@type": "WebPage",
      name: "What Is a Crypto Wallet Address? How It Works and How to Use It Safely",
      url: "https://www.cryptobeacon.site/guides/what-is-a-crypto-wallet-address",
    },
    {
      "@type": "WebPage",
      name: "Hot Wallets vs. Cold Wallets: Which is Right for You?",
      url: "https://www.cryptobeacon.site/guides/hot-wallets-vs-cold-wallets-explained",
    },
    {
      "@type": "WebPage",
      name: "What Is a Private Key in Crypto? A Plain-Language Explainer",
      url: "https://www.cryptobeacon.site/guides/what-is-a-private-key",
    },
    {
      "@type": "WebPage",
      name: "Dollar-Cost Averaging (DCA) in Crypto: What It Is and How It Works",
      url: "https://www.cryptobeacon.site/guides/crypto-dollar-cost-averaging-explained",
    },
  ],
};

export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      { title: "Crypto Currency Guides & Explanations — CryptoBeacon" },
      {
        name: "description",
        content:
          "Comprehensive guides on what crypto currency is, the true crypto currency meaning behind self-custody, wallet management, and securing your crypto currencies.",
      },
      { property: "og:title", content: "Crypto Currency Guides & Explanations — CryptoBeacon" },
      {
        property: "og:description",
        content:
          "Comprehensive guides on what crypto currency is, the true crypto currency meaning, and how to store major crypto currencies safely.",
      },
      { property: "og:url", content: "https://www.cryptobeacon.site/guides" },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.cryptobeacon.site/guides" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(collectionSchema) }],
  }),
  component: GuidesHub,
});

function GuidesHub() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-max_width mx-auto px-gutter py-xl">
        <header className="mb-xl border-b border-outline-variant pb-lg">
          <div className="flex items-center space-x-md mb-md">
            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant">
              <BookOpen
                className="text-on-surface-variant"
                style={{ fontVariationSettings: "'FILL' 1", fontSize: "20px" }}
              />
            </div>
            <h1 className="font-display-lg text-display-lg text-primary">Crypto Currency Guides</h1>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Essential educational references explaining <strong>what crypto currency is</strong>,
            the deeper <strong>crypto currency meaning</strong> of private key custody, and how to
            safely manage major <strong>crypto currencies</strong>.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          <Link
            to="/guides/not-your-keys-not-your-coins-meaning"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={nyknycHero}
                alt="Illustration representing crypto self-custody and private key ownership"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1600}
                height={900}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                Guides · Concept
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                "Not Your Keys, Not Your Coins" — What It Actually Means
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A plain-language explainer on what the phrase means, why it matters, and how to tell
                if you actually control your crypto.
              </p>
            </div>
          </Link>
          <Link
            to="/guides/exchange-or-personal-wallet-crypto-storage"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={exchangeHero}
                alt="Illustration representing the choice between exchange storage and personal wallet custody"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1600}
                height={900}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                Guides · Custody
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                Exchange vs. Personal Wallet: How to Store Crypto
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A clear, neutral decision framework based on how you actually use your crypto.
              </p>
            </div>
          </Link>
          <Link
            to="/guides/what-is-a-crypto-wallet-address"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden border-b border-outline-variant">
              <img
                src={walletAddressHero}
                alt="Illustration representing a digital crypto wallet address"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={1600}
                height={896}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                Guides · Security
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                What Is a Crypto Wallet Address?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                How public keys and wallet addresses work, how to share them safely, and how to
                verify address formats across blockchains.
              </p>
            </div>
          </Link>
          <Link
            to="/guides/hot-wallets-vs-cold-wallets-explained"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden border-b border-outline-variant">
              <img
                src={hotColdHero}
                alt="Digital wallet connected to network lines contrasted with a metallic vault"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={1536}
                height={896}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                Guides · Storage
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                Hot Wallets vs. Cold Wallets: Which is Right for You?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Comparing internet-connected software wallets with offline hardware devices, focusing on the trade-offs.
              </p>
            </div>
          </Link>
          <Link
            to="/guides/what-is-a-private-key"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden border-b border-outline-variant">
              <img
                src={privateKeyHero}
                alt="Glowing golden digital key made of cryptographic symbols opening a dark vault"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={1536}
                height={896}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                Guides · Basics
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                What Is a Private Key in Crypto? A Plain-Language Explainer
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A straightforward explanation of what a cryptocurrency private key is, how it differs from a seed phrase and public address, and why whoever controls it controls the funds.
              </p>
            </div>
          </Link>
          <Link
            to="/guides/crypto-dollar-cost-averaging-explained"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden border-b border-outline-variant">
              <img
                src={dcaHero}
                alt="Glowing teal financial chart showing steady upward steps representing dollar-cost averaging in crypto"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={1536}
                height={896}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                Guides · Strategy
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                Dollar-Cost Averaging (DCA) in Crypto: What It Is and How It Works
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A plain-language guide to Dollar-Cost Averaging (DCA) in crypto. Learn how this systematic investment strategy reduces volatility risk and removes emotion from buying Bitcoin and Ethereum.
              </p>
            </div>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
