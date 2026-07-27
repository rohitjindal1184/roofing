"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Mounted once in the root layout. Watches the document for elements carrying a
 * `data-reveal` attribute and flips them to `data-revealed="true"` as they enter
 * the viewport, which triggers the CSS transition defined in globals.css.
 *
 * Doing it centrally means every section stays a server component — no
 * per-section client boundary and no animation library in the bundle.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = () =>
      Array.from(
        document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])"),
      );

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      nodes().forEach((node) => node.setAttribute("data-revealed", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).setAttribute("data-revealed", "true");
          observer.unobserve(entry.target);
        }
      },
      // Generous top/bottom margin so content is already revealed by the time
      // it is actually on screen, and so crawlers rendering with a tall
      // viewport never capture the pre-reveal (opacity: 0) state.
      { rootMargin: "240px 0px 240px 0px", threshold: 0 },
    );

    const observeAll = () => nodes().forEach((node) => observer.observe(node));
    observeAll();

    // Client-side navigation and streamed content add nodes after mount.
    const mutations = new MutationObserver(observeAll);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [pathname]);

  return null;
}
