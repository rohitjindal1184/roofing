import { heroVariant } from "@/lib/experiments";
import HeroChevronCue from "./HeroChevronCue";
import HeroParallaxSettle from "./HeroParallaxSettle";
import HeroPinnedCurtain from "./HeroPinnedCurtain";
import HeroStatsRise from "./HeroStatsRise";

/** Picks the active hero scroll-animation variant per NEXT_PUBLIC_HERO_VARIANT
 * (src/lib/experiments.ts). Swap the env var and restart to A/B between them. */
export default function Hero() {
  switch (heroVariant) {
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
