import type { Metadata } from "next";
import Link from "next/link";

import PageHero from "@/components/PageHero";
import { CtaBand, ServiceAreaChips } from "@/components/sections";
import { ArrowRight, Container, Eyebrow } from "@/components/ui";
import { serviceAreas, serviceRegions, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas — Roofing Across the San Francisco Bay Area",
  description: `ONE ROOFING serves ${serviceAreas.length} Bay Area cities including San Francisco, Oakland, Berkeley, San Jose, Palo Alto, San Mateo and Fremont. Roof replacement, repair and inspection.`,
  alternates: { canonical: "/service-areas" },
  openGraph: {
    type: "website",
    url: `${site.url}/service-areas`,
    title: "Service Areas — Roofing Across the San Francisco Bay Area",
    description: `Roofing services from ONE ROOFING across ${serviceAreas.length} Bay Area cities, from San Francisco to San Jose.`,
    images: [
      {
        url: "/images/project-shingle-roof-large.jpg",
        alt: "ONE ROOFING technician on a Bay Area rooftop against an open sky",
      },
    ],
  },
};

export default function ServiceAreasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    telephone: site.phoneE164,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.stateCode,
      postalCode: site.address.zip,
      addressCountry: site.address.country,
    },
    areaServed: serviceAreas.map((city) => ({
      "@type": "City",
      name: `${city}, California`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Service areas"
        title={`Roofing across ${serviceAreas.length} Bay Area cities`}
        description="From our Battery Street office in San Francisco we cover the city, the Peninsula, the East Bay and the South Bay — residential and commercial alike."
        image={{
          src: "/images/project-shingle-roof-large.jpg",
          alt: "ONE ROOFING technician at the edge of a Bay Area rooftop against an open sky",
        }}
        breadcrumbs={[{ href: "/service-areas", label: "Service Areas" }]}
      />

      <section className="bg-bone-100">
        <Container className="py-14 sm:py-20">
          <div data-reveal className="max-w-2xl">
            <Eyebrow>Coverage</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
              Every city we work in
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              Bay Area micro-climates are not a marketing line — a roof in Pacifica
              takes salt air and wind-driven rain, while the same roof in Saratoga
              bakes. We specify and install for the conditions your building
              actually sits in.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {serviceRegions.map((region, index) => (
              <div
                key={region.name}
                data-reveal
                style={
                  { "--reveal-delay": `${index * 80}ms` } as React.CSSProperties
                }
                className="grid gap-6 border-t-2 border-ink-900 pt-8 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-12"
              >
                <div>
                  <h3 className="font-display text-2xl font-semibold uppercase leading-tight sm:text-3xl">
                    {region.name}
                  </h3>
                  <p className="mt-3 leading-relaxed">{region.blurb}</p>
                  <p className="mt-3 font-display text-lg font-semibold uppercase tracking-[0.08em] text-brand-800">
                    {region.cities.length} cities
                  </p>
                </div>
                <ServiceAreaChips cities={region.cities} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-bone-300 bg-bone-200">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div data-reveal="left">
              <Eyebrow>What we bring</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
                The same services in every city
              </h2>
              <p className="mt-4 leading-relaxed">
                Wherever you are on the list, you get the same crews, the same
                premium-grade materials and the same written warranty. Nothing is
                subcontracted out at the edge of the map.
              </p>
              <ul className="mt-6 space-y-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/${service.slug}`}
                      className="inline-flex items-center gap-2 border-b border-transparent font-medium transition-colors hover:border-brand-800 hover:text-brand-800"
                    >
                      {service.title}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div data-reveal="right" className="rounded-surface bg-ink-900 p-8 text-bone-200 shadow-card sm:p-10">
              <h2 className="font-display text-2xl font-semibold uppercase leading-tight text-white sm:text-3xl">
                Not sure if we cover you?
              </h2>
              <p className="mt-3 leading-relaxed text-bone-300">
                The list above covers where we work most often. If your address is
                just outside it, call and ask — we travel for the right job.
              </p>
              <dl className="mt-8 space-y-5 text-sm">
                <div>
                  <dt className="eyebrow text-brand-400">Phone</dt>
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
                  <dt className="eyebrow text-brand-400">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={site.emailHref}
                      className="text-white transition-colors hover:text-brand-400"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-brand-400">Office</dt>
                  <dd className="mt-1 not-italic text-white">
                    <address className="not-italic">
                      {site.address.street}
                      <br />
                      {site.address.city}, {site.address.state}{" "}
                      {site.address.zip}
                    </address>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-brand-400">Hours</dt>
                  <dd className="mt-1 text-white">{site.hours.display}</dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        heading="Roofing quotes across the Bay Area"
        body="Tell us your city and what the roof is doing. We will book an inspection and come back with an itemised price."
      />
    </>
  );
}
