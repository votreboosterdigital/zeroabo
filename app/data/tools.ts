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
      "ONLYOFFICE permet de créer, éditer et collaborer sur des documents texte, tableurs et présentations, avec une interface proche de Microsoft Office et des options d'auto-hébergement.",
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
    motsCles: ["pdf", "édition pdf", "annotation", "signature", "adobe"],
    nom: "PDF-XChange Editor",
    prix: "À partir de ~50 € en une fois",
    savings: 250,
    description:
      "Éditeur PDF complet pour remplacer Adobe Acrobat Pro sans abonnement.",
    longDescription:
      "PDF-XChange Editor permet de créer, modifier, annoter et signer des fichiers PDF avec une grande finesse, tout en restant léger et vendu en licence perpétuelle.",
    features: [
      "Création et édition avancée de PDF",
      "Outils d'annotation et de commentaires",
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
    motsCles: ["montage vidéo", "video", "édition vidéo", "adobe premiere"],
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
      "Effets, titres et transitions prêts à l'emploi",
      "Outils de capture d'écran et d'enregistrement",
    ],
    lien: "https://www.movavi.com/suite/",
    affiliateUrl: "https://www.movavi.com/suite/?ref=zeroabo",
  },

  {
    id: "bitdefender-premium-security",
    slug: "bitdefender-premium-security",
    abonnement: "Antivirus annuel classique",
    originalApp: "Antivirus par abonnement",
    motsCles: ["antivirus", "sécurité", "vpn", "protection", "malware"],
    nom: "Bitdefender Premium Security",
    prix: "Offres 2–3 ans à prix réduit",
    savings: 150,
    description:
      "Suite de sécurité complète avec antivirus, VPN et protections avancées, en offres longues durées.",
    longDescription:
      "Bitdefender Premium Security combine antivirus, pare-feu, protection web et VPN dans une suite tout-en-un. Les offres multi-années permettent de réduire fortement le coût moyen par an.",
    features: [
      "Protection temps réel contre virus et ransomwares",
      "VPN inclus avec quota généreux",
      "Protection web et anti-phishing",
      "Gestion multi-appareils (PC, Mac, mobile)",
    ],
    lien: "https://www.bitdefender.com",
    affiliateUrl: "https://www.bitdefender.com/?affid=zeroabo",
  },

  {
    id: "xmind-pro",
    slug: "xmind-pro",
    abonnement: "MindMeister, Miro abonnement",
    originalApp: "MindMeister",
    motsCles: ["mind mapping", "cartes mentales", "organisation", "brainstorming", "miro"],
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

  {
    id: "affinity-publisher-2",
    slug: "affinity-publisher-2",
    abonnement: "Adobe InDesign",
    originalApp: "Adobe InDesign",
    motsCles: ["mise en page", "publication", "indesign", "adobe", "design print"],
    nom: "Affinity Publisher 2",
    prix: "Gratuit (racheté par Canva)",
    savings: 360,
    description:
      "Logiciel de mise en page professionnelle, anciennement payant et désormais gratuit depuis le rachat par Canva.",
    longDescription:
      "Affinity Publisher 2 est une alternative sérieuse à Adobe InDesign pour créer des livres, magazines, brochures et supports imprimés. Depuis son rachat par Canva en 2025, il est disponible gratuitement.",
    features: [
      "Mise en page multi-pages avancée",
      "Compatible fichiers Adobe InDesign",
      "Intégration avec Affinity Photo et Designer",
      "Export haute qualité pour l'impression",
    ],
    lien: "https://affinity.serif.com/publisher",
    affiliateUrl: "https://affinity.serif.com/publisher",
  },

  {
    id: "clip-studio-paint",
    slug: "clip-studio-paint",
    abonnement: "Adobe Illustrator, Photoshop abonnement",
    originalApp: "Adobe Illustrator",
    motsCles: ["illustration", "dessin", "manga", "bande dessinée", "adobe illustrator"],
    nom: "Clip Studio Paint",
    prix: "Environ 50 € licence perpétuelle",
    savings: 400,
    description:
      "Logiciel de dessin et d'illustration numérique en licence perpétuelle, idéal pour la BD et le manga.",
    longDescription:
      "Clip Studio Paint est le logiciel de référence pour les illustrateurs, dessinateurs de manga et créateurs de bandes dessinées. Disponible en achat unique, il rivalise avec les outils Adobe à une fraction du coût.",
    features: [
      "Outils de dessin optimisés pour tablette",
      "Bibliothèque de pinceaux et textures",
      "Gestion de planches de BD et manga",
      "Export en haute résolution",
    ],
    lien: "https://www.clipstudio.net",
    affiliateUrl: "https://www.clipstudio.net/?ref=zeroabo",
  },

  {
    id: "vmix",
    slug: "vmix",
    abonnement: "StreamYard, Ecamm abonnement",
    originalApp: "StreamYard",
    motsCles: ["streaming", "live", "production vidéo", "obs", "twitch", "youtube live"],
    nom: "vMix",
    prix: "À partir de ~60 € licence perpétuelle",
    savings: 180,
    description:
      "Logiciel de production live et streaming professionnel disponible en licence à vie.",
    longDescription:
      "vMix est une solution complète pour produire des émissions en direct, des webinaires et des streams. Il remplace avantageusement les outils par abonnement avec une licence perpétuelle.",
    features: [
      "Mixage multi-caméras en temps réel",
      "Streaming vers YouTube, Twitch et Facebook",
      "Effets, transitions et titres en direct",
      "Enregistrement local simultané",
    ],
    lien: "https://www.vmix.com",
    affiliateUrl: "https://www.vmix.com/?ref=zeroabo",
  },

  {
    id: "codelobster",
    slug: "codelobster",
    abonnement: "PHPStorm abonnement JetBrains",
    originalApp: "PHPStorm",
    motsCles: ["éditeur code", "php", "html", "css", "développement web", "ide"],
    nom: "CodeLobster PHP Edition Pro",
    prix: "Environ 50 € licence à vie",
    savings: 130,
    description:
      "IDE PHP et développement web vendu en licence perpétuelle, alternative à PHPStorm.",
    longDescription:
      "CodeLobster PHP Edition Pro est un éditeur de code complet pour PHP, HTML, CSS et JavaScript. Il propose l'auto-complétion, le débogage et le support des frameworks majeurs sans abonnement.",
    features: [
      "Auto-complétion intelligente PHP, HTML, CSS, JS",
      "Support Laravel, Symfony, WordPress",
      "Débogueur intégré",
      "FTP/SFTP intégré pour déploiement direct",
    ],
    lien: "https://codelobster.com",
    affiliateUrl: "https://codelobster.com/?ref=zeroabo",
  },

  {
    id: "focusplan",
    slug: "focusplan",
    abonnement: "Asana, Monday.com abonnement",
    originalApp: "Asana",
    motsCles: ["gestion de projet", "planning", "tableau blanc", "organisation", "productivité"],
    nom: "FocusPlan",
    prix: "Achat unique ~30 €",
    savings: 120,
    description:
      "Outil de planification visuelle de projets sur tableau blanc, vendu en achat unique.",
    longDescription:
      "FocusPlan propose une approche visuelle et intuitive de la gestion de projet sur tableau blanc interactif, sans frais mensuels récurrents.",
    features: [
      "Tableau blanc de planification visuelle",
      "Gestion des tâches et jalons",
      "Vue calendrier et Gantt simplifié",
      "Synchronisation iCloud",
    ],
    lien: "https://focusplan.app",
    affiliateUrl: "https://focusplan.app/?ref=zeroabo",
  },

  {
    id: "screenium",
    slug: "screenium",
    abonnement: "Loom abonnement",
    originalApp: "Loom",
    motsCles: ["capture écran", "enregistrement", "screenshot", "screencast"],
    nom: "Screenium 3",
    prix: "~15 € achat unique (Mac App Store)",
    savings: 80,
    description:
      "Outil de capture et enregistrement d'écran Mac vendu en achat unique sur le Mac App Store.",
    longDescription:
      "Screenium 3 est une application Mac légère et rapide pour capturer des écrans et enregistrer des vidéos sans abonnement. Disponible directement sur le Mac App Store.",
    features: [
      "Capture d'écran et enregistrement vidéo",
      "Annotations directement sur les captures",
      "Partage rapide vers le cloud",
      "Interface minimaliste et réactive",
    ],
    lien: "https://apps.apple.com/app/screenium-3/id1381004916",
    affiliateUrl: "https://apps.apple.com/app/screenium-3/id1381004916",
  },

  {
    id: "sublime-text",
    slug: "sublime-text",
    abonnement: "VS Code Cloud, éditeurs par abonnement",
    originalApp: "Éditeurs de code par abonnement",
    motsCles: ["éditeur texte", "code", "développement", "programmation", "javascript"],
    nom: "Sublime Text",
    prix: "~99 $ licence perpétuelle",
    savings: 0,
    description:
      "Éditeur de texte et de code ultra-rapide, vendu en licence perpétuelle avec mises à jour incluses.",
    longDescription:
      "Sublime Text est l'un des éditeurs de code les plus rapides et les plus personnalisables du marché. Sa licence perpétuelle donne accès à toutes les mises à jour de la version majeure achetée.",
    features: [
      "Performance exceptionnelle sur gros fichiers",
      "Multi-curseurs et sélection multiple",
      "Palette de commandes puissante",
      "Milliers de plugins disponibles",
    ],
    lien: "https://www.sublimetext.com",
    affiliateUrl: "https://www.sublimetext.com",
  },

  {
    id: "malwarebytes-lifetime",
    slug: "malwarebytes-lifetime",
    abonnement: "Antivirus Norton, McAfee abonnement",
    originalApp: "Norton 360",
    motsCles: ["antivirus", "malware", "sécurité", "norton", "mcafee", "protection"],
    nom: "Malwarebytes Premium (offre à vie)",
    prix: "Offre lifetime disponible sur StackSocial",
    savings: 200,
    description:
      "Protection anti-malware reconnue, disponible en licence à vie via des offres spéciales.",
    longDescription:
      "Malwarebytes Premium est l'un des anti-malwares les plus réputés au monde. Des offres de licence à vie sont régulièrement disponibles sur StackSocial et similaires, permettant d'éviter l'abonnement annuel.",
    features: [
      "Détection et suppression de malwares avancés",
      "Protection en temps réel",
      "Anti-ransomware intégré",
      "Compatible Windows et Mac",
    ],
    lien: "https://www.malwarebytes.com",
    affiliateUrl: "https://www.malwarebytes.com/?ref=zeroabo",
  },

  {
    id: "magix-sound-forge",
    slug: "magix-sound-forge",
    abonnement: "Adobe Audition abonnement",
    originalApp: "Adobe Audition",
    motsCles: ["audio", "montage audio", "podcast", "musique", "son", "adobe audition"],
    nom: "MAGIX Sound Forge Audio Studio",
    prix: "Environ 60 € licence perpétuelle",
    savings: 280,
    description:
      "Logiciel de montage audio professionnel en licence perpétuelle, alternative à Adobe Audition.",
    longDescription:
      "MAGIX Sound Forge Audio Studio permet d'enregistrer, éditer et masteriser des fichiers audio avec une qualité professionnelle. Vendu en licence perpétuelle, il s'impose comme une alternative solide à Adobe Audition.",
    features: [
      "Enregistrement multipiste",
      "Restauration audio et réduction de bruit",
      "Effets et plugins VST inclus",
      "Export dans tous les formats audio majeurs",
    ],
    lien: "https://www.magix.com/sound-forge-audio-studio",
    affiliateUrl: "https://www.magix.com/sound-forge-audio-studio/?ref=zeroabo",
  },

  {
    id: "techsmith-snagit",
    slug: "techsmith-snagit",
    abonnement: "Outils de capture par abonnement",
    originalApp: "Loom, Droplr",
    motsCles: ["capture écran", "annotation", "screenshot", "documentation", "tutoriel"],
    nom: "TechSmith Snagit",
    prix: "~80 € licence perpétuelle",
    savings: 150,
    description:
      "Outil de capture d'écran et d'annotation professionnel, vendu en achat unique.",
    longDescription:
      "TechSmith Snagit est la référence professionnelle pour capturer, annoter et partager des captures d'écran et enregistrements vidéo courts. Très utilisé pour la documentation technique et les tutoriels.",
    features: [
      "Capture d'écran avec défilement automatique",
      "Outils d'annotation avancés",
      "Enregistrement vidéo court",
      "Bibliothèque de captures organisée",
    ],
    lien: "https://www.techsmith.com/snagit",
    affiliateUrl: "https://www.techsmith.com/snagit/?ref=zeroabo",
  },
];
