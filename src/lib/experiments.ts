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

function resolveHeroVariant(): HeroVariant {
  const raw = process.env.NEXT_PUBLIC_HERO_VARIANT;
  return (HERO_VARIANTS as readonly string[]).includes(raw ?? "")
    ? (raw as HeroVariant)
    : DEFAULT_HERO_VARIANT;
}

export const heroVariant: HeroVariant = resolveHeroVariant();
