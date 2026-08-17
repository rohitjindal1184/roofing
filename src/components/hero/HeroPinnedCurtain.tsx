import HeroContent from "./HeroContent";
import HeroMedia from "./HeroMedia";
import HeroScrims from "./HeroScrims";

/**
 * The hero pins full-viewport inside a taller wrapper while the section
 * that follows (TrustBar) scrolls up over it like a curtain — a bolder,
 * more agency-style reveal. Self-contained: whatever renders next in
 * page.tsx needs no changes, since a sticky element is covered automatically
 * once subsequent in-flow content reaches it. No JS parallax here — the
 * pin itself is the depth cue, so it isn't layered with a second, competing
 * motion.
 */
export default function HeroPinnedCurtain() {
  return (
    <div className="relative h-[160vh]">
      {/* `sticky` and `relative` both set `position`, so Image `fill`'s
          required positioned ancestor lives on this inner wrapper instead
          of the sticky section itself. */}
      <section className="sticky top-0 h-screen overflow-hidden bg-ink-950">
        <div className="relative isolate flex h-full items-stretch">
          <HeroMedia />
          <HeroScrims />
          <HeroContent />
        </div>
      </section>
    </div>
  );
}
