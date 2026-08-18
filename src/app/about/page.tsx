import type { Metadata } from "next";
import Image from "next/image";

import PageHero from "@/components/PageHero";
import { CtaBand, StatsBand } from "@/components/sections";
import {
  ArrowRight,
  ButtonLink,
  CheckMark,
  Container,
  Eyebrow,
} from "@/components/ui";
import { serviceAreas, site, trustPoints } from "@/lib/site";

export const metadata: Metadata = {
  title: "About ONE ROOFING — San Francisco Roofing Contractor",
  description:
    "ONE ROOFING is a licensed, bonded and insured roofing contractor on Battery Street in San Francisco. 300+ completed projects, 15+ in-house staff and an industry-leading warranty on every roof.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: `${site.url}/about`,
    title: "About ONE ROOFING — San Francisco Roofing Contractor",
    description:
      "A licensed, bonded and insured Bay Area roofing contractor with 300+ completed projects and a 15-strong in-house team.",
    images: [
      {
        url: "/images/one-roofing-crew-at-work.jpg",
        width: 4912,
        height: 4993,
        alt: "ONE ROOFING crew working at the eaves of a residential property",
      },
    ],
  },
};

const principles = [
  {
    title: "Inspect first, quote second",
    body: "Nobody gets a price over the phone based on a guess. We get on the roof, test properly, and price what is actually there — including the parts you cannot see from the ground.",
  },
  {
    title: "Our own crews, not a rotating cast",
    body: "Fifteen-plus people on staff means the foreman who walked your roof on day one is still there on the last day. Accountability is easier when nobody can point at a subcontractor.",
  },
  {
    title: "Premium-grade materials, every time",
    body: "The cheapest shingle on the shelf saves a few hundred dollars now and costs a roof later. We specify premium-grade materials and stand behind them with a written warranty.",
  },
  {
    title: "Honest answers, including 'not yet'",
    body: "If a roof has five good years left, we will say so. Award-recognised craftsmanship counts for very little if the sales pitch is dishonest.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A San Francisco roofing company that shows up"
        description="ONE ROOFING works out of 1160 Battery Street East, covering San Francisco, the Peninsula, the East Bay and the South Bay with a full in-house team."
        image={{
          src: "/images/one-roofing-crew-at-work.jpg",
          alt: "Two ONE ROOFING technicians working from a ladder at the roofline of a residential property",
        }}
        breadcrumbs={[{ href: "/about", label: "About" }]}
      />

      <section className="bg-bone-100">
        <Container className="py-16 sm:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div data-reveal="left" className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-surface bg-ink-800 shadow-card">
                <Image
                  src="/images/one-roofing-crew-at-work.jpg"
                  alt="ONE ROOFING technician carrying a toolbox up a ladder while a colleague measures the wall below"
                  fill
                  priority
                  sizes="(min-width: 1024px) 34rem, 92vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 right-6 max-w-[16rem] rounded-surface bg-ink-900 p-6 text-white shadow-float">
                <p className="font-display text-lg font-semibold uppercase leading-tight">
                  Licensed, Bonded &amp; Insured
                </p>
                <p className="mt-2 text-sm text-bone-300">
                  On every residential and commercial job site we set foot on.
                </p>
              </div>
            </div>

            <div data-reveal="right">
              <Eyebrow>Who we are</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
                Roofing is the whole business
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed">
                <p>
                  ONE ROOFING is a Bay Area roofing contractor based in San
                  Francisco. Roofs are not a side line for us — replacement,
                  repair, gutters, skylights and inspection work is all we do,
                  which is why we can put a real warranty behind it.
                </p>
                <p>
                  Over 300 projects have gone out the door: residential re-roofs
                  in the city, flat roof systems on commercial buildings, storm
                  damage repairs, and the routine inspections that stop small
                  problems becoming expensive ones. More than 250 clients have
                  come out the other side of that work satisfied.
                </p>
                <p>
                  The team is fifteen-plus people strong — estimators, foremen and
                  installers who work for us rather than for whichever subcontractor
                  was cheapest that month. Bay Area weather is not gentle on
                  roofs, so we install for the conditions we actually get:
                  wind-driven rain, salt air, fog and long dry stretches that
                  quietly bake a roof covering into brittleness.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="primary">
                  Get a Free Quote
                  <ArrowRight />
                </ButtonLink>
                <ButtonLink href={site.phoneHref} variant="onLight">
                  {site.phoneDisplay}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <StatsBand />

      <section className="bg-bone-200">
        <Container className="py-16 sm:py-24">
          <div data-reveal className="max-w-2xl">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
              Four things we do not compromise on
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-surface border border-bone-300 bg-bone-300 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                data-reveal
                style={
                  { "--reveal-delay": `${(index % 2) * 90}ms` } as React.CSSProperties
                }
                className="bg-bone-50 p-7 sm:p-9"
              >
                <p
                  aria-hidden="true"
                  className="font-display text-4xl font-bold leading-none text-brand-500"
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold uppercase leading-tight">
                  {principle.title}
                </h3>
                <p className="mt-3 leading-relaxed">{principle.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bone-100">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div data-reveal="left">
              <Eyebrow>What is covered</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
                The guarantees behind the work
              </h2>
              <ul className="mt-8 space-y-5">
                {trustPoints.map((point) => (
                  <li key={point.title} className="flex items-start gap-4">
                    <CheckMark className="mt-1 text-brand-800" />
                    <span>
                      <span className="block font-display text-xl font-semibold uppercase tracking-[0.03em] text-ink-900">
                        {point.title}
                      </span>
                      <span className="mt-1 block leading-relaxed">
                        {point.detail}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div data-reveal="right" className="relative min-h-[22rem] overflow-hidden rounded-surface bg-ink-800 shadow-card">
              <Image
                src="/images/project-roof-detail-large.jpg"
                alt="ONE ROOFING foreman standing between newly raised timber roof trusses on a Bay Area project"
                fill
                sizes="(min-width: 1024px) 34rem, 92vw"
                className="object-cover"
              />
            </div>
          </div>

          <div
            data-reveal
            className="mt-14 border-t border-bone-300 pt-10 text-lg leading-relaxed"
          >
            <h2 className="font-display text-2xl font-semibold uppercase leading-tight sm:text-3xl">
              Where you will find us
            </h2>
            <p className="mt-3 max-w-3xl">
              Our office sits at {site.address.street}, {site.address.city},{" "}
              {site.address.state} {site.address.zip}. From there our crews cover{" "}
              {serviceAreas.length} Bay Area cities — San Francisco and the
              Peninsula, across to Oakland and Berkeley in the East Bay, and down
              through San Mateo, Palo Alto and San Jose.
            </p>
          </div>
        </Container>
      </section>

      <CtaBand
        heading="Let's look at your roof"
        body="Free inspection, written estimate, no obligation. Call us or send the details and we will get someone out."
      />
    </>
  );
}
