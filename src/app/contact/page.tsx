import type { Metadata } from "next";

import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { Container, Eyebrow, PhoneIcon } from "@/components/ui";
import { serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact ONE ROOFING — Free Roofing Quotes in San Francisco",
  description: `Call ${site.phoneDisplay}, email ${site.email} or send the form for a free roofing quote. ONE ROOFING, ${site.address.street}, ${site.address.city}. Open ${site.hours.display}, with 24/7 emergency support.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: `${site.url}/contact`,
    title: "Contact ONE ROOFING — Free Roofing Quotes in San Francisco",
    description: `Free, no-obligation roofing quotes across ${serviceAreas.length} Bay Area cities. Call ${site.phoneDisplay} or send us the details.`,
    images: [
      {
        url: "/images/hero-roofing-crew-panorama.jpg",
        width: 7360,
        height: 2808,
        alt: "ONE ROOFING crew on a Bay Area residential job site",
      },
    ],
  },
};

const mapQuery = encodeURIComponent(
  `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`,
);

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${site.name}`,
    url: `${site.url}/contact`,
    mainEntity: {
      "@type": "RoofingContractor",
      "@id": `${site.url}/#organization`,
      name: site.name,
      telephone: site.phoneE164,
      email: site.email,
      url: site.url,
      openingHours: site.hours.schema,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.stateCode,
        postalCode: site.address.zip,
        addressCountry: site.address.country,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Contact"
        title="Get a free roofing quote"
        description="Call, email or send the form. Inspections and estimates are free, itemised and carry no obligation — and if a leak is active right now, phone us."
        breadcrumbs={[{ href: "/contact", label: "Contact" }]}
      />

      {/* Immediate-contact strip — no form required. */}
      <section aria-label="Direct contact details" className="bg-ink-800">
        <Container>
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            <li className="border-t border-white/10 py-6 first:border-t-0 sm:[&:nth-child(-n+2)]:border-t-0 lg:border-t-0">
              <span className="eyebrow block text-brand-400">Call</span>
              <a
                href={site.phoneHref}
                className="mt-2 flex items-center gap-2 font-display text-2xl font-semibold text-white transition-colors hover:text-brand-400"
              >
                <PhoneIcon className="text-brand-500" />
                {site.phoneDisplay}
              </a>
              <p className="mt-1 text-sm text-bone-300">
                24/7 emergency roofing support
              </p>
            </li>
            <li className="border-t border-white/10 py-6 sm:[&:nth-child(-n+2)]:border-t-0 lg:border-t-0">
              <span className="eyebrow block text-brand-400">Email</span>
              <a
                href={site.emailHref}
                className="mt-2 block font-display text-2xl font-semibold text-white transition-colors hover:text-brand-400"
              >
                {site.email}
              </a>
              <p className="mt-1 text-sm text-bone-300">
                Estimate requests and documents
              </p>
            </li>
            <li className="border-t border-white/10 py-6 sm:[&:nth-child(-n+2)]:border-t-0 lg:border-t-0">
              <span className="eyebrow block text-brand-400">Office</span>
              <address className="mt-2 not-italic text-white">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-400"
                >
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </a>
              </address>
            </li>
            <li className="border-t border-white/10 py-6 sm:[&:nth-child(-n+2)]:border-t-0 lg:border-t-0">
              <span className="eyebrow block text-brand-400">Hours</span>
              <p className="mt-2 text-white">{site.hours.daysDisplay}</p>
              <p className="text-white">{site.hours.timeDisplay}</p>
              <p className="mt-1 text-sm text-bone-300">
                Emergencies answered outside these hours
              </p>
            </li>
          </ul>
        </Container>
      </section>

      <section className="bg-bone-100">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-16">
            <div data-reveal>
              <ContactForm />
            </div>

            <aside className="space-y-6">
              <div data-reveal="right" className="rounded-surface bg-bone-50 p-7 shadow-card">
                <Eyebrow>What happens next</Eyebrow>
                <ol className="mt-5 space-y-4">
                  {[
                    "We call or email you back to confirm the details and book a time.",
                    "A ONE ROOFING estimator inspects the roof properly — including the parts you cannot see from the ground.",
                    "You get a written, itemised estimate with options, and no pressure to accept it.",
                  ].map((step, index) => (
                    <li key={step} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-ink-900 font-display text-sm font-bold text-white"
                      >
                        {index + 1}
                      </span>
                      <span className="text-[0.9375rem] leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div data-reveal="right" className="rounded-surface bg-ink-900 p-7 text-bone-200 shadow-card">
                <h2 className="font-display text-2xl font-semibold uppercase leading-tight text-white">
                  Active leak right now?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-bone-300">
                  Do not wait on a form. Our emergency line is answered around the
                  clock — we will talk you through protecting the interior and get
                  someone out.
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-5 inline-flex items-center gap-2 rounded-control bg-brand-600 px-6 py-3 font-display text-lg font-semibold uppercase tracking-[0.08em] text-white shadow-button transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-button-hover"
                >
                  <PhoneIcon className="h-[1.15rem] w-[1.15rem]" />
                  Call Now
                </a>
              </div>

              <div data-reveal="right" className="rounded-surface bg-bone-50 p-7 shadow-card">
                <h2 className="font-display text-xl font-semibold uppercase tracking-[0.06em]">
                  Serving the whole Bay Area
                </h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed">
                  We quote across {serviceAreas.length} cities — San Francisco and
                  the Peninsula, the East Bay and the South Bay. Licensed, bonded
                  and insured on every one.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
