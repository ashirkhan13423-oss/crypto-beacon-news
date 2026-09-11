import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs, breadcrumbSchemaFromItems } from "@/components/Breadcrumbs";

const URL = "https://www.cryptobeacon.site/editorial-policy";
const TITLE = "Editorial Policy | CryptoBeacon";
const DESC = "CryptoBeacon's strict editorial standards, our research methodology, and how we handle corrections and financial information.";

export const Route = createFileRoute("/editorial-policy")({
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
        children: JSON.stringify(breadcrumbSchemaFromItems([{ label: "Editorial Policy" }])),
      },
    ],
  }),
  component: EditorialPolicyPage,
});

function EditorialPolicyPage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <Breadcrumbs items={[{ label: "Editorial Policy" }]} />
        
        <h1 className="font-display-lg text-display-lg text-primary mb-lg">
          Editorial Policy & Standards
        </h1>

        <div className="space-y-lg text-body-lg text-on-surface leading-relaxed">
          <p>
            At CryptoBeacon, our primary mission is to provide clear, evidence-based, and accurate coverage of cryptocurrency, blockchain technology, and digital asset security. We prioritize trust and transparency above all else.
          </p>

          <section>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-md mt-xl">Content Types</h2>
            <p className="mb-sm">CryptoBeacon publishes three types of content, each with different standards:</p>
            <ul className="list-disc pl-lg space-y-md">
              <li><strong>Evergreen educational guides:</strong> Foundational explainers, security guides, and protocol deep-dives written to remain accurate and useful over time. These form the majority of our content.</li>
              <li><strong>Verified news reporting:</strong> Timely articles covering developments that have meaningful relevance to readers and can be supported by reliable, named sources. Each news article carries a publication date and a disclosure of its data timestamp.</li>
              <li><strong>Explanatory analysis:</strong> Interpretive pieces that go beyond the facts to explain context or implications. Speculative conclusions are labeled as such. These do not constitute financial advice.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-md mt-xl">Our Editorial Principles</h2>
            <ul className="list-disc pl-lg space-y-md">
              <li><strong>Education Over Hype:</strong> We do not publish speculative price predictions or "get rich quick" content. Our goal is to educate.</li>
              <li><strong>Security-First Focus:</strong> We emphasize self-custody and risk mitigation. When analyzing platforms or protocols, security trade-offs are our primary concern.</li>
              <li><strong>Independence:</strong> Our editorial judgments are entirely independent. We do not accept payment to favorably review projects or tokens.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-md mt-xl">How We Research</h2>
            <p className="mb-sm">
              Our content relies on rigorous research and credible sources. We prioritize:
            </p>
            <ul className="list-disc pl-lg space-y-xs">
              <li>Primary documents (official protocol documentation, whitepapers).</li>
              <li>Regulatory filings and official government announcements.</li>
              <li>Onchain data via block explorers and analytics platforms.</li>
              <li>Established academic and security research.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-md mt-xl">AI-Assisted Content Policy</h2>
            <p>
              Artificial Intelligence (AI) may be used to assist our editorial team in organizing research, outlining complex topics, and checking grammar. However, all published content is strictly human-reviewed, fact-checked, and edited by our authors. We do not publish raw AI-generated content, nor do we fabricate sources or quotes.
            </p>
          </section>

          <section>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-md mt-xl">Financial Information Disclaimer</h2>
            <p>
              CryptoBeacon is an educational publisher. Nothing on this website constitutes individualized financial, legal, or tax advice. Cryptocurrency involves substantial risk, and readers should always conduct their own research or consult a licensed professional before making financial decisions.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
