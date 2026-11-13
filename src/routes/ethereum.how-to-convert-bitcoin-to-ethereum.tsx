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
import hero from "@/assets/convert-btc-eth-chains.svg";

const URL = "https://www.cryptobeacon.site/ethereum/how-to-convert-bitcoin-to-ethereum";
const TITLE = "How to Convert Bitcoin to Ethereum: Methods Explained";
const DESC =
  "Want to turn Bitcoin into Ethereum? Compare the main conversion methods, including exchange swaps, wrapped tokens, and bridges, and the risks involved.";
const PUBLISHED = "2026-11-13";
const MODIFIED = PUBLISHED;
const keyTakeaway =
  "Bitcoin and Ethereum run on separate blockchains. Converting between them requires an intermediary route: an exchange, a wrapped token, or a bridge.";

const faqs: { q: string; a: string }[] = [
  {
    q: "Can I convert bitcoin to ethereum without an exchange?",
    a: "Yes, through a non-custodial route using a wrapped bitcoin token on Ethereum. This requires more technical care.",
  },
  {
    q: "Is wrapped bitcoin the same as bitcoin?",
    a: "No. It's a token on Ethereum that represents bitcoin held by an issuer. Its value depends on that issuer's reserves and operations.",
  },
  {
    q: "What's the safest method?",
    a: "No method is risk-free. Each shifts risk to a different place: the platform, the issuer, or the contract. The right choice depends on which risks you're most willing to accept.",
  },
  {
    q: "Is converting bitcoin to ethereum a taxable event?",
    a: "In many places, yes. Check your local rules or consult a tax professional.",
  },
];

export const Route = createFileRoute("/ethereum/how-to-convert-bitcoin-to-ethereum")({
  head: () => ({
    ...buildMetadata({
      title: TITLE,
      description: DESC,
      url: URL,
      type: "article",
      path: "/ethereum/how-to-convert-bitcoin-to-ethereum",
      publishedTime: PUBLISHED,
      section: "Ethereum",
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
            section: "Ethereum",
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
            { name: "Ethereum", item: "https://www.cryptobeacon.site/ethereum" },
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
                <Link to="/ethereum" className="hover:text-secondary">
                  Ethereum
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-primary">How to Convert Bitcoin to Ethereum</li>
            </ol>
          </nav>

          <span className="inline-block px-sm py-xs rounded-full bg-[#2563EB] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
            Ethereum
          </span>

          <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
            How to Convert Bitcoin to Ethereum: Methods, Trade-Offs, and Risks
          </h1>

          <Author publishedDate={<time dateTime={PUBLISHED}>November 13, 2026</time>} />

          <LastUpdated date={MODIFIED} />

          <KeyTakeaway text={keyTakeaway} />

          <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
            <img
              fetchPriority="high"
              src={hero}
              alt="Illustration of two linked chain shapes representing a bitcoin-to-ethereum conversion"
              width={1536}
              height={896}
              className="w-full h-auto"
            />
          </figure>

          <P>
            Bitcoin and Ethereum run on separate blockchains, so you can't send bitcoin to an
            Ethereum address and expect it to become ether. (For why that send fails, see{" "}
            <Link
              to="/ethereum/can-you-send-bitcoin-to-an-ethereum-address"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              can you send bitcoin to an Ethereum address
            </Link>
            .) If you want to move from bitcoin into ether, you need a conversion route. Each route
            involves different trade-offs in custody, cost, and risk.
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
                  href="#why-direct-transfer-doesnt-exist"
                  className="hover:underline decoration-secondary"
                >
                  Why Direct Transfer Doesn't Exist
                </a>
              </li>
              <li>
                <a href="#method-1-exchange-swap" className="hover:underline decoration-secondary">
                  Method 1: Exchange Swap
                </a>
              </li>
              <li>
                <a
                  href="#method-2-wrapped-bitcoin-on-ethereum"
                  className="hover:underline decoration-secondary"
                >
                  Method 2: Wrapped Bitcoin on Ethereum
                </a>
              </li>
              <li>
                <a
                  href="#method-3-cross-chain-bridges"
                  className="hover:underline decoration-secondary"
                >
                  Method 3: Cross-Chain Bridges
                </a>
              </li>
              <li>
                <a
                  href="#method-4-decentralized-exchange-from-your-own-wallet"
                  className="hover:underline decoration-secondary"
                >
                  Method 4: Decentralized Exchange From Your Own Wallet
                </a>
              </li>
              <li>
                <a href="#comparing-the-methods" className="hover:underline decoration-secondary">
                  Comparing the Methods
                </a>
              </li>
              <li>
                <a href="#costs-that-add-up" className="hover:underline decoration-secondary">
                  Costs That Add Up
                </a>
              </li>
              <li>
                <a href="#a-note-on-taxes" className="hover:underline decoration-secondary">
                  A Note on Taxes
                </a>
              </li>
              <li>
                <a
                  href="#safety-checklist-before-converting"
                  className="hover:underline decoration-secondary"
                >
                  Safety Checklist Before Converting
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

          <H2 id="why-direct-transfer-doesnt-exist">Why Direct Transfer Doesn't Exist</H2>
          <P>
            A blockchain can only record transactions on its own ledger. Moving value from one chain
            to another requires an intermediary: a company, a protocol, or a bridge that locks
            assets on one side and issues a representation on the other. Each intermediary adds a
            new point of trust or failure.
          </P>

          {/* Inline SVG Flow Diagram */}
          <div className="my-lg p-lg rounded-xl border border-outline-variant bg-surface-container-low flex flex-col items-center">
            <svg viewBox="0 0 700 160" className="w-full max-w-xl h-auto">
              {/* BTC Box */}
              <rect
                x="20"
                y="35"
                width="160"
                height="90"
                rx="10"
                fill="#1F2937"
                stroke="#2563EB"
                strokeWidth="2.5"
              />
              <text
                x="100"
                y="75"
                textAnchor="middle"
                fill="#FFFFFF"
                fontFamily="Space Grotesk, sans-serif"
                fontWeight="bold"
                fontSize="16"
              >
                Native BTC
              </text>
              <text
                x="100"
                y="100"
                textAnchor="middle"
                fill="#9CA3AF"
                fontFamily="Inter, sans-serif"
                fontSize="12"
              >
                Bitcoin Network
              </text>

              {/* Arrow 1 */}
              <path d="M 190 80 L 255 80" stroke="#64748B" strokeWidth="3" strokeDasharray="6 6" />
              <polygon points="260,80 250,75 250,85" fill="#64748B" />

              {/* Intermediary Box */}
              <rect
                x="270"
                y="25"
                width="180"
                height="110"
                rx="10"
                fill="#111827"
                stroke="#0F9D58"
                strokeWidth="2.5"
              />
              <text
                x="360"
                y="60"
                textAnchor="middle"
                fill="#0F9D58"
                fontFamily="Space Grotesk, sans-serif"
                fontWeight="bold"
                fontSize="14"
              >
                Intermediary Route
              </text>
              <text
                x="360"
                y="85"
                textAnchor="middle"
                fill="#E5E7EB"
                fontFamily="Inter, sans-serif"
                fontSize="12"
              >
                Exchange Swap,
              </text>
              <text
                x="360"
                y="105"
                textAnchor="middle"
                fill="#E5E7EB"
                fontFamily="Inter, sans-serif"
                fontSize="12"
              >
                Wrapped Token or Bridge
              </text>

              {/* Arrow 2 */}
              <path d="M 460 80 L 515 80" stroke="#64748B" strokeWidth="3" strokeDasharray="6 6" />
              <polygon points="520,80 510,75 510,85" fill="#64748B" />

              {/* ETH Box */}
              <rect
                x="530"
                y="35"
                width="150"
                height="90"
                rx="10"
                fill="#1F2937"
                stroke="#2563EB"
                strokeWidth="2.5"
              />
              <text
                x="605"
                y="75"
                textAnchor="middle"
                fill="#FFFFFF"
                fontFamily="Space Grotesk, sans-serif"
                fontWeight="bold"
                fontSize="16"
              >
                Native ETH
              </text>
              <text
                x="605"
                y="100"
                textAnchor="middle"
                fill="#9CA3AF"
                fontFamily="Inter, sans-serif"
                fontSize="12"
              >
                Ethereum Network
              </text>
            </svg>
          </div>

          <H2 id="method-1-exchange-swap">Method 1: Exchange Swap</H2>
          <P>
            You sell bitcoin for ether on a centralized trading platform, then withdraw the ether to
            your own wallet.
          </P>
          <P>
            <strong>Pros:</strong> Simple, familiar, one platform handles the trade.
          </P>
          <P>
            <strong>Cons:</strong> You rely on the platform's security and solvency while holding
            the assets. Fees and spreads apply.
          </P>
          <P>
            <strong>Watch for:</strong> Choosing the correct withdrawal network. Sending ether to
            the wrong network can cause loss. For pre-send security habits, see our checklist on{" "}
            <Link
              to="/bitcoin/how-to-send-bitcoin-safely"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              how to send bitcoin safely
            </Link>
            .
          </P>

          <H2 id="method-2-wrapped-bitcoin-on-ethereum">Method 2: Wrapped Bitcoin on Ethereum</H2>
          <P>
            A wrapped token represents bitcoin on Ethereum. It's issued by a custodian or protocol
            that holds the underlying bitcoin. You then trade the wrapped token for ether on
            Ethereum.
          </P>
          <P>
            <strong>Pros:</strong> Lets you trade bitcoin exposure directly on Ethereum.
          </P>
          <P>
            <strong>Cons:</strong> A wrapped token is not native bitcoin. You depend on the issuer
            and its reserves.
          </P>

          <H2 id="method-3-cross-chain-bridges">Method 3: Cross-Chain Bridges</H2>
          <P>
            Bridges move value between chains using smart contracts or validator sets. Bridges have
            been targets of some of the largest losses in crypto history, so they carry
            significantly higher risk than other routes.
          </P>

          <H2 id="method-4-decentralized-exchange-from-your-own-wallet">
            Method 4: Decentralized Exchange From Your Own Wallet
          </H2>
          <P>
            Non-custodial swaps happen directly from your wallet, but you first need the bitcoin
            representation on the same chain, usually a wrapped token.
          </P>
          <P>
            <strong>Pros:</strong> You keep custody throughout.
          </P>
          <P>
            <strong>Cons:</strong> Requires verifying the token contract, understanding fees, and
            managing token approvals afterward. See{" "}
            <Link
              to="/security/how-to-revoke-token-approvals-metamask"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              how to revoke token approvals
            </Link>
            .
          </P>

          <H2 id="comparing-the-methods">Comparing the Methods</H2>
          <div className="overflow-x-auto mb-md border rounded-xl border-[#0F9D58]/20 bg-surface-container-low">
            <table className="w-full text-left font-body-md text-body-md text-on-surface min-w-[640px]">
              <thead className="bg-[#0F9D58] text-white">
                <tr>
                  <th className="p-md font-semibold">Method</th>
                  <th className="p-md font-semibold border-l border-white/20">
                    Who holds the assets
                  </th>
                  <th className="p-md font-semibold border-l border-white/20">Complexity</th>
                  <th className="p-md font-semibold border-l border-white/20">Main risks</th>
                  <th className="p-md font-semibold border-l border-white/20">Key check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">Exchange swap</td>
                  <td className="p-md border-l border-outline-variant">
                    Platform, until withdrawal
                  </td>
                  <td className="p-md border-l border-outline-variant">Low</td>
                  <td className="p-md border-l border-outline-variant">
                    Platform failure, withdrawal errors
                  </td>
                  <td className="p-md border-l border-outline-variant">Correct network</td>
                </tr>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">
                    Wrapped bitcoin
                  </td>
                  <td className="p-md border-l border-outline-variant">Issuer's reserves</td>
                  <td className="p-md border-l border-outline-variant">Medium</td>
                  <td className="p-md border-l border-outline-variant">Issuer and reserve risk</td>
                  <td className="p-md border-l border-outline-variant">Verify the issuer</td>
                </tr>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">
                    Cross-chain bridge
                  </td>
                  <td className="p-md border-l border-outline-variant">Bridge contracts</td>
                  <td className="p-md border-l border-outline-variant">High</td>
                  <td className="p-md border-l border-outline-variant">Smart contract exploits</td>
                  <td className="p-md border-l border-outline-variant">Verify the bridge</td>
                </tr>
                <tr>
                  <td className="p-md font-semibold bg-surface-container-lowest">
                    Own-wallet swap
                  </td>
                  <td className="p-md border-l border-outline-variant">
                    You, plus wrapped token issuer
                  </td>
                  <td className="p-md border-l border-outline-variant">High</td>
                  <td className="p-md border-l border-outline-variant">Fake tokens, approvals</td>
                  <td className="p-md border-l border-outline-variant">Verify contract address</td>
                </tr>
              </tbody>
            </table>
          </div>

          <H2 id="costs-that-add-up">Costs That Add Up</H2>
          <P>
            Conversions can involve trading spreads, network fees on each chain, withdrawal fees,
            and slippage, the difference between the price you expected and the price you got. These
            costs vary by method and conditions, so compare total cost, not just the headline rate.
          </P>

          <H2 id="a-note-on-taxes">A Note on Taxes</H2>
          <P>
            In many jurisdictions, swapping one crypto asset for another is a taxable event, even
            without converting to cash. Rules vary by country. This is general information, not tax
            advice.
          </P>

          <H2 id="safety-checklist-before-converting">Safety Checklist Before Converting</H2>
          <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
            <li>Confirm the destination network before sending any funds</li>
            <li>
              Verify the token's contract address against an official source, not just its name
            </li>
            <li>Test with a small amount first</li>
            <li>Review and revoke any token approvals you no longer need afterward</li>
          </ul>

          <H2 id="key-takeaways">Key Takeaways</H2>
          <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
            <li>
              Bitcoin can't be sent directly to an Ethereum address and turned into ether. A
              conversion route is required.
            </li>
            <li>
              Exchange swaps are simple but require trusting the platform. Wrapped tokens and
              bridges add issuer or contract risk.
            </li>
            <li>Bridges carry the highest risk of the common methods.</li>
            <li>
              Total cost, custody, and verification matter more than the headline exchange rate.
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
              This article is for informational and educational purposes only. It is not financial,
              investment, or tax advice. Conversion methods carry real risks, including loss of
              funds.
            </p>
          </div>

          <RelatedArticles currentUrl={URL} />
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
