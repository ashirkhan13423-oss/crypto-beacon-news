import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs, breadcrumbSchemaFromItems } from "@/components/Breadcrumbs";

const URL = "https://www.cryptobeacon.site/altcoins";
const TITLE = "Altcoins & Stablecoins | CryptoBeacon";
const DESC = "Educational guides on major alternative cryptocurrencies (Altcoins) including Solana, XRP, and Stablecoins like USDC and USDT.";

export const Route = createFileRoute("/altcoins/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchemaFromItems([{ label: "Altcoins" }])),
      },
    ],
  }),
  component: AltcoinsHub,
});

function AltcoinsHub() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-6xl mx-auto px-gutter py-xl">
        <Breadcrumbs items={[{ label: "Altcoins" }]} />
        
        <div className="mb-xxl max-w-3xl">
          <h1 className="font-display-lg text-display-lg text-primary mb-md">
            Altcoins & Stablecoins
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-md">
            Beyond Bitcoin and Ethereum lies a vast ecosystem of alternative cryptocurrencies. We focus on educational breakdowns of major networks like Solana, the XRP Ledger, and the mechanics behind stablecoins.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-low hover:border-secondary transition-all">
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">Stablecoins</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">
              The bridge between crypto and fiat. Learn how USDC, USDT, and DAI maintain their peg.
            </p>
            <Link to="/guides/what-is-a-stablecoin" className="text-secondary font-medium hover:underline">
              Read Guide →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
