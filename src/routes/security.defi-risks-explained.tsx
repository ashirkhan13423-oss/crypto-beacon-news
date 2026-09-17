import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/defi-risks.webp";
import { TriangleAlert } from "lucide-react";
import { Disclaimer } from "@/components/Disclaimer";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/security/defi-risks-explained";
const TITLE = "DeFi Risks Explained: Smart Contract Flaws & Impermanent Loss | CryptoBeacon";
const DESC =
  "A stark look at the hidden dangers of Decentralized Finance (DeFi), explaining smart contract vulnerabilities, rug pulls, and why high yields carry high risk.";
const PUBLISHED = "2026-08-20";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  {
    q: "If a DeFi protocol is hacked, can I get my money back?",
    a: "Usually, no. Transactions on the blockchain are irreversible. Unlike a bank, there is no FDIC insurance or customer support desk to reverse a fraudulent smart contract interaction.",
  },
  {
    q: "Are audited smart contracts completely safe?",
    a: "No. A security audit just means experts reviewed the code for known vulnerabilities at a specific point in time. Audited protocols still get hacked regularly.",
  },
  {
    q: "What is impermanent loss?",
    a: "It is a risk unique to providing liquidity in automated market makers (AMMs) like Uniswap. If the price of the tokens you deposited changes significantly compared to when you deposited them, you may end up with less value than if you had just held the tokens in your wallet.",
  },
];




export const Route = createFileRoute("/security/defi-risks-explained")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/security/defi-risks-explained', publishedTime: PUBLISHED, section: 'Security' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "DeFi Risks Explained: Smart Contract Flaws & Impermanent Loss | CryptoBeacon", description: "A stark look at the hidden dangers of Decentralized Finance (DeFi), explaining smart contract vulnerabilities, rug pulls, and why high yields carry high risk.", imageUrl: `https://www.cryptobeacon.site${hero}`, datePublished: "2026-08-20", dateModified: "2026-08-20", url: "https://www.cryptobeacon.site/security/defi-risks-explained", section: "Security", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Security", item: "https://www.cryptobeacon.site/security" },
        { name: "DeFi Risks Explained: Smart Contract Flaws & Impermanent Loss | CryptoBeacon", item: "https://www.cryptobeacon.site/security/defi-risks-explained" }
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
            <li className="text-primary">DeFi Risks Explained</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#EA4335] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          DeFi Risks Explained: The Dark Side of High Yields
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 20, 2026</time>}
          
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high" src={hero}
            alt="Glowing decentralized finance graph with a red warning sign"
            width={1600}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          Decentralized Finance (<Link to="/glossary#defi" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: DeFi">DeFi</Link>) promises a utopian financial system: no banks, no credit
          checks, and yields on your money that traditional savings accounts can't match. It is
          built on <Link to="/glossary#smart-contract" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Smart Contract">smart contracts</Link> — self-executing code on <Link to="/glossary#blockchain" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Blockchain">blockchains</Link> like Ethereum or Solana.
        </P>
        <P>
          However, the reality of DeFi is a high-stakes frontier. For every user earning passive
          income, another is losing their life savings to a hacked contract, an economic exploit,
          or a malicious developer. To survive in DeFi, you must understand exactly what risks you
          are taking when you hit "Approve."
        </P>
        <P>
          I learned this the hard way in 2022 when I deposited funds into a new, untested yield farm offering 10,000% APY. Within 48 hours, the protocol was exploited by a flash loan attack, and my deposit went to zero. It was a painful but necessary lesson in smart contract risk.
        </P>

        {/* Layout C: Warning Banner */}
        <div className="my-xl p-xl rounded-2xl bg-error/10 border border-error/30 shadow-sm flex flex-col md:flex-row items-center gap-lg">
          <TriangleAlert className="text-error w-16 h-16 shrink-0" />
          <div>
            <p className="font-display-sm text-display-sm text-error font-bold leading-tight mb-sm">
              Code is Law (Until it's Flawed)
            </p>
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
              In DeFi, there is no customer support to reverse a bad transaction. If the smart contract you interact with has a bug, hackers can drain the entire protocol, and your funds will vanish instantly without recourse.
            </p>
          </div>
        </div>

        <H2 id="smart-contract-risk">1. Smart Contract Vulnerabilities</H2>
        <P>
          Traditional software has bugs. When a banking app has a bug, the server crashes, developers
          fix it, and no money is lost. When a DeFi smart contract has a bug, it is effectively a
          piñata full of cash left in a public square with the lock broken.
        </P>
        <P>
          Hackers constantly scan open-source DeFi code looking for logical flaws, reentrancy attacks,
          or flash loan exploits. If they find one, they execute the exploit and drain the liquidity
          pools. Because the blockchain treats the execution of the code as valid, the theft is
          often permanent.
        </P>

        <H2 id="impermanent-loss">2. Impermanent Loss</H2>
        <P>
          Many DeFi users are lured in by the high Annual Percentage Yields (APY) offered for
          providing liquidity to decentralized exchanges (like Uniswap or SushiSwap). This involves depositing two
          tokens (e.g., ETH and USDC) into a liquidity pool.
        </P>
        <P>
          However, if the price of ETH skyrockets (or crashes) while it is in the pool, the automated
          market maker rebalances your ratio to ensure the pool maintains an equal dollar value of both assets. 
          When you withdraw your liquidity, you may find that you have less
          overall value than if you had simply held the ETH and USDC separately in your <Link to="/glossary#wallet" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Wallet">wallet</Link>. The yield you
          earned from trading fees may not be enough to cover this "impermanent loss" caused by the price divergence.
        </P>
        <P>
          It is called "impermanent" because if the prices return to the exact ratio they were at when you deposited, the loss vanishes. But in the highly volatile crypto market, that rarely happens.
        </P>


        <H2 id="admin-keys">3. Centralization and Admin Keys</H2>
        <P>
          The "D" in DeFi stands for Decentralized, but many protocols are highly centralized behind
          the scenes. Developers often retain "admin keys" that allow them to upgrade the smart
          contract code or pause withdrawals.
        </P>
        <P>
          While this is often done to fix bugs, it introduces massive risk. If a malicious developer
          decides to act poorly, they can use these admin keys to rewrite the contract and steal the
          funds (a type of "rug pull"). Alternatively, if a hacker steals the admin keys, they gain
          complete control over the protocol.
        </P>

        {/* Layout C: Inline Flowing FAQs */}
        <H2 id="common-questions">4. Common Questions</H2>
        <div className="space-y-lg mb-xl">
          <FAQ faqs={faqs} />
        </div>

        <H2 id="conclusion">Conclusion</H2>
        <P>
          DeFi is a revolutionary technology, but it is currently operating in an experimental, highly
          adversarial environment. Never put money into a smart contract that you cannot afford to
          lose completely. Stick to established, battle-tested protocols for a longer period of time,
          and always assume that a high APY is compensating you for an equally high hidden risk.
        </P>

        <H2 id="sources">Sources & Further Reading</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://ethereum.org/en/defi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Ethereum.org — Decentralized Finance (DeFi)
            </a>
          </li>
          <li>
            <a
              href="https://finematics.com/impermanent-loss-explained/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Finematics — Impermanent Loss Explained
            </a>
          </li>
          <li>
            <a
              href="https://rekt.news/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Rekt.news — Journalism covering the worst DeFi hacks and exploits
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

