import AppStoreBadge from "./AppStoreBadge";

export default function DownloadBanner() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[28px] border border-[rgba(76,196,203,0.22)] overflow-hidden p-9 md:p-14 text-center"
          style={{ background: "linear-gradient(150deg,#0b363c 0%,#062126 60%,#03191c 100%)" }}
        >
          <div className="absolute inset-0 islamic-pattern opacity-50" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 teal-glow" />

          <div className="relative">
            <p className="text-xs tracking-[0.3em] text-gold uppercase mb-5">
              Picture six months from now
            </p>
            <h2 className="font-[family-name:var(--font-cormorant-var)] text-3xl md:text-5xl font-semibold text-cream-bright leading-tight">
              Become the one who
              <br />
              never misses Fajr.
            </h2>
            <p className="mt-5 text-cream-dim text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Every adhan answered. A streak you&apos;d never break. The quiet
              confidence of a believer whose deen comes first. That version of
              you is one download away.
            </p>
            <div className="mt-8 flex justify-center">
              <AppStoreBadge variant="solid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
