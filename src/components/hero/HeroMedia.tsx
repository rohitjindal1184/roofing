import Image from "next/image";

/** The hero's real job-site photo. Shared by every hero variant so the Ken
 * Burns treatment (`.hero-media` in globals.css) and focal point stay
 * consistent regardless of which scroll-interaction variant is active. */
export default function HeroMedia({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/hero-roofing-crew-panorama.jpg"
      alt="ONE ROOFING crew working on a row of residential roofs on a clear Bay Area morning"
      fill
      priority
      sizes="100vw"
      className={`hero-media object-cover object-[70%_center] ${className}`}
    />
  );
}
