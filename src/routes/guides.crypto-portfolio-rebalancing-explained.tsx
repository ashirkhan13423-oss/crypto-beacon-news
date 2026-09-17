import { Link } from "@tanstack/react-router";
import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import hero from "@/assets/crypto-portfolio-rebalancing.webp";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/guides/crypto-portfolio-rebalancing-explained";
const TITLE = "Crypto Portfolio Rebalancing Explained (With Worked Example) | CryptoBeacon";
const DESC = "What crypto portfolio rebalancing is, when to do it, and how — with a realistic worked example showing exactly how the math works and what taxes to watch out...";
const PUBLISHED = "2026-08-25";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
export const Route = createFileRoute("/guides/crypto-portfolio-rebalancing-explained")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/guides/crypto-portfolio-rebalancing-explained', publishedTime: PUBLISHED, section: 'Guides' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "Crypto Portfolio Rebalancing Explained (With Worked Example) | CryptoBeacon", description: "What crypto portfolio rebalancing is, when to do it, and how — with a realistic worked example showing exactly how the math works and what taxes to watch out...", imageUrl: `https://www.cryptobeacon.site${hero}`, datePublished: "2026-08-25", dateModified: "2026-08-25", url: "https://www.cryptobeacon.site/guides/crypto-portfolio-rebalancing-explained", section: "Guides", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Guides", item: "https://www.cryptobeacon.site/guides" },
        { name: "Crypto Portfolio Rebalancing Explained (With Worked Example) | CryptoBeacon", item: "https://www.cryptobeacon.site/guides/crypto-portfolio-rebalancing-explained" }
      ])) }
    ],
  }),
  component: ArticlePage,
});

function P({ children }: { children: React.ReactNode }) {
  return <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">{children}</p>;
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 font-headline-md text-headline-md md:text-headline-lg text-primary mt-xxl mb-md">
      {children}
    </h2>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-outline-variant rounded-lg overflow-hidden">
      <button
        type="button"
        className="w-full flex items-center justify-between gap-md p-md text-left hover:bg-surface-container-low/50 transition-colors"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="font-headline-sm text-headline-sm text-primary">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-secondary shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-md pb-md border-t border-outline-variant">
          <p className="font-body-lg text-body-lg text-on-surface leading-relaxed pt-md">{answer}</p>
        </div>
      )}
    </div>
  );
}

function ExampleRow({
  asset,
  startValue,
  startPct,
  endValue,
  endPct,
  target,
  action,
  highlight,
}: {
  asset: string;
  startValue: string;
  startPct: string;
  endValue: string;
  endPct: string;
  target: string;
  action: string;
  highlight?: boolean;
}) {
  return (
    <tr className={`hover:bg-surface-container-low/50 ${highlight ? "bg-secondary/5" : ""}`}>
      <td className="px-md py-sm font-medium text-on-surface">{asset}</td>
      <td className="px-md py-sm text-on-surface-variant">{startValue} <span className="text-xs">({startPct})</span></td>
      <td className="px-md py-sm text-on-surface-variant">{endValue} <span className="text-xs">({endPct})</span></td>
      <td className="px-md py-sm text-on-surface-variant">{target}</td>
      <td className={`px-md py-sm font-medium ${action.startsWith("Sell") ? "text-error" : action.startsWith("Buy") ? "text-[#0F9D58]" : "text-on-surface-variant"}`}>{action}</td>
    </tr>
  );
}

function ArticlePage() {
  const faqs: { question: string; answer: string }[] = [
    {
      question: "How often should I rebalance my crypto portfolio?",
      answer: "There's no universal answer, but two common approaches are time-based (quarterly or annually) and threshold-based (rebalance when any asset drifts more than 5–10% from your target). Threshold rebalancing is generally considered more responsive to crypto's high volatility because it's triggered by actual drift rather than a calendar event.",
    },
    {
      question: "Is rebalancing a crypto portfolio taxable?",
      answer: "In most jurisdictions (including the US, UK, and Australia), selling one cryptocurrency to buy another is a taxable event — even if you reinvest the proceeds immediately. Each sale triggers a capital gain or loss calculation based on your cost basis. Tax-loss harvesting — deliberately selling assets at a loss to offset gains — is a related strategy some investors use at year-end. Consult a tax professional for your specific situation.",
    },
    {
      question: "What's a good target allocation for a crypto portfolio?",
      answer: "This depends entirely on your risk tolerance, investment horizon, and financial situation — and this article deliberately won't prescribe one. Common examples range from a simple 60/40 BTC/ETH split to portfolios with 5–10% in higher-risk altcoins. The specific allocation matters less than having one deliberately chosen and sticking to it consistently.",
    },
    {
      question: "Should I rebalance during a bull or bear market?",
      answer: "Rebalancing is a mechanical discipline — it shouldn't change based on market conditions. Threshold rebalancing triggers when assets drift beyond your set boundaries, regardless of whether that drift happens in a bull or bear market. The objective is to maintain your intended risk exposure, not to call market direction.",
    },
    {
      question: "Can I avoid taxable events by rebalancing with new deposits instead of selling?",
      answer: "Yes — this is called 'cash-flow rebalancing.' Instead of selling overweight assets, you direct new purchases exclusively toward underweight assets until the portfolio realigns. This only works if you're regularly adding funds, and it may take longer to correct large drifts. But it can significantly reduce taxable events compared to selling-based rebalancing.",
    },
  ];

  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <article>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-lg font-label-caps text-label-caps text-on-surface-variant">
          <ol className="flex flex-wrap items-center gap-xs">
            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link to="/guides" className="hover:text-secondary">Guides</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">Crypto Portfolio Rebalancing</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#2563EB] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          Crypto Portfolio Rebalancing Explained (With a Worked Example)
        </h1>

        <Author publishedDate={<time dateTime={PUBLISHED}>August 25, 2026</time>}  />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high"
            src={hero}
            alt="Abstract balance scale with glowing Bitcoin and Ethereum coins on each side, surrounded by portfolio pie-chart rings on a dark navy background"
            width={1536}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          Portfolio rebalancing is one of the oldest ideas in investing, borrowed wholesale from traditional finance and applied — imperfectly — to crypto. The core premise: you decide what percentage of your portfolio each asset should be. When market movement drifts those percentages away from your targets, you sell what's grown and buy what's shrunk back to your targets.
        </P>
        <P>
          In practice, crypto's volatility makes rebalancing both more necessary and more consequential than in a stock portfolio. A Bitcoin position that grows from 50% to 75% of your portfolio in three months isn't a subtle drift — it's a fundamentally different risk profile.
        </P>
        <P><em>This article is educational and not financial advice. Tax laws vary by jurisdiction — consult a professional.</em></P>


        <H2 id="why-rebalance">Why Bother Rebalancing?</H2>
        <P>
          Left unmanaged, a volatile portfolio tends toward concentration in whatever performed best most recently — which also tends to be the highest-risk position. If Bitcoin doubles in a year while your altcoins are flat, your Bitcoin position may have grown from 60% of your portfolio to 80%. You didn't choose 80% — you got there by doing nothing.
        </P>
        <P>
          Rebalancing forces a mechanical version of "sell high, buy low" — not based on predictions, but on restoring a pre-agreed allocation. It removes the emotional variable. You're not deciding whether Bitcoin is "too expensive" — you're restoring a ratio.
        </P>

        <H2 id="two-approaches">Two Approaches: Calendar vs. Threshold</H2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg my-lg">
          <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Calendar Rebalancing</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-sm">Rebalance on a fixed schedule — monthly, quarterly, or annually — regardless of how much the portfolio has drifted.</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Advantage:</strong> Simple, predictable. <br /><strong className="text-on-surface">Disadvantage:</strong> May miss large drifts between intervals, or trigger unnecessary trades when drift is minimal.</p>
          </div>
          <div className="p-lg rounded-xl border border-secondary/30 bg-secondary/5">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Threshold Rebalancing <span className="text-secondary text-[11px] font-label-caps uppercase tracking-wider ml-xs">Recommended</span></h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-sm">Rebalance whenever any position drifts more than X% from its target (commonly 5–10 percentage points).</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Advantage:</strong> Responsive to actual volatility — rebalances when it matters, not on a schedule. <br /><strong className="text-on-surface">Disadvantage:</strong> Requires more monitoring unless automated.</p>
          </div>
        </div>

        <H2 id="worked-example">Worked Example: A $10,000 Portfolio</H2>
        <P>
          Let's say you set a target allocation of 50% Bitcoin, 30% Ethereum, and 20% <Link to="/glossary#stablecoin" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Stablecoin">stablecoins</Link>. You start with $10,000. Three months later, Bitcoin has rallied significantly and your portfolio looks like this:
        </P>

        <div className="my-lg rounded-xl border border-outline-variant bg-surface-container-lowest overflow-hidden">
          <div className="p-md bg-surface-container-low border-b border-outline-variant">
            <p className="font-headline-sm text-headline-sm text-primary">Portfolio Snapshot — Before Rebalancing</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Starting portfolio: $10,000 | After 3 months: $12,500 | Target: 50% BTC / 30% ETH / 20% Stables</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-body-sm text-body-sm">
              <thead className="bg-surface-container-low text-on-surface-variant text-[12px] uppercase tracking-wider">
                <tr>
                  <th className="px-md py-sm font-medium">Asset</th>
                  <th className="px-md py-sm font-medium">Start Value</th>
                  <th className="px-md py-sm font-medium">Now (Drifted)</th>
                  <th className="px-md py-sm font-medium">Target %</th>
                  <th className="px-md py-sm font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                <ExampleRow asset="Bitcoin (BTC)" startValue="$5,000" startPct="50%" endValue="$7,500" endPct="60%" target="50%" action="Sell ~$1,250" highlight />
                <ExampleRow asset="Ethereum (ETH)" startValue="$3,000" startPct="30%" endValue="$3,250" endPct="26%" target="30%" action="Buy ~$500" />
                <ExampleRow asset="Stablecoins" startValue="$2,000" startPct="20%" endValue="$1,750" endPct="14%" target="20%" action="Buy ~$750" />
                <tr className="bg-surface-container-low">
                  <td className="px-md py-sm font-bold text-on-surface" colSpan={2}>Total</td>
                  <td className="px-md py-sm font-bold text-on-surface">$12,500</td>
                  <td className="px-md py-sm text-on-surface-variant" colSpan={2}>Rebalanced target: $6,250 / $3,750 / $2,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <P>
          In this example, Bitcoin drifted 10 percentage points above its target (from 50% to 60%). Under a 5% threshold rule, this would trigger a rebalance. You would sell approximately $1,250 of Bitcoin and use the proceeds to buy $500 of ETH and $750 of stablecoins to restore the 50/30/20 ratio.
        </P>
        <div className="my-md border-l-4 border-amber-500 bg-amber-500/8 p-md rounded-r-md">
          <p className="font-body-md text-body-md text-on-surface"><strong>Tax note:</strong> Selling $1,250 of Bitcoin in this example is a taxable event in most jurisdictions. If your cost basis for those coins was $800 (a $450 gain), you owe capital gains tax on $450. This is why some investors prefer cash-flow rebalancing — buying only underweight assets with new money rather than selling overweight ones.</p>
        </div>


        <H2 id="faq">Frequently Asked Questions</H2>
        <div className="space-y-sm my-lg" itemScope itemType="https://schema.org/FAQPage">
          <FAQ faqs={faqs} />
        </div>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">Financial Disclaimer</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for educational purposes only and is not financial, tax, or investment advice. Portfolio allocation decisions are personal and depend on your individual circumstances. Tax treatment of cryptocurrency varies by jurisdiction — consult a qualified tax professional before making rebalancing decisions.
          </p>
        </div>

        <RelatedArticles currentUrl={URL} />
              </article>
</main>
      <SiteFooter />
    </div>
  );
}
