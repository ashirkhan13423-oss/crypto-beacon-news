import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/ethereum-erc20-token.webp";
import { Plus } from "lucide-react";
import { Disclaimer } from "@/components/Disclaimer";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/ethereum/what-is-an-erc-20-token";
const TITLE = "What is an ERC-20 Token? | CryptoBeacon";
const DESC = "A deep dive into the ERC-20 standard, the most common type of token on the Ethereum network.";
const PUBLISHED = "2026-09-12";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  {
    q: "What does ERC stand for?",
    a: "ERC stands for Ethereum Request for Comment. It is a formal process for proposing improvements to the Ethereum network. 20 is simply the proposal identifier.",
  },
  {
    q: "Are all tokens on Ethereum ERC-20?",
    a: "No. While ERC-20 is the standard for fungible (interchangeable) tokens, non-fungible tokens (NFTs) use standards like ERC-721 or ERC-1155.",
  },
  {
    q: "Do I need a separate wallet for each ERC-20 token?",
    a: "No, you can store all ERC-20 tokens in any Ethereum-compatible wallet (like MetaMask), because they all reside on the same blockchain.",
  },
];




export const Route = createFileRoute("/ethereum/what-is-an-erc-20-token")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/ethereum/what-is-an-erc-20-token', publishedTime: PUBLISHED, section: 'Ethereum' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "What is an ERC-20 Token? | CryptoBeacon", description: "A deep dive into the ERC-20 standard, the most common type of token on the Ethereum network.", imageUrl: `https://www.cryptobeacon.site${hero}`, datePublished: "2026-09-12", dateModified: "2026-09-12", url: "https://www.cryptobeacon.site/ethereum/what-is-an-erc-20-token", section: "Ethereum", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Ethereum", item: "https://www.cryptobeacon.site/ethereum" },
        { name: "What is an ERC-20 Token? | CryptoBeacon", item: "https://www.cryptobeacon.site/ethereum/what-is-an-erc-20-token" }
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
              <Link to="/ethereum" className="hover:text-secondary">
                Ethereum
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">What is an ERC-20 Token?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#F7931A] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Ethereum
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What is an ERC-20 Token?
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>September 12, 2026</time>}
          
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high" src={hero}
            alt="What is an ERC-20 Token?"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>
        

<P>If you have ever used decentralized finance (<Link to="/glossary#defi" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: DeFi">DeFi</Link>) or bought a token like Chainlink (LINK) or Uniswap (UNI), you have likely interacted with an <strong>ERC-20 token</strong>. But what exactly is it, and why is this standard so crucial to the cryptocurrency ecosystem?</P>

<H2 id="the-standard">The Standard for Tokens</H2>

<P>Before the ERC-20 standard was proposed in 2015 by Fabian Vogelsteller, anyone wanting to launch a token on Ethereum had to write their <Link to="/glossary#smart-contract" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Smart Contract">smart contracts</Link> from scratch. This led to fragmented, incompatible tokens that cryptocurrency exchanges and <Link to="/glossary#wallet" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Wallet">wallets</Link> had to integrate manually on a case-by-case basis. It was a massive bottleneck for innovation.</P>

<P>ERC-20 solved this by introducing a standardized set of rules that every token contract must follow. These rules dictate basic functions: how tokens are transferred, how total supply is calculated, and how balances are queried. Because of this uniformity, a developer can launch an ERC-20 token today, and it will immediately be compatible with MetaMask, Uniswap, and hardware wallets without any custom coding.</P>

<H2 id="fungibility">Fungibility and Use Cases</H2>

<P>The core characteristic of an ERC-20 token is <strong>fungibility</strong>. This means every token is identical in value and utility to any other token of the same type. One UNI token is exactly the same as another UNI token, just as one dollar bill is worth the same as another. This makes ERC-20 perfect for currencies, voting rights (governance tokens), <Link to="/glossary#staking" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Staking">staking</Link> rewards, and utility access within applications.</P>

<div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Key Takeaways</h3>
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>ERC-20 is the technical standard for creating fungible tokens on the Ethereum blockchain.</li>
            <li>It guarantees interoperability across the entire Ethereum ecosystem (wallets, exchanges, DeFi protocols).</li>
            <li>It contrasts with ERC-721, which is used for unique, Non-Fungible Tokens (NFTs).</li>
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
