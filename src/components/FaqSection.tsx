"use client";

import { useState } from "react";
import AppStoreBadge from "./AppStoreBadge";

const faqs = [
  {
    q: "What if I have a real emergency?",
    a: "By default, you can still unlock your apps in a genuine emergency — I pray trusts you. If you want that door fully closed so the only way out is to pray, switch on Strict Mode. It's your choice, set once.",
  },
  {
    q: "Does it really lock the apps, or just nag me?",
    a: "It really locks them. I pray is built on Apple's Screen Time API, so the apps you choose simply won't open during prayer time. There's no notification to swipe away and no willpower required — that's the whole point.",
  },
  {
    q: "Will it drain my battery?",
    a: "No. The lock runs through Apple's built-in system framework, not a background process quietly eating your battery. You won't notice it until the adhan calls.",
  },
  {
    q: "Do I need to create an account?",
    a: "Never. No sign-up, no email, no password. Download the app, allow location for accurate prayer times, and you're ready in under a minute.",
  },
  {
    q: "Which apps can I lock?",
    a: "Any app on your iPhone — Instagram, TikTok, YouTube, Snapchat, X, Reddit, games, browsers, whatever pulls you away. You pick the exact list and can change it anytime.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[rgba(236,228,207,0.1)] last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-[family-name:var(--font-cormorant-var)] text-xl md:text-2xl font-semibold text-cream">
          {q}
        </span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[rgba(236,228,207,0.2)] text-accent transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-10 text-cream-dim text-[15px] leading-relaxed">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 islamic-pattern opacity-40" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-14">
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-4">
            Honest answers
          </p>
          <h2 className="font-[family-name:var(--font-cormorant-var)] text-3xl md:text-5xl font-semibold text-cream-bright">
            Every reason to hesitate, answered
          </h2>
        </div>

        <div className="glass-card px-6 md:px-9 py-2">
          {faqs.map((f, i) => (
            <FaqItem key={i} {...f} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-cream-dim mb-6">
            The honest truth? You won&apos;t know until your next adhan. Let it
            be the first one you don&apos;t miss.
          </p>
          <div className="flex justify-center">
            <AppStoreBadge variant="solid" />
          </div>
        </div>
      </div>
    </section>
  );
}
