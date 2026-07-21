import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/bitcoin-send-safely.jpg";

const URL = "https://cryptobeaconnews.lovable.app/bitcoin/how-to-send-bitcoin-safely";
const TITLE = "How to Send Bitcoin Safely (Beginner's Guide) | CryptoBeacon";
const DESC =
  "Learn how Bitcoin transactions work, the mistakes that cause permanent loss, and a simple checklist to send Bitcoin safely every time.";
const PUBLISHED = "2026-07-04";

const faqs: { q: string; a: string }[] = [
  {
    q: "What happens if I send Bitcoin to the wrong address?",
    a: "If the address is valid but belongs to someone else (or no one), the transaction still succeeds from the network's perspective, and the funds are generally unrecoverable.",
  },
  {
    q: "How many confirmations does a Bitcoin transaction need?",
    a: "It depends on the amount and the risk you're comfortable with — commonly 1 for small transactions, 3–6 for moderate amounts, and 6 or more for large transfers.",
  },
  {
    q: "Why is my Bitcoin transaction fee so high right now?",
    a: "Fees rise when many people are trying to transact at once and network space is limited. The fee reflects current demand, not a fixed cost.",
  },
  {
    q: "Can a Bitcoin transaction be cancelled once sent?",
    a: "Not directly. If it's still unconfirmed, some wallets allow you to replace it with a higher-fee version, but this doesn't cancel the original — it supersedes it before confirmation. Once confirmed, no reversal is possible.",
  },
  {
    q: "Is it safe to reuse the same Bitcoin address multiple times?",
    a: "It's technically possible but generally discouraged for privacy reasons, since it makes it easier to link multiple transactions to the same identity. Most modern wallets generate a new address for each transaction automatically.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Send Bitcoin Safely",
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

export const Route = createFileRoute("/bitcoin/how-to-send-bitcoin-safely")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "how to send bitcoin safely, bitcoin transaction mistakes, sending bitcoin to wrong address, bitcoin transaction confirmations explained, bitcoin transaction fees explained for beginners, UTXO, mempool, replace by fee",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:section", content: "Bitcoin" },
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

function TransactionFlow() {
  const steps = ["Broadcast", "Mempool", "In Block", "Confirmed"];
  return (
    <figure className="my-xl">
      <div className="rounded-xl bg-[#0A0B0D] p-lg overflow-x-auto">
        <svg
          viewBox="0 0 1000 180"
          role="img"
          aria-label="Diagram showing how a Bitcoin transaction moves from broadcast to confirmation"
          className="w-full h-auto min-w-[640px]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <line x1="80" y1="90" x2="920" y2="90" stroke="#2563EB" strokeWidth="2" />
          {steps.map((s, i) => {
            const cx = 125 + i * 250;
            return (
              <g key={s}>
                <circle cx={cx} cy="90" r="34" fill="#0A0B0D" stroke="#0F9D58" strokeWidth="2" />
                <text
                  x={cx}
                  y="96"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="20"
                  fontWeight="700"
                >
                  {i + 1}
                </text>
                <text x={cx} y="150" textAnchor="middle" fill="#FFFFFF" fontSize="18">
                  {s}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="mt-sm text-center font-body-md text-body-md text-on-surface-variant italic">
        A transaction's life: broadcast to the network, waits in the mempool, gets included in a
        block, then earns confirmations as more blocks stack on top.
      </figcaption>
    </figure>
  );
}

const checklist: string[] = [
  "Copy the address directly from the recipient's source — don't retype it manually.",
  "Compare the full address character-by-character against the source, not just the first and last few characters.",
  "Confirm you're sending on the correct network if your wallet or exchange supports multiple networks.",
  "Send a small test amount first for any new recipient or large transfer.",
  "Confirm the test amount arrived correctly before sending the full amount.",
  "Choose a fee level appropriate to how quickly you need the transaction confirmed.",
  "Wait for an appropriate number of confirmations before treating a large transaction as final on the receiving end.",
];

function Checklist() {
  return (
    <ul className="my-md space-y-sm">
      {checklist.map((item) => (
        <li
          key={item}
          className="flex items-start gap-sm p-md rounded-lg border border-outline-variant bg-surface-container-lowest"
        >
          <span
            aria-hidden
            className="material-symbols-outlined text-[#0F9D58] shrink-0"
            style={{ fontVariationSettings: "'FILL' 1", fontSize: "22px" }}
          >
            check_box
          </span>
          <span className="font-body-md text-body-md text-on-surface leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
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
              <Link to="/bitcoin" className="hover:text-secondary">
                Bitcoin
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">Send Bitcoin Safely</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Bitcoin
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          How to Send Bitcoin Safely
        </h1>

        <div className="mt-md flex flex-wrap items-center gap-md font-body-md text-body-md text-on-surface-variant">
          <span>By CryptoBeacon Editorial</span>
          <span aria-hidden>·</span>
          <time dateTime={PUBLISHED}>July 4, 2026</time>
          <span aria-hidden>·</span>
          <span>8 min read</span>
        </div>

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            src={hero}
            alt="Illustration representing a Bitcoin transaction moving safely between wallets"
            width={1600}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          Sending Bitcoin is simple in mechanics — copy an address, enter an amount, confirm —
          which is exactly what makes it risky. There's no undo button. Once a transaction is
          confirmed on the network, it's final, regardless of whether the address was correct, the
          network fee was too low, or you meant to send a completely different asset.
        </P>
        <P>
          This guide walks through how a Bitcoin transaction actually works, the specific mistakes
          that cause people to lose funds permanently, and a practical checklist to follow every
          time you send.
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
              <a href="#how-works" className="hover:underline decoration-secondary">
                How a Bitcoin Transaction Actually Works
              </a>
            </li>
            <li>
              <a href="#irreversible" className="hover:underline decoration-secondary">
                Why Bitcoin Transactions Can't Be Reversed
              </a>
            </li>
            <li>
              <a href="#mistakes" className="hover:underline decoration-secondary">
                Common Mistakes That Cause Permanent Loss
              </a>
            </li>
            <li>
              <a href="#confirmations" className="hover:underline decoration-secondary">
                Understanding Confirmations and Network Fees
              </a>
            </li>
            <li>
              <a href="#checklist" className="hover:underline decoration-secondary">
                A Pre-Send Safety Checklist
              </a>
            </li>
            <li>
              <a href="#wrong" className="hover:underline decoration-secondary">
                What to Do If Something Goes Wrong
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

        <H2 id="how-works">1. How a Bitcoin Transaction Actually Works</H2>
        <P>
          When you send Bitcoin, you're not moving a file from one place to another — you're
          broadcasting a message to the network stating that a certain amount, tied to your
          wallet's keys, should now be associated with the recipient's address instead. That
          message sits in a waiting area called the mempool until a miner includes it in a block.
          Once included, and once enough additional blocks are added on top of it, the transaction
          is considered confirmed and effectively permanent.
        </P>
        <P>
          This is why a Bitcoin address, not a name or account number, is the only thing the
          network actually checks. If the address is correct, the transaction succeeds exactly as
          instructed — even if that wasn't what you meant to do.
        </P>

        <TransactionFlow />

        <AdSlot id="mid" />

        <H2 id="irreversible">2. Why Bitcoin Transactions Can't Be Reversed</H2>
        <P>
          Bitcoin has no central authority to appeal to. There's no bank that can claw back a
          mistaken transfer, no chargeback process, and no support line that can undo a confirmed
          transaction. This is a deliberate design choice — it's what makes Bitcoin resistant to
          censorship and central control — but it also means the responsibility for accuracy sits
          entirely with the sender, every time.
        </P>

        <H2 id="mistakes">3. Common Mistakes That Cause Permanent Loss</H2>
        <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li>
            <strong>Sending to the wrong address.</strong> A single mistyped or copy-paste error
            sends funds to an address no one can recover from. Always verify the full address, not
            just the first and last few characters.
          </li>
          <li>
            <strong>Sending to an address on the wrong network.</strong> Some assets exist on
            multiple networks (for example, wrapped or bridged versions of Bitcoin). Sending
            native Bitcoin to an address expecting a different network's token format can result
            in permanent loss.
          </li>
          <li>
            <strong>
              <Link
                to="/security/how-to-avoid-crypto-phishing-scams"
                className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
              >
                Clipboard-hijacking malware
              </Link>
              .
            </strong>{" "}
            Some malware silently replaces a copied address with an attacker's address the moment
            before you paste it. This is why checking the pasted address against the original —
            not just trusting that copy-paste "worked" — matters.
          </li>
          <li>
            <strong>Underpaying the network fee.</strong> A fee that's too low for current network
            conditions can leave a transaction stuck unconfirmed for a long time, though it
            typically isn't permanently lost — most wallets offer a way to speed it up (see
            below).
          </li>
          <li>
            <strong>Sending an amount smaller than the network considers economical ("dust").</strong>{" "}
            Extremely small amounts can become impractical to spend later once fees exceed the
            value being moved.
          </li>
        </ul>

        <H2 id="confirmations">4. Understanding Confirmations and Network Fees</H2>
        <P>
          A confirmation is simply one additional block added to the blockchain after the block
          containing your transaction. Each additional confirmation makes it exponentially harder
          to reverse, which is why the number of confirmations considered "safe" scales with the
          value being sent:
        </P>
        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li>Small, low-stakes transactions: many services accept 1 confirmation.</li>
          <li>Moderate amounts: 3–6 confirmations is a common standard.</li>
          <li>Large transfers: waiting for 6 or more confirmations is a reasonable precaution.</li>
        </ul>
        <P>
          Network fees work on a simple principle: miners prioritize transactions offering higher
          fees relative to their data size, especially when the network is busy. A low fee doesn't
          cause loss of funds — it simply means a longer wait. Most modern wallets let you either
          estimate an appropriate fee automatically or replace a stuck transaction with a
          higher-fee version (often called "fee bumping" or RBF — Replace-By-Fee). The{" "}
          <a
            href="https://bitcoin.org/en/you-need-to-know"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
          >
            Bitcoin.org "things you need to know" guide
          </a>{" "}
          is a useful primer on how fees and confirmations behave in practice.
        </P>

        <H2 id="checklist">5. A Pre-Send Safety Checklist</H2>
        <P>Before confirming any Bitcoin transaction:</P>
        <Checklist />

        <H2 id="wrong">6. What to Do If Something Goes Wrong</H2>
        <P>
          If a transaction is stuck (unconfirmed for an unusually long time), most modern wallets
          support a "speed up" or "replace-by-fee" option that rebroadcasts the same transaction
          with a higher fee, without needing to cancel anything.
        </P>
        <P>
          If funds were sent to the wrong address, there is no built-in reversal mechanism. If the
          address belongs to a service (like an exchange), contacting their support promptly is
          worth attempting, but there's no guarantee of recovery. If the address belongs to an
          unknown wallet, the funds are generally unrecoverable. This is precisely why the
          pre-send checklist above matters more than any recovery step after the fact — and why{" "}
          <Link
            to="/security/how-to-store-crypto-seed-phrase-safely"
            className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
          >
            self-custody responsibility
          </Link>{" "}
          starts with careful habits, not recovery tooling.
        </P>

        <H2 id="takeaways">7. Key Takeaways</H2>
        <div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>
              A confirmed Bitcoin transaction cannot be reversed — there is no central authority
              to appeal to.
            </li>
            <li>
              The address is the only thing the network checks; a correct-looking mistake still
              succeeds exactly as sent.
            </li>
            <li>
              Test small amounts first, verify the full address, and confirm you're using the
              correct network before sending anything significant.
            </li>
            <li>
              A low network fee causes delay, not loss — most wallets can bump a stuck
              transaction's fee.
            </li>
            <li>
              Prevention through careful verification is the only reliable protection; there's no
              dependable recovery path after a wrong-address send.
            </li>
          </ul>
        </div>

        <AdSlot id="bottom" />

        <H2 id="faq">8. Frequently Asked Questions</H2>
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
          Bitcoin's lack of a reversal mechanism is a feature, not a flaw — but it means the
          entire burden of accuracy sits with whoever hits send. A short checklist — verify the
          full address, confirm the network, test with a small amount first — prevents the
          overwhelming majority of losses that have nothing to do with hacking or scams and
          everything to do with an unverified copy-paste.
        </P>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be
            considered financial or investment advice. Cryptocurrency transactions are
            irreversible; readers should verify all transaction details independently and
            exercise caution proportional to the amount being sent.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/security/how-to-avoid-crypto-phishing-scams"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Avoid Crypto Phishing Scams
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
              to="/ethereum/can-you-send-bitcoin-to-an-ethereum-address"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Ethereum</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Can You Send Bitcoin to an Ethereum Address?
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
