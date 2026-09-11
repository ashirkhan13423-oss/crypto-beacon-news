import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdUnit } from "@/components/AdUnit";
import { Author } from "@/components/Author";
import hero from "@/assets/trezor-phishing-breach.jpg";

const URL = "https://www.cryptobeacon.site/news/trezor-brevo-phishing-email-breach-2026";
const TITLE = "Trezor Email Breach Sends Fake Wallet Alert to 347,000 Users: What to Do | CryptoBeacon";
const DESC =
  "A compromised third-party email provider sent fake Trezor security alerts to 347,000 users. Learn how this phishing attack happened and how to protect your seed phrase.";
const PUBLISHED = "2026-09-11";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Trezor Email Breach Sends Fake Wallet Alert to 347,000 Users: What to Do",
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Organization",
    name: "CryptoBeacon",
    url: "https://www.cryptobeacon.site",
  },
  publisher: {
    "@type": "Organization",
    name: "CryptoBeacon",
    logo: {
      "@type": "ImageObject",
      url: "https://www.cryptobeacon.site/favicon.png",
    },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  image: `https://www.cryptobeacon.site${hero}`,
  inLanguage: "en-US",
  keywords:
    "Trezor phishing email 2026, Trezor Brevo breach, Trezor STM32 vulnerability scam, Trezor seed phrase phishing, hardware wallet phishing attack, crypto wallet email scam, fake Trezor security alert, crypto supply chain attack, recovery phrase scam",
  articleSection: "News",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.cryptobeacon.site/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "News",
      item: "https://www.cryptobeacon.site/news",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Trezor Email Breach Sends Fake Wallet Alert",
      item: URL,
    },
  ],
};

export const Route = createFileRoute("/news/trezor-brevo-phishing-email-breach-2026")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { property: "og:image", content: `https://www.cryptobeacon.site${hero}` },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:section", content: "News" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: `https://www.cryptobeacon.site${hero}` },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
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
              <Link to="/news" className="hover:text-secondary">
                News
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary">Trezor Email Breach</li>
          </ol>
        </nav>

        <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold">
          News
        </span>

        <h1 className="mt-md font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary leading-tight">
          Trezor Email Breach Sends Fake Wallet Alert to 347,000 Users: What to Do
        </h1>

        <Author publishedDate={<time dateTime={PUBLISHED}>September 11, 2026</time>} readTime="5 min read" />

        <div className="mt-md mb-lg border-l-4 border-[#F59E0B] bg-[#F59E0B]/10 p-md rounded-r-md">
          <p className="font-headline-sm text-headline-sm text-primary font-bold">
            Security Incident Update
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
            Trezor has confirmed their third-party email provider, Brevo, was compromised, resulting in phishing emails sent to their mailing list. No Trezor devices, wallet systems, or Trezor Suite infrastructure have been compromised.
          </p>
        </div>

        <figure className="mt-lg mb-lg rounded-xl overflow-hidden bg-[#0A0B0D]">
          <img
            fetchPriority="high"
            src={hero}
            alt="A digital illustration of a compromised email warning, with a hardware wallet symbol and a phishing hook, in a modern, dark mode, high-tech crypto aesthetic"
            width={1536}
            height={896}
            className="w-full h-auto"
          />
        </figure>

        <P>
          In a stark reminder that even genuine communication channels can be exploited, Trezor disclosed that on September 9, 2026, its third-party email-marketing provider, Brevo, suffered a security incident. Attackers hijacked the compromised system to send highly targeted phishing emails from Trezor's legitimate mailing infrastructure to roughly 347,000 newsletter subscribers.
        </P>
        <P>
          The malicious email falsely warned users of a "Critical Security Alert: STM32 Entropy Vulnerability" and urged recipients to download rogue software and enter their wallet backup or recovery phrase. While Trezor quickly suspended the Brevo account and neutralized the phishing domain, the incident underscores a critical lesson for crypto holders: sender authenticity alone is no longer proof of safety.
        </P>

        <AdUnit />

        <H2 id="what-happened">What Happened During the Breach</H2>
        <P>
          The attack is particularly dangerous because it leveraged a trusted channel. The emails appeared to originate from official Trezor addresses because they were dispatched through Brevo, the vendor Trezor used for its newsletters. This is known as a supply-chain attack.
        </P>
        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface marker:text-secondary mb-lg">
          <li><strong>Compromised Provider:</strong> Brevo (formerly Sendinblue), a third-party email service, suffered an incident affecting 120 customer accounts, including Trezor.</li>
          <li><strong>The Lure:</strong> The email claimed a fake "STM32 Entropy Vulnerability" required immediate action.</li>
          <li><strong>The Trap:</strong> Users were instructed to download malicious software and input their 12, 18, or 24-word recovery phrase.</li>
          <li><strong>The Reach:</strong> Approximately 347,000 addresses may have been exposed.</li>
        </ul>

        <H2 id="what-was-not-compromised">What Was NOT Compromised</H2>
        <P>
          It is essential to distinguish between a compromised communication channel and a compromised wallet. Trezor has explicitly stated that <strong>no Trezor devices, wallet systems, or Trezor Suite infrastructure were affected</strong>. The hardware itself remains secure.
        </P>
        <P>
          The attackers did not breach Trezor's core security; they abused a marketing tool to conduct social engineering at scale, hoping users would voluntarily hand over their seed phrases out of panic.
        </P>

        <H2 id="what-to-do">What to Do if You Received the Email</H2>
        <P>
          If you received the "Critical Security Alert" email from Trezor, here is a practical checklist to ensure your funds remain safe:
        </P>
        <ul className="list-disc pl-lg space-y-sm font-body-lg text-body-lg text-on-surface marker:text-secondary mb-lg">
          <li><strong>Do Not Click:</strong> Do not click any links or download any software from the email. Delete it immediately.</li>
          <li><strong>Never Enter Your Seed Phrase:</strong> A hardware wallet company will <em>never</em> need your recovery phrase via email, support message, or software prompt on your computer. Your seed phrase should only ever be entered directly on the physical Trezor device itself.</li>
          <li><strong>If You Entered Your Phrase:</strong> If you did enter your recovery phrase into the malicious software, your funds are at imminent risk. You must immediately create a new wallet with a new seed phrase and transfer all remaining funds to the new addresses.</li>
          <li><strong>Verify Updates:</strong> Always verify software updates directly through the official Trezor Suite app or by visiting <code>trezor.io</code> manually, not via email links.</li>
        </ul>

        <AdUnit />

        <H2 id="the-bigger-picture">The Bigger Picture: Supply-Chain Risks</H2>
        <P>
          This incident highlights a growing operational risk in the crypto industry: supply-chain security failures. Hardware wallet brands, exchanges, and analytics firms all depend on external email, cloud, and software providers. A breach at any of these vendors can expose customer lists and be weaponized for phishing.
        </P>
        <P>
          As a result, crypto firms are likely to face greater scrutiny over their vendor-risk controls and mailing-list segmentation, while users must adopt a mindset of "zero trust" even when dealing with familiar brands.
        </P>

        <H2 id="sources">Sources</H2>
        <ul className="list-disc pl-lg space-y-sm font-body-md text-body-md text-on-surface leading-relaxed mb-md">
          <li>
            <a
              href="https://trezor.io/blog/news/security-incident-at-brevo-our-third-party-email-provider"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              Trezor Official Blog — Security incident at Brevo, our third-party email provider
            </a>
          </li>
          <li>
            <a
              href="https://www.cryptotimes.io/2026/09/10/trezor-details-brevo-breach-behind-fake-security-alert/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              The Crypto Times — Trezor Details Brevo Breach Behind Fake Security Alert
            </a>
          </li>
          <li>
            <a
              href="https://www.isec.news/2026/09/10/trezor-warns-of-phishing-emails-after-third-party-provider-breach/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline decoration-[#2563EB]/40 hover:decoration-[#2563EB]"
            >
              ISEC News — Trezor Warns of Phishing Emails After Third-Party Provider Breach
            </a>
          </li>
        </ul>

        <section className="mt-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-md">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link
              to="/security/what-is-a-seed-phrase"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                What is a Seed Phrase?
              </h3>
            </Link>
            <Link
              to="/security/hardware-wallet-mistakes-to-avoid"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                Hardware Wallet Mistakes to Avoid
              </h3>
            </Link>
            <Link
              to="/security/how-to-avoid-crypto-phishing-scams"
              className="block p-lg rounded-lg border border-outline-variant hover:border-secondary transition-all"
            >
              <span className="font-label-caps text-label-caps text-secondary">Security</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-xs">
                How to Avoid Crypto Phishing Scams
              </h3>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
