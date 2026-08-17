import type { ReactNode } from "react";

import { ArrowRight, ButtonLink, Container } from "@/components/ui";
import { site } from "@/lib/site";

/**
 * The hero's text stack: eyebrow, headline, copy, CTAs, and the emergency
 * line / hours strip. Shared by every variant — the on-load staggered
 * entrance (`data-hero-in`, see globals.css) is the one constant across all
 * of them; each variant only changes what happens on *scroll*.
 */
export default function HeroContent({ children }: { children?: ReactNode }) {
  return (
    <Container
      data-hero-layer="content"
      className="relative flex min-h-[34rem] flex-col justify-center py-16 sm:min-h-[38rem] sm:py-24 lg:min-h-[44rem]"
    >
      <div className="max-w-3xl">
        <p
          data-hero-in
          style={{ "--hero-delay": "0ms" } as React.CSSProperties}
          className="eyebrow flex items-center gap-3 text-brand-400"
        >
          <span
            aria-hidden="true"
            className="inline-block h-px w-10 bg-brand-400"
          />
          San Francisco &amp; Bay Area · Licensed, Bonded &amp; Insured
        </p>

        <h1
          data-hero-in
          style={{ "--hero-delay": "110ms" } as React.CSSProperties}
          className="mt-5 font-display text-[2.75rem] font-bold uppercase leading-[0.98] text-white sm:text-6xl lg:text-7xl"
        >
          Roofs built to take
          <span className="block text-brand-500">
            everything the Bay throws at them
          </span>
        </h1>

        <p
          data-hero-in
          style={{ "--hero-delay": "230ms" } as React.CSSProperties}
          className="mt-6 max-w-xl text-lg leading-relaxed text-bone-200 sm:text-xl"
        >
          Replacement, repair and inspection for homes and commercial
          buildings across San Francisco and 30+ Bay Area cities — backed by
          300+ completed projects and an industry-leading warranty.
        </p>

        <div
          data-hero-in
          style={{ "--hero-delay": "330ms" } as React.CSSProperties}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <ButtonLink href="/contact" variant="primary">
            Get a Free Quote
            <ArrowRight />
          </ButtonLink>
          <ButtonLink href={site.phoneHref} variant="onDark">
            Call {site.phoneDisplay}
          </ButtonLink>
        </div>

        <dl
          data-hero-in
          style={{ "--hero-delay": "420ms" } as React.CSSProperties}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-6 text-sm"
        >
          <div>
            <dt className="uppercase tracking-[0.16em] text-bone-300">
              24/7 emergency line
            </dt>
            <dd className="mt-1">
              <a
                href={site.phoneHref}
                className="font-display text-2xl font-semibold text-white transition-colors hover:text-brand-400"
              >
                {site.phoneDisplay}
              </a>
            </dd>
          </div>
          <div>
            <dt className="uppercase tracking-[0.16em] text-bone-300">
              Office hours
            </dt>
            <dd className="mt-1 font-display text-2xl font-semibold text-white">
              {site.hours.display}
            </dd>
          </div>
        </dl>

        {children}
      </div>
    </Container>
  );
}
