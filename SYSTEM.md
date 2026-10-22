# System

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16.4 (App Router, Turbopack, Cache Components, Partial Prefetching), React 19, TypeScript |
| Styling | Tailwind CSS v4 with CSS-variable tokens; container queries for demos |
| Fonts | `geist` (Geist Sans, Geist Mono) via `next/font` |
| UI primitives | Radix Accordion and Dialog; `lucide-react` icons |
| Theme | `next-themes` (`attribute="class"`, default `light`) |
| Forms | React Hook Form + Zod (small local resolver; `@hookform/resolvers` conflicts with Zod 4 peer ranges) |
| Email / storage | Resend; Supabase (`leads` table) |
| Content | TypeScript data files + MDX (`@next/mdx`) |
| Hosting | Vercel (planned) |

## Routes

| Route | Source | Notes |
| --- | --- | --- |
| `/` | `app/(marketing)/page.tsx` | Home |
| `/packages`, `/packages/[slug]` | `content/packages.ts` | Six packages, comparison, ladder, standalone services; per-package OG image |
| `/services` | `app/(marketing)/services/page.tsx` | Seven services incl. e-commerce |
| `/work`, `/work/[slug]` | `content/work.ts` | Client previews (`jdhub`, `dmlprints`, `namorxcouture`) and the `eastern-gravels` MDX case study |
| `/about`, `/contact`, `/privacy`, `/terms` | static | |
| `/blog`, `/blog/[slug]` | `content/blog/posts.ts` + `.mdx` | |
| `/api/lead` | `app/api/lead/route.ts` | POST only |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image` | `app/*.ts(x)` | |

All pages are prerendered. `[slug]` pages use `generateStaticParams`, export `instant = false`, and call `notFound()` for unknown slugs (`dynamicParams` is not allowed with Cache Components).

## Data flow

```
lib/site.ts ───────────────┐
content/packages.ts ───────┼──> server components ──> static HTML
content/work.ts, faq.ts ───┤
content/blog/*.mdx ────────┘
```

Packages render the home teaser, `/packages` cards, comparison table, ladder, `/packages/[slug]`, JSON-LD offers, and the contact form's package list from one array.

## Client-side JavaScript

Only: `ThemeToggle`/`ThemeSwitch`, `NavLinks` and `MobileMenu` (active state, Radix Dialog), `FaqAccordion`, `CurrencyToggle`, `BriefForm`, `PageEffects`. Everything else, including all demo and illustration animation, is CSS or SVG.

Inline `<head>` script (`lib/effects-script.ts`): applies the saved currency before paint, adds `.js` to `<html>` so reveal targets start hidden, and removes it after 4s if `PageEffects` never mounted.

## Contact and leads

1. `/contact` reads `?package=<slug>` and `?offer=launch-in-5-days` (inside `<Suspense>`) to preselect a package and pre-fill the message.
2. The form validates with `leadSchema` (`lib/schemas.ts`), including a hidden `website` honeypot.
3. `POST /api/lead` rate-limits by IP (5 per 10 minutes, in memory, per instance), silently accepts honeypot hits, validates again, then in parallel:
   - sends an email via Resend if `RESEND_API_KEY` and `LEAD_TO_EMAIL` are set
   - inserts into Supabase `leads` if `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are set
4. If neither is configured: success in development (lead logged to the terminal), error 500 in production.

Supabase schema: `supabase/leads.sql` (RLS enabled, no public policies; inserts use the service role key server-side).

## Environment variables

See `.env.example`: `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `LEAD_TO_EMAIL`, `LEAD_FROM_EMAIL`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`.

## SEO

- Metadata API on every page: unique title (template `%s · Deventhous`), description, canonical.
- JSON-LD: Organization + WebSite (root layout), Service with AggregateOffer (package pages), Service (services page), FAQPage (FAQ sections), BreadcrumbList (inner pages), BlogPosting (posts).
- `sitemap.ts` includes pages, packages, work, and posts; `robots.ts` disallows `/api/`.
- OG images generated with `next/og` (`lib/og.tsx`).

## Directory map

```
app/                 routes, layout, globals.css (tokens + all keyframes), SEO files
components/ui/       primitives
components/layout/   navbar, footer, theme, page effects, WhatsApp button
components/sections/ page sections
components/demo/     example package sites, carousel, client previews (clients/)
components/illustrations/  animated service illustrations
components/contact/  brief form
content/             packages, faq, work, blog
lib/                 site config, schemas, formatting, JSON-LD, OG renderer, head script
supabase/            leads table SQL
```
