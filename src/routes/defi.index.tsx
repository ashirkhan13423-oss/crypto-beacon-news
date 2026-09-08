import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs, breadcrumbSchemaFromItems } from "@/components/Breadcrumbs";

const URL = "https://www.cryptobeacon.site/defi";
const TITLE = "DeFi (Decentralized Finance) | CryptoBeacon";
const DESC = "Learn about Decentralized Finance (DeFi), how DEXs work, liquidity pools, yield farming, and the critical risks you need to understand.";

export const Route = createFileRoute("/defi/")({
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
        children: JSON.stringify(breadcrumbSchemaFromItems([{ label: "DeFi" }])),
      },
    ],
  }),
  component: DefiHub,
});

function DefiHub() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-6xl mx-auto px-gutter py-xl">
        <Breadcrumbs items={[{ label: "DeFi" }]} />
        
        <div className="mb-xxl max-w-3xl">
          <h1 className="font-display-lg text-display-lg text-primary mb-md">
            Decentralized Finance (DeFi)
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-md">
            DeFi removes the middlemen from financial services like lending, borrowing, and trading. Explore our guides to understand the mechanics and the significant smart contract risks involved.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-low hover:border-secondary transition-all">
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">What Is DeFi?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">
              A plain-language introduction to decentralized finance and how it works.
            </p>
            <Link to="/ethereum/what-is-defi-decentralized-finance" className="text-secondary font-medium hover:underline">
              Read Guide →
            </Link>
          </div>
          
          <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-low hover:border-secondary transition-all">
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">DeFi Risks Explained</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">
              A stark look at the hidden dangers, smart contract flaws, and impermanent loss.
            </p>
            <Link to="/security/defi-risks-explained" className="text-secondary font-medium hover:underline">
              Read Guide →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
