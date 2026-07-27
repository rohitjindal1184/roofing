import Image from "next/image";
import Link from "next/link";

import CountUp from "@/components/CountUp";
import {
  cities as allCities,
  cityPath,
  services,
  site,
  stats,
  trustPoints,
  type City,
} from "@/lib/site";
import { ArrowRight, ButtonLink, Container, Eyebrow } from "@/components/ui";

/* ------------------------------------------------------------------ */
/* Trust strip                                                         */
/* ------------------------------------------------------------------ */

export function TrustBar() {
  return (
    <section aria-label="Why homeowners hire us" className="bg-ink-800">
      <Container>
        <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, index) => (
            <li
              key={point.title}
              data-reveal
              style={{ "--reveal-delay": `${index * 70}ms` } as React.CSSProperties}
              className="border-t border-white/10 py-6 first:border-t-0 sm:[&:nth-child(-n+2)]:border-t-0 lg:border-t-0 lg:py-7"
            >
              <span
                aria-hidden="true"
                className="mb-3 block h-0.5 w-8 bg-brand-500"
              />
              <h2 className="font-display text-xl font-semibold uppercase tracking-[0.04em] text-white">
                {point.title}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-bone-300">
                {point.detail}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Stats band                                                          */
/* ------------------------------------------------------------------ */

export function StatsBand() {
  return (
    <section aria-label="ONE ROOFING by the numbers" className="bg-ink-900">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
          <div data-reveal="left">
            <Eyebrow tone="dark">By the numbers</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">
              A track record you can check, not a slogan
            </h2>
            <p className="mt-4 text-bone-300">
              Every figure below comes from work already completed across San
              Francisco and the wider Bay Area.
            </p>
          </div>

          <dl className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                data-reveal
                style={
                  { "--reveal-delay": `${index * 90}ms` } as React.CSSProperties
                }
                className="bg-ink-900 px-6 py-8"
              >
                <dd className="font-display text-5xl font-bold leading-none text-brand-500 sm:text-6xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </dd>
                <dt className="mt-3 font-display text-lg font-semibold uppercase tracking-[0.06em] text-white">
                  {stat.label}
                </dt>
                <p className="mt-2 text-sm leading-relaxed text-bone-300">
                  {stat.detail}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Service cards                                                       */
/* ------------------------------------------------------------------ */

export function ServiceCard({
  service,
  index = 0,
}: {
  service: (typeof services)[number];
  index?: number;
}) {
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${(index % 3) * 90}ms` } as React.CSSProperties}
      className="group relative flex flex-col border border-bone-300 bg-bone-50 transition-colors duration-200 hover:border-brand-600"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-ink-800">
        <Image
          src={service.cardImage.src}
          alt={service.cardImage.alt}
          fill
          sizes="(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-semibold uppercase leading-tight tracking-[0.02em]">
          <Link
            href={`/${service.slug}`}
            className="transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-brand-800"
          >
            {service.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed">
          {service.benefit}
        </p>
        <p
          aria-hidden="true"
          className="mt-5 inline-flex items-center gap-2 font-display text-base font-semibold uppercase tracking-[0.1em] text-brand-800"
        >
          View service details
          <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
        </p>
      </div>
    </article>
  );
}

export function ServicesGrid({ items = services }: { items?: typeof services }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service, index) => (
        <ServiceCard key={service.slug} service={service} index={index} />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Service areas                                                       */
/* ------------------------------------------------------------------ */

/** City chips. Each one links to that city's `/city/{id}` page. */
export function ServiceAreaChips({
  cities = allCities,
}: {
  cities?: readonly City[];
}) {
  return (
    // content-start keeps wrapped rows packed together; without it a stretched
    // flex container spreads the lines apart vertically.
    <ul className="flex flex-wrap content-start gap-2.5 self-start">
      {cities.map((city) => (
        <li key={city.id}>
          <Link
            href={cityPath(city)}
            className="inline-block border border-bone-300 bg-bone-50 px-3.5 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-brand-600 hover:text-brand-800"
          >
            {city.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Closing call to action                                              */
/* ------------------------------------------------------------------ */

export function CtaBand({
  heading = "Get a free roofing quote",
  body = "Tell us what the roof is doing and we will come out, inspect it properly and give you an honest, itemised price. No obligation, no pressure.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      <Image
        src="/images/project-roof-detail-large.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/60"
      />
      <Container className="relative py-16 sm:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div data-reveal>
            <Eyebrow tone="dark">Next step</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-bone-200">{body}</p>
          </div>
          <div
            data-reveal="right"
            className="flex flex-col gap-3 sm:flex-row lg:flex-col"
          >
            <ButtonLink href="/contact" variant="primary">
              Get a Free Quote
              <ArrowRight />
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="onDark">
              {site.phoneDisplay}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
