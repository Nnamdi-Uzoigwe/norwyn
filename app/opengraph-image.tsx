import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Norwyn Solutions - Asset Recovery Experts";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a", // 👈 change to your brand color
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo */}
        <img
          src="https://yoursite.com/logo.png" // 👈 must be an absolute URL
          width={180}
          height={60}
          style={{ marginBottom: "32px", objectFit: "contain" }}
        />

        {/* Headline */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: "20px",
          }}
        >
          Asset Recovery Experts
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: 24,
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.5,
          }}
        >
          Cryptocurrency tracing, legal action, freezing orders — one
          coordinated solution for fraud victims.
        </div>

        {/* Domain badge */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: 18,
            color: "#475569",
          }}
        >
          norwynsolutions.com
        </div>
      </div>
    ),
    { ...size }
  );
}