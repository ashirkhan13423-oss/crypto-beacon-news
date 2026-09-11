import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import authorAvatar from "@/assets/ashir.png";
import {
  BookOpen,
  ShieldCheck,
  Mail,
  ArrowLeft,
  Twitter,
  Linkedin,
  FileText,
} from "lucide-react";

const AUTHOR_URL = "https://www.cryptobeacon.site/author";
const TITLE = "Ashir Khan — Writer & Researcher at CryptoBeacon";
const DESC =
  "Ashir Khan writes and researches cryptocurrency security, self-custody, macro analysis, and regulatory policy at CryptoBeacon, translating technical concepts into clear, source-verified reporting.";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ashir Khan",
  url: AUTHOR_URL,
  image: "https://www.cryptobeacon.site/ashir.png",
  jobTitle: "Writer & Researcher",
  worksFor: {
    "@type": "Organization",
    name: "CryptoBeacon",
    url: "https://www.cryptobeacon.site",
  },
  sameAs: [
    "https://x.com/ashir_khan",
    "https://linkedin.com/in/ashir-khan",
  ],
  knowsAbout: [
    "Cryptocurrency security",
    "Self-custody and hardware wallets",
    "Bitcoin market structure",
    "Ethereum and Layer 2 scaling",
    "Cryptocurrency regulation",
    "Decentralized finance",
    "Macroeconomic impacts on digital assets",
  ],
  description: DESC,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cryptobeacon.site/" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.cryptobeacon.site/about" },
    { "@type": "ListItem", position: 3, name: "Ashir Khan", item: AUTHOR_URL },
  ],
};

export const Route = createFileRoute("/author")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: AUTHOR_URL },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: AUTHOR_URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(personSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
  component: AuthorPage,
});

function AuthorPage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">

        {/* Back link */}
        <div className="mb-md">
          <Link
            to="/about"
            className="inline-flex items-center gap-xs text-secondary font-medium hover:underline text-body-md"
          >
            <ArrowLeft className="w-4 h-4" /> About CryptoBeacon
          </Link>
        </div>

        {/* Author header */}
        <header className="mb-xl border-b border-outline-variant pb-lg flex flex-col md:flex-row gap-lg items-start md:items-center">
          <img
            src={authorAvatar}
            alt="Portrait of Ashir Khan, writer and researcher at CryptoBeacon"
            className="w-28 h-28 rounded-full object-cover border-4 border-primary-container shadow-md shrink-0"
          />
          <div>
            <span className="inline-block px-sm py-xs rounded-full bg-secondary-container text-secondary font-label-caps text-[11px] uppercase tracking-widest font-semibold mb-xs">
              Writer &amp; Researcher — CryptoBeacon
            </span>
            <h1 className="font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary mb-xs leading-tight">
              Ashir Khan
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Writes about cryptocurrency security, self-custody, macro analysis, and regulatory policy at CryptoBeacon.
            </p>
          </div>
        </header>

        <article className="prose max-w-none font-body-lg text-body-lg text-on-surface-variant space-y-xl">

          {/* Areas of coverage */}
          <section className="bg-surface-container-lowest p-lg md:p-xl rounded-2xl border border-outline-variant shadow-sm">
            <h2 className="font-headline-md text-headline-md text-primary mb-md flex items-center gap-sm">
              <BookOpen className="text-secondary shrink-0" /> Areas of Coverage
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm text-body-md text-on-surface-variant">
              <div className="flex items-start gap-xs">
                <span className="text-secondary mt-[3px] shrink-0">▸</span>
                <span><strong>Crypto Security &amp; Self-Custody</strong> — hardware wallets, seed-phrase management, multi-signature setups, and common wallet attack vectors.</span>
              </div>
              <div className="flex items-start gap-xs">
                <span className="text-secondary mt-[3px] shrink-0">▸</span>
                <span><strong>Bitcoin</strong> — market structure, on-chain data, ETF flows, macroeconomic drivers, and network fundamentals.</span>
              </div>
              <div className="flex items-start gap-xs">
                <span className="text-secondary mt-[3px] shrink-0">▸</span>
                <span><strong>Ethereum &amp; Layer 2</strong> — proof-of-stake, rollup scaling, gas mechanics, staking protocols, and DeFi fundamentals.</span>
              </div>
              <div className="flex items-start gap-xs">
                <span className="text-secondary mt-[3px] shrink-0">▸</span>
                <span><strong>Regulation &amp; Policy</strong> — global regulatory frameworks (MiCA, SEC, FATF), exchange licensing, stablecoin rules, and tax basics for retail investors.</span>
              </div>
              <div className="flex items-start gap-xs">
                <span className="text-secondary mt-[3px] shrink-0">▸</span>
                <span><strong>Macro &amp; Markets</strong> — how interest rates, Treasury yields, oil prices, and central-bank policy affect crypto asset valuations.</span>
              </div>
              <div className="flex items-start gap-xs">
                <span className="text-secondary mt-[3px] shrink-0">▸</span>
                <span><strong>Institutional Adoption</strong> — spot Bitcoin ETFs, bank custody services, corporate treasury holdings, and exchange-traded product flows.</span>
              </div>
            </div>
          </section>

          {/* Editorial approach */}
          <section className="bg-surface-container-lowest p-lg md:p-xl rounded-2xl border border-outline-variant shadow-sm">
            <h2 className="font-headline-md text-headline-md text-primary mb-md flex items-center gap-sm">
              <ShieldCheck className="text-secondary shrink-0" /> Editorial Approach
            </h2>
            <p className="text-body-md text-on-surface-variant mb-md">
              CryptoBeacon content falls into three distinct categories, and each is treated differently:
            </p>
            <div className="space-y-sm">
              <div className="p-md rounded-xl bg-surface-container-low border border-outline-variant">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">News &amp; Dated Reports</h3>
                <p className="text-body-md text-on-surface-variant">
                  Time-stamped reporting on specific market events. Each article carries a publication date and a disclosure noting the data is point-in-time. Market data is cross-checked against at least two independent sources (e.g., Reuters, AP, official exchange or protocol announcements) before publication.
                </p>
              </div>
              <div className="p-md rounded-xl bg-surface-container-low border border-outline-variant">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Explainers &amp; Guides</h3>
                <p className="text-body-md text-on-surface-variant">
                  Educational articles focused on how things work rather than what to do with your money. Regulatory claims are checked against official documents (SEC rulings, MiCA text, FATF guidance). Protocol descriptions reference official whitepapers, developer documentation, or open-source repositories. These are not financial advice.
                </p>
              </div>
              <div className="p-md rounded-xl bg-surface-container-low border border-outline-variant">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Analysis</h3>
                <p className="text-body-md text-on-surface-variant">
                  Interpretive pieces that go beyond facts to explain context or implications. Speculative conclusions are labeled as such. Sponsored content or affiliate links are explicitly disclosed at the top of the relevant article — they are not presented as editorial opinions.
                </p>
              </div>
            </div>
            <p className="text-body-md text-on-surface-variant mt-md">
              For corrections, please use the contact details below. Material factual errors are corrected promptly and noted in the article.
            </p>
            <div className="mt-md">
              <Link
                to="/about"
                className="inline-flex items-center gap-xs text-secondary font-medium hover:underline text-body-md"
              >
                <FileText className="w-4 h-4" /> Read the full CryptoBeacon editorial standards
              </Link>
            </div>
          </section>

          {/* Contact / socials */}
          <section className="bg-surface-container-lowest p-lg rounded-2xl border border-outline-variant shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-md">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-xs">Get In Touch</h2>
              <p className="text-body-md text-on-surface-variant">
                For corrections, topic suggestions, or editorial inquiries.
              </p>
            </div>
            <div className="flex flex-wrap gap-sm">
              <a
                href="mailto:crypto.beacon.site@gmail.com"
                className="inline-flex items-center gap-xs px-md py-sm bg-primary text-on-primary font-medium rounded-lg hover:bg-primary-hover transition-colors"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
              <a
                href="https://x.com/ashir_khan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-xs px-md py-sm bg-surface-container-high text-on-surface font-medium rounded-lg hover:bg-surface-container-highest transition-colors border border-outline-variant"
              >
                <Twitter className="w-4 h-4 text-secondary" /> X (Twitter)
              </a>
              <a
                href="https://linkedin.com/in/ashir-khan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-xs px-md py-sm bg-surface-container-high text-on-surface font-medium rounded-lg hover:bg-surface-container-highest transition-colors border border-outline-variant"
              >
                <Linkedin className="w-4 h-4 text-secondary" /> LinkedIn
              </a>
            </div>
          </section>

        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
