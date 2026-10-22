# Deventhous

Marketing site for Deventhous, a Stynark company. Next.js 16 (App Router, Cache Components), React 19, Tailwind CSS v4, Geist, MDX.

## Run it

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build && npm run start
```

Copy `.env.example` to `.env.local` and fill it in to make the contact form deliver leads. Without it, the form still works in development and logs each lead to the terminal. In production it returns an error until at least one of Resend or Supabase is configured.

## Where things live

Content comes from the Deventhous agency planning document (21 October 2026).

| What | File |
| --- | --- |
| Company facts, WhatsApp number, email, reply time, socials | `lib/site.ts` |
| Six packages: prices (₦ and $), timelines, best for / not for, features, deliverables, add-ons, maintenance, FAQs | `content/packages.ts` |
| Standalone services, "Launch in 5 Days" entry offer, payment terms | `content/packages.ts` |
| Site-wide FAQ | `content/faq.ts` |
| Case studies (metadata + MDX body) | `content/work.ts`, `content/work/*.mdx` |
| Blog posts (metadata + MDX body) | `content/blog/posts.ts`, `content/blog/*.mdx` |
| Testimonials (hidden while empty) | `components/sections/testimonials.tsx` |
| Team members (shows disciplines while empty) | `app/(marketing)/about/page.tsx` |
| Design tokens, type scale, dark/light colors | `app/globals.css` |
| Lead API (validation, honeypot, rate limit, Resend, Supabase) | `app/api/lead/route.ts` |
| Leads table | `supabase/leads.sql` |

To change a price, edit `content/packages.ts`; the cards, comparison table, package pages, and structured data all update. Dollar amounts for packages are set explicitly; for maintenance and standalone services they're calculated at about ₦1,500 to $1 (`toUsd`).

To hide the entry offer once your first 5 clients have used it, set `entryOffer.enabled` to `false`.

To add a blog post: add an entry to `content/blog/posts.ts` and a matching `content/blog/<slug>.mdx`. The sitemap picks it up automatically. Case studies work the same way.

## Before launch: fill every placeholder

Search the codebase for `[` to find them. Current list:

- `lib/site.ts`: `[NUMBER]` (WhatsApp, digits only with country code, e.g. `2348012345678`), social URLs, and confirm the domain (or set `NEXT_PUBLIC_SITE_URL`). Confirm the spelling of the parent company here too (`Stynark`; the business email uses "steinark").
- `content/work.ts`: Eastern Gravels `[YEAR]`, `[RESULT METRIC]`, the three stats, and the live URL. Use real numbers only; delete the stats if there are none.
- `app/(marketing)/privacy` and `terms`: marked `[LEGAL REVIEW]`; have a lawyer check them (Nigeria Data Protection Act 2023).
- Eastern Gravels visuals are an illustrated recreation (`EasternGravelsPreview` in `components/sections/work.tsx`). Swap in real screenshots with `next/image` when you have them.
- The planning document marks its prices as proposals based on assumed market rates. Check them against your costs before launch.

## Notes

- Scroll reveals use a small IntersectionObserver component (`components/layout/page-effects.tsx`) instead of the `motion` library, to keep client JS small. Hero content is never hidden, so it doesn't delay LCP.
- The in-memory rate limit on `/api/lead` is per server instance. For a hard limit on Vercel, back it with Upstash or Vercel KV.
- After deploying: add Vercel Analytics (or Plausible), verify the domain in Google Search Console, and submit `/sitemap.xml`.
