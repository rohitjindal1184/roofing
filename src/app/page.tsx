import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  CtaBand,
  ServiceAreaChips,
  ServicesGrid,
  StatsBand,
  TrustBar,
} from "@/components/sections";
import Hero from "@/components/hero/Hero";
import { isHeroVariant } from "@/lib/experiments";
import {
  ArrowRight,
  ButtonLink,
  CheckMark,
  Container,
  Eyebrow,
} from "@/components/ui";
import { additionalServices, serviceAreas, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Roofing Contractor in San Francisco & the Bay Area",
  description:
    "ONE ROOFING is a licensed, bonded and insured San Francisco roofing contractor. Roof replacement, flat roofs, leak repair, gutters, skylights and inspections across 30+ Bay Area cities. Free quotes, 24/7 emergency support.",
  alternates: { canonical: "/" },
  openGraph: {
    url: site.url,
    title: "ONE ROOFING | Roofing Contractor in San Francisco & the Bay Area",
    description:
      "Licensed, bonded and insured roofing contractor serving San Francisco and the Bay Area. 300+ projects completed. Free quotes and 24/7 emergency support.",
    images: [
      {
        url: "/images/hero-roofing-crew-panorama.jpg",
        width: 1200,
        height: 630,
        alt: "ONE ROOFING crew working on Bay Area residential roofs",
      },
    ],
  },
};

const galleryPreview = [
  {
    src: "/images/project-tile-roof-large.jpg",
    alt: "ONE ROOFING installer hand-nailing shingles along the ridge of a steep residential roof",
    className: "lg:col-span-7",
  },
  {
    src: "/images/project-completed-roof.jpg",
    alt: "Close-up of an installer setting a nail into a freshly laid architectural shingle course",
    className: "lg:col-span-5",
  },
  {
    src: "/images/service-flat-roof-replacement.jpg",
    alt: "Flat roof membrane being heat-welded into place on a commercial building",
    className: "lg:col-span-5",
  },
  {
    src: "/images/project-roof-detail-large.jpg",
    alt: "Roofing foreman standing between new timber roof trusses on a Bay Area build",
    className: "lg:col-span-7",
  },
];

const whyPoints = [
  "Thorough roof inspections and accurate testing before we quote a single dollar",
  "Premium-grade materials rather than whatever is cheapest that week",
  "Award-recognised craftsmanship from a 15-strong in-house team",
  "An industry-leading warranty in writing on workmanship and materials",
  "Licensed, bonded and insured on every residential and commercial job",
  "24/7 emergency support when a storm does not wait for business hours",
];

function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    image: `${site.url}/images/hero-roofing-crew-panorama.jpg`,
    logo: `${site.url}/images/one-roofing-logo.png`,
    description: site.description,
    telephone: site.phoneE164,
    email: site.email,
    priceRange: "$$",
    currenciesAccepted: "USD",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.stateCode,
      postalCode: site.address.zip,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    openingHours: site.hours.schema,
    areaServed: serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "San Francisco Bay Area, California",
      },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `${site.url}/${service.slug}`,
          description: service.benefit,
          provider: { "@id": `${site.url}/#organization` },
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // `?hero=<variant>` lets HeroVariantSwitcher preview a variant without
  // touching NEXT_PUBLIC_HERO_VARIANT. Reading searchParams opts the
  // homepage into dynamic rendering — see HeroVariantSwitcher.tsx.
  const params = await searchParams;
  const rawHero = Array.isArray(params.hero) ? params.hero[0] : params.hero;
  const heroOverride = isHeroVariant(rawHero) ? rawHero : undefined;

  return (
    <>
      <LocalBusinessJsonLd />

      {/* ---------------------------------------------------------------- */}
      {/* Hero — variant picked by NEXT_PUBLIC_HERO_VARIANT, see            */}
      {/* src/lib/experiments.ts and src/components/hero/Hero.tsx          */}
      {/* ---------------------------------------------------------------- */}
      <Hero variant={heroOverride} />

      <TrustBar />

      {/* ---------------------------------------------------------------- */}
      {/* Services                                                          */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-bone-100">
        <Container className="py-16 sm:py-24">
          <div
            data-reveal
            className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-2xl">
              <Eyebrow>What we do</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
                Roofing services for Bay Area homes and businesses
              </h2>
              <p className="mt-4 text-lg leading-relaxed">
                Six core services, all delivered by our own crews. Whatever is
                wrong up there, it starts with a proper inspection and an honest
                answer about whether it needs repairing or replacing.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-2 font-display text-lg font-semibold uppercase tracking-[0.1em] text-brand-800 transition-colors hover:text-brand-700"
            >
              All services
              <ArrowRight />
            </Link>
          </div>

          <div className="mt-12">
            <ServicesGrid />
          </div>

          <p data-reveal className="mt-8 text-[0.9375rem]">
            We also take care of {additionalServices.join(", ").toLowerCase()} —{" "}
            <a
              href={site.phoneHref}
              className="font-semibold text-brand-800 underline underline-offset-4 hover:text-brand-700"
            >
              call {site.phoneDisplay}
            </a>{" "}
            and ask.
          </p>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Why choose us                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-bone-200">
        <Container className="py-16 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div data-reveal="left" className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-surface bg-ink-800 shadow-card sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/images/why-choose-one-roofing.jpg"
                  alt="ONE ROOFING technician on a ladder at the eaves of a Bay Area home, hammer in hand and toolbox on the roof edge"
                  fill
                  sizes="(min-width: 1024px) 34rem, 92vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-6 left-6 rounded-surface bg-brand-600 px-6 py-5 text-white shadow-float sm:px-8">
                <p className="font-display text-4xl font-bold leading-none">
                  15+
                </p>
                <p className="mt-1 text-sm uppercase tracking-[0.14em]">
                  In-house staff
                </p>
              </div>
            </div>

            <div data-reveal="right">
              <Eyebrow>Why ONE ROOFING</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
                The unglamorous parts done properly
              </h2>
              <p className="mt-5 text-lg leading-relaxed">
                Anyone can nail down shingles. The difference shows up in the
                flashing, the ventilation, the deck repair you never see, and
                whether the crew that started the job is the crew that finishes
                it. That is where we spend our attention.
              </p>

              <ul className="mt-8 space-y-3.5">
                {whyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckMark className="mt-0.5 text-brand-800" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/about" variant="onLight">
                  More about us
                </ButtonLink>
                <ButtonLink href="/contact" variant="primary">
                  Book an inspection
                  <ArrowRight />
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <StatsBand />

      {/* ---------------------------------------------------------------- */}
      {/* Recent work                                                       */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-bone-100">
        <Container className="py-16 sm:py-24">
          <div
            data-reveal
            className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-2xl">
              <Eyebrow>On the roof</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
                Recent work
              </h2>
              <p className="mt-4 text-lg leading-relaxed">
                Residential re-roofs, commercial flat roof systems and structural
                work photographed on our own job sites.
              </p>
            </div>
            <Link
              href="/gallery"
              className="inline-flex shrink-0 items-center gap-2 font-display text-lg font-semibold uppercase tracking-[0.1em] text-brand-800 transition-colors hover:text-brand-700"
            >
              View the gallery
              <ArrowRight />
            </Link>
          </div>

          <div className="mt-12 grid gap-4 lg:auto-rows-[20rem] lg:grid-cols-12">
            {galleryPreview.map((item, index) => (
              <figure
                key={item.src}
                data-reveal
                style={
                  { "--reveal-delay": `${(index % 2) * 90}ms` } as React.CSSProperties
                }
                className={`relative aspect-[16/10] overflow-hidden rounded-surface bg-ink-800 shadow-card lg:aspect-auto lg:h-full ${item.className}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Service areas                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-t border-bone-300 bg-bone-50">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-16">
            <div data-reveal="left">
              <Eyebrow>Where we work</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
                Serving {serviceAreas.length} cities across the Bay Area
              </h2>
              <p className="mt-4 leading-relaxed">
                From our Battery Street office we cover San Francisco, the
                Peninsula, the East Bay and the South Bay. If your city is on the
                list, we can be on your roof.
              </p>
              <Link
                href="/service-areas"
                className="mt-6 inline-flex items-center gap-2 font-display text-lg font-semibold uppercase tracking-[0.1em] text-brand-800 transition-colors hover:text-brand-700"
              >
                Service area details
                <ArrowRight />
              </Link>
            </div>
            <div data-reveal="right">
              <ServiceAreaChips />
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
