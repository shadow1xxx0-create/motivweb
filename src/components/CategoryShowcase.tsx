const categories = [
  { name: "Patience", arabic: "صبر", gradient: "from-[#1B4332] to-[#0f2922]" },
  { name: "Trust", arabic: "توكل", gradient: "from-[#0f3460] to-[#0a2040]" },
  { name: "Hope", arabic: "رجاء", gradient: "from-[#2D6A4F] to-[#1a4030]" },
  { name: "Prayer", arabic: "صلاة", gradient: "from-[#1a1a2e] to-[#10101e]" },
];

export default function CategoryShowcase() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-lora-var)] text-3xl md:text-5xl font-semibold text-white mb-4">
            Explore by Theme
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Carefully curated categories to guide your spiritual journey.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 category-scroll snap-x snap-mandatory">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`flex-shrink-0 snap-center rounded-2xl bg-gradient-to-br ${cat.gradient} border border-white/8 p-5 md:p-6 min-w-[180px] md:min-w-[200px] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_24px_rgba(0,255,135,0.1)]`}
            >
              <p className="text-white font-semibold text-base mb-1">
                {cat.name}
              </p>
              <p
                lang="ar"
                dir="rtl"
                className="text-white/60 text-lg mb-3"
                style={{ fontFamily: "'Amiri', serif" }}
              >
                {cat.arabic}
              </p>
            </div>
          ))}
          <div className="flex-shrink-0 snap-center rounded-2xl border border-white/8 p-5 md:p-6 min-w-[180px] md:min-w-[200px] flex items-center justify-center">
            <p className="text-white/40 font-medium text-base">and more...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
