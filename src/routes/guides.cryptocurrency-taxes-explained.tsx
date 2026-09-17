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

const URL = "https://www.cryptobeacon.site/guides/cryptocurrency-taxes-explained";
const TITLE = "Cryptocurrency Taxes Explained: Capital Gains, Income & Reporting | CryptoBeacon";
const DESC = "A beginner-friendly guide to cryptocurrency taxes. Learn how capital gains apply to crypto trading, how staking and airdrops are taxed as income, and how to ...";
const PUBLISHED = "2026-09-01";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  { q: "Is buying and holding crypto a taxable event?", a: "No. Simply buying cryptocurrency with fiat (like USD or EUR) and holding it in your wallet or exchange account is not a taxable event. Taxes only apply when you dispose of the asset (sell, trade, or spend it)." },
  { q: "Do I have to pay taxes if I trade one crypto for another?", a: "Yes. In most jurisdictions (including the US, UK, and Australia), trading one cryptocurrency for another (e.g., trading Bitcoin for Ethereum) is a taxable event. It is treated as selling the first asset for its fiat value, and using that fiat to buy the second. You owe capital gains on the profit made on the first asset." },
  { q: "How are crypto airdrops taxed?", a: "In most tax jurisdictions, airdrops are taxed as ordinary income based on their fair market value on the day you receive them. When you eventually sell the airdropped tokens, any increase in value from the day you received them is taxed as capital gains." },
  { q: "Will the tax authority know about my crypto?", a: "Yes. Major exchanges are legally required to report user activity to tax authorities (e.g., the IRS uses Form 1099). Furthermore, blockchains are public; tax authorities use blockchain analytics tools to trace funds moving from exchanges to private wallets." },
];




export const Route = createFileRoute("/guides/cryptocurrency-taxes-explained")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/guides/cryptocurrency-taxes-explained', publishedTime: PUBLISHED, section: 'Guides' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "Cryptocurrency Taxes Explained: Capital Gains, Income & Reporting | CryptoBeacon", description: "A beginner-friendly guide to cryptocurrency taxes. Learn how capital gains apply to crypto trading, how staking and airdrops are taxed as income, and how to ...", imageUrl: `https://www.cryptobeacon.site${""}`, datePublished: "2026-09-01", dateModified: "2026-09-01", url: "https://www.cryptobeacon.site/guides/cryptocurrency-taxes-explained", section: "Guides", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Guides", item: "https://www.cryptobeacon.site/guides" },
        { name: "Cryptocurrency Taxes Explained: Capital Gains, Income & Reporting | CryptoBeacon", item: "https://www.cryptobeacon.site/guides/cryptocurrency-taxes-explained" }
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
            <li><Link to="/guides" className="hover:text-secondary">Guides</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">Crypto Taxes Explained</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-[#EF4444] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides · Taxes
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          Cryptocurrency Taxes Explained
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          A practical primer on how crypto is taxed. Disclaimer: We are a news site, not tax professionals. Tax rules vary by country; this guide covers the general principles applied by agencies like the IRS, HMRC, and ATO.
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <div className="p-md rounded-lg bg-surface-container-low border border-outline-variant my-lg">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            <strong>Key Concept:</strong> Tax authorities generally treat cryptocurrency as "property" (like stocks or real estate), not as currency. This classification dictates how it is taxed.
          </p>
        </div>

        <H2 id="non-taxable">What is NOT taxed</H2>
        <P>You do not owe tax simply for participating in crypto. The following actions are generally non-taxable events:</P>
        <ul className="list-disc list-inside space-y-xs mb-md font-body-lg text-body-lg text-on-surface">
          <li>Buying crypto with fiat currency (USD, EUR, etc.)</li>
          <li>Holding crypto in your wallet or on an exchange (even if the price goes up 1000%)</li>
          <li>Transferring crypto between your own wallets (e.g., from an exchange to your hardware wallet)</li>
        </ul>

        <H2 id="capital-gains">Capital Gains (Disposals)</H2>
        <P>Taxes apply when you "dispose" of a crypto asset. This triggers Capital Gains Tax on the profit. Disposals include:</P>
        <div className="space-y-sm my-md">
          <div className="p-md rounded-xl border border-outline-variant bg-surface-container-lowest">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Selling for fiat</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Selling Bitcoin for USD. You owe tax on the difference between what you bought it for (cost basis) and what you sold it for.</p>
          </div>
          <div className="p-md rounded-xl border border-outline-variant bg-surface-container-lowest">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Crypto-to-crypto trades</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Trading Ethereum for Solana. The IRS views this as selling Ethereum for USD, and instantly using that USD to buy Solana. If your Ethereum gained value before the trade, you owe tax on that gain.</p>
          </div>
          <div className="p-md rounded-xl border border-outline-variant bg-surface-container-lowest">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Spending crypto on goods</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Buying a coffee with Bitcoin is legally a disposal of property. If the Bitcoin gained value since you bought it, you owe capital gains tax on that fraction of a coin.</p>
          </div>
        </div>

        <H2 id="income">Crypto as Income</H2>
        <P>Sometimes crypto is taxed as ordinary income, usually based on its fair market value on the day you receive it. Common scenarios include:</P>
        <ul className="list-disc list-inside space-y-xs mb-md font-body-lg text-body-lg text-on-surface">
          <li><strong>Mining:</strong> Receiving block rewards.</li>
          <li><strong>Staking:</strong> Receiving rewards for securing a Proof of Stake network.</li>
          <li><strong>Airdrops:</strong> Receiving free promotional tokens in your wallet.</li>
          <li><strong>Salary:</strong> Getting paid for work in crypto.</li>
        </ul>

        <H2 id="tracking">How to manage crypto taxes</H2>
        <P>Tracking the cost basis of every trade manually is impossible for active users. The industry standard is to use crypto tax software (like CoinTracker, Koinly, or TokenTax). You connect your exchanges via read-only APIs and upload your public <Link to="/glossary#wallet" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Wallet">wallet</Link> addresses, and the software calculates your capital gains and generates the necessary tax forms automatically.</P>

        <RelatedArticles currentUrl={URL} />
              </article>
</main>
      <SiteFooter />
    </div>
  );
}
