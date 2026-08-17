"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

/**
 * Wraps the hero photo in a layer that drifts downward, slower than the
 * page, as the hero scrolls out of view — the classic parallax depth cue.
 * Lives on its own element so it never fights the CSS Ken Burns zoom
 * animation applied directly to the photo (transform on parent and child
 * compose independently).
 */
export default function HeroParallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0) return;
      const offset = Math.min(140, Math.max(0, -rect.top) * 0.18);
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
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
    <div ref={ref} className="absolute inset-0">
      {children}
    </div>
  );
}
