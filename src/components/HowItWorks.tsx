const steps = [
  {
    num: "01",
    title: "Choose your apps",
    text: "Pick the exact apps that pull you away — Instagram, TikTok, YouTube, games, browsers. Your list, your call.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h10M16.5 17l1.8 1.8L21.5 15" />
    ),
  },
  {
    num: "02",
    title: "The adhan calls — they go dark",
    text: "At prayer time (or minutes before), the apps you chose lock themselves. No notification to swipe away. They simply won't open.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    ),
  },
  {
    num: "03",
    title: "Pray — then they unlock",
    text: "Mark your salah as prayed and your apps come back. The only key that opens them is the prayer itself.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg,#03191c 0%,#062126 50%,#03191c 100%)" }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-20 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-4">
            How it works
          </p>
          <h2 className="font-[family-name:var(--font-cormorant-var)] text-3xl md:text-5xl font-semibold text-cream-bright mb-5 leading-tight">
            Most prayer apps just notify you.
            <br />
            <span className="text-accent">I pray removes the distraction.</span>
          </h2>
          <p className="text-cream-dim text-base md:text-lg leading-relaxed">
            A reminder is easy to dismiss. A locked app isn&apos;t. That single
            difference is why I pray works when notifications never did.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative glass-card p-7 md:p-8 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-[family-name:var(--font-cormorant-var)] text-5xl font-bold text-accent/25">
                  {s.num}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(76,196,203,0.12)] text-accent">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                    {s.icon}
                  </svg>
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant-var)] text-2xl font-semibold text-cream">
                {s.title}
              </h3>
              <p className="text-cream-dim text-[15px] leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>

        {/* Strict mode note */}
        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-center rounded-2xl border border-[rgba(236,228,207,0.1)] bg-[rgba(8,43,48,0.45)] px-6 py-5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(232,201,144,0.14)] text-gold">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 4.4-3 8.4-7 9.5C8 20.4 5 16.4 5 12V7l7-4z" />
            </svg>
          </span>
          <p className="text-cream-dim text-sm md:text-[15px]">
            <span className="text-cream font-semibold">No bypass. No shortcut.</span>{" "}
            Turn on Strict Mode and the lock holds — even when the weakest version
            of you tries to talk you out of it.
          </p>
        </div>
      </div>
    </section>
  );
}
