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

        <div className="mb-xxl max-w-3xl">
          <h1 className="font-display-lg text-display-lg text-primary mb-md">
            Crypto ETFs & Institutional Investment
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-md">
            Exchange-traded funds (ETFs) have become one of the most important access points for institutional capital entering the crypto market. We cover how they work, what drives flows, and what they mean for everyday investors — without framing them as guaranteed investments.
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
