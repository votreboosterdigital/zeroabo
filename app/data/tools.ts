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
  logoDomain: string;
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
    logoDomain: "onlyoffice.com",
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
    logoDomain: "tracker-software.com",
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
    logoDomain: "movavi.com",
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
    logoDomain: "bitdefender.com",
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
    logoDomain: "xmind.app",
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
      "Logiciel de mise en page professionnelle, désormais gratuit depuis le rachat par Canva.",
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
    logoDomain: "affinity.serif.com",
  },
  {
    id: "clip-studio-paint",
    slug: "clip-studio-paint",
    abonnement: "Adobe Illustrator abonnement",
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
    logoDomain: "clipstudio.net",
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
    logoDomain: "vmix.com",
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
    logoDomain: "focusplan.app",
  },
  {
    id: "sublime-text",
    slug: "sublime-text",
    abonnement: "Éditeurs de code par abonnement",
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
    logoDomain: "sublimetext.com",
  },
  {
    id: "malwarebytes-lifetime",
    slug: "malwarebytes-lifetime",
    abonnement: "Norton 360, McAfee abonnement",
    originalApp: "Norton 360",
    motsCles: ["antivirus", "malware", "sécurité", "norton", "mcafee", "protection"],
    nom: "Malwarebytes Premium",
    prix: "Offre lifetime disponible sur StackSocial",
    savings: 200,
    description:
      "Protection anti-malware reconnue, disponible en licence à vie via des offres spéciales.",
    longDescription:
      "Malwarebytes Premium est l'un des anti-malwares les plus réputés au monde. Des offres de licence à vie sont régulièrement disponibles sur StackSocial, permettant d'éviter l'abonnement annuel.",
    features: [
      "Détection et suppression de malwares avancés",
      "Protection en temps réel",
      "Anti-ransomware intégré",
      "Compatible Windows et Mac",
    ],
    lien: "https://www.malwarebytes.com",
    affiliateUrl: "https://www.malwarebytes.com/?ref=zeroabo",
    logoDomain: "malwarebytes.com",
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
    logoDomain: "magix.com",
  },
  {
    id: "techsmith-snagit",
    slug: "techsmith-snagit",
    abonnement: "Loom, Droplr abonnement",
    originalApp: "Loom",
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
    logoDomain: "techsmith.com",
  },
  {
    id: "aiseesoft-screen-recorder",
    slug: "aiseesoft-screen-recorder",
    abonnement: "Outils de capture par abonnement",
    originalApp: "Loom, Screencast-O-Matic",
    motsCles: ["capture écran", "enregistrement", "tutoriels vidéo", "screencast"],
    nom: "Aiseesoft Screen Recorder",
    prix: "Licence à vie ~40 €",
    savings: 120,
    description:
      "Outil de capture d'écran et d'enregistrement vidéo simple, vendu en licence à vie.",
    longDescription:
      "Aiseesoft Screen Recorder permet d'enregistrer l'écran, le son système et le micro pour créer des tutoriels, démos produits ou cours en ligne, sans abonnement récurrent.",
    features: [
      "Enregistrement plein écran ou zone spécifique",
      "Capture du son système et du micro",
      "Ajout de surlignages et clics souris visibles",
      "Export dans de nombreux formats vidéo",
    ],
    lien: "https://www.aiseesoft.com/screen-recorder/",
    affiliateUrl: "https://www.aiseesoft.com/screen-recorder/?ref=zeroabo",
    logoDomain: "aiseesoft.com",
  },
  {
    id: "aomei-backupper",
    slug: "aomei-backupper",
    abonnement: "Acronis Cyber Protect Home, Carbonite",
    originalApp: "Acronis Cyber Protect Home",
    motsCles: ["sauvegarde", "backup", "partitionnement", "récupération données", "acronis"],
    nom: "AOMEI Backupper",
    prix: "À partir de ~40 € licence perpétuelle",
    savings: 120,
    description: "Logiciel de sauvegarde et partitionnement en licence perpétuelle, alternative directe à Acronis.",
    longDescription: "AOMEI Backupper permet de sauvegarder, cloner et restaurer vos données avec une interface simple. Vendu en licence perpétuelle, il remplace avantageusement les solutions cloud par abonnement.",
    features: [
      "Sauvegarde système, disque et fichiers",
      "Clonage de disque et migration vers SSD",
      "Restauration complète ou granulaire",
      "Planification automatique des sauvegardes",
    ],
    lien: "https://www.aomeitech.com/aomei-backupper.html",
    affiliateUrl: "https://www.tkqlhce.com/click-101699471-17168804",
    logoDomain: "aomei.com",
  },
  {
    id: "kaspersky-standard",
    slug: "kaspersky-standard",
    abonnement: "Norton 360, McAfee Total Protection",
    originalApp: "Norton 360",
    motsCles: ["antivirus", "sécurité", "norton", "mcafee", "protection", "kaspersky"],
    nom: "Kaspersky Standard",
    prix: "Licence 1 à 2 ans à tarif réduit",
    savings: 100,
    description: "Suite antivirus reconnue mondialement, disponible en licence courte durée sans renouvellement automatique.",
    longDescription: "Kaspersky Standard offre une protection complète contre virus, ransomwares et menaces en ligne. Contrairement aux antivirus qui se renouvellent silencieusement, Kaspersky permet d'acheter des licences à durée fixe sans engagement.",
    features: [
      "Protection temps réel contre virus et ransomwares",
      "Analyse des menaces en temps réel",
      "Protection des achats en ligne",
      "Compatible Windows, Mac et mobile",
    ],
    lien: "https://www.kaspersky.fr",
    affiliateUrl: "https://www.awin1.com/cread.php?s=3125435&v=19485&q=435785&r=2795782",
    logoDomain: "kaspersky.com",
  },
  {
    id: "affinity-photo-2",
    slug: "affinity-photo-2",
    abonnement: "Adobe Photoshop CC",
    originalApp: "Adobe Photoshop",
    motsCles: ["retouche photo", "photoshop", "adobe", "photo editing", "design", "affinity"],
    nom: "Affinity Photo 2",
    prix: "Gratuit depuis le rachat par Canva",
    savings: 780,
    description: "Alternative professionnelle à Photoshop, désormais gratuite depuis le rachat par Canva en 2025.",
    longDescription: "Affinity Photo 2 est une suite complète de retouche photo et de création digitale. Depuis son rachat par Canva en 2025, il est disponible gratuitement, ce qui en fait l'alternative la plus rentable à Adobe Photoshop sur le marché.",
    features: [
      "Retouche photo non destructive",
      "Outils de sélection et masquage avancés",
      "Gestion des couleurs professionnelle",
      "Compatible fichiers PSD Adobe",
    ],
    lien: "https://affinity.serif.com/fr/photo/",
    affiliateUrl: "https://affinity.serif.com/fr/photo/",
    logoDomain: "affinity.serif.com",
  },
];
