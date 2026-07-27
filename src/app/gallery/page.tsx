import type { Metadata } from "next";
import Image from "next/image";

import PageHero from "@/components/PageHero";
import { CtaBand } from "@/components/sections";
import { Container, Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Project Gallery — Bay Area Roofing Work",
  description:
    "Photographs from ONE ROOFING job sites across San Francisco and the Bay Area: residential re-roofs, commercial flat roof systems, skylights, gutters and inspections.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    type: "website",
    url: `${site.url}/gallery`,
    title: "Project Gallery — Bay Area Roofing Work | ONE ROOFING",
    description:
      "Real photographs from ONE ROOFING job sites across San Francisco and the Bay Area.",
    images: [
      {
        url: "/images/project-roof-detail-large.jpg",
        alt: "ONE ROOFING foreman standing between newly raised roof trusses",
      },
    ],
  },
};

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  tag: string;
  span: string;
  aspect: string;
};

const gallery: GalleryItem[] = [
  {
    src: "/images/project-tile-roof-large.jpg",
    alt: "ONE ROOFING installer kneeling on a steep shingle roof, nailing a course into place with a chimney vent behind",
    caption: "Residential re-roof, steep-slope shingle installation",
    tag: "Roof replacement",
    span: "lg:col-span-8",
    aspect: "aspect-[16/9]",
  },
  {
    src: "/images/project-shingle-roof-large.jpg",
    alt: "ONE ROOFING technician at the roof edge with a toolbox, photographed against an open sky",
    caption: "Crew setting up at the eaves before a tear-off",
    tag: "On site",
    span: "lg:col-span-4",
    aspect: "aspect-[16/9] lg:aspect-[4/5]",
  },
  {
    src: "/images/project-completed-roof.jpg",
    alt: "Close-up of a roofer driving a nail into a freshly laid architectural asphalt shingle",
    caption: "Hand-nailing architectural shingles on a city home",
    tag: "Asphalt shingles",
    span: "lg:col-span-4",
    aspect: "aspect-[16/9] lg:aspect-[4/5]",
  },
  {
    src: "/images/service-flat-roof-replacement.jpg",
    alt: "Two roofers torch-applying a modified bitumen membrane across a flat commercial roof deck",
    caption: "Commercial flat roof membrane replacement",
    tag: "Flat roofing",
    span: "lg:col-span-8",
    aspect: "aspect-[16/9]",
  },
  {
    src: "/images/project-roof-work-b.jpg",
    alt: "Two ONE ROOFING installers working side by side, hammering shingles along a roof slope",
    caption: "Two-person crew closing out a shingle slope",
    tag: "Roof replacement",
    span: "lg:col-span-6",
    aspect: "aspect-[16/10]",
  },
  {
    src: "/images/service-skylight-replacement.webp",
    alt: "Weather-tight skylight flashed into a shingle roof next to vent penetrations",
    caption: "Skylight replaced and re-flashed into the surrounding roof",
    tag: "Skylights",
    span: "lg:col-span-6",
    aspect: "aspect-[16/10]",
  },
  {
    src: "/images/service-roof-inspection.jpg",
    alt: "Two ONE ROOFING inspectors at a roof edge reviewing findings on a tablet",
    caption: "Documented inspection before a property sale",
    tag: "Inspections",
    span: "lg:col-span-4",
    aspect: "aspect-[3/2]",
  },
  {
    src: "/images/service-roof-leakage-repair.jpg",
    alt: "Gloved hands of a roofer lifting a shingle course to reach the source of a leak",
    caption: "Tracing a leak back to its actual entry point",
    tag: "Leak repair",
    span: "lg:col-span-4",
    aspect: "aspect-[3/2]",
  },
  {
    src: "/images/why-choose-one-roofing.jpg",
    alt: "ONE ROOFING technician on a ladder at a home's eaves, hammer in hand and toolbox resting on the roof edge",
    caption: "Gutter line and eaves work on a Peninsula home",
    tag: "Gutters",
    span: "lg:col-span-4",
    aspect: "aspect-[3/2]",
  },
  {
    src: "/images/project-roof-detail-large.jpg",
    alt: "ONE ROOFING foreman standing between newly raised timber roof trusses against a clear blue sky",
    caption: "Structural framing checked before the roof covering goes on",
    tag: "Structure",
    span: "lg:col-span-7",
    aspect: "aspect-[16/9]",
  },
  {
    src: "/images/one-roofing-crew-at-work.jpg",
    alt: "Two ONE ROOFING technicians working from a ladder at the roofline and wall of a residential property",
    caption: "Crew measuring up ahead of a gutter and fascia replacement",
    tag: "On site",
    span: "lg:col-span-5",
    aspect: "aspect-[16/9] lg:aspect-[4/3]",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Roofs we have built, repaired and inspected"
        description="Photographs taken on ONE ROOFING job sites across San Francisco and the Bay Area — residential re-roofs, commercial flat roof systems, skylights, gutters and inspections."
        image={{
          src: "/images/project-roof-detail-large.jpg",
          alt: "ONE ROOFING foreman standing between newly raised roof trusses on a Bay Area project",
        }}
        breadcrumbs={[{ href: "/gallery", label: "Gallery" }]}
      />

      <section className="bg-bone-100">
        <Container className="py-14 sm:py-20">
          <div data-reveal className="max-w-2xl">
            <Eyebrow>Project gallery</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
              300+ projects, a selection of them here
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              Every image below is from our own work. If you want to see something
              closer to your own building — a specific roof type, a similar
              pitch, a comparable commercial deck — call {site.phoneDisplay} and
              ask.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
            {gallery.map((item, index) => (
              <figure
                key={item.src + item.caption}
                data-reveal
                style={
                  { "--reveal-delay": `${(index % 3) * 80}ms` } as React.CSSProperties
                }
                className={`group relative overflow-hidden bg-ink-800 ${item.span}`}
              >
                <div className={`relative w-full ${item.aspect}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, (min-width: 640px) 46vw, 92vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent p-5 pt-12">
                  <span className="eyebrow block text-brand-400">{item.tag}</span>
                  <span className="mt-1 block text-sm font-medium text-white">
                    {item.caption}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        heading="Want your roof on this page?"
        body="Book a free inspection and a written estimate. We will tell you what the roof needs and what it will cost — before anyone picks up a hammer."
      />
    </>
  );
}
