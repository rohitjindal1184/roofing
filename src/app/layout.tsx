import type { Metadata } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileCtaBar from "@/components/MobileCtaBar";
import ScrollReveal from "@/components/ScrollReveal";
import { site } from "@/lib/site";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Roofing Contractor in San Francisco & the Bay Area`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "roofing contractor San Francisco",
    "Bay Area roofers",
    "roof replacement San Francisco",
    "flat roof replacement",
    "roof leak repair",
    "roof inspection Bay Area",
    "gutter replacement San Francisco",
    "skylight replacement",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
    title: `${site.name} | Roofing Contractor in San Francisco & the Bay Area`,
    description: site.description,
    images: [
      {
        url: "/images/hero-roofing-crew-panorama.jpg",
        width: 7360,
        height: 2808,
        alt: "ONE ROOFING crew working on residential roofs in the Bay Area",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Roofing Contractor in San Francisco & the Bay Area`,
    description: site.description,
    images: ["/images/hero-roofing-crew-panorama.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: true, address: true, email: true },
  category: "Roofing Contractor",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${barlowCondensed.variable} ${sourceSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* If JS never runs, scroll-reveal elements must not stay invisible. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col bg-bone-100" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand-600 focus:px-4 focus:py-2.5 focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        {/* scroll-mt clears the sticky header when the skip link jumps here. */}
        <main id="main" className="flex-1 scroll-mt-24">
          {children}
        </main>
        <Footer />
        <MobileCtaBar />
        <ScrollReveal />
      </body>
    </html>
  );
}
