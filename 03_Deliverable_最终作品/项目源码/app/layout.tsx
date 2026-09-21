import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Xiaomi Financial Services Europe", template: "%s | Xiaomi Financial Services" },
  description: "Simple, transparent finance and insurance for the Xiaomi SU7 Ultra in Europe.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Xiaomi Financial Services Europe",
    description: "Simple choices. Clear protection. More freedom to move.",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Xiaomi Financial Services Europe with a yellow Xiaomi SU7 Ultra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xiaomi Financial Services Europe",
    description: "Simple choices. Clear protection. More freedom to move.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={geist.variable}><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
