import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZéroAbo - Alternatives sans abonnement",
  description:
    "Trouvez une alternative sans abonnement à vos logiciels préférés.",
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
