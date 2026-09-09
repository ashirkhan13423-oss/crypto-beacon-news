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
            CryptoBeacon may include links to specific products, services, or hardware platforms that participate in affiliate programs. When you click on these qualifying links and make a purchase or sign up for a service, CryptoBeacon may receive a small commission. It is important to note that this comes at absolutely no additional cost to you, and in some cases, these links may even provide you with a discount or sign-up bonus.
          </p>

          <section>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-md mt-xl">Editorial Independence</h2>
            <p>
              Our foremost commitment is to our readers. Affiliate relationships strictly do not influence our editorial decisions, scoring systems, or feature placements. Our reviews, hardware comparisons, and security recommendations are based entirely on independent research, hands-on testing, and objective analysis by our team. We maintain a strict firewall between our editorial content and monetization strategies. We never accept direct payment or tokens to favorably cover any project, centralized exchange, or software product. If a service does not meet our security standards, it will not be recommended, regardless of any potential affiliate partnership.
            </p>
          </section>

          <section>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-md mt-xl">How We Disclose Affiliate Links</h2>
            <p>
              Transparency is a core value at CryptoBeacon. Any article or guide that contains affiliate links will include a clear and conspicuous disclosure notice near the top of the page, well before any links appear. We believe that our readers should always be fully informed when a link they interact with may generate a commission for the site.
            </p>
          </section>

          <section>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-md mt-xl">Why We Use Affiliate Links</h2>
            <p>
              Operating an independent educational platform requires significant resources, including server hosting, security audits, and countless hours of research. Affiliate revenue is one of the primary ways we help support these operational costs without resorting to intrusive display advertising or erecting paywalls. This revenue stream enables us to continue producing high-quality, free educational content for the global cryptocurrency community while preserving the integrity and accuracy of our editorial work.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
