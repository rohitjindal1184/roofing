import HeroParallax from "@/components/HeroParallax";
import HeroContent from "./HeroContent";
import HeroMedia from "./HeroMedia";
import HeroScrims from "./HeroScrims";
import HeroScrollDriver from "./HeroScrollDriver";

/**
 * Recommended default. True multi-plane depth: the photo drifts via
 * HeroParallax's own scroll math (independent, viewport-lag based), while
 * HeroScrollDriver separately scales/fades the text block and deepens the
 * scrim as the hero scrolls out — so the hero settles into the next section
 * instead of cutting off abruptly.
 */
export default function HeroParallaxSettle() {
  return (
    <HeroScrollDriver>
      <HeroParallax>
        <HeroMedia />
      </HeroParallax>
      <HeroScrims />
      <HeroContent />
    </HeroScrollDriver>
  );
}
