"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-[family-name:var(--font-lora-var)] text-2xl font-bold text-white tracking-wide"
        >
          Ilham
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#preview"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Preview
          </a>
          <a
            href="#download"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Download
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.ilham.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-accent text-black text-sm font-semibold rounded-full hover:shadow-[0_0_20px_rgba(0,255,135,0.4)] transition-all"
          >
            Get the App
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-4 flex flex-col gap-3">
          <a
            href="#features"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-white/80 hover:text-white py-2"
          >
            Features
          </a>
          <a
            href="#preview"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-white/80 hover:text-white py-2"
          >
            Preview
          </a>
          <a
            href="#download"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-white/80 hover:text-white py-2"
          >
            Download
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.ilham.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-accent text-black text-sm font-semibold rounded-full text-center hover:shadow-[0_0_20px_rgba(0,255,135,0.4)] transition-all"
          >
            Get the App
          </a>
        </div>
      )}
    </header>
  );
}
