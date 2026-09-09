import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import authorAvatar from "@/assets/ashir.png";
import { Award, BookOpen, GraduationCap, ShieldCheck, Mail, ArrowLeft, Twitter, Linkedin } from "lucide-react";

export const Route = createFileRoute("/author")({
  head: () => ({
    meta: [
      { title: "Ashir — Crypto Self-Custody & Security Writer – CryptoBeacon" },
      {
        name: "description",
        content:
          "Ashir is an independent writer researching cryptocurrency security and self-custody, with a focus on translating technical concepts for everyday users.",
      },
      { property: "og:title", content: "Ashir — CryptoBeacon" },
      {
        property: "og:description",
        content:
          "Ashir is an independent writer researching cryptocurrency security and self-custody, with a focus on translating technical concepts for everyday users.",
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
              Ashir is an independent writer and researcher dedicated to the fields of cryptocurrency security, decentralized finance, and self-custody solutions. With a passion for demystifying complex blockchain technologies, Ashir focuses on translating highly technical concepts into accessible, actionable guidance for everyday users.
            </p>
            <p>
              Over the years, Ashir has closely monitored the evolution of the cryptocurrency ecosystem, witnessing both its incredible innovations and its significant pitfalls. This firsthand experience has shaped a writing philosophy that prioritizes security-first thinking, encouraging readers to take absolute control of their digital assets while safely navigating the risks associated with modern Web3 environments.
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
            <p className="text-body-md text-on-surface-variant mb-md">
              Every guide, tutorial, and analysis published under Ashir's oversight strictly follows CryptoBeacon's evergreen-first editorial policy. This means our material is fundamentally focused on core blockchain properties, verifiable security practices, and long-term technological implications rather than short-term market speculation or token price hype.
            </p>
            <p className="text-body-md text-on-surface-variant">
              We believe that true empowerment in the digital asset space comes from deep understanding, not blindly following trends. Readers can expect thorough, evidence-based reporting designed to build a strong foundation of knowledge, empowering them to make their own informed decisions.
            </p>
          </section>

          <section className="bg-surface-container-lowest p-lg rounded-2xl border border-outline-variant shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-md">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary">Get In Touch</h3>
              <p className="text-body-md text-on-surface-variant">
                For research collaboration or editorial inquiries, you can reach out directly.
              </p>
            </div>
            <div className="flex flex-wrap gap-sm">
              <a
                href="mailto:crypto.beacon.site@gmail.com"
                className="inline-flex items-center gap-xs px-md py-sm bg-primary text-on-primary font-medium rounded-lg hover:bg-primary-hover transition-colors"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
              <a
                href="https://x.com/ashir_khan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-xs px-md py-sm bg-surface-container-high text-on-surface font-medium rounded-lg hover:bg-surface-container-highest transition-colors border border-outline-variant"
              >
                <Twitter className="w-4 h-4 text-secondary" /> X (Twitter)
              </a>
              <a
                href="https://linkedin.com/in/ashir-khan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-xs px-md py-sm bg-surface-container-high text-on-surface font-medium rounded-lg hover:bg-surface-container-highest transition-colors border border-outline-variant"
              >
                <Linkedin className="w-4 h-4 text-secondary" /> LinkedIn
              </a>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
