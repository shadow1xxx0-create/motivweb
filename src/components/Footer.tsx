export default function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-lora-var)] text-2xl font-bold text-white mb-2">
              Ilham
            </h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Daily Motivational Wisdom &amp; Quran Verses.
              <br />
              Strengthen your faith, one quote at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5">
              <a
                href="#features"
                className="text-sm text-white/40 hover:text-accent transition-colors"
              >
                Features
              </a>
              <a
                href="#preview"
                className="text-sm text-white/40 hover:text-accent transition-colors"
              >
                Preview
              </a>
              <a
                href="#download"
                className="text-sm text-white/40 hover:text-accent transition-colors"
              >
                Download
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.ilham.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 hover:text-accent transition-colors"
              >
                Google Play
              </a>
            </nav>
          </div>

          {/* Download */}
          <div>
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
              Get the App
            </h4>
            <a
              href="https://play.google.com/store/apps/details?id=com.ilham.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333L13.5 12.707zM5.864 2.658L16.8 9.991l-2.302 2.302L6.862 2.658zM18.008 11.26l3.108 1.803a1 1 0 010 1.874l-3.108 1.803-2.544-2.544 2.544-2.936z" />
              </svg>
              Download on Google Play
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Ilham. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Made with ❤️ for the Ummah
          </p>
        </div>
      </div>
    </footer>
  );
}
