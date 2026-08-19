import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import authorAvatar from "@/assets/sarah-jenkins.jpg";
import { Award, BookOpen, GraduationCap, ShieldCheck, Mail, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/author")({
  head: () => ({
    meta: [
      { title: "Sarah Jenkins — Lead Editor & Researcher — CryptoBeacon" },
      {
        name: "description",
        content:
          "Sarah Jenkins is the senior cryptocurrency researcher and editor at CryptoBeacon, specializing in blockchain mechanics, self-custody systems, and protocol audits.",
      },
      { property: "og:title", content: "Sarah Jenkins — CryptoBeacon" },
      {
        property: "og:description",
        content:
          "Sarah Jenkins is the senior cryptocurrency researcher and editor at CryptoBeacon, specializing in blockchain mechanics, self-custody systems, and protocol audits.",
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
            <ArrowLeft className="w-4 h-4" /> About Editorial Team
          </Link>
        </div>

        <header className="mb-xl border-b border-outline-variant pb-lg flex flex-col md:flex-row gap-lg items-start md:items-center">
          <img
            src={authorAvatar}
            alt="Sarah Jenkins"
            className="w-28 h-28 rounded-full object-cover border-4 border-primary-container shadow-md shrink-0"
          />
          <div>
            <span className="inline-block px-sm py-xs rounded-full bg-secondary-container text-secondary font-label-caps text-[11px] uppercase tracking-widest font-semibold mb-xs">
              Lead Researcher & Editor
            </span>
            <h1 className="font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary mb-xs leading-tight">
              Sarah Jenkins
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-xs">
              Specialist in Cryptographic Self-Custody & Blockchain Security
            </p>
          </div>
        </header>

        <article className="prose max-w-none font-body-lg text-body-lg text-on-surface-variant space-y-xl">
          <section className="bg-surface-container-lowest p-lg md:p-xl rounded-2xl border border-outline-variant shadow-sm space-y-md">
            <h2 className="font-headline-md text-headline-md text-primary mb-md flex items-center gap-sm">
              <BookOpen className="text-secondary" /> Biography
            </h2>
            <p>
              Sarah Jenkins is the Lead Editor and Senior Researcher at CryptoBeacon. She has spent
              more than a decade studying digital privacy systems and decentralized cryptographic
              networks. Sarah’s research is focused primarily on the intersection of user security,
              non-custodial wallets, and sovereign money principles.
            </p>
            <p>
              Before joining CryptoBeacon, Sarah served as a senior protocol security analyst, where she
              conducted smart contract audits and evaluated consensus-level parameters for emerging Layer 1 and
              Layer 2 blockchains. She has also served as a consultant for enterprise cryptocurrency custodians and
              treasury management projects, designing robust multi-signature setups.
            </p>
            <p>
              Through her editorial work, Sarah is dedicated to converting complex cryptographic primitives
              and macro market data into clean, transparent, and objective learning resources. She believes that
              safe, robust self-custody is the most critical hurdle to widespread cryptocurrency adoption.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            <section className="bg-surface-container-lowest p-lg rounded-2xl border border-outline-variant shadow-sm">
              <h2 className="font-headline-sm text-headline-sm text-primary mb-sm flex items-center gap-xs">
                <GraduationCap className="text-secondary" /> Education & Credentials
              </h2>
              <ul className="space-y-sm text-body-md text-on-surface-variant list-disc pl-md">
                <li>
                  <strong>B.S. in Computer Science</strong> (With Specialization in Cryptography) —
                  Stanford University
                </li>
                <li>
                  <strong>Certified Blockchain Security Professional (CBSP)</strong>
                </li>
                <li>
                  Former Lead Security Auditor at <em>Consensys-level Auditing Labs</em>
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
              Every guide and analysis published under Sarah’s oversight follows CryptoBeacon's
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
              href="mailto:sarah.jenkins@cryptobeacon.site"
              className="inline-flex items-center gap-xs px-md py-sm bg-primary text-on-primary font-medium rounded-lg hover:bg-primary-hover transition-colors"
            >
              <Mail className="w-4 h-4" /> Email Sarah
            </a>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
