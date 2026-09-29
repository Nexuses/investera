import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

// Branded 1200x630 social card, e.g. /og?title=Pricing&eyebrow=Investera%20Pro
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") || "Investment Management, Together").slice(0, 110);
  const eyebrow = (searchParams.get("eyebrow") || "Investera Pro").slice(0, 40);

  const [logo, regular, bold] = await Promise.all([
    readFile(join(process.cwd(), "public/images/logo-white.png")),
    readFile(join(process.cwd(), "assets/fonts/plus-jakarta-sans-latin-400-normal.woff")),
    readFile(join(process.cwd(), "assets/fonts/plus-jakarta-sans-latin-700-normal.woff")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #050B1F 0%, #0C2D57 100%)",
          color: "#ffffff",
          fontFamily: "Plus Jakarta Sans",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain img */}
        <img src={logoSrc} width={234} height={50} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#CCA400",
              fontWeight: 700,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: title.length > 60 ? 56 : 68,
              lineHeight: 1.15,
              fontWeight: 700,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 64, height: 6, borderRadius: 3, background: "#CCA400" }} />
          <div style={{ fontSize: 24, color: "rgba(255,255,255,0.72)" }}>
            www.investera.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Plus Jakarta Sans", data: regular, weight: 400, style: "normal" },
        { name: "Plus Jakarta Sans", data: bold, weight: 700, style: "normal" },
      ],
      headers: { "Cache-Control": "public, max-age=86400, s-maxage=604800" },
    },
  );
}
