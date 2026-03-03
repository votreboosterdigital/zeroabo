// app/data/tools.ts

export type ToolAlternative = {
  id: string;
  slug: string;
  abonnement: string;
  originalApp: string;
  motsCles: string[];
  nom: string;
  prix: string;
  savings: number;
  description: string;
  longDescription: string;
  features: string[];
  lien: string;
  affiliateUrl: string;
};

export const TOOL_ALTERNATIVES: ToolAlternative[] = [
  {
    id: "onlyoffice",
    slug: "onlyoffice",
    abonnement: "Microsoft 365, Google Workspace",
    originalApp: "Microsoft Office 365",
    motsCles: ["bureautique", "word", "excel", "powerpoint", "suite office"],
    nom: "ONLYOFFICE",
    prix: "Licence perpétuelle (voir site)",
    savings: 200,
    description:
      "Suite bureautique compatible Microsoft Office, sans abonnement obligatoire.",
    longDescription:
      "ONLYOFFICE permet de créer, éditer et collaborer sur des documents texte, tableurs et présentations, avec une interface proche de Microsoft Office et des options d’auto-hébergement.",
    features: [
      "Compatible DOCX, XLSX, PPTX",
      "Édition collaborative en temps réel",
      "Applications desktop, web et mobiles",
      "Auto-hébergement possible",
    ],
    lien: "https://www.onlyoffice.com",
    affiliateUrl: "https://www.onlyoffice.com/?via=Zeroabo",
  },

  {
    id: "pdf-xchange-editor",
    slug: "pdf-xchange-editor",
    abonnement: "Adobe Acrobat Pro",
    originalApp: "Adobe Acrobat Pro",
    motsCles: ["pdf", "édition pdf", "annotation", "signature"],
    nom: "PDF-XChange Editor",
    prix: "À partir de ~50 € en une fois",
    savings: 250,
    description:
      "Éditeur PDF complet pour remplacer Adobe Acrobat Pro sans abonnement.",
    longDescription:
      "PDF-XChange Editor permet de créer, modifier, annoter et signer des fichiers PDF avec une grande finesse, tout en restant léger et vendu en licence perpétuelle.",
    features: [
      "Création et édition avancée de PDF",
      "Outils d’annotation et de commentaires",
      "Reconnaissance de texte (OCR)",
      "Remplissage et signature de formulaires",
    ],
    lien: "https://www.tracker-software.com/product/pdf-xchange-editor",
    affiliateUrl:
      "https://www.tracker-software.com/product/pdf-xchange-editor?ref=zeroabo",
  },

  {
    id: "movavi-video-suite",
    slug: "movavi-video-suite",
    abonnement: "Adobe Premiere Pro, Final Cut Pro abonnement",
    originalApp: "Adobe Premiere Pro",
    motsCles: ["montage vidéo", "video", "édition vidéo"],
    nom: "Movavi Video Suite",
    prix: "Environ 80 € licence perpétuelle",
    savings: 300,
    description:
      "Suite de montage vidéo simple et efficace pour remplacer Premiere Pro sans abonnement.",
    longDescription:
      "Movavi Video Suite offre un environnement complet pour monter, couper et exporter des vidéos, avec une interface accessible aux débutants et aux créateurs indépendants.",
    features: [
      "Montage vidéo multipiste",
      "Export en HD et 4K",
      "Effets, titres et transitions prêts à l’emploi",
      "Outils de capture d’écran et d’enregistrement",
    ],
    lien: "https://www.movavi.com/suite/",
    affiliateUrl: "https://www.movavi.com/suite/?ref=zeroabo",
  },

  {
    id: "bitdefender-premium-security",
    slug: "bitdefender-premium-security",
    abonnement: "Antivirus annuel classique",
    originalApp: "Antivirus par abonnement",
    motsCles: ["antivirus", "sécurité", "vpn"],
    nom: "Bitdefender Premium Security (offres multi‑années)",
    prix: "Offres 2–3 ans à prix réduit",
    savings: 150,
    description:
      "Suite de sécurité complète avec antivirus, VPN et protections avancées, en offres longues durées.",
    longDescription:
      "Bitdefender Premium Security combine antivirus, pare-feu, protection web et VPN dans une suite tout-en-un. Les offres multi‑années permettent de réduire fortement le coût moyen par an.",
    features: [
      "Protection temps réel contre virus et ransomwares",
      "VPN inclus avec quota généreux",
      "Protection web et anti‑phishing",
      "Gestion multi‑appareils (PC, Mac, mobile)",
    ],
    lien: "https://www.bitdefender.com",
    affiliateUrl: "https://www.bitdefender.com/?affid=zeroabo",
  },

  {
    id: "aiseesoft-screen-recorder",
    slug: "aiseesoft-screen-recorder",
    abonnement: "Outils de capture par abonnement",
    originalApp: "Loom, Screencast-O-Matic",
    motsCles: ["capture écran", "enregistrement", "tutoriels vidéo"],
    nom: "Aiseesoft Screen Recorder",
    prix: "Licence à vie ~40 €",
    savings: 120,
    description:
      "Outil de capture d’écran et d’enregistrement vidéo simple, vendu en licence à vie.",
    longDescription:
      "Aiseesoft Screen Recorder permet d’enregistrer l’écran, le son système et le micro pour créer des tutoriels, démos produits ou cours en ligne, sans abonnement récurrent.",
    features: [
      "Enregistrement plein écran ou zone spécifique",
      "Capture du son système et du micro",
      "Ajout de surlignages et clics souris visibles",
      "Export dans de nombreux formats vidéo",
    ],
    lien: "https://www.aiseesoft.com/screen-recorder/",
    affiliateUrl: "https://www.aiseesoft.com/screen-recorder/?ref=zeroabo",
  },

  {
    id: "xmind-pro",
    slug: "xmind-pro",
    abonnement: "Outils de mind mapping par abonnement",
    originalApp: "MindMeister, Miro",
    motsCles: ["mind mapping", "cartes mentales", "organisation"],
    nom: "XMind Pro",
    prix: "Licence à vie (selon version)",
    savings: 100,
    description:
      "Outil de cartes mentales riche en fonctionnalités, disponible en licence à vie.",
    longDescription:
      "XMind Pro permet de créer des cartes mentales claires pour organiser ses idées, projets et présentations, avec de nombreux modèles et styles.",
    features: [
      "Cartes mentales et organigrammes",
      "Export vers PDF, images et formats bureautiques",
      "Thèmes et styles personnalisables",
      "Mode présentation intégré",
    ],
    lien: "https://xmind.app",
    affiliateUrl: "https://xmind.app/?ref=zeroabo",
  },
];
