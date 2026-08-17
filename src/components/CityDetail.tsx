import Image from "next/image";
import Link from "next/link";

import PageHero from "@/components/PageHero";
import { CtaBand, StatsBand, TrustBar } from "@/components/sections";
import {
  ArrowRight,
  ButtonLink,
  CheckMark,
  Container,
  Eyebrow,
} from "@/components/ui";
import {
  cityPath,
  nearbyCities,
  regionForCity,
  services,
  site,
  type City,
} from "@/lib/site";

/**
 * Real project photography, rotated across the city pages so /city/5 and
 * /city/36 do not look like the same page with the nouns swapped.
 */
const heroImages = [
  {
    src: "/images/project-shingle-roof-large.jpg",
    alt: "ONE ROOFING technician on a pitched shingle roof against an open Bay Area sky",
  },
  {
    src: "/images/project-tile-roof-large.jpg",
    alt: "ONE ROOFING installer hand-nailing shingles along the ridge of a steep residential roof",
  },
  {
    src: "/images/service-flat-roof-replacement.jpg",
    alt: "ONE ROOFING crew heat-welding a new weatherproof membrane onto a flat roof deck",
  },
  {
    src: "/images/project-roof-detail-large.jpg",
    alt: "ONE ROOFING foreman standing between new timber roof trusses on a Bay Area build",
  },
];

/**
 * Shared body for all 31 `/city/{id}` pages. Each route resolves its city from
 * the numeric id inherited from the previous site and renders this component,
 * so the structure, contact details and schema stay in one place.
 */
export default function CityDetail({ city }: { city: City }) {
  const region = regionForCity(city);
  const nearby = nearbyCities(city);
  const heroImage = heroImages[city.id % heroImages.length];
  const url = `${site.url}${cityPath(city)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Roofing services in ${city.name}, ${site.address.stateCode}`,
    serviceType: "Roofing contractor",
    description: city.metaDescription,
    url,
    areaServed: {
      "@type": "City",
      name: `${city.name}, ${site.address.stateCode}`,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "San Francisco Bay Area, California",
      },
    },
    provider: {
      "@type": "RoofingContractor",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      telephone: site.phoneE164,
      email: site.email,
      priceRange: "$$",
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
      openingHours: site.hours.schema,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Roofing services in ${city.name}`,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${service.title} in ${city.name}`,
          url: `${site.url}/${service.slug}`,
          description: service.benefit,
        },
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: `${site.url}/service-areas`,
      },
      { "@type": "ListItem", position: 3, name: city.name, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageHero
        eyebrow={`Service area · ${city.name}, ${site.address.stateCode}`}
        title={city.headline}
        description={city.tagline}
        image={heroImage}
        breadcrumbs={[
          { href: "/service-areas", label: "Service Areas" },
          { href: cityPath(city), label: city.name },
        ]}
      />

      <TrustBar />

      {/* ---------------------------------------------------------------- */}
      {/* Local intro + contact sidebar                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-bone-100">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
            <div>
              <div data-reveal>
                <Eyebrow>Roofing in {city.name}</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
                  What we deal with on {city.name} roofs
                </h2>
                {city.intro.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <figure
                data-reveal
                className="relative mt-10 aspect-[16/9] overflow-hidden rounded-surface bg-ink-800 shadow-card"
              >
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  sizes="(min-width: 1024px) 46rem, 92vw"
                  className="object-cover"
                />
              </figure>

              <div
                data-reveal
                className="mt-10 rounded-b-surface border-t-2 border-brand-600 bg-bone-50 p-6 shadow-card sm:p-8"
              >
                <h2 className="font-display text-2xl font-semibold uppercase leading-tight">
                  Common problems on roofs around here
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {city.conditions.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckMark className="mt-0.5 text-brand-800" />
                      <span className="text-[0.9375rem] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p data-reveal className="mt-8 text-lg leading-relaxed">
                {city.name} sits in our{" "}
                <Link
                  href="/service-areas"
                  className="font-semibold text-brand-800 underline underline-offset-4 hover:text-brand-700"
                >
                  {region.name}
                </Link>{" "}
                coverage area. Same crews, same premium-grade materials and the
                same written warranty as every other city on the list — nothing
                is subcontracted out at the edge of the map.
              </p>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div data-reveal="right" className="rounded-surface bg-ink-900 p-7 text-bone-200 shadow-card">
                <h2 className="font-display text-2xl font-semibold uppercase leading-tight text-white">
                  Free quotes in {city.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-bone-300">
                  Tell us your address and what the roof is doing. We will
                  inspect it properly and come back with an itemised price.
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-5 block font-display text-3xl font-semibold text-white transition-colors hover:text-brand-400"
                >
                  {site.phoneDisplay}
                </a>
                <a
                  href={site.emailHref}
                  className="mt-2 block text-sm text-bone-300 transition-colors hover:text-brand-400"
                >
                  {site.email}
                </a>
                <p className="mt-3 text-sm text-bone-300">
                  {site.hours.display}
                </p>
                <p className="mt-1 text-sm text-brand-400">
                  24/7 emergency support
                </p>
                <ButtonLink
                  href="/contact"
                  variant="primary"
                  className="mt-6 w-full"
                >
                  Get a Free Quote
                  <ArrowRight />
                </ButtonLink>
              </div>

              <div
                data-reveal="right"
                className="mt-6 rounded-surface bg-bone-50 p-7 shadow-card"
              >
                <h2 className="font-display text-xl font-semibold uppercase tracking-[0.06em]">
                  Office
                </h2>
                <address className="mt-3 text-[0.9375rem] not-italic leading-relaxed">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </address>
                <p className="mt-3 text-[0.9375rem] leading-relaxed">
                  Crews reach {city.name} from our San Francisco base, and we
                  work {site.hours.daysDisplay.toLowerCase()}.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Services available in this city                                   */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-t border-bone-300 bg-bone-200">
        <Container className="py-16 sm:py-20">
          <div data-reveal className="max-w-2xl">
            <Eyebrow>What we do here</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
              Our six roofing services, available in {city.name}
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              Everything below is delivered by our own crews, for {city.name}{" "}
              homeowners, landlords, property managers and commercial building
              owners alike.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <li
                key={service.slug}
                data-reveal
                style={
                  {
                    "--reveal-delay": `${(index % 3) * 90}ms`,
                  } as React.CSSProperties
                }
                className="group relative flex flex-col rounded-surface bg-bone-50 p-6 shadow-card transition-[box-shadow,transform] duration-200 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <h3 className="font-display text-xl font-semibold uppercase leading-tight tracking-[0.02em]">
                  <Link
                    href={`/${service.slug}`}
                    className="transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-brand-800"
                  >
                    {service.navTitle} in {city.name}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed">
                  {service.benefit}
                </p>
                <p
                  aria-hidden="true"
                  className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.1em] text-brand-800"
                >
                  Service details
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <StatsBand />

      {/* ---------------------------------------------------------------- */}
      {/* Nearby cities                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-bone-100">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-16">
            <div data-reveal="left">
              <Eyebrow>Nearby</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
                Areas we also serve near {city.name}
              </h2>
              <p className="mt-4 leading-relaxed">
                {region.blurb}
              </p>
              <Link
                href="/service-areas"
                className="mt-6 inline-flex items-center gap-2 font-display text-lg font-semibold uppercase tracking-[0.1em] text-brand-800 transition-colors hover:text-brand-700"
              >
                All Bay Area service areas
                <ArrowRight />
              </Link>
            </div>

            <nav data-reveal="right" aria-label={`Cities near ${city.name}`}>
              <ul className="flex flex-wrap content-start gap-2.5 self-start">
                {nearby.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={cityPath(item)}
                      className="inline-block rounded-control border border-bone-300 bg-bone-50 px-3.5 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-brand-600 hover:text-brand-800"
                    >
                      Roofing in {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </section>

      <CtaBand
        heading={`Get a roofing quote in ${city.name}`}
        body={`Call ${site.phoneDisplay} or email ${site.email}. We will book an inspection, tell you what the roof actually needs, and put an itemised price in writing — including when the honest answer is that it can wait.`}
      />
    </>
  );
}
