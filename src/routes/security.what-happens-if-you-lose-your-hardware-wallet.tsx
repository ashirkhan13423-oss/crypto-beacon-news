import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema/builders";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Author } from "@/components/Author";
import { Disclaimer } from "@/components/Disclaimer";
import { FAQ } from "@/components/FAQ";
import { RelatedArticles } from "@/components/RelatedArticles";
import hero from "@/assets/lost-hardware-wallet.jpg";

const PAGE_URL = "https://www.cryptobeacon.site/security/what-happens-if-you-lose-your-hardware-wallet";
const TITLE = "What Happens If You Lose Your Hardware Wallet? (Recovery Steps) | CryptoBeacon";
const DESC = "Lost your Ledger or Trezor? Don't panic. Learn exactly what is safe, what is lost, and the step-by-step recovery process using your seed phrase.";
const PUBLISHED = "2026-09-30";
let MODIFIED = PUBLISHED;
let keyTakeaway = "Your crypto is not stored inside your hardware wallet; it lives on the blockchain. As long as you have your seed phrase, you can fully recover your funds on a new device.";

const faqs: { q: string; a: string }[] = [
  {
    q: "Can someone steal my crypto if they find my lost hardware wallet?",
    a: "It is highly unlikely if you have a strong PIN code. Hardware wallets like Ledger and Trezor will wipe themselves after several incorrect PIN attempts (usually 3 to 10).",
  },
  {
    q: "What if I lose my hardware wallet AND my seed phrase?",
    a: "If both your device and your backup seed phrase are permanently lost, your funds are unrecoverable. This is why proper seed phrase storage is critical.",
  },
  {
    q: "Do I have to buy the same brand to recover my wallet?",
    a: "No. The BIP-39 standard allows you to recover your wallet on any compatible hardware or software wallet, meaning you can switch from Ledger to Trezor or vice versa.",
  },
];

export const Route = createFileRoute("/security/what-happens-if-you-lose-your-hardware-wallet")({
  head: () => ({
    ...buildMetadata({
      title: TITLE,
      description: DESC,
      url: PAGE_URL,
      type: "article",
      path: "/security/what-happens-if-you-lose-your-hardware-wallet",
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
            url: PAGE_URL,
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
            { name: "What Happens If You Lose Your Hardware Wallet?", item: PAGE_URL },
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
              <li><Link to="/security" className="hover:text-secondary">Security</Link></li>
              <li aria-hidden>/</li>
              <li className="text-primary">Lost Hardware Wallet Recovery</li>
            </ol>
          </nav>

          <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
            Security
          </span>

          <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
            What Happens If You Lose Your Hardware Wallet? (Recovery Steps)
          </h1>

          <Author publishedDate={<time dateTime={PUBLISHED}>September 30, 2026</time>} />

          <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
            <img
              fetchPriority="high"
              src={hero}
              alt="Illustration of a stressed person searching for a lost hardware wallet"
              width={1400}
              height={788}
              className="w-full h-auto"
            />
          </figure>

          <P>
            Losing a hardware wallet — whether it's a Ledger, Trezor, or another brand — is a stressful experience. Your immediate thought might be that your cryptocurrency is gone forever. Fortunately, that is almost never the case. 
          </P>
          <P>
            Because of the way blockchains work, your assets are not actually inside the physical device. As long as you have properly backed up your{" "}
            <Link to="/security/what-is-a-seed-phrase" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4">
              seed phrase
            </Link>,{" "}
            your crypto recovery is completely in your control. This guide explains exactly what is safe, what is lost, and the steps to regain access to your funds.
          </P>
          <P><em>This article is educational. It is not financial advice.</em></P>


          <aside className="my-xl p-lg rounded-lg border border-outline-variant bg-surface-container-low">
            <h2 className="font-headline-sm text-headline-sm text-primary mb-sm">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-xs font-body-md text-body-md text-on-surface">
              <li><a href="#what-is-lost" className="hover:underline decoration-secondary">What Is Lost vs. What Is Safe</a></li>
              <li><a href="#security" className="hover:underline decoration-secondary">Can Someone Else Access Your Funds?</a></li>
              <li><a href="#recovery-steps" className="hover:underline decoration-secondary">Lost Hardware Wallet Recovery Steps</a></li>
              <li><a href="#next-steps" className="hover:underline decoration-secondary">How to Prevent Future Panic</a></li>
              <li><a href="#faq" className="hover:underline decoration-secondary">Frequently Asked Questions</a></li>
            </ol>
          </aside>

          <H2 id="what-is-lost">What Is Lost vs. What Is Safe</H2>
          <P>
            When you lose your hardware wallet, you only lose the physical tool used to authorize transactions. The actual cryptocurrency remains securely recorded on the public blockchain.
          </P>
          <div className="overflow-x-auto mb-md border rounded-xl border-[#0F9D58]/20 bg-surface-container-low">
            <table className="w-full text-left font-body-md text-body-md text-on-surface min-w-[640px]">
              <thead className="bg-[#0F9D58] text-white">
                <tr>
                  <th className="p-md font-semibold">Element</th>
                  <th className="p-md font-semibold border-l border-white/20">Status</th>
                  <th className="p-md font-semibold border-l border-white/20">Explanation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">Cryptocurrency Funds</td>
                  <td className="p-md border-l border-outline-variant text-[#0F9D58] font-bold">Safe</td>
                  <td className="p-md border-l border-outline-variant">Your Bitcoin, Ethereum, and other assets live on the blockchain, not on the device.</td>
                </tr>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">Private Keys</td>
                  <td className="p-md border-l border-outline-variant text-[#0F9D58] font-bold">Safe (If backed up)</td>
                  <td className="p-md border-l border-outline-variant">Your seed phrase represents your private keys. With it, you can generate the keys again.</td>
                </tr>
                <tr className="border-b border-outline-variant">
                  <td className="p-md font-semibold bg-surface-container-lowest">The Physical Device</td>
                  <td className="p-md border-l border-outline-variant text-red-500 font-bold">Lost</td>
                  <td className="p-md border-l border-outline-variant">You will need to purchase a replacement device if you want to maintain hardware-level security.</td>
                </tr>
                <tr>
                  <td className="p-md font-semibold bg-surface-container-lowest">PIN Code</td>
                  <td className="p-md border-l border-outline-variant text-red-500 font-bold">Irrelevant</td>
                  <td className="p-md border-l border-outline-variant">The PIN code only unlocked that specific physical device. It is not needed for recovery.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <H2 id="security">Can Someone Else Access Your Funds?</H2>
          <P>
            If a stranger finds your lost hardware wallet, the immediate risk to your funds is extremely low. Devices like those from <a href="https://support.ledger.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline decoration-secondary/50">Ledger</a> and <a href="https://trezor.io/support" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline decoration-secondary/50">Trezor</a> are secured by a PIN code you established during setup.
          </P>
          <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
            <li><strong>Auto-Wipe Feature:</strong> After a set number of incorrect PIN entries (typically 3 for Ledger devices and up to 16 for Trezor, with escalating time delays), the device wipes its memory entirely, reverting to factory settings.</li>
            <li><strong>Brute Force Difficulty:</strong> Secure elements in modern wallets are designed to withstand physical tampering and brute-force software attacks.</li>
          </ul>

          <H2 id="recovery-steps">Lost Hardware Wallet Recovery Steps</H2>
          <P>
            The crypto recovery process relies entirely on the 12, 18, or 24-word recovery phrase you wrote down when you first initialized the wallet.
          </P>
          <ol className="list-decimal pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
            <li>
              <strong>Locate Your Seed Phrase:</strong> Find the physical backup of your seed phrase. Never type this phrase into a computer or take a picture of it with your phone.
            </li>
            <li>
              <strong>Obtain a Replacement Wallet:</strong> Purchase a new hardware wallet. It is highly recommended to buy directly from the manufacturer to avoid tampered devices. You can read more about avoiding <Link to="/security/crypto-security-hub" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4">crypto scams in our security hub</Link>.
            </li>
            <li>
              <strong>Choose "Restore from Recovery Phrase":</strong> When setting up the new device, select the option to restore an existing wallet rather than creating a new one.
            </li>
            <li>
              <strong>Enter the Words Carefully:</strong> Use the device's interface to input your 12, 18, or 24 words in the exact correct order. 
            </li>
            <li>
              <strong>Access Your Funds:</strong> Once the restoration is complete, connect your new wallet to its companion app (like Ledger Live or Trezor Suite). Your accounts and balances will appear exactly as you left them.
            </li>
          </ol>

          <H2 id="next-steps">How to Prevent Future Panic</H2>
          <P>
            Once you have completed your lost hardware wallet recovery, it is vital to ensure your backup strategy is robust. Relying on a single piece of paper can lead to catastrophic loss if there is a fire or flood.
          </P>
          <P>
            Consider upgrading your backup medium. You can review our detailed comparison of <Link to="/security/seed-phrase-storage-steel-vs-paper-vs-metal" className="text-secondary hover:underline decoration-secondary/50 underline-offset-4">seed phrase storage options</Link> to learn how steel plates and commercial metal backups offer significantly more protection against physical damage than standard paper.
          </P>

          <H2 id="faq">Frequently Asked Questions</H2>
          <div className="mb-xl">
            <FAQ faqs={faqs} />
          </div>

          <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
            <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
              Financial Disclaimer
            </h3>
            <Disclaimer />
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-xs">
              Always verify recovery instructions through the official support channels of your hardware wallet manufacturer.
            </p>
          </div>

          <RelatedArticles currentUrl={PAGE_URL} />
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
