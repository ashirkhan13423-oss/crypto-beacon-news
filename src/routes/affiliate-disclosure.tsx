import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs, breadcrumbSchemaFromItems } from "@/components/Breadcrumbs";

const URL = "https://www.cryptobeacon.site/affiliate-disclosure";
const TITLE = "Affiliate Disclosure | CryptoBeacon";
const DESC = "How CryptoBeacon discloses affiliate relationships and ensures editorial independence.";

export const Route = createFileRoute("/affiliate-disclosure")({
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
        children: JSON.stringify(breadcrumbSchemaFromItems([{ label: "Affiliate Disclosure" }])),
      },
    ],
  }),
  component: AffiliateDisclosurePage,
});

function AffiliateDisclosurePage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <Breadcrumbs items={[{ label: "Affiliate Disclosure" }]} />

        <h1 className="font-display-lg text-display-lg text-primary mb-lg">
          Affiliate Disclosure
        </h1>

        <div className="space-y-lg font-body-lg text-body-lg text-on-surface leading-relaxed">
          <p>
            CryptoBeacon may include links to products, services, or platforms that participate in affiliate programs. When you click on certain links and make a purchase or sign up, CryptoBeacon may receive a small commission at no additional cost to you.
          </p>

          <section>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-md mt-xl">Editorial Independence</h2>
            <p>
              Affiliate relationships do not influence our editorial decisions. Our reviews, comparisons, and recommendations are based entirely on independent research and analysis. We never accept payment to favorably cover any project, exchange, or product.
            </p>
          </section>

          <section>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-md mt-xl">How We Disclose Affiliate Links</h2>
            <p>
              Articles that contain affiliate links include a disclosure notice near the top of the article. We believe in full transparency, and readers should always know when a link may generate a commission.
            </p>
          </section>

          <section>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-md mt-xl">Why We Use Affiliate Links</h2>
            <p>
              Affiliate revenue helps support the operational costs of running CryptoBeacon, allowing us to continue producing free educational content. This revenue stream does not compromise the independence or accuracy of our editorial work.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
