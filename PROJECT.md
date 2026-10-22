# Project

## Brand

| | |
| --- | --- |
| Agency | Deventhous |
| Parent | Stynark (spelling to confirm: the business email is `steinarktechnologies@gmail.com`) |
| Location | Lagos, Nigeria; serving Nigeria, Africa, and the diaspora |
| Tagline | Websites that get found, get trusted, and get paid. |
| Primary conversion | Chat on WhatsApp, or send the brief form |
| Email | steinarktechnologies@gmail.com |
| Response time | Within 1 hour |

Content source: the Deventhous agency planning document (21 October 2026) and the original build spec.

## What we sell

Six packages (naira ranges, with dollar equivalents at about ₦1,500 to $1):

| # | Package | Price | Timeline |
| --- | --- | --- | --- |
| 01 | Launchpad (landing page) | ₦150k – ₦350k | 3–7 days |
| 02 | Business Store (admin, catalogue, payments) · Recommended | ₦600k – ₦1.4M | 3–5 weeks |
| 03 | Pro Site (admin + blog) | ₦900k – ₦2M | 4–6 weeks |
| 04 | Growth Site (fully SEO-optimized) | ₦1.5M – ₦3M | 5–8 weeks |
| 05 | Academy (LMS) | ₦2.5M – ₦5M | 8–12 weeks |
| 06 | Intelligent Business (AI automation + agent) | ₦3M – ₦7M + AI usage | 8–12 weeks |

Also: standalone SEO audit and retainer, AI automation setup, tech support retainer, hourly work, and the "Launch in 5 Days" entry offer (first 5 clients; toggle with `entryOffer.enabled`).

Terms: 50% deposit, 30% on design approval, 20% before handover (4 milestones above ₦2M); 2 revision rounds per phase; 7-day delay pause; client owns deliverables after full payment.

Services shown on the site: web design and development, online stores and payments, e-commerce, SEO, AI automation and business agents, course platforms, tech support and management.

## Work

| Client | Domain | Type | On the site |
| --- | --- | --- | --- |
| JD Hub | jdhub.com | Gadget online store | Illustrated thumbnail + one-page preview |
| DML Prints | dmlprints.com | Clothing, gifts, and accessories printing store | Illustrated thumbnail + one-page preview |
| Namorx Couture | namorxcouture.com | Fashion clothing brand store | Illustrated thumbnail + one-page preview |
| Eastern Gravels | easterngravels.com | Aggregate supplier, Lagos | Case study (MDX) |

As of 22 October 2026 none of the three store domains served a live site (jdhub.com redirected to a Bubble "domain not supported" page; the other two did not resolve), so the previews are original illustrations and do not link out. Products and prices in previews are examples.

## Status

- Built and pushed to `github.com/ExpectationsHACK/deventhous` (`main`).
- Production build passes; lint clean.
- Not yet deployed. No Lighthouse run yet.

## Open items before launch

- [ ] WhatsApp number in `lib/site.ts` (`whatsappNumber`, digits with country code)
- [ ] Confirm parent company spelling (Stynark vs Steinark)
- [ ] Social links and final domain (`NEXT_PUBLIC_SITE_URL`)
- [ ] Resend and Supabase keys in `.env.local` / Vercel; run `supabase/leads.sql`
- [ ] Eastern Gravels: year, real results, live URL, real screenshots
- [ ] Real screenshots or live links for JD Hub, DML Prints, Namorx Couture when available
- [ ] Legal review of privacy and terms pages (Nigeria Data Protection Act 2023)
- [ ] Check package prices against real costs (planning document marks them as proposals)
- [ ] Decide whether to keep the "Launch in 5 Days" offer
- [ ] Team names and photos for About (optional)
- [ ] Real testimonials (section stays hidden until added)
- [ ] Deploy to Vercel, connect domain, add analytics, submit sitemap to Search Console, run Lighthouse

## Decisions

- Vercel design language without Vercel branding; the planning document's yellow "danfo" palette was not used.
- Light near-white background by default (client request, 22 Oct 2026); dark mode kept.
- Hero primary button is "Chat on WhatsApp"; other primary CTAs say "Get a free quote".
- "Recommended" badge (not "Most popular") on Business Store, since there's no sales data.
- CSS animations instead of the `motion` library, to keep client JavaScript small.
- Example package sites use fictional businesses; their domains are illustrative.
