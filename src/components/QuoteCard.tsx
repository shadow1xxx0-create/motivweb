interface QuoteCardProps {
  quote: string;
  arabic: string;
  verse: string;
  surah: string;
  category: string;
  image: string;
  className?: string;
}

export default function QuoteCard({
  quote,
  arabic,
  verse,
  surah,
  category,
  image,
  className = "",
}: QuoteCardProps) {
  return (
    <div
      className={`relative rounded-[20px] overflow-hidden ${className}`}
      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
    >
      {/* Nature background */}
      <div
        className="absolute inset-0"
        style={{
          background: `url('${image}') center/cover no-repeat`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 p-6 md:p-8 flex flex-col gap-4">
        {/* Category */}
        <p className="text-[10px] text-accent uppercase tracking-widest text-center">
          {category}
        </p>

        {/* Quote */}
        <blockquote className="font-[family-name:var(--font-lora-var)] text-lg md:text-xl italic leading-relaxed text-white text-center">
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Arabic */}
        <p
          lang="ar"
          dir="rtl"
          className="text-lg md:text-xl leading-relaxed text-white/70 text-center"
          style={{ fontFamily: "'Amiri', serif" }}
        >
          {arabic}
        </p>

        {/* Divider */}
        <div className="quote-divider text-white/30">
          <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
        </div>

        {/* Verse */}
        <p className="font-[family-name:var(--font-lora-var)] text-sm italic text-white/50 leading-relaxed text-center">
          {verse}
        </p>

        {/* Surah reference */}
        <p className="text-xs text-accent font-medium tracking-wide uppercase text-center">
          {surah}
        </p>
      </div>
    </div>
  );
}
