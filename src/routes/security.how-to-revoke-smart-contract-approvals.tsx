import { Link } from "@tanstack/react-router";
import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/security-smart-contract-approvals.webp";
import { Plus } from "lucide-react";
import { Disclaimer } from "@/components/Disclaimer";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/security/how-to-revoke-smart-contract-approvals";
const TITLE = "How to Revoke Smart Contract Approvals | CryptoBeacon";
const DESC = "A comprehensive guide on what smart contract approvals (token allowances) are, why they can be dangerous, and how to revoke them to secure your crypto portfo...";
const PUBLISHED = "2026-08-20";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  {
    q: "Does revoking an approval cost gas?",
    a: "Yes. Revoking an approval is a transaction on the blockchain that updates the smart contract state, so you will need to pay a small network fee (gas) in the native token (e.g., ETH, MATIC) to execute the revocation.",
  },
  {
    q: "How often should I check my token approvals?",
    a: "It's good operational security to check your approvals at least once a month, or immediately after interacting with a new, untested, or potentially suspicious decentralized application (dApp).",
  },
  {
    q: "Can a smart contract drain my wallet without an approval?",
    a: "Generally, no. A smart contract cannot move your ERC-20 tokens unless you have explicitly granted it an allowance to do so. However, interacting with a malicious contract can sometimes trick you into signing an approval transaction.",
  },
];




export const Route = createFileRoute("/security/how-to-revoke-smart-contract-approvals")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/security/how-to-revoke-smart-contract-approvals', publishedTime: PUBLISHED, section: 'Security' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "How to Revoke Smart Contract Approvals | CryptoBeacon", description: "A comprehensive guide on what smart contract approvals (token allowances) are, why they can be dangerous, and how to revoke them to secure your crypto portfo...", imageUrl: `https://www.cryptobeacon.site${hero}`, datePublished: "2026-08-20", dateModified: "2026-08-20", url: "https://www.cryptobeacon.site/security/how-to-revoke-smart-contract-approvals", section: "Security", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Security", item: "https://www.cryptobeacon.site/security" },
        { name: "How to Revoke Smart Contract Approvals | CryptoBeacon", item: "https://www.cryptobeacon.site/security/how-to-revoke-smart-contract-approvals" }
      ])) }
    ],
  }),
  component: ArticlePage,
});

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 font-headline-md text-headline-md md:text-headline-lg text-primary mt-xxl mb-md"
    >
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">{children}</p>
  );
}

function ArticlePage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <article>
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
            <li>
              <Link to="/security" className="hover:text-secondary">
                Security
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">How to Revoke Smart Contract Approvals</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#EA4335] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          How to Revoke Smart Contract Approvals and Protect Your Crypto
        </h1>

        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high" src={hero}
            alt="Abstract dark mode digital illustration representing a glowing lock mechanism signifying revoking access"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>

        <P>
          In the world of decentralized finance (<Link to="/glossary#defi" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: DeFi">DeFi</Link>), <Link to="/glossary#smart-contract" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Smart Contract">smart contracts</Link> are the engines that power decentralized exchanges, lending platforms, and NFT marketplaces. But to interact with these protocols, you must grant them permission to move your tokens. This permission is known as a <strong>token approval</strong> or <strong>allowance</strong>. 
        </P>
        <P>
          While necessary for DeFi to function, these approvals are often a prime attack vector for hackers. If a smart contract you've previously approved is exploited, or if you accidentally sign an approval for a malicious contract, attackers can drain your <Link to="/glossary#wallet" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Wallet">wallet</Link> of those specific tokens without any further input from you. This comprehensive guide will explain exactly how token approvals work, why they are dangerous, and step-by-step instructions on how to revoke them.
        </P>
        <P>
          <em>This article is educational. It isn't financial advice.</em>
        </P>

        <H2 id="what-are-smart-contract-approvals">What Are Smart Contract Approvals?</H2>
        <P>
          When you want to swap a token on a decentralized exchange (like Uniswap) or lend an asset on a protocol (like Aave), the smart contract running that service needs the ability to take the tokens out of your wallet to process the trade or loan. 
        </P>
        <P>
          Because of the security design of the ERC-20 token standard (and similar standards on other <Link to="/glossary#blockchain" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Blockchain">blockchains</Link>), smart contracts cannot unilaterally pull tokens from your wallet. You must first send a specific transaction that says, "I authorize this specific smart contract address to move up to X amount of my token."
        </P>
        <P>
          To save users from having to pay <Link to="/glossary#gas-fees" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Gas Fees">gas fees</Link> for an approval transaction every single time they want to make a trade, many decentralized applications (dApps) default to asking for an <strong>infinite approval</strong>. This means you authorize the contract to move a practically limitless amount of that token on your behalf, forever, until you explicitly revoke it.
        </P>

        <H2 id="the-danger-of-infinite-approvals">The Danger of Infinite Approvals</H2>
        <P>
          While infinite approvals are highly convenient and save users significant gas fees over time, they introduce a severe security vulnerability. 
        </P>
        <P>
          If you grant an infinite approval to a smart contract, and that contract later contains a vulnerability that hackers exploit, the hackers can leverage the contract's authority to drain all the tokens you approved from your wallet. This is true even if you haven't interacted with the contract in months or years. Your wallet remains continuously vulnerable until the allowance is explicitly revoked.
        </P>
        <P>
          Furthermore, phishing scams frequently trick users into signing approval transactions. The attacker will direct the user to a fake website that looks like a legitimate protocol. When the user attempts to "connect" or "claim an airdrop," the site actually prompts their wallet to sign an infinite approval for the attacker's contract. Once signed, the attacker instantly drains the victim's wallet.
        </P>

        <H2 id="how-to-revoke-approvals">How to Revoke Smart Contract Approvals</H2>
        <P>
          Revoking a smart contract approval is the process of resetting the allowed amount back to zero. To do this, you must interact with the token's smart contract on the blockchain and update the state. This requires paying a small network fee (gas).
        </P>
        <P>
          There are several reputable tools designed specifically to help users view and revoke their active token allowances.
        </P>

        <h3 className="font-headline-sm text-headline-sm text-primary mt-lg mb-sm">1. Using Revoke.cash (Recommended)</h3>
        <P>
          <a href="https://revoke.cash" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline font-medium">Revoke.cash</a> is widely considered the industry standard tool for managing token approvals. It supports Ethereum and dozens of other EVM-compatible networks.
        </P>
        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li><strong>Navigate to Revoke.cash:</strong> Ensure you are on the correct URL (<a href="https://revoke.cash" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">revoke.cash</a>) to avoid phishing clones.</li>
          <li><strong>Connect Your Wallet:</strong> Connect your MetaMask, Rabby, or WalletConnect-compatible wallet.</li>
          <li><strong>Review Your Allowances:</strong> The dashboard will display all active approvals across different networks. You can filter by token or sort by the date the approval was granted.</li>
          <li><strong>Click Revoke:</strong> Find the contract you want to revoke and click the "Revoke" button next to it.</li>
          <li><strong>Confirm the Transaction:</strong> Your wallet will prompt you to confirm the transaction and pay the gas fee. Once confirmed on-chain, the approval is permanently removed.</li>
        </ul>

        <h3 className="font-headline-sm text-headline-sm text-primary mt-lg mb-sm">2. Using Block Explorers (e.g., Etherscan)</h3>
        <P>
          Major block explorers like <a href="https://etherscan.io" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline font-medium">Etherscan</a> have built-in token approval tools. This is often the safest route if you prefer to rely on core infrastructure.
        </P>
        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li><strong>Navigate to Etherscan's Token Approval Tool:</strong> Go to <a href="https://etherscan.io/tokenapprovalchecker" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">etherscan.io/tokenapprovalchecker</a>.</li>
          <li><strong>Connect to Web3:</strong> Click "Connect to Web3" to link your wallet.</li>
          <li><strong>Review and Revoke:</strong> The interface works similarly to Revoke.cash. Find the specific token and contract, click "Revoke," and confirm the transaction in your wallet.</li>
        </ul>

        <H2 id="best-practices">Best Practices for Token Approvals</H2>
        <div className="border-l-4 border-[#EA4335] bg-[#EA4335]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li><strong>Use Exact Approvals:</strong> Many modern wallets (like Rabby or updated versions of MetaMask) allow you to edit the approval amount before signing. Instead of accepting the default "infinite" amount, type in the exact amount you intend to trade.</li>
            <li><strong>Regular Audits:</strong> Make it a habit to check <a href="https://revoke.cash" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Revoke.cash</a> monthly. Revoke any allowances for dApps you no longer use or don't recognize.</li>
            <li><strong>Compartmentalization:</strong> Use a separate "vault" wallet for long-term storage that never interacts with smart contracts. Use a distinct "hot" wallet for DeFi trading. This ensures your bulk holdings are never exposed to approval risks.</li>
            <li><strong>Read Before Signing:</strong> Always read the prompt in your wallet carefully. If a website asks for an approval when you were expecting a simple signature or a transfer, it is likely a scam.</li>
          </ul>
        </div>

        <H2 id="faq">FAQ</H2>
        <div className="divide-y divide-outline-variant border-y border-outline-variant">
          <FAQ faqs={faqs} />
        </div>

        <H2 id="sources">Sources</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://revoke.cash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Revoke.cash — Token Approval Management Tool
            </a>
          </li>
          <li>
            <a
              href="https://etherscan.io/tokenapprovalchecker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Etherscan — Token Approval Checker
            </a>
          </li>
          <li>
            <a
              href="https://eips.ethereum.org/EIPS/eip-20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Ethereum EIP-20 — ERC-20 Token Standard and Approval Mechanism
            </a>
          </li>
          <li>
            <a
              href="https://consensys.io/blog/the-real-risks-of-token-approvals"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              ConsenSys — The Real Risks of Token Approvals in DeFi
            </a>
          </li>
        </ul>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <Disclaimer />
        </div>

        <RelatedArticles currentUrl={URL} />
              </article>
</main>
      <SiteFooter />
    </div>
  );
}

