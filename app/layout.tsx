// app/layout.tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

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
  },
  twitter: {
    card: "summary_large_image",
    title: "ZéroAbo — Logiciels en achat unique",
    description:
      "Trouvez les meilleures alternatives en achat unique aux logiciels par abonnement.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={geist.className}>{children}</body>
    </html>
  );
}
