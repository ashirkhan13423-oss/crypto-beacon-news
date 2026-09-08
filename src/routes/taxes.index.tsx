import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs, breadcrumbSchemaFromItems } from "@/components/Breadcrumbs";

const URL = "https://www.cryptobeacon.site/taxes";
const TITLE = "Crypto Taxes — Reporting & Rules | CryptoBeacon";
const DESC = "Educational resources on cryptocurrency taxation, capital gains, staking income, and tracking your crypto for tax reporting.";

export const Route = createFileRoute("/taxes/")({
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
        children: JSON.stringify(breadcrumbSchemaFromItems([{ label: "Crypto Taxes" }])),
      },
    ],
  }),
  component: TaxesHub,
});

function TaxesHub() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-6xl mx-auto px-gutter py-xl">
        <Breadcrumbs items={[{ label: "Crypto Taxes" }]} />
        
        <div className="mb-xxl max-w-3xl">
          <h1 className="font-display-lg text-display-lg text-primary mb-md">
            Crypto Taxes
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-md">
            Understanding cryptocurrency taxation is crucial for compliance. Explore our educational guides on capital gains, staking income, and reporting requirements.
          </p>
          <div className="p-md rounded-lg bg-surface-container border border-outline-variant">
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              <strong>Disclaimer:</strong> The content in this section is for educational purposes only and does not constitute individualized tax advice. Tax laws vary by jurisdiction. Please consult a qualified tax professional regarding your specific situation.
            </p>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-low hover:border-secondary transition-all">
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">Tax Basics for Beginners</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">
              A simplified guide to understanding cryptocurrency taxation and taxable events.
            </p>
            <Link to="/guides/crypto-tax-basics-for-beginners" className="text-secondary font-medium hover:underline">
              Read Guide →
            </Link>
          </div>
          
          <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-low hover:border-secondary transition-all">
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">Capital Gains & Income</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">
              How capital gains apply to crypto trading, and how staking and airdrops are taxed as income.
            </p>
            <Link to="/guides/cryptocurrency-taxes-explained" className="text-secondary font-medium hover:underline">
              Read Guide →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
