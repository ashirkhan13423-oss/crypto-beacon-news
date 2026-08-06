import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, MessageSquare, ShieldCheck, Send, Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const URL = "https://crypto-beacon-news.vercel.app/contact";
const TITLE = "Contact Us & Editorial Inquiries | CryptoBeacon";
const DESC =
  "Get in touch with the CryptoBeacon editorial team. Contact us for press inquiries, editorial corrections, security research submissions, or general feedback.";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact CryptoBeacon",
  description: DESC,
  url: URL,
  mainEntity: {
    "@type": "Organization",
    name: "CryptoBeacon",
    url: "https://crypto-beacon-news.vercel.app",
    email: "contact@crypto-beacon-news.vercel.app",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "editorial@crypto-beacon-news.vercel.app",
        contactType: "editorial newsroom",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        email: "security@crypto-beacon-news.vercel.app",
        contactType: "security research",
        availableLanguage: ["English"],
      },
    ],
  },
};

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(contactSchema) },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "Editorial Inquiry", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <li className="text-primary">Contact</li>
          </ol>
        </nav>

        <header className="mb-xl border-b border-outline-variant pb-lg">
          <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold mb-md">
            Get In Touch
          </span>
          <h1 className="font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary mb-sm leading-tight">
            Contact CryptoBeacon
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Have a question, news tip, editorial correction, or security disclosure? Our editorial team reviews every inquiry promptly.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
          {/* Contact Direct Info Cards */}
          <div className="space-y-md">
            <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-md">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Editorial Inquiries</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                Press releases, news tips, and content suggestions.
              </p>
              <a
                href="mailto:editorial@crypto-beacon-news.vercel.app"
                className="font-body-md text-secondary font-medium hover:underline"
              >
                editorial@crypto-beacon-news.vercel.app
              </a>
            </div>

            <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-md">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Security Research</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                Vulnerability disclosures and security topic requests.
              </p>
              <a
                href="mailto:security@crypto-beacon-news.vercel.app"
                className="font-body-md text-secondary font-medium hover:underline"
              >
                security@crypto-beacon-news.vercel.app
              </a>
            </div>

            <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-low">
              <div className="flex items-center gap-xs text-on-surface-variant font-body-sm text-body-sm mb-xs">
                <Clock className="w-4 h-4 text-secondary" />
                <span>Response Time</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                We aim to respond to all editorial and press inquiries within 24 to 48 business hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 bg-surface-container-lowest p-lg md:p-xl rounded-2xl border border-outline-variant">
            {submitted ? (
              <div className="py-xl text-center flex flex-col items-center justify-center">
                <CheckCircle2 className="w-16 h-16 text-[#0F9D58] mb-md" />
                <h2 className="font-headline-md text-headline-md text-primary mb-sm">Message Received</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                  Thank you for reaching out to CryptoBeacon. A member of our editorial team will review your message shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-lg px-md py-sm bg-surface-container-high text-primary font-label-lg rounded-lg border border-outline-variant hover:bg-surface-container-highest transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-md">
                <h2 className="font-headline-md text-headline-md text-primary mb-sm flex items-center gap-xs">
                  <MessageSquare className="w-5 h-5 text-secondary" />
                  Send a Message
                </h2>

                <div>
                  <label htmlFor="name" className="block font-label-caps text-label-caps text-on-surface mb-xs">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Satoshi Nakamoto"
                    className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface-bright text-on-surface focus:outline-none focus:border-secondary font-body-md"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-label-caps text-label-caps text-on-surface mb-xs">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface-bright text-on-surface focus:outline-none focus:border-secondary font-body-md"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-label-caps text-label-caps text-on-surface mb-xs">
                    Subject / Topic
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface-bright text-on-surface focus:outline-none focus:border-secondary font-body-md"
                  >
                    <option value="Editorial Inquiry">Editorial Inquiry</option>
                    <option value="News Tip">News Tip</option>
                    <option value="Correction Request">Correction Request</option>
                    <option value="Security Disclosure">Security Disclosure</option>
                    <option value="General Feedback">General Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-label-caps text-label-caps text-on-surface mb-xs">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your inquiry..."
                    className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface-bright text-on-surface focus:outline-none focus:border-secondary font-body-md resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-xs bg-primary text-primary-foreground py-md rounded-lg font-label-lg font-medium hover:bg-primary/90 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Submit Message
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
