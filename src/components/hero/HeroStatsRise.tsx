import HeroParallax from "@/components/HeroParallax";
import HeroContent from "./HeroContent";
import HeroMedia from "./HeroMedia";
import HeroScrims from "./HeroScrims";
import StatsRiseStrip from "./StatsRiseStrip";

/**
 * Base hero (Ken Burns + parallax + on-load stagger) plus the track-record
 * proof stats pulled up from the StatsBand further down the page, rising
 * into the hero itself as the visitor starts to scroll.
 */
export default function HeroStatsRise() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      <HeroParallax>
        <HeroMedia />
      </HeroParallax>
      <HeroScrims />
      <HeroContent>
        <StatsRiseStrip />
      </HeroContent>
    </section>
  );
}
