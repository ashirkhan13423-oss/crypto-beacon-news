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
import hero from "@/assets/wallet-address-marker-key.svg";

const URL = "https://www.cryptobeacon.site/guides/what-is-a-wallet-address";
const TITLE = "What Is a Wallet Address? A Beginner's Guide | CryptoBeacon";
const DESC =
  "A wallet address is where crypto is sent, not where it's stored. Learn what an address is, how it differs from a private key, and why it's safe to share.";
const PUBLISHED = "2026-11-13";
const MODIFIED = PUBLISHED;
const keyTakeaway =
  "A wallet address is derived mathematically from your public key in a one-way chain. It is safe to share publicly for receiving funds, unlike your private key.";

const faqs: { q: string; a: string }[] = [
  {
    q: "Is it safe to share my wallet address?",
    a: "Yes. Sharing an address lets people send you crypto. It doesn't reveal your private key or give anyone control of your funds.",
  },
  {
    q: "Can someone steal my crypto with my address?",
    a: "Not directly. Control requires the private key. However, publicly visible transaction history can reveal financial activity linked to an address.",
  },
  {
    q: "Why does my address look different on another blockchain?",
    a: "Each blockchain uses its own address format. An address valid on one network may be invalid on another.",
  },
  {
    q: "Can one wallet have many addresses?",
    a: "Yes. Many wallets generate new addresses for each transaction, which helps protect privacy.",
  },
];

export const Route = createFileRoute("/guides/what-is-a-wallet-address")({
  head: () => ({
    ...buildMetadata({
      title: TITLE,
      description: DESC,
      url: URL,
      type: "article",
      path: "/guides/what-is-a-wallet-address",
      publishedTime: PUBLISHED,
      section: "Guides",
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
            section: "Guides",
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
            { name: "Guides", item: "https://www.cryptobeacon.site/guides" },
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
                <Link to="/guides" className="hover:text-secondary">
                  Guides
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-primary">What Is a Wallet Address?</li>
            </ol>
          </nav>

          <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
            Guides
          </span>

          <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
            What Is a Wallet Address? (And Why It's Safe to Share)
          </h1>

          <Author publishedDate={<time dateTime={PUBLISHED}>November 13, 2026</time>} />

          <LastUpdated date={MODIFIED} />

          <KeyTakeaway text={keyTakeaway} />

          <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
            <img
              fetchPriority="high"
              src={hero}
              alt="Illustration of a public address marker beside a locked private key"
              width={1536}
              height={896}
              className="w-full h-auto"
            />
          </figure>

          <P>
            A wallet address is the destination you give someone when they send you crypto. It's
            like an account number: people can use it to send you funds, and it's safe to share.
            What a wallet address is not is your private key, your password, or the place your
            crypto is physically kept. Confusing these three things is one of the most common and
            costly beginner mistakes.
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
                  href="#how-an-address-is-created"
                  className="hover:underline decoration-secondary"
                >
                  How an Address Is Created
                </a>
              </li>
              <li>
                <a href="#what-an-address-is-not" className="hover:underline decoration-secondary">
                  What an Address Is Not
                </a>
              </li>
              <li>
                <a href="#address-formats" className="hover:underline decoration-secondary">
                  Address Formats
                </a>
              </li>
              <li>
                <a
                  href="#public-vs-private-a-quick-reference"
                  className="hover:underline decoration-secondary"
                >
                  Public vs. Private: A Quick Reference
                </a>
              </li>
              <li>
                <a
                  href="#address-reuse-and-privacy"
                  className="hover:underline decoration-secondary"
                >
                  Address Reuse and Privacy
                </a>
              </li>
              <li>
                <a
                  href="#copy-errors-and-address-poisoning"
                  className="hover:underline decoration-secondary"
                >
                  Copy Errors and Address Poisoning
                </a>
              </li>
              <li>
                <a
                  href="#where-to-find-your-address"
                  className="hover:underline decoration-secondary"
                >
                  Where to Find Your Address
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

          <H2 id="how-an-address-is-created">How an Address Is Created</H2>
          <P>Addresses are generated through a chain of one-way steps:</P>
          <ol className="list-decimal pl-lg space-y-sm font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
            <li>A private key is generated, usually from a seed phrase.</li>
            <li>
              Mathematics produces a public key from the private key. This step is easy to run
              forward but practically impossible to reverse.
            </li>
            <li>The public key is processed further to produce a shorter address.</li>
          </ol>
          <P>
            Because the process only runs in one direction, sharing an address doesn't reveal the
            private key behind it.
          </P>

          <H2 id="what-an-address-is-not">What an Address Is Not</H2>
          <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
            <li>
              <strong>Not a private key.</strong> The private key authorizes spending. The address
              only receives.
            </li>
            <li>
              <strong>Not a password.</strong> You can't log in to a blockchain with an address.
            </li>
            <li>
              <strong>Not your identity.</strong> An address is a string of characters, though
              transactions linked to it are publicly visible on the blockchain.
            </li>
            <li>
              <strong>Not a storage location.</strong> Crypto lives on the blockchain. Your wallet
              holds the keys that control it. For more on this core principle, read our guide on{" "}
              <Link
                to="/guides/not-your-keys-not-your-coins-meaning"
                className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
              >
                not your keys, not your coins
              </Link>
              .
            </li>
          </ul>

          <H2 id="address-formats">Address Formats</H2>
          <P>
            Different blockchains use different{" "}
            <Link
              to="/ethereum/can-you-send-bitcoin-to-an-ethereum-address"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              address format
            </Link>{" "}
            rules. Bitcoin addresses typically start with 1, 3, or bc1. Ethereum addresses start
            with 0x. Wallets generally check that an address matches the format of the network
            you're sending on, which is one reason cross-chain sends usually fail rather than
            succeed.
          </P>

          <H2 id="public-vs-private-a-quick-reference">Public vs. Private: A Quick Reference</H2>
          <div className="overflow-x-auto mb-md border rounded-xl border-[#0F9D58]/20 bg-surface-container-low">
            <table className="w-full text-left font-body-md text-body-md text-on-surface min-w-[640px]">
              <thead className="bg-[#0F9D58] text-white">
                <tr>
                  <th className="p-md font-semibold">Item</th>
                  <th className="p-md font-semibold border-l border-white/20">Safe to share?</th>
                  <th className="p-md font-semibold border-l border-white/20">What it does</th>
                  <th className="p-md font-semibold border-l border-white/20">
                    What someone with it can do
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">Wallet address</td>
                  <td className="p-md border-l border-outline-variant">Yes</td>
                  <td className="p-md border-l border-outline-variant">Receives crypto</td>
                  <td className="p-md border-l border-outline-variant">
                    See transactions, send you funds
                  </td>
                </tr>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">Public key</td>
                  <td className="p-md border-l border-outline-variant">Generally yes</td>
                  <td className="p-md border-l border-outline-variant">Verifies signatures</td>
                  <td className="p-md border-l border-outline-variant">
                    Verify ownership, nothing more
                  </td>
                </tr>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">Transaction ID</td>
                  <td className="p-md border-l border-outline-variant">Yes</td>
                  <td className="p-md border-l border-outline-variant">Tracks one payment</td>
                  <td className="p-md border-l border-outline-variant">View that transaction</td>
                </tr>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">Private key</td>
                  <td className="p-md border-l border-outline-variant">Never</td>
                  <td className="p-md border-l border-outline-variant">Authorizes spending</td>
                  <td className="p-md border-l border-outline-variant">Full control of funds</td>
                </tr>
                <tr>
                  <td className="p-md font-semibold bg-surface-container-lowest">Seed phrase</td>
                  <td className="p-md border-l border-outline-variant">Never</td>
                  <td className="p-md border-l border-outline-variant">Regenerates all keys</td>
                  <td className="p-md border-l border-outline-variant">Full control of funds</td>
                </tr>
              </tbody>
            </table>
          </div>

          <H2 id="address-reuse-and-privacy">Address Reuse and Privacy</H2>
          <P>
            Blockchains are public. If you reuse one address for many transactions, anyone can link
            those payments together. Many modern wallets generate a fresh address for each
            transaction automatically, which improves privacy.
          </P>

          <H2 id="copy-errors-and-address-poisoning">Copy Errors and Address Poisoning</H2>
          <P>
            Attackers sometimes create lookalike addresses matching the first and last few
            characters of an address you've used before, hoping you'll copy the wrong one. Always
            compare the full address before confirming a transaction. For a complete pre-send check,
            see{" "}
            <Link
              to="/bitcoin/how-to-send-bitcoin-safely"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              how to send bitcoin safely
            </Link>
            .
          </P>

          <H2 id="where-to-find-your-address">Where to Find Your Address</H2>
          <P>
            Your wallet's receive screen shows your address, usually alongside a QR code. Be
            cautious about addresses posted by unknown accounts or appearing in unsolicited
            messages. Verify the address with the recipient through a trusted channel before
            sending.
          </P>

          <H2 id="key-takeaways">Key Takeaways</H2>
          <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
            <li>A wallet address is where crypto is sent. It's safe to share.</li>
            <li>
              An address is derived from a public key, which is derived from a private key. The
              chain is one-way.
            </li>
            <li>Private keys and seed phrases must never be shared. Addresses can be.</li>
            <li>
              Always verify the full address before sending, and use the address format matching the
              network.
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
              or investment advice.
            </p>
          </div>

          <RelatedArticles currentUrl={URL} />
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
