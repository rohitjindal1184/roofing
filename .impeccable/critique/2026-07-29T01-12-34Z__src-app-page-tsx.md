---
target: homepage (src/app/page.tsx)
total_score: 22
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 2
timestamp: 2026-07-29T01-12-34Z
slug: src-app-page-tsx
---
Method: dual-agent (A: Design Review agent · B: Detector/Browser Evidence agent)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Hover/focus/submit states present; scroll-reveal and count-up animations communicate loading well |
| 2 | Match System / Real World | 4 | Copy uses homeowner language throughout ("what is the roof doing?" not "description") |
| 3 | User Control and Freedom | 3 | Services flyout and mobile menu both handle focus/Escape correctly (`Header.tsx:34-49`) |
| 4 | Consistency and Standards | 3 | Strong token/type/spacing consistency, but the page skips the system's signature numbered-ledger component and repeats trust claims across 4 components |
| 5 | Error Prevention | 3 | No destructive actions on the homepage itself; scoped mostly to the linked contact form |
| 6 | Recognition Rather Than Recall | 4 | Phone number/CTA visible in header, hero, mobile bar, footer, and CTA band — nothing to remember |
| 7 | Flexibility and Efficiency | n/a | Persuade-mode surface; no power-user path expected |
| 8 | Aesthetic and Minimalist Design | 2 | Licensed/bonded/insured, warranty, and 24/7 claims restated near-verbatim in TrustBar, `whyPoints`, Footer intro, and header utility strip — message padding, not itemization |
| 9 | Error Recovery | n/a | Homepage itself has no form/error surface (the linked ContactForm handles this well off-page) |
| 10 | Help and Documentation | n/a | Not applicable to a marketing homepage |
| **Total** | | **22/28** | **Good (79%)** |

*(Applicable max is 28 — heuristics 7, 9, and 10 scored n/a as genuinely inapplicable to this Persuade-mode homepage.)*

## Design Specificity Verdict

**Mostly specific, with one significant gap.** The copy is genuinely authored for this business — service benefits name real failure modes ("shingle-shedding roofs," "drains away from the building, not into it"), stats are Bay-Area-specific and checkable, and the "Where we work" section threads real local-climate distinctions (fog/wind/hillside runoff by region) rather than templated city-swap copy. This could not be dropped into a generic home-services template unchanged.

The gap: DESIGN.md names the numbered ledger-entry pattern (filled-square numeral + line item) as "the system's most distinctive custom pattern" and "the visual expression of the Job Site Ledger north star" — and it appears nowhere on the homepage. The "Why choose us" section uses generic checkmark icons instead. The single highest-traffic page in the site skips the one component that makes this brand look like itself rather than a well-written roofing template with an orange accent.

**Deterministic scan**: The bundled detector flagged exactly one issue — `design-system-font-size` on `src/app/page.tsx:192` (`text-[2.75rem]` on the H1). This is a **false positive**: DESIGN.md's own Typography hierarchy explicitly documents `2.75rem` as the mobile-base value of the H1's clamped range ("Display / H1 ... `2.75rem`–`7xl` clamped by breakpoint"). The detector doesn't recognize documented arbitrary-value literals, not a real system violation. No other mechanical findings — the detector's clean pass corroborates Assessment A's read that base-level consistency (type, color roles, square corners) is solid; the specificity gap above is a content/composition issue no detector catches.

**Visual evidence**: Browser screenshots (desktop, scroll-position captures) confirm the hero, services grid, stats band, and footer all render as described — hairline-grid stat block, square-cornered cards, condensed uppercase headings. Two things flagged in evidence but explicitly **unconfirmed**, not reported as findings: (1) some full-page screenshot captures showed blank gaps between sections, but scroll-position screenshots of the same regions rendered fully — this was traced to a capture-tool artifact, not a site defect; (2) text in the "Recent work" / "Serving 31 cities" regions looked visually washed-out in two screenshots taken immediately after an instant scroll jump — this is flagged as a possible contrast issue worth a follow-up check, but could equally be a mid-scroll-reveal-transition capture artifact, and contrast ratios could not be computed before the evidence-gathering session ended (see Run Notes).

## Overall Impression

The homepage is well-crafted at the sentence and token level — the copy is specific, the type system is applied consistently, and accessibility basics (focus rings, keyboard escape, reduced-motion) are handled with real care. The biggest opportunity is structural, not cosmetic: the page currently earns trust by repetition (say "licensed, bonded, insured" four times) instead of earning it by specificity (show the one thing — the numbered process/ledger device — that only this brand does). Fixing that would tighten the page and make it feel more like the "itemized estimate" the whole brand voice promises.

## What's Working

1. **Hero's emergency callout placement** (`page.tsx:203-211`) puts the highest-stakes message ("we answer 24/7, don't wait for daylight") directly in the primary sightline, ahead of any CTA — exactly right for an anxious-homeowner-with-an-active-leak visitor.
2. **The hairline-grid stat block** (`sections.tsx:70-91`, `gap-px` over a `bg-white/10` container) is a precise, correct implementation of DESIGN.md's named "hairline grid" device.
3. **Keyboard focus handling** goes beyond minimum: the services flyout opens on `group-focus-within` with a clear squared focus ring, and the mobile menu traps focus and returns it to the toggle on Escape (`Header.tsx:34-49`).

## Priority Issues

**[P1] Trust-claim redundancy dilutes the ledger's "itemized" premise**
- **Why it matters**: DESIGN.md's whole premise is "we tell you exactly what's there, no padding." The same 3-4 claims (licensed/bonded/insured, warranty, 24/7) appear near-verbatim in TrustBar (`page.tsx:250`), `whyPoints` (`page.tsx:72-79`), Footer's intro (`Footer.tsx:74-79`), and the header utility strip. Repeating the same line items four times is the opposite of an itemized estimate — it reads as padding, which is the one thing this brand's voice explicitly isn't supposed to do.
- **Fix**: Keep TrustBar as the single canonical statement of these claims; rewrite `whyPoints` to cover genuinely distinct ground — the inspect-first-quote-second process, what "in-house crew" means day to day.
- **Suggested command**: `$impeccable distill`

**[P1] The homepage never uses the system's signature component**
- **Why it matters**: The numbered ledger-entry pattern is called out in DESIGN.md as the single most load-bearing custom pattern, used on About and service pages — but the homepage's "Why choose us" list uses plain checkmark icons instead. The page most visitors land on skips the brand's most distinctive visual signature entirely.
- **Fix**: Convert the `whyPoints` list (or add a short "our process" sequence) to the numbered-square ledger pattern already established elsewhere in the system.
- **Suggested command**: `$impeccable polish`

**[P2] Mobile first-viewport CTA overload**
- **Why it matters**: At a 390px viewport, the hero's own two buttons ("Get a Free Quote" / "Call...") sit stacked directly above the fixed MobileCtaBar's two buttons (same two actions), showing four button-shaped elements for two destinations in the very first screen — before any trust content has appeared. Pushes checkable trust signals further below the fold and reads as anxious over-CTAing.
- **Fix**: On mobile, drop the hero's own inline CTA row and rely on the always-present bottom bar, or replace the hero CTA row with the emergency-callout box only.
- **Suggested command**: `$impeccable layout`

**[P2] Orange-rule tension at the closing CTA**
- **Why it matters**: In the final viewport, two independently-styled orange "Get a Free Quote" buttons are visible simultaneously (sticky header CTA + CTA band's own button) — a literal instance of the One Orange Rule's own stated failure condition. Low severity since both point to the same destination, but worth a deliberate call rather than an accident.
- **Fix**: Consider an outline-only sticky header CTA when a full CTA band is in view, or document this as an explicit exception.
- **Suggested command**: `$impeccable polish`

**[P3] CountUp mid-animation states are screenshot/crawler-fragile**
- **Why it matters**: Not user-facing (respects `prefers-reduced-motion`, IntersectionObserver-gated, settles within 1.4s), but any tooling or screenshot-based regression check that captures the stats block mid-count will see an "odd" number — worth a note for QA tooling, not a design fix.
- **Fix**: If screenshot-based visual regression testing is added later, add a settle delay or force `prefers-reduced-motion` in that tooling.
- **Suggested command**: `$impeccable audit`

## Persona Red Flags

**Jordan (confused first-timer)**: Arrives via search for "leak repair San Francisco," sees "Get a Free Quote" / "Call ___" in the hero, then immediately sees the *same two actions again* in the fixed mobile bar — may reasonably wonder if these are different things before realizing it's an identical destination repeated. Minor confusion, not blocking.

**Riley (deliberate stress tester)**: Tabs through the page systematically; focus rings on the services flyout hold up well. But `whyPoints` items 5 and 6 ("Licensed, bonded and insured on every job," "24/7 emergency support") literally restate TrustBar items seen 30 seconds earlier in the scroll — a stress-tester explicitly probing "does this site have anything new to say" will flag the page as thin on content variety despite being long.

**Casey (distracted mobile user)**: Scans fast for "is this trustworthy, where's the button." On mobile, four orange/outline CTA targets cluster in the first screen before any checkable trust signal (TrustBar) appears — for someone this impatient, trust signals should arrive faster than the redundant CTA cluster.

## Minor Observations

- Hero eyebrow text ("San Francisco & Bay Area · Licensed, Bonded & Insured") wraps awkwardly mid-phrase on narrow mobile widths, splitting right after "LICENSED,".
- Service area chips correctly cap at 4 visible + "+N more" overflow, respecting the ≤4-per-group chunking guidance even for a 31-city dataset.
- Unconfirmed, flagged for follow-up only: text in the "Recent work" / "Serving 31 cities" regions appeared visually washed-out in two scroll-position screenshots taken immediately after an instant scroll jump — could be a real contrast issue or a mid-transition capture artifact. Worth a deliberate contrast check (not re-confirmed in this run).

## Questions to Consider

- If the ledger's numbered-step device is reserved for About and service pages, is the homepage intentionally not meant to carry the brand's most distinctive signature — or did it just get missed during build-out?
- Four separate components state "licensed, bonded, insured" verbatim — if a homeowner only reads one section before deciding to call, which one would you protect, and could the rest be cut?
- The mobile fixed CTA bar exists so the header's CTA doesn't need duplicating in every section — so why does the hero also carry its own full CTA row on mobile, in the same viewport as the persistent bar?
