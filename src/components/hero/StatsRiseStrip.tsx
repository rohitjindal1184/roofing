"use client";

import { useEffect, useRef } from "react";

import CountUp from "@/components/CountUp";
import { stats } from "@/lib/site";

/**
 * Compact proof-stat row appended below the hero's emergency-line strip.
 * Starts hidden (translated down, per [data-stats-rise] in globals.css) and
 * rises into place over the first ~260px of scroll — distinct from the
 * on-load data-hero-in stagger, so it reads as a response to the visitor's
 * own scroll rather than a delayed page-load animation.
 */
export default function StatsRiseStrip() {
  const ref = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--stats-p", "1");
      return;
    }

    const distance = 260;
    let ticking = false;

    const update = () => {
      ticking = false;
      const progress = Math.min(1, Math.max(0, window.scrollY / distance));
      el.style.setProperty("--stats-p", String(progress));
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
    <dl
      ref={ref}
      data-stats-rise
      className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-6"
    >
      {stats.map((stat) => (
        <div key={stat.label}>
          <dd className="font-display text-3xl font-bold leading-none text-brand-500 sm:text-4xl">
            <CountUp value={stat.value} suffix={stat.suffix} />
          </dd>
          <dt className="mt-1 text-xs uppercase tracking-[0.14em] text-bone-300">
            {stat.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}
