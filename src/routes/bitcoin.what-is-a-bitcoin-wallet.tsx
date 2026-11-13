import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Disclaimer } from "@/components/Disclaimer";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";
import hero from "@/assets/bitcoin-wallet-key-node.svg";

const URL = "https://www.cryptobeacon.site/bitcoin/what-is-a-bitcoin-wallet";
const TITLE = "What Is a Bitcoin Wallet? Types Explained | CryptoBeacon";
const DESC =
  "A Bitcoin wallet doesn't hold bitcoin. It holds keys. Here's what wallets actually do, the main types, and how custody differs between each of them.";
const PUBLISHED = "2026-11-13";
const MODIFIED = PUBLISHED;
const keyTakeaway =
  "A bitcoin wallet stores cryptographic keys, not coins. Bitcoin itself lives on the blockchain, and your private keys authorize spending.";

const faqs: { q: string; a: string }[] = [
  {
    q: "Do I need a wallet to own bitcoin?",
    a: "Not always. A custodial account holds the keys for you. Owning bitcoin in the self-custody sense requires a wallet where you control the keys.",
  },
  {
    q: "Can I use more than one bitcoin wallet?",
    a: "Yes. Many people separate spending funds from long-term holdings.",
  },
  {
    q: "What happens if I lose my phone?",
    a: "If you backed up your seed phrase, you can restore the wallet on a new device. If you didn't, the keys may be unrecoverable.",
  },
  {
    q: "Is a bitcoin wallet the same as an exchange account?",
    a: "No. An exchange account is custodial. The exchange controls the keys. A non-custodial wallet gives you that control yourself.",
  },
];

export const Route = createFileRoute("/bitcoin/what-is-a-bitcoin-wallet")({
  head: () => ({
    ...buildMetadata({
      title: TITLE,
      description: DESC,
      url: URL,
      type: "article",
      path: "/bitcoin/what-is-a-bitcoin-wallet",
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
          }),
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
          ]),
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
              <li className="text-primary">What Is a Bitcoin Wallet?</li>
            </ol>
          </nav>

          <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
            Bitcoin
          </span>

          <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
            What Is a Bitcoin Wallet? Types, Custody, and How It Works
          </h1>

          <Author publishedDate={<time dateTime={PUBLISHED}>November 13, 2026</time>} />

          <LastUpdated date={MODIFIED} />

          <KeyTakeaway text={keyTakeaway} />

          <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
            <img
              fetchPriority="high"
              src={hero}
              alt="Illustration of a secure key icon connected to a Bitcoin network node"
              width={1536}
              height={896}
              className="w-full h-auto"
            />
          </figure>

          <P>
            The most common misunderstanding about bitcoin wallets is that they hold bitcoin. They
            don't. Bitcoin is recorded on the blockchain, and a wallet holds the private keys that
            prove ownership and authorize spending. Losing access to a wallet app isn't the same as
            losing your bitcoin. Losing the keys is.
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
                <a
                  href="#what-a-wallet-actually-stores"
                  className="hover:underline decoration-secondary"
                >
                  What a Wallet Actually Stores
                </a>
              </li>
              <li>
                <a
                  href="#the-main-types-of-bitcoin-wallets"
                  className="hover:underline decoration-secondary"
                >
                  The Main Types of Bitcoin Wallets
                </a>
              </li>
              <li>
                <a href="#hot-vs-cold-storage" className="hover:underline decoration-secondary">
                  Hot vs. Cold Storage
                </a>
              </li>
              <li>
                <a
                  href="#custodial-vs-non-custodial"
                  className="hover:underline decoration-secondary"
                >
                  Custodial vs. Non-Custodial
                </a>
              </li>
              <li>
                <a
                  href="#how-to-choose-a-wallet-type"
                  className="hover:underline decoration-secondary"
                >
                  How to Choose a Wallet Type
                </a>
              </li>
              <li>
                <a
                  href="#common-beginner-mistakes"
                  className="hover:underline decoration-secondary"
                >
                  Common Beginner Mistakes
                </a>
              </li>
              <li>
                <a href="#key-takeaways" className="hover:underline decoration-secondary">
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

          <H2 id="what-a-wallet-actually-stores">What a Wallet Actually Stores</H2>
          <P>A bitcoin wallet manages a set of cryptographic keys:</P>
          <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
            <li>
              A <strong>private key</strong> is a secret number that signs transactions. Whoever
              holds it controls the funds it protects.
            </li>
            <li>
              A <strong>public key</strong> is derived from the private key and is used to create
              addresses that others can send bitcoin to.
            </li>
            <li>
              A{" "}
              <strong>
                <Link
                  to="/security/how-to-store-crypto-seed-phrase-safely"
                  className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
                >
                  seed phrase
                </Link>
              </strong>{" "}
              is a list of words that can regenerate all of these keys. It's the backup you write
              down.
            </li>
          </ul>
          <P>
            The blockchain stores the transaction history. The wallet is the tool that lets you
            prove ownership and create valid transactions.
          </P>

          {/* Inline SVG Diagram */}
          <div className="my-lg p-lg rounded-xl border border-outline-variant bg-surface-container-low flex flex-col items-center">
            <svg viewBox="0 0 700 200" className="w-full max-w-lg h-auto">
              <rect
                x="20"
                y="30"
                width="280"
                height="140"
                rx="12"
                fill="#1F2937"
                stroke="#2563EB"
                strokeWidth="3"
              />
              <text
                x="160"
                y="75"
                textAnchor="middle"
                fill="#FFFFFF"
                fontFamily="Space Grotesk, sans-serif"
                fontWeight="bold"
                fontSize="18"
              >
                Blockchain
              </text>
              <text
                x="160"
                y="110"
                textAnchor="middle"
                fill="#9CA3AF"
                fontFamily="Inter, sans-serif"
                fontSize="14"
              >
                Holds transactions &
              </text>
              <text
                x="160"
                y="135"
                textAnchor="middle"
                fill="#9CA3AF"
                fontFamily="Inter, sans-serif"
                fontSize="14"
              >
                ledger state
              </text>

              <path
                d="M 320 100 L 375 100"
                stroke="#0F9D58"
                strokeWidth="4"
                strokeDasharray="6 6"
              />
              <polygon points="380,100 370,93 370,107" fill="#0F9D58" />

              <rect
                x="400"
                y="30"
                width="280"
                height="140"
                rx="12"
                fill="#1F2937"
                stroke="#0F9D58"
                strokeWidth="3"
              />
              <text
                x="540"
                y="75"
                textAnchor="middle"
                fill="#FFFFFF"
                fontFamily="Space Grotesk, sans-serif"
                fontWeight="bold"
                fontSize="18"
              >
                Bitcoin Wallet
              </text>
              <text
                x="540"
                y="110"
                textAnchor="middle"
                fill="#9CA3AF"
                fontFamily="Inter, sans-serif"
                fontSize="14"
              >
                Holds private keys &
              </text>
              <text
                x="540"
                y="135"
                textAnchor="middle"
                fill="#9CA3AF"
                fontFamily="Inter, sans-serif"
                fontSize="14"
              >
                signs transactions
              </text>
            </svg>
          </div>

          <H2 id="the-main-types-of-bitcoin-wallets">The Main Types of Bitcoin Wallets</H2>
          <div className="overflow-x-auto mb-md border rounded-xl border-[#0F9D58]/20 bg-surface-container-low">
            <table className="w-full text-left font-body-md text-body-md text-on-surface min-w-[640px]">
              <thead className="bg-[#0F9D58] text-white">
                <tr>
                  <th className="p-md font-semibold">Wallet type</th>
                  <th className="p-md font-semibold border-l border-white/20">Where keys live</th>
                  <th className="p-md font-semibold border-l border-white/20">
                    Connected to internet?
                  </th>
                  <th className="p-md font-semibold border-l border-white/20">Convenience</th>
                  <th className="p-md font-semibold border-l border-white/20">Main trade-off</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">
                    Software (mobile or desktop)
                  </td>
                  <td className="p-md border-l border-outline-variant">On your device</td>
                  <td className="p-md border-l border-outline-variant">Yes</td>
                  <td className="p-md border-l border-outline-variant">High</td>
                  <td className="p-md border-l border-outline-variant">
                    Exposed to device malware
                  </td>
                </tr>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">Hardware</td>
                  <td className="p-md border-l border-outline-variant">Dedicated device</td>
                  <td className="p-md border-l border-outline-variant">Only when you connect it</td>
                  <td className="p-md border-l border-outline-variant">Medium</td>
                  <td className="p-md border-l border-outline-variant">
                    Requires purchase and careful setup
                  </td>
                </tr>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">Paper</td>
                  <td className="p-md border-l border-outline-variant">Printed on paper</td>
                  <td className="p-md border-l border-outline-variant">No</td>
                  <td className="p-md border-l border-outline-variant">Low</td>
                  <td className="p-md border-l border-outline-variant">
                    Fragile; easy to damage or lose
                  </td>
                </tr>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">Web</td>
                  <td className="p-md border-l border-outline-variant">Browser-based service</td>
                  <td className="p-md border-l border-outline-variant">Yes</td>
                  <td className="p-md border-l border-outline-variant">High</td>
                  <td className="p-md border-l border-outline-variant">
                    Depends heavily on the provider's security
                  </td>
                </tr>
                <tr>
                  <td className="p-md font-semibold bg-surface-container-lowest">Custodial</td>
                  <td className="p-md border-l border-outline-variant">Held by a third party</td>
                  <td className="p-md border-l border-outline-variant">Yes</td>
                  <td className="p-md border-l border-outline-variant">Very high</td>
                  <td className="p-md border-l border-outline-variant">You rely on that company</td>
                </tr>
              </tbody>
            </table>
          </div>

          <P>
            Many people use more than one type: a small software wallet for everyday use and a
            hardware or paper-based backup for longer-term holdings.
          </P>

          <H2 id="hot-vs-cold-storage">Hot vs. Cold Storage</H2>
          <P>
            Wallets are often described as "hot" or "cold." Hot wallets stay connected to the
            internet, which makes them convenient for frequent transactions but more exposed to
            online threats. Cold storage keeps keys offline, which reduces exposure and makes it
            slower to move funds. Neither is automatically better. The right choice depends on how
            often you spend and how much you're holding.
          </P>

          <H2 id="custodial-vs-non-custodial">Custodial vs. Non-Custodial</H2>
          <P>
            A non-custodial wallet gives you control of your keys. A{" "}
            <Link
              to="/guides/exchange-or-personal-wallet-crypto-storage"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              custodial
            </Link>{" "}
            account means a third party holds the keys for you, and you have a claim on a balance
            they track. For the full difference, see our guide on{" "}
            <Link
              to="/guides/not-your-keys-not-your-coins-meaning"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              not your keys, not your coins
            </Link>
            .
          </P>

          <H2 id="how-to-choose-a-wallet-type">How to Choose a Wallet Type</H2>
          <P>Ask yourself:</P>
          <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
            <li>
              <strong>How much am I holding?</strong> Larger balances usually justify more secure
              storage.
            </li>
            <li>
              <strong>How often will I spend?</strong> Frequent use favors convenience. Long-term
              holding favors offline storage.
            </li>
            <li>
              <strong>How comfortable am I managing backups?</strong> Non-custodial wallets make you
              responsible for your seed phrase.
            </li>
            <li>
              <strong>Can I test a restore?</strong> Confirm you can recover your wallet on another
              device before relying on it. See{" "}
              <Link
                to="/security/how-to-store-crypto-seed-phrase-safely"
                className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
              >
                how to store your seed phrase safely
              </Link>
              .
            </li>
          </ul>

          <H2 id="common-beginner-mistakes">Common Beginner Mistakes</H2>
          <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
            <li>Losing the seed phrase and assuming the wallet app can recover it</li>
            <li>Downloading a fake wallet app that imitates a real one</li>
            <li>Sharing a private key or seed phrase with "support" staff</li>
            <li>Confusing a wallet address with the wallet itself</li>
          </ul>

          <H2 id="key-takeaways">Key Takeaways</H2>
          <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
            <li>
              A bitcoin wallet stores keys, not coins. Bitcoin itself lives on the blockchain.
            </li>
            <li>
              Wallets come in several types, each balancing convenience against security
              differently.
            </li>
            <li>Hot wallets are convenient but connected. Cold storage is offline and slower.</li>
            <li>
              Your seed phrase is the real backup. Protect it as carefully as the funds it controls.
            </li>
          </ul>

          <H2 id="faq">Frequently Asked Questions</H2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md mb-xl">
            <FAQ faqs={faqs} />
          </div>

          <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
            <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
              Financial Disclaimer
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              This article is for informational and educational purposes only. It is not financial
              or investment advice. Wallet features and security practices change, so verify current
              details with your provider.
            </p>
          </div>

          <RelatedArticles currentUrl={URL} />
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
