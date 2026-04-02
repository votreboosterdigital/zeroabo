import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { BLOG_POSTS } from "@/app/data/blog";
import BlogList from "./BlogList";
import EmailCapture from "@/app/components/EmailCapture";

const url = "https://zeroabo.fr/blog";

export const metadata: Metadata = {
  title: "Guides logiciels sans abonnement — Comparatifs et alternatives | ZéroAbo",
  description:
    "Comparatifs détaillés pour remplacer Adobe, Microsoft 365, Norton et autres abonnements par des logiciels en achat unique. Économisez des centaines d'euros par an.",
  alternates: { canonical: url },
  openGraph: {
    title: "Guides logiciels sans abonnement — Comparatifs et alternatives | ZéroAbo",
    description:
      "Comparatifs détaillés pour remplacer Adobe, Microsoft 365, Norton et autres abonnements par des logiciels en achat unique.",
    url,
    type: "website",
    images: [{ url: "https://zeroabo.fr/opengraph-image", width: 1200, height: 630, alt: "ZéroAbo — Guides logiciels sans abonnement" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guides logiciels sans abonnement — Comparatifs et alternatives | ZéroAbo",
    description: "Comparatifs détaillés pour remplacer Adobe, Microsoft 365, Norton et autres abonnements par des logiciels en achat unique.",
    images: ["https://zeroabo.fr/opengraph-image"],
  },
};

const collectionPageLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Guides logiciels sans abonnement",
  description: "Comparatifs et alternatives aux logiciels par abonnement",
  url,
  publisher: { "@type": "Organization", name: "ZéroAbo", url: "https://zeroabo.fr" },
  hasPart: BLOG_POSTS.slice(0, 10).map((p) => ({
    "@type": "BlogPosting",
    headline: p.titre,
    description: p.description,
    datePublished: p.date,
    url: `https://zeroabo.fr/blog/${p.slug}`,
  })),
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageLd) }}
      />
      <Header />
      <div className="max-w-5xl mx-auto px-4 pt-20 md:pt-[108px] py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400 mb-3">
          Guides & comparatifs
        </p>
        <h1 className="text-3xl font-black text-slate-50 mb-2">
          Logiciels sans abonnement — Comparatifs et alternatives
        </h1>
        <p className="text-slate-400 mb-10">
          Remplacez Adobe, Microsoft 365, Norton et autres abonnements par des logiciels en achat unique. Données chiffrées, économies réelles.
        </p>
        <BlogList posts={BLOG_POSTS} />
        <div className="mt-16">
          <EmailCapture />
        </div>
      </div>
    </div>
  );
}
