import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/guides-smart-contract.webp";
import { Plus } from "lucide-react";
import { Disclaimer } from "@/components/Disclaimer";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/guides/what-is-a-smart-contract-explained";
const TITLE = "What is a Smart Contract? Explained Simply | CryptoBeacon";
const DESC = "A beginner-friendly explanation of smart contracts, how they automate transactions, and their role in the crypto ecosystem.";
const PUBLISHED = "2026-09-12";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  {
    q: "Can a smart contract be changed once deployed?",
    a: "Generally, no. Smart contracts are immutable by design, meaning their code cannot be altered once it lives on the blockchain. Upgradability can be programmed in via proxy contracts, but it introduces centralization risks.",
  },
  {
    q: "What happens if there is a bug in the code?",
    a: "Because they are immutable and handle money automatically, bugs can be catastrophic. Hackers often exploit vulnerabilities to drain funds, which is why professional smart contract auditing is critical.",
  },
  {
    q: "Do smart contracts have legal standing?",
    a: "In some jurisdictions, yes. However, traditional legal systems are still adapting to blockchain technology, and the legal enforceability of \"code is law\" remains a complex gray area.",
  },
];




export const Route = createFileRoute("/guides/what-is-a-smart-contract-explained")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/guides/what-is-a-smart-contract-explained', publishedTime: PUBLISHED, section: 'Guides' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "What is a Smart Contract? Explained Simply | CryptoBeacon", description: "A beginner-friendly explanation of smart contracts, how they automate transactions, and their role in the crypto ecosystem.", imageUrl: `https://www.cryptobeacon.site${hero}`, datePublished: "2026-09-12", dateModified: "2026-09-12", url: "https://www.cryptobeacon.site/guides/what-is-a-smart-contract-explained", section: "Guides", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Guides", item: "https://www.cryptobeacon.site/guides" },
        { name: "What is a Smart Contract? Explained Simply | CryptoBeacon", item: "https://www.cryptobeacon.site/guides/what-is-a-smart-contract-explained" }
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
              <Link to="/guides" className="hover:text-secondary">
                Guides
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">What is a Smart Contract? Explained Simply</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#F7931A] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What is a Smart Contract? Explained Simply
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>September 12, 2026</time>}
          
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high" src={hero}
            alt="What is a Smart Contract? Explained Simply"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>
        

<P>The term <strong><Link to="/glossary#smart-contract" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Smart Contract">smart contract</Link></strong> is often thrown around as the revolutionary technology behind decentralized finance (<Link to="/glossary#defi" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: DeFi">DeFi</Link>), NFTs, and Web3. First conceptualized by computer scientist Nick Szabo in the 1990s, smart contracts have moved from theory to reality, primarily popularized by the Ethereum <Link to="/glossary#blockchain" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Blockchain">blockchain</Link>.</P>

<H2 id="what-is-it">What Exactly is a Smart Contract?</H2>

<P>Simply put, a smart contract is a self-executing computer program that lives on a blockchain. It contains a set of rules (written in code) that automatically execute when predetermined conditions are met. Think of it like a digital vending machine: you insert a coin, select an item, and the machine automatically dispenses the product. There is no human clerk involved to verify the transaction.</P>

<P>In the crypto space, smart contracts facilitate trustless transactions. If Alice wants to buy a digital asset from Bob, they don't need a middleman or an escrow agent. They use a smart contract: Alice sends funds, Bob sends the asset, and the contract automatically swaps them simultaneously. If either party fails to deliver, the contract cancels the transaction.</P>

<H2 id="the-backbone-of-defi">The Backbone of Decentralized Applications (dApps)</H2>

<P>Smart contracts are the building blocks of dApps. When you trade on a decentralized exchange (like Uniswap) or take out a crypto loan (like on Aave), you are interacting purely with smart contracts. These programs run exactly as coded without any downtime, censorship, or third-party interference.</P>

<div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Key Takeaways</h3>
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>Smart contracts are self-executing lines of code stored on a blockchain.</li>
            <li>They remove the need for intermediaries (banks, lawyers, brokers) by automating agreements.</li>
            <li>Because they are immutable, any flaw in the code is permanent and can lead to irreversible financial loss.</li>
          </ul>
        </div>


        <H2 id="faq">FAQ</H2>
        <div className="divide-y divide-outline-variant border-y border-outline-variant">
          <FAQ faqs={faqs} />
        </div>
        

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
