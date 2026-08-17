# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: Bay Area homeowners who need roofing work — an active leak, storm damage, an aging roof past repair, or a routine inspection — and are deciding which contractor to trust with the job. Many arrive anxious or already dealing with water damage.

Secondary: landlords, property managers, and commercial/industrial building owners (flat and low-slope roofs, multi-unit buildings) with the same core job — find a contractor who will diagnose honestly and stand behind the work.

## Product Purpose

ONE ROOFING's marketing site exists to turn a Bay Area visitor with a roofing problem into a booked inspection or quote. Success is a phone call, a contact-form submission, or a click-to-call — not page views. The site must answer, fast, "can I trust this company with my roof" before it answers anything else.

## Positioning

A San Francisco-based roofing contractor whose whole business is roofing — not a general contractor or a lead-gen broker reselling to subcontractors. The mechanism a competitor can't truthfully copy: an in-house crew of 15+ estimators, foremen, and installers (no rotating subcontractors), an inspect-first/quote-second process, premium-grade materials, and a written warranty — backed by 300+ completed projects and 250+ satisfied clients across 31 named Bay Area cities.

## Operating Context

- Office at 1160 Battery Street East, Suite 100, San Francisco, CA 94111. Hours Mon–Sat, 8:00 AM–6:00 PM, with 24/7 emergency support for active leaks and storm damage.
- Six core services: asphalt shingle roof replacement, flat roof replacement, gutter & downspout replacement, skylight replacement, roof leakage repair, professional roof inspection. Plus unlisted-page-level additional services (gutter cleaning, siding repair, attic insulation).
- 31 Bay Area service-area cities grouped into three regions (SF & the Peninsula, East Bay, South Bay & Silicon Valley), each with distinct local climate/building-stock copy (fog, wind, salt air, heat, hillside runoff, older housing stock, etc.) — this local specificity is a real content asset, not filler.
- Service page slugs and city numeric IDs (`/city/{id}`) are inherited from the previous site and must be preserved for inbound-link and SEO continuity.
- Real project photography from the client's previous site lives in `public/images/` and is the only imagery available — no stock photography, no fabricated new photoshoots.

## Capabilities and Constraints

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4, `src/` directory, `@/*` alias.
- `src/lib/site.ts` is the single source of truth for all business facts (NAP, hours, stats, services, cities); every page, the footer, JSON-LD, and the sitemap read from it — don't hardcode business facts elsewhere.
- **Open gap:** `POST /api/contact` validates and returns success but does not deliver submissions anywhere yet (no email provider, no spam protection). Leads submitted through the form are not currently reaching anyone. Any work touching the contact flow should flag this rather than assume leads are being received.
- No CMS — content changes are code changes to `site.ts` or page files.

## Brand Commitments

- Name: ONE ROOFING (always full caps in running text per existing usage).
- Voice: direct, plainspoken, specific about failure modes (e.g. "curling edges," "ponding water") rather than generic marketing language. Comfortable saying "not yet" / "this can wait" — honesty is a stated differentiator, not just a tagline.
- Licensed, bonded, and insured; the phrase appears verbatim across the site and should stay consistent.

## Evidence on Hand

- Stats: 300+ roofing projects completed, 15+ people on the in-house team, 250+ satisfied clients.
- Trust points: Licensed/Bonded/Insured, industry-leading warranty (workmanship + materials, in writing), 24/7 emergency support, 100% satisfaction guaranteed.
- Real photography in `public/images/` (crew at work, completed projects, service-specific shots).
- Google Reviews link exists (`site.googleReviewsUrl`) but is a search-results link, not embedded review content — no actual review text/ratings are on hand to display verbatim.
- No case studies, press mentions, or named client testimonials on hand — future work must not fabricate these.

## Product Principles

1. Trust is earned through specificity, not adjectives — lead with concrete failure signs, real process steps, and named local conditions over generic "quality roofing" language.
2. In-house-crew and inspect-first-quote-second are the core differentiators; every surface should reinforce that this isn't a subcontractor pass-through.
3. Every city and service page is a real, distinct answer to a real search intent — preserve URL continuity and local specificity rather than templating it into sameness.
4. The fastest path to a call or form fill is the product's job; don't let visual ambition slow down finding the phone number or CTA.
5. Never claim delivery or response capabilities (e.g. "we received your message") that the backend doesn't yet fulfill — the contact-form gap above is real and current.

## Accessibility & Inclusion

No specific compliance standard or documented user need beyond standard web accessibility practice.
