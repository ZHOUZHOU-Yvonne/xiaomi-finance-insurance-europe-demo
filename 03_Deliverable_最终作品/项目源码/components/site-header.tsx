"use client";

import Link from "next/link";

const links = [
  { href: "/#financial-services", label: "Financial Services" },
  { href: "/#finance", label: "Financing" },
  { href: "/#insurance", label: "Insurance" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Xiaomi Auto Financial Services home">
        <span className="brand-mark" aria-hidden="true">mi</span>
        <span>Xiaomi Auto</span>
      </Link>
      <nav className="main-nav" aria-label="Primary navigation">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <Link className="header-action" href="/#support">Support</Link>
    </header>
  );
}
