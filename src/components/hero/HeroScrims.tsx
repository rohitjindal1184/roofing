/** The dark gradient scrims that keep hero text readable over the photo. */
export default function HeroScrims() {
  return (
    <>
      <div
        aria-hidden="true"
        data-hero-layer="scrim"
        className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/88 to-ink-950/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent"
      />
    </>
  );
}
