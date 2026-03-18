// app/data/categories.ts

export type Category = {
  slug: string;
  nom: string;
  description: string;
  emoji: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "video",
    nom: "Montage vidéo",
    emoji: "🎬",
    description:
      "Découvrez les meilleurs logiciels de montage vidéo en achat unique, alternatives sans abonnement à Adobe Premiere Pro et Final Cut Pro. DaVinci Resolve, Kdenlive, Shotcut ou vMix : payez une fois et montez vos vidéos sans limite.",
  },
  {
    slug: "design",
    nom: "Design & illustration",
    emoji: "🎨",
    description:
      "Les meilleures alternatives en licence perpétuelle à Photoshop, Illustrator et Lightroom pour les designers et photographes. Affinity Photo, GIMP, Krita, Inkscape ou Darktable : créez sans payer chaque mois.",
  },
  {
    slug: "bureautique",
    nom: "Bureautique & PDF",
    emoji: "📄",
    description:
      "Remplacez Microsoft 365 et Adobe Acrobat par des suites bureautiques et éditeurs PDF en achat unique ou open source. LibreOffice, ONLYOFFICE, PDF-XChange Editor : travaillez sur vos documents sans abonnement.",
  },
  {
    slug: "audio",
    nom: "Audio & podcast",
    emoji: "🎵",
    description:
      "Enregistrez, montez et masterisez votre audio sans abonnement Adobe Audition ou Descript. Audacity, MAGIX Sound Forge, MuseScore : des logiciels audio professionnels en licence perpétuelle ou open source.",
  },
  {
    slug: "securite",
    nom: "Sécurité & antivirus",
    emoji: "🛡️",
    description:
      "Protégez vos appareils et vos mots de passe avec des solutions de sécurité sans renouvellement automatique imposé. Bitdefender, Malwarebytes, Kaspersky, Bitwarden : des alternatives à Norton et 1Password sans abonnement récurrent.",
  },
  {
    slug: "productivite",
    nom: "Productivité & notes",
    emoji: "🧠",
    description:
      "Organisez vos idées, projets et notes sans Notion ou Asana payants. Obsidian, Joplin, XMind Pro, FocusPlan : des outils de productivité en achat unique ou gratuits qui respectent vos données.",
  },
  {
    slug: "utilitaires",
    nom: "Utilitaires",
    emoji: "🔧",
    description:
      "Lecteurs multimédia, gestionnaires de fichiers, virtualisations, ebooks et outils système en achat unique ou open source. VLC, 7-Zip, Thunderbird, VirtualBox, Calibre : des utilitaires essentiels sans abonnement.",
  },
];
