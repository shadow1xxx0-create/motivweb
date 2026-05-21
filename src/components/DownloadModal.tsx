"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { APP_STORE_URL } from "@/lib/constants";

export default function DownloadModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let triggered = false;
    const onScroll = () => {
      if (triggered) return;
      const target = document.getElementById("faq");
      if (!target) return;
      const threshold =
        target.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.6;
      if (window.scrollY >= threshold) {
        triggered = true;
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      onClick={() => setVisible(false)}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        background: "rgba(3,25,28,0.88)",
        backdropFilter: "blur(8px)",
        animation: "modalFadeIn 0.4s ease",
      }}
    >
      <style>{`
        @keyframes modalFadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes modalSlideUp { from { opacity: 0; transform: translateY(40px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "440px",
          borderRadius: "26px",
          background: "linear-gradient(160deg, #0b363c 0%, #062126 65%, #03191c 100%)",
          border: "1px solid rgba(76,196,203,0.25)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.65)",
          animation: "modalSlideUp 0.4s ease",
          position: "relative",
        }}
      >
        <button
          onClick={() => setVisible(false)}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "rgba(236,228,207,0.08)",
            border: "none",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "rgba(214,203,168,0.6)",
          }}
          aria-label="Close"
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div style={{ padding: "44px 36px 36px", textAlign: "center" }}>
          <Image
            src="/app-icon.png"
            alt="I pray app icon"
            width={76}
            height={76}
            style={{ borderRadius: "18px", margin: "0 auto 22px" }}
          />

          <h2
            style={{
              color: "#f8f4e8",
              fontSize: "27px",
              fontWeight: 600,
              margin: "0 0 12px",
              lineHeight: 1.2,
              fontFamily: "var(--font-cormorant-var), serif",
            }}
          >
            Your next adhan is coming.
          </h2>

          <p style={{ color: "#d6cba8", fontSize: "15px", lineHeight: 1.6, margin: "0 0 28px" }}>
            Let it be the first one you don&apos;t miss. Install I pray and the
            apps stealing your salah go quiet — until you&apos;ve prayed.
          </p>

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "14px 28px",
              background: "#f8f4e8",
              color: "#03191c",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "15px",
              justifyContent: "center",
              marginBottom: "14px",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </a>

          <button
            onClick={() => setVisible(false)}
            style={{
              background: "none",
              border: "none",
              color: "rgba(214,203,168,0.4)",
              fontSize: "13px",
              cursor: "pointer",
            }}
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
