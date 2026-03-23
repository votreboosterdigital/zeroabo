import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import sanitizeHtml from "sanitize-html";
import Header from "@/app/components/Header";
import Breadcrumb from "@/app/components/Breadcrumb";
import { BLOG_POSTS } from "@/app/data/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article — ZéroAbo" };
  const url = `https://zeroabo.fr/blog/${slug}`;
  const title = `${post.titre} — ZéroAbo`;
  return {
    title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      images: [`https://zeroabo.fr/blog/${slug}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
      images: [`https://zeroabo.fr/blog/${slug}/opengraph-image`],
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return notFound();

  const articlesLies = BLOG_POSTS.filter((p) =>
    post.articlesLies.includes(p.slug)
  ).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.titre,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "ZéroAbo", url: "https://zeroabo.fr" },
    publisher: { "@type": "Organization", name: "ZéroAbo", url: "https://zeroabo.fr" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://zeroabo.fr/blog/${post.slug}` },
  };

  const faqLd = post.faq && post.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  } : null;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://zeroabo.fr" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://zeroabo.fr/blog" },
      { "@type": "ListItem", position: 3, name: post.titre, item: `https://zeroabo.fr/blog/${post.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-[#020817] text-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <Header />
      <div className="max-w-2xl mx-auto px-4 pt-20 md:pt-[108px] py-16">

        <Breadcrumb items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.titre },
        ]} />

        {/* En-tête article */}
        <div className="flex items-center gap-2 mb-4">
          <span className="rounded-full bg-sky-500/10 px-2.5 py-0.5 text-xs font-medium text-sky-400">
            {post.categorie}
          </span>
          <span className="text-xs text-slate-500">{post.tempsLecture} min de lecture</span>
          <span className="text-xs text-slate-500">·</span>
          <span className="text-xs text-slate-500">{formatDate(post.date)}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-50 mb-10 leading-tight">
          {post.titre}
        </h1>

        {/* Contenu article */}
        <div
          className="prose prose-invert max-w-none prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline prose-headings:text-slate-100 prose-p:text-slate-300 prose-strong:text-slate-100 prose-li:text-slate-300 prose-table:text-sm prose-th:text-slate-300 prose-td:text-slate-400"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.contenu, {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(["h1", "h2", "h3", "h4", "table", "thead", "tbody", "tr", "th", "td"]),
            allowedAttributes: { ...sanitizeHtml.defaults.allowedAttributes, a: ["href", "target", "rel"], "*": ["class"] },
          }) }}
        />

        {/* Articles liés */}
        {articlesLies.length > 0 && (
          <div className="mt-14 border-t border-white/10 pt-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
              À lire aussi
            </p>
            <div className="flex flex-col gap-4">
              {articlesLies.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group rounded-xl border border-white/10 bg-white/5 px-5 py-4 hover:border-white/20 transition-colors"
                >
                  <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {related.titre}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{related.tempsLecture} min</p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
