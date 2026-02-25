export default function DownloadCTA() {
  return (
    <section
      id="download"
      className="py-20 md:py-32 relative overflow-hidden islamic-pattern"
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 50%, #1B4332 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-[family-name:var(--font-lora-var)] text-3xl md:text-5xl font-semibold text-white mb-4">
          Begin Your Journey
        </h2>
        <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-10">
          Start each day with a moment of reflection. Let timeless Islamic
          wisdom guide your path — one quote at a time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Google Play */}
          <a
            href="https://play.google.com/store/apps/details?id=com.ilham.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-black rounded-xl hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] transition-all group"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333L13.5 12.707zM5.864 2.658L16.8 9.991l-2.302 2.302L6.862 2.658zM18.008 11.26l3.108 1.803a1 1 0 010 1.874l-3.108 1.803-2.544-2.544 2.544-2.936z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] leading-none opacity-70">GET IT ON</p>
              <p className="text-lg font-semibold leading-tight">Google Play</p>
            </div>
          </a>

          {/* App Store (Coming Soon) */}
          <div className="inline-flex items-center gap-3 px-6 py-3.5 bg-white/10 text-white/40 rounded-xl cursor-not-allowed border border-white/10">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] leading-none opacity-60">COMING SOON</p>
              <p className="text-lg font-semibold leading-tight">App Store</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
