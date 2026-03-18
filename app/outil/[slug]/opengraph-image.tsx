// app/outil/[slug]/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { TOOL_ALTERNATIVES } from "@/app/data/tools";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

export default async function OgImage({ params }: Props) {
  const { slug } = await params;
  const outil = TOOL_ALTERNATIVES.find((t) => t.slug === slug);

  const nom = outil?.nom ?? "Outil";
  const originalApp = outil?.originalApp ?? "";
  const prix = outil?.prix ?? "";

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
        {/* Badge */}
        <div
          style={{
            display: "flex",
            background: "rgba(16,185,129,0.1)",
            border: "1px solid rgba(16,185,129,0.3)",
            borderRadius: 99,
            padding: "6px 20px",
            color: "#6ee7b7",
            fontSize: 18,
            fontWeight: 600,
            marginBottom: 32,
          }}
        >
          Achat unique
        </div>

        {/* Nom outil */}
        <div
          style={{
            display: "flex",
            fontSize: 80,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-2px",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          {nom}
        </div>

        {/* Remplace */}
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#94a3b8",
            marginBottom: 12,
          }}
        >
          Remplace {originalApp}
        </div>

        {/* Prix */}
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#10b981",
            fontWeight: 600,
            marginBottom: 48,
          }}
        >
          {prix}
        </div>

        {/* Branding */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ display: "flex", fontSize: 22, fontWeight: 700 }}>
            <span style={{ display: "flex", color: "#10b981" }}>Zéro</span>
            <span style={{ display: "flex", color: "white" }}>Abo</span>
          </div>
          <div style={{ display: "flex", color: "#475569", fontSize: 18 }}>
            · zeroabo.fr
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
