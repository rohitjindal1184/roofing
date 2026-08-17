"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { navLinks, services, site } from "@/lib/site";
import { ArrowRight, Container, PhoneIcon } from "@/components/ui";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/services") {
    return (
      pathname === "/services" ||
      services.some((service) => pathname === `/${service.slug}`)
    );
  }
  return pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setMenuOpen(false);

  // Lifts the main bar off the page with a soft shadow once content has
  // scrolled beneath it — flat while pinned to the top, like the rest of
  // the system's flat-by-default surfaces.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the menu and returns focus to the toggle.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    // The whole header is the sticky element. On lg the negative offset equals
    // the utility strip's height, so the strip scrolls away and the main bar
    // pins flush to the top. (A `sticky` main bar nested inside a short header
    // would unpin as soon as the header scrolled past.)
    <header className="sticky top-0 z-50 lg:top-[-2.5rem]">
      {/* Utility strip: NAP details, always one tap/click away. */}
      <div className="hidden bg-ink-950 text-[0.8125rem] text-bone-300 lg:block">
        <Container className="flex items-center justify-between gap-6 py-2.5">
          <p className="flex items-center gap-6">
            <span>
              {site.address.street}, {site.address.city}, {site.address.stateCode}{" "}
              {site.address.zip}
            </span>
            <span aria-hidden="true" className="h-3 w-px bg-white/20" />
            <span>{site.hours.display}</span>
          </p>
          <p className="flex items-center gap-6">
            <a
              href={site.emailHref}
              className="transition-colors hover:text-brand-400"
            >
              {site.email}
            </a>
            <span aria-hidden="true" className="h-3 w-px bg-white/20" />
            <span className="font-semibold text-white">
              Licensed, Bonded &amp; Insured
            </span>
          </p>
        </Container>
      </div>

      {/* Main bar */}
      <div
        className={`border-b border-white/10 bg-ink-900 transition-shadow duration-200 ${
          scrolled ? "shadow-float" : ""
        }`}
      >
        <Container className="flex items-center justify-between gap-6 py-3.5">
          <Link
            href="/"
            className="shrink-0"
            aria-label={`${site.name} — home`}
          >
            <Image
              src="/images/one-roofing-logo-white.png"
              alt={`${site.name} logo`}
              width={198}
              height={80}
              priority
              className="h-10 w-auto sm:h-12"
            />
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(pathname, link.href);

                if (link.href === "/services") {
                  return (
                    <li key={link.href} className="group relative">
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center gap-1.5 px-3 py-2 font-display text-lg font-semibold uppercase tracking-[0.06em] transition-colors ${
                          active
                            ? "text-brand-400"
                            : "text-bone-200 hover:text-brand-400"
                        }`}
                      >
                        {link.label}
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 12 12"
                          className="h-2.5 w-2.5"
                          fill="none"
                        >
                          <path
                            d="m2 4 4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </Link>
                      <div className="invisible absolute left-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-surface border border-white/10 bg-ink-800 opacity-0 shadow-float transition-opacity duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                        <ul className="py-2">
                          {services.map((service) => (
                            <li key={service.slug}>
                              <Link
                                href={`/${service.slug}`}
                                className="block border-l-2 border-transparent px-4 py-2.5 text-sm text-bone-200 transition-colors hover:border-brand-500 hover:bg-ink-700 hover:text-white"
                              >
                                {service.navTitle}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`block px-3 py-2 font-display text-lg font-semibold uppercase tracking-[0.06em] transition-colors ${
                        active
                          ? "text-brand-400"
                          : "text-bone-200 hover:text-brand-400"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2.5 text-white transition-colors hover:text-brand-400 md:flex"
            >
              <PhoneIcon className="text-brand-500" />
              <span className="leading-tight">
                <span className="block text-[0.6875rem] uppercase tracking-[0.16em] text-bone-300">
                  Call us
                </span>
                <span className="block font-display text-xl font-semibold">
                  {site.phoneDisplay}
                </span>
              </span>
            </a>

            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-control bg-brand-600 px-6 py-3 font-display text-lg font-semibold uppercase tracking-[0.08em] text-white shadow-button transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-button-hover lg:inline-flex"
            >
              Get a Free Quote
              <ArrowRight />
            </Link>

            {/* Mobile menu toggle */}
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className="flex items-center gap-2 rounded-control border border-white/25 px-3.5 py-2.5 font-display text-base font-semibold uppercase tracking-[0.08em] text-white lg:hidden"
            >
              <span className="relative flex h-3.5 w-5 flex-col justify-between">
                <span
                  aria-hidden="true"
                  className={`block h-0.5 w-full bg-current transition-transform duration-200 ${
                    menuOpen ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`block h-0.5 w-full bg-current transition-opacity duration-200 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`block h-0.5 w-full bg-current transition-transform duration-200 ${
                    menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </Container>

        {/* Mobile navigation panel */}
        {menuOpen && (
          <div
            ref={panelRef}
            id="mobile-nav"
            className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/10 bg-ink-900 shadow-float lg:hidden"
          >
            <nav aria-label="Mobile primary">
              <Container className="py-4">
                <ul className="divide-y divide-white/10">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        aria-current={
                          isActive(pathname, link.href) ? "page" : undefined
                        }
                        className={`block py-3.5 font-display text-xl font-semibold uppercase tracking-[0.06em] ${
                          isActive(pathname, link.href)
                            ? "text-brand-400"
                            : "text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <p className="eyebrow mt-6 mb-2 text-bone-300">Our Services</p>
                <ul className="space-y-1 border-l-2 border-brand-600 pl-4">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/${service.slug}`}
                        onClick={closeMenu}
                        className="block py-2 text-[0.9375rem] text-bone-200"
                      >
                        {service.navTitle}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-2 border-t border-white/10 pt-5 text-sm text-bone-300">
                  <a
                    href={site.phoneHref}
                    className="block font-display text-2xl font-semibold text-white"
                  >
                    {site.phoneDisplay}
                  </a>
                  <a href={site.emailHref} className="block">
                    {site.email}
                  </a>
                  <p>{site.hours.display}</p>
                </div>
              </Container>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
