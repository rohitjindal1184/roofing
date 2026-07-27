import Image from "next/image";
import Link from "next/link";

import {
  additionalServices,
  cities,
  cityPath,
  services,
  site,
} from "@/lib/site";
import { ArrowRight, Container } from "@/components/ui";

const year = 2026;

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-bone-200">
      {/* Contact strip */}
      <div className="border-b border-white/10 bg-ink-950">
        <Container className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow text-brand-400">Call</p>
            <a
              href={site.phoneHref}
              className="mt-2 block font-display text-2xl font-semibold text-white transition-colors hover:text-brand-400"
            >
              {site.phoneDisplay}
            </a>
            <p className="mt-1 text-sm text-bone-300">
              24/7 emergency roofing support
            </p>
          </div>
          <div>
            <p className="eyebrow text-brand-400">Email</p>
            <a
              href={site.emailHref}
              className="mt-2 block font-display text-2xl font-semibold text-white transition-colors hover:text-brand-400"
            >
              {site.email}
            </a>
            <p className="mt-1 text-sm text-bone-300">
              Estimates answered same business day
            </p>
          </div>
          <div>
            <p className="eyebrow text-brand-400">Visit</p>
            <address className="mt-2 not-italic text-white">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </address>
          </div>
          <div>
            <p className="eyebrow text-brand-400">Hours</p>
            <p className="mt-2 text-white">{site.hours.daysDisplay}</p>
            <p className="text-white">{site.hours.timeDisplay}</p>
            <p className="mt-1 text-sm text-bone-300">
              Emergencies answered outside these hours
            </p>
          </div>
        </Container>
      </div>

      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Image
            src="/images/one-roofing-logo-white.png"
            alt={`${site.name} logo`}
            width={198}
            height={80}
            className="h-12 w-auto"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-bone-300">
            ONE ROOFING is a licensed, bonded and insured roofing contractor based
            in San Francisco, serving homeowners, landlords and commercial
            property owners across the Bay Area. Premium-grade materials,
            award-recognised craftsmanship and an industry-leading warranty on
            every roof we build.
          </p>
          <a
            href={site.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 border border-white/25 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-brand-500 hover:text-brand-400"
          >
            Read our reviews on Google
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <nav aria-label="Services" className="lg:col-span-3">
          <h2 className="font-display text-lg font-semibold uppercase tracking-[0.14em] text-white">
            Services
          </h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/${service.slug}`}
                  className="text-bone-300 transition-colors hover:text-brand-400"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-bone-300">
            We also handle {additionalServices.join(", ").toLowerCase()}.
          </p>
        </nav>

        <nav aria-label="Company" className="lg:col-span-2">
          <h2 className="font-display text-lg font-semibold uppercase tracking-[0.14em] text-white">
            Company
          </h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li>
              <Link
                href="/about"
                className="text-bone-300 transition-colors hover:text-brand-400"
              >
                About ONE ROOFING
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="text-bone-300 transition-colors hover:text-brand-400"
              >
                Project gallery
              </Link>
            </li>
            <li>
              <Link
                href="/service-areas"
                className="text-bone-300 transition-colors hover:text-brand-400"
              >
                Service areas
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-bone-300 transition-colors hover:text-brand-400"
              >
                All services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-bone-300 transition-colors hover:text-brand-400"
              >
                Request a free quote
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Where we work" className="md:col-span-2 lg:col-span-3">
          <h2 className="font-display text-lg font-semibold uppercase tracking-[0.14em] text-white">
            Where we work
          </h2>
          <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-1.5 text-sm leading-relaxed text-bone-300">
            {cities.slice(0, 16).map((city, index) => (
              <li key={city.id} className="flex items-center gap-2">
                {index > 0 && (
                  <span aria-hidden="true" className="text-white/25">
                    ·
                  </span>
                )}
                <Link
                  href={cityPath(city)}
                  className="transition-colors hover:text-brand-400"
                >
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/service-areas"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 transition-colors hover:text-brand-500"
          >
            See all {cities.length} Bay Area cities
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </nav>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-sm text-bone-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>Licensed, Bonded &amp; Insured · San Francisco, California</p>
        </Container>
      </div>
    </footer>
  );
}
