"use client";

import { useEffect, useRef } from "react";

const POSTER_SRC = "/images/hero-roofing-crew-panorama.jpg";

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
 *
 * The poster is very likely the page's LCP element (full-bleed, above the
 * fold, first paint), and swapping the old `<Image priority>` for a plain
 * `<video>` dropped Next's automatic preload for it. React 19 hoists any
 * `<link>` rendered in the tree into `<head>`, so the literal tag below
 * restores that hint regardless of where in the tree it's rendered.
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
    <>
      <link rel="preload" as="image" href={POSTER_SRC} fetchPriority="high" />
      <video
        ref={ref}
        aria-label="ONE ROOFING crew working on a row of residential roofs on a clear Bay Area morning"
        className={`hero-media absolute inset-0 h-full w-full object-cover object-[70%_center] ${className}`}
        poster={POSTER_SRC}
        loop
        muted
        playsInline
        preload="auto"
        // @ts-expect-error -- fetchPriority is a valid DOM/React prop; the
        // TS DOM lib bundled with this Next/React version doesn't type it on
        // HTMLVideoElement yet. Harmless no-op in browsers that ignore it.
        fetchPriority="high"
      >
        <source src="/videos/hero-roofing-crew-motion.mp4" type="video/mp4" />
      </video>
    </>
  );
}
