import Image from "next/image";

const shots = [
  { src: "/screens/home.jpg", alt: "I pray home screen showing the next prayer countdown" },
  { src: "/screens/locked.jpg", alt: "Apps locked until you pray" },
  { src: "/screens/prayers.jpg", alt: "Daily prayer list with a hadith" },
  { src: "/screens/qibla.jpg", alt: "Built-in qibla compass" },
  { src: "/screens/calendar.jpg", alt: "Prayer history, streaks and hijri calendar" },
  { src: "/screens/settings.jpg", alt: "App lock and prayer settings" },
];

export default function AppScreenshots() {
  return (
    <section id="preview" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-4">
            A look inside
          </p>
          <h2 className="font-[family-name:var(--font-cormorant-var)] text-3xl md:text-5xl font-semibold text-cream-bright mb-4">
            Built to calm you, not capture you
          </h2>
          <p className="text-cream-dim text-base md:text-lg leading-relaxed">
            Every screen is quiet, warm and deliberate — a space that draws you
            toward prayer instead of pulling you into a feed.
          </p>
        </div>
      </div>

      <div className="flex gap-5 md:gap-7 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-6 category-scroll snap-x snap-mandatory">
        {shots.map((s, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-center w-[230px] md:w-[270px] rounded-[24px] overflow-hidden border border-[rgba(236,228,207,0.08)]"
          >
            <Image
              src={s.src}
              alt={s.alt}
              width={1284}
              height={2778}
              className="h-auto w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
