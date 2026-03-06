"use client";

const reviews = [
  {
    name: "Alex Lee",
    date: "Feb 24, 2026",
    device: "Google Pixel 6",
    text: "Beautiful and professional app.",
    initials: "AL",
    color: "#0f3460",
    pic: "/alex.jpg",
  },
  {
    name: "Gabriel Fernandes",
    date: "Mar 5, 2026",
    device: "Motorola Edge 60 Pro",
    text: "I've been following this app since the trial!! It's really good. The phrases have helped me in my daily life, with the hustle and bustle of our lives and the care we should take with our mental health. Very good.",
    initials: "GF",
    color: "#1B4332",
    pic: "/gabriel.jpg",
  },
  {
    name: "Support Team",
    date: "Feb 25, 2026",
    device: "Samsung Galaxy J4",
    text: "I have always been interested in Islamic quotes, thanks for this app.",
    initials: "ST",
    color: "#302b63",
    pic: "/support.jpg",
  },
];

import { useState } from "react";

function Avatar({ pic, initials, color }: { pic?: string; initials: string; color: string }) {
  const [failed, setFailed] = useState(false);
  const avatarStyle = {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    flexShrink: 0 as const,
    border: "1px solid rgba(255,255,255,0.1)",
    position: "relative" as const,
    overflow: "hidden" as const,
  };
  return (
    <div style={{ ...avatarStyle, background: color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, color: "#fff", letterSpacing: "0.05em" }}>
      {initials}
      {pic && !failed && (
        <img
          src={pic}
          alt=""
          onError={() => setFailed(true)}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}
    </div>
  );
}

function Stars() {
  return (
    <div style={{ display: "flex", gap: "2px", marginBottom: "12px" }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#00FF87">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-lora-var)] text-3xl md:text-5xl font-semibold text-white mb-4">
            What Users Say
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Real reviews from the Google Play Store.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="glass-card p-6 md:p-8 flex flex-col gap-4">
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Avatar pic={r.pic} initials={r.initials} color={r.color} />
                <div>
                  <p style={{ color: "#fff", fontWeight: 600, fontSize: "14px", margin: 0 }}>{r.name}</p>
                  <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", margin: 0 }}>{r.date} · {r.device}</p>
                </div>
              </div>

              <Stars />

              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: 1.7, margin: 0, flex: 1 }}>
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Play Store badge */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "4px" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(255,255,255,0.25)">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333L13.5 12.707zM5.864 2.658L16.8 9.991l-2.302 2.302L6.862 2.658zM18.008 11.26l3.108 1.803a1 1 0 010 1.874l-3.108 1.803-2.544-2.544 2.544-2.936z" />
                </svg>
                <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "11px" }}>Google Play</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
