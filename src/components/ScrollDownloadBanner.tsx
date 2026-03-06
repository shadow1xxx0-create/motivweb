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
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <div
        className="flex items-center gap-4 px-5 py-4 rounded-2xl shadow-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(26,26,46,0.95) 0%, rgba(15,52,96,0.95) 100%)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {/* Icon */}
        <div
          className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(0,255,135,0.15)" }}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="rgba(0,255,135,1)">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14.5v-5H8l4-7v5h3l-4 7z" />
          </svg>
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-semibold leading-tight">Get the Ilham App</p>
          <p className="text-white/50 text-xs mt-0.5">Daily Islamic wisdom, free on Android</p>
        </div>

        {/* Download button */}
        <a
          href="https://play.google.com/store/apps/details?id=com.ilham.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 px-4 py-2 text-black text-xs font-bold rounded-full transition-all hover:shadow-[0_0_16px_rgba(0,255,135,0.5)]"
          style={{ background: "#00FF87" }}
        >
          Download
        </a>

        {/* Dismiss */}
        <button
          onClick={() => setDismissed(true)}
          className="flex-shrink-0 text-white/30 hover:text-white/70 transition-colors ml-1"
          aria-label="Dismiss"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
