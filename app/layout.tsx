import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZéroAbo — Trouvez une alternative sans abonnement",
  description:
    "Découvrez des logiciels en achat unique pour remplacer vos abonnements Adobe, Notion, Microsoft 365 et plus encore.",
  metadataBase: new URL("https://zeroabo.fr"),
  openGraph: {
    title: "ZéroAbo — Trouvez une alternative sans abonnement",
    description:
      "Découvrez des logiciels en achat unique pour remplacer vos abonnements Adobe, Notion, Microsoft 365 et plus encore.",
    url: "https://zeroabo.fr",
    siteName: "ZéroAbo",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZéroAbo – Alternatives sans abonnement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZéroAbo — Trouvez une alternative sans abonnement",
    description:
      "Découvrez des logiciels en achat unique pour remplacer vos abonnements Adobe, Notion, Microsoft 365 et plus encore.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
