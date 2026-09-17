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

const URL = "https://www.cryptobeacon.site/ethereum/what-is-ethereum";
const TITLE = "What Is Ethereum? A Plain-Language Introduction | CryptoBeacon";
const DESC = "What is Ethereum? A clear, beginner-friendly explanation of what Ethereum is, how it differs from Bitcoin, what the EVM is, and why it became the foundation ...";
const PUBLISHED = "2026-09-01";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  { q: "What is Ethereum in simple terms?", a: "Ethereum is a programmable blockchain — a global network of computers that can run software (called smart contracts) in a decentralised way. Unlike Bitcoin, which is primarily a currency, Ethereum is a platform for building applications that no single company controls." },
  { q: "Who created Ethereum?", a: "Ethereum was proposed in 2013 by Vitalik Buterin, then a 19-year-old programmer and Bitcoin researcher. It was co-founded by several others including Gavin Wood, Joseph Lubin, and Charles Hoskinson, and launched in July 2015." },
  { q: "What is ETH (Ether)?", a: "ETH (Ether) is the native currency of the Ethereum network. It is used to pay for transaction fees (gas), stake as a validator, and as a medium of exchange within the Ethereum ecosystem. ETH is not the same as Ethereum itself — Ethereum is the network, ETH is the token." },
  { q: "Is Ethereum the same as Bitcoin?", a: "No. Bitcoin was designed to be a peer-to-peer electronic cash system and a digital store of value. Ethereum was designed to be a programmable platform. They share some features (both are blockchains, both use cryptography) but serve different primary purposes." },
  { q: "What is the Ethereum Virtual Machine (EVM)?", a: "The EVM is the runtime environment that executes smart contracts on Ethereum. Every node in the network runs the EVM, which ensures that the same code produces the same output everywhere — enabling trustless, decentralised computation." },
];




export const Route = createFileRoute("/ethereum/what-is-ethereum")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/ethereum/what-is-ethereum', publishedTime: PUBLISHED, section: 'Ethereum' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "What Is Ethereum? A Plain-Language Introduction | CryptoBeacon", description: "What is Ethereum? A clear, beginner-friendly explanation of what Ethereum is, how it differs from Bitcoin, what the EVM is, and why it became the foundation ...", imageUrl: `https://www.cryptobeacon.site${""}`, datePublished: "2026-09-01", dateModified: "2026-09-01", url: "https://www.cryptobeacon.site/ethereum/what-is-ethereum", section: "Ethereum", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Ethereum", item: "https://www.cryptobeacon.site/ethereum" },
        { name: "What Is Ethereum? A Plain-Language Introduction | CryptoBeacon", item: "https://www.cryptobeacon.site/ethereum/what-is-ethereum" }
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
            <li><Link to="/ethereum" className="hover:text-secondary">Ethereum</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">What Is Ethereum?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#627EEA] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Ethereum · Start Here
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          What Is Ethereum?
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          A plain-language explanation of the world's largest programmable <Link to="/glossary#blockchain" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Blockchain">blockchain</Link> — what it is, what it does, and why it matters.
        </p>

        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <H2 id="what-is">The one-sentence answer</H2>
        <P>Ethereum is a decentralised, programmable blockchain — a global network of computers that can run software (<Link to="/glossary#smart-contract" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Smart Contract">smart contracts</Link>) without any central authority controlling it.</P>

        <H2 id="beyond-currency">Beyond a currency</H2>
        <P>Bitcoin was designed to do one thing exceptionally well: be a peer-to-peer electronic currency and store of value. Ethereum was designed to be a platform. Rather than simply tracking who owns what, Ethereum's blockchain can store and execute arbitrary code — programs that run automatically when pre-defined conditions are met.</P>
        <P>This distinction — <em>currency</em> vs <em>programmable platform</em> — is why Ethereum became the foundation for <Link to="/glossary#defi" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: DeFi">DeFi</Link> (decentralised finance), NFTs, DAOs, and most of the innovation in the crypto ecosystem over the past decade.</P>

        <H2 id="smart-contracts">Smart contracts: the key concept</H2>
        <P>A smart contract is a program stored on the Ethereum blockchain. Once deployed, it cannot be changed, censored, or taken down. It executes exactly as written whenever someone interacts with it, and the outcome is recorded on the blockchain for everyone to verify.</P>
        <P>Example: a lending protocol smart contract automatically issues a loan when collateral is deposited and automatically liquidates it if the collateral value drops below a threshold — no bank, no loan officer, no human discretion required.</P>
        <P>Read more: <Link to="/ethereum/what-is-a-smart-contract" className="text-secondary underline">Ethereum Smart Contracts Explained →</Link></P>

        <H2 id="evm">The Ethereum Virtual Machine</H2>
        <P>The EVM (Ethereum Virtual Machine) is the runtime environment that executes smart contracts. Every <Link to="/glossary#node" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Node">node</Link> in the network runs the EVM independently and arrives at the same result — this is what makes it trustless. The EVM uses a language called <strong>Solidity</strong> (or alternatives like Vyper) to write contracts, which are compiled to bytecode the EVM can execute.</P>

        <H2 id="eth">ETH: the fuel of the network</H2>
        <P>ETH (Ether) is Ethereum's native currency. Every operation on the network costs ETH — these costs are called <strong><Link to="/glossary#gas-fees" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Gas Fees">gas fees</Link></strong>. Validators who secure the network earn ETH rewards. ETH is also the base asset for most DeFi protocols and NFT marketplaces on the network.</P>
        <P>ETH has no hard cap on its supply (unlike Bitcoin's 21 million), but EIP-1559 introduced a fee-burning mechanism that makes a portion of each transaction fee permanently removed from circulation, making ETH deflationary during periods of high network activity.</P>

        <H2 id="proof-of-stake">Proof of Stake</H2>
        <P>Ethereum transitioned from Proof of Work (<Link to="/glossary#mining" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Mining">mining</Link>) to <Link to="/glossary#proof-of-stake" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Proof of Stake">Proof of Stake</Link> in September 2022 — an event called "The Merge." Validators now secure the network by locking up 32 ETH as collateral rather than running power-intensive mining hardware. This reduced Ethereum's energy consumption by approximately 99.95%.</P>
        <P>Read more: <Link to="/ethereum/proof-of-stake-explained" className="text-secondary underline">Proof of Stake Explained →</Link></P>

        <RelatedArticles currentUrl={URL} />
              </article>
</main>
      <SiteFooter />
    </div>
  );
}
