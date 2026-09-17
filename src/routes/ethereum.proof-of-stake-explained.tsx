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

const URL = "https://www.cryptobeacon.site/ethereum/proof-of-stake-explained";
const TITLE = "Proof of Stake Explained: How Ethereum's Consensus Works | CryptoBeacon";
const DESC =
  "How does Ethereum's Proof of Stake work? This guide explains validators, staking, finality, slashing, and how PoS replaced Proof of Work mining in The Merge.";
const PUBLISHED = "2026-09-01";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  { q: "What is Proof of Stake?", a: "Proof of Stake (PoS) is a consensus mechanism where validators are chosen to create new blocks based on the amount of cryptocurrency they have locked up (staked) as collateral, rather than computational work. It replaced Proof of Work mining in Ethereum's 'The Merge' in September 2022." },
  { q: "How does PoS prevent attacks?", a: "Validators risk losing their staked ETH through slashing if they behave dishonestly. Attacking the network would require controlling a large fraction of staked ETH, which is enormously expensive to acquire. If an attack were detected, the attacker's stake would be slashed, making the attack financially self-destructive." },
  { q: "What is slashing?", a: "Slashing is a penalty mechanism in Proof of Stake. If a validator proposes conflicting blocks (double signing) or violates other consensus rules, a portion of their staked ETH is burned (destroyed) and they are ejected from the validator set." },
  { q: "Is Proof of Stake more centralised than Proof of Work?", a: "This is debated. PoS removes the advantage that large mining operations have from economies of scale on hardware and electricity, but wealthy validators can stake more and earn proportionally more rewards. In practice, liquid staking protocols like Lido have become very large, raising decentralisation concerns." },
  { q: "What is the difference between PoS and DPoS?", a: "Delegated Proof of Stake (DPoS) uses token holder votes to elect a small number of block producers, which is faster but more centralised. Ethereum's PoS allows any validator meeting the 32 ETH threshold to participate directly, with no delegation required." },
];




export const Route = createFileRoute("/ethereum/proof-of-stake-explained")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/ethereum/proof-of-stake-explained', publishedTime: PUBLISHED, section: 'Ethereum' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "Proof of Stake Explained: How Ethereum's Consensus Works | CryptoBeacon", description: "How does Ethereum's Proof of Stake work? This guide explains validators, staking, finality, slashing, and how PoS replaced Proof of Work mining in The Merge.", imageUrl: `https://www.cryptobeacon.site${""}`, datePublished: "2026-09-01", dateModified: "2026-09-01", url: "https://www.cryptobeacon.site/ethereum/proof-of-stake-explained", section: "Ethereum", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Ethereum", item: "https://www.cryptobeacon.site/ethereum" },
        { name: "Proof of Stake Explained: How Ethereum's Consensus Works | CryptoBeacon", item: "https://www.cryptobeacon.site/ethereum/proof-of-stake-explained" }
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
            <li className="text-primary">Proof of Stake Explained</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Ethereum · Consensus
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          Proof of Stake Explained
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          How Ethereum replaced energy-intensive <Link to="/glossary#mining" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Mining">mining</Link> with an economic stake-based consensus system — and what that means for security, decentralisation, and sustainability.
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <H2 id="what-is-pos">What is Proof of Stake?</H2>
        <P><Link to="/glossary#proof-of-stake" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Proof of Stake">Proof of Stake</Link> (PoS) is a method for achieving consensus in a <Link to="/glossary#blockchain" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Blockchain">blockchain</Link> network. Instead of miners competing to solve cryptographic puzzles (Proof of Work), validators are chosen to propose and attest to new blocks based on the amount of cryptocurrency they have locked up — their <em>stake</em> — as collateral.</P>
        <P>The core security mechanism is economic: to participate as a validator, you must risk your own ETH. Behave honestly and earn rewards. Behave dishonestly and lose your stake through slashing. This creates a direct financial incentive for validators to follow the rules.</P>

        <H2 id="the-merge">The Merge: September 2022</H2>
        <P>Ethereum launched in 2015 using Proof of Work. Miners competed to add blocks by solving computational puzzles, consuming enormous amounts of electricity. In September 2022, Ethereum executed "The Merge" — a seamless transition to Proof of Stake. The network's energy consumption fell by approximately 99.95% overnight, without disrupting any transactions or applications.</P>

        <H2 id="how-it-works">How it works: validators, slots, and epochs</H2>
        <P>Ethereum's PoS operates on a timeline of <strong>slots</strong> (12 seconds each) and <strong>epochs</strong> (32 slots = ~6.4 minutes). Each slot, one validator is pseudo-randomly selected to propose a block. Committees of other validators are assigned to attest (vote) on the block's validity. If a block gets sufficient attestations, it is added to the chain.</P>
        <P>Validators are selected randomly but weighted by their stake. With 32 ETH required per validator, the system is designed to allow broad participation while maintaining accountability.</P>

        <H2 id="finality">Finality</H2>
        <P>Ethereum uses Casper FFG (Friendly Finality Gadget) alongside the LMD-GHOST fork-choice rule to achieve finality. After two epochs (~12.8 minutes), a block is "finalised" — meaning it cannot be reversed without destroying at least one-third of all staked ETH. This makes attacks economically self-destructive.</P>

        <H2 id="slashing">Slashing</H2>
        <P>Slashing is the punishment for provably dishonest behaviour. A validator can be slashed for:</P>
        <ul className="list-disc list-inside space-y-xs mb-md font-body-lg text-body-lg text-on-surface">
          <li>Proposing two different blocks for the same slot (equivocation)</li>
          <li>Signing conflicting attestations (surround voting or double voting)</li>
        </ul>
        <P>Penalties range from a partial stake burn for isolated incidents to a full stake burn (inactivity leak) if a large portion of validators go offline simultaneously during a network emergency. Slashed validators are also ejected from the validator set.</P>

        <RelatedArticles currentUrl={URL} />
              </article>
</main>
      <SiteFooter />
    </div>
  );
}
