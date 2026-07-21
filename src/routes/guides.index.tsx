import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import nyknycHero from "@/assets/keys-coins-meaning.jpg";
import exchangeHero from "@/assets/exchange-vs-wallet.png";
import { BookOpen } from "lucide-react";


export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      { title: "Guides — CryptoBeacon" },
      {
        name: "description",
        content:
          "Foundational, cross-cutting concept explainers that connect the dots across self-custody, wallets, transactions, and crypto safety.",
      },
      { property: "og:title", content: "Guides — CryptoBeacon" },
      {
        property: "og:description",
        content:
          "Foundational, cross-cutting concept explainers that connect the dots across self-custody, wallets, transactions, and crypto safety.",
      },
      { property: "og:url", content: "https://crypto-beacon-news.vercel.app/guides" },
    ],
    links: [{ rel: "canonical", href: "https://crypto-beacon-news.vercel.app/guides" }],
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
              <BookOpen className="text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 1", fontSize: "20px" }} />
            </div>
            <h1 className="font-display-lg text-display-lg text-primary">Guides</h1>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Foundational, cross-cutting concept explainers — the plain-language "why" behind the
            habits, tools, and choices that make up sound crypto practice.
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
                A plain-language explainer on what the phrase means, why it matters, and how to
                tell if you actually control your crypto.
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
                Guides · Concept
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                Should You Keep Your Crypto on an Exchange or Move It to Your Own Wallet?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A clear, neutral decision framework based on how you actually use your crypto.
              </p>
            </div>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
