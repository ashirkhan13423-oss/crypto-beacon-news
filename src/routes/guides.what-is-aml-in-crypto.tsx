import { Link } from "@tanstack/react-router";
import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus } from "lucide-react";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/guides/what-is-aml-in-crypto";
const TITLE = "What Is AML in Crypto? Anti-Money Laundering Rules Explained | CryptoBeacon";
const DESC = "What is AML (Anti-Money Laundering) in cryptocurrency? An explanation of the FATF travel rule, transaction monitoring, suspicious activity reports (SARs), an...";
const PUBLISHED = "2026-09-01";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  { q: "What is the difference between KYC and AML?", a: "KYC (Know Your Customer) is the process of verifying a user's identity at onboarding. AML (Anti-Money Laundering) is the broader regulatory framework that includes KYC but also covers ongoing transaction monitoring, risk scoring, and reporting suspicious activity to the government." },
  { q: "How do exchanges monitor crypto transactions?", a: "Exchanges use blockchain analytics software (like Chainalysis, Elliptic, or TRM Labs). These tools map the blockchain and assign risk scores to wallets. If you deposit funds that previously passed through a known darknet market, mixer, or sanctioned address, the software flags your deposit." },
  { q: "What happens if an exchange flags my transaction?", a: "The exchange will usually freeze the transaction or your entire account pending review. They may ask you for 'Proof of Source of Funds' (e.g., bank statements or trade history showing how you legally acquired the crypto). If they suspect criminal activity, they file a Suspicious Activity Report (SAR) with regulators and may close your account." },
  { q: "What is the FATF Travel Rule for crypto?", a: "The FATF Travel Rule requires Virtual Asset Service Providers (exchanges) to collect and share originator and beneficiary information when transferring crypto above a certain threshold (often $1,000 or €1,000) between each other, mirroring rules for traditional bank wire transfers." },
];




export const Route = createFileRoute("/guides/what-is-aml-in-crypto")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/guides/what-is-aml-in-crypto', publishedTime: PUBLISHED, section: 'Guides' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "What Is AML in Crypto? Anti-Money Laundering Rules Explained | CryptoBeacon", description: "What is AML (Anti-Money Laundering) in cryptocurrency? An explanation of the FATF travel rule, transaction monitoring, suspicious activity reports (SARs), an...", imageUrl: `https://www.cryptobeacon.site${""}`, datePublished: "2026-09-01", dateModified: "2026-09-01", url: "https://www.cryptobeacon.site/guides/what-is-aml-in-crypto", section: "Guides", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Guides", item: "https://www.cryptobeacon.site/guides" },
        { name: "What Is AML in Crypto? Anti-Money Laundering Rules Explained | CryptoBeacon", item: "https://www.cryptobeacon.site/guides/what-is-aml-in-crypto" }
      ])) }
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
        <article>
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
          Anti-Money Laundering (AML) is the reason your account might get frozen and why exchanges use <Link to="/glossary#blockchain" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Blockchain">blockchain</Link> analytics to trace your deposits. Here is how it works.
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <H2 id="aml-explained">AML vs KYC</H2>
        <P><Link to="/glossary#kyc" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: KYC">KYC</Link> (Know Your Customer) is verifying *who* you are. AML (Anti-Money Laundering) is verifying *what you are doing*. KYC is just the first step in a broader AML program. Once an exchange knows who you are, AML rules require them to monitor your ongoing behaviour to ensure you aren't using their platform to clean dirty money, fund terrorism, or bypass international sanctions.</P>

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
        <P>This results in frozen accounts and frustrating, weeks-long support tickets where innocent users must prove they are not money launderers. To minimise this risk, avoid interacting directly with known mixers or high-risk offshore platforms with the same <Link to="/glossary#wallet" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Wallet">wallet</Link> you use for your regulated exchange deposits.</P>

        <RelatedArticles currentUrl={URL} />
              </article>
</main>
      <SiteFooter />
    </div>
  );
}
