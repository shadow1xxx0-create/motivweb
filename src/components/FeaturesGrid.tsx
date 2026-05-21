const features = [
  {
    featured: true,
    title: "The Salah Lock",
    description:
      "The heart of I pray. Distracting apps lock the moment the adhan calls and stay locked until you pray. Built on Apple's Screen Time API.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    ),
  },
  {
    title: "Accurate prayer times",
    description:
      "Fajr, Dhuhr, Asr, Maghrib and Isha — precise to your exact location, with pre-prayer warnings so you're never caught off guard.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: "Authentic adhan",
    description:
      "Real adhan recitations from Makkah and Madinah call you to prayer — never a generic beep you learn to ignore.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l11-2v13M9 19a3 3 0 11-6 0 3 3 0 016 0zm11-2a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
  },
  {
    title: "Qibla compass",
    description:
      "Find the direction of the Kaaba in seconds, with smooth haptic feedback that guides you as you turn.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm3.5-12.5l-2 5-5 2 2-5 5-2z" />
    ),
  },
  {
    title: "Hijri calendar & daily hadith",
    description:
      "Today's Islamic date at a glance, and a hadith paired with every prayer to keep your heart present.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    ),
  },
  {
    title: "Streaks you'll protect",
    description:
      "Every prayer on time builds a streak and an on-time score. Consistency turns into something you genuinely don't want to break.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 3l-1.5 6.5L17 9l-6 12 1.5-8L7 13l6-10z" />
    ),
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 islamic-pattern opacity-40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-4">
            Everything for your five daily prayers
          </p>
          <h2 className="font-[family-name:var(--font-cormorant-var)] text-3xl md:text-5xl font-semibold text-cream-bright mb-4">
            One app instead of five
          </h2>
          <p className="text-cream-dim text-base md:text-lg leading-relaxed">
            Prayer times, adhan, qibla, calendar — and the lock that finally
            makes you use them. All in one calm, beautiful place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`glass-card p-7 md:p-8 flex flex-col gap-4 ${
                f.featured
                  ? "border-[rgba(76,196,203,0.4)] bg-[rgba(8,43,48,0.6)]"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    f.featured
                      ? "bg-accent/20 text-accent"
                      : "bg-[rgba(76,196,203,0.1)] text-accent"
                  }`}
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                    {f.icon}
                  </svg>
                </span>
                {f.featured && (
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
                    Core feature
                  </span>
                )}
              </div>
              <h3 className="font-[family-name:var(--font-cormorant-var)] text-2xl font-semibold text-cream">
                {f.title}
              </h3>
              <p className="text-cream-dim text-[15px] leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-cream-dim/80">
          Multiple calculation methods (ISNA, MWL, Umm al-Qura, Karachi and
          more) · Shafi &amp; Hanafi Asr · thoughtful handling for women&apos;s
          days.
        </p>
      </div>
    </section>
  );
}
