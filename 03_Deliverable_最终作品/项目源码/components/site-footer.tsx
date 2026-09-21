import Link from "next/link";
import { partnerCopy } from "../lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <div className="footer-brand">Xiaomi Financial Services</div>
          <p>Finance and protection designed around your Xiaomi.</p>
        </div>
        <div className="footer-links">
          <Link href="/#financial-services">Financial Services</Link>
          <Link href="/#finance">Financing</Link>
          <Link href="/#insurance">Insurance</Link>
          <a href="mailto:financialservices-demo@xiaomi.com">Contact</a>
        </div>
      </div>
      <div className="support-strip">
        <span><strong>Demo contact details</strong></span>
        <a href="tel:+498009460000">+49 800 946 0000</a>
        <a href="mailto:financialservices-demo@xiaomi.com">financialservices-demo@xiaomi.com</a>
      </div>
      <div className="footer-legal">
        <p>{partnerCopy.finance} {partnerCopy.insurance}</p>
        <p>{partnerCopy.legal}</p>
        <p>Illustrative website demo. Product availability, eligibility, pricing and contractual terms apply.</p>
      </div>
      <div className="footer-bottom">
        <span>© Xiaomi Auto</span>
        <span>Legal notice</span><span>Privacy</span><span>Cookies</span><span>Product information</span>
      </div>
    </footer>
  );
}
