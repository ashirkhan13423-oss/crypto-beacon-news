import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs, breadcrumbSchemaFromItems } from "@/components/Breadcrumbs";

const URL = "https://www.cryptobeacon.site/etfs";
const TITLE = "Crypto ETFs & Institutional Investment | CryptoBeacon";
const DESC = "Understand how spot Bitcoin and Ethereum ETFs work, what drives ETF inflows, and how institutional crypto investment is evolving.";

export const Route = createFileRoute("/etfs/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "article:published_time", content: "2026-08-06" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchemaFromItems([{ label: "ETFs" }])),
      },
    ],
  }),
  component: EtfsHub,
});

function EtfsHub() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-6xl mx-auto px-gutter py-xl">
        <Breadcrumbs items={[{ label: "ETFs & Institutional" }]} />

        <div className="mb-xxl max-w-3xl space-y-md">
          <h1 className="font-display-lg text-display-lg text-primary mb-md">
            Crypto ETFs & Institutional Investment
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Exchange-traded funds (ETFs) have become one of the most important access points for institutional capital entering the cryptocurrency market. A crypto ETF allows investors to gain exposure to digital assets like Bitcoin or Ethereum through a traditional brokerage account, without needing to manage private keys, seed phrases, or interact with a cryptocurrency exchange directly.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            The approval of spot Bitcoin ETFs in January 2024 marked a watershed moment for institutional adoption. These products track the actual price of Bitcoin by holding real BTC in custody, as opposed to earlier futures-based ETFs that only tracked derivative contracts. Since their launch, spot Bitcoin ETFs have attracted tens of billions of dollars in net inflows, fundamentally changing the demand dynamics of the market.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            We cover how these products work mechanically—from the creation and redemption process to what drives daily inflow and outflow numbers—and what they mean for everyday investors. It is important to understand that ETF approval does not eliminate the inherent volatility or risks of the underlying asset. Our coverage focuses on factual market mechanics rather than price speculation or investment advice.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-low hover:border-secondary transition-all">
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">How Bitcoin ETFs Affect Price</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">
              A plain-language look at the mechanism behind Bitcoin ETF inflows and outflows.
            </p>
            <Link to="/bitcoin/how-do-bitcoin-etfs-affect-price" className="text-secondary font-medium hover:underline">
              Read Article →
            </Link>
          </div>

          <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-low hover:border-secondary transition-all">
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">Institutional Adoption</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">
              Standard Chartered's institutional Bitcoin and Ether trading launch in the UAE and what it signals.
            </p>
            <Link to="/news/standard-chartered-uae-institutional-bitcoin-ether-trading" className="text-secondary font-medium hover:underline">
              Read Article →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
