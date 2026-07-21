import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import sendHero from "@/assets/bitcoin-send-safely.jpg";
import { Bitcoin } from "lucide-react";


export const Route = createFileRoute("/bitcoin/")({
  head: () => ({
    meta: [
      { title: "Bitcoin — CryptoBeacon" },
      {
        name: "description",
        content:
          "Definitive Bitcoin analysis: transactions, architecture, network fundamentals, and beginner-friendly safety guides.",
      },
      { property: "og:title", content: "Bitcoin — CryptoBeacon" },
      {
        property: "og:description",
        content:
          "Definitive Bitcoin analysis: transactions, architecture, network fundamentals, and beginner-friendly safety guides.",
      },
      { property: "og:url", content: "https://crypto-beacon-news.vercel.app/bitcoin" },
    ],
    links: [{ rel: "canonical", href: "https://crypto-beacon-news.vercel.app/bitcoin" }],
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
              <Bitcoin className="text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 1", fontSize: "20px" }} />
            </div>
            <h1 className="font-display-lg text-display-lg text-primary">Bitcoin</h1>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            The foundational network of the digital asset ecosystem — in-depth analysis,
            architectural developments, and market fundamentals.
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
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
