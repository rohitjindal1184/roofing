"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

/**
 * Wraps the whole hero section for the parallax-settle variant. On scroll it
 * writes --hero-p (0 → 1, how far the hero has scrolled past the top of the
 * viewport) onto the section itself; globals.css reads it on descendants via
 * inheritance to scale/fade the content and deepen the scrim. Skips the
 * scroll listener entirely under reduced motion, leaving --hero-p at its
 * resting 0 (full-size, fully visible) forever.
 */
export default function HeroScrollDriver({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / rect.height));
      el.style.setProperty("--hero-p", String(progress));
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={ref}
      data-hero-scroll
      className="relative isolate overflow-hidden bg-ink-950"
    >
      {children}
    </section>
  );
}
