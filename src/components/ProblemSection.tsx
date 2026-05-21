const moments = [
  {
    label: "The moment of adhan",
    text: "The adhan calls — and you're three reels deep. “Just one more.” Then it's Maghrib, and Dhuhr never happened.",
  },
  {
    label: "The promise you keep breaking",
    text: "“I'll pray in five minutes.” You mean it every single time. Five minutes quietly becomes the next prayer.",
  },
  {
    label: "The guilt afterwards",
    text: "You make wudu late, rushed, distracted — and a small voice asks why connecting with Allah keeps losing to a screen.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 islamic-pattern opacity-40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-4">
            Sound familiar?
          </p>
          <h2 className="font-[family-name:var(--font-cormorant-var)] text-3xl md:text-5xl font-semibold text-cream-bright mb-4">
            It was never about weak iman.
          </h2>
          <p className="text-cream-dim text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            You love Allah. You want to pray on time. So why is it this hard?
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moments.map((m, i) => (
            <div key={i} className="glass-card p-7 md:p-8 flex flex-col gap-4">
              <span className="font-[family-name:var(--font-cormorant-var)] text-5xl leading-none text-accent/40">
                &ldquo;
              </span>
              <p className="text-[11px] tracking-[0.2em] uppercase text-gold">
                {m.label}
              </p>
              <p className="text-cream-dim text-[15px] leading-relaxed">
                {m.text}
              </p>
            </div>
          ))}
        </div>

        {/* Reframe */}
        <div className="mt-12 md:mt-14 max-w-3xl mx-auto text-center rounded-[24px] border border-[rgba(76,196,203,0.22)] bg-[rgba(8,43,48,0.5)] p-8 md:p-10">
          <p className="font-[family-name:var(--font-cormorant-var)] text-2xl md:text-3xl font-medium text-cream leading-snug">
            You&apos;re not weak. You&apos;re outnumbered.
          </p>
          <p className="mt-4 text-cream-dim text-[15px] md:text-base leading-relaxed">
            Those apps are engineered by thousands of the smartest people alive,
            paid to keep you scrolling. Your willpower against a billion-dollar
            attention machine was never a fair fight.
          </p>
          <p className="mt-4 text-accent font-medium">
            So stop fighting it alone.
          </p>
        </div>
      </div>
    </section>
  );
}
