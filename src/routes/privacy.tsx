import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — CryptoBeacon" },
      {
        name: "description",
        content:
          "How CryptoBeacon collects, uses, and protects your information, including cookies, analytics, and advertising practices.",
      },
      { property: "og:title", content: "Privacy Policy — CryptoBeacon" },
      {
        property: "og:description",
        content:
          "How CryptoBeacon collects, uses, and protects your information, including cookies, analytics, and advertising practices.",
      },
      { property: "og:url", content: "https://cryptobeaconnews.lovable.app/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://cryptobeaconnews.lovable.app/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <header className="mb-xl border-b border-outline-variant pb-lg">
          <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold mb-md">
            Legal & Compliance
          </span>
          <h1 className="font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary mb-sm leading-tight">
            Privacy Policy
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-xs">
            <span className="material-symbols-outlined text-secondary" style={{ fontSize: '18px' }}>update</span>
            Last updated: July 12, 2026
          </p>
        </header>

        <article className="prose max-w-none font-body-lg text-body-lg text-on-surface-variant space-y-xl">
          <section className="bg-surface-container-lowest p-lg md:p-xl rounded-2xl border border-outline-variant shadow-sm">
            <h2 className="font-headline-md text-headline-md text-primary mb-md">1. Introduction</h2>
            <p className="mb-sm">
              CryptoBeacon ("CryptoBeacon," "we," "us," or "our") operates
              cryptobeaconnews.lovable.app (the "Site"). This Privacy Policy explains what
              information we collect, how we use it, and what choices you have.
              By using the Site, you agree to the practices described here.
            </p>
            <p>
              CryptoBeacon provides educational content about cryptocurrency,
              digital wallets, and blockchain security. We do not offer
              financial, investment, or legal advice, and <strong className="text-secondary">we do not collect any
              information related to your cryptocurrency holdings, wallet
              addresses, or transaction history.</strong>
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-primary mb-md">2. Information We Collect</h2>
            <div className="grid md:grid-cols-2 gap-lg">
              <div className="bg-surface-container-low p-md rounded-xl border border-outline-variant">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm flex items-center gap-xs">
                  <span className="material-symbols-outlined text-secondary">edit_document</span>
                  Provided Directly
                </h3>
                <ul className="list-disc pl-lg space-y-sm text-body-md marker:text-secondary">
                  <li><strong>Newsletter signup:</strong> your email address, if you subscribe.</li>
                  <li><strong>Contact form:</strong> your name, email address, and message content.</li>
                </ul>
                <p className="mt-md text-body-sm italic">
                  We do not require account creation, and we never ask for payment info or government ID.
                </p>
              </div>
              <div className="bg-surface-container-low p-md rounded-xl border border-outline-variant">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm flex items-center gap-xs">
                  <span className="material-symbols-outlined text-secondary">memory</span>
                  Collected Automatically
                </h3>
                <ul className="list-disc pl-lg space-y-sm text-body-md marker:text-secondary">
                  <li>IP address (used to derive approximate location)</li>
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>Pages visited and time spent on pages</li>
                </ul>
                <p className="mt-md text-body-sm italic">
                  This data is collected via Google Analytics and Google AdSense.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-primary mb-md">3. How We Use Information</h2>
            <p className="mb-sm">We use collected information to:</p>
            <ul className="list-disc pl-xl space-y-sm marker:text-secondary">
              <li>Operate, maintain, and improve the Site</li>
              <li>Send newsletter emails to subscribers (only if you opted in)</li>
              <li>Respond to contact form submissions</li>
              <li>Understand how visitors use the Site, to improve content and navigation</li>
              <li>Display relevant advertising through Google AdSense</li>
              <li>Detect and prevent technical issues, abuse, or security incidents</li>
            </ul>
            <div className="mt-md p-md bg-secondary/10 border-l-4 border-secondary rounded-r-lg">
              <p className="text-on-surface font-medium text-body-md">
                We do not sell your personal information. We do not use your data to make automated decisions that produce legal or similarly significant effects.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-primary mb-md">4. Cookies and Third-Party Services</h2>
            <div className="space-y-md">
              <div className="bg-surface-container-lowest p-md rounded-lg border border-outline-variant">
                <strong className="text-primary block mb-xs">Cookies:</strong> 
                The Site uses cookies (small text files stored on your device) for essential site functionality, analytics, and advertising. You can control cookies through your browser settings; disabling them may affect some Site features.
              </div>
              <div className="bg-surface-container-lowest p-md rounded-lg border border-outline-variant">
                <strong className="text-primary block mb-xs">Google Analytics:</strong> 
                We use Google Analytics to understand aggregate visitor behavior. Google Analytics uses cookies to collect standard internet log and visitor behavior information in an anonymized form. Learn more at <a href="https://policies.google.com/privacy" className="text-secondary hover:underline" target="_blank" rel="noreferrer">Google's Privacy &amp; Terms</a>.
              </div>
              <div className="bg-surface-container-lowest p-md rounded-lg border border-outline-variant">
                <strong className="text-primary block mb-xs">Google AdSense:</strong> 
                We use Google AdSense to display advertising. Google and its partners use cookies to serve ads based on your prior visits to this and other websites. You may opt out of personalized advertising by visiting <a href="https://adssettings.google.com" className="text-secondary hover:underline" target="_blank" rel="noreferrer">Google Ads Settings</a>.
              </div>
              <div className="bg-surface-container-lowest p-md rounded-lg border border-outline-variant">
                <strong className="text-primary block mb-xs">Email service provider:</strong> 
                If you subscribe to our newsletter, your email address is stored with our secure email service providers, which process it under their own privacy policy in order to deliver emails on our behalf.
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-primary mb-md">5. Data Sharing, Disclosure & Retention</h2>
            <p className="mb-sm">We do not sell, rent, or trade your personal information. We may share information with:</p>
            <ul className="list-disc pl-xl space-y-sm mb-md marker:text-secondary">
              <li>Service providers who perform functions on our behalf, bound by their own privacy obligations</li>
              <li>Legal authorities, if required by law, subpoena, or to protect the rights, property, or safety of CryptoBeacon, our users, or others</li>
              <li>A successor entity, in the event of a merger, acquisition, or sale of assets</li>
            </ul>
            <p>
              <strong>Data Retention:</strong> We retain newsletter and contact-form data for as long as necessary to provide the relevant service, or until you request deletion. Analytics data is retained according to Google Analytics' default retention settings.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-primary mb-md">6. Your Rights</h2>
            <p className="mb-sm">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-xl space-y-sm mb-md marker:text-secondary">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information or deletion of your information</li>
              <li>Object to or restrict certain processing</li>
              <li>Withdraw consent (e.g., unsubscribe from the newsletter) at any time</li>
            </ul>
            <p>
              <strong>EU/UK visitors (GDPR):</strong> Our legal basis for processing your data is your consent (newsletter, contact form) or our legitimate interest in operating and improving the Site (analytics, security). You have the right to lodge a complaint with your local data protection authority.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-primary mb-md">7. Additional Policies</h2>
            <div className="grid md:grid-cols-3 gap-md">
              <div className="bg-surface-container-low p-md rounded-lg border border-outline-variant">
                <strong className="text-primary block mb-xs text-body-lg">Children's Privacy</strong>
                <p className="text-body-md">CryptoBeacon is not directed at children under 13 (or under 16 in the EU), and we do not knowingly collect personal information from children.</p>
              </div>
              <div className="bg-surface-container-low p-md rounded-lg border border-outline-variant">
                <strong className="text-primary block mb-xs text-body-lg">Data Security</strong>
                <p className="text-body-md">We use reasonable technical and organizational measures to protect your information, including HTTPS encryption for all Site traffic.</p>
              </div>
              <div className="bg-surface-container-low p-md rounded-lg border border-outline-variant">
                <strong className="text-primary block mb-xs text-body-lg">Data Transfers</strong>
                <p className="text-body-md">Your information may be transferred to and processed in the United States or other countries where our service providers operate.</p>
              </div>
            </div>
          </section>

          <section className="bg-surface-container-high p-lg rounded-xl border border-outline-variant flex flex-col md:flex-row items-center justify-between gap-md mt-xxl">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-xs">Contact Us</h2>
              <p className="text-body-md text-on-surface-variant">
                Questions about this Privacy Policy? We're here to help.
              </p>
            </div>
            <a 
              href="mailto:privacy@cryptobeaconnews.lovable.app" 
              className="inline-flex items-center gap-xs bg-primary text-primary-foreground px-lg py-sm rounded-full font-label-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>mail</span>
              Email Privacy Team
            </a>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
