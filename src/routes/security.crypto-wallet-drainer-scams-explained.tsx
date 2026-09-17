import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus, AlertTriangle } from "lucide-react";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/security/crypto-wallet-drainer-scams-explained";
const TITLE = "Crypto Wallet Drainer Scams Explained | CryptoBeacon";
const DESC = "What are crypto wallet drainers? How approval scams and setApprovalForAll exploits work, how to detect them before signing, and how to revoke existing danger...";
const PUBLISHED = "2026-09-01";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  { q: "What is a wallet drainer?", a: "A wallet drainer is malicious smart contract code designed to drain all or most of the valuable tokens from your wallet in a single transaction. They work by tricking you into signing an approval or transfer transaction that grants the drainer contract access to your assets." },
  { q: "Can a hardware wallet prevent drainer attacks?", a: "A hardware wallet prevents private key theft but does not prevent approval-based drainer attacks. If you sign a malicious approval on your hardware wallet, the approval is valid. Reading the transaction details carefully on the device screen before confirming is essential." },
  { q: "What is setApprovalForAll?", a: "setApprovalForAll is an ERC-721 (NFT) function that grants a contract permission to transfer ALL of your NFTs from a given collection. If you sign this approval for a malicious contract, it can move every NFT in that collection from your wallet without any further authorisation." },
  { q: "How do I check what approvals I have given?", a: "Use Etherscan's token approval checker (etherscan.io/tokenapprovalchecker) or tools like Revoke.cash or Unrekt.net. These show all active ERC-20 and ERC-721 approvals your address has signed and let you revoke them directly." },
];




export const Route = createFileRoute("/security/crypto-wallet-drainer-scams-explained")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/security/crypto-wallet-drainer-scams-explained', publishedTime: PUBLISHED, section: 'Security' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "Crypto Wallet Drainer Scams Explained | CryptoBeacon", description: "What are crypto wallet drainers? How approval scams and setApprovalForAll exploits work, how to detect them before signing, and how to revoke existing danger...", imageUrl: `https://www.cryptobeacon.site${""}`, datePublished: "2026-09-01", dateModified: "2026-09-01", url: "https://www.cryptobeacon.site/security/crypto-wallet-drainer-scams-explained", section: "Security", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Security", item: "https://www.cryptobeacon.site/security" },
        { name: "Crypto Wallet Drainer Scams Explained | CryptoBeacon", item: "https://www.cryptobeacon.site/security/crypto-wallet-drainer-scams-explained" }
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
          <Link to="/glossary#wallet" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Wallet">Wallet</Link> drainers can empty your crypto wallet in a single transaction — before you realise anything happened. Here is exactly how they work and how to protect yourself.
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <div className="my-xl p-lg rounded-xl border border-red-500/30 bg-red-500/5 flex gap-md">
          <AlertTriangle className="text-red-400 shrink-0 mt-1" size={20} />
          <p className="font-body-md text-body-md text-on-surface leading-relaxed">
            Wallet drainers can be triggered by a single signature. Once signed, draining is instantaneous and irreversible. The defence is reading before you sign.
          </p>
        </div>

        <H2 id="what-is">What is a wallet drainer?</H2>
        <P>A wallet drainer is malicious <Link to="/glossary#smart-contract" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Smart Contract">smart contract</Link> code that, once authorised (by your signature), can transfer tokens or NFTs out of your wallet without any further interaction from you. The attacker deploys the drainer contract and then lures victims into signing a transaction that grants it access to their assets.</P>
        <P>Unlike hacking a <Link to="/glossary#private-key" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Private Key">private key</Link> (which is computationally infeasible), drainers exploit the legitimate approval mechanisms built into token standards. They are legal transactions — from the <Link to="/glossary#blockchain" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Blockchain">blockchain</Link>'s perspective — because you authorised them.</P>

        <H2 id="erc20-approvals">ERC-20 approval exploits</H2>
        <P>ERC-20 tokens have an <code className="bg-surface-container px-xs rounded text-sm font-mono">approve(spender, amount)</code> function. When you interact with <Link to="/glossary#defi" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: DeFi">DeFi</Link> protocols, you approve them to spend a certain amount of your tokens on your behalf. This is necessary and legitimate — it is how DEXes and lending protocols work.</P>
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

        <RelatedArticles currentUrl={URL} />
              </article>
</main>
      <SiteFooter />
    </div>
  );
}
