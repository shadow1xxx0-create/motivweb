import Image from "next/image";
import { APP_STORE_URL, PRIVACY_URL } from "@/lib/constants";

const links = [
  { href: "#problem", label: "The problem" },
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-[rgba(236,228,207,0.07)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/app-icon.png"
                alt="I pray app icon"
                width={36}
                height={36}
                className="rounded-[10px]"
              />
              <span className="font-[family-name:var(--font-cormorant-var)] text-2xl font-semibold text-cream">
                I pray
              </span>
            </div>
            <p className="text-cream-dim text-sm leading-relaxed max-w-xs">
              The Muslim prayer app that locks your distractions until you pray.
              Salah, athan, qibla — and the focus to actually use them.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-cream-dim uppercase tracking-wider mb-4">
              Explore
            </h4>
            <nav className="flex flex-col gap-2.5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-cream-dim hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Get the app */}
          <div>
            <h4 className="text-sm font-semibold text-cream-dim uppercase tracking-wider mb-4">
              Get I pray
            </h4>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-cream transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on the App Store
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[rgba(236,228,207,0.07)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-dim/70">
            &copy; {new Date().getFullYear()} I pray. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={PRIVACY_URL}
              className="text-xs text-cream-dim/70 hover:text-cream transition-colors"
            >
              Privacy Policy
            </a>
            <p className="text-xs text-cream-dim/70">Made with ❤️ for the Ummah</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
