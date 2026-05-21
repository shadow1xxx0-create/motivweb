import AppStoreBadge from "./AppStoreBadge";

export default function DownloadCTA() {
  return (
    <section
      id="download"
      className="py-24 md:py-36 relative overflow-hidden islamic-pattern"
      style={{ background: "linear-gradient(135deg,#0b363c 0%,#062126 55%,#03191c 100%)" }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[420px] w-[420px] teal-glow" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          lang="ar"
          dir="rtl"
          className="text-2xl md:text-3xl text-gold/90 mb-2"
          style={{ fontFamily: "'Amiri', serif" }}
        >
          حَافِظُوا عَلَى الصَّلَوَاتِ
        </p>
        <p className="text-cream-dim text-sm italic mb-8">
          “Guard strictly the prayers.” — Surah Al-Baqarah 2:238
        </p>

        <h2 className="font-[family-name:var(--font-cormorant-var)] text-4xl md:text-6xl font-bold text-cream-bright leading-[1.05] mb-5">
          Never miss a prayer again.
        </h2>
        <p className="text-cream-dim text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          The next adhan is coming. Give your phone back to Allah before it
          calls — install I pray and let the lock do the rest.
        </p>

        <div className="flex justify-center">
          <AppStoreBadge variant="solid" />
        </div>

        <p className="mt-6 text-xs text-cream-dim/80">
          Free to download · iPhone &amp; iPad · iOS 16 or later · No account needed
        </p>
      </div>
    </section>
  );
}
