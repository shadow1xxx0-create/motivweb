import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ilham — Daily Islamic Wisdom & Quran Verses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f3460 0%, #1B4332 50%, #073B4C 100%)",
          position: "relative",
        }}
      >
        {/* Pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.05,
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-2px",
            }}
          >
            Ilham
          </div>
          <div
            style={{
              fontSize: 48,
              color: "rgba(255,255,255,0.5)",
              fontFamily: "serif",
            }}
          >
            إلهام
          </div>
          <div
            style={{
              width: 80,
              height: 2,
              background: "#00ff87",
              borderRadius: 2,
              marginTop: 8,
              marginBottom: 8,
            }}
          />
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.8)",
              fontWeight: 300,
            }}
          >
            Daily Islamic Wisdom & Quran Verses
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#00ff87",
              marginTop: 16,
              letterSpacing: "2px",
              textTransform: "uppercase" as const,
            }}
          >
            Free on Google Play
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
