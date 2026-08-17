import HeroParallax from "@/components/HeroParallax";
import HeroContent from "./HeroContent";
import HeroMedia from "./HeroMedia";
import HeroScrims from "./HeroScrims";
import ScrollCue from "./ScrollCue";

/** The simplest variant: today's hero (Ken Burns + parallax + on-load
 * stagger) plus a bouncing scroll-down cue. */
export default function HeroChevronCue() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      <HeroParallax>
        <HeroMedia />
      </HeroParallax>
      <HeroScrims />
      <HeroContent />
      <ScrollCue />
    </section>
  );
}
