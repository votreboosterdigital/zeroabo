// app/blog/[slug]/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { BLOG_POSTS } from "@/app/data/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

export default async function OgImage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  const titre = post?.titre ?? "Article";
  const categorie = post?.categorie ?? "Blog";
  const tempsLecture = post?.tempsLecture ?? 5;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#020617",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Badge catégorie */}
        <div
          style={{
            display: "flex",
            background: "rgba(14,165,233,0.1)",
            border: "1px solid rgba(14,165,233,0.3)",
            borderRadius: 99,
            padding: "6px 20px",
            color: "#7dd3fc",
            fontSize: 18,
            fontWeight: 600,
            marginBottom: 32,
          }}
        >
          {categorie} · {tempsLecture} min de lecture
        </div>

        {/* Titre */}
        <div
          style={{
            display: "flex",
            fontSize: titre.length > 50 ? 52 : 64,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-1px",
            lineHeight: 1.15,
            marginBottom: 48,
            maxWidth: 1000,
          }}
        >
          {titre}
        </div>

        {/* Branding */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ display: "flex", fontSize: 22, fontWeight: 700 }}>
            <span style={{ display: "flex", color: "#10b981" }}>Zéro</span>
            <span style={{ display: "flex", color: "white" }}>Abo</span>
          </div>
          <div style={{ display: "flex", color: "#475569", fontSize: 18 }}>
            · zeroabo.fr/blog
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
