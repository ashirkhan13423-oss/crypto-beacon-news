import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/exchange-vs-wallet.png";

const URL = "https://cryptobeaconnews.lovable.app/guides/exchange-or-personal-wallet-crypto-storage";
const TITLE = "Exchange or Personal Wallet? A Crypto Storage Guide | CryptoBeacon";
const DESC =
  "Should your crypto stay on an exchange or move to your own wallet? A clear, neutral decision framework based on how you actually use your crypto.";
const PUBLISHED = "2026-07-22";

const faqs: { q: string; a: string }[] = [
  {
    q: "Is it safe to keep crypto on an exchange long-term?",
    a: "It carries counterparty risk — you're relying on that platform's security and solvency rather than managing your own keys. Many people accept this for smaller, actively-used balances but reduce it for larger, long-term holdings.",
  },
  {
    q: "When should I move crypto to my own wallet?",
    a: "A common trigger point is when the amount held would represent a meaningful loss if the platform had a serious problem, or when you no longer need frequent trading access to those funds.",
  },
  {
    q: "What happens to my crypto if an exchange has a serious problem?",
    a: "Since the exchange holds the private keys in a custodial arrangement, your ability to access funds depends entirely on that platform's own situation and policies — this is the core risk being weighed in this decision.",
  },
  {
    q: "Do I need a hardware wallet to self-custody my crypto?",
    a: "No — self-custody just means you control the private keys, which can be done through various types of non-custodial wallets. A hardware wallet is one option often used for larger, long-term holdings, but it isn't the only path to self-custody.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Should You Keep Your Crypto on an Exchange or Move It to Your Own Wallet?",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Organization", name: "CryptoBeacon Editorial" },
  publisher: {
    "@type": "Organization",
    name: "CryptoBeacon",
    logo: {
      "@type": "ImageObject",
      url: "https://cryptobeaconnews.lovable.app/favicon.png",
    },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  image: `https://cryptobeaconnews.lovable.app${hero}`,
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

export const Route = createFileRoute("/guides/exchange-or-personal-wallet-crypto-storage")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "should I keep crypto on an exchange or move it to a wallet, exchange vs personal wallet crypto, is it safe to leave crypto on an exchange, when to move crypto off an exchange, custodial risk, counterparty risk, self-custody, cold storage, exchange insolvency, withdrawal freeze",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:section", content: "Guides" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: ArticlePage,
});

function AdSlot({ id }: { id: string }) {
  return (
    <div className="my-xl" data-ad-slot={id}>
      <div className="text-center font-label-caps text-[11px] uppercase tracking-widest text-on-surface-variant mb-xs">
        Advertisement
      </div>
      <div className="border border-dashed border-outline-variant rounded-lg h-[90px] md:h-[250px] flex items-center justify-center bg-surface-container-lowest">
        <span className="text-xs text-on-surface-variant">Ad Placeholder</span>
      </div>
    </div>
  );
}

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
            <li className="text-primary">Exchange or Personal Wallet</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Guides
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          Should You Keep Your Crypto on an Exchange or Move It to Your Own Wallet?
        </h1>

        <div className="mt-md flex flex-wrap items-center gap-md font-body-md text-body-md text-on-surface-variant">
          <span>By CryptoBeacon Editorial</span>
          <span aria-hidden>·</span>
          <time dateTime={PUBLISHED}>July 22, 2026</time>
          <span aria-hidden>·</span>
          <span>6 min read</span>
        </div>

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            src={hero}
            alt="Illustration representing the choice between exchange storage and personal wallet custody"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </figure>

        <P>
          Once you understand that leaving crypto on an exchange means someone else holds the keys
          (see our explainer on "
          <Link
            to="/guides/not-your-keys-not-your-coins-meaning"
            className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
          >
            not your keys, not your coins
          </Link>
          "), the natural next question is: so what should I actually do? This guide walks through a
          practical decision framework rather than a one-size-fits-all answer, because the right
          choice genuinely depends on how you use your crypto.
        </P>
        <P>
          <em>This article is educational. It isn't financial advice.</em>
        </P>

        <AdSlot id="top" />

        <aside className="my-xl p-lg rounded-lg border border-outline-variant bg-surface-container-low">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-sm">
            Table of Contents
          </h2>
          <ol className="list-decimal list-inside space-y-xs font-body-md text-body-md text-on-surface">
            <li>
              <a href="#what-youre-choosing" className="hover:underline decoration-secondary">
                What You're Actually Choosing Between
              </a>
            </li>
            <li>
              <a href="#exchange-makes-sense" className="hover:underline decoration-secondary">
                When Keeping Crypto on an Exchange Makes Sense
              </a>
            </li>
            <li>
              <a href="#wallet-makes-sense" className="hover:underline decoration-secondary">
                When Moving to Your Own Wallet Makes Sense
              </a>
            </li>
            <li>
              <a href="#hybrid-approach" className="hover:underline decoration-secondary">
                The Hybrid Approach Most People Land On
              </a>
            </li>
            <li>
              <a href="#decision-checklist" className="hover:underline decoration-secondary">
                A Simple Decision Checklist
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

        <H2 id="what-youre-choosing">1. What You're Actually Choosing Between</H2>
        <P>
          This isn't really a choice between two products — it's a choice between two different
          risk profiles:
        </P>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md my-lg">
          <div className="border-l-4 border-[#0F9D58] bg-surface-container-lowest p-lg rounded-r-lg border border-outline-variant">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">
              Exchange Custody
            </h3>
            <ul className="list-disc pl-md space-y-xs font-body-md text-body-md text-on-surface">
              <li>Convenient, familiar, easy to trade from</li>
              <li>You're trusting the platform's security, solvency, and continued operation</li>
            </ul>
          </div>
          <div className="border-l-4 border-[#0F9D58] bg-surface-container-lowest p-lg rounded-r-lg border border-outline-variant">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">
              Personal Wallet Custody
            </h3>
            <ul className="list-disc pl-md space-y-xs font-body-md text-body-md text-on-surface">
              <li>You control the keys directly</li>
              <li>You're solely responsible for backing up and protecting them, with no company able to help if something goes wrong</li>
            </ul>
          </div>
        </div>

        <P>
          Neither is universally safer. They're safer against <em>different things</em>.
        </P>

        <AdSlot id="mid" />

        <H2 id="exchange-makes-sense">2. When Keeping Crypto on an Exchange Makes Sense</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li>You're actively trading or plan to sell/rebalance soon, and moving funds back and forth would be impractical.</li>
          <li>You're still new to self-custody and haven't yet built confidence managing a seed phrase safely.</li>
          <li>The amount involved is small enough that the convenience trade-off outweighs the custodial risk, for now.</li>
        </ul>

        <H2 id="wallet-makes-sense">3. When Moving to Your Own Wallet Makes Sense</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li>You intend to hold for the long term without frequent trading.</li>
          <li>The amount involved is significant enough that counterparty risk (the platform's own security or solvency) matters more than convenience.</li>
          <li>You've taken the time to{" "}
          <Link
            to="/security/how-to-store-crypto-seed-phrase-safely"
            className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
          >
            understand seed phrase storage
          </Link>
          {" "}and feel confident managing your own backup safely.</li>
        </ul>

        <H2 id="hybrid-approach">4. The Hybrid Approach Most People Land On</H2>
        <P>
          Many crypto users don't pick one option exclusively — they keep a smaller, active trading
          balance on an exchange and move the majority of their long-term holdings to a personal
          wallet. This mirrors a common real-world pattern: keeping some cash in a checking account
          for daily spending while keeping savings somewhere less immediately accessible. There's no
          fixed ratio that's "correct" — it's a matter of matching each portion of your holdings to
          how you actually intend to use it.
        </P>

        <H2 id="decision-checklist">5. A Simple Decision Checklist</H2>
        <P>Ask yourself:</P>
        <ul className="my-md space-y-sm">
          <li className="flex items-start gap-sm p-md rounded-lg border border-outline-variant bg-surface-container-lowest">
            <span aria-hidden className="material-symbols-outlined text-[#0F9D58] shrink-0" style={{ fontVariationSettings: "'FILL' 1", fontSize: "22px" }}>
              check_box
            </span>
            <span className="font-body-md text-body-md text-on-surface leading-relaxed">
              <strong>Do I plan to trade this soon, or hold it long-term?</strong> Frequent trading favors exchange convenience; long-term holding favors self-custody.
            </span>
          </li>
          <li className="flex items-start gap-sm p-md rounded-lg border border-outline-variant bg-surface-container-lowest">
            <span aria-hidden className="material-symbols-outlined text-[#0F9D58] shrink-0" style={{ fontVariationSettings: "'FILL' 1", fontSize: "22px" }}>
              check_box
            </span>
            <span className="font-body-md text-body-md text-on-surface leading-relaxed">
              <strong>Am I comfortable managing a seed phrase safely?</strong> If not yet, that's worth addressing (see our guide to{" "}
              <Link
                to="/security/how-to-store-crypto-seed-phrase-safely"
                className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
              >
                understand seed phrase storage
              </Link>
              ) before moving significant funds off an exchange.
            </span>
          </li>
          <li className="flex items-start gap-sm p-md rounded-lg border border-outline-variant bg-surface-container-lowest">
            <span aria-hidden className="material-symbols-outlined text-[#0F9D58] shrink-0" style={{ fontVariationSettings: "'FILL' 1", fontSize: "22px" }}>
              check_box
            </span>
            <span className="font-body-md text-body-md text-on-surface leading-relaxed">
              <strong>How would I feel if this specific platform had a serious problem tomorrow?</strong> If the answer is "that would be a serious loss," that's a signal to reduce exchange-held exposure.
            </span>
          </li>
          <li className="flex items-start gap-sm p-md rounded-lg border border-outline-variant bg-surface-container-lowest">
            <span aria-hidden className="material-symbols-outlined text-[#0F9D58] shrink-0" style={{ fontVariationSettings: "'FILL' 1", fontSize: "22px" }}>
              check_box
            </span>
            <span className="font-body-md text-body-md text-on-surface leading-relaxed">
              <strong>Have I tested a small self-custody transfer before moving a large amount?</strong> Confirming a wallet works correctly with a{" "}
              <Link
                to="/bitcoin/how-to-send-bitcoin-safely"
                className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
              >
                test a small self-custody transfer
              </Link>
              {" "}avoids costly mistakes on a larger one.
            </span>
          </li>
        </ul>

        <H2 id="takeaways">6. Key Takeaways</H2>
        <div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>This decision is about matching custody type to how you actually use your crypto, not about one option being universally correct.</li>
            <li>Exchange custody trades control for convenience; personal wallet custody trades convenience for full control and full responsibility.</li>
            <li>A hybrid approach — active balance on an exchange, long-term holdings self-custodied — is common and reasonable.</li>
            <li>Confidence with seed phrase management should come before moving significant amounts into self-custody.</li>
          </ul>
        </div>

        <AdSlot id="bottom" />

        <H2 id="faq">7. Frequently Asked Questions</H2>
        <div className="divide-y divide-outline-variant border-y border-outline-variant">
          {faqs.map((f) => (
            <details key={f.q} className="group py-md">
              <summary className="cursor-pointer list-none flex justify-between items-start gap-md font-headline-sm text-headline-sm text-primary">
                <span>{f.q}</span>
                <span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-45">
                  add
                </span>
              </summary>
              <p className="mt-sm font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <H2 id="conclusion">Conclusion</H2>
        <P>
          There's no single correct answer to "exchange or personal wallet" — there's only the answer
          that matches how you actually intend to use your crypto and how much counterparty risk you're
          comfortable carrying. Many people find that a hybrid approach — a small active balance on an
          exchange, the rest self-custodied — reflects that trade-off well.
        </P>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be considered
            financial or investment advice. Custody decisions involve trade-offs specific to your own
            circumstances and risk tolerance.
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
