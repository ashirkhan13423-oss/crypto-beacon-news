import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/phishing-padlock.jpg";

const URL = "https://cryptobeaconnews.lovable.app/security/how-to-avoid-crypto-phishing-scams";
const TITLE = "How to Avoid Crypto Phishing Scams | CryptoBeacon";
const DESC =
  "Learn how crypto phishing scams actually work, the red flags that repeat across every version, and the verification habits that keep your wallet safe.";
const PUBLISHED = "2026-07-03";

const faqs: { q: string; a: string }[] = [
  {
    q: "Can a crypto phishing scam be reversed?",
    a: "Generally no. Blockchain transactions are irreversible once confirmed, which is why prevention matters far more than recovery.",
  },
  {
    q: "Do legitimate exchanges or wallets ever ask for a seed phrase?",
    a: "No. This is one of the most reliable red flags — any request for a seed phrase, regardless of who appears to be asking, should be treated as a scam.",
  },
  {
    q: "What is a wallet drainer?",
    a: "A malicious tool or contract that, once granted permission through a signed transaction, is able to transfer tokens out of a connected wallet — often triggered by fake airdrop or minting pages.",
  },
  {
    q: "What is address poisoning?",
    a: "A tactic where an attacker sends a transaction from an address designed to closely resemble one you've used before, hoping you'll copy the wrong address from your history later.",
  },
  {
    q: "Is checking for HTTPS enough to confirm a site is safe?",
    a: "No. Phishing sites can and often do have valid HTTPS certificates. A secure connection only confirms the connection is encrypted, not that the site is legitimate.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Avoid Crypto Phishing Scams",
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

export const Route = createFileRoute("/security/how-to-avoid-crypto-phishing-scams")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "how to avoid crypto phishing scams, crypto phishing red flags, how to spot a fake crypto website, wallet drainer scam explained, crypto phishing checklist, address poisoning, seed phrase phishing",
      },
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

function FlowDiagram() {
  const steps = ["Contact", "Urgency", "Redirect", "Ask", "Loss"];
  return (
    <figure className="my-xl">
      <div className="rounded-xl bg-[#0A0B0D] p-lg overflow-x-auto">
        <svg
          viewBox="0 0 1000 180"
          role="img"
          aria-label="Diagram showing the five-step pattern of a typical crypto phishing attack"
          className="w-full h-auto min-w-[640px]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <line x1="60" y1="90" x2="940" y2="90" stroke="#2563EB" strokeWidth="2" />
          {steps.map((s, i) => {
            const cx = 100 + i * 200;
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
        The five-step shape of nearly every crypto phishing attack — the wrapper changes, the
        pattern rarely does.
      </figcaption>
    </figure>
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
              <Link to="/security" className="hover:text-secondary">
                Security
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">Avoid Phishing Scams</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          Security
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          How to Avoid Crypto Phishing Scams
        </h1>

        <div className="mt-md flex flex-wrap items-center gap-md font-body-md text-body-md text-on-surface-variant">
          <span>By CryptoBeacon Editorial</span>
          <span aria-hidden>·</span>
          <time dateTime={PUBLISHED}>July 3, 2026</time>
          <span aria-hidden>·</span>
          <span>9 min read</span>
        </div>

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            src={hero}
            alt="Illustration representing crypto phishing scam protection"
            width={1600}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          Phishing is the most common way people lose cryptocurrency — not because the technology
          is weak, but because it targets something far harder to patch than software: human trust
          under pressure. Unlike a hacked exchange or a broken smart contract, phishing doesn't
          require any flaw in the blockchain at all. It only requires you to click, connect, or
          type something you shouldn't.
        </P>
        <P>
          This guide explains how crypto phishing actually works, the patterns that repeat across
          nearly every version of it, and the habits that make you a much harder target —
          regardless of how the specific scam is dressed up.
        </P>
        <P>
          <em>
            This article is educational. It does not name specific incidents or companies, and it
            isn't financial advice.
          </em>
        </P>

        <AdSlot id="top" />

        <aside className="my-xl p-lg rounded-lg border border-outline-variant bg-surface-container-low">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-sm">
            Table of Contents
          </h2>
          <ol className="list-decimal list-inside space-y-xs font-body-md text-body-md text-on-surface">
            <li>
              <a href="#different" className="hover:underline decoration-secondary">
                What Makes Crypto Phishing Different
              </a>
            </li>
            <li>
              <a href="#how" className="hover:underline decoration-secondary">
                How a Typical Phishing Attack Works
              </a>
            </li>
            <li>
              <a href="#formats" className="hover:underline decoration-secondary">
                Common Phishing Formats to Recognize
              </a>
            </li>
            <li>
              <a href="#redflags" className="hover:underline decoration-secondary">
                Red Flags That Repeat Across Almost Every Scam
              </a>
            </li>
            <li>
              <a href="#habits" className="hover:underline decoration-secondary">
                Verification Habits That Actually Work
              </a>
            </li>
            <li>
              <a href="#targeted" className="hover:underline decoration-secondary">
                What to Do If You Think You've Been Targeted
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

        <H2 id="different">1. What Makes Crypto Phishing Different</H2>
        <P>
          Traditional phishing usually aims to steal a password that a company can later reset.
          Crypto phishing aims for something with no reset button: your seed phrase, your private
          key, or your explicit approval to move funds. Once any of those are handed over or
          signed, the transaction is final. There's no bank to call, no chargeback, and no customer
          service escalation that can undo it.
        </P>
        <P>
          This is why crypto phishing tends to focus less on tricking you into giving up a
          password, and more on tricking you into taking an action — connecting a wallet, approving
          a transaction, or entering a recovery phrase into something that looks legitimate but
          isn't.
        </P>

        <H2 id="how">2. How a Typical Phishing Attack Works</H2>
        <P>
          Most crypto phishing follows a recognizable shape, even when the specific story changes:
        </P>
        <ol className="list-decimal pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li>
            <strong>Contact.</strong> You receive a message, email, ad, or social post that looks
            like it's from a wallet provider, exchange, or project you recognize.
          </li>
          <li>
            <strong>Urgency.</strong> The message creates pressure — a security alert, a
            limited-time claim, a "verify now or lose access" warning.
          </li>
          <li>
            <strong>Redirect.</strong> You're pushed toward a link, often a domain that looks
            nearly identical to the real one, sometimes just a single character off.
          </li>
          <li>
            <strong>The ask.</strong> The fake site or app asks you to either type your seed
            phrase, connect your wallet, or approve a transaction — usually framed as a routine,
            harmless step.
          </li>
          <li>
            <strong>The loss.</strong> Once you comply, funds move, or the attacker gains standing
            permission to move them later.
          </li>
        </ol>
        <P>
          Recognizing this shape matters more than memorizing any single scam — the wrapper
          changes constantly, but the underlying steps rarely do.
        </P>

        <FlowDiagram />

        <AdSlot id="mid" />

        <H2 id="formats">3. Common Phishing Formats to Recognize</H2>
        <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li>
            <strong>Fake support.</strong> Someone contacts you claiming to be from a wallet or
            exchange's support team, often after you've posted publicly about an issue, and asks
            for your seed phrase or remote access to "help."
          </li>
          <li>
            <strong>Fake airdrops and claims.</strong> A site invites you to "claim" free tokens
            by connecting your wallet and signing a transaction — one that actually grants the
            site broad spending permission.
          </li>
          <li>
            <strong>Lookalike websites.</strong> A domain nearly identical to a real service,
            sometimes using a visually similar character, hosting a convincing copy of the real
            interface.
          </li>
          <li>
            <strong>Malicious browser extensions.</strong> Tools that present themselves as useful
            crypto utilities but alter transaction details or intercept wallet data once
            installed.
          </li>
          <li>
            <strong>Clipboard hijacking.</strong> Malware that silently replaces a copied wallet
            address with the attacker's own, so funds are sent to the wrong destination even when
            you "did everything right."
          </li>
        </ul>

        <H2 id="redflags">
          <span
            aria-hidden
            className="material-symbols-outlined align-middle text-[#0F9D58] mr-xs"
            style={{ fontSize: "0.9em" }}
          >
            warning
          </span>
          4. Red Flags That Repeat Across Almost Every Scam
        </H2>
        <div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>
              <strong>Urgency or a countdown.</strong> Legitimate services rarely demand you act
              within minutes.
            </li>
            <li>
              <strong>A request for your seed phrase or private key, in any context.</strong>{" "}
              <Link
                to="/security/how-to-store-crypto-seed-phrase-safely"
                className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
              >
                No legitimate service will ever ask for your seed phrase
              </Link>
              .
            </li>
            <li>
              <strong>A transaction you don't fully understand.</strong> If you can't explain in
              plain language what you're approving, don't approve it.
            </li>
            <li>
              <strong>An unsolicited "opportunity."</strong> Free tokens, guaranteed returns, or
              unexpected support outreach you didn't initiate.
            </li>
            <li>
              <strong>A slightly-off URL.</strong> Always worth a second, deliberate look before
              connecting a wallet or entering any information.
            </li>
          </ul>
        </div>

        <H2 id="habits">5. Verification Habits That Actually Work</H2>
        <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li>
            <strong>Navigate directly.</strong> Type known URLs yourself or use a saved bookmark
            rather than clicking links in messages, ads, or search results.
          </li>
          <li>
            <strong>Check the full address, not just the ends.</strong> Address poisoning attacks
            rely on people confirming only the first and last few characters.
          </li>
          <li>
            <strong>Read what you're signing.</strong> If a wallet interface shows a transaction
            in unreadable technical format, treat that as a reason to slow down, not proceed. The
            U.S. Federal Trade Commission's{" "}
            <a
              href="https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              consumer guidance on cryptocurrency scams
            </a>{" "}
            documents how these signing tricks work in practice.
          </li>
          <li>
            <strong>Review token approvals periodically.</strong> Revoke "unlimited" spending
            permissions you no longer recognize or need, using your wallet's connected-sites or
            approvals settings.
          </li>
          <li>
            Treat unsolicited contact as suspicious by default, even if it references accurate
            details about you — attackers often have partial information already. See CISA's{" "}
            <a
              href="https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              guidance on avoiding social engineering and phishing attacks
            </a>{" "}
            for the same pattern outside crypto.
          </li>
        </ul>

        <H2 id="targeted">6. What to Do If You Think You've Been Targeted</H2>
        <ul className="list-disc pl-lg space-y-md font-body-lg text-body-lg text-on-surface leading-relaxed mb-md">
          <li>
            <strong>Stop the interaction immediately.</strong> Don't continue the conversation or
            "verify" anything further.
          </li>
          <li>
            If you've connected a wallet to a suspicious site, use your wallet's
            approval-management feature to revoke access as soon as possible.
          </li>
          <li>
            If you've entered or exposed your seed phrase, treat it as compromised. Move remaining
            funds to a new wallet with a{" "}
            <Link
              to="/security/how-to-store-crypto-seed-phrase-safely"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              freshly generated seed phrase
            </Link>{" "}
            right away.
          </li>
          <li>
            Report the site or account to the platform it's impersonating and to your browser or
            wallet provider if they offer a reporting channel — this helps protect others, even if
            it doesn't recover your funds.
          </li>
        </ul>

        <H2 id="takeaways">7. Key Takeaways</H2>
        <div className="border-l-4 border-[#0F9D58] bg-[#0F9D58]/5 p-lg rounded-r-lg mb-md">
          <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface">
            <li>
              Crypto phishing targets actions and permissions, not just passwords — there's no
              reset once a transaction is signed.
            </li>
            <li>
              The specific scam format changes constantly, but the underlying pattern — contact,
              urgency, redirect, ask — repeats almost every time.
            </li>
            <li>
              No legitimate service will ever ask for your seed phrase, under any circumstance.
            </li>
            <li>
              Slowing down and verifying independently is more effective than any single tool or
              setting.
            </li>
            <li>
              If you suspect exposure, move funds to a new wallet immediately rather than waiting
              to be certain.
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
          Crypto phishing succeeds by targeting behavior, not code — which means the best defense
          isn't a single tool, but a consistent set of habits: navigating directly instead of
          clicking links, reading what you sign, and treating any request for your seed phrase as
          an automatic red flag. The specific disguise will keep changing. The underlying pattern
          rarely does.
        </P>

        <div className="mt-xxl p-lg rounded-lg bg-surface-container-low border border-outline-variant">
          <h3 className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Financial Disclaimer
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This article is for informational and educational purposes only and should not be
            considered financial or investment advice. Cryptocurrency scams and phishing tactics
            evolve continuously; readers should exercise independent judgment and stay informed
            through official sources for their specific wallets and platforms.
          </p>
        </div>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">
            Related Reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
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
              to="/bitcoin/how-to-send-bitcoin-safely"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Bitcoin</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                How to Send Bitcoin Safely
              </h3>
            </Link>
            <Link
              to="/news/why-governments-regulate-cryptocurrency"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">News</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Why Governments Regulate Cryptocurrency
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
