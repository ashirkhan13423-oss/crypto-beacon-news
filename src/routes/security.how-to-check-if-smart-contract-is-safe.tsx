import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";
import hero from "@/assets/spot-rug-pull.webp";

const URL = "https://www.cryptobeacon.site/security/how-to-check-if-smart-contract-is-safe";
const TITLE = "Check If a Smart Contract Is Safe Before Interacting";
const DESC = "Learn how to verify the safety of a smart contract before interacting. A step-by-step checklist to avoid honeypots, rug pulls, and infinite approvals.";
const PUBLISHED = "2026-10-02";
let MODIFIED = PUBLISHED;
let keyTakeaway = "Always check for verified source code on a block explorer and never grant unlimited token approvals to untrusted or newly deployed contracts.";

const faqs = [
  { q: "What does an unverified contract mean?", a: "It means the developer hasn't published the human-readable source code to the block explorer. You should never interact with unverified contracts as you cannot see what the code does." },
  { q: "Are audited smart contracts 100% safe?", a: "No. Audits reduce risk significantly, but they do not guarantee safety. Complex protocols can still have hidden bugs, and some 'audits' are performed by low-quality or fake firms." },
  { q: "What is a honeypot contract?", a: "A honeypot is a malicious smart contract designed to trap your funds. For example, it may allow you to buy a token but contain a hidden function that prevents anyone except the creator from selling it." }
];

export const Route = createFileRoute("/security/how-to-check-if-smart-contract-is-safe")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/security/how-to-check-if-smart-contract-is-safe', publishedTime: PUBLISHED, section: 'Security' }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: TITLE, description: DESC, imageUrl: "", datePublished: PUBLISHED, dateModified: MODIFIED, url: URL, section: "Security", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Security", item: "https://www.cryptobeacon.site/security" },
        { name: TITLE, item: URL }
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
            <li><Link to="/security" className="hover:text-secondary">Security</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">Smart Contract Safety</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-red-600 text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security · Smart Contracts
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          How to Check If a Smart Contract Is Safe Before Interacting
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          Interacting with a malicious smart contract can drain your entire wallet. Follow this checklist to verify a contract's safety before you sign.
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <H2 id="checklist">The Smart Contract Safety Checklist</H2>
        <P>Before you connect your wallet and click "Approve," run the contract through these essential checks:</P>
        
        <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface mb-xl">
          <li>
            <strong>1. Verify the Source Code is Published:</strong> Go to the block explorer (e.g., Etherscan) and search the contract address. Click the "Contract" tab. If there is no green checkmark and the code is not visible, <strong>do not interact with it</strong>. It is a blind box.
          </li>
          <li>
            <strong>2. Check for Independent Audits:</strong> Legitimate DeFi protocols hire reputable firms (like Trail of Bits, CertiK, or OpenZeppelin) to audit their code. Check the project's documentation for an audit report and verify it on the auditor's official website.
          </li>
          <li>
            <strong>3. Analyze the Approval Request:</strong> Does the contract ask for an "Infinite" or "Unlimited" approval for your USDC or ETH? If you are only swapping $50, manually edit the spending cap in your wallet (like MetaMask) to exactly $50.
          </li>
          <li>
            <strong>4. Look for Admin Privileges:</strong> Beware of contracts with functions like <code>mint()</code> or <code>pause()</code> that are controlled by a single owner's address. If the owner's key is compromised (or they are malicious), they can alter the rules and steal funds.
          </li>
          <li>
            <strong>5. Check the Liquidity Locks:</strong> For new token launches, check if the liquidity pool (LP) tokens are locked using a trusted service. If liquidity isn't locked, the developers can pull it at any time, resulting in a rug pull.
          </li>
        </ul>

        <H2 id="tools">Automated Verification Tools</H2>
        <P>You don't need to be a Solidity developer to spot red flags. Use these free tools to scan contracts:</P>
        <div className="bg-surface-container p-md rounded-xl border border-outline mb-xl space-y-sm">
          <p><strong>De.Fi Scanner:</strong> Enter any contract address to receive an automated safety score and a list of detected vulnerabilities (like honeypot code or extreme admin privileges).</p>
          <p><strong>Token Sniffer:</strong> Excellent for checking new tokens. It scans for known scam code templates and checks liquidity locks.</p>
          <p><strong>Wallet Guard / Pocket Universe:</strong> Browser extensions that simulate the transaction before you sign it, showing you exactly what will leave and enter your wallet.</p>
        </div>

        <H2 id="approvals">A Warning on Approvals</H2>
        <P>Most hacks happen because users previously granted unlimited approvals to a contract that later gets exploited. Make it a habit to regularly review and revoke old approvals using tools like Revoke.cash.</P>

        <FAQ faqs={faqs} />
        <RelatedArticles currentUrl={URL} />
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
