import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { BLOG_POSTS } from "@/app/data/blog";
import BlogList from "./BlogList";
import EmailCapture from "@/app/components/EmailCapture";

export const metadata: Metadata = {
  title: "Blog — ZéroAbo",
  description:
    "Guides et comparatifs pour arrêter de payer trop d'abonnements logiciels.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-slate-50">
      <Header />
      <div className="max-w-5xl mx-auto px-4 pt-20 md:pt-[108px] py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400 mb-3">
          Blog
        </p>
        <h1 className="text-3xl font-black text-slate-50 mb-2">Blog</h1>
        <p className="text-slate-400 mb-10">
          Guides, comparatifs et conseils pour sortir des abonnements.
        </p>
        <BlogList posts={BLOG_POSTS} />
        <div className="mt-16">
          <EmailCapture />
        </div>
      </div>
    </div>
  );
}
