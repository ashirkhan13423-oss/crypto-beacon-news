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
import hero from "@/assets/revoke-approval.jpg";

const URL = "https://www.cryptobeacon.site/security/how-to-revoke-token-approvals-metamask";
const TITLE = "How to Revoke Token Approvals on MetaMask | CryptoBeacon";
const DESC = "Old token approvals can let drained wallets happen. Here is exactly how to review and revoke them on MetaMask, step by step, to secure your crypto.";
const PUBLISHED = "2026-09-27";
let MODIFIED = PUBLISHED;
let keyTakeaway = "Revoking old token approvals is a critical security habit that prevents drained wallets if a smart contract is later compromised.";

const faqs: { q: string; a: string }[] = [
  {
    q: "Does revoking a token approval cost money?",
    a: "Yes — it's an on-chain transaction, so it requires a small network fee, the same as any other transaction.",
  },
  {
    q: "Will revoking an approval affect the tokens I already hold?",
    a: "No. Revoking only removes a contract's permission to move tokens in the future — it has no effect on your existing balance.",
  },
  {
    q: "How often should I check my token approvals?",
    a: "A quarterly review is a reasonable habit, and it's worth checking again any time you've used a new or unfamiliar dApp.",
  },
  {
    q: "Is it safe to use a third-party revoke tool instead of a block explorer?",
    a: "Treat any tool that requests wallet access the same way you'd vet any dApp — check its reputation, understand what it's asking permission for, and revoke its own access afterward if it's a one-time check.",
  }
];

export const Route = createFileRoute("/security/how-to-revoke-token-approvals-metamask")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/security/how-to-revoke-token-approvals-metamask', publishedTime: PUBLISHED, section: 'Security' }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: TITLE, description: DESC, imageUrl: `https://www.cryptobeacon.site${hero}`, datePublished: PUBLISHED, dateModified: PUBLISHED, url: URL, section: "Security", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Security", item: "https://www.cryptobeacon.site/security" },
        { name: TITLE, item: URL }
      ])) }
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
  const steps = [
    { step: "1", title: "Open MetaMask", desc: "Open MetaMask and select the network your tokens are on (approvals are network-specific — check each network you actively use)." },
    { step: "2", title: "Go to Settings → Connected Sites / Permissions", desc: "Navigate here (labeled \"Permissions\" in current versions) to see which sites currently have wallet access. This shows connections, which is a related but separate thing from token spending approvals — remove any sites you don't recognize or no longer use here first." },
    { step: "3", title: "Check Token Approvals via Block Explorer", desc: "For token spending approvals specifically, MetaMask directs you to a block explorer's token approval checker for your network (for example, Etherscan's \"Token Approvals\" tool for Ethereum mainnet). Connect your wallet there in read-only view to see a full list of active approvals." },
    { step: "4", title: "Review the List", desc: "Look for: contracts you don't recognize, dApps you used once and never returned to, and any approval marked \"Unlimited\" for a token you hold a meaningful balance of." },
    { step: "5", title: "Revoke Unwanted Approvals", desc: "Click \"Revoke\" next to any approval you want to remove. This creates a new transaction (revoking requires a small network fee, since it's an on-chain action) that sets the approved amount back to zero." },
    { step: "6", title: "Confirm in MetaMask", desc: "Confirm the transaction in MetaMask when the popup appears. Once confirmed, that contract can no longer move the token, even if it's later compromised." },
    { step: "7", title: "Repeat Periodically", desc: "A quarterly check is a reasonable habit, or immediately after using any new or unfamiliar dApp." }
  ];

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
              <li className="text-primary">Revoke Token Approvals</li>
            </ol>
          </nav>

          <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
            Security
          </span>

          <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
            How to Revoke Token Approvals on MetaMask (Step-by-Step)
          </h1>

          <Author
            publishedDate={<time dateTime={PUBLISHED}>September 27, 2026</time>}
          />

          <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
            <img
              fetchPriority="high" src={hero}
              alt="Illustration of a wallet interface revoking a token spending permission"
              width={1600}
              height={896}
              className="w-full h-auto"
            />
          </figure>

          <P>
            Every time you use a decentralized app — swapping tokens, minting an NFT, staking — you typically approve that app's <Link to="/guides/what-is-a-smart-contract-explained" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4">smart contract</Link> to spend a specific token from your wallet. Most people approve these permissions once and never think about them again. That's the problem: an old, forgotten approval to a contract that later turns out to be compromised is one of the most common ways <Link to="/security/how-to-avoid-crypto-phishing-scams" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4">wallet drainer</Link> attacks happen, even years after the original interaction. Fake airdrops are a common delivery method for this exact kind of harmful approval — if you're evaluating an airdrop right now, see our guide on <Link to="/security/is-this-airdrop-a-scam" className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]">how to tell if a crypto airdrop is a scam</Link>.
          </P>
          <P>
            This guide covers what a token approval actually is and exactly how to review and revoke one in MetaMask.
          </P>
          <P>
            <em>
              This comprehensive guide to how to revoke token approvals metamask is for educational purposes only and should not be construed as financial advice. Always do your own research before making investment decisions.
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
              <li><a href="#what" className="hover:underline decoration-secondary">What a Token Approval Actually Is</a></li>
              <li><a href="#why" className="hover:underline decoration-secondary">Why This Matters Even If You Weren't "Hacked"</a></li>
              <li><a href="#how" className="hover:underline decoration-secondary">How to Review and Revoke Approvals on MetaMask</a></li>
              <li><a href="#things-to-know" className="hover:underline decoration-secondary">A Few Things to Know Before You Start</a></li>
              <li><a href="#takeaways" className="hover:underline decoration-secondary">Key Takeaways</a></li>
              <li><a href="#faq" className="hover:underline decoration-secondary">Frequently Asked Questions</a></li>
            </ol>
          </aside>

          <H2 id="what">What a Token Approval Actually Is</H2>
          <P>
            When a dApp needs to move your tokens on your behalf, it asks you to sign an approval transaction first. That approval can be for a <strong>limited</strong> amount (just enough for the transaction you're doing) or <strong>unlimited</strong> (many dApps request this by default, so you won't need to re-approve on every future transaction). Unlimited approvals are convenient — and they're also a standing risk, because that permission remains active indefinitely until you manually revoke it, regardless of whether you ever use that dApp again.
          </P>

          <div className="overflow-x-auto mb-md border rounded-xl border-[#0F9D58]/20 bg-surface-container-low">
            <table className="w-full text-left font-body-md text-body-md text-on-surface min-w-[640px]">
              <thead className="bg-[#0F9D58] text-white">
                <tr>
                  <th className="p-md font-semibold"></th>
                  <th className="p-md font-semibold border-l border-white/20">Limited Approval</th>
                  <th className="p-md font-semibold border-l border-white/20">Unlimited Approval</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">Ongoing risk if contract is compromised later</td>
                  <td className="p-md border-l border-outline-variant">Capped at approved amount</td>
                  <td className="p-md border-l border-outline-variant">Full token balance</td>
                </tr>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">Convenience</td>
                  <td className="p-md border-l border-outline-variant">Re-approve each time</td>
                  <td className="p-md border-l border-outline-variant">One-time setup</td>
                </tr>
                <tr>
                  <td className="p-md font-semibold bg-surface-container-lowest">Recommended for</td>
                  <td className="p-md border-l border-outline-variant">Unfamiliar or one-time dApps</td>
                  <td className="p-md border-l border-outline-variant">Established, frequently-used platforms only</td>
                </tr>
              </tbody>
            </table>
          </div>



          <H2 id="why">Why This Matters Even If You Weren't "Hacked"</H2>
          <P>
            A wallet drainer attack doesn't need to steal your <Link to="/security/how-to-store-crypto-seed-phrase-safely" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4">seed phrase</Link>. If a contract you approved months ago is later exploited or maliciously updated, an attacker can use your <em>existing</em> approval to move funds — without you signing anything new at all. This is why periodic review matters even if you haven't clicked anything suspicious recently.
          </P>

          <H2 id="how">How to Review and Revoke Approvals on MetaMask</H2>
          
          <div className="space-y-sm mb-xl">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-md p-md rounded-lg border border-outline-variant bg-surface-container-lowest">
                <div className="w-8 h-8 rounded-full bg-[#0F9D58] text-white flex items-center justify-center font-bold text-sm shrink-0">{s.step}</div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">{s.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <H2 id="things-to-know">A Few Things to Know Before You Start</H2>
          <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
            <li><strong>Revoking costs a small network fee</strong> for each individual approval, since it's an on-chain transaction. If you have many old approvals, batch tools exist that can revoke several in fewer transactions — approach these the same way you'd vet any dApp: check its reputation and permissions before connecting.</li>
            <li><strong>Revoking doesn't affect funds already in your wallet</strong> — it only removes a contract's <em>permission</em> to move tokens in the future. It's not a recovery action, it's a prevention one.</li>
            <li><strong>You don't need to revoke approvals for platforms you actively and currently trust and use.</strong> The goal is removing forgotten, unused permissions — not stripping every approval indiscriminately.</li>
          </ul>

          <H2 id="takeaways">Key Takeaways</H2>
          <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
            <li>A token approval gives a smart contract permission to move a specific token from your wallet — sometimes indefinitely, if set to "unlimited."</li>
            <li>Old approvals remain a risk even long after you've stopped using the dApp, since a later compromise of that contract can still use your standing permission.</li>
            <li>Revoking sets the approval back to zero and costs a small network fee, but doesn't touch your existing token balance.</li>
            <li>A quarterly review habit, or a check after using any new dApp, is a reasonable baseline.</li>
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
              Wallet interfaces and steps may change over time — always verify current steps against your wallet's official documentation.
            </p>
          </div>

          <RelatedArticles currentUrl={URL} />
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
