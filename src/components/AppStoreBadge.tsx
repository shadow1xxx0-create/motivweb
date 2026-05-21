import { APP_STORE_URL } from "@/lib/constants";

const APPLE_PATH =
  "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z";

interface AppStoreBadgeProps {
  variant?: "solid" | "outline";
  className?: string;
}

/**
 * Official-style "Download on the App Store" button.
 * solid  — cream fill on dark surfaces (primary CTA)
 * outline — transparent with cream border (secondary placement)
 */
export default function AppStoreBadge({
  variant = "solid",
  className = "",
}: AppStoreBadgeProps) {
  const solid = variant === "solid";

  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 rounded-2xl px-6 py-3.5 transition-all ${
        solid
          ? "bg-cream-bright text-[#03191c] hover:shadow-[0_10px_40px_rgba(236,228,207,0.25)] hover:-translate-y-0.5"
          : "border border-[rgba(236,228,207,0.25)] text-cream hover:border-accent hover:text-accent"
      } ${className}`}
    >
      <svg
        className="h-8 w-8 shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d={APPLE_PATH} />
      </svg>
      <span className="text-left leading-none">
        <span className="block text-[11px] opacity-70">Download on the</span>
        <span className="block text-xl font-semibold leading-tight">
          App Store
        </span>
      </span>
    </a>
  );
}
