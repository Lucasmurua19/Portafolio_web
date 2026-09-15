import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg,#0a0a0f,#141426)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 72,
            height: 72,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 16,
            background: "linear-gradient(135deg,#4f46e5,#0891b2)",
            fontSize: 30,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          {profile.initials}
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, display: "flex" }}>{profile.name}</div>
        <div style={{ fontSize: 32, color: "#a1a1aa", marginTop: 16, display: "flex" }}>
          {profile.role}
        </div>
        <div style={{ fontSize: 26, color: "#818cf8", marginTop: 32, display: "flex" }}>
          {profile.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
