import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, ButtonLink, Container } from "@/components/ui";
import { navLinks, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "That page does not exist. Browse ONE ROOFING's roofing services or call us for a free quote.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="bg-ink-900">
      <Container className="py-20 sm:py-28">
        <p className="eyebrow flex items-center gap-3 text-brand-400">
          <span aria-hidden="true" className="inline-block h-px w-8 bg-brand-400" />
          Error 404
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
          That page is not on this roof
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-bone-200">
          The link may be old or mistyped. Here is where everything actually
          lives — or call {site.phoneDisplay} and we will point you the right way.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" variant="primary">
            Back to home
            <ArrowRight />
          </ButtonLink>
          <ButtonLink href={site.phoneHref} variant="onDark">
            Call {site.phoneDisplay}
          </ButtonLink>
        </div>

        <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2">
          <nav aria-label="Main pages">
            <h2 className="font-display text-xl font-semibold uppercase tracking-[0.1em] text-white">
              Main pages
            </h2>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-bone-300 transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Roofing services">
            <h2 className="font-display text-xl font-semibold uppercase tracking-[0.1em] text-white">
              Roofing services
            </h2>
            <ul className="mt-4 space-y-2">
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
          </nav>
        </div>
      </Container>
    </section>
  );
}
