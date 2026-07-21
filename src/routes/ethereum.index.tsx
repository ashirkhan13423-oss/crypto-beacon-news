import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImage from "@/assets/ethereum-address-mismatch.png";
import { Network } from "lucide-react";


export const Route = createFileRoute("/ethereum/")({
  head: () => ({
    meta: [
      { title: "Ethereum Hub — CryptoBeacon" },
      {
        name: "description",
        content:
          "Deep coverage of Ethereum: rollups, staking economics, EIPs, and the roadmap toward institutional-grade scalability.",
      },
      { property: "og:title", content: "Ethereum Hub — CryptoBeacon" },
      {
        property: "og:description",
        content:
          "Deep coverage of Ethereum: rollups, staking economics, EIPs, and the roadmap toward institutional-grade scalability.",
      },
      { property: "og:url", content: "https://crypto-beacon-news.vercel.app/ethereum" },
    ],
    links: [{ rel: "canonical", href: "https://crypto-beacon-news.vercel.app/ethereum" }],
  }),
  component: EthereumPage,
});

function EthereumPage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-max_width mx-auto px-gutter py-xl">
        <header className="mb-xl border-b border-outline-variant pb-lg">
          <div className="flex items-center gap-sm mb-md">
            <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center">
              <Network className="text-secondary" style={{ fontSize: "18px" }} />
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary">Ethereum</h1>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            The foundational layer for decentralized applications and finance — smart contract
            architecture, Layer 2 scaling, and Proof-of-Stake consensus.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          <Link
            to="/ethereum/can-you-send-bitcoin-to-an-ethereum-address"
            className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all"
          >
            <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden">
              <img
                src={heroImage}
                alt="Illustration representing incompatible Bitcoin and Ethereum address formats"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1600}
                height={900}
              />
            </div>
            <div className="p-lg">
              <span className="font-label-caps text-label-caps text-secondary font-semibold">
                Ethereum · Guide
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-sm mb-sm group-hover:underline decoration-secondary">
                Can You Send Bitcoin to an Ethereum Address? What Actually Happens
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Worried you sent Bitcoin to an Ethereum address by mistake? Here's what actually happens, why it's rarer than you think, and what to check.
              </p>
            </div>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
