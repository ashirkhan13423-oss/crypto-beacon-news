import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdUnit } from "@/components/AdUnit";
import { Author } from "@/components/Author";
import hero from "@/assets/crypto-tax-basics.jpg";
import { ShieldCheck, Receipt } from "lucide-react";

const URL = "https://www.cryptobeacon.site/guides/crypto-tax-basics-for-beginners";
const TITLE = "Crypto Tax Basics for Beginners: What You Need to Know | CryptoBeacon";
const DESC =
  "A simplified guide to understanding cryptocurrency taxation, covering capital gains, taxable events, and why trading one crypto for another triggers a tax liability.";
const PUBLISHED = "2026-08-20";

const faqs: { q: string; a: string }[] = [
  {
    q: "Do I owe taxes just for buying and holding crypto?",
    a: "No. Simply buying cryptocurrency with fiat money and holding it in a wallet is not a taxable event. Taxes are only triggered when you sell, trade, or earn crypto.",
  },
  {
    q: "Is trading Bitcoin for Ethereum a taxable event?",
    a: "Yes, in most jurisdictions (including the US). The IRS views this as selling your Bitcoin (triggering capital gains) and immediately using the proceeds to buy Ethereum.",
  },
  {
    q: "What if I lost money on my crypto?",
    a: "You can usually claim capital losses to offset capital gains you made elsewhere. If your losses exceed your gains, you can often deduct a portion of the loss from your ordinary income.",
  },
  {
    q: "Do exchanges report to the IRS?",
    a: "Yes. Major exchanges operating in regulated jurisdictions are increasingly required to report customer activity and issue tax forms (like 1099s) to both you and the tax authorities.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: TITLE,
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Person",
    name: "Ashir",
    url: "https://www.cryptobeacon.site/author",
    worksFor: { "@type": "Organization", name: "CryptoBeacon" },
  },
  publisher: {
    "@type": "Organization",
    name: "CryptoBeacon",
    logo: {
      "@type": "ImageObject",
      url: "https://www.cryptobeacon.site/favicon.png",
    },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  image: `https://www.cryptobeacon.site${hero}`,
  inLanguage: "en-US",
  keywords:
    "crypto tax guide, how is crypto taxed, crypto capital gains, do i have to pay taxes on crypto, taxable events crypto",
  articleSection: "Guides",
  wordCount: 1350,
  isAccessibleForFree: true,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.cryptobeacon.site/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: "https://www.cryptobeacon.site/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Crypto Tax Basics",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/guides/crypto-tax-basics-for-beginners")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:section", content: "Guides" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "https://www.cryptobeacon.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
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
            <li className="text-primary">Crypto Tax Basics</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#2563EB] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          Crypto Tax Basics for Beginners
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 20, 2026</time>}
          readTime="8 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high" src={hero}
            alt="Sleek digital calculator hovering over glowing crypto coins"
            width={1600}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          One of the rudest awakenings for new cryptocurrency investors is tax season. Because the
          crypto ecosystem feels separate from the traditional banking system, many assume it is also
          separate from tax authorities. This is a dangerous misconception.
        </P>
        <P>
          In most major jurisdictions, including the United States, tax agencies treat cryptocurrency
          as property, not currency. This means that almost every time you do something with your
          crypto — other than just holding it or moving it between your own wallets — you are likely
          triggering a taxable event.
        </P>
        <P>
          I made the classic beginner mistake in 2021 of trading dozens of obscure altcoins back and forth without realizing every single swap was a taxable event. Come tax season, I had to spend three days untangling a massive web of transactions just to figure out my cost basis.
        </P>

        {/* Layout A: Executive Summary Top Card */}
        <div className="my-xl p-lg rounded-xl border border-outline-variant bg-surface-container-low shadow-sm">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-md flex items-center gap-xs">
            <Receipt className="text-[#0F9D58] w-6 h-6 shrink-0" /> Executive Summary: The Golden Rules
          </h2>
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed">
            <li>
              <strong>Buying is not taxable:</strong> Purchasing crypto with cash and holding it triggers no taxes.
            </li>
            <li>
              <strong>Selling is taxable:</strong> Selling crypto for cash triggers capital gains (or losses).
            </li>
            <li>
              <strong>Trading is taxable:</strong> Swapping one crypto for another (e.g., BTC to ETH) is a taxable event.
            </li>
            <li>
              <strong>Earning is taxable:</strong> Receiving crypto from mining, staking, or airdrops is usually taxed as ordinary income based on the fair market value at receipt.
            </li>
          </ul>
        </div>

        <aside className="my-xl p-lg rounded-lg border border-outline-variant bg-surface-container-low">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-sm">
            Table of Contents
          </h2>
          <ol className="list-decimal list-inside space-y-xs font-body-md text-body-md text-on-surface">
            <li>
              <a href="#property" className="hover:underline decoration-secondary">
                Crypto is Treated as Property
              </a>
            </li>
            <li>
              <a href="#taxable-events" className="hover:underline decoration-secondary">
                What is a Taxable Event?
              </a>
            </li>
            <li>
              <a href="#non-taxable" className="hover:underline decoration-secondary">
                What is NOT a Taxable Event?
              </a>
            </li>
            <li>
              <a href="#record-keeping" className="hover:underline decoration-secondary">
                The Importance of Record Keeping
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline decoration-secondary">
                Frequently Asked Questions
              </a>
            </li>
          </ol>
        </aside>

        <H2 id="property">1. Crypto is Treated as Property</H2>
        <P>
          To understand crypto taxes, you must understand how the IRS (and similar agencies globally, such as HMRC in the UK)
          classifies it. They view cryptocurrency not as a "currency" or "money," but as property — much like a stock, a bond, or a piece of real estate.
        </P>
        <P>
          When you buy property and sell it later for a higher price, you owe capital gains tax on the
          profit. If you sell it for less than you paid, you have a capital loss, which can often be
          used to lower your overall tax bill by offsetting other gains. The amount you originally paid for the crypto, plus any
          associated trading fees or commissions, is known as your <strong>cost basis</strong>. 
        </P>
        <P>
          If you hold the asset for less than a year before selling, it is typically subject to short-term capital gains tax (which is usually the same as your ordinary income tax rate). If you hold it for more than a year, it qualifies for long-term capital gains rates, which are historically significantly lower.
        </P>

        <H2 id="taxable-events">2. What Constitutes a Taxable Event?</H2>
        <P>
          A taxable event is any action that forces you to realize a gain or a loss. The most common
          crypto taxable events include:
        </P>
        <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li><strong>Selling crypto for fiat (USD):</strong> The most obvious event. If you bought 1 BTC for $10k and sold it for $50k, you owe taxes on the $40k profit. The exchange you use will likely report this sale to the tax authorities.</li>
          <li><strong>Trading one crypto for another:</strong> If you trade $1,000 worth of Bitcoin for $1,000 worth of Ethereum, the IRS views this as you selling your Bitcoin for $1,000 in cash, and then immediately using that cash to buy Ethereum. If your Bitcoin had increased in value since you bought it, you owe taxes on that gain, even though you never actually cashed out to a bank account. This is the rule that catches most beginners off guard.</li>
          <li><strong>Buying goods or services with crypto:</strong> If you use Bitcoin to buy a cup of coffee (or a car), you are technically selling that fraction of a Bitcoin. If it appreciated since you bought it, you owe capital gains tax on the transaction, no matter how small.</li>
        </ul>

        <AdUnit />

        <H2 id="non-taxable">3. What is NOT a Taxable Event?</H2>
        <P>
          Fortunately, not everything you do in crypto is taxed. The following actions generally do
          not trigger a tax liability:
        </P>
        <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li><strong>Buying and holding:</strong> Purchasing crypto with fiat and leaving it in your wallet.</li>
          <li><strong>Transferring between your own wallets:</strong> Moving Bitcoin from your Coinbase account to your Ledger hardware wallet is not a sale. It is like moving money from your left pocket to your right pocket. (Though transfer fees might complicate the cost basis).</li>
          <li><strong>Gifting crypto:</strong> Giving crypto to a friend or family member is usually tax-free up to a certain annual limit (though the recipient inherits your cost basis).</li>
        </ul>

        <H2 id="record-keeping">4. The Importance of Record Keeping</H2>
        <P>
          Because every crypto-to-crypto trade is a taxable event, active traders can easily generate
          thousands of taxable events in a single year. Calculating the cost basis for each of these
          trades manually is virtually impossible.
        </P>
        <P>
          This is why using dedicated crypto tax software (like CoinTracker, Koinly, or TaxBit) is
          almost mandatory for anyone who trades. These services connect to your exchanges and wallets
          via read-only APIs, automatically track your cost basis, and generate the necessary tax
          forms.
        </P>

        <H2 id="faq">5. Frequently Asked Questions</H2>
        {/* Layout A: 2-column Grid FAQ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md mb-xl">
          {faqs.map((f) => (
            <div key={f.q} className="p-lg rounded-xl border border-outline-variant bg-surface-container-low flex flex-col">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-sm font-semibold">
                {f.q}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {f.a}
              </p>
            </div>
          ))}
        </div>

        <H2 id="conclusion">Conclusion</H2>
        <P>
          Ignoring crypto taxes is not a viable strategy. Tax authorities possess sophisticated
          blockchain analysis tools and receive data directly from major exchanges. By understanding
          what triggers a taxable event and utilizing automated tax software, you can stay compliant
          without losing your sanity.
        </P>

        <H2 id="sources">Sources & Further Reading</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              IRS.gov — Frequently Asked Questions on Virtual Currency Transactions
            </a>
          </li>
          <li>
            <a
              href="https://www.irs.gov/pub/irs-drop/n-14-21.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              IRS Notice 2014-21 (Original guidance treating virtual currency as property)
            </a>
          </li>
        </ul>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Important Tax Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is intended for general educational purposes only and does not constitute
            legal or tax advice. Tax laws vary significantly by jurisdiction and change frequently.
            Always consult with a certified public accountant (CPA) or tax professional regarding your
            specific situation.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/bitcoin/how-to-buy-your-first-bitcoin-safely"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Buy Your First Bitcoin Safely
              </h3>
            </Link>
            <Link
              to="/guides/hardware-wallet-comparison-guide"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Hardware Wallet Comparison
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

