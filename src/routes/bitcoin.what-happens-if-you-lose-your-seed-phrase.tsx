import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Plus, AlertTriangle } from "lucide-react";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { LastUpdated } from "@/components/LastUpdated";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";

const URL = "https://www.cryptobeacon.site/bitcoin/what-happens-if-you-lose-your-seed-phrase";
const TITLE = "What Happens If You Lose Your Bitcoin Seed Phrase? | CryptoBeacon";
const DESC = "Losing your Bitcoin seed phrase with no other backup means permanent, irrecoverable loss of access to your funds. Understand why, what limited options exist,...";
const PUBLISHED = "2026-09-01";
let MODIFIED = PUBLISHED;
let keyTakeaway = "";
const faqs: { q: string; a: string }[] = [
  {
    q: "Is there any way to recover a lost seed phrase?",
    a: "If the seed phrase itself is lost and you no longer have access to the wallet device, recovery is generally impossible. Bitcoin has no central authority to reset access. Some specialist firms offer partial recovery if you remember most words or have other partial information, but success is not guaranteed and their services can be expensive.",
  },
  {
    q: "What if I still have my hardware wallet device but lost my seed phrase?",
    a: "If the device is functional and you know the PIN, you can still access and move your funds. The seed phrase is only needed if the device is lost, damaged, reset, or the PIN is forgotten. In this situation: move funds immediately to a new wallet with a properly backed-up seed phrase.",
  },
  {
    q: "Can I find my seed phrase in my wallet app?",
    a: "Most wallet apps allow you to view the seed phrase in settings if the wallet is still set up on the device and you have the PIN or password. Check immediately — if the device is still functional, this is your window to retrieve and back up the phrase properly.",
  },
  {
    q: "What is a passphrase and does it help?",
    a: "A BIP-39 passphrase (sometimes called a 25th word) is an additional secret added on top of your seed phrase to create a separate wallet. If you use one, you need both the seed phrase AND the passphrase to recover. It adds security but also another point of potential loss.",
  },
];




export const Route = createFileRoute("/bitcoin/what-happens-if-you-lose-your-seed-phrase")({
  head: () => ({
    ...buildMetadata({ title: TITLE, description: DESC, url: URL, type: 'article', path: '/bitcoin/what-happens-if-you-lose-your-seed-phrase', publishedTime: PUBLISHED, section: 'Bitcoin' }),
    
    
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "What Happens If You Lose Your Bitcoin Seed Phrase? | CryptoBeacon", description: "Losing your Bitcoin seed phrase with no other backup means permanent, irrecoverable loss of access to your funds. Understand why, what limited options exist,...", imageUrl: `https://www.cryptobeacon.site${""}`, datePublished: "2026-09-01", dateModified: "2026-09-01", url: "https://www.cryptobeacon.site/bitcoin/what-happens-if-you-lose-your-seed-phrase", section: "Bitcoin", isNews: false })) },
      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "Bitcoin", item: "https://www.cryptobeacon.site/bitcoin" },
        { name: "What Happens If You Lose Your Bitcoin Seed Phrase? | CryptoBeacon", item: "https://www.cryptobeacon.site/bitcoin/what-happens-if-you-lose-your-seed-phrase" }
      ])) }
    ],
  }),
  component: ArticlePage,
});

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 font-headline-md text-headline-md md:text-headline-lg text-primary mt-xxl mb-md">
      {children}
    </h2>
  );
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">{children}</p>;
}

function ArticlePage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <article>
        <nav aria-label="Breadcrumb" className="mb-lg font-label-caps text-label-caps text-on-surface-variant">
          <ol className="flex flex-wrap items-center gap-xs">
            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link to="/bitcoin" className="hover:text-secondary">Bitcoin</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary">What Happens If You Lose Your Seed Phrase?</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-red-600 text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Bitcoin · Risk
        </span>

        <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-primary mt-md mb-md leading-tight">
          What Happens If You Lose Your Seed Phrase?
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
          The short answer is the one most people don't want to hear: you likely lose access to your Bitcoin permanently. Here is why, and what limited options exist.
        </p>

        <Author />
        <LastUpdated date={MODIFIED} />
        <KeyTakeaway text={keyTakeaway} />
        <TableOfContents />

        <div className="my-xl p-lg rounded-xl border border-red-500/40 bg-red-500/5 flex gap-md">
          <AlertTriangle className="text-red-400 shrink-0 mt-1" size={20} />
          <div>
            <p className="font-body-lg text-body-lg text-primary font-semibold mb-xs">Still have your <Link to="/glossary#wallet" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Wallet">wallet</Link> device?</p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              If your hardware wallet or phone is still functional and you know the PIN, your funds are still accessible. <strong>Act immediately</strong> — go to settings and retrieve your <Link to="/glossary#seed-phrase" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Seed Phrase">seed phrase</Link> now, then store it physically on paper or metal.
            </p>
          </div>
        </div>

        <H2 id="the-reality">The reality of seed phrase loss</H2>
        <P>
          Bitcoin is designed to be permissionless and censorshipresistant. There is no company, no bank, and no government that holds your <Link to="/glossary#private-key" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4" title="Glossary: Private Key">private keys</Link> on your behalf when you self-custody. This is the property that makes Bitcoin censorship-resistant — and it is also why losing your seed phrase has no remedy.
        </P>
        <P>
          When a bank customer forgets their password, the bank can verify identity and reset it. Bitcoin has no such mechanism. The seed phrase <em>is</em> the identity proof. Without it, the network has no way to distinguish you from a stranger — because it treats everyone the same.
        </P>
        <P>
          Estimates suggest that between 3 and 4 million Bitcoin — roughly 15–20% of the total supply — has been permanently lost, much of it due to lost keys and seed phrases.
        </P>

        <H2 id="scenarios">Three scenarios and their outcomes</H2>
        <div className="space-y-md my-lg">
          {[
            {
              title: "Lost seed phrase, device still works",
              outcome: "✅ Funds accessible (for now)",
              detail: "You can still transact normally. Immediately go to settings, retrieve and physically write down your seed phrase. Then move your funds to a properly backed-up wallet as soon as possible. The risk is one device failure or PIN-forgotten away from total loss.",
              color: "#0F9D58",
            },
            {
              title: "Lost seed phrase, device lost or damaged",
              outcome: "❌ Funds permanently inaccessible",
              detail: "This is the irrecoverable scenario. The private keys derived from that seed phrase existed only on that device and in your backup. With both gone, there is no path to recovery through normal channels.",
              color: "#EF4444",
            },
            {
              title: "Partial seed phrase remembered",
              outcome: "⚠️ Possible specialist recovery",
              detail: "If you remember most words — typically 20+ of 24 or 8+ of 12 — specialist recovery firms can attempt to brute-force the missing words. Success rates vary, costs are significant, and you must trust a third party with your partial phrase. Research firms thoroughly before engaging.",
              color: "#F59E0B",
            },
          ].map((s) => (
            <div key={s.title} className="p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
              <div className="flex items-start gap-md mb-sm">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">{s.title}</h3>
                  <span className="font-label-caps text-label-caps mt-xs inline-block" style={{ color: s.color }}>{s.outcome}</span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>

        <H2 id="prevent">Prevention is everything</H2>
        <P>
          The only reliable solution is a physical backup made at wallet setup, stored in at least two separate locations. Many experienced self-custody users keep one copy at home and one in a bank safety deposit box or with a trusted person they have educated on the subject.
        </P>
        <P>
          Metal seed phrase plates (Cryptosteel, Bilodreaux, etc.) are worth considering for long-term or significant-value storage. They survive fire, flooding, and physical damage that would destroy paper.
        </P>
        <P>
          Read the full guide:{" "}
          <Link to="/security/how-to-store-crypto-seed-phrase-safely" className="text-secondary underline">
            How to Store a Seed Phrase Safely →
          </Link>
        </P>

        {/* FAQ */}
        <RelatedArticles currentUrl={URL} />
              </article>
</main>
      <SiteFooter />
    </div>
  );
}
