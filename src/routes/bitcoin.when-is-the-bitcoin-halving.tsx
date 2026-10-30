import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/when-is-bitcoin-halving.webp";
import { Disclaimer } from "@/components/Disclaimer";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/bitcoin/when-is-the-bitcoin-halving";
const TITLE = "When Is the Bitcoin Halving? Next Date, Cycle & Schedule";
const DESC = "When is the next Bitcoin halving? Discover projected 2028 dates, block countdown metrics, historic market cycles, and the complete supply schedule.";
const PUBLISHED = "2026-10-30";
let MODIFIED = PUBLISHED;
let keyTakeaway = "The next Bitcoin halving will take place at block 1,050,000, projected for approximately April 2028, cutting issuance from 3.125 to 1.5625 BTC.";

const faqs: { q: string; a: string }[] = [
  {
    q: "When is the next Bitcoin halving date?",
    a: "The 5th Bitcoin halving is estimated to occur in April 2028 when the network produces block height 1,050,000. Because block validation depends on fluctuating hash rates and mining difficulty adjustments, the exact calendar day can only be confirmed as that block draws close.",
  },
  {
    q: "How often does a Bitcoin halving happen?",
    a: "Halvings take place every 210,000 confirmed blocks rather than on fixed calendar schedules. With Bitcoin target block intervals averaging 10 minutes, 210,000 blocks take approximately 3.9 to 4 years to complete.",
  },
  {
    q: "What was the date and reward of the last Bitcoin halving?",
    a: "The 4th Bitcoin halving took place on April 20, 2024 at block height 840,000. It sliced the block reward from 6.25 BTC down to 3.125 BTC per newly discovered block.",
  },
  {
    q: "When will the final Bitcoin halving happen?",
    a: "The 32nd and final halving is calculated to take place around the year 2140 at block 6,930,000. At that stage, all 21 million Bitcoins will be mined, and miner revenue will derive purely from transaction fees.",
  },
  {
    q: "Does the Bitcoin halving date affect transaction fees?",
    a: "Yes, indirectly. Because miner block subsidies are cut by 50%, miners become more reliant on network transaction fees. During high on-chain activity surrounding halving events, competition for block space frequently causes temporary surges in transaction priority fees.",
  },
];

export const Route = createFileRoute("/bitcoin/when-is-the-bitcoin-halving")({
  head: () => ({
    ...buildMetadata({
      title: TITLE,
      description: DESC,
      url: URL,
      type: "article",
      path: "/bitcoin/when-is-the-bitcoin-halving",
      publishedTime: PUBLISHED,
      section: "Bitcoin",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildArticleSchema({
            headline: TITLE,
            description: DESC,
            imageUrl: `https://www.cryptobeacon.site${hero}`,
            datePublished: PUBLISHED,
            dateModified: MODIFIED,
            url: URL,
            section: "Bitcoin",
            isNews: false,
          })
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildFAQSchema(faqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbSchema([
            { name: "Home", item: "https://www.cryptobeacon.site/" },
            { name: "Bitcoin", item: "https://www.cryptobeacon.site/bitcoin" },
            { name: TITLE, item: URL },
          ])
        ),
      },
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
    <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
      {children}
    </p>
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
                <Link to="/bitcoin" className="hover:text-secondary">
                  Bitcoin
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-primary">When is the Bitcoin Halving?</li>
            </ol>
          </nav>

          <span className="inline-block px-sm py-xs rounded-full bg-[#F7931A] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
            Bitcoin
          </span>

          <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
            When Is the Bitcoin Halving? Next Projected Dates & Complete Schedule
          </h1>

          <Author
            publishedDate={<time dateTime={PUBLISHED}>October 30, 2026</time>}
          />

          <LastUpdated date={MODIFIED} />

          <KeyTakeaway text={keyTakeaway} />

          <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
            <img
              fetchPriority="high"
              src={hero}
              alt="Bitcoin halving timeline visualization showing block height progression from block 840,000 toward the next halving target at block 1,050,000"
              width={1536}
              height={864}
              className="w-full h-auto object-cover"
            />
            <figcaption className="p-sm text-center font-label-md text-label-md text-on-surface-variant bg-surface-container-lowest">
              Bitcoin halving schedule progression tracking current block height toward the 5th halving milestone at block 1,050,000.
            </figcaption>
          </figure>

          <P>
            Few programmatic events command as much global financial scrutiny as the Bitcoin halving. Whether you track institutional exchange-traded funds, operate ASIC mining hardware, or accumulate satoshis through recurring purchases, calculating <strong>when is the Bitcoin halving</strong> provides critical insight into digital asset supply dynamics.
          </P>
          <P>
            Unlike traditional central bank policy revisions that depend on discretionary committee meetings, Bitcoin issuance operates entirely by math. In this comprehensive guide, we examine the precise calendar projection for the next halving, the computational mechanics behind block time variations, the full historical timeline, and how this programmatic supply reduction influences market liquidity.
          </P>
          <P>
            <em>This article is educational. It isn't financial advice.</em>
          </P>

          <TableOfContents />

          <H2 id="when-is-the-next-bitcoin-halving">When Is the Next Bitcoin Halving?</H2>
          <P>
            The 5th Bitcoin halving is scheduled to occur at <strong>block 1,050,000</strong>, with consensus models projecting an arrival window around <strong>mid-to-late April 2028</strong>. During this milestone, the block subsidy awarded to successful miners will be cut from 3.125 BTC to <strong>1.5625 BTC</strong> per block.
          </P>
          <P>
            Why is the date an approximation rather than a fixed calendar day? The Bitcoin protocol does not measure real-world human clocks; it advances strictly by block height. Satoshi Nakamoto designed the network to generate one new block every 10 minutes on average. If mining participation explodes and hashrate climbs rapidly, blocks settle slightly faster than 10 minutes. Conversely, if sudden energy constraints or regulatory crackdowns cause miners to disconnect, block generation briefly decelerates until the built-in difficulty recalibration restores equilibrium.
          </P>
          <P>
            Consequently, countdown clocks provide dynamic estimates. As the network traverses blocks through the current 4-year cycle, real-time hash rate fluctuations continuously shift the estimated date by days or weeks.
          </P>

          <H2 id="the-block-height-mechanism">The Block Height Mechanism Explained</H2>
          <P>
            To understand the timing precision, one must review how Bitcoin balances time and security. Every 2,016 blocks—approximately every two weeks—Bitcoin runs its difficulty adjustment algorithm. If the average block discovery time over the prior two-week epoch was 9.5 minutes instead of 10 minutes, the network increases cryptographic puzzle difficulty to slow discovery back toward the 10-minute target.
          </P>
          <P>
            Because halvings trigger every 210,000 blocks, we can calculate the theoretical duration using simple arithmetic:
          </P>
          <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-low mb-lg font-mono text-sm leading-relaxed">
            <p className="text-secondary font-semibold mb-xs">Halving Interval Formula:</p>
            <p>210,000 blocks × 10 minutes = 2,100,000 minutes</p>
            <p>2,100,000 minutes ÷ 60 minutes/hour = 35,000 hours</p>
            <p>35,000 hours ÷ 24 hours/day ≈ 1,458.33 days</p>
            <p>1,458.33 days ÷ 365.25 days/year ≈ 3.993 years</p>
          </div>
          <P>
            This mathematical elegance ensures that regardless of whether miners use early desktop CPUs or massive industrial solar-powered facilities, the timeline remains remarkably stable across multi-year horizons.
          </P>

          <H2 id="complete-bitcoin-halving-schedule">Complete Bitcoin Halving Schedule: Past, Present & Future</H2>
          <P>
            To contextualize where the network stands today, reviewing the complete lifecycle of block subsidy reductions clarifies Bitcoin's disinflationary arc. Below is the historical and projected roadmap:
          </P>

          <div className="overflow-x-auto my-lg rounded-lg border border-outline-variant">
            <table className="w-full text-left font-body-md text-sm">
              <thead className="bg-surface-container-high text-primary border-b border-outline-variant font-label-caps uppercase tracking-wider text-xs">
                <tr>
                  <th className="p-md">Halving #</th>
                  <th className="p-md">Target Block</th>
                  <th className="p-md">Execution Date</th>
                  <th className="p-md">Block Reward (BTC)</th>
                  <th className="p-md">Annual Inflation Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant bg-surface-container-lowest">
                <tr>
                  <td className="p-md font-semibold">Genesis</td>
                  <td className="p-md">Block 0</td>
                  <td className="p-md">January 3, 2009</td>
                  <td className="p-md">50.00 BTC</td>
                  <td className="p-md">High (Initial)</td>
                </tr>
                <tr>
                  <td className="p-md font-semibold">1st Halving</td>
                  <td className="p-md">Block 210,000</td>
                  <td className="p-md">November 28, 2012</td>
                  <td className="p-md">25.00 BTC</td>
                  <td className="p-md">~12.5%</td>
                </tr>
                <tr>
                  <td className="p-md font-semibold">2nd Halving</td>
                  <td className="p-md">Block 420,000</td>
                  <td className="p-md">July 9, 2016</td>
                  <td className="p-md">12.50 BTC</td>
                  <td className="p-md">~4.1%</td>
                </tr>
                <tr>
                  <td className="p-md font-semibold">3rd Halving</td>
                  <td className="p-md">Block 630,000</td>
                  <td className="p-md">May 11, 2020</td>
                  <td className="p-md">6.25 BTC</td>
                  <td className="p-md">~1.8%</td>
                </tr>
                <tr>
                  <td className="p-md font-semibold">4th Halving</td>
                  <td className="p-md">Block 840,000</td>
                  <td className="p-md">April 20, 2024</td>
                  <td className="p-md">3.125 BTC</td>
                  <td className="p-md">~0.85%</td>
                </tr>
                <tr className="bg-secondary/5 font-semibold">
                  <td className="p-md text-secondary">5th Halving (Next)</td>
                  <td className="p-md">Block 1,050,000</td>
                  <td className="p-md">Estimated April 2028</td>
                  <td className="p-md">1.5625 BTC</td>
                  <td className="p-md">~0.42%</td>
                </tr>
                <tr>
                  <td className="p-md">6th Halving</td>
                  <td className="p-md">Block 1,260,000</td>
                  <td className="p-md">Estimated 2032</td>
                  <td className="p-md">0.78125 BTC</td>
                  <td className="p-md">~0.21%</td>
                </tr>
                <tr>
                  <td className="p-md">32nd (Final)</td>
                  <td className="p-md">Block 6,930,000</td>
                  <td className="p-md">Estimated ~2140</td>
                  <td className="p-md">0.00000000 BTC</td>
                  <td className="p-md">0.00% (Cap Reached)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <H2 id="why-the-halving-schedule-matters">Why the Halving Schedule Matters to Investors and Miners</H2>
          <P>
            The fundamental economic rationale of the halving centers on supply shock economics. In fiat economies, central banks expand money supply through monetary easing, which dilutes purchasing power over extended periods. In contrast, Bitcoin incorporates absolute digital scarcity: exactly 21 million units will ever exist.
          </P>
          <P>
            To dive deeper into the technical mechanics of transaction verification, you can explore our detailed explainer on{" "}
            <Link to="/bitcoin/how-does-bitcoin-halving-work" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4">
              how does Bitcoin halving work
            </Link>{" "}
            as well as our foundational review on{" "}
            <Link to="/bitcoin/what-is-the-bitcoin-halving" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4">
              what is the Bitcoin halving
            </Link>.
          </P>
          
          <h3 className="font-headline-sm text-headline-sm text-primary mt-lg mb-sm">
            1. Miner Revenue & Operational Viability
          </h3>
          <P>
            When a halving strikes, miners immediately experience a 50% decrease in block rewards for identical electricity expenditure. Less efficient mining operators running older hardware risk becoming uncompetitive unless Bitcoin prices appreciate or transaction fees compensate for the revenue delta. Many miners upgrade rigs, relocate to regions with cheaper surplus hydro or geothermal power, or hedge their output in derivatives markets. Readers curious about infrastructure energy demands can consult our analysis on{" "}
            <Link to="/bitcoin/why-bitcoin-mining-uses-so-much-energy" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4">
              why Bitcoin mining uses so much energy
            </Link>.
          </P>

          <h3 className="font-headline-sm text-headline-sm text-primary mt-lg mb-sm">
            2. Macroeconomic Liquidity and Institutional Inflows
          </h3>
          <P>
            Historically, each halving cycle has preceded an extended market bull run occurring 12 to 18 months post-event. However, market observers emphasize that diminishing new issuance interacts directly with broader macro factors. For instance, institutional capital through spot exchange-traded funds and shifting interest rates play a monumental role in asset pricing, as outlined in our report on{" "}
            <Link to="/bitcoin/how-do-bitcoin-etfs-affect-price" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4">
              how Bitcoin ETFs affect price
            </Link>{" "}
            and{" "}
            <Link to="/bitcoin/why-do-bond-yields-affect-bitcoin-price" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4">
              why bond yields affect Bitcoin price
            </Link>.
          </P>

          <H2 id="how-to-track-the-halving-countdown">How to Track the Halving Countdown Accurately</H2>
          <P>
            If you want to track the exact countdown to the next halving, looking at calendar dates alone is insufficient. Instead, monitor these two on-chain metrics:
          </P>
          <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
            <li>
              <strong>Current Block Height:</strong> By inspecting a reliable block explorer, check how many blocks remain between the current block and block 1,050,000. For guidance on reading raw chain metrics, review{" "}
              <Link to="/guides/how-to-read-a-block-explorer" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4">
                how to read a block explorer
              </Link>.
            </li>
            <li>
              <strong>Average Block Generation Time:</strong> If the 14-day rolling average block discovery rate sits below 10 minutes, the halving will arrive slightly ahead of projected calendar dates.
            </li>
            <li>
              <strong>Mining Hashrate Trends:</strong> Significant hashrate migrations indicate expanding industrial operations, accelerating block production until the next 2,016-block difficulty retarget.
            </li>
          </ul>

          <H2 id="securing-your-bitcoin-across-halvings">Securing Your Bitcoin Across Halving Cycles</H2>
          <P>
            As public interest surges around halving milestones, scam campaigns, fake giveaways, and phishing attempts spike across social media. Securing private keys in self-custody cold storage remains the gold standard for long-term holders.
          </P>
          <P>
            Beginners can read our comprehensive walkthroughs on{" "}
            <Link to="/bitcoin/how-to-buy-your-first-bitcoin-safely" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4">
              how to buy your first Bitcoin safely
            </Link>, verify storage security with{" "}
            <Link to="/guides/hot-wallets-vs-cold-wallets-explained" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4">
              hot wallets vs cold wallets explained
            </Link>, and safeguard backups using our guide on{" "}
            <Link to="/security/how-to-store-crypto-seed-phrase-safely" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4">
              how to store crypto seed phrases safely
            </Link>.
          </P>

          <H2 id="frequently-asked-questions">Frequently Asked Questions</H2>
          <div className="divide-y divide-outline-variant border-y border-outline-variant mb-xl">
            <FAQ faqs={faqs} />
          </div>

          <H2 id="sources">Sources & Further Reading</H2>
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
            <li>
              <a
                href="https://bitcoin.org/bitcoin.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
              >
                Nakamoto, S. (2008). Bitcoin: A Peer-to-Peer Electronic Cash System.
              </a>
            </li>
            <li>
              <a
                href="https://en.bitcoin.it/wiki/Controlled_supply"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
              >
                Bitcoin Wiki — Controlled Supply & Block Generation Rules
              </a>
            </li>
            <li>
              <a
                href="https://mempool.space"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
              >
                Mempool Space — Real-time Bitcoin Block Height & Difficulty Statistics
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
