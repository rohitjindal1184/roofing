"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
  durationMs?: number;
};

/**
 * Counts from 0 up to `value` the first time it scrolls into view.
 * With `prefers-reduced-motion: reduce` the duration collapses to zero, so the
 * final number appears on the next frame with no visible animation.
 */
export default function CountUp({
  value,
  suffix = "",
  durationMs = 1400,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const duration = prefersReducedMotion ? 0 : durationMs;

    let frame = 0;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress =
        duration <= 0 ? 1 : Math.min((timestamp - start) / duration, 1);
      // easeOutCubic — decelerates onto the final number without overshooting.
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    if (duration <= 0 || typeof IntersectionObserver === "undefined") {
      frame = requestAnimationFrame(step);
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, durationMs]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
