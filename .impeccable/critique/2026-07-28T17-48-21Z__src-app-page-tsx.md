---
target: homepage (src/app/page.tsx)
total_score: 30
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 2
timestamp: 2026-07-28T17-48-21Z
slug: src-app-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | Clear nav/hover/menu states, but every section below the hero starts at `opacity:0` and depends on JS hydration + IntersectionObserver to appear — a status-visibility risk on slow connections. |
| 2 | Match Between System and Real World | 4/4 | Plain, specific, non-jargon copy ("curling edges," "ponding water," "itemised price") throughout. |
| 3 | User Control and Freedom | 3/4 | Mobile menu has correct Escape-to-close + focus return, but no backdrop/outside-tap dismissal. |
| 4 | Consistency and Standards | 4/4 | Square corners, button variants, type roles applied with no exceptions found. |
| 5 | Error Prevention | 3/4 | No forms on this page; external links correctly use `rel="noopener noreferrer"`. Little surface area to fail. |
| 6 | Recognition Rather Than Recall | 4/4 | Phone number repeated at 6+ points; nothing to remember across scroll distance. |
| 7 | Flexibility and Efficiency of Use | n/a | Genuinely inapplicable — first-visit persuasion page, no accounts/repeat-user shortcuts to design for. |
| 8 | Aesthetic and Minimalist Design | 3/4 | Strong restraint overall; docked for the "Why choose us" section's orange overload and the unbroken 31-city chip wall. |
| 9 | Error Recovery | 3/4 | No error states exist to fail at — a pass by absence, not by demonstrated design. |
| 10 | Help and Documentation | 3/4 | Good pre-commitment navigation (services/gallery/areas links), but the one piece of third-party trust proof is a raw Google search link, not embedded content. |
| **Total** | | **30/36** | **Good (83%)** |

*(Heuristic #7 scored n/a — Persuade-mode landing page with no repeat-user surface. Max renormalized to 9 heuristics × 4.)*

## Design Specificity Verdict

**LLM assessment**: Not a reskinned template. The load-bearing content is genuinely specific — 31 real Bay Area cities with distinct climate/building-stock copy, six services described in the failure-mode vocabulary PRODUCT.md demands ("granule loss," "no revolving-door subs"), and real stats/address/warranty language. A generic home-services or SaaS company could not drop this content in unchanged. Where it drifts toward generic is presentation, not copy: the hero headline is a conventional tough-contractor line, the animated `CountUp` counters are a SaaS-dashboard trope sitting oddly next to copy that says "a track record you can check, not a slogan," and the "Why choose us" checkmark list is a stock benefits-list pattern. The visual system (Job Site Ledger aesthetic, single orange accent, Barlow Condensed stamps) is distinctive and consistently executed — it's doing most of the "this looks bespoke" work, with genuinely specific content underneath it.

**Deterministic scan**: `detect.mjs` ran clean (exit 2, 6 advisory findings, 0 blocking). 5× `design-system-font-size` (`page.tsx:185`, `page.tsx:270`, `Header.tsx:178`, `Header.tsx:266`, `sections.tsx:133`), 1× `design-system-radius` (`globals.css:75`). Two are false positives against DESIGN.md: the `2.75rem` hero H1 is the documented Display clamp base, and the `2px` radius is the documented focus-ring exception to the Square-Corner Rule. The remaining three `0.9375rem`/`0.6875rem` sizes (nav utility strip, mobile-bar text, card benefit copy) aren't in DESIGN.md's documented Hierarchy list — likely a documentation gap (an undocumented "small/caption" role) rather than a code bug.

**Visual evidence**: No live overlay was injected (this project's browser-automation policy routes through the `/browse` skill rather than script-injected overlays); evidence instead comes from direct screenshots of the live page at desktop (1440px) and mobile (390px) widths. No broken images, no layout overflow/clipping at either width. Primary CTA button (white text on `#c74a18` orange) measured at an eyeballed ~3.5–4:1 contrast — below DESIGN.md's claimed 4.5:1 for that pairing and worth a precise audit. Header nav text on the dark bar is comfortably >10:1. The mobile sticky CTA bar renders correctly, full-width, no overlap with page content.

## Overall Impression

The site delivers on its own brief more than it fails it — the "Job Site Ledger" system is executed with real discipline, and the underlying content is specific rather than templated. The gap is between what the design system *says* about itself and two places where the homepage doesn't fully follow through: it doesn't triage its most urgent visitor (someone with an active leak) differently from someone casually planning a project, and it ignores IA data the project already built (`serviceRegions`) in favor of dumping all 31 cities in one unchunked wall — a self-inflicted cognitive-load problem with an existing fix already used correctly in the Footer.

## What's Working

1. **The hairline-grid stats band** executes the Job Site Ledger north star precisely — bordered cells, `gap-px` dividers, condensed uppercase labels, orange numerals on ink. The clearest moment where system and brand promise reinforce each other.
2. **Mobile CTA bar + header phone persistence.** The sticky bottom bar plus always-visible header phone number keep both conversion actions within thumb-reach at every scroll position — exactly right for a Persuade-mode page.
3. **Mobile menu accessibility.** Escape-to-close with focus return to the toggle, `aria-expanded`/`aria-controls`, scroll lock, and first-link auto-focus are correctly implemented — better than most marketing sites bother with.

## Priority Issues

**[P1] Hero doesn't triage the emergency visitor from the planning visitor**
*Why it matters*: PRODUCT.md names active leaks/storm damage as the primary traffic trigger, but the hero presents "Get a Free Quote" and "Call [number]" as two visually equal, generically-labeled buttons under a toughness-themed headline. The one urgency signal ("24/7 emergency line") is a small stat line below the CTAs — a visitor mid-emergency has to search for it.
*Fix*: Give the emergency path its own distinct visual treatment near the top (a short, high-contrast line like "Active leak or storm damage? Call now — we answer 24/7"), separate from the calm "get a quote" framing.
*Suggested command*: `$impeccable layout` (hero hierarchy), paired with `$impeccable clarify` for the messaging split.

**[P1] Homepage ignores its own IA for service areas — 31-item unchunked wall**
*Why it matters*: `ServiceAreaChips` on the homepage renders the full, ungrouped `cities` array, even though `site.ts` already defines `serviceRegions` for exactly this purpose, and the Footer already demonstrates the correct pattern (`cities.slice(0, 16)` + "See all 31 cities"). This is the single biggest driver of the cognitive-load failures found (chunking, choices-at-a-decision-point, progressive disclosure).
*Fix*: Show a curated set of cities per region with regional labels, or reuse the Footer's slice-plus-"see all" pattern.
*Suggested command*: `$impeccable layout`

**[P2] "Why choose us" section violates the system's own One Orange Rule**
*Why it matters*: DESIGN.md states orange should be rationed to one dominant element per screen; this section has three at once (six orange checkmarks, an orange "15+" photo badge, and an orange "Book an inspection" button competing simultaneously).
*Fix*: Recolor the six checkmarks to a neutral ink tone since they're decorative bullets, not calls to action; reserve orange for the stat badge and the one button.
*Suggested command*: `$impeccable quieter`

**[P2] CTA button contrast is borderline against DESIGN.md's own claimed ratio**
*Why it matters*: Browser evidence measured the primary CTA (white on `#c74a18`) at an eyeballed ~3.5–4:1, short of the 4.5:1 DESIGN.md documents for that pairing at this size/weight — worth a precise check rather than trusting the documented number.
*Fix*: Run a precise contrast measurement on the actual rendered button; darken the fill slightly if it fails AA at the button's actual font size/weight.
*Suggested command*: `$impeccable audit`

**[P2] Scroll-reveal has no fallback for slow/interrupted hydration**
*Why it matters*: Every section below the hero starts at `opacity:0`, dependent on JS hydration + IntersectionObserver. There's a fallback for browsers lacking IntersectionObserver, but none for JS that's merely slow or interrupted — plausible for the site's own stated emergency/mobile persona on spotty signal.
*Fix*: Add a hard timeout (force `data-revealed="true"` after ~2s regardless of hydration state), or move critical above-the-fold trust content out of `data-reveal` entirely.
*Suggested command*: `$impeccable harden`

**[P3] Copy/pattern drift undercuts the "precision" brand promise**
*Why it matters*: Primary CTA reads "Get a Free Quote" everywhere except the mobile sticky bar, which shortens it to "Get a Quote" — a small but avoidable inconsistency for a brand whose pitch is precision. Separately, the animated `CountUp` stat counters read as a SaaS-dashboard flourish next to copy that explicitly says "a track record you can check, not a slogan."
*Fix*: Align CTA copy across all instances; consider a static, instantly-legible number for the stats instead of a count-up animation.
*Suggested command*: `$impeccable clarify`

## Persona Red Flags

**Jordan (Confused First-Timer)**: Gets a decent early trust signal from the TrustBar, but never finds independent proof — the only review-adjacent element is a low-emphasis footer button, "Read our reviews on Google," which links to a raw Google search-results query rather than a real reviews page. Jordan's trust-building journey dead-ends at self-reported stats with no third party backing them.

**Riley (Stress Tester)**: Clicks "Read our reviews on Google" expecting a reviews page, lands on a generic search URL instead — visibly unfinished, undermining the trust the rest of the page builds. Throttling the network or disabling JS hits the scroll-reveal issue directly: sections stay invisible indefinitely if hydration stalls.

**Casey (Distracted Mobile User)**: Benefits genuinely from the sticky Call Now / Get a Quote bar. But between "Why choose us" and the final CTA band, Casey has to scroll through the entire 31-city chip wall — roughly two full mobile screens of small, similarly-weighted tap targets — before reaching the next actionable moment. This is exactly the stretch where a hurried mobile visitor is most likely to abandon.

## Minor Observations

- Hero photo's subject is cropped nearly out of frame on mobile (`object-[70%_center]` at a narrow viewport) — the job-site photography investment is largely lost below `sm:`.
- Services flyout's `shadow-2xl` is correctly the system's one documented shadow exception, implemented exactly as DESIGN.md specifies.
- No "back to top" affordance on an unusually long, section-heavy homepage.
- Three font-size tokens (`0.9375rem`, `0.6875rem`) are in real use but undocumented in DESIGN.md's Hierarchy list — worth adding as a named "small/caption" role next time DESIGN.md is refreshed, rather than leaving them as unlabeled one-offs.
- Skip-to-content link present and functional — good baseline a11y hygiene.

## Questions to Consider

1. The homepage's one real ledger-style UI moment (the stats hairline grid) is spent on marketing stats — would a sample itemized-estimate teaser build more concrete trust, given "written itemized estimate" is the stated differentiator?
2. Zero embedded third-party validation exists because none is "on hand" per PRODUCT.md — is that an acceptable near-term trade, or is gathering even a handful of real reviews the highest-leverage next move before another design pass?
3. Given a meaningful share of traffic arrives mid-emergency, should the first fold fork instantly into two named paths ("Active leak — call now" vs. "Planning a project — get a quote") instead of presenting both as equal-weight, generically-labeled buttons?
