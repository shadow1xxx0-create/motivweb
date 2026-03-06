import PhoneMockup from "./PhoneMockup";

export default function AppScreenshots() {
  return (
    <section id="preview" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-lora-var)] text-3xl md:text-5xl font-semibold text-white mb-4">
            Beautiful by Design
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Every detail is crafted to create a serene, focused experience for
            your daily reflection.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Screen 1 */}
          <div className="animate-float">
            <PhoneMockup>
              <div className="w-full h-full relative flex flex-col">
                <div className="absolute inset-0" style={{ background: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=800&fit=crop&q=80') center/cover no-repeat" }} />
                <div className="absolute inset-0 bg-black/50" />
                <div className="flex-1 flex flex-col justify-center px-5 relative z-10">
                  <p className="text-[10px] text-accent uppercase tracking-widest mb-4 text-center">
                    Trust
                  </p>
                  <blockquote className="font-[family-name:var(--font-lora-var)] text-base italic text-white text-center leading-relaxed mb-3 px-1">
                    &ldquo;Whoever puts their trust in Allah, He will be enough for them.&rdquo;
                  </blockquote>
                  <p
                    lang="ar"
                    dir="rtl"
                    className="text-base text-white/60 text-center mb-5 leading-relaxed"
                    style={{ fontFamily: "'Amiri', serif" }}
                  >
                    وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ
                  </p>
                  <div className="quote-divider text-white/20 mb-3">
                    <span className="w-1 h-1 rounded-full bg-current inline-block" />
                  </div>
                  <p className="font-[family-name:var(--font-lora-var)] text-xs italic text-white/40 text-center px-2">
                    &ldquo;And whoever relies upon Allah — then He is sufficient for him.&rdquo;
                  </p>
                  <p className="text-[9px] text-accent text-center mt-2 tracking-wide">
                    SURAH AT-TALAQ 65:3
                  </p>
                </div>
              </div>
            </PhoneMockup>
          </div>

          {/* Screen 2 */}
          <div className="animate-float-delayed md:-translate-y-6">
            <PhoneMockup>
              <div className="w-full h-full relative flex flex-col">
                <div className="absolute inset-0" style={{ background: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=800&fit=crop&q=80') center/cover no-repeat" }} />
                <div className="absolute inset-0 bg-black/50" />
                <div className="flex-1 flex flex-col justify-center px-5 relative z-10">
                  <p className="text-[10px] text-accent uppercase tracking-widest mb-4 text-center">
                    Hope
                  </p>
                  <blockquote className="font-[family-name:var(--font-lora-var)] text-base italic text-white text-center leading-relaxed mb-3 px-1">
                    &ldquo;Verily, with hardship comes ease.&rdquo;
                  </blockquote>
                  <p
                    lang="ar"
                    dir="rtl"
                    className="text-base text-white/60 text-center mb-5 leading-relaxed"
                    style={{ fontFamily: "'Amiri', serif" }}
                  >
                    فَإِنَّ مَعَ الْعُسْرِ يُسْرًا
                  </p>
                  <div className="quote-divider text-white/20 mb-3">
                    <span className="w-1 h-1 rounded-full bg-current inline-block" />
                  </div>
                  <p className="font-[family-name:var(--font-lora-var)] text-xs italic text-white/40 text-center px-2">
                    &ldquo;For indeed, with hardship will be ease.&rdquo;
                  </p>
                  <p className="text-[9px] text-accent text-center mt-2 tracking-wide">
                    SURAH ASH-SHARH 94:5
                  </p>
                </div>
              </div>
            </PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  );
}
