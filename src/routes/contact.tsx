import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, MessageSquare, ShieldCheck, Send, Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const URL = "https://www.cryptobeacon.site/contact";
const TITLE = "Contact Us & Editorial Inquiries | CryptoBeacon";
const DESC =
  "Get in touch with Ashir, the editor of CryptoBeacon. Contact us for press inquiries, editorial corrections, security research submissions, or general feedback.";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact CryptoBeacon",
  description: DESC,
  url: URL,
  mainEntity: {
    "@type": "Organization",
    name: "CryptoBeacon",
    url: "https://www.cryptobeacon.site",
    email: "crypto.beacon.site@gmail.com",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "crypto.beacon.site@gmail.com",
        contactType: "editorial newsroom",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        email: "crypto.beacon.site@gmail.com",
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
      { property: "og:image", content: "https://www.cryptobeacon.site/og-image.png" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "https://www.cryptobeacon.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(contactSchema) }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Editorial Inquiry",
    message: "",
  });

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
          <div className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl space-y-md">
            <p>
              Have a question, news tip, editorial correction, or security disclosure? CryptoBeacon is committed to transparency and open communication with our readers. Ashir and our editorial team review every inquiry promptly to ensure we maintain our high standards of reporting and accuracy.
            </p>
            <p>
              Whether you are looking to report a breaking story in the cryptocurrency market, suggest an important correction to one of our articles, or discuss a potential content partnership, we are here to help. Please refer to our specialized contact methods below or use our contact form to ensure your message reaches the appropriate desk as quickly as possible.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-xl">
          {/* Contact Direct Info Cards */}
          <div className="md:col-span-2 space-y-md">
            <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-md">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">
                Editorial & Press Inquiries
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                For press releases, exclusive news tips, content suggestions, or interview requests, please contact our editorial desk. We carefully evaluate all submissions for relevance, accuracy, and value to our audience.
              </p>
              <a
                href="mailto:crypto.beacon.site@gmail.com"
                className="font-body-md text-secondary font-medium hover:underline"
              >
                crypto.beacon.site@gmail.com
              </a>
            </div>

            <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-lowest">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-md">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">
                Security & Vulnerability Research
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                If you have discovered a vulnerability, a new phishing scam, or an urgent security threat in the crypto ecosystem, please share your findings. We prioritize these disclosures to help protect the broader community.
              </p>
              <a
                href="mailto:crypto.beacon.site@gmail.com"
                className="font-body-md text-secondary font-medium hover:underline"
              >
                crypto.beacon.site@gmail.com
              </a>
            </div>

            <div className="p-lg rounded-xl border border-outline-variant bg-surface-container-low">
              <div className="flex items-center gap-xs text-on-surface-variant font-body-sm text-body-sm mb-xs">
                <Clock className="w-4 h-4 text-secondary" />
                <span className="font-semibold">Response Time & Hours</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-sm">
                We aim to respond to all editorial and press inquiries within 24 to 48 business hours. Our core operating hours are Monday through Friday, 9:00 AM to 5:00 PM (EST).
              </p>
              <div className="border-t border-outline-variant pt-sm mt-sm">
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  <strong>CryptoBeacon News</strong><br/>
                  crypto.beacon.site@gmail.com<br/>
                  Online Only Publication
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 bg-surface-container-lowest p-lg md:p-xl rounded-2xl border border-outline-variant">
            {submitted ? (
              <div className="py-xl text-center flex flex-col items-center justify-center">
                <CheckCircle2 className="w-16 h-16 text-[#0F9D58] mb-md" />
                <h2 className="font-headline-md text-headline-md text-primary mb-sm">
                  Message Received
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                  Thank you for reaching out to CryptoBeacon. Ashir will
                  review your message shortly.
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
                  <label
                    htmlFor="name"
                    className="block font-label-caps text-label-caps text-on-surface mb-xs"
                  >
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
                  <label
                    htmlFor="email"
                    className="block font-label-caps text-label-caps text-on-surface mb-xs"
                  >
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
                  <label
                    htmlFor="subject"
                    className="block font-label-caps text-label-caps text-on-surface mb-xs"
                  >
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
                  <label
                    htmlFor="message"
                    className="block font-label-caps text-label-caps text-on-surface mb-xs"
                  >
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
                  className="w-full inline-flex items-center justify-center gap-xs bg-primary text-white py-md rounded-lg font-label-lg font-medium hover:bg-primary/90 transition-colors cursor-pointer"
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
