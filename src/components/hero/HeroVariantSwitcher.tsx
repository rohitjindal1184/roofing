"use client";

import { HERO_VARIANTS, type HeroVariant } from "@/lib/experiments";

const LABELS: Record<HeroVariant, string> = {
  "parallax-settle": "Parallax + settle-out",
  "pinned-curtain": "Pinned curtain",
  "stats-rise": "Stats rise",
  "chevron-cue": "Chevron cue",
};

/**
 * Internal preview control, desktop-only so it never competes with the
 * mobile CTA bar or a real visitor's path to the phone number. Changing the
 * selection sets `?hero=` and does a full navigation (not client routing) so
 * the picked variant re-renders from the server exactly like a fresh visit.
 */
export default function HeroVariantSwitcher({ current }: { current: HeroVariant }) {
  return (
    <div className="fixed right-4 top-28 z-40 hidden rounded-surface bg-ink-900/95 p-3 shadow-float backdrop-blur-sm lg:block">
      <label
        htmlFor="hero-variant-switcher"
        className="mb-1.5 block font-display text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-bone-300"
      >
        Hero variant (preview)
      </label>
      <select
        id="hero-variant-switcher"
        value={current}
        onChange={(event) => {
          const url = new URL(window.location.href);
          url.searchParams.set("hero", event.target.value);
          window.location.href = url.toString();
        }}
        className="w-full rounded-control border border-white/20 bg-ink-800 px-2.5 py-1.5 text-sm text-white"
      >
        {HERO_VARIANTS.map((variant) => (
          <option key={variant} value={variant}>
            {LABELS[variant]}
          </option>
        ))}
      </select>
    </div>
  );
}
