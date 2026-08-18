"use client";

import { useEffect, useRef } from "react";

/**
 * The hero's real job-site photo, given gentle ambient motion (drifting
 * light and clouds, fabric sway — the crew and scene are unchanged from the
 * source photo, no invented action) via a short generated loop. Shared by
 * every hero variant so the Ken Burns treatment (`.hero-media` in
 * globals.css) and focal point stay consistent regardless of which
 * scroll-interaction variant is active. Falls back to the static photo as
 * the `poster` if video can't play.
 *
 * Autoplay is driven from JS rather than the `autoplay` attribute so
 * `prefers-reduced-motion: reduce` visitors get the still poster frame
 * instead of a looping video, matching every other motion treatment on the
 * site.
 */
export default function HeroMedia({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.play().catch(() => {
      // Autoplay can be blocked by the browser; the poster frame covers it.
    });
  }, []);

  return (
    <video
      ref={ref}
      aria-label="ONE ROOFING crew working on a row of residential roofs on a clear Bay Area morning"
      className={`hero-media absolute inset-0 h-full w-full object-cover object-[70%_center] ${className}`}
      poster="/images/hero-roofing-crew-panorama.jpg"
      loop
      muted
      playsInline
      preload="auto"
    >
      <source src="/videos/hero-roofing-crew-motion.mp4" type="video/mp4" />
    </video>
  );
}
