import QuoteCard from "./QuoteCard";

const quotes = [
  {
    category: "Trust",
    quote:
      "Whoever puts their trust in Allah, He will be enough for them.",
    arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    verse:
      "And whoever relies upon Allah — then He is sufficient for him.",
    surah: "Surah At-Talaq 65:3",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=900&fit=crop&q=80",
  },
  {
    category: "Hope",
    quote:
      "Verily, with hardship comes ease. With every difficulty, there is relief.",
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    verse:
      "For indeed, with hardship will be ease. Indeed, with hardship will be ease.",
    surah: "Surah Ash-Sharh 94:5-6",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=900&fit=crop&q=80",
  },
  {
    category: "Patience",
    quote:
      "Allah does not burden a soul beyond that it can bear.",
    arabic:
      "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    verse:
      "Allah does not charge a soul except with that within its capacity.",
    surah: "Surah Al-Baqarah 2:286",
    image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=600&h=900&fit=crop&q=80",
  },
];

export default function QuoteShowcase() {
  return (
    <section id="preview" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-lora-var)] text-3xl md:text-5xl font-semibold text-white mb-4">
            A Glimpse of Wisdom
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Each card in Ilham pairs timeless Islamic wisdom with its Quran
            source — beautifully designed for daily reflection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
          {quotes.map((q, i) => (
            <div
              key={i}
              className={`transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,255,135,0.12)] rounded-[20px] ${
                i === 1 ? "md:-translate-y-6" : ""
              } ${i === 0 ? "md:rotate-[-2deg]" : ""} ${
                i === 2 ? "md:rotate-[2deg]" : ""
              }`}
            >
              <QuoteCard {...q} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
