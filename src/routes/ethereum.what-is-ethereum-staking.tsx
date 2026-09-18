import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/ethereum-staking-hero.webp";
import { CheckCircle2, ChevronRight, Layers, ShieldCheck, Lock } from "lucide-react";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { Disclaimer } from "@/components/Disclaimer";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/ethereum/what-is-ethereum-staking";
const TITLE = "What Is Ethereum Staking? Proof-of-Stake & Yield Explained | CryptoBeacon";
const DESC =
  "Learn how Ethereum Proof-of-Stake works, what staking yield represents, the difference between solo validator nodes and liquid staking, and key risks.";
const PUBLISHED = "2026-08-15";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  {
    q: "How much ETH is required to run a solo validator node?",
    a: "Solo staking requires exactly 32 ETH deposited into the Ethereum deposit contract. For users with less ETH, pooled or liquid staking services allow participation with any amount.",
  },
  {
    q: "Where does Ethereum staking yield come from?",
    a: "Staking rewards come from protocol inflation (newly minted ETH for consensus participation) plus execution layer priority fees and MEV (Maximal Extractable Value) tips.",
  },
  {
    q: "Can you lose staked ETH?",
    a: "Yes, through slashing. Slashing occurs if a validator node behaves maliciously or violates consensus rules (such as double signing blocks), resulting in a penalty deducted from the staked balance.",
  },
];

export const Route = createFileRoute("/ethereum/what-is-ethereum-staking")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: "article", path: "/ethereum/what-is-ethereum-staking", publishedTime: PUBLISHED, section: "Ethereum" }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "What Is Ethereum Staking? Proof-of-Stake & Yield Explained | CryptoBeacon", description: "Learn how Ethereum Proof-of-Stake works, what staking yield represents, the difference between solo validator nodes and liquid staking, and key risks.", imageUrl: `https://www.cryptobeacon.site${hero}`, datePublished: "2026-08-15", dateModified: "2026-08-15", url: "https://www.cryptobeacon.site/ethereum/what-is-ethereum-staking", section: "Ethereum", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Ethereum", item: "https://www.cryptobeacon.site/ethereum" },
        { name: "What Is Ethereum Staking? Proof-of-Stake & Yield Explained | CryptoBeacon", item: "https://www.cryptobeacon.site/ethereum/what-is-ethereum-staking" }
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
    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-md">{children}</p>
  );
}

function ArticlePage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <nav aria-label="Breadcrumb" className="mb-md">
          <ol className="flex items-center gap-xs font-body-sm text-body-sm text-on-surface-variant">
            <li>
              <Link to="/" className="hover:text-primary hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight className="w-3 h-3" />
            </li>
            <li>
              <Link to="/ethereum" className="hover:text-primary hover:underline">
                Ethereum
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight className="w-3 h-3" />
            </li>
            <li className="text-primary font-medium truncate">What Is Ethereum Staking?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#627EEA] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Ethereum
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What Is Ethereum Staking? Proof-of-Stake & Yield Mechanics Explained
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 15, 2026</time>}
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high" src={hero}
            alt="3D Ethereum emblem surrounded by proof-of-stake validator node mesh"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </figure>

        <article className="prose max-w-none font-body-lg text-body-lg text-on-surface-variant space-y-xl">
          <P>What is Ethereum staking? In simple terms, staking means locking up ETH (Ethereum's native cryptocurrency) to help secure the network — and getting rewarded for it. It is Ethereum's version of earning interest on a savings account, except the "bank" is the blockchain itself.</P>

          <KeyTakeaway text={keyTakeaway} />

          <aside
            className="my-xl p-lg rounded-lg border border-outline-variant bg-surface-container-low shadow-sm"
            aria-label="Table of contents"
          >
            <h2 className="font-headline-sm text-headline-sm text-primary mb-md">
              Table of Contents
            </h2>
            <ol className="list-decimal list-inside space-y-sm font-body-md text-body-md text-on-surface-variant">
              <li>
                <a href="#how-it-works" className="hover:underline decoration-secondary">
                  How Proof-of-Stake Works
                </a>
              </li>
              <li>
                <a href="#yield" className="hover:underline decoration-secondary">
                  Where Staking Yield Comes From
                </a>
              </li>
              <li>
                <a href="#solo-vs-liquid" className="hover:underline decoration-secondary">
                  Solo Validator Nodes vs Liquid Staking
                </a>
              </li>
              <li>
                <a href="#risks" className="hover:underline decoration-secondary">
                  Key Staking Risks
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline decoration-secondary">
                  Frequently Asked Questions
                </a>
              </li>
            </ol>
          </aside>

          <H2 id="how-it-works">1. How Proof-of-Stake Works</H2>
          <P>
            Before the historic "Merge" in September 2022, Ethereum protected itself using
            Proof-of-Work (PoW) — the same energy-hungry mining system Bitcoin uses. Miners solved complex
            mathematical puzzles to add blocks, competing against each other and consuming vast amounts
            of electricity.
          </P>
          <P>
            Proof-of-Stake (PoS) replaced miners with <strong>validators</strong>. Instead of spending
            electricity, a validator "locks up" 32 ETH as collateral. The network then randomly selects
            validators to propose and attest to new blocks. The more ETH someone has staked, the higher
            their chance of being chosen — and the more they influence the network's security.
          </P>
          <P>
            The genius of this design is that a validator who behaves honestly is rewarded, while one who
            tries to cheat (for example, by signing conflicting blocks) risks losing part of their
            collateral through <strong>slashing</strong>. This means the network is secured by economic
            incentives rather than raw computing power.
          </P>

          <H2 id="yield">2. Where Staking Yield Comes From</H2>
          <P>
            When you see "staking APY" advertised, it represents the interest rate you earn on your staked
            ETH. But where does this money actually come from? Two main sources:
          </P>
          <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-md">
            <li>
              <strong>Protocol Inflation:</strong> The Ethereum protocol mints new ETH every time a block
              is added. Part of that newly minted ETH is distributed to validators as a reward for
              participating in consensus.
            </li>
            <li>
              <strong>Transaction Fees & MEV:</strong> Validators also earn priority fees from transactions
              and "tips" from Maximal Extractable Value (MEV) opportunities, such as front-running large
              trades in DeFi protocols.
            </li>
          </ul>
          <P>
            The yield is not fixed. It fluctuates based on the total amount of ETH staked on the network:
            the more ETH locked up overall, the lower the per-validator reward rate. This self-balancing
            mechanism keeps inflation in check.
          </P>

          <H2 id="solo-vs-liquid">3. Solo Validator Nodes vs Liquid Staking</H2>
          <P>
            There are several ways to stake, each with different trade-offs between control, effort, and
            liquidity:
          </P>
          <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-md">
            <li>
              <strong>Solo Validator Node:</strong> You run your own hardware, deposit exactly 32 ETH, and
              take full responsibility for uptime. You keep 100% of the rewards and never share keys, but
              you must stay online or face penalties.
            </li>
            <li>
              <strong>Staking Pools:</strong> Services like Lido or Rocket Pool let you combine your ETH
              with thousands of others to reach the 32 ETH threshold. You earn rewards proportional to your
              share, minus a small fee, with no hardware required.
            </li>
            <li>
              <strong>Liquid Staking:</strong> A twist on pooling: you receive a tradable token (like stETH)
              in exchange for your deposited ETH. That token can be used in DeFi while your original ETH
              keeps earning rewards elsewhere — giving you both yield and liquidity.
            </li>
          </ul>
          <P>
            For most newcomers, liquid staking is the easiest entry point because it removes the technical
            barriers of running a node while still keeping your funds usable.
          </P>

          <H2 id="risks">4. Key Staking Risks</H2>
          <P>
            Staking is not risk-free. Understanding the downsides before you commit is essential:
          </P>
          <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-md">
            <li>
              <strong>Slashing:</strong> If your validator breaks consensus rules, a portion of your staked
              ETH can be deducted. This is rare but potentially severe — losses range from a small fraction
              up to the entire stake for major violations.
            </li>
            <li>
              <strong>Lock-up Period:</strong> Withdrawn ETH must go through a network-defined queue before
              it becomes available, so you cannot always exit instantly.
            </li>
            <li>
              <strong>Token Price Volatility:</strong> Your yield is paid in ETH, so its dollar value swings
              with the market. A high APY cannot protect you from a falling ETH price.
            </li>
            <li>
              <strong>Third-Party Risk:</strong> If you stake through a centralized exchange, you are trusting
              that platform to return your funds. "Not your keys, not your crypto" applies here too.
            </li>
          </ul>

          <H2 id="faq">5. Frequently Asked Questions</H2>
          <FAQ faqs={faqs} />

          <H2 id="conclusion">Conclusion</H2>
          <P>
            Ethereum staking turned the second-largest cryptocurrency from an energy-consuming network into
            a yield-bearing, environmentally friendly ecosystem. Whether you choose a solo validator node or
            the convenience of liquid staking, you are helping secure the network while earning rewards for it.
          </P>
          <P>
            As with any crypto investment, start small, understand the risks, and never stake money you
            cannot afford to lose.
          </P>

          <H2 id="sources">Sources & Further Reading</H2>
          <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-md">
            <li>
              <a
                href="https://ethereum.org/en/staking/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
              >
                Ethereum.org — Staking
              </a>
            </li>
            <li>
              <a
                href="https://ethereum.org/en/staking/solo-staking/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
              >
                Ethereum.org — Solo Staking
              </a>
            </li>
            <li>
              <a
                href="https://ethereum.org/en/staking/pools/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
              >
                Ethereum.org — Staking Pools
              </a>
            </li>
          </ul>

          <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-md">
              Educational Disclaimer
            </h3>
            <Disclaimer />
          </div>

          <div className="mt-lg">
            <LastUpdated modified={MODIFIED} published={PUBLISHED} />
          </div>

          <RelatedArticles currentUrl={URL} />
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
