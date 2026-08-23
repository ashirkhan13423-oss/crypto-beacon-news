import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import authorAvatar from "@/assets/ashir.jpg";
import { Award, BookOpen, GraduationCap, ShieldCheck, Mail, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/author")({
  head: () => ({
    meta: [
      { title: "Ashir — Crypto Self-Custody & Security Writer – CryptoBeacon" },
      {
        name: "description",
        content:
          "Ashir researches and writes about crypto self-custody and security at CryptoBeacon, helping readers understand how to store and protect their digital assets safely.",
      },
      { property: "og:title", content: "Ashir — CryptoBeacon" },
      {
        property: "og:description",
        content:
          "Ashir researches and writes about crypto self-custody and security at CryptoBeacon, helping readers understand how to store and protect their digital assets safely.",
      },
      { property: "og:url", content: "https://www.cryptobeacon.site/author" },
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.cryptobeacon.site/author" }],
  }),
  component: AuthorPage,
});

function AuthorPage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <div className="mb-md">
          <Link
            to="/about"
            className="inline-flex items-center gap-xs text-secondary font-medium hover:underline text-body-md"
          >
            <ArrowLeft className="w-4 h-4" /> About
          </Link>
        </div>

        <header className="mb-xl border-b border-outline-variant pb-lg flex flex-col md:flex-row gap-lg items-start md:items-center">
          <img
            src={authorAvatar}
            alt="Ashir"
            className="w-28 h-28 rounded-full object-cover border-4 border-primary-container shadow-md shrink-0"
          />
          <div>
            <span className="inline-block px-sm py-xs rounded-full bg-secondary-container text-secondary font-label-caps text-[11px] uppercase tracking-widest font-semibold mb-xs">Writer & Researcher — Crypto Self-Custody & Security</span>
            <h1 className="font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary mb-xs leading-tight">
              Ashir
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-xs">
              Writes about crypto self-custody, wallets, and security at CryptoBeacon
            </p>
          </div>
        </header>

        <article className="prose max-w-none font-body-lg text-body-lg text-on-surface-variant space-y-xl">
          <section className="bg-surface-container-lowest p-lg md:p-xl rounded-2xl border border-outline-variant shadow-sm space-y-md">
            <h2 className="font-headline-md text-headline-md text-primary mb-md flex items-center gap-sm">
              <BookOpen className="text-secondary" /> Biography
            </h2>
            <p>
              Ashir is a writer and researcher at CryptoBeacon. He researches and writes about
              crypto self-custody and security, with a focus on helping everyday users understand
              how to safely store and manage their digital assets.
            </p>
            <p>
              His work covers non-custodial wallets, key management practices, and the security
              trade-offs involved in different custody approaches. He aims to translate technical
              concepts into clear, practical guidance for readers at all experience levels.
            </p>
            <p>
              Ashir believes that accessible, honest education about self-custody is one of the most
              important contributions a crypto publication can make — and that straightforward,
              well-researched content serves readers far better than hype or speculation.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            <section className="bg-surface-container-lowest p-lg rounded-2xl border border-outline-variant shadow-sm">
              <h2 className="font-headline-sm text-headline-sm text-primary mb-sm flex items-center gap-xs">
                <GraduationCap className="text-secondary" /> Education & Credentials
              </h2>
              <ul className="space-y-sm text-body-md text-on-surface-variant list-disc pl-md">
                <li>
                  <strong>Cryptocurrency Researcher & Writer</strong>
                </li>
                <li>
                  Self-Custody & Wallet Security
                </li>
                <li>
                  Blockchain Fundamentals & Key Management
                </li>
              </ul>
            </section>

            <section className="bg-surface-container-lowest p-lg rounded-2xl border border-outline-variant shadow-sm">
              <h2 className="font-headline-sm text-headline-sm text-primary mb-sm flex items-center gap-xs">
                <Award className="text-secondary" /> Areas of Expertise
              </h2>
              <ul className="space-y-sm text-body-md text-on-surface-variant list-disc pl-md">
                <li>Non-Custodial Wallet Protocols & Key Management</li>
                <li>Multi-Signature Security & Cold Storage Architecture</li>
                <li>Bitcoin Market Telemetry & Liquidity Dynamics</li>
                <li>Ethereum Layer 2 Rollups & Staking Systems</li>
              </ul>
            </section>
          </div>

          <section className="bg-surface-container-lowest p-lg md:p-xl rounded-2xl border border-outline-variant shadow-sm">
            <h2 className="font-headline-md text-headline-md text-primary mb-md flex items-center gap-sm">
              <ShieldCheck className="text-secondary" /> Editorial Commitment
            </h2>
            <p className="text-body-md text-on-surface-variant">
              Every guide and analysis published under Ashir's oversight follows CryptoBeacon's
              evergreen-first policy. This means our material is focused on core blockchain properties
              and verified security practices rather than short-term market speculation.
            </p>
          </section>

          <section className="bg-surface-container-lowest p-lg rounded-2xl border border-outline-variant shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-md">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary">Get In Touch</h3>
              <p className="text-body-md text-on-surface-variant">
                For research collaboration or editorial inquiries, you can reach out directly.
              </p>
            </div>
            <a
                href="mailto:contact@cryptobeacon.site"
                className="inline-flex items-center gap-xs px-md py-sm bg-primary text-on-primary font-medium rounded-lg hover:bg-primary-hover transition-colors"
              >
              <Mail className="w-4 h-4" /> Email Ashir
            </a>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
