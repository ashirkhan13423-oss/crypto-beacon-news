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
      { property: "article:published_time", content: "2026-08-06" },
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
        
        <div className="mb-xxl max-w-3xl space-y-md">
          <h1 className="font-display-lg text-display-lg text-primary mb-md">
            Crypto Taxes
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Understanding cryptocurrency taxation is crucial for compliance. As digital assets become more mainstream, tax authorities worldwide are issuing stricter guidelines regarding reporting requirements. Explore our educational guides on capital gains, staking income, and how to effectively track your crypto activities.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Many investors mistakenly believe that cryptocurrency transactions are entirely anonymous and therefore exempt from taxation. In reality, most blockchain networks operate on public ledgers, making transactions traceable. Whether you are actively day trading, holding long-term, earning staking rewards, or simply spending crypto on goods and services, these events often trigger tax obligations.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            We cover the foundational concepts of how different jurisdictions typically classify digital assets. By maintaining accurate records and utilizing automated tracking software, you can significantly simplify your reporting process during tax season and avoid unwanted penalties.
          </p>
          <div className="p-md rounded-lg bg-surface-container border border-outline-variant mt-md">
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              <strong>Disclaimer:</strong> The content in this section is for educational purposes only and does not constitute individualized tax advice. Tax laws vary significantly by jurisdiction and are subject to frequent changes. Please consult a qualified, licensed tax professional or certified public accountant regarding your specific financial situation before filing.
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
