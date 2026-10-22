import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Dark, grid-backed share image with the Deventhous wordmark. */
export function renderOg({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#000",
          color: "#ededed",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#ededed">
            <path fillRule="evenodd" d="M12 1.5 22.5 12 12 22.5 1.5 12 12 1.5Zm0 6.2L7.7 12l4.3 4.3 4.3-4.3L12 7.7Z" />
          </svg>
          <div style={{ fontSize: 36, fontWeight: 600, letterSpacing: "-0.03em" }}>Deventhous</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {eyebrow && (
            <div style={{ fontSize: 22, color: "#a1a1a1", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20 }}>
              {eyebrow}
            </div>
          )}
          <div style={{ fontSize: 68, fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.04em", maxWidth: 1000 }}>
            {title}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#a1a1a1" }}>
          <div>Websites · Stores · SEO · AI agents</div>
          <div>Lagos, Nigeria</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
