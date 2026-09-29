import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Disclaimer } from "@/components/Disclaimer";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ArticleAdSlot } from "@/components/AdUnit";
import { AlertTriangle } from "lucide-react";
import hero from "@/assets/seed-phishing.webp";

const URL = "https://www.cryptobeacon.site/security/is-this-airdrop-a-scam";
const TITLE = "Is This Airdrop a Scam? How to Tell | CryptoBeacon";
const DESC =
  "Free tokens just showed up in your wallet — is it real? Here's how to tell a legitimate airdrop from a scam before you connect anything.";
const PUBLISHED = "2026-09-29";
let MODIFIED = PUBLISHED;

const faqs: { q: string; a: string }[] = [
  {
    q: "Is it safe to just connect my wallet to check if an airdrop is real?",
    a: "A simple view-only connection carries less risk than signing a transaction, but the safest approach is verifying the project through official channels first, before connecting anything.",
  },
  {
    q: "What should I do with a random token that showed up in my wallet?",
    a: "Leave it alone. Don't try to sell, swap, or interact with it — some malicious tokens are designed specifically to trigger a harmful approval the moment you attempt to move them.",
  },
  {
    q: "Can a legitimate project ever ask for payment for an airdrop?",
    a: "No — a genuine airdrop is a free distribution. Any request to pay, \"unlock,\" or \"verify\" with a payment is a scam pattern, regardless of how the project presents itself.",
  },
  {
    q: "How do I know if an airdrop announcement is really from the official project?",
    a: "Check the project's own established website and social channels directly, and confirm the announcement appears in more than one official place — don't rely solely on the post or link that first reached you.",
  },
];

export const Route = createFileRoute("/security/is-this-airdrop-a-scam")({
  head: () => ({
    ...buildMetadata({
      title: TITLE,
      description: DESC,
      url: URL,
      type: "article",
      path: "/security/is-this-airdrop-a-scam",
      publishedTime: PUBLISHED,
      section: "Security",
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
            section: "Security",
            isNews: false,
          })
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbSchema([
            { name: "Home", item: "https://www.cryptobeacon.site/" },
            { name: "Security", item: "https://www.cryptobeacon.site/security" },
            { name: TITLE, item: URL },
          ])
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

function DecisionChart() {
  const rows = [
    {
      signal: "Announcement source",
      legit: "Project's own established official channels",
      scam: "Single post, DM, or an account with little history",
    },
    {
      signal: "Payment required",
      legit: "Never",
      scam: "Asked to send crypto to \"unlock\" or \"verify\"",
    },
    {
      signal: "Wallet request",
      legit: "At most, a standard connect (view-only)",
      scam: "Asks you to sign a token \"approval\" or share a seed phrase",
    },
    {
      signal: "Urgency",
      legit: "No pressure — claim windows are reasonable",
      scam: "\"Claim in the next hour or lose it forever\"",
    },
    {
      signal: "How you found it",
      legit: "You went looking, or it's from an account you already followed before the announcement",
      scam: "It found you — unsolicited DM, random token appearing in your wallet",
    },
    {
      signal: "Project history",
      legit: "Established presence before the airdrop",
      scam: "Account or project created around the same time as the announcement",
    },
  ];

  return (
    <div className="overflow-x-auto my-xl border rounded-xl border-[#0F9D58]/20 bg-surface-container-low">
      <table className="w-full text-left font-body-md text-body-md text-on-surface min-w-[640px]">
        <thead className="bg-[#0F9D58] text-white">
          <tr>
            <th className="p-md font-semibold">Signal</th>
            <th className="p-md font-semibold border-l border-white/20">Legitimate Airdrop</th>
            <th className="p-md font-semibold border-l border-white/20">Scam Airdrop</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i < rows.length - 1 ? "border-b border-outline-variant" : ""}>
              <td className="p-md font-semibold bg-surface-container-lowest align-top">{row.signal}</td>
              <td className="p-md border-l border-outline-variant align-top">{row.legit}</td>
              <td className="p-md border-l border-outline-variant align-top text-[#EF4444]">{row.scam}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
                <Link to="/security" className="hover:text-secondary">
                  Security
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-primary">Is This Airdrop a Scam?</li>
            </ol>
          </nav>

          <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
            Security
          </span>

          <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
            How to Tell If a Crypto Airdrop Is a Scam
          </h1>

          <Author
            publishedDate={<time dateTime={PUBLISHED}>September 29, 2026</time>}
          />

          <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
            <img
              fetchPriority="high"
              src={hero}
              alt="Illustration representing a suspicious crypto token drop being inspected"
              width={1600}
              height={896}
              className="w-full h-auto"
            />
          </figure>

          <P>
            Free tokens appear in your wallet, or you see a post promising a giveaway for connecting
            your wallet and completing a few tasks. Some airdrops are genuinely legitimate marketing
            campaigns. Many are traps built specifically to look like one. Here's how to tell the
            difference before you interact with anything.
          </P>
          <P>
            <em>
              This article is educational. It isn't financial advice, and it doesn't rank or
              recommend any specific airdrop or project.
            </em>
          </P>

          <div className="my-md">
            <ArticleAdSlot slotIndex={1} />
          </div>

          <aside className="my-xl p-lg rounded-lg border border-outline-variant bg-surface-container-low">
            <h2 className="font-headline-sm text-headline-sm text-primary mb-sm">
              Table of Contents
            </h2>
            <ol className="list-decimal list-inside space-y-xs font-body-md text-body-md text-on-surface">
              <li>
                <a href="#legitimate" className="hover:underline decoration-secondary">
                  What a Legitimate Airdrop Actually Looks Like
                </a>
              </li>
              <li>
                <a href="#decision-chart" className="hover:underline decoration-secondary">
                  The Decision Chart
                </a>
              </li>
              <li>
                <a href="#disqualifiers" className="hover:underline decoration-secondary">
                  The Three Automatic Disqualifiers
                </a>
              </li>
              <li>
                <a href="#random-token" className="hover:underline decoration-secondary">
                  What to Do If a Random Token Just Appears in Your Wallet
                </a>
              </li>
              <li>
                <a href="#verification" className="hover:underline decoration-secondary">
                  Quick Verification Steps
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

          <H2 id="legitimate">What a Legitimate Airdrop Actually Looks Like</H2>
          <P>
            Real airdrops are typically announced across a project's own official, established
            channels — not just one obscure post. They don't require payment to receive them, they
            don't ask for your seed phrase under any circumstance, and they're usually tied to a
            project with a visible history, not one that appeared out of nowhere alongside the
            airdrop announcement itself.
          </P>

          <H2 id="decision-chart">The Decision Chart</H2>
          <P>
            Use this table as a quick reference when evaluating any airdrop. A single red-column
            match doesn't automatically mean scam — but multiple matches should raise serious
            concern, and any of the items in{" "}
            <a
              href="#disqualifiers"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              the three automatic disqualifiers
            </a>{" "}
            below mean stop regardless.
          </P>

          <DecisionChart />

          <div className="my-md">
            <ArticleAdSlot slotIndex={2} />
          </div>

          <H2 id="disqualifiers">
            <span className="inline-flex items-center gap-xs">
              <AlertTriangle
                aria-hidden
                className="text-[#0F9D58]"
                size={22}
              />
              The Three Automatic Disqualifiers
            </span>
          </H2>
          <P>Regardless of anything else about the offer, treat these as an immediate stop:</P>
          <div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
            <ol className="list-decimal pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed">
              <li>
                <strong>Any request for your seed phrase or private key.</strong> No legitimate
                airdrop, ever, under any framing, needs this to "verify" you.
              </li>
              <li>
                <strong>Any request to send crypto first</strong> — to "unlock," "verify," or
                "cover gas" before receiving tokens. Legitimate airdrops give tokens away; they
                don't ask you to pay for them.
              </li>
              <li>
                <strong>
                  A{" "}
                  <Link
                    to="/security/how-to-revoke-token-approvals-metamask"
                    className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
                  >
                    transaction approval you don't understand
                  </Link>
                  .
                </strong>{" "}
                If connecting your wallet prompts a signature request for something other than a
                simple view-only connection, and you can't explain in plain language what it's
                authorizing, don't sign it.
              </li>
            </ol>
          </div>

          <H2 id="random-token">What to Do If a Random Token Just Appears in Your Wallet</H2>
          <P>
            This is a common scam delivery method, not a sign you were specifically targeted for
            something legitimate. Do not attempt to sell, swap, or interact with an unsolicited
            token at all — the token's own contract can be built specifically to trigger a malicious
            approval the moment you try to move it. This is the same mechanism behind{" "}
            <Link
              to="/security/how-to-avoid-crypto-phishing-scams"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              wallet drainer
            </Link>{" "}
            attacks. The safest response is to simply ignore it. It sitting in your wallet,
            untouched, causes no harm on its own.
          </P>

          <H2 id="verification">Quick Verification Steps</H2>
          <ol className="list-decimal pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
            <li>
              <strong>
                Check the project's own official website and established social accounts directly
              </strong>{" "}
              — don't trust a link from the airdrop post itself; navigate there independently.
            </li>
            <li>
              <strong>
                Confirm the same announcement appears across multiple official channels
              </strong>
              , not just the one place you first saw it.
            </li>
            <li>
              <strong>Look at the account or project's history.</strong> A project with months or
              years of visible activity behind it is a different situation than one that appeared
              alongside the airdrop.
            </li>
            <li>
              <strong>If in doubt, don't connect your wallet at all.</strong> Missing a legitimate
              airdrop costs you nothing; connecting to a fake one can cost everything in that
              wallet.
            </li>
          </ol>

          <H2 id="takeaways">Key Takeaways</H2>

          <div className="my-md">
            <ArticleAdSlot slotIndex={3} />
          </div>

          <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
            <li>
              Legitimate airdrops never require payment, never ask for your seed phrase, and are
              announced across established official channels — not a single unsolicited post.
            </li>
            <li>
              A request for your seed phrase, an upfront payment, or a transaction you don't
              understand are automatic disqualifiers, regardless of how convincing everything else
              looks.
            </li>
            <li>
              If a random token appears in your wallet unprompted, leave it alone entirely rather
              than trying to sell or interact with it.
            </li>
            <li>
              When in doubt, skip it — the cost of missing a real airdrop is nothing compared to
              the cost of a fake one.
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
            <Disclaimer />
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-xs">
              This article is for informational and educational purposes only and should not be
              considered financial or investment advice. It does not evaluate, rank, or recommend
              any specific airdrop, token, or project.
            </p>
          </div>

          <RelatedArticles currentUrl={URL} />
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
