import Link from "next/link";
import Image from "next/image";

type Action = { href: string; label: string; external?: boolean };

export function Hero({ eyebrow, title, body, primary, secondary, partnerLine, compact = false }: {
  eyebrow: string; title: string; body: string; primary: Action; secondary?: Action; partnerLine?: string; compact?: boolean;
}) {
  const renderAction = (action: Action, secondaryStyle = false) => action.external ? (
    <a className={secondaryStyle ? "button secondary" : "button"} href={action.href} target="_blank" rel="noreferrer">{action.label}<span aria-hidden="true"> ↗</span></a>
  ) : (
    <Link className={secondaryStyle ? "button secondary" : "button"} href={action.href}>{action.label}</Link>
  );
  return (
    <section className={`hero ${compact ? "compact" : ""}`}>
      <div className="hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-body">{body}</p>
        <div className="button-row">
          {renderAction(primary)}
          {secondary && renderAction(secondary, true)}
        </div>
        {partnerLine && <p className="partner-line">{partnerLine}</p>}
      </div>
      <div className="hero-visual">
        <Image src="/images/order-success-bg.png" alt="Yellow Xiaomi SU7 Ultra in a studio setting" width={4440} height={1688} priority={!compact} />
        <span className="model-tag">Xiaomi SU7 Ultra</span>
      </div>
    </section>
  );
}
