import { Link } from "@tanstack/react-router";
import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/bitcoin-halving-mechanism.webp";
import { Plus } from "lucide-react";
import { Disclaimer } from "@/components/Disclaimer";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/bitcoin/how-does-bitcoin-halving-work";
const TITLE = "How Does Bitcoin Halving Work? | CryptoBeacon";
const DESC = "A pure mechanism breakdown of the Bitcoin halving: the block reward reduction schedule, why it's programmed, and historical dates.";
const PUBLISHED = "2026-09-12";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  {
    q: "What exactly happens during a Bitcoin halving?",
    a: "The block reward — the number of new BTC miners receive for adding a valid block — is cut in half. Before the 2024 halving it was 6.25 BTC; after the event it dropped to 3.125 BTC. This is enforced automatically by the Bitcoin protocol at every 210,000th block.",
  },
  {
    q: "When is the next Bitcoin halving?",
    a: "The next halving is expected around April 2028, when block 1,050,000 is mined. The exact date is uncertain because block times average roughly 10 minutes but fluctuate based on total network hash rate and difficulty adjustments.",
  },
  {
    q: "Does the halving guarantee a price increase?",
    a: "No. Historical data shows significant price appreciation in the 12–18 months following each halving, but correlation is not causation. Many other factors — macroeconomic conditions, regulatory developments, and broader market sentiment — influence Bitcoin's price. Past performance does not guarantee future results.",
  },
  {
    q: "What happens when all 21 million Bitcoin are mined?",
    a: "Miners will no longer receive block rewards and will rely entirely on transaction fees to sustain operations. This is projected to occur around the year 2140. The transition will be very gradual — by 2032, over 99% of all Bitcoin will already have been mined.",
  },
];




export const Route = createFileRoute("/bitcoin/how-does-bitcoin-halving-work")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/bitcoin/how-does-bitcoin-halving-work', publishedTime: PUBLISHED, section: 'Bitcoin' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "How Does Bitcoin Halving Work? | CryptoBeacon", description: "A pure mechanism breakdown of the Bitcoin halving: the block reward reduction schedule, why it's programmed, and historical dates.", imageUrl: `https://www.cryptobeacon.site${hero}`, datePublished: "2026-09-12", dateModified: "2026-09-12", url: "https://www.cryptobeacon.site/bitcoin/how-does-bitcoin-halving-work", section: "Bitcoin", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Bitcoin", item: "https://www.cryptobeacon.site/bitcoin" },
        { name: "How Does Bitcoin Halving Work? | CryptoBeacon", item: "https://www.cryptobeacon.site/bitcoin/how-does-bitcoin-halving-work" }
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
              <Link to="/bitcoin" className="hover:text-secondary">
                Bitcoin
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">How Does Bitcoin Halving Work?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#F7931A] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Bitcoin
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          How Does Bitcoin Halving Work?
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>September 12, 2026</time>}
          
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high" src={hero}
            alt="How Does Bitcoin Halving Work?"
            width={1536}
            height={896}
            className="w-full h-auto object-cover"
          />
        </figure>
        

        

        <P>The Bitcoin <Link to="/glossary#halving" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Halving">halving</Link> is a pre-programmed event that occurs every 210,000 blocks — roughly every four years — cutting the block reward given to miners in half. This mechanism ensures that the total supply of Bitcoin will never exceed 21 million coins, creating a disinflationary monetary policy that distinguishes Bitcoin from every fiat currency ever created.</P>

        <H2 id="what-is-the-halving">What Is the Bitcoin Halving?</H2>
        <P>At its core, the halving is a single line of code in the Bitcoin protocol. Every 210,000 blocks, the reward a miner receives for successfully adding a new block to the <Link to="/glossary#blockchain" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Blockchain">blockchain</Link> is reduced by 50%. When Satoshi Nakamoto launched Bitcoin in January 2009, the block reward was 50 BTC. After the first halving in November 2012, it dropped to 25 BTC. The second halving in July 2016 brought it to 12.5 BTC, the third in May 2020 reduced it to 6.25 BTC, and the most recent halving in April 2024 cut it to 3.125 BTC.</P>
        <P>This schedule will continue until approximately the year 2140, when the block reward becomes so small it rounds to zero. At that point, all 21 million Bitcoin will have been mined — though in practice, over 99% will be in circulation by the early 2030s.</P>

        <H2 id="halving-timeline">Complete Halving Timeline</H2>
        <div className="overflow-x-auto mb-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="py-sm pr-md font-headline-sm text-headline-sm text-primary">Halving</th>
                <th className="py-sm pr-md font-headline-sm text-headline-sm text-primary">Date</th>
                <th className="py-sm pr-md font-headline-sm text-headline-sm text-primary">Block</th>
                <th className="py-sm font-headline-sm text-headline-sm text-primary">Reward</th>
              </tr>
            </thead>
            <tbody className="font-body-md text-body-md text-on-surface">
              <tr className="border-b border-outline-variant"><td className="py-sm pr-md">Genesis</td><td className="py-sm pr-md">Jan 2009</td><td className="py-sm pr-md">0</td><td className="py-sm">50 BTC</td></tr>
              <tr className="border-b border-outline-variant"><td className="py-sm pr-md">1st</td><td className="py-sm pr-md">Nov 2012</td><td className="py-sm pr-md">210,000</td><td className="py-sm">25 BTC</td></tr>
              <tr className="border-b border-outline-variant"><td className="py-sm pr-md">2nd</td><td className="py-sm pr-md">Jul 2016</td><td className="py-sm pr-md">420,000</td><td className="py-sm">12.5 BTC</td></tr>
              <tr className="border-b border-outline-variant"><td className="py-sm pr-md">3rd</td><td className="py-sm pr-md">May 2020</td><td className="py-sm pr-md">630,000</td><td className="py-sm">6.25 BTC</td></tr>
              <tr className="border-b border-outline-variant"><td className="py-sm pr-md">4th</td><td className="py-sm pr-md">Apr 2024</td><td className="py-sm pr-md">840,000</td><td className="py-sm">3.125 BTC</td></tr>
              <tr><td className="py-sm pr-md">5th (est.)</td><td className="py-sm pr-md">~Apr 2028</td><td className="py-sm pr-md">1,050,000</td><td className="py-sm">1.5625 BTC</td></tr>
            </tbody>
          </table>
        </div>


        <H2 id="why-it-matters">Why the Halving Matters for Bitcoin's Value</H2>
        <P>The halving directly reduces the rate at which new Bitcoin enters circulation — the so-called <strong>issuance rate</strong> or <strong>inflation rate</strong>. After the 2024 halving, roughly 450 BTC are mined per day (down from 900 pre-halving). If demand remains constant or grows while new supply is cut in half, basic economics suggests upward price pressure.</P>
        <P>Historically, each halving has been followed by a significant bull market, though the time lag and magnitude have varied. The 2012 halving preceded a rally from ~$12 to over $1,100. The 2016 halving preceded a rise from ~$650 to nearly $20,000. The 2020 halving preceded a move from ~$8,700 to over $69,000. However, <strong>correlation is not causation</strong> — each cycle also coincided with unique macro and industry catalysts.</P>

        <H2 id="impact-on-miners">Impact on Bitcoin Miners</H2>
        <P>For miners, the halving is an existential event. Their revenue from block rewards is literally halved overnight. Miners with older, less efficient hardware or higher electricity costs are forced offline because they can no longer mine profitably. This creates a temporary drop in hash rate and a subsequent difficulty adjustment that rebalances the network.</P>
        <P>The industry trend has been clear: each halving cycle accelerates the professionalization and consolidation of <Link to="/glossary#mining" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Mining">mining</Link>. Post-2024, publicly traded miners with access to cheap renewable energy and next-generation ASICs (like the Bitmain Antminer S21) have gained market share at the expense of smaller operations. Transaction fees are also becoming an increasingly important revenue component as block rewards shrink — a trend that will only intensify in future halvings.</P>

        <div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Key Takeaways</h3>
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>The halving cuts the block reward in half every 210,000 blocks (~4 years), enforcing Bitcoin's 21-million hard cap.</li>
            <li>Each halving reduces the daily issuance of new BTC, creating supply-side scarcity that has historically preceded major bull markets.</li>
            <li>Miners face a direct 50% revenue cut, driving industry consolidation toward more efficient and better-capitalized operations.</li>
            <li>After all halvings complete (~2140), miners will rely entirely on transaction fees — a gradual transition already underway.</li>
          </ul>
        </div>

        <H2 id="common-misconceptions">Common Misconceptions</H2>
        <P>One widespread myth is that halvings automatically trigger immediate price jumps. In reality, the market often "prices in" the halving months in advance since the date is roughly predictable. The actual event itself can even produce a "sell the news" dip. The supply-demand effects play out over months, not days.</P>
        <P>Another misconception is that halvings are risky for the network's security. While some less efficient miners do go offline, Bitcoin's <Link to="/bitcoin/what-is-bitcoin-mining" className="text-secondary hover:underline">difficulty adjustment mechanism</Link> ensures the network rebalances within roughly two weeks. The hashrate typically recovers and surpasses pre-halving levels within a few months.</P>


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
