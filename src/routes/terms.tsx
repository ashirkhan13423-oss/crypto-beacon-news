import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RefreshCw, AlertTriangle, Ban, Gavel, Scissors, Scale } from "lucide-react";


export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — CryptoBeacon" },
      {
        name: "description",
        content:
          "The terms and conditions governing your use of CryptoBeacon, including intellectual property, disclaimers, and limitation of liability.",
      },
      { property: "og:title", content: "Terms of Service — CryptoBeacon" },
      {
        property: "og:description",
        content:
          "The terms and conditions governing your use of CryptoBeacon, including intellectual property, disclaimers, and limitation of liability.",
      },
      { property: "og:url", content: "https://cryptobeaconnews.com/terms" },
    ],
    links: [{ rel: "canonical", href: "https://cryptobeaconnews.com/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow w-full max-w-4xl mx-auto px-gutter py-xl">
        <header className="mb-xl border-b border-outline-variant pb-lg">
          <span className="inline-block px-sm py-xs rounded-full bg-[#0F9D58] text-white font-label-caps text-[11px] uppercase tracking-widest font-semibold mb-md">
            Legal & Compliance
          </span>
          <h1 className="font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary mb-sm leading-tight">
            Terms of Service
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-xs">
            <RefreshCw className="text-secondary" style={{ fontSize: '18px' }} />
            Last updated: July 12, 2026
          </p>
        </header>

        <article className="prose max-w-none font-body-lg text-body-lg text-on-surface-variant space-y-xl">
          <section className="bg-surface-container-lowest p-lg md:p-xl rounded-2xl border border-outline-variant shadow-sm">
            <h2 className="font-headline-md text-headline-md text-primary mb-md">1. Acceptance of Terms</h2>
            <p className="mb-sm">
              By accessing or using CryptoBeacon ("the Site"), you agree to be
              bound by these Terms of Service ("Terms"). If you do not agree,
              do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-primary mb-md">2. Description of Service</h2>
            <p>
              CryptoBeacon publishes educational content about cryptocurrency,
              digital wallets, blockchain technology, and related security
              practices. Content is provided for general informational and
              educational purposes only.
            </p>
          </section>

          <section className="bg-secondary/10 border-l-4 border-secondary p-lg rounded-r-xl">
            <h2 className="font-headline-md text-headline-md text-primary mb-sm flex items-center gap-xs">
              <AlertTriangle className="text-secondary" />
              3. Not Financial, Investment, or Legal Advice
            </h2>
            <p className="text-on-surface font-medium">
              Nothing on this Site constitutes financial, investment, legal, or
              tax advice. Cryptocurrency is volatile and carries substantial
              risk, including risk of total loss. You should conduct your own
              research and consult a licensed financial or legal professional
              before making any decisions involving cryptocurrency. CryptoBeacon
              and its authors are not liable for any financial loss resulting
              from actions taken based on Site content.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-primary mb-md">4. Intellectual Property</h2>
            <p>
              All content on this Site — including text, graphics, logos, and
              the CryptoBeacon name and mark — is the property of CryptoBeacon
              or its licensors and is protected by copyright and trademark law.
              You may not reproduce, distribute, or create derivative works
              from Site content without our prior written permission, except
              for personal, non-commercial use with proper attribution and a
              link back to the original page.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-primary mb-md">5. User Conduct</h2>
            <div className="bg-surface-container-low p-lg rounded-xl border border-outline-variant">
              <p className="mb-sm text-on-surface">When using the Site, you agree not to:</p>
              <ul className="list-disc pl-lg space-y-sm text-body-md marker:text-secondary">
                <li>Use the Site for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to Site systems or data</li>
                <li>Scrape, harvest, or bulk-download Site content without permission</li>
                <li>Introduce malware, viruses, or other harmful code</li>
                <li>Interfere with the Site's normal operation, including through excessive automated requests</li>
                <li>Impersonate CryptoBeacon or misrepresent your affiliation with us</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="grid md:grid-cols-2 gap-lg">
              <div>
                <h2 className="font-headline-md text-headline-md text-primary mb-sm">6. Third-Party Links</h2>
                <p>
                  The Site may contain links to third-party websites and displays
                  third-party advertising. We do not control,
                  endorse, or take responsibility for the content, products,
                  services, or privacy practices of any third-party site.
                  Interactions with advertisers or linked sites are solely between
                  you and that third party.
                </p>
              </div>
              <div>
                <h2 className="font-headline-md text-headline-md text-primary mb-sm">7. Advertising</h2>
                <p>
                  The Site is monetized in part through Google AdSense and may in
                  the future include affiliate links or sponsored content. Any
                  sponsored or affiliate content will be clearly disclosed as such
                  in accordance with FTC guidelines and applicable advertising
                  regulations.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant">
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">8. Disclaimers & Limitations</h2>
            <div className="space-y-md">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">No Warranties</h3>
                <p className="text-body-md">
                  The Site and its content are provided "as is" and "as available,"
                  without warranties of any kind, express or implied. While we strive to keep content
                  current and accurate, we do not guarantee it is free of errors
                  or fully up to date at all times.
                </p>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Limitation of Liability</h3>
                <p className="text-body-md">
                  To the fullest extent permitted by law, CryptoBeacon and its
                  owners, authors, and affiliates shall not be liable for any
                  indirect, incidental, special, consequential, or punitive
                  damages, or any loss of profits, revenue, data, or
                  cryptocurrency, arising from your use of, or inability to use,
                  the Site or its content.
                </p>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Indemnification</h3>
                <p className="text-body-md">
                  You agree to indemnify and hold CryptoBeacon harmless from any
                  claims, damages, or expenses (including reasonable legal fees)
                  arising from your violation of these Terms or your misuse of the
                  Site.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-primary mb-md">9. General Provisions</h2>
            <ul className="space-y-md list-none pl-0">
              <li className="flex gap-md">
                <RefreshCw className="text-secondary mt-1" />
                <div>
                  <strong className="text-on-surface block">Changes to These Terms</strong>
                  We may revise these Terms at any time. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms.
                </div>
              </li>
              <li className="flex gap-md">
                <Ban className="text-secondary mt-1" />
                <div>
                  <strong className="text-on-surface block">Termination</strong>
                  We reserve the right to restrict or terminate your access to the Site at our discretion, without notice, for conduct that violates these Terms.
                </div>
              </li>
              <li className="flex gap-md">
                <Gavel className="text-secondary mt-1" />
                <div>
                  <strong className="text-on-surface block">Governing Law</strong>
                  These Terms are governed by the laws of the United States, without regard to its conflict-of-law principles. Any disputes arising under these Terms shall be resolved in the courts of the United States.
                </div>
              </li>
              <li className="flex gap-md">
                <Scissors className="text-secondary mt-1" />
                <div>
                  <strong className="text-on-surface block">Severability</strong>
                  If any provision of these Terms is found unenforceable, the remaining provisions will remain in full effect.
                </div>
              </li>
            </ul>
          </section>

          <section className="bg-surface-container-high p-lg rounded-xl border border-outline-variant flex flex-col md:flex-row items-center justify-between gap-md mt-xxl">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-xs">Contact Legal</h2>
              <p className="text-body-md text-on-surface-variant">
                Questions about these Terms of Service? Reach out to us.
              </p>
            </div>
            <a 
              href="mailto:legal@cryptobeaconnews.com" 
              className="inline-flex items-center gap-xs bg-primary text-primary-foreground px-lg py-sm rounded-full font-label-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Scale style={{ fontSize: '20px' }} />
              Email Legal Team
            </a>
            <p className="text-body-md text-on-surface-variant mt-sm">CryptoBeacon Ltd., 123 Crypto Ave, Suite 456, New York, NY 10001, USA</p>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
