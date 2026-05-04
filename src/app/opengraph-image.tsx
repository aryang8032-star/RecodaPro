import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Recoda Intelligence — Cloud Digital Signage CMS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A12",
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
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(circle, rgba(91,91,255,0.2) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              border: "2.5px solid #5B5BFF",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "16px", height: "16px", backgroundColor: "#5B5BFF", borderRadius: "3px" }} />
          </div>
          <span style={{ fontSize: "28px", fontWeight: "800", color: "#ffffff" }}>
            Recoda<span style={{ color: "#5B5BFF" }}>Intelligence</span>
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "900",
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: "900px",
            marginBottom: "20px",
          }}
        >
          One cloud dashboard.
          <br />
          <span style={{ color: "#5B5BFF" }}>Every screen</span>, intelligently controlled.
        </h1>

        {/* Subhead */}
        <p style={{ color: "#A0A3B8", fontSize: "22px", textAlign: "center", maxWidth: "700px" }}>
          Manage digital signage across hundreds of locations — design, schedule, monitor, and launch campaigns in minutes.
        </p>

        {/* Stats */}
        <div style={{ display: "flex", gap: "48px", marginTop: "40px" }}>
          {[["1,200+", "Screens"], ["80+", "Cities"], ["500+", "Customers"]].map(([num, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontSize: "32px", fontWeight: "900", color: "#5B5BFF" }}>{num}</span>
              <span style={{ fontSize: "14px", color: "#A0A3B8" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
