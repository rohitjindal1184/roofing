---
name: ONE ROOFING
description: A San Francisco roofing contractor's marketing site — direct, itemized, job-site-honest.
colors:
  slate-steel: "#15181d"
  charcoal-deep: "#101317"
  sheet-metal: "#1c2128"
  ink-700: "#262c35"
  ink-600: "#333a45"
  ink-500: "#4a525f"
  bone-paper: "#faf9f7"
  bone-card: "#f7f5f2"
  bone-shade: "#eeeae4"
  bone-line: "#ddd7ce"
  body-ink: "#3b414b"
  safety-orange-bright: "#f07a45"
  safety-orange: "#e8622c"
  site-safety-orange: "#c74a18"
  safety-orange-deep: "#a93b12"
  safety-orange-text: "#b4400f"
typography:
  display:
    fontFamily: "var(--font-barlow-condensed), 'Arial Narrow', sans-serif"
    fontWeight: 700
    letterSpacing: "-0.01em"
  body:
    fontFamily: "var(--font-source-sans), ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
  label:
    fontFamily: "var(--font-barlow-condensed), 'Arial Narrow', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.2em"
  small:
    fontFamily: "var(--font-source-sans), ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
  micro:
    fontFamily: "var(--font-source-sans), ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 400
rounded:
  control: "0.625rem"
  surface: "1rem"
  none: "0px"
spacing:
  section-y: "4rem"
  section-y-lg: "6rem"
  card-padding: "1.5rem"
  container-max: "none"
components:
  button-primary:
    backgroundColor: "{colors.site-safety-orange}"
    textColor: "#ffffff"
    rounded: "{rounded.control}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.safety-orange-deep}"
  button-onDark:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    rounded: "{rounded.control}"
  button-onLight:
    backgroundColor: "transparent"
    textColor: "{colors.slate-steel}"
    rounded: "{rounded.control}"
---

# Design System: ONE ROOFING

## Overview

**Creative North Star: "The Job Site Ledger"**

ONE ROOFING's site reads like the paperwork the company is proud of: a written, itemized estimate, not a sales brochure. The structure stays ruled and numbered — hairline-divided stat grids, numbered process steps (01, 02, 03), and bordered panels standing in for line items — while contained surfaces use measured rounded corners to feel more approachable. The palette pairs dark structural charcoal (the steel and hardware of a roof) with a warm, paper-like off-white (the estimate itself) and a single, deliberately rationed construction-safety orange that marks the one thing on any given screen that matters most: the call, the quote, the number.

Density is comfortable, not tight — this is a site for someone anxious about a leak, reading carefully, not skimming a dashboard. Type leans hard into an uppercase, condensed display face for anything structural (headings, labels, buttons, numbers) paired with a plain, humanist body sans for the actual explanation. The effect is a contractor's site sheet: bold section stamps over calm, readable paragraphs.

Confirmed rejections: no exaggerated pill-shaped cards, no glossy neumorphism or colored glow shadows, no pastel or desaturated "tech startup" palette, no stock-photo gloss — only the client's own job-site photography.

**Key Characteristics:**
- Ruled, ledger-like structure with softly rounded, gently layered contained surfaces — hairline dividers and numbered steps still carry the rhythm; a restrained, warm-toned shadow now lifts the surfaces meant to read as raised off the page
- Warm charcoal + warm bone neutrals + one rationed construction-orange accent
- Condensed uppercase display type for anything structural; plain body sans for explanation
- Two-tier depth: ledger/structural surfaces (hairline grids, dividers, full-width bands) stay flat and bordered; contained "paper" surfaces (cards, panels, floating badges, buttons) are raised with a soft shadow instead — a surface never carries both at once
- Real job-site photography only, always with a heavy dark gradient scrim when type sits over it
- The homepage hero is the one deliberately animated moment: a slow Ken Burns drift and scroll parallax on the photo, a staggered rise-and-fade on the text stack. Everywhere else, motion stays to the existing scroll-reveal and count-up treatments

## Colors

The palette is a job site at golden hour: dark steel structure, sun-bleached paper, one hard-hat-orange highlight used sparingly enough that it always reads as "act now."

### Primary
- **Site Safety Orange** (`#c74a18`, `--color-brand-600`): the CTA fill. Primary buttons, active nav states' underlying color family. White text on it clears 4.5:1 — the only color used to say "click this."
- **Safety Orange Bright** (`#f07a45`, `--color-brand-400`) and **Safety Orange** (`#e8622c`, `--color-brand-500`): the same hue lifted for dark backgrounds (5.3:1 on `slate-steel`/`charcoal-deep`) — eyebrow rules, stat numbers, active nav labels, hover states on dark surfaces.
- **Safety Orange Deep** (`#a93b12`, `--color-brand-700`): hover/active state for the primary button fill.
- **Safety Orange Text** (`#b4400f`, `--color-brand-800`): orange used as *text* on light bone surfaces (5.5:1 on `bone-card`) — links, "view service details" affordances, icon accents on light backgrounds. Never mixed with `--color-brand-600` in the same context; the light-surface and dark-surface oranges are distinct roles, not interchangeable shades.

### Neutral
- **Charcoal Deep** (`#101317`, `--color-ink-950`): the darkest structural surface — hero scrims, the footer's contact strip, the utility bar above the header.
- **Slate Steel** (`#15181d`, `--color-ink-900`): the primary dark band color — header main bar, footer body, PageHero background, dark CTA sidebars.
- **Sheet Metal** (`#1c2128`, `--color-ink-800`): image placeholder background (behind `next/image` while loading) and the services flyout menu surface.
- **Ink 700 / 600 / 500** (`#262c35` / `#333a45` / `#4a525f`): reserved mid-tones for future dark-surface hover/border states; not yet load-bearing in current components — treat as the system's headroom, not dead tokens.
- **Bone Paper** (`#faf9f7`, `--color-bone-50`): the lightest content surface — service cards, sidebar panels, form backgrounds.
- **Bone Card** (`#f7f5f2`, `--color-bone-100`): the default page background (`body`) and the most common light section band.
- **Bone Shade** (`#eeeae4`, `--color-bone-200`): the next band down in the light rhythm — alternates with Bone Card to separate stacked sections without a hard rule.
- **Bone Line** (`#ddd7ce`, `--color-bone-300`): every hairline border and divider on light surfaces — card borders, grid dividers, the top border on `service-areas`.
- **Body Ink** (`#3b414b`, `--color-slateink`): default running body-copy color on light surfaces (headings use Slate Steel instead, see Typography).

### Named Rules
**The One Orange Rule.** Construction-orange is the only saturated hue in the system and it is rationed to the single most important action or number in any given view — a primary CTA, a stat, an active nav item, an eyebrow rule. If more than one element on a screen "shouts" in orange, something has drifted off-brief.

**The Paired-Surface Rule.** Each orange value is bound to a specific surface class: `brand-400`/`brand-500` only appear on dark (`ink-8/9/950`) backgrounds; `brand-800` only appears as text on light (`bone-*`) backgrounds; `brand-600`/`brand-700` are the CTA-fill pair regardless of surface. Don't cross-wire them.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow, sans-serif fallback)
**Body Font:** Source Sans 3 (with ui-sans-serif, system-ui, sans-serif fallback)

**Character:** A condensed, heavyweight uppercase display face stamped over calm, generously-leaded body text — the pairing of a stenciled site sign and the fine print underneath it. The display face carries all structural weight (headings, buttons, labels, numbers); the body face carries every sentence a worried homeowner actually has to read.

### Hierarchy
- **Display / H1** (700 weight, `2.75rem`–`7xl` clamped by breakpoint, `leading-[0.98]`–`leading-[1.05]`, uppercase): hero headlines and PageHero titles only. Always white or Slate Steel depending on surface, never body-ink colored.
- **Headline / H2** (700–800 weight, `text-3xl` to `text-5xl`, `leading-tight`, uppercase): section headings throughout — "By the numbers," "Why ONE ROOFING," service-page section titles.
- **Title / H3** (600–700 weight, `text-xl`–`text-2xl`, uppercase, tracking `0.02em`–`0.06em`): card titles, principle headings, footer nav headings.
- **Body** (400 weight, Source Sans 3, `text-base`–`text-lg`, `leading-relaxed`): all running copy — intros, descriptions, list items. No max-width enforced globally; individual sections cap prose at `max-w-xl`/`max-w-2xl`/`max-w-3xl` by context.
- **Label / Eyebrow** (600 weight, Barlow Condensed, `0.8125rem`, `letter-spacing: 0.2em`, uppercase): the `eyebrow` utility class — always preceded by a short horizontal orange rule, always the first element in a section's text block.
- **Small** (400 weight, Source Sans 3, `0.9375rem`, sentence case): compact running copy in tight contexts — card benefit lines, dropdown nav items, sidebar body text. One step down from Body; still prose, not a label.
- **Micro** (400 weight, Source Sans 3, `0.6875rem`, sentence case): the smallest text in the system, reserved for the header's desktop-only utility strip (address, hours) where space is tightest.

### Named Rules
**The Uppercase-Structure Rule.** Anything that is structural chrome — headings, buttons, nav labels, eyebrows, stat labels — is Barlow Condensed and uppercase. Anything that is content a visitor reads sentence-by-sentence is Source Sans 3 and sentence case. Never uppercase a full paragraph; never set a heading in the body face.

## Layout

The shared `Container` is fluid (`max-w-none`) with balanced responsive gutters: `1.25rem` on mobile, `1.5rem` at `sm:`, `3rem` at `lg:`, and `4rem` at `xl:`. It is used identically on every page, giving desktop layouts clear breathing room without recreating oversized centered margins. Prose blocks retain their own `max-w-*` measures, keeping reading lines controlled even though the page shell spans the viewport.

Section rhythm alternates light bands (`bone-50` → `bone-100` → `bone-200`, in no fixed order but always adjacent-distinct) with dark bands (`ink-800`/`900`/`950`) to separate content without needing a visible top border on every section; a hairline `border-bone-300` top border is added only when two light sections of the *same* tone sit back to back (e.g. `service-areas`, `related services`). Vertical section padding is consistently `py-16` mobile → `py-20`/`py-24` at `sm:`, `lg:` for the largest sections.

Grids default to CSS Grid, not flexbox, for anything beyond a simple row: `sm:grid-cols-2 lg:grid-cols-3` for card grids, asymmetric `lg:grid-cols-[minmax(0,Xrem)_1fr]` two-column splits for heading-plus-content or heading-plus-visual sections. A recurring device — **the hairline grid** — builds bordered multi-column stat/principle blocks by setting `gap-px` with a `bg-bone-300` (or `bg-white/10` on dark) container behind solid-fill child cells, so a 1px rule appears between every cell without individual per-cell borders.

Responsive breakpoints follow Tailwind defaults (`sm` 640px, `md` 768px, `lg` 1024px); the header's desktop nav and the mobile hamburger + bottom CTA bar swap at `lg:`, not `md:`.

## Elevation & Depth

**The Declare-It-Once Rule.** Every surface picks exactly one way to read as separate from its background: a hairline border for surfaces that stay flat, or a soft shadow for surfaces meant to feel physically raised. Never both — a 1px border under a wide soft shadow is the "ghost card" and is always wrong here. This replaces the old all-flat rule now that the brief calls for some real depth; it does not reopen the door to glossy or neon shadow effects.

**Ledger tier — flat, bordered, no shadow.** The system's ruled/structural surfaces stay exactly as flat as before: the hairline stat and principle grids (`gap-px` over a `bone-300`/`white-10` field), form-field borders, full-width section bands, header/footer bars, and hairline dividers. These carry `border-bone-300` (light) or `border-white/10` (dark) and nothing else — no shadow, no lift. They are allowed to gain rounded corners (see Shapes) without becoming "raised."

**Raised tier — shadow only, no perimeter border.** Surfaces meant to feel like paper sitting above the desk — service cards, sidebar and CTA panels, the contact form, image frames and photo tiles, floating stat badges, the services flyout and mobile nav panel, and buttons — drop their perimeter border and instead carry one of four warm, soft-blur shadow tokens (never a zero-offset colored halo):
- `shadow-card` / `shadow-card-hover`: cards and panels at rest / on hover. Interactive cards also lift `-translate-y-1` on hover — the swap-to-brand-border hover signal is retired along with the border itself; brand color still shows through text/icon hover states.
- `shadow-button` / `shadow-button-hover`: the primary button's brand-tinted glow; deepens and lifts `-translate-y-0.5` on hover, flattens back down on press (`active:translate-y-0 active:shadow-xs`). Buttons keep their `border-2` — a button's edge is an affordance signal, not the "ghost card" pattern the rule above guards against.
- `shadow-float`: genuinely floating chrome — the services flyout, the mobile nav slide-down panel, the fixed mobile CTA bar, floating badges that overhang an image corner, and the header once the page has scrolled beneath it.
- `shadow-xs`: the smallest lift, for form fields sitting on a card.

A `border-t-2` or `border-l-4` color accent (the signs/process "tab," the form's top stripe, the error alert) is a brand device, not a perimeter border, and stays paired with a shadow without triggering the ghost-card rule.

## Shapes

**The Rounded-Container Rule.** Use a two-step radius system: `0.625rem` for controls (buttons, inputs, selects, textareas) and `1rem` for contained surfaces (cards, bordered panels, menus, and image frames). Full-width section bands, header/footer bars, and hairline dividers stay straight so the ledger structure remains legible. Avoid pills and oversized radii. Borders are typically `1px` (`border-bone-300` on light, `border-white/10` on dark) for structural dividers, stepping up to `2px` (`border-2`) specifically on interactive elements — buttons and the form's top accent border — to signal "this is actionable."

## Components

Every contained component uses a soft, consistent frame: rounded corners, and either a border (ledger tier) or a shadow (raised tier) for definition — never both, per Elevation & Depth. Interactive raised surfaces add a hover lift (`-translate-y-1` on cards, `-translate-y-0.5` on buttons, deepening shadow) alongside the existing `scale-[1.04]` on card images and `translate-x-1` nudge on trailing arrow icons.

### Buttons
- **Shape:** compact rounded rectangle with `0.625rem` radius and `border-2`. Padding `px-6 py-3` (`px-7` at `sm:` for two of three variants).
- **Primary:** Site Safety Orange fill + border (`bg-brand-600 border-brand-600`), white text, hover deepens to `brand-700` on both fill and border.
- **On Dark:** transparent fill, `white/40` border, white text; hover fills solid white with Slate Steel text — a full invert, not a tint.
- **On Light:** transparent fill, Slate Steel border and text; hover fills solid Slate Steel with white text — the light-surface mirror of On Dark.
- All three variants share Barlow Condensed, uppercase, `tracking-[0.08em]`, and a leading/trailing `ArrowRight` icon on primary actions.

### Cards / Containers
- **Corner style:** `1rem` radius on cards and contained panels.
- **Background:** `bone-50` (lightest) sitting on a `bone-100`/`bone-200` section, or `ink-900` sitting on a light section for dark sidebar/CTA panels — the shadow now does the work of separating card from desk that the border used to do.
- **Depth:** `shadow-card` at rest, `shadow-card-hover` + `-translate-y-1` on interactive cards (service cards, service list tiles). No perimeter border — see Elevation & Depth's Declare-It-Once rule. Brand-hover is now carried by text/icon color (`group-hover:text-brand-800`) rather than a border swap.
- **Accent variant:** a `border-t-2` in either Site Safety Orange or Slate Steel used as a "tab" accent on featured panels (the "signs" and "process" boxes on service pages, the contact form) — this pairs with the shadow, not instead of it. These panels round only the bottom two corners (`rounded-b-surface`), so the top accent stays a crisp straight line instead of clashing with a curved corner.
- **Internal padding:** `p-6`–`p-9` depending on card weight; sidebar/CTA panels run `p-7`.

### Inputs / Fields
- **Style:** `1px border-bone-300`, white fill, `0.625rem` corners, `px-4 py-3`, a faint `shadow-xs` lift off the card it sits in.
- **Focus:** border shifts to Site Safety Orange (`focus:border-brand-600`) — no glow, no ring, consistent with the flat/bordered system. (The global focus-visible ring — `3px solid brand-500` with matching control radius — is reserved for keyboard focus on interactive elements generally, distinct from this field-specific focus treatment.)
- **Error:** border shifts to Safety Orange Deep with a faint orange-tinted background wash (`bg-brand-600/5`); error copy renders in Safety Orange Text below the field.
- **Labels:** Barlow Condensed, uppercase, `tracking-[0.08em]`, sit directly above the field.

### Navigation
- **Desktop:** dark (`ink-900`) bar, Barlow Condensed uppercase links with `tracking-[0.06em]`; active/hover state shifts text to Safety Orange Bright (no underline, no background pill). The main bar gains `shadow-float` once the page scrolls beneath it, staying flat while pinned to the top. The Services item flyout is a raised-tier surface (`shadow-float`, `rounded-surface`) — the system's original floating-overlay exception, now joined by a considered few others (see Elevation & Depth).
- **Utility strip:** a slim `ink-950` strip above the main bar (desktop only) carrying NAP + hours in `0.8125rem` bone-300 text — this is the only place body-style text appears on a dark surface at that small a size.
- **Mobile:** full-width slide-down panel (not an off-canvas drawer), `ink-900` background, `shadow-float`, divided list (`divide-white/10`) rather than a grid; a bottom-fixed two-cell CTA bar (Call / Get a Quote) persists on every mobile page below `md:`, also `shadow-float` since it floats over page content, and is the mobile equivalent of the desktop header's always-visible phone number + CTA button.

### Numbered Step / Ledger Entry (signature component)
The system's most distinctive custom pattern: a small rounded swatch (`h-5 w-5`/`h-6 w-6`, `rounded-md`, solid `ink-900` or `brand-*` fill) containing a bold white numeral, paired with a line of body text — used for the About page's "Four things we do not compromise on" (numeral as a large `01`/`02` watermark) and service pages' numbered process steps. It's the visual expression of the Job Site Ledger north star: literally itemizing the process like a checklist a foreman would sign off on. Stays flat — no shadow, ledger tier.

## Motion

- **Scroll reveal (site-wide):** elements carrying `data-reveal` fade and rise 14–18px into place the first time they cross into view, via a single `IntersectionObserver` mounted once in the root layout (`ScrollReveal.tsx`). Staggered with `--reveal-delay` in multiples of ~70–90ms across a row's siblings. This is the system's default, ambient motion — it does not vary by section.
- **Count-up (stats):** `CountUp.tsx` animates each stat number from 0 on first view, eased with `easeOutCubic`.
- **The hero — the one authored moment:** the homepage hero is the single place motion is deliberately elevated above the ambient scroll-reveal. On paint (not on intersection, since it's already in view): the eyebrow, headline, body copy, buttons and stat row rise and fade in a ~110ms stagger (`data-hero-in`, `hero-rise` keyframe). The hero photo runs a slow 20s Ken Burns zoom (`scale(1)` → `scale(1.07)`, `.hero-media`) and, independently, drifts via scroll-linked parallax through a wrapping layer (`HeroParallax.tsx`) so the photo appears to move slower than the page as it scrolls away. Do not add a second Ken Burns/parallax treatment elsewhere — it stays a hero-only signature.
- **Reduced motion:** every animation and transition collapses to near-zero duration under `prefers-reduced-motion: reduce` (global rule in `globals.css`); `HeroParallax` also short-circuits its scroll listener entirely rather than relying on the CSS override.
- **Hero A/B variants:** the hero's scroll interaction is switchable via `NEXT_PUBLIC_HERO_VARIANT` (`src/lib/experiments.ts`, `.env.example`) — `parallax-settle` (default: content scales/fades and the scrim deepens as the hero scrolls away, on top of the Ken Burns + parallax photo), `pinned-curtain` (hero pins full-viewport while the next section slides up over it), `stats-rise` (the 300+/15+/250+ track-record stats rise into the hero on scroll), or `chevron-cue` (today's hero plus a bouncing scroll-down indicator). All four share the same real photo, Ken Burns zoom, and on-load text stagger — only the *scroll* behavior differs. Components live in `src/components/hero/`.

## Do's and Don'ts

### Do:
- **Do** use `0.625rem` on controls and `1rem` on contained surfaces so the softer geometry stays consistent.
- **Do** ration Site Safety Orange to one dominant use per screen (a CTA, a stat, an active state) per the One Orange Rule.
- **Do** pair Barlow Condensed + uppercase for anything structural with Source Sans 3 + sentence case for anything read as prose; never mix the two roles.
- **Do** declare elevation once: ledger/structural surfaces stay flat with a hairline border; cards, panels, floating badges and buttons carry a soft warm-toned shadow instead of a border, never both.
- **Do** use real job-site photography with a heavy dark gradient scrim (`from-ink-950 via-ink-950/85–90 to-ink-950/30–60`) whenever text sits over an image.
- **Do** keep elaborate motion (Ken Burns, parallax, multi-step stagger) confined to the homepage hero; everywhere else, use the ambient `data-reveal` scroll-reveal so motion doesn't compete with itself section to section.

### Don't:
- **Don't** turn cards or navigation into pills, and don't round full-width section bands or ruled dividers.
- **Don't** put a perimeter border under a wide soft shadow on the same surface — that's the ghost card. Pick one per the Declare-It-Once rule.
- **Don't** reach for a zero-offset colored glow, neumorphism, or any shadow without a real offset and blur — depth here stays soft, warm-toned and directional, never glossy.
- **Don't** use `brand-400`/`brand-500` as text on light bone backgrounds or `brand-800` on dark ink backgrounds — the paired-surface roles are fixed, not interchangeable shades of the same hue.
- **Don't** introduce stock photography or illustration; the brand's evidentiary claim ("real work, real crew") depends on using only the client's own project photos.
