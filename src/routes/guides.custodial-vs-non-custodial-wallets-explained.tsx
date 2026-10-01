import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";
import hero from "@/assets/exchange-vs-wallet.webp";

const URL = "https://www.cryptobeacon.site/guides/custodial-vs-non-custodial-wallets-explained";
const TITLE = "Custodial vs Non-Custodial Crypto Wallets Compared";
const DESC = "Understand the critical differences between custodial (exchange) and non-custodial (self-hosted) wallets to decide where you should store your crypto.";
const PUBLISHED = "2026-10-02";
let MODIFIED = PUBLISHED;
let keyTakeaway = "If you hold a small amount, a reputable custodial exchange is fine. If you hold a significant percentage of your net worth, non-custodial cold storage is mandatory.";

const faqs = [
  { q: "Is Coinbase a custodial or non-custodial wallet?", a: "The main Coinbase app is custodial. However, they also offer the 'Coinbase Wallet' app, which is a separate, non-custodial product." },
  { q: "What happens if I forget my non-custodial wallet password?", a: "If you have your seed phrase (12-24 words), you can restore your wallet on any device. If you lose both the password and the seed phrase, your funds are gone forever." },
  { q: "Can a non-custodial wallet go bankrupt?", a: "No. A non-custodial wallet is just an interface to the blockchain. The company behind it doesn't hold your funds, so their financial status doesn't affect your crypto." }
];

export const Route = createFileRoute("/guides/custodial-vs-non-custodial-wallets-explained")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/guides/custodial-vs-non-custodial-wallets-explained', publishedTime: PUBLISHED, section: 'Guides' }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: TITLE, description: DESC, imageUrl: "", datePublished: PUBLISHED, dateModified: MODIFIED, url: URL, section: "Guides", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Guides", item: "https://www.cryptobeacon.site/guides" },
        { name: TITLE, item: URL }
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
            <li className="text-primary">Custodial vs Non-Custodial</li>
          </ol>
        </nav>
        <span className="inline-block px-sm py-xs rounded-full bg-blue-600 text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides · Wallets
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          Custodial vs Non-Custodial Wallets: Which Should Beginners Use?
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          The most important decision in crypto is who holds your private keys. Here is the breakdown between custodial and non-custodial solutions.
        </p>
        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <H2 id="custodial">Custodial Wallets (The Bank Model)</H2>
        <P>A custodial wallet means a third party (usually an exchange like Binance or Kraken) holds the private keys to your crypto. You are essentially holding an "IOU" from the platform.</P>
        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface mb-xl">
          <li><strong>Pros:</strong> Extremely easy to use. If you forget your password, you can reset it via email or ID verification. Zero transaction fees to trade within the platform.</li>
          <li><strong>Cons:</strong> "Not your keys, not your coins." If the exchange is hacked, goes bankrupt, or decides to freeze your account, you lose access to your funds.</li>
        </ul>

        <H2 id="non-custodial">Non-Custodial Wallets (The Cash Model)</H2>
        <P>A non-custodial wallet (like MetaMask, Trust Wallet, or a Ledger hardware wallet) gives you total, exclusive control over your private keys. You are your own bank.</P>
        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface mb-xl">
          <li><strong>Pros:</strong> Complete censorship resistance. Nobody can freeze your account or prevent you from transacting. You can interact directly with DeFi protocols.</li>
          <li><strong>Cons:</strong> Complete responsibility. If you lose your 12-24 word seed phrase, or if you fall for a phishing scam, there is no customer support to reverse the transaction or recover your funds.</li>
        </ul>

        <H2 id="verdict">The Verdict for Beginners</H2>
        <P>For absolute beginners buying their first $100 to $500 of crypto, using a highly regulated custodial exchange (like Coinbase or Kraken) is the safest starting point. The risk of making a self-custody error is higher than the risk of a top-tier exchange collapsing.</P>
        <P>However, as your portfolio grows into the thousands of dollars, the equation flips. At that point, transitioning to a non-custodial hardware wallet becomes essential to eliminate counterparty risk.</P>

        <FAQ faqs={faqs} />
        <RelatedArticles currentUrl={URL} />
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
