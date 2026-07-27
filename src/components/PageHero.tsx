import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/ui";

type Crumb = { href: string; label: string };

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image?: { src: string; alt: string };
  breadcrumbs?: Crumb[];
};

/**
 * Compact page header used on every route except the home page: dark slate
 * band, optional real project photo behind a heavy gradient, breadcrumbs, h1.
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumbs = [],
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900">
      {image && (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-900/45"
          />
        </>
      )}

      <Container className="relative py-14 sm:py-20">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-bone-300">
              <li>
                <Link href="/" className="transition-colors hover:text-brand-400">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-white/30">
                    /
                  </span>
                  {index === breadcrumbs.length - 1 ? (
                    <span aria-current="page" className="text-white">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-brand-400"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <p className="eyebrow flex items-center gap-3 text-brand-400">
          <span aria-hidden="true" className="inline-block h-px w-8 bg-brand-400" />
          {eyebrow}
        </p>

        <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bone-200">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
