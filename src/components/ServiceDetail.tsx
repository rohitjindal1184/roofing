import Image from "next/image";
import Link from "next/link";

import PageHero from "@/components/PageHero";
import { CtaBand, ServiceCard } from "@/components/sections";
import {
  ArrowRight,
  ButtonLink,
  CheckMark,
  Container,
  Eyebrow,
} from "@/components/ui";
import { serviceAreas, services, site, type Service } from "@/lib/site";

/**
 * Shared body for all six service pages. Each route file supplies its own
 * `generateMetadata`-equivalent `metadata` export and renders this component,
 * so page copy and structure stay in one place.
 */
export default function ServiceDetail({ service }: { service: Service }) {
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    url: `${site.url}/${service.slug}`,
    provider: {
      "@type": "RoofingContractor",
      "@id": `${site.url}/#organization`,
      name: site.name,
      telephone: site.phoneE164,
      url: site.url,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.stateCode,
        postalCode: site.address.zip,
        addressCountry: site.address.country,
      },
    },
    areaServed: serviceAreas.map((city) => ({ "@type": "City", name: city })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${site.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${site.url}/${service.slug}`,
      },
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
        eyebrow="Roofing service"
        title={service.title}
        description={service.benefit}
        image={{ src: service.heroImage.src, alt: service.heroImage.alt }}
        breadcrumbs={[
          { href: "/services", label: "Services" },
          { href: `/${service.slug}`, label: service.title },
        ]}
      />

      <section className="bg-bone-100">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
            <div>
              <figure data-reveal className="relative aspect-[16/9] overflow-hidden bg-ink-800">
                <Image
                  src={service.heroImage.src}
                  alt={service.heroImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 46rem, 92vw"
                  className="object-cover"
                />
              </figure>

              <div data-reveal className="mt-10">
                <Eyebrow>The problem</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
                  What we fix and why it matters
                </h2>
                {service.intro.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div data-reveal className="mt-12 grid gap-8 sm:grid-cols-2">
                <div className="border-t-2 border-brand-600 bg-bone-50 p-6">
                  <h2 className="font-display text-2xl font-semibold uppercase leading-tight">
                    {service.signs.heading}
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {service.signs.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckMark className="mt-0.5 text-brand-800" />
                        <span className="text-[0.9375rem] leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t-2 border-ink-900 bg-bone-50 p-6">
                  <h2 className="font-display text-2xl font-semibold uppercase leading-tight">
                    {service.process.heading}
                  </h2>
                  <ol className="mt-5 space-y-3">
                    {service.process.items.map((item, index) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center bg-ink-900 font-display text-xs font-bold text-white"
                        >
                          {index + 1}
                        </span>
                        <span className="text-[0.9375rem] leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div
                data-reveal
                className="mt-12 border border-bone-300 bg-bone-50 p-7 sm:p-9"
              >
                <h2 className="font-display text-2xl font-semibold uppercase leading-tight sm:text-3xl">
                  Every {service.title.toLowerCase()} we do includes
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "A written, itemised estimate before any work starts",
                    "Licensed, bonded and insured crews on site",
                    "Premium-grade materials, not builder-grade substitutes",
                    "Our industry-leading workmanship warranty",
                    "Daily clean-up and a magnet-swept site at the end",
                    "100% satisfaction guaranteed before we call it finished",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckMark className="mt-0.5 text-brand-800" />
                      <span className="text-[0.9375rem] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div data-reveal="right" className="bg-ink-900 p-7 text-bone-200">
                <h2 className="font-display text-2xl font-semibold uppercase leading-tight text-white">
                  Talk to a roofer, not a call centre
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-bone-300">
                  Free, no-obligation quotes across San Francisco and{" "}
                  {serviceAreas.length - 1} more Bay Area cities.
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-5 block font-display text-3xl font-semibold text-white transition-colors hover:text-brand-400"
                >
                  {site.phoneDisplay}
                </a>
                <p className="mt-1 text-sm text-bone-300">{site.hours.display}</p>
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

              <nav
                data-reveal="right"
                aria-label="Other services"
                className="mt-6 border border-bone-300 bg-bone-50 p-7"
              >
                <h2 className="font-display text-xl font-semibold uppercase tracking-[0.06em]">
                  Other services
                </h2>
                <ul className="mt-4 space-y-1">
                  {services
                    .filter((item) => item.slug !== service.slug)
                    .map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/${item.slug}`}
                          className="flex items-start gap-2 border-l-2 border-transparent py-2 pl-3 text-[0.9375rem] leading-snug transition-colors hover:border-brand-600 hover:text-brand-800"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-t border-bone-300 bg-bone-200">
        <Container className="py-16 sm:py-20">
          <div data-reveal>
            <Eyebrow>Keep looking</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
              Related roofing services
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <ServiceCard key={item.slug} service={item} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        heading={`Need ${service.title.toLowerCase()}?`}
        body="Book a free inspection and we will tell you exactly what the roof needs — including when the honest answer is that it can wait."
      />
    </>
  );
}
