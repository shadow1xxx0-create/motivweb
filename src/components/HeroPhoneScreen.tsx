/**
 * Faithful in-browser recreation of the "I pray" Home screen,
 * rendered inside <PhoneMockup>. Pure markup — no interactivity.
 */
export default function HeroPhoneScreen() {
  const r = 66;
  const circ = 2 * Math.PI * r;
  const progress = 0.72;

  return (
    <div className="absolute inset-0 islamic-pattern" style={{ background: "linear-gradient(180deg,#082b30 0%,#062126 55%,#03191c 100%)" }}>
      <div className="flex h-full flex-col px-5 pt-12 pb-4">
        {/* Top bar */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[8px] tracking-[0.25em] text-gold">BISMILLAH</p>
            <p lang="ar" dir="rtl" className="mt-0.5 text-base text-cream-dim" style={{ fontFamily: "'Amiri', serif" }}>
              بسم الله
            </p>
          </div>
          <div className="flex gap-2">
            {["M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 00-4-5.7V5a2 2 0 10-4 0v.3A6 6 0 006 11v3.2c0 .5-.2 1-.6 1.4L4 17h5", "M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z"].map((d, i) => (
              <span key={i} className="flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(236,228,207,0.12)]">
                <svg className="h-3.5 w-3.5 text-cream-dim" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={d} />
                </svg>
              </span>
            ))}
          </div>
        </div>

        {/* Greeting */}
        <p className="mt-4 text-[11px] text-cream-dim">As-salāmu ‘alaykum,</p>
        <p className="font-[family-name:var(--font-cormorant-var)] text-2xl font-semibold text-cream">
          Yusuf
        </p>

        {/* Countdown ring card */}
        <div className="mt-3 rounded-[20px] border border-[rgba(236,228,207,0.09)] bg-[rgba(11,54,60,0.5)] p-4">
          <div className="relative mx-auto h-[160px] w-[160px]">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 160 160">
              <defs>
                <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e8c990" />
                  <stop offset="55%" stopColor="#4cc4cb" />
                  <stop offset="100%" stopColor="#1a7178" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r={r} fill="none" stroke="rgba(236,228,207,0.08)" strokeWidth="8" />
              <circle
                cx="80" cy="80" r={r} fill="none" stroke="url(#ring)" strokeWidth="8"
                strokeLinecap="round" strokeDasharray={circ}
                strokeDashoffset={circ * (1 - progress)}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-[8px] tracking-[0.3em] text-cream-dim">NEXT</p>
              <p className="font-[family-name:var(--font-cormorant-var)] text-3xl font-semibold text-cream-bright">
                Fajr
              </p>
              <p lang="ar" dir="rtl" className="text-[11px] text-gold" style={{ fontFamily: "'Amiri', serif" }}>
                الفجر
              </p>
              <span className="mt-1.5 rounded-full border border-[rgba(236,228,207,0.14)] px-3 py-0.5 text-[11px] text-cream">
                5h 15m
              </span>
            </div>
          </div>
          <div className="mt-3 border-t border-[rgba(236,228,207,0.08)] pt-2.5 flex items-center justify-between text-[9px] text-cream-dim">
            <span>◍ Your location</span>
            <span>23 Dhū al-Qa‘dah 1447</span>
          </div>
        </div>

        {/* Lock card */}
        <div className="mt-3 flex items-center gap-3 rounded-[16px] border border-[rgba(76,196,203,0.22)] bg-[rgba(8,43,48,0.6)] p-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[rgba(76,196,203,0.14)]">
            <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </span>
          <div className="min-w-0">
            <p className="text-[12px] font-semibold text-cream">3 apps locked</p>
            <p className="text-[9px] text-cream-dim">Mark Fajr as prayed to unlock</p>
          </div>
        </div>

        {/* Today */}
        <div className="mt-3 flex items-center justify-between text-[9px]">
          <span className="tracking-[0.2em] text-cream-dim">TODAY</span>
          <span className="text-gold">4 / 5 prayed</span>
        </div>
      </div>
    </div>
  );
}
