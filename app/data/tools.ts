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
    id: "affinity-photo",
    slug: "affinity-photo",
    abonnement: "Adobe Photoshop",
    originalApp: "Adobe Photoshop",
    motsCles: ["adobe", "photoshop", "photo", "retouche", "création"],
    nom: "Affinity Photo",
    prix: "79,99 €",
    savings: 240,
    description:
      "Logiciel de retouche photo professionnel, sans abonnement, avec la plupart des fonctionnalités clés de Photoshop.",
    longDescription:
      "Affinity Photo est une alternative professionnelle à Adobe Photoshop disponible en achat unique. Il offre des outils de retouche avancés, la gestion des calques, la correction colorimétrique RAW, et bien plus encore. Compatible Windows, Mac et iPad, il convient aussi bien aux photographes qu'aux graphistes. Aucun abonnement, aucune surprise sur ta facture mensuelle.",
    features: [
      "Retouche photo RAW avancée",
      "Gestion complète des calques",
      "Correction colorimétrique professionnelle",
      "Outils de sélection et masquage précis",
      "Compatible PSD (fichiers Photoshop)",
      "Disponible sur Windows, Mac et iPad",
    ],
    lien: "https://example.com/affinity-photo",
    affiliateUrl: "https://example.com/affinity-photo",
  },
  {
    id: "affinity-designer",
    slug: "affinity-designer",
    abonnement: "Adobe Illustrator",
    originalApp: "Adobe Illustrator",
    motsCles: ["adobe", "illustrator", "vectoriel", "logo", "design"],
    nom: "Affinity Designer",
    prix: "79,99 €",
    savings: 240,
    description:
      "Outil de création graphique vectorielle puissant, idéal pour logos, icônes et illustrations, sans abonnement.",
    longDescription:
      "Affinity Designer est la meilleure alternative à Adobe Illustrator pour les créateurs qui refusent de payer un abonnement mensuel. Il combine outils vectoriels et pixellisés dans une seule application, avec une interface fluide et réactive. Parfait pour créer des logos, des illustrations, des maquettes UI ou des visuels print.",
    features: [
      "Dessin vectoriel professionnel",
      "Mode pixel intégré pour le design UI",
      "Exportation multi-format (SVG, PDF, PNG…)",
      "Grilles et guides avancés",
      "Compatible AI et EPS (fichiers Illustrator)",
      "Performance fluide même sur grands fichiers",
    ],
    lien: "https://example.com/affinity-designer",
    affiliateUrl: "https://example.com/affinity-designer",
  },
  {
    id: "affinity-publisher",
    slug: "affinity-publisher",
    abonnement: "Adobe InDesign",
    originalApp: "Adobe InDesign",
    motsCles: ["adobe", "indesign", "mise en page", "print", "magazine"],
    nom: "Affinity Publisher",
    prix: "79,99 €",
    savings: 240,
    description:
      "Solution de mise en page avancée pour brochures, magazines et livres, en achat unique.",
    longDescription:
      "Affinity Publisher remplace efficacement Adobe InDesign pour la mise en page professionnelle. Que ce soit pour des brochures, des magazines, des livres ou des présentations print, il offre tous les outils nécessaires sans abonnement. Son intégration avec Affinity Photo et Designer en fait une suite complète à prix fixe.",
    features: [
      "Mise en page multipage professionnelle",
      "Gestion typographique avancée",
      "Liaison avec Affinity Photo et Designer",
      "Export PDF prêt pour l'impression",
      "Modèles de documents inclus",
      "Compatible IDML (fichiers InDesign)",
    ],
    lien: "https://example.com/affinity-publisher",
    affiliateUrl: "https://example.com/affinity-publisher",
  },
  {
    id: "libreoffice",
    slug: "libreoffice",
    abonnement: "Microsoft 365",
    originalApp: "Microsoft 365",
    motsCles: ["microsoft", "office", "word", "excel", "powerpoint", "365"],
    nom: "LibreOffice",
    prix: "Gratuit (open source)",
    savings: 100,
    description:
      "Suite bureautique complète et gratuite, alternative à Microsoft 365, compatible avec les formats Word, Excel et PowerPoint.",
    longDescription:
      "LibreOffice est une suite bureautique open source qui inclut un traitement de texte, un tableur, un outil de présentation, et bien plus. Elle lit et écrit les formats Microsoft Office (docx, xlsx, pptx) et ne demande aucun abonnement. Utilisée par des millions de personnes et des gouvernements à travers le monde, c'est une alternative solide et pérenne.",
    features: [
      "Traitement de texte complet (Writer)",
      "Tableur puissant (Calc)",
      "Présentations dynamiques (Impress)",
      "Compatible formats Microsoft Office",
      "100% gratuit et open source",
      "Disponible sur Windows, Mac et Linux",
    ],
    lien: "https://example.com/libreoffice",
    affiliateUrl: "https://example.com/libreoffice",
  },
  {
    id: "obsidian",
    slug: "obsidian",
    abonnement: "Notion",
    originalApp: "Notion",
    motsCles: ["notion", "notes", "productivité", "documentation", "wiki"],
    nom: "Obsidian",
    prix: "Gratuit (usage personnel) / 50 $ licence commerciale",
    savings: 96,
    description:
      "Application de prise de notes en Markdown ultra flexible, avec liens entre notes et graphe de connaissances.",
    longDescription:
      "Obsidian stocke toutes tes notes en fichiers Markdown locaux, ce qui signifie que tes données t'appartiennent vraiment. Grâce à son système de liens bidirectionnels et son graphe de connaissances, il permet de construire une véritable base de savoir personnelle. Des centaines de plugins communautaires étendent ses fonctionnalités à l'infini.",
    features: [
      "Stockage local en fichiers Markdown",
      "Liens bidirectionnels entre notes",
      "Graphe de connaissances visuel",
      "Centaines de plugins communautaires",
      "Thèmes personnalisables",
      "Données 100% locales, aucun cloud obligatoire",
    ],
    lien: "https://example.com/obsidian",
    affiliateUrl: "https://example.com/obsidian",
  },
  {
    id: "appflowy",
    slug: "appflowy",
    abonnement: "Notion",
    originalApp: "Notion",
    motsCles: ["notion", "notes", "organisation", "base de données"],
    nom: "AppFlowy",
    prix: "Gratuit (open source)",
    savings: 96,
    description:
      "Alternative open source à Notion avec bases de données, tableaux Kanban et documents, hébergeable soi-même.",
    longDescription:
      "AppFlowy est une alternative open source à Notion qui te permet de garder le contrôle total sur tes données. Tu peux l'héberger toi-même ou utiliser leur version cloud gratuite. Il propose des documents, des bases de données, des grilles et des tableaux Kanban dans une interface moderne et rapide.",
    features: [
      "Documents et notes structurés",
      "Bases de données et grilles",
      "Tableaux Kanban",
      "Open source et auto-hébergeable",
      "Interface moderne et rapide",
      "Données sous ton contrôle total",
    ],
    lien: "https://example.com/appflowy",
    affiliateUrl: "https://example.com/appflowy",
  },
  {
    id: "davinci-resolve-studio",
    slug: "davinci-resolve-studio",
    abonnement: "Adobe Premiere Pro",
    originalApp: "Adobe Premiere Pro",
    motsCles: ["premiere", "premiere pro", "montage", "vidéo", "adobe"],
    nom: "DaVinci Resolve Studio",
    prix: "295 € (licence définitive)",
    savings: 360,
    description:
      "Suite complète de montage vidéo, étalonnage et audio, disponible en licence définitive.",
    longDescription:
      "DaVinci Resolve Studio est utilisé par des professionnels d'Hollywood pour le montage, l'étalonnage des couleurs, les effets visuels et le mixage audio. Sa licence définitive te donne accès à toutes les futures mises à jour majeures sans frais supplémentaires. Une version gratuite (sans le Studio) est également disponible avec déjà énormément de fonctionnalités.",
    features: [
      "Montage vidéo professionnel multicaméra",
      "Étalonnage des couleurs de niveau cinéma",
      "Effets visuels et motion graphics (Fusion)",
      "Mixage audio avancé (Fairlight)",
      "Collaboration en temps réel",
      "Version gratuite très complète disponible",
    ],
    lien: "https://example.com/davinci-resolve",
    affiliateUrl: "https://example.com/davinci-resolve",
  },
  {
    id: "penpot",
    slug: "penpot",
    abonnement: "Figma",
    originalApp: "Figma",
    motsCles: ["figma", "design", "ui", "ux", "prototype", "interface"],
    nom: "Penpot",
    prix: "Gratuit (open source)",
    savings: 180,
    description:
      "Outil de design UI/UX open source, basé sur les standards web, alternative gratuite à Figma.",
    longDescription:
      "Penpot est la première plateforme de design et prototypage open source au monde. Contrairement à Figma, il utilise les standards ouverts du web (SVG, CSS) et peut être auto-hébergé. Il propose du design collaboratif en temps réel, des composants réutilisables et du prototypage interactif, le tout gratuitement.",
    features: [
      "Design UI/UX collaboratif en temps réel",
      "Prototypage interactif",
      "Composants et bibliothèques partagées",
      "Basé sur les standards SVG et CSS",
      "Open source et auto-hébergeable",
      "Exports développeur intégrés",
    ],
    lien: "https://example.com/penpot",
    affiliateUrl: "https://example.com/penpot",
  },
  {
    id: "inkscape",
    slug: "inkscape",
    abonnement: "Canva Pro",
    originalApp: "Canva Pro",
    motsCles: ["canva", "graphisme", "design", "vectoriel", "illustration"],
    nom: "Inkscape",
    prix: "Gratuit (open source)",
    savings: 120,
    description:
      "Éditeur graphique vectoriel open source et gratuit, puissant alternative à Canva Pro pour la création.",
    longDescription:
      "Inkscape est un éditeur de graphiques vectoriels professionnel et entièrement gratuit. Il permet de créer des logos, des illustrations, des infographies et tout type de visuels vectoriels. Compatible avec le format SVG standard, il est idéal pour les créatifs qui veulent la puissance sans l'abonnement.",
    features: [
      "Création vectorielle professionnelle",
      "Outils de typographie avancés",
      "Compatible SVG, PDF, EPS, AI",
      "Effets et filtres créatifs",
      "Extensions et plugins communautaires",
      "100% gratuit et open source",
    ],
    lien: "https://example.com/inkscape",
    affiliateUrl: "https://example.com/inkscape",
  },
  {
    id: "jitsi-meet",
    slug: "jitsi-meet",
    abonnement: "Zoom Pro",
    originalApp: "Zoom Pro",
    motsCles: ["zoom", "visioconférence", "réunion", "vidéo", "appel"],
    nom: "Jitsi Meet",
    prix: "Gratuit (open source)",
    savings: 180,
    description:
      "Solution de visioconférence open source, sans compte obligatoire, chiffrée et gratuite.",
    longDescription:
      "Jitsi Meet est une solution de visioconférence entièrement gratuite et open source. Pas besoin de créer un compte pour rejoindre une réunion. Les appels sont chiffrés de bout en bout et tu peux héberger ta propre instance pour un contrôle total. Idéal pour les équipes et les professionnels qui cherchent une alternative à Zoom sans abonnement.",
    features: [
      "Visioconférence sans compte obligatoire",
      "Chiffrement de bout en bout",
      "Partage d'écran intégré",
      "Chat et réactions en réunion",
      "Auto-hébergeable sur son propre serveur",
      "100% gratuit et open source",
    ],
    lien: "https://example.com/jitsi",
    affiliateUrl: "https://example.com/jitsi",
  },
];
