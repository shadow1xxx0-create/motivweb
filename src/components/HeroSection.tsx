import PhoneMockup from "./PhoneMockup";

export default function HeroSection() {
  return (
    <section className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <h1 className="font-[family-name:var(--font-lora-var)] text-6xl md:text-8xl font-bold text-white mb-2 tracking-tight">
              Ilham
            </h1>
            <p
              lang="ar"
              dir="rtl"
              className="text-4xl md:text-5xl text-white/60 mb-6 lg:text-left"
              style={{ fontFamily: "'Amiri', serif" }}
            >
              إلهام
            </p>
            <h2 className="font-[family-name:var(--font-lora-var)] text-xl md:text-2xl text-white/80 font-light mb-6">
              Daily Motivational Wisdom &amp; Quran Verses
            </h2>
            <p className="text-base md:text-lg text-white/60 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Beautifully curated motivational wisdom quotes, each
              paired with a relevant Quran verse. Strengthen your faith.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://play.google.com/store/apps/details?id=com.ilham.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-accent text-black font-semibold rounded-full text-center hover:shadow-[0_0_24px_rgba(0,255,135,0.4)] transition-all"
              >
                Download Free
              </a>
              <a
                href="#preview"
                className="px-8 py-3.5 border border-white/20 text-white font-semibold rounded-full text-center hover:border-accent hover:text-accent transition-all"
              >
                See Preview
              </a>
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="animate-float">
              <PhoneMockup>
                <div className="w-full h-full flex flex-col items-center justify-center p-6 relative">
                  <div className="absolute inset-0" style={{ background: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=800&fit=crop&q=80') center/cover no-repeat" }} />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="mt-12 w-full relative z-10">
                    <div className="mb-6">
                      <p className="text-[10px] text-accent uppercase tracking-widest mb-4 text-center">
                        Patience
                      </p>
                    </div>
                    <blockquote className="font-[family-name:var(--font-lora-var)] text-base italic leading-relaxed text-white text-center mb-4 px-2">
                      &ldquo;Patience is not the ability to wait, but the
                      ability to keep a good attitude while waiting.&rdquo;
                    </blockquote>
                    <p
                      lang="ar"
                      dir="rtl"
                      className="text-base text-white/70 text-center mb-6 leading-relaxed"
                      style={{ fontFamily: "'Amiri', serif" }}
                    >
                      الصبر ليس القدرة على الانتظار، بل القدرة على الحفاظ على
                      موقف جيد أثناء الانتظار
                    </p>
                    <div className="quote-divider text-white/30 mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
                    </div>
                    <p className="font-[family-name:var(--font-lora-var)] text-xs italic text-white/50 text-center mb-2 px-4">
                      &ldquo;O you who believe, seek help through patience and
                      prayer...&rdquo;
                    </p>
                    <p className="text-[10px] text-accent text-center font-medium tracking-wide">
                      SURAH AL-BAQARAH 2:153
                    </p>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
