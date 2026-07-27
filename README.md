# ONE ROOFING

Marketing site for ONE ROOFING, a licensed, bonded and insured roofing contractor
in San Francisco serving the wider Bay Area.

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · `src/` directory · `@/*` alias.

## Commands

```bash
npm run dev     # dev server on http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/lib/site.ts` | Single source of truth for business facts: NAP, hours, stats, the six services, the 31 service-area cities. Every page, the footer, the JSON-LD and the sitemap read from here. |
| `src/lib/contact.ts` | Contact-form field definitions and the validation function shared by the client form and the API route. |
| `src/app/layout.tsx` | Fonts (`next/font`), global metadata, header, footer, mobile CTA bar, scroll-reveal controller. |
| `src/app/globals.css` | Design tokens (`@theme`), base element styles, scroll-reveal transitions, reduced-motion handling. |
| `src/components/` | Header, Footer, MobileCtaBar, PageHero, ServiceDetail, shared section blocks and UI primitives. |
| `public/images/` | The client's own project photography, reused from the previous site. |

## Routes

`/` · `/about` · `/services` · `/gallery` · `/service-areas` · `/contact`

Service pages keep the slugs from the previous site for link continuity:
`/asphalt-shingle-roof-replacement`, `/flat-roof-replacement`,
`/gutter-downspout-replacement`, `/skylight-replacement`,
`/roof-leakage-repair`, `/roof-inspection`.

Plus `sitemap.xml`, `robots.txt`, a `not-found` page, and the
`POST /api/contact` route handler.

## Outstanding

`src/app/api/contact/route.ts` validates submissions and returns success, but
**does not deliver them anywhere yet**. See the `TODO` at the top of that file:
an email provider, spam protection and error handling still need wiring up
before the form goes live.
