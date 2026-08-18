/**
 * Hero scroll-animation A/B flag. Set NEXT_PUBLIC_HERO_VARIANT in .env.local
 * (see .env.example) to one of the values below and restart the dev server
 * / rebuild — it's inlined at build time, not switchable per-request.
 */
export const HERO_VARIANTS = [
  "parallax-settle",
  "pinned-curtain",
  "stats-rise",
  "chevron-cue",
] as const;

export type HeroVariant = (typeof HERO_VARIANTS)[number];

const DEFAULT_HERO_VARIANT: HeroVariant = "parallax-settle";

export function isHeroVariant(value: unknown): value is HeroVariant {
  return (
    typeof value === "string" &&
    (HERO_VARIANTS as readonly string[]).includes(value)
  );
}

function resolveHeroVariant(): HeroVariant {
  const raw = process.env.NEXT_PUBLIC_HERO_VARIANT;
  return isHeroVariant(raw) ? raw : DEFAULT_HERO_VARIANT;
}

/** Build-time default — used when the homepage isn't given a per-request
 * `?hero=` override (see HeroVariantSwitcher.tsx). */
export const heroVariant: HeroVariant = resolveHeroVariant();
