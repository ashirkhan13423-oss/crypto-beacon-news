import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/keys-coins-meaning.jpg";
import { Key, Lock, HelpCircle, Plus } from "lucide-react";

const URL = "https://www.cryptobeacon.site/guides/not-your-keys-not-your-coins-meaning";
const TITLE = 'What "Not Your Keys, Not Your Coins" Means | CryptoBeacon';
const DESC =
  'A plain-language explainer on what "not your keys, not your coins" means, why it matters, and how to tell if you actually control your crypto.';
const PUBLISHED = "2026-07-06";

const faqs: { q: string; a: string }[] = [
  {
    q: 'What does "not your keys, not your coins" actually mean?',
    a: "It means that if you don't personally hold the private key controlling your crypto, you don't have direct ownership of it — you have a claim on a balance someone else is tracking on your behalf.",
  },
  {
    q: "Is it safe to leave crypto on an exchange?",
    a: "It carries a different kind of risk than self-custody — you're trusting the platform's security and solvency rather than managing your own backup. Many people use a mix, depending on how actively they trade versus hold long-term.",
  },
  {
    q: "What's the difference between a custodial and non-custodial wallet?",
    a: "A custodial wallet is managed by a third party who holds the private keys for you. A non-custodial wallet gives you direct control of the private keys, typically via a seed phrase only you possess.",
  },
  {
    q: "Can an exchange lose access to your crypto without being hacked?",
    a: "Yes — insolvency, mismanagement, or a freeze on withdrawals can all prevent access to funds even without a security breach, since the underlying issue is custodial risk, not a blockchain failure.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: '"Not Your Keys, Not Your Coins" — What It Actually Means',
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Organization",
    name: "CryptoBeacon Editorial Team",
    url: "https://www.cryptobeacon.site",
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
    "not your keys not your coins meaning, custodial vs non-custodial wallet explained, why does self-custody matter, what happens if an exchange gets hacked, private key, self-custody, counterparty risk",
  articleSection: "Guides",
  wordCount: 1400,
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
      name: '"Not Your Keys, Not Your Coins" — What It Means',
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/guides/not-your-keys-not-your-coins-meaning")({
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

function ComparisonTable() {
  const rows: { label: string; custodial: string; nonCustodial: string }[] = [
    {
      label: "Who holds the private key",
      custodial: "The platform",
      nonCustodial: "You",
    },
    {
      label: "What you actually have",
      custodial: "A claim on a balance the platform owes you",
      nonCustodial: "Direct control of the funds",
    },
    {
      label: "Recovery if you forget your password",
      custodial: "Platform can usually help via support / verification",
      nonCustodial: "No company to call — only your seed phrase can restore access",
    },
    {
      label: "Risk if the platform fails or is hacked",
      custodial: "You depend on the platform's solvency and security",
      nonCustodial: "Not affected by the platform's issues at all",
    },
    {
      label: "Ease of use",
      custodial: "Simple, familiar, like a bank account",
      nonCustodial: "Requires you to safely manage your own backup",
    },
  ];
  return (
    <figure className="my-xl overflow-x-auto">
      <table
        className="w-full min-w-[640px] border border-outline-variant rounded-lg overflow-hidden text-left"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <thead>
          <tr className="bg-[#0F9D58] text-white">
            <th className="p-md font-label-caps text-[12px] uppercase tracking-widest font-semibold w-[28%]">
              &nbsp;
            </th>
            <th className="p-md font-label-caps text-[12px] uppercase tracking-widest font-semibold">
              Custodial
            </th>
            <th className="p-md font-label-caps text-[12px] uppercase tracking-widest font-semibold">
              Non-Custodial
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={r.label}
              className={i % 2 === 0 ? "bg-surface-container-lowest" : "bg-surface-container-low"}
            >
              <td className="p-md align-top border-t border-outline-variant font-body-md text-body-md font-semibold text-primary">
                {r.label}
              </td>
              <td className="p-md align-top border-t border-outline-variant font-body-md text-body-md text-on-surface">
                {r.custodial}
              </td>
              <td className="p-md align-top border-t border-outline-variant font-body-md text-body-md text-on-surface">
                {r.nonCustodial}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
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
            <li className="text-primary">Not Your Keys, Not Your Coins</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          "Not Your Keys, Not Your Coins" — What It Actually Means
        </h1>

        <div className="mt-md flex flex-wrap items-center gap-md font-body-md text-body-md text-on-surface-variant">
          <span>By <Link to="/about" className="text-secondary font-medium hover:underline">CryptoBeacon Editorial Team</Link></span>
          <span aria-hidden>·</span>
          <time dateTime={PUBLISHED}>July 6, 2026</time>
          <span aria-hidden>·</span>
          <span>7 min read</span>
        </div>

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            src={hero}
            alt="Illustration representing crypto self-custody and private key ownership"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </figure>

        <P>
          If you've spent any time in crypto communities, you've probably run into this phrase —
          often shortened to "NYKNYC." It sounds like a slogan, but it's actually describing
          something very specific and very important: the difference between owning crypto and
          merely having a claim on crypto someone else controls.
        </P>
        <P>
          This guide explains what "keys" actually refers to, why the distinction matters so much,
          and how to figure out which category your own crypto currently falls into.
        </P>
        <P>
          <em>This article is educational. It isn't financial advice.</em>
        </P>

        <aside className="my-xl p-lg rounded-lg border border-outline-variant bg-surface-container-low">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-sm">
            Table of Contents
          </h2>
          <ol className="list-decimal list-inside space-y-xs font-body-md text-body-md text-on-surface">
            <li>
              <a href="#keys" className="hover:underline decoration-secondary">
                What "Keys" Actually Means Here
              </a>
            </li>
            <li>
              <a href="#vs" className="hover:underline decoration-secondary">
                Custodial vs. Non-Custodial: The Real Difference
              </a>
            </li>
            <li>
              <a href="#matters" className="hover:underline decoration-secondary">
                Why This Distinction Matters
              </a>
            </li>
            <li>
              <a href="#which" className="hover:underline decoration-secondary">
                How to Tell Which Category You're In
              </a>
            </li>
            <li>
              <a href="#right-choice" className="hover:underline decoration-secondary">
                Is Custodial Ever the Right Choice?
              </a>
            </li>
            <li>
              <a href="#takeaways" className="hover:underline decoration-secondary">
                Key Takeaways
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline decoration-secondary">
                Frequently Asked Questions
              </a>
            </li>
          </ol>
        </aside>

        <H2 id="keys">1. What "Keys" Actually Means Here</H2>
        <P>
          Every cryptocurrency holding is controlled by a private key — a piece of cryptographic
          data that proves ownership and authorizes spending. Whoever holds the private key controls
          the funds, full stop. It doesn't matter whose name is on an account, whose app displays
          the balance, or who originally deposited the funds.
        </P>
        <P>
          When you use a wallet where you generate and hold that private key yourself (typically via
          a{" "}
          <Link
            to="/security/how-to-store-crypto-seed-phrase-safely"
            className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
          >
            seed phrase
          </Link>
          ), you have self-custody. When you deposit crypto onto an exchange or into a custodial
          app, the platform generates and holds the private key on your behalf — you have a claim on
          a balance they track internally, not direct control of the key itself.
        </P>

        <H2 id="vs">2. Custodial vs. Non-Custodial: The Real Difference</H2>
        <ComparisonTable />
        <P>
          Neither approach is "wrong" — they trade off convenience against control, and the right
          balance depends on your situation.
        </P>

        <H2 id="matters">3. Why This Distinction Matters</H2>
        <P>
          This isn't a theoretical concern. When a custodial platform experiences insolvency, a
          hack, or a freeze on withdrawals, users don't lose money because their crypto itself
          failed — they lose access because they never controlled the underlying keys in the first
          place. The blockchain kept working exactly as designed; the problem was entirely on the
          custodial side.
        </P>
        <P>
          The same principle explains why{" "}
          <Link
            to="/bitcoin/how-to-send-bitcoin-safely"
            className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
          >
            sending crypto
          </Link>{" "}
          can't be undone once confirmed: the network only recognizes control of the key, not
          intent. This is precisely why the phrase exists as a warning: it's a reminder that "my
          crypto is on an exchange" and "I own crypto" are not automatically the same statement.
        </P>

        <H2 id="which">4. How to Tell Which Category You're In</H2>
        <P>Ask yourself these questions about wherever your crypto currently sits:</P>
        <ul className="list-none pl-0 space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li className="flex items-start gap-sm">
            <Key
              aria-hidden
              className="text-[#0F9D58] shrink-0"
              style={{ fontVariationSettings: "'FILL' 1", fontSize: "22px" }}
            />
            <span>
              <strong>
                Did I write down a seed phrase when I set this up, and does this platform never see
                it?
              </strong>{" "}
              If yes, you likely have self-custody.
            </span>
          </li>
          <li className="flex items-start gap-sm">
            <Lock
              aria-hidden
              className="text-[#2563EB] shrink-0"
              style={{ fontVariationSettings: "'FILL' 1", fontSize: "22px" }}
            />
            <span>
              <strong>
                Do I log in with just a username and password, with no seed phrase involved?
              </strong>{" "}
              If yes, you're very likely in a custodial arrangement — the platform holds the keys.
            </span>
          </li>
          <li className="flex items-start gap-sm">
            <HelpCircle
              aria-hidden
              className="text-[#0F9D58] shrink-0"
              style={{ fontVariationSettings: "'FILL' 1", fontSize: "22px" }}
            />
            <span>
              <strong>
                If this company disappeared tomorrow, would I still be able to access my funds using
                only something I personally hold?
              </strong>{" "}
              If the honest answer is no, you don't currently control the keys.
            </span>
          </li>
        </ul>

        <H2 id="right-choice">5. Is Custodial Ever the Right Choice?</H2>
        <P>
          Yes — for some situations, it's a reasonable trade-off. Beginners taking their first
          steps, people making frequent small trades, or anyone not yet comfortable managing a seed
          phrase safely may reasonably choose convenience over full control, at least temporarily.
          The goal of understanding NYKNYC isn't to declare custodial wallets wrong — it's to make
          sure the choice is informed rather than accidental. A common and reasonable pattern many
          people settle into is using custodial platforms for active trading and non-custodial
          wallets for anything they intend to hold long-term.
        </P>

        <H2 id="takeaways">6. Key Takeaways</H2>
        <div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>
              "Not your keys, not your coins" describes the difference between owning crypto
              directly and holding a claim on crypto someone else controls.
            </li>
            <li>
              Custodial platforms hold your private key for you; non-custodial wallets put that
              responsibility on you.
            </li>
            <li>
              The risk isn't in the blockchain itself — it's in depending on a third party's
              solvency and security when you don't hold the keys.
            </li>
            <li>
              Neither approach is universally correct; the right mix depends on how you use your
              crypto and how comfortable you are managing your own backup.
            </li>
          </ul>
        </div>

        <H2 id="faq">7. Frequently Asked Questions</H2>
        <div className="divide-y divide-outline-variant border-y border-outline-variant">
          {faqs.map((f) => (
            <details key={f.q} className="group py-md">
              <summary className="cursor-pointer list-none flex justify-between items-start gap-md font-headline-sm text-headline-sm text-primary">
                <span>{f.q}</span>
                <Plus className="text-secondary transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-sm font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <H2 id="conclusion">Conclusion</H2>
        <P>
          "Not your keys, not your coins" isn't crypto slang for its own sake — it's a precise
          description of where control actually sits. Understanding which category your holdings
          fall into is one of the most useful five-minute checks you can do, regardless of how much
          or how little you hold.
        </P>

        <H2 id="sources">Sources</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://bitcoin.org/en/secure-your-wallet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Bitcoin.org — Securing Your Wallet (why private keys matter)
            </a>
          </li>
          <li>
            <a
              href="https://en.bitcoin.it/wiki/Private_key"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Bitcoin Wiki — Private Key (what controls a Bitcoin balance)
            </a>
          </li>
          <li>
            <a
              href="https://www.ledger.com/academy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Ledger Academy — Self-Custody and Wallets
            </a>
          </li>
        </ul>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be
            considered financial or investment advice. Choosing between custodial and non-custodial
            storage involves trade-offs specific to your own circumstances and risk tolerance.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/security/how-to-store-crypto-seed-phrase-safely"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                How to Store Your Seed Phrase Safely
              </h3>
            </Link>
            <Link
              to="/bitcoin/how-to-send-bitcoin-safely"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                How to Send Bitcoin Safely
              </h3>
            </Link>
            <Link
              to="/news/what-it-means-when-exchange-pauses-withdrawals"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">News</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Exchange Pausing Withdrawals
              </h3>
            </Link>
            <Link
              to="/guides/exchange-or-personal-wallet-crypto-storage"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Guides</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Exchange or Personal Wallet?
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
