export type SubscriptionCategorie = 'creativite' | 'bureautique' | 'securite' | 'productivite' | 'autre';

export type Subscription = {
  id: string;
  nom: string;
  categorie: SubscriptionCategorie;
  prixAnnuel: number;   // €/an
  economie3ans: number; // € économisés sur 3 ans avec l'alternative ZéroAbo
};

export const SUBSCRIPTIONS: Subscription[] = [
  { id: "adobe-creative-cloud", nom: "Adobe Creative Cloud", categorie: "creativite", prixAnnuel: 660, economie3ans: 1620 },
  { id: "photoshop", nom: "Adobe Photoshop", categorie: "creativite", prixAnnuel: 260, economie3ans: 780 },
  { id: "premiere-pro", nom: "Adobe Premiere Pro", categorie: "creativite", prixAnnuel: 260, economie3ans: 880 },
  { id: "acrobat-pro", nom: "Adobe Acrobat Pro", categorie: "creativite", prixAnnuel: 180, economie3ans: 390 },
  { id: "microsoft-365", nom: "Microsoft 365", categorie: "bureautique", prixAnnuel: 100, economie3ans: 300 },
  { id: "google-workspace", nom: "Google Workspace", categorie: "bureautique", prixAnnuel: 144, economie3ans: 132 },
  { id: "norton-360", nom: "Norton 360", categorie: "securite", prixAnnuel: 100, economie3ans: 200 },
  { id: "mcafee", nom: "McAfee Total Protection", categorie: "securite", prixAnnuel: 90, economie3ans: 170 },
  { id: "asana-premium", nom: "Asana Premium", categorie: "productivite", prixAnnuel: 120, economie3ans: 240 },
  { id: "monday-com", nom: "Monday.com", categorie: "productivite", prixAnnuel: 192, economie3ans: 312 },
  { id: "loom-pro", nom: "Loom Pro", categorie: "productivite", prixAnnuel: 96, economie3ans: 246 },
  { id: "notion-plus", nom: "Notion Plus", categorie: "productivite", prixAnnuel: 96, economie3ans: 288 },
  { id: "mindmeister", nom: "MindMeister", categorie: "productivite", prixAnnuel: 108, economie3ans: 204 },
  { id: "streamyard", nom: "StreamYard", categorie: "creativite", prixAnnuel: 600, economie3ans: 1440 },
  { id: "dropbox-plus", nom: "Dropbox Plus", categorie: "bureautique", prixAnnuel: 120, economie3ans: 360 },
];
