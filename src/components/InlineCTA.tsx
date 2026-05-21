import AppStoreBadge from "./AppStoreBadge";

/**
 * Compact mid-page CTA strip — a short serif line beside the App Store badge.
 * Visually distinct from the larger <DownloadBanner> card so the page keeps
 * fresh conversion touchpoints without feeling repetitive.
 */
export default function InlineCTA({
  headline,
  note,
}: {
  headline: string;
  note?: string;
}) {
  return (
    <section className="relative border-y border-[rgba(236,228,207,0.07)] bg-[rgba(8,43,48,0.4)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <p className="font-[family-name:var(--font-cormorant-var)] text-2xl md:text-[34px] font-medium text-cream leading-snug max-w-md">
            {headline}
          </p>
          <div className="shrink-0">
            <AppStoreBadge variant="solid" />
          </div>
        </div>
        {note && (
          <p className="mt-4 text-center sm:text-left text-xs text-cream-dim/80">
            {note}
          </p>
        )}
      </div>
    </section>
  );
}
