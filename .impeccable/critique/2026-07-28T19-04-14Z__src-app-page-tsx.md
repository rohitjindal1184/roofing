---
target: homepage (src/app/page.tsx)
total_score: 25
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 2
timestamp: 2026-07-28T19-04-14Z
slug: src-app-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4/4 | Sticky header, active nav states, image-loading placeholder prevent layout jumps. |
| 2 | Match Between System and Real World | 4/4 | Plain contractor language, real photography, correct trade terms. |
| 3 | User Control and Freedom | 3/4 | Mobile menu Escape/focus-return verified; no wayfinding/back-to-top on a ~12,000px page. |
| 4 | Consistency and Standards | 4/4 | Verified zero rounded corners, zero drop-shadows across every section at both breakpoints. |
| 5 | Error Prevention | 3/4 | No destructive actions; docked because the dominant CTA funnels to a form confirmed non-functional in PRODUCT.md, and the design does nothing to hedge that risk. |
| 6 | Recognition Rather Than Recall | 4/4 | Phone number visible at 5+ points; never needs to be remembered. |
| 7 | Flexibility and Efficiency of Use | n/a | Single-session conversion page; no accelerators expected. |
| 8 | Aesthetic and Minimalist Design | 3/4 | On-brand and clean, but the hero now stacks eyebrow + H1 + subhead + emergency box + 2 buttons + stat row in one screen — denser than the "calm, careful reading" intent. |
| 9 | Error Recovery | n/a | No error states exist on the homepage itself (form validation lives on /contact, out of scope for this surface). |
| 10 | Help and Documentation | n/a | The omnipresent phone number functionally substitutes for "help" on a services site. |
| **Total** | | **25/28** | **Good (89%)** |

*(Heuristics #7, #9, #10 scored n/a this pass — see note on methodology below.)*

## Design Specificity Verdict

**LLM assessment**: Mostly earned, unevenly distributed. The Service Areas region copy ("Drainage and ponding are the usual culprits," "granule loss and brittle shingles," "tricky flashing details" on Victorians) is exactly the concrete, failure-mode-literate voice PRODUCT.md demands — un-copyable by a generic contractor site. The "Why ONE ROOFING" list, by contrast, regresses toward category-standard language ("premium-grade materials," "award-recognised craftsmanship") without naming specific failure signs. The visual system remains distinctive and disciplined — square corners, hairline dividers, ruled stat blocks — genuinely different from a generic template even with imagery removed.

**Deterministic scan**: `detect.mjs` run across the full `src/app` + `src/components` tree returned only **2 findings** (down from 6 in the original homepage-scoped scan, and 17 in the full-tree scan before this session's polish pass): the `2px` focus-ring radius and the `2.75rem` hero display size. Both are confirmed, documented exceptions in DESIGN.md (the focus-ring radius exception in Components/Inputs, the display clamp base in Typography Hierarchy) — verified false positives, not drift.

**Visual evidence**: Screenshots confirm the emergency callout, the ink-colored "15+" badge, and the region-card structure are all live and rendering. One screenshot caught the region-cards section mid scroll-reveal-animation (elements not yet at full opacity) due to the testing method, not a real rendering defect — already manually verified working correctly earlier in this session.

## Overall Impression

The three specific fixes from this session's backlog — hero emergency triage, service-area chunking, the "Why choose us" orange overload, the contact-form slop pattern and contrast gap — all verifiably landed and hold up under independent, unanchored re-review. But a fresh pass, deliberately not anchored to the prior report, caught two things the first pass missed entirely: the hero headline's second line is itself a large orange element that arguably out-shouts the CTA button (a stricter reading of the system's own One Orange Rule than was applied before), and the page's most-repeated CTA drives toward a contact form PRODUCT.md already documents as not delivering leads anywhere — a business-risk-level finding, not just a cosmetic one.

## What's Working

1. **The hero's emergency callout** operationalizes PRODUCT.md's "many visitors arrive anxious" note at the first possible moment, in restrained non-orange styling that doesn't compete with the CTA.
2. **Region-specific service-area copy** is the one place on the homepage where the brand's specific-failure-modes voice principle is fully delivered, not just described.
3. **Disciplined system execution**, re-verified independently: zero rounded corners, zero drop shadows, consistent hairline-grid and border-hover patterns across every section at both breakpoints.

## Priority Issues

**[P1] The hero headline itself breaks the One Orange Rule**
*Why it matters*: "EVERYTHING THE BAY THROWS AT THEM" renders in `text-brand-500` at the page's single largest, heaviest type (`text-7xl` desktop) — visually outweighing the actual CTA button for the eye's first stop. DESIGN.md's own rule: orange marks "the single most important action or number in any given view." This is pre-existing (not introduced this session) but wasn't flagged in the first critique pass.
*Fix*: Set the headline's second line in white to match the first line; let the CTA button remain the hero's one orange element.
*Suggested command*: `$impeccable quieter`

**[P1] The dominant, most-repeated CTA routes to a lead pipe PRODUCT.md confirms is broken**
*Why it matters*: "Get a Free Quote" is the visually primary action in 5+ placements (hero, why-us, CTA band, mobile bar, header) while `POST /api/contact` "does not deliver submissions anywhere yet" per PRODUCT.md's documented open gap. The design gives a non-functional path equal-or-greater visual priority than the phone number, which works.
*Fix*: Until the backend is wired, make "Call" the primary-styled action sitewide, or add a response-time promise near every quote CTA — contingent on being able to honor it.
*Suggested command*: `$impeccable clarify`

**[P2] The "Why ONE ROOFING" list violates the site's own ≤4 chunking guideline**
*Why it matters*: Six unbroken bullet items sit in one flat list with no subgrouping — the same class of issue already fixed once this session for the service-area chips, recurring in a different list that the first pass missed.
*Fix*: Split into two labeled groups of three, or cut to the four strongest points.
*Suggested command*: `$impeccable layout`

**[P3] Hero density exceeds the system's own "calm, careful reading" intent**
*Why it matters*: Eyebrow, two-line H1, subhead, emergency box, two buttons, and a stat row (which repeats the phone number a second time) all compete in one viewport.
*Fix*: Cut the redundant phone-number `dd` in the stat row — it duplicates the "Call" button two inches above it.
*Suggested command*: `$impeccable distill`

**[P3] No response-time reassurance at the point of highest commitment**
*Why it matters*: "No obligation, no pressure" reassures about sales pressure, not about being heard — a real gap for an anxious visitor about to click, and connects directly to the P1 broken-form finding above.
*Fix*: One line near the primary CTA setting an honest response-time expectation, once the backend can support it.
*Suggested command*: `$impeccable clarify`

## Persona Red Flags

**Jordan (Confused First-Timer)**: Reads the leak callout, feels reassured, clicks "Get a Free Quote" — and per PRODUCT.md, the form silently drops the lead. Jordan waits, hears nothing, concludes the company is unresponsive: the opposite of the trust the page just built.

**Riley (Stress Tester)**: The one message built for Riley — "we answer 24/7" — sits after the full headline and subhead, not before it. In a genuine emergency scan, Riley reads past the biggest, boldest (orange) text on the page before reaching the line meant for them.

**Casey (Distracted Mobile User)**: The persistent bottom Call/Quote bar is the right call — always one tap away. But Casey scrolls a measured ~12,255px of page (hero, trust bar, six service cards) before hitting any social-proof numbers, mitigated only by the always-present bottom bar.

## Minor Observations

- Footer copyright year is hardcoded (`const year = 2026`) rather than computed — will silently go stale in 2027.
- `noscript` fallback plus `prefers-reduced-motion` branches in both `ScrollReveal.tsx` and `CountUp.tsx` — above-average accessibility hygiene, worth calling out as a positive.
- Skip-to-main-content link verified present and correctly targets `#main` with `scroll-mt-24` clearing the sticky header.

## Questions to Consider

1. If the whole product's success metric depends on the form working, and it's confirmed non-functional — why is "Get a Free Quote" still the visually dominant action across five placements, while "Call" (which works) is consistently secondary?
2. Does the hero headline get an exception to the One Orange Rule because it's typography rather than a CTA — or is that the kind of local softening DESIGN.md explicitly warns against?
3. Should the brand's stated honesty principle ("comfortable saying 'not yet'") extend to a stated response-time promise in the CTA copy itself?
