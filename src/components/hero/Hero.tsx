import { heroVariant as defaultHeroVariant, type HeroVariant } from "@/lib/experiments";
import HeroChevronCue from "./HeroChevronCue";
import HeroParallaxSettle from "./HeroParallaxSettle";
import HeroPinnedCurtain from "./HeroPinnedCurtain";
import HeroStatsRise from "./HeroStatsRise";
import HeroVariantSwitcher from "./HeroVariantSwitcher";

/**
 * Picks the active hero scroll-animation variant. `variant` (from the
 * homepage's `?hero=` query param, see HeroVariantSwitcher.tsx) overrides
 * the NEXT_PUBLIC_HERO_VARIANT build-time default for this request only.
 */
export default function Hero({ variant }: { variant?: HeroVariant }) {
  const active = variant ?? defaultHeroVariant;

  return (
    <>
      {renderVariant(active)}
      <HeroVariantSwitcher current={active} />
    </>
  );
}

function renderVariant(variant: HeroVariant) {
  switch (variant) {
    case "pinned-curtain":
      return <HeroPinnedCurtain />;
    case "stats-rise":
      return <HeroStatsRise />;
    case "chevron-cue":
      return <HeroChevronCue />;
    case "parallax-settle":
    default:
      return <HeroParallaxSettle />;
  }
}
