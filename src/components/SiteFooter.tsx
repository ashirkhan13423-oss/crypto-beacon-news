import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/cryptobeacon-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant w-full mt-xxl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-lg px-gutter py-xxl max-w-max_width mx-auto">
        <div className="col-span-1 md:col-span-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-md mb-lg pb-lg border-b border-outline-variant">
          <img src={logoAsset.url} alt="CryptoBeacon - Editorial Rigor and Financial Clarity" className="h-14 md:h-16 w-auto" />
          <span className="font-body-md text-body-md text-on-surface">
            © 2024 CryptoBeacon. Editorial Rigor. Financial Clarity.
          </span>
        </div>
        <div className="flex flex-col gap-sm">
          <span className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">
            Platform
          </span>
          <Link to="/" className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all">Home</Link>
          <Link to="/news" className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all">News</Link>
          <Link to="/guides" className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all">Guides</Link>
          <Link to="/security" className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all">Security</Link>
        </div>
        <div className="flex flex-col gap-sm">
          <span className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">Markets</span>
          <Link to="/bitcoin" className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all">Bitcoin</Link>
          <Link to="/ethereum" className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all">Ethereum</Link>
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all">Altcoins</a>
        </div>
        <div className="flex flex-col gap-sm">
          <span className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">Sectors</span>
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all">Blockchain</a>
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all">DeFi</a>
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all">NFTs</a>
        </div>
        <div className="flex flex-col gap-sm">
          <span className="font-label-caps text-label-caps text-secondary font-semibold mb-sm">Legal & Ethics</span>
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all">Opinion</a>
          <Link to="/privacy" className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all">Privacy</Link>
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all">Disclaimer</a>
          <Link to="/terms" className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all">Terms</Link>
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-all">Editorial Policy</a>
        </div>
      </div>
    </footer>
  );
}
