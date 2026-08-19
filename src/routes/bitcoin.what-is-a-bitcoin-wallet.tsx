import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdUnit } from "@/components/AdUnit";
import { Author } from "@/components/Author";
import hero from "@/assets/bitcoin-what-is-a-wallet.png";
import { Plus, Wifi, WifiOff, Building2 } from "lucide-react";

const URL = "https://www.cryptobeacon.site/bitcoin/what-is-a-bitcoin-wallet";
const TITLE = "What Is a Bitcoin Wallet? Hot, Cold, and Custodial Wallets Explained | CryptoBeacon";
const DESC =
  "A clear guide to what a Bitcoin wallet actually is, how hot, cold, and custodial wallets differ, and how to choose the right type for your situation.";
const PUBLISHED = "2026-08-06";

const faqs: { q: string; a: string }[] = [
  {
    q: "Does a Bitcoin wallet store Bitcoin?",
    a: "No — Bitcoin itself lives on the blockchain. A wallet stores the private keys that prove ownership and allow you to sign transactions moving those funds.",
  },
  {
    q: "What's the difference between a hot and cold wallet?",
    a: "A hot wallet is connected to the internet (e.g. a mobile or desktop app), which makes it more convenient but more exposed to online threats. A cold wallet stores keys offline (e.g. a hardware device or paper), reducing that exposure at the cost of some convenience.",
  },
  {
    q: "Is it safe to keep Bitcoin on an exchange?",
    a: "An exchange holds your Bitcoin on your behalf using a custodial wallet — you don't control the private keys. This is convenient but means your access depends on the platform's security and continued operation.",
  },
  {
    q: "Can I have multiple Bitcoin wallets?",
    a: "Yes — and many people do, using different types for different purposes: a hot wallet for small, regular amounts and a cold wallet for long-term holdings.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "What Is a Bitcoin Wallet? Hot, Cold, and Custodial Wallets Explained",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Person",
    name: "Sarah Jenkins",
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
    "what is a bitcoin wallet, bitcoin hot wallet vs cold wallet, custodial vs non-custodial wallet, how does a crypto wallet work, bitcoin wallet types explained",
  articleSection: "Bitcoin",
  wordCount: 900,
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
      name: "Bitcoin",
      item: "https://www.cryptobeacon.site/bitcoin",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "What Is a Bitcoin Wallet?",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/bitcoin/what-is-a-bitcoin-wallet")({
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
      { property: "article:section", content: "Bitcoin" },
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

const walletTypes = [
  {
    icon: <Wifi />,
    title: "Hot Wallet",
    subtitle: "Software / Online",
    body: "Connected to the internet. Convenient for regular use and small amounts. Mobile apps, browser extensions, and desktop wallets all fall into this category.",
    note: "Higher convenience, higher online exposure",
    noteColor: "#F59E0B",
  },
  {
    icon: <WifiOff />,
    title: "Cold Wallet",
    subtitle: "Hardware / Offline",
    body: "Keys are stored offline on a dedicated physical device or paper. Better suited for long-term storage of significant amounts you don't need to access frequently.",
    note: "Lower convenience, lower online exposure",
    noteColor: "#0F9D58",
  },
  {
    icon: <Building2 />,
    title: "Custodial Wallet",
    subtitle: "Exchange / Platform",
    body: "Managed by a third party (usually an exchange). You don't hold the private keys — the platform does. Convenient, but your access depends on the platform's continued operation.",
    note: "Easiest to use — you don't control the keys",
    noteColor: "#2563EB",
  },
];

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
              <Link to="/bitcoin" className="hover:text-secondary">
                Bitcoin
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">What Is a Bitcoin Wallet?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#F7931A] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Bitcoin
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          What Is a Bitcoin Wallet? Hot, Cold, and Custodial Wallets Explained
        </h1>

        <Author
          publishedDate={<time dateTime={PUBLISHED}>August 6, 2026</time>}
          readTime="5 min read"
        />

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            src={hero}
            alt="Illustration contrasting a hot software wallet and a cold hardware wallet for Bitcoin"
            width={1024}
            height={1024}
            className="w-full h-auto"
          />
        </figure>

        <P>
          "Bitcoin wallet" is one of those terms that sounds straightforward until you try to
          explain it. A wallet doesn't hold Bitcoin the way a physical wallet holds cash.
          Understanding what it actually does — and why there are so many different types — makes
          everything else about using Bitcoin clearer.
        </P>
        <P>
          <em>This article is educational. It isn't financial advice.</em>
        </P>

        <div className="my-xl grid grid-cols-1 md:grid-cols-3 gap-md">
          <div className="p-md rounded-xl border border-outline-variant bg-surface-container-low text-center">
            <Wifi className="w-8 h-8 text-secondary mx-auto mb-xs" />
            <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Hot Wallet</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Online, convenient for daily use. Higher exposure to threats.</p>
          </div>
          <div className="p-md rounded-xl border border-outline-variant bg-surface-container-low text-center">
            <WifiOff className="w-8 h-8 text-secondary mx-auto mb-xs" />
            <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Cold Wallet</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Offline, best for long-term storage. Keys never touch the internet.</p>
          </div>
          <div className="p-md rounded-xl border border-outline-variant bg-surface-container-low text-center">
            <Building2 className="w-8 h-8 text-secondary mx-auto mb-xs" />
            <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Custodial</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Third party holds keys. Easiest to use but carries counterparty risk.</p>
          </div>
        </div>

        <H2 id="what-wallet-does">1. What a Wallet Actually Does</H2>
        <P>
          Bitcoin itself never moves — it exists as a record on the blockchain, a public ledger that
          anyone can read. What changes is which address the Bitcoin is associated with. A Bitcoin
          wallet's real job is to store and manage the <strong>private key</strong> — the
          cryptographic secret that proves you have the right to authorise a transaction from a
          given address.
        </P>
        <P>
          Think of your Bitcoin address as an account number you can share freely, and your private
          key as the only signature that can authorise spending from it. If you lose the private
          key, you lose access to the Bitcoin permanently. If someone else gets it, they can move
          your Bitcoin without your permission.
        </P>
        <P>
          This is why the phrase{" "}
          <Link
            to="/guides/not-your-keys-not-your-coins-meaning"
            className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
          >
            "not your keys, not your coins"
          </Link>{" "}
          matters — it's a direct description of how wallet ownership actually works.
        </P>

        <AdUnit />

        <H2 id="wallet-types">2. Three Types of Bitcoin Wallet</H2>
        <P>
          Wallets are most usefully divided by two factors: whether they're connected to the
          internet, and who controls the private keys.
        </P>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-md my-lg">
          {walletTypes.map((w) => (
            <div
              key={w.title}
              className="p-lg rounded-lg border border-outline-variant bg-surface-container-lowest flex flex-col gap-sm"
            >
              <div
                aria-hidden
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 [&>svg]:w-5 [&>svg]:h-5"
                style={{
                  backgroundColor: `${w.noteColor}18`,
                  border: `1px solid ${w.noteColor}30`,
                  color: w.noteColor,
                }}
              >
                {w.icon}
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary">{w.title}</h3>
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider">
                  {w.subtitle}
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed flex-grow">
                {w.body}
              </p>
              <p
                className="font-label-caps text-[11px] uppercase tracking-wider font-semibold"
                style={{ color: w.noteColor }}
              >
                {w.note}
              </p>
            </div>
          ))}
        </div>

        <H2 id="which-to-use">3. Which Type Is Right for You?</H2>
        <P>
          There's no single right answer — most experienced Bitcoin holders use a combination. A
          practical starting framework:
        </P>
        <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li>
            <strong>If you're new and just buying small amounts</strong> to learn with, an exchange
            or reputable mobile hot wallet is reasonable. The trade-off is that you're trusting the
            platform (exchange) or accepting more online exposure (hot wallet).
          </li>
          <li>
            <strong>If you're holding a meaningful amount long-term</strong> and don't need to
            access it regularly, a hardware cold wallet significantly reduces your exposure to
            online threats. The trade-off is physical security of the device and{" "}
            <Link
              to="/security/how-to-store-crypto-seed-phrase-safely"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              safe storage of your seed phrase
            </Link>
            .
          </li>
          <li>
            <strong>If you're actively trading or using Bitcoin regularly</strong>, a hot wallet
            offers the convenience needed for frequent access, ideally with only the amount you're
            actively using rather than your full holdings.
          </li>
        </ul>
        <P>
          For a more detailed comparison of the exchange vs. personal wallet decision, see our{" "}
          <Link
            to="/guides/exchange-or-personal-wallet-crypto-storage"
            className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
          >
            exchange vs. personal wallet guide
          </Link>
          .
        </P>

        <AdUnit />

        <H2 id="faq">Frequently Asked Questions</H2>
        <div className="space-y-md mb-xl">
          {faqs.map((f) => (
            <div key={f.q} className="p-lg rounded-xl border border-outline-variant bg-surface-container-low">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-sm font-semibold">{f.q}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <H2 id="conclusion">Conclusion</H2>
        <P>
          A Bitcoin wallet is fundamentally a key management tool. The type you choose — hot, cold,
          or custodial — determines who controls those keys and how exposed they are to online
          threats. Getting this decision right for your situation is one of the most practical
          things you can do as a Bitcoin holder.
        </P>

        <H2 id="sources">Sources</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://bitcoin.org/en/choose-your-wallet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Bitcoin.org — Choose Your Wallet (overview of wallet types and recommendations)
            </a>
          </li>
          <li>
            <a
              href="https://en.bitcoin.it/wiki/Wallet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Bitcoin Wiki — Wallet (technical overview of how Bitcoin wallets work)
            </a>
          </li>
        </ul>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be
            considered financial advice. Wallet security depends on many factors; readers should
            research specific products and practices appropriate to their own situation.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/guides/not-your-keys-not-your-coins-meaning"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                "Not Your Keys, Not Your Coins" — What It Means
              </h3>
            </Link>
            <Link
              to="/guides/exchange-or-personal-wallet-crypto-storage"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Exchange vs. Personal Wallet
              </h3>
            </Link>
            <Link
              to="/security/how-to-store-crypto-seed-phrase-safely"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Store Your Seed Phrase Safely
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
