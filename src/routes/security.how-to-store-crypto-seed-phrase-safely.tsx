import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import seedVault from "@/assets/seed-phrase-vault.jpg";
import seedMetalPaper from "@/assets/seed-metal-vs-paper.jpg";
import seedPhishing from "@/assets/seed-phishing.jpg";
import { Plus } from "lucide-react";


const URL = "https://crypto-beacon-news.vercel.app/security/how-to-store-crypto-seed-phrase-safely";
const TITLE = "How to Store a Crypto Seed Phrase Safely | CryptoBeacon";
const DESC =
  "Learn how to store your crypto seed phrase safely, avoid the mistakes that cause permanent loss, and choose the right backup method for you.";
const PUBLISHED = "2026-07-02";

const faqs: { q: string; a: string }[] = [
  {
    q: "What is a seed phrase used for?",
    a: "It's used to generate and restore access to every private key in a wallet. If you lose your device but still have the seed phrase, you can recover full access on a new one.",
  },
  {
    q: "Is it safe to store a seed phrase in a password manager?",
    a: "This isn't recommended. Even security-focused apps are connected to the internet in some form, which introduces risk that fully offline storage avoids.",
  },
  {
    q: "What happens if I lose my seed phrase?",
    a: "If it's the only backup and the wallet device is also lost or damaged, the funds are typically unrecoverable. There is no central authority able to restore access.",
  },
  {
    q: "Is paper or metal better for seed phrase storage?",
    a: "Paper is accessible and low-cost but vulnerable to fire, water, and fading. Metal plates cost more but withstand environmental damage far better, making them a stronger choice for long-term or larger holdings.",
  },
  {
    q: "Can someone steal my crypto with just my seed phrase?",
    a: "Yes. Anyone who has the complete, correctly ordered phrase can regenerate your private keys and move your funds. It should be treated with the same seriousness as physical cash.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Store Your Crypto Seed Phrase Safely",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Organization", name: "CryptoBeacon Editorial" },
  publisher: {
    "@type": "Organization",
    name: "CryptoBeacon",
    logo: {
      "@type": "ImageObject",
      url: "https://crypto-beacon-news.vercel.app/favicon.png",
    },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  image: `https://crypto-beacon-news.vercel.app${seedVault}`,
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

export const Route = createFileRoute("/security/how-to-store-crypto-seed-phrase-safely")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "how to store a crypto seed phrase safely, seed phrase storage best practices, seed phrase mistakes to avoid, where to store your seed phrase, metal seed phrase storage, how to backup a crypto wallet, BIP39, self-custody, hardware wallet" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:section", content: "Security" },
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
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-lg font-label-caps text-label-caps text-on-surface-variant">
          <ol className="flex flex-wrap items-center gap-xs">
            <li>
              <Link to="/" className="hover:text-secondary">Home</Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link to="/security" className="hover:text-secondary">Security</Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">Seed Phrase Storage</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          How to Store Your Crypto Seed Phrase Safely
        </h1>

        <div className="mt-md flex flex-wrap items-center gap-md font-body-md text-body-md text-on-surface-variant">
          <span>By CryptoBeacon Editorial</span>
          <span aria-hidden>·</span>
          <time dateTime={PUBLISHED}>July 2, 2026</time>
          <span aria-hidden>·</span>
          <span>10 min read</span>
        </div>

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            src={seedVault}
            alt="Illustration of a secure vault representing safe crypto seed phrase storage"
            width={1536}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          If you own cryptocurrency and hold it yourself rather than leaving it on an exchange, one
          piece of information matters more than anything else you'll ever write down: your{" "}
          <strong>seed phrase</strong>. It's a short sequence of words, but it's also the single
          point of failure for everything you own on-chain.
        </P>
        <P>
          This guide walks through what a seed phrase actually is, why it deserves more care than a
          typical password, the mistakes that cause people to lose access permanently, and a
          practical framework for storing yours — whether you're protecting fifty dollars or a life
          savings.
        </P>
        <P>
          <em>This article is educational. It does not recommend any specific product or brand,
          and it isn't financial advice.</em>
        </P>

        <AdSlot id="top" />

        {/* Table of contents */}
        <aside className="my-xl p-lg rounded-lg border border-outline-variant bg-surface-container-low">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-sm">Table of Contents</h2>
          <ol className="list-decimal list-inside space-y-xs font-body-md text-body-md text-on-surface">
            <li><a href="#what" className="hover:underline decoration-secondary">What Is a Seed Phrase, Exactly?</a></li>
            <li><a href="#different" className="hover:underline decoration-secondary">Why Seed Phrase Security Is Different From Password Security</a></li>
            <li><a href="#mistakes" className="hover:underline decoration-secondary">Common Seed Phrase Storage Mistakes</a></li>
            <li><a href="#methods" className="hover:underline decoration-secondary">Storage Methods Compared</a></li>
            <li><a href="#plan" className="hover:underline decoration-secondary">Building a Storage Plan That Fits Your Holdings</a></li>
            <li><a href="#test" className="hover:underline decoration-secondary">Testing Your Backup Before You Need It</a></li>
            <li><a href="#compromised" className="hover:underline decoration-secondary">What to Do If You Suspect Your Seed Phrase Is Compromised</a></li>
            <li><a href="#takeaways" className="hover:underline decoration-secondary">Key Takeaways</a></li>
            <li><a href="#faq" className="hover:underline decoration-secondary">Frequently Asked Questions</a></li>
          </ol>
        </aside>

        <H2 id="what">1. What Is a Seed Phrase, Exactly?</H2>
        <P>
          When you create a self-custody wallet, it generates a sequence of 12 or 24 words, chosen
          from a standardized list of 2,048 words defined by a technical standard called{" "}
          <a
            href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
          >
            BIP39
          </a>
          . This sequence is called a seed phrase, recovery phrase, or mnemonic phrase.
        </P>
        <P>
          That phrase is not just a password. It's the mathematical starting point your wallet uses
          to generate every private key it will ever produce — for every address, on every account,
          for as long as you use that wallet. Enter the same 12 or 24 words into any compatible
          wallet software, on any device, anywhere in the world, and it will regenerate the exact
          same keys and give whoever holds it full control of the funds.
        </P>
        <P>
          That's what makes it powerful for recovery, and dangerous if mishandled. There's no
          customer support line to call if it's lost, and no way to freeze funds if it's stolen.
          The phrase itself is the entire security model.
        </P>

        <H2 id="different">2. Why Seed Phrase Security Is Different From Password Security</H2>
        <P>
          Most people carry decades of instinct about password hygiene into crypto, and some of it
          works against them here.
        </P>
        <P>
          A forgotten email password can be reset. A seed phrase cannot — there is no "forgot
          phrase" flow, because there's no company on the other end holding a backup. And where a
          leaked password might expose one account, a leaked seed phrase exposes every asset that
          wallet has ever held or will ever hold, instantly and irreversibly.
        </P>
        <P>
          This is why security guidance for seed phrases tends to sound more absolute than typical
          digital security advice: never type it into a website, never store it as a photo or text
          file, never share it with anyone claiming to offer support. Those aren't exaggerations —
          they reflect that there's no recovery path if the rule is broken.
        </P>

        <H2 id="mistakes">3. Common Seed Phrase Storage Mistakes</H2>
        <P>Most losses trace back to a small number of repeated errors:</P>
        <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li>
            <strong>Storing it digitally.</strong> Screenshots, notes apps, cloud drives, and
            password managers are all internet-connected in some way, which means they're reachable
            by malware, account breaches, or accidental cloud sync. A seed phrase stored digitally
            is no longer offline, no matter how it's labeled.
          </li>
          <li>
            <strong>Keeping only one copy.</strong> A single paper backup is a single point of
            failure — one fire, flood, or misplaced drawer away from total loss.
          </li>
          <li>
            <strong>Never testing the backup.</strong> A transposed word or a smudged character is
            invisible until the moment you try to restore from it — usually the worst possible time
            to discover an error.
          </li>
          <li>
            <strong>Treating "written down" as "done."</strong> Writing the phrase is step one.
            Where it's stored, how many copies exist, and who could physically access it matter
            just as much.
          </li>
          <li>
            <strong>Sharing it under pressure.</strong> Scammers posing as wallet or exchange
            support routinely ask for seed phrases, often creating a false sense of urgency. No
            legitimate service will ever ask for it. The U.S. Federal Trade Commission's{" "}
            <a
              href="https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              consumer guidance on cryptocurrency scams
            </a>{" "}
            documents how these impersonation tactics work in practice.
          </li>
        </ul>

        <figure className="my-xl">
          <img
            src={seedPhishing}
            alt="Illustration of a phishing hook emerging from a smartphone, representing seed phrase social engineering attacks"
            width={1536}
            height={896}
            loading="lazy"
            className="w-full h-auto rounded-xl bg-[#0A0B0D]"
          />
          <figcaption className="mt-sm text-center font-body-md text-body-md text-on-surface-variant italic">
            Phishing is the leading cause of seed phrase compromise — no legitimate service will
            ever ask for your recovery words.
          </figcaption>
        </figure>

        <H2 id="methods">4. Storage Methods Compared</H2>
        <div className="overflow-x-auto -mx-gutter md:mx-0 mb-md">
          <table className="w-full min-w-[640px] border-collapse text-left font-body-md text-body-md">
            <thead>
              <tr className="bg-[#0F9D58] text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <th className="p-md font-semibold border border-[#0F9D58]">Method</th>
                <th className="p-md font-semibold border border-[#0F9D58]">Offline?</th>
                <th className="p-md font-semibold border border-[#0F9D58]">Durability</th>
                <th className="p-md font-semibold border border-[#0F9D58]">Best For</th>
              </tr>
            </thead>
            <tbody className="text-[#0A0B0D] bg-white">
              <tr>
                <td className="p-md border border-outline-variant">Paper</td>
                <td className="p-md border border-outline-variant">Yes</td>
                <td className="p-md border border-outline-variant">Low — vulnerable to fire, water, fading</td>
                <td className="p-md border border-outline-variant">Small test wallets, short-term use</td>
              </tr>
              <tr>
                <td className="p-md border border-outline-variant">Metal plate (steel/titanium)</td>
                <td className="p-md border border-outline-variant">Yes</td>
                <td className="p-md border border-outline-variant">High — fire and water resistant</td>
                <td className="p-md border border-outline-variant">Long-term savings, larger holdings</td>
              </tr>
              <tr>
                <td className="p-md border border-outline-variant">Password manager / cloud note</td>
                <td className="p-md border border-outline-variant">No</td>
                <td className="p-md border border-outline-variant">N/A — internet-connected</td>
                <td className="p-md border border-outline-variant">Not recommended at any amount</td>
              </tr>
              <tr>
                <td className="p-md border border-outline-variant">Memory only</td>
                <td className="p-md border border-outline-variant">Yes</td>
                <td className="p-md border border-outline-variant">Unreliable — human memory fails</td>
                <td className="p-md border border-outline-variant">Not recommended except as a supplementary factor (e.g., a passphrase)</td>
              </tr>
              <tr>
                <td className="p-md border border-outline-variant">Split storage (e.g., Shamir's Secret Sharing)</td>
                <td className="p-md border border-outline-variant">Yes</td>
                <td className="p-md border border-outline-variant">High, but operationally complex</td>
                <td className="p-md border border-outline-variant">Larger holdings, multiple trusted parties</td>
              </tr>
            </tbody>
          </table>
        </div>
        <figure className="my-xl">
          <img
            src={seedMetalPaper}
            alt="Illustration comparing a stainless steel seed phrase backup plate with a folded paper backup"
            width={1536}
            height={896}
            loading="lazy"
            className="w-full h-auto rounded-xl"
          />
          <figcaption className="mt-sm text-center font-body-md text-body-md text-on-surface-variant italic">
            Metal backups outlast paper against fire, water, and time — the medium becomes the
            failure point when the stakes rise.
          </figcaption>
        </figure>

        <P>
          Paper is not inherently wrong — it's simply easy to do badly. If you use it, treat it as
          an interim solution while you set up something more durable, particularly once the amount
          at stake grows beyond what you'd casually risk losing. The{" "}
          <a
            href="https://www.cisa.gov/news-events/news/using-encryption-protect-sensitive-information"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
          >
            CISA guidance on protecting sensitive information
          </a>{" "}
          reinforces the same principle: offline, redundant, and physically controlled storage
          beats convenience every time.
        </P>

        <AdSlot id="mid" />

        <H2 id="plan">5. Building a Storage Plan That Fits Your Holdings</H2>
        <P>
          Rather than asking "what's the single best storage method," it's more useful to ask: what
          does my setup need to survive?
        </P>
        <P>A reasonable framework:</P>
        <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li>
            Write it down accurately, offline, away from cameras or onlookers, and double-check
            word order and spelling against the device before funding the wallet.
          </li>
          <li>
            <strong>Avoid a single point of failure.</strong> Keep at least two copies, in two
            physically separate locations, so no single event — theft, fire, flood — can wipe out
            your only backup.
          </li>
          <li>
            <strong>Match the storage medium to the stakes.</strong> Paper may be fine for a small
            amount you're experimenting with. For meaningful savings, a fire- and water-resistant
            medium like a stainless steel plate reduces the risk of the backup itself becoming the
            failure point.
          </li>
          <li>
            <strong>Control who can physically access it.</strong> A fireproof safe defeats its
            purpose if it sits somewhere accessible to anyone who visits your home.
          </li>
          <li>
            <strong>Never digitize it "just to be safe."</strong> The instinct to photograph or
            type out a backup as insurance is exactly what creates most real-world losses.
          </li>
        </ul>
        <P>
          There's no universal answer for everyone — someone holding a small amount for occasional
          use has different needs than someone holding long-term savings. The goal is a setup that
          survives ordinary real-world accidents and human error, not just a theoretical attacker.
          For a deeper look at the trade-offs, see our guide to{" "}
          <Link to="/bitcoin" className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]">
            Bitcoin self-custody
          </Link>{" "}
          and how it compares to leaving funds on exchanges.
        </P>

        <H2 id="test">6. Testing Your Backup Before You Need It</H2>
        <P>
          This step is the one most beginners skip, and it's the one that catches errors while
          they're still fixable.
        </P>
        <P>Before transferring meaningful funds into a wallet:</P>
        <ol className="list-decimal pl-lg space-y-sm font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li>Send a small, low-value test amount to the wallet.</li>
          <li>Wipe or factory-reset the device (or remove the wallet from your software).</li>
          <li>Restore the wallet using only your written backup.</li>
          <li>Confirm the same address and balance reappear.</li>
          <li>
            Send the test funds onward to confirm you can actually spend from the restored wallet,
            not just view it.
          </li>
        </ol>
        <P>
          If anything goes wrong during this process, it happens with a small test amount instead
          of your full holdings.
        </P>

        <H2 id="compromised">7. What to Do If You Suspect Your Seed Phrase Is Compromised</H2>
        <P>
          If you believe your seed phrase has been exposed — through phishing, malware, a lost
          device, or a backup you no longer trust — treat it as urgent:
        </P>
        <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li>
            Move funds to a new wallet with a freshly generated seed phrase as soon as possible.
            There is no way to "revoke" a compromised phrase; the only fix is to move funds out of
            its reach.
          </li>
          <li>Do this from a device you're confident is not compromised.</li>
          <li>
            Once funds are moved, the old seed phrase is permanently retired — don't reuse it for
            anything.
          </li>
        </ul>
        <P>
          Speed matters more than perfection here. A partially rushed move to safety is better
          than a delayed, perfect one.
        </P>

        <H2 id="takeaways">8. Key Takeaways</H2>
        <div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>
              A seed phrase generates every private key your wallet will ever use — treat it as
              more sensitive than any password you own.
            </li>
            <li>
              The most common losses come from digital storage, single points of failure, and
              untested backups — not sophisticated hacking.
            </li>
            <li>
              Match your storage method to what's at stake: paper can work for small amounts, but
              durable, offline media matters more as holdings grow.
            </li>
            <li>
              Always test recovery with a small amount before trusting a backup with significant
              funds.
            </li>
            <li>
              No legitimate service will ever ask for your seed phrase — treat any request for it
              as a scam.
            </li>
          </ul>
        </div>

        <AdSlot id="bottom" />

        <H2 id="faq">9. Frequently Asked Questions</H2>
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
          Seed phrase security isn't about finding one perfect product — it's about eliminating the
          single points of failure that cause almost all real-world losses: digital exposure,
          single copies, untested backups, and social engineering. A setup that's boring,
          duplicated, and verified will outperform an expensive one that's rushed or untested. Take
          the time to write it down carefully, store it offline in more than one place, and confirm
          it works before you trust it with real funds.
        </P>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be
            considered financial or investment advice. Cryptocurrency self-custody carries risk,
            including the risk of permanent loss of funds. Readers should conduct their own
            research and exercise independent judgment before making decisions about how to store
            or manage their digital assets.
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
                How to Avoid Crypto Phishing Scams
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
