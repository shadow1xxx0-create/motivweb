const points = [
  {
    title: "It stays on your device",
    text: "Your prayer history, your app choices, your location — all of it lives on your iPhone and never leaves it.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 4.4-3 8.4-7 9.5C8 20.4 5 16.4 5 12V7l7-4z" />
    ),
  },
  {
    title: "Built on Apple's Screen Time API",
    text: "I pray uses the same private framework Apple built for Screen Time. It can lock an app — it can never see inside it.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: "No account. Ever.",
    text: "No sign-up, no email, no password. Open the app and you're already in. There's nothing to hack and nothing to leak.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5z" />
    ),
  },
  {
    title: "No ads. Nothing sold.",
    text: "We don't track you and we don't sell data — because there is none to sell, and there never will be.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    ),
  },
];

export default function PrivacySection() {
  return (
    <section
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg,#03191c 0%,#062126 50%,#03191c 100%)" }}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-4">
            Your trust
          </p>
          <h2 className="font-[family-name:var(--font-cormorant-var)] text-3xl md:text-5xl font-semibold text-cream-bright mb-4">
            An app that locks your apps.
            <br />
            <span className="text-accent">It never watches them.</span>
          </h2>
          <p className="text-cream-dim text-base md:text-lg leading-relaxed">
            Letting an app manage your other apps is a real trust. Here is
            exactly how I pray earns it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {points.map((p, i) => (
            <div key={i} className="glass-card p-7 md:p-8 flex gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[rgba(76,196,203,0.12)] text-accent">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                  {p.icon}
                </svg>
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-cormorant-var)] text-xl font-semibold text-cream mb-1.5">
                  {p.title}
                </h3>
                <p className="text-cream-dim text-[14px] leading-relaxed">
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
