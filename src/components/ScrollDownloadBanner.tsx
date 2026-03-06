"use client";

import { useState, useEffect } from "react";

export default function ScrollDownloadBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const target = document.getElementById("features");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !dismissed) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
      }`}
      style={{
        background: "linear-gradient(90deg, #1a1a2e 0%, #0f3460 50%, #1B4332 100%)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: text */}
        <div className="flex items-center gap-4">
          <div
            className="hidden sm:flex w-10 h-10 rounded-xl items-center justify-center flex-shrink-0"
            style={{ background: "rgba(0,255,135,0.15)" }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#00FF87">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14.5v-5H8l4-7v5h3l-4 7z" />
            </svg>
          </div>
          <div>
            <p className="text-white font-semibold text-sm sm:text-base leading-tight">
              Start your spiritual journey today
            </p>
            <p className="text-white/50 text-xs sm:text-sm mt-0.5">
              Download Ilham free — daily Islamic wisdom on Android
            </p>
          </div>
        </div>

        {/* Right: CTA + dismiss */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="https://play.google.com/store/apps/details?id=com.ilham.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 text-black text-sm font-bold rounded-full transition-all hover:shadow-[0_0_20px_rgba(0,255,135,0.5)]"
            style={{ background: "#00FF87" }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333L13.5 12.707zM5.864 2.658L16.8 9.991l-2.302 2.302L6.862 2.658zM18.008 11.26l3.108 1.803a1 1 0 010 1.874l-3.108 1.803-2.544-2.544 2.544-2.936z" />
            </svg>
            Get on Google Play
          </a>

          <button
            onClick={() => setDismissed(true)}
            className="text-white/30 hover:text-white/70 transition-colors p-1"
            aria-label="Dismiss"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
