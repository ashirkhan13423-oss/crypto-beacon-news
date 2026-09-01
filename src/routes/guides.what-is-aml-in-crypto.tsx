import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/guides/what-is-aml-in-crypto";
const TITLE = "What Is AML in Crypto? Anti-Money Laundering Rules Explained | CryptoBeacon";
const DESC =
  "What is AML (Anti-Money Laundering) in cryptocurrency? An explanation of the FATF travel rule, transaction monitoring, suspicious activity reports (SARs), and how exchanges trace illicit funds.";
const PUBLISHED = "2026-09-01";

const faqs: { q: string; a: string }[] = [
  { q: "What is the difference between KYC and AML?", a: "KYC (Know Your Customer) is the process of verifying a user's identity at onboarding. AML (Anti-Money Laundering) is the broader regulatory framework that includes KYC but also covers ongoing transaction monitoring, risk scoring, and reporting suspicious activity to the government." },
  { q: "How do exchanges monitor crypto transactions?", a: "Exchanges use blockchain analytics software (like Chainalysis, Elliptic, or TRM Labs). These tools map the blockchain and assign risk scores to wallets. If you deposit funds that previously passed through a known darknet market, mixer, or sanctioned address, the software flags your deposit." },
  { q: "What happens if an exchange flags my transaction?", a: "The exchange will usually freeze the transaction or your entire account pending review. They may ask you for 'Proof of Source of Funds' (e.g., bank statements or trade history showing how you legally acquired the crypto). If they suspect criminal activity, they file a Suspicious Activity Report (SAR) with regulators and may close your account." },
  { q: "What is the FATF Travel Rule for crypto?", a: "The FATF Travel Rule requires Virtual Asset Service Providers (exchanges) to collect and share originator and beneficiary information when transferring crypto above a certain threshold (often $1,000 or €1,000) between each other, mirroring rules for traditional bank wire transfers." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is AML in Crypto? Anti-Money Laundering Rules Explained",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Ashir", url: "https://www.cryptobeacon.site/author", worksFor: { "@type": "Organization", name: "CryptoBeacon" } },
  publisher: { "@type": "Organization", name: "CryptoBeacon", logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  inLanguage: "en-US",
  keywords: "what is AML crypto, anti-money laundering cryptocurrency, FATF travel rule crypto, crypto transaction monitoring, SARs crypto, proof of funds crypto exchange",
  articleSection: "Guides",
  wordCount: 900,
  isAccessibleForFree: true,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cryptobeacon.site/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.cryptobeacon.site/guides" },
    { "@type": "ListItem", position: 3, name: "What Is AML in Crypto?", item: URL },
  ],
};

export const Route = createFileRoute("/guides/what-is-aml-in-crypto")({
  head: () => ({
    meta: [
      { title: TITLE }, { name: "description", content: DESC },
      { property: "og:title", content: TITLE }, { property: "og:description", content: DESC },
      { property: "og:type", content: "article" }, { property: "og:url", content: URL },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
      { property: "article:published_time", content: PUBLISHED }, { property: "article:section", content: "Guides" },
      { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: TITLE }, { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
  component: ArticlePage,
});

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id} className="scroll-mt-28 font-headline-md text-headline-md md:text-headline-lg text-primary mt-xxl mb-md">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">{children}</p>;
}

function ArticlePage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <nav aria-label="Breadcrumb" className="mb-lg font-label-caps text-label-caps text-on-surface-variant">
          <ol className="flex flex-wrap items-center gap-xs">
            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link to="/guides" className="hover:text-secondary">Guides</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">What Is AML in Crypto?</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-[#F59E0B] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides · AML
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          What Is AML in Crypto?
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          Anti-Money Laundering (AML) is the reason your account might get frozen and why exchanges use blockchain analytics to trace your deposits. Here is how it works.
        </p>
        <Author />

        <H2 id="aml-explained">AML vs KYC</H2>
        <P>KYC (Know Your Customer) is verifying *who* you are. AML (Anti-Money Laundering) is verifying *what you are doing*. KYC is just the first step in a broader AML program. Once an exchange knows who you are, AML rules require them to monitor your ongoing behaviour to ensure you aren't using their platform to clean dirty money, fund terrorism, or bypass international sanctions.</P>

        <H2 id="how-it-works">How crypto AML works in practice</H2>
        <P>Exchanges implement AML through several mechanisms:</P>
        <ul className="list-disc list-inside space-y-sm mb-md font-body-lg text-body-lg text-on-surface leading-relaxed">
          <li><strong>Transaction Monitoring:</strong> Using software like Chainalysis to scan every incoming deposit. If funds originated from a sanctioned entity, a darknet market, a known hack, or a crypto mixer (like Tornado Cash), the deposit is flagged.</li>
          <li><strong>Source of Funds (SOF):</strong> If you deposit an unusually large amount of fiat or crypto, the exchange may freeze your account and demand proof of how you earned it (payslips, tax returns, trading history).</li>
          <li><strong>Suspicious Activity Reports (SARs):</strong> If an exchange suspects illegal activity, they are legally obligated to file a secret report with government agencies (like FinCEN in the US) without informing you.</li>
        </ul>

        <H2 id="travel-rule">The FATF Travel Rule</H2>
        <P>The Financial Action Task Force (FATF) is the global money laundering and terrorist financing watchdog. They implemented the "Travel Rule" for crypto.</P>
        <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-lowest my-lg">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">What the Travel Rule requires:</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">When User A sends crypto from Exchange X to User B on Exchange Y (above a certain threshold, usually $1,000), Exchange X must automatically send User A's identifying information to Exchange Y, and Exchange Y must verify User B's information. It mirrors the system used for traditional bank SWIFT wires.</p>
        </div>
        <P>Implementing this for crypto has been technically difficult, leading to fragmented adoption globally and occasional friction when transferring between different regulated exchanges.</P>

        <H2 id="user-impact">Why innocent users get caught in AML nets</H2>
        <P>Because blockchains are public ledgers, funds have a permanent history. If you sell an NFT to someone who previously interacted with a sanctioned address, and you then deposit those funds to a regulated exchange, the exchange's analytics software might flag *your* deposit due to the "taint" a few hops back in the transaction history.</P>
        <P>This results in frozen accounts and frustrating, weeks-long support tickets where innocent users must prove they are not money launderers. To minimise this risk, avoid interacting directly with known mixers or high-risk offshore platforms with the same wallet you use for your regulated exchange deposits.</P>

        <section className="mt-xxl" aria-label="Frequently asked questions">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Frequently Asked Questions</h2>
          <div className="space-y-md">
            {faqs.map((f, i) => (
              <details key={i} className="group border border-outline-variant rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-lg cursor-pointer list-none">
                  <span className="font-body-lg text-body-lg text-primary font-semibold pr-md">{f.q}</span>
                  <Plus size={18} className="text-secondary shrink-0 group-open:rotate-45 transition-transform" />
                </summary>
                <div className="px-lg pb-lg">
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link to="/guides/what-is-kyc-in-cryptocurrency" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">What Is KYC?</h3>
            </Link>
            <Link to="/guides/how-cryptocurrency-regulation-works" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">How Regulation Works</h3>
            </Link>
            <Link to="/guides/crypto-regulation-hub" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Crypto Regulation Hub</h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
