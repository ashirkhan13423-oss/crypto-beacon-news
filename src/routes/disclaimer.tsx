import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AlertTriangle, BookOpen, ShieldCheck, Scale } from "lucide-react";

const URL = "https://www.cryptobeacon.site/disclaimer";
const TITLE = "Financial Disclaimer & Editorial Policy | CryptoBeacon";
const DESC =
  "CryptoBeacon's financial disclaimer and editorial standards. Educational content only — no financial, investment, or legal advice.";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-lg font-label-caps text-label-caps text-on-surface-variant"
        >
          <ol className="flex flex-wrap items-center gap-xs">
            <li>
              <Link to="/" className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">Disclaimer &amp; Editorial Policy</li>
          </ol>
        </nav>

        <header className="mb-xl border-b border-outline-variant pb-lg">
          <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold mb-md">
            Standards &amp; Integrity
          </span>
          <h1 className="font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary mb-sm leading-tight">
            Financial Disclaimer &amp; Editorial Policy
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Last updated: July 2026
          </p>
        </header>

        <article className="prose max-w-none space-y-xl text-on-surface-variant font-body-lg">
          <section className="bg-surface-container-lowest p-lg md:p-xl rounded-2xl border border-outline-variant">
            <h2 className="font-headline-md text-headline-md text-primary mb-md flex items-center gap-xs">
              <AlertTriangle className="text-secondary w-6 h-6" />
              1. General Financial Disclaimer
            </h2>
            <p className="mb-md">
              All content published by CryptoBeacon — including articles, guides, analysis, news
              coverage, market commentary, and interactive tools — is intended strictly for{" "}
              <strong>educational and informational purposes only</strong>.
            </p>
            <p className="mb-md">
              <strong>No Financial Advice:</strong> Nothing on this website constitutes investment
              advice, financial advice, trading advice, or legal advice. CryptoBeacon is an
              independent journalistic publisher and is not a registered investment advisor,
              broker-dealer, or financial institution.
            </p>
            <p>
              Digital assets, cryptocurrencies, and blockchain protocols carry significant
              financial, technical, and regulatory risks. Always conduct your own research (DYOR)
              and consult with a licensed financial advisor or legal professional before executing
              financial transactions.
            </p>
          </section>

          <section className="bg-surface-container-lowest p-lg md:p-xl rounded-2xl border border-outline-variant">
            <h2 className="font-headline-md text-headline-md text-primary mb-md flex items-center gap-xs">
              <BookOpen className="text-secondary w-6 h-6" />
              2. Editorial Policy &amp; Rigor
            </h2>
            <p className="mb-md">
              CryptoBeacon adheres to strict editorial independence. Our goal is to provide
              evergreen clarity and objective analysis on digital assets and technical
              infrastructure.
            </p>
            <ul className="list-disc pl-lg space-y-sm marker:text-secondary">
              <li>
                <strong>Fact-Checking:</strong> Content is researched against official blockchain
                documentation, whitepapers, and regulatory filings.
              </li>
              <li>
                <strong>No Paid Promotions for Unverified Tokens:</strong> We do not publish paid
                initial coin offering (ICO) promotional reviews or undisclosed sponsored token
                pumps.
              </li>
              <li>
                <strong>Corrections Transparency:</strong> If an error occurs in our reporting, we
                promptly update the text and disclose corrections clearly.
              </li>
            </ul>
          </section>

          <section className="bg-surface-container-lowest p-lg md:p-xl rounded-2xl border border-outline-variant">
            <h2 className="font-headline-md text-headline-md text-primary mb-md flex items-center gap-xs">
              <ShieldCheck className="text-secondary w-6 h-6" />
              3. Security Research &amp; Educational Focus
            </h2>
            <p className="mb-md">
              Security tutorials on CryptoBeacon focus on threat prevention (phishing awareness,
              seed phrase backup standards, address verification). We encourage non-custodial safety
              habits and personal key management.
            </p>
          </section>

          <section className="bg-surface-container-lowest p-lg md:p-xl rounded-2xl border border-outline-variant">
            <h2 className="font-headline-md text-headline-md text-primary mb-md flex items-center gap-xs">
              <Scale className="text-secondary w-6 h-6" />
              4. Contact for Legal &amp; Editorial Inquiries
            </h2>
            <p>
              For legal inquiries, copyright notices, or editorial feedback, please visit our{" "}
              <Link to="/contact" className="text-secondary underline font-medium">
                Contact Page
              </Link>{" "}
              or email us directly at{" "}
              <a href="mailto:contact@cryptobeacon.site" className="text-secondary hover:underline">
                contact@cryptobeacon.site
              </a>
              .
            </p>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
