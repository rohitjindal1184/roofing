import type { Metadata } from "next";

import PageHero from "@/components/PageHero";
import { CtaBand, ServicesGrid, TrustBar } from "@/components/sections";
import { ArrowRight, ButtonLink, Container, Eyebrow } from "@/components/ui";
import { additionalServices, serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Roofing Services in San Francisco & the Bay Area",
  description:
    "Roof replacement, flat roofing, gutter and downspout replacement, skylights, leak repair and professional inspections from ONE ROOFING — licensed, bonded and insured across the Bay Area.",
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: `${site.url}/services`,
    title: "Roofing Services in San Francisco & the Bay Area | ONE ROOFING",
    description:
      "Six core roofing services for residential and commercial properties across San Francisco and 30+ Bay Area cities.",
    images: [
      {
        url: "/images/project-tile-roof-large.jpg",
        alt: "ONE ROOFING installer working on a residential shingle roof",
      },
    ],
  },
};

const segments = [
  {
    title: "Residential roofing",
    body: "Single-family homes, townhouses and multi-unit residential buildings. Full re-roofs, targeted repairs, gutters, skylights and annual inspections — scheduled around the people living underneath the work.",
  },
  {
    title: "Commercial roofing",
    body: "Flat and low-slope roof systems for offices, retail units and industrial buildings. Drainage correction, membrane replacement, leak tracing and documented condition reports for owners and property managers.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Roofing services for every part of the Bay Area"
        description="Six core services delivered by our own crews — plus the smaller jobs that keep a roof out of trouble. Every one starts with a proper inspection and a written estimate."
        image={{
          src: "/images/project-tile-roof-large.jpg",
          alt: "ONE ROOFING installer working across the ridge of a residential shingle roof",
        }}
        breadcrumbs={[{ href: "/services", label: "Services" }]}
      />

      <TrustBar />

      <section className="bg-bone-100">
        <Container className="py-16 sm:py-24">
          <div data-reveal className="max-w-2xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
              Pick the job you have
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              Not sure which one you need? That is what the inspection is for.
              Call {site.phoneDisplay} and describe what you are seeing — we will
              tell you honestly whether it is a repair or a replacement.
            </p>
          </div>

          <div className="mt-12">
            <ServicesGrid />
          </div>
        </Container>
      </section>

      <section className="border-t border-bone-300 bg-bone-200">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
            <div data-reveal="left">
              <Eyebrow>Who we work for</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
                Residential and commercial
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {segments.map((segment, index) => (
                <div
                  key={segment.title}
                  data-reveal
                  style={
                    { "--reveal-delay": `${index * 90}ms` } as React.CSSProperties
                  }
                  className="rounded-b-surface border-t-2 border-brand-600 bg-bone-50 p-7 shadow-card"
                >
                  <h3 className="font-display text-2xl font-semibold uppercase leading-tight">
                    {segment.title}
                  </h3>
                  <p className="mt-3 leading-relaxed">{segment.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            data-reveal
            className="mt-12 flex flex-col gap-5 rounded-surface bg-bone-50 p-7 shadow-card sm:flex-row sm:items-center sm:justify-between sm:p-9"
          >
            <div>
              <h2 className="font-display text-2xl font-semibold uppercase leading-tight sm:text-3xl">
                We also handle the smaller jobs
              </h2>
              <p className="mt-2 leading-relaxed">
                {additionalServices.join(", ")} — often booked alongside a roof
                inspection or gutter replacement.
              </p>
            </div>
            <ButtonLink href="/contact" variant="primary" className="shrink-0">
              Ask about a job
              <ArrowRight />
            </ButtonLink>
          </div>

          <p data-reveal className="mt-8 text-[0.9375rem]">
            All services available across {serviceAreas.length} Bay Area cities,
            from San Francisco to San Jose.
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
