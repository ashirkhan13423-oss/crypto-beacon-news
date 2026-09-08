import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs, breadcrumbSchemaFromItems } from "@/components/Breadcrumbs";

const URL = "https://www.cryptobeacon.site/corrections";
const TITLE = "Corrections Policy | CryptoBeacon";
const DESC = "How CryptoBeacon handles corrections, factual updates, and error reports. Transparency and accuracy are our highest editorial priorities.";

export const Route = createFileRoute("/corrections")({
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
        children: JSON.stringify(breadcrumbSchemaFromItems([{ label: "Corrections" }])),
      },
    ],
  }),
  component: CorrectionsPage,
});

function CorrectionsPage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <Breadcrumbs items={[{ label: "Corrections" }]} />

        <h1 className="font-display-lg text-display-lg text-primary mb-lg">
          Corrections Policy
        </h1>

        <div className="space-y-lg font-body-lg text-body-lg text-on-surface leading-relaxed">
          <p>
            CryptoBeacon is committed to accuracy. When we make a mistake, we correct it promptly and transparently.
          </p>

          <section>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-md mt-xl">How to Report an Error</h2>
            <p>
              If you believe any article on CryptoBeacon contains a factual error, please contact our editorial team at{" "}
              <a href="mailto:corrections@cryptobeacon.site" className="text-secondary hover:underline">
                corrections@cryptobeacon.site
              </a>{" "}
              or use our <a href="/contact" className="text-secondary hover:underline">contact page</a>. Please include:
            </p>
            <ul className="list-disc pl-lg space-y-xs mt-sm">
              <li>The URL of the article in question.</li>
              <li>A description of the specific error.</li>
              <li>If possible, a link to a credible source that supports the correction.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-md mt-xl">How Corrections Are Handled</h2>
            <ul className="list-disc pl-lg space-y-sm">
              <li><strong>Minor corrections</strong> (typos, formatting, non-substantive wording): Updated directly with no inline notice.</li>
              <li><strong>Factual corrections</strong> (incorrect data, misattributed quotes, wrong dates): Corrected in the article with a visible correction notice and updated "Last Updated" date.</li>
              <li><strong>Significant corrections</strong> (errors that materially change the meaning or conclusion of an article): Corrected with a prominent editor's note at the top of the article explaining what was changed and why.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-md mt-xl">Our Commitment</h2>
            <p>
              We review every correction report we receive. If a report is valid, we aim to update the article within 48 hours. We do not delete articles solely to hide errors — we correct them in place with full transparency.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
