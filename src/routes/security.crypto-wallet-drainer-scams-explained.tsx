import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus, AlertTriangle } from "lucide-react";

const URL = "https://www.cryptobeacon.site/security/crypto-wallet-drainer-scams-explained";
const TITLE = "Crypto Wallet Drainer Scams Explained | CryptoBeacon";
const DESC =
  "What are crypto wallet drainers? How approval scams and setApprovalForAll exploits work, how to detect them before signing, and how to revoke existing dangerous approvals.";
const PUBLISHED = "2026-09-01";

const faqs: { q: string; a: string }[] = [
  { q: "What is a wallet drainer?", a: "A wallet drainer is malicious smart contract code designed to drain all or most of the valuable tokens from your wallet in a single transaction. They work by tricking you into signing an approval or transfer transaction that grants the drainer contract access to your assets." },
  { q: "Can a hardware wallet prevent drainer attacks?", a: "A hardware wallet prevents private key theft but does not prevent approval-based drainer attacks. If you sign a malicious approval on your hardware wallet, the approval is valid. Reading the transaction details carefully on the device screen before confirming is essential." },
  { q: "What is setApprovalForAll?", a: "setApprovalForAll is an ERC-721 (NFT) function that grants a contract permission to transfer ALL of your NFTs from a given collection. If you sign this approval for a malicious contract, it can move every NFT in that collection from your wallet without any further authorisation." },
  { q: "How do I check what approvals I have given?", a: "Use Etherscan's token approval checker (etherscan.io/tokenapprovalchecker) or tools like Revoke.cash or Unrekt.net. These show all active ERC-20 and ERC-721 approvals your address has signed and let you revoke them directly." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Crypto Wallet Drainer Scams Explained",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "Ashir", url: "https://www.cryptobeacon.site/author", worksFor: { "@type": "Organization", name: "CryptoBeacon" } },
  publisher: { "@type": "Organization", name: "CryptoBeacon", logo: { "@type": "ImageObject", url: "https://www.cryptobeacon.site/favicon.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  inLanguage: "en-US",
  keywords: "crypto wallet drainer explained, approval phishing, setApprovalForAll scam, ERC-20 token approval scam, how to detect wallet drainer, revoke token approvals",
  articleSection: "Security",
  wordCount: 850,
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
    { "@type": "ListItem", position: 2, name: "Security", item: "https://www.cryptobeacon.site/security" },
    { "@type": "ListItem", position: 3, name: "Crypto Wallet Drainer Scams Explained", item: URL },
  ],
};

export const Route = createFileRoute("/security/crypto-wallet-drainer-scams-explained")({
  head: () => ({
    meta: [
      { title: TITLE }, { name: "description", content: DESC },
      { property: "og:title", content: TITLE }, { property: "og:description", content: DESC },
      { property: "og:type", content: "article" }, { property: "og:url", content: URL },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
      { property: "article:published_time", content: PUBLISHED }, { property: "article:section", content: "Security" },
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
            <li><Link to="/security" className="hover:text-secondary">Security</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">Wallet Drainer Scams Explained</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-red-600 text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security · Drainers
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          Crypto Wallet Drainer Scams Explained
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          Wallet drainers can empty your crypto wallet in a single transaction — before you realise anything happened. Here is exactly how they work and how to protect yourself.
        </p>
        <Author />

        <div className="my-xl p-lg rounded-xl border border-red-500/30 bg-red-500/5 flex gap-md">
          <AlertTriangle className="text-red-400 shrink-0 mt-1" size={20} />
          <p className="font-body-md text-body-md text-on-surface leading-relaxed">
            Wallet drainers can be triggered by a single signature. Once signed, draining is instantaneous and irreversible. The defence is reading before you sign.
          </p>
        </div>

        <H2 id="what-is">What is a wallet drainer?</H2>
        <P>A wallet drainer is malicious smart contract code that, once authorised (by your signature), can transfer tokens or NFTs out of your wallet without any further interaction from you. The attacker deploys the drainer contract and then lures victims into signing a transaction that grants it access to their assets.</P>
        <P>Unlike hacking a private key (which is computationally infeasible), drainers exploit the legitimate approval mechanisms built into token standards. They are legal transactions — from the blockchain's perspective — because you authorised them.</P>

        <H2 id="erc20-approvals">ERC-20 approval exploits</H2>
        <P>ERC-20 tokens have an <code className="bg-surface-container px-xs rounded text-sm font-mono">approve(spender, amount)</code> function. When you interact with DeFi protocols, you approve them to spend a certain amount of your tokens on your behalf. This is necessary and legitimate — it is how DEXes and lending protocols work.</P>
        <P>The attack: a fake dApp asks you to approve an unlimited amount (<code className="bg-surface-container px-xs rounded text-sm font-mono">type(uint256).max</code>) to the attacker's contract rather than to a legitimate protocol. Once you sign, the attacker can drain that token from your wallet at any time.</P>

        <H2 id="set-approval">setApprovalForAll: the nuclear NFT exploit</H2>
        <P><code className="bg-surface-container px-xs rounded text-sm font-mono">setApprovalForAll(operator, true)</code> is an ERC-721 (NFT) function that gives an operator permission to transfer <strong>every</strong> NFT from a specific collection in your wallet. It is used legitimately by marketplaces like OpenSea so they can transfer NFTs when you sell them.</P>
        <P>Attackers abuse it by prompting victims to call setApprovalForAll on their malicious contract — typically disguised as a minting transaction, a reward claim, or a marketplace listing. Once signed, the attacker can transfer all your NFTs from that collection instantly.</P>

        <H2 id="permit">Permit signatures: zero on-chain trace</H2>
        <P>ERC-2612 adds a <code className="bg-surface-container px-xs rounded text-sm font-mono">permit()</code> function that allows approvals to be signed off-chain (no on-chain transaction, no gas, no entry in your history). Drainers increasingly use permit signatures — they look like a free signature request, but they grant the same spending authority as an on-chain approval. No transaction visible, no gas charge, and the approval is valid instantly when submitted by the attacker.</P>

        <H2 id="detect">How to detect dangerous approval requests</H2>
        <ul className="list-disc list-inside space-y-sm mb-md font-body-lg text-body-lg text-on-surface">
          <li>Read the full transaction details in your wallet popup before confirming</li>
          <li>If it shows an approval to a contract you don't recognise, reject it</li>
          <li>Unlimited approvals (<code className="bg-surface-container px-xs rounded text-sm font-mono">115792...2815</code>) to unknown contracts are a definitive red flag</li>
          <li>Use Pocket Universe, Fire, or WalletGuard browser extensions that simulate transactions before you sign</li>
          <li>If a "free" action asks for an approval signature, it is suspicious</li>
        </ul>

        <H2 id="revoke">Revoke existing approvals</H2>
        <P>If you are concerned about past approvals, use <Link to="/security/how-to-revoke-smart-contract-approvals" className="text-secondary underline">Revoke.cash or Etherscan's token approval checker</Link> to see all active approvals on your address and revoke any you do not recognise or no longer need.</P>

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
            <Link to="/security/how-to-revoke-smart-contract-approvals" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">How to Revoke Smart Contract Approvals</h3>
            </Link>
            <Link to="/security/how-crypto-phishing-scams-work" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">How Phishing Scams Work</h3>
            </Link>
            <Link to="/security/crypto-security-hub" className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all">
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">Crypto Security Hub</h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
