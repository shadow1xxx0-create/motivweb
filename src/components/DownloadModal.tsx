"use client";

import { useState, useEffect } from "react";

export default function DownloadModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let triggered = false;
    const onScroll = () => {
      if (!triggered && window.scrollY > 600) {
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
        background: "rgba(0,0,0,0.85)",
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
          maxWidth: "460px",
          borderRadius: "24px",
          background: "linear-gradient(160deg, #1a1a2e 0%, #0f3460 60%, #1B4332 100%)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
          animation: "modalSlideUp 0.4s ease",
          position: "relative",
        }}
      >
        {/* Close */}
        <button
          onClick={() => setVisible(false)}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "rgba(255,255,255,0.08)",
            border: "none",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "rgba(255,255,255,0.5)",
          }}
          aria-label="Close"
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div style={{ padding: "48px 40px 40px", textAlign: "center" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "20px",
              background: "rgba(0,255,135,0.15)",
              border: "1px solid rgba(0,255,135,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="#00FF87">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14.5v-5H8l4-7v5h3l-4 7z" />
            </svg>
          </div>

          <h2 style={{ color: "#fff", fontSize: "28px", fontWeight: 700, margin: "0 0 12px", lineHeight: 1.2 }}>
            Begin Your Journey with Ilham
          </h2>

          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "15px", lineHeight: 1.6, margin: "0 0 32px" }}>
            Daily Islamic wisdom, curated Quran verses, and spiritual reminders — all in one free app.
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=com.ilham.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "14px 28px",
              background: "#00FF87",
              color: "#000",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "15px",
              boxShadow: "0 0 32px rgba(0,255,135,0.35)",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333L13.5 12.707zM5.864 2.658L16.8 9.991l-2.302 2.302L6.862 2.658zM18.008 11.26l3.108 1.803a1 1 0 010 1.874l-3.108 1.803-2.544-2.544 2.544-2.936z" />
            </svg>
            Download Free on Google Play
          </a>

          <button
            onClick={() => setVisible(false)}
            style={{ background: "none", border: "none", color: "rgba(255,255,255,0.3)", fontSize: "13px", cursor: "pointer" }}
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
