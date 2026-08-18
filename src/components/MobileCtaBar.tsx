import Link from "next/link";

import { site } from "@/lib/site";
import { PhoneIcon } from "@/components/ui";

/**
 * Fixed bottom action bar, mobile only (hidden from `md` up, where the header
 * already carries a visible phone number and quote button).
 *
 * The matching bottom padding on <body> lives in globals.css so this bar never
 * covers page content or the footer.
 */
export default function MobileCtaBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 [transform:translate3d(0,0,0)] backface-hidden border-t border-white/10 bg-ink-900 shadow-float will-change-transform md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* iOS Safari can flicker/drop a fixed element's *children* during
          momentum scroll even once the fixed element itself has its own
          compositing layer — the GPU-layer hack has to be repeated here. */}
      <div className="grid grid-cols-2 [transform:translate3d(0,0,0)] backface-hidden">
        <a
          href={site.phoneHref}
          className="flex items-center justify-center gap-2 py-4 font-display text-lg font-semibold uppercase tracking-[0.08em] text-white"
        >
          <PhoneIcon className="h-[1.15rem] w-[1.15rem] text-brand-400" />
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 bg-brand-600 py-4 font-display text-lg font-semibold uppercase tracking-[0.08em] text-white"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
