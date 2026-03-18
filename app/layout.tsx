// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://zeroabo.fr"),
  title: {
    default: "ZéroAbo — Logiciels en achat unique, sans abonnement",
    template: "%s | ZéroAbo",
  },
  description:
    "Trouvez les meilleures alternatives en achat unique aux logiciels par abonnement. Payez une fois, utilisez pour toujours.",
  keywords: [
    "logiciel achat unique",
    "alternative abonnement",
    "licence perpétuelle",
    "sans abonnement",
    "buy once software",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://zeroabo.fr",
    siteName: "ZéroAbo",
    title: "ZéroAbo — Logiciels en achat unique, sans abonnement",
    description:
      "Trouvez les meilleures alternatives en achat unique aux logiciels par abonnement. Payez une fois, utilisez pour toujours.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "ZéroAbo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZéroAbo — Logiciels en achat unique",
    description:
      "Trouvez les meilleures alternatives en achat unique aux logiciels par abonnement.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://zeroabo.fr",
  },
  // ✅ Vérification Impact
  other: {
    "impact-site-verification": "caff8fda-d50d-4251-ad03-6c20eabcc500",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ZéroAbo",
  url: "https://zeroabo.fr",
  description: "Annuaire francophone d'alternatives logicielles en achat unique, sans abonnement.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${geist.variable} ${geistMono.variable} ${inter.variable}`}>
      <head>
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="dns-prefetch" href="//logo.clearbit.com" />
        <link rel="dns-prefetch" href="//t3.gstatic.com" />
      </head>
      <body className="bg-[#020817] text-slate-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
