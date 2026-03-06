"use client";

import { useState, useEffect } from "react";

export default function ScrollDownloadBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!dismissed && window.scrollY > 300) {
        setVisible(true);
      } else if (window.scrollY <= 300) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        left: "50%",
        zIndex: 50,
        width: "calc(100% - 2rem)",
        maxWidth: "420px",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(-50%) translateY(0)"
          : "translateX(-50%) translateY(2rem)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "16px 20px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, rgba(26,26,46,0.97) 0%, rgba(15,52,96,0.97) 100%)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
        }}
      >
        {/* Icon */}
        <div
          style={{
            flexShrink: 0,
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            background: "rgba(0,255,135,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#00FF87">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14.5v-5H8l4-7v5h3l-4 7z" />
          </svg>
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ color: "#fff", fontSize: "14px", fontWeight: 600, lineHeight: 1.2, margin: 0 }}>
            Get the Ilham App
          </p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", marginTop: "2px", margin: 0 }}>
            Daily motivational wisdom, free on Android
          </p>
        </div>

        {/* Download */}
        <a
          href="https://play.google.com/store/apps/details?id=com.ilham.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flexShrink: 0,
            padding: "8px 16px",
            background: "#00FF87",
            color: "#000",
            fontSize: "12px",
            fontWeight: 700,
            borderRadius: "999px",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Download
        </a>

        {/* Dismiss */}
        <button
          onClick={() => setDismissed(true)}
          style={{
            flexShrink: 0,
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.3)",
            cursor: "pointer",
            padding: "4px",
            marginLeft: "4px",
          }}
          aria-label="Dismiss"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
