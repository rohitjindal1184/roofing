"use client";

import { useEffect, useRef } from "react";

/** Small bouncing scroll-down indicator; fades out once the visitor actually
 * starts scrolling rather than lingering over the next section. */
export default function ScrollCue() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      el.style.opacity = window.scrollY > 24 ? "0" : "1";
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      data-hero-chevron
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center transition-opacity duration-300 sm:bottom-9"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white/70">
        <path
          d="M6 9l6 6 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
