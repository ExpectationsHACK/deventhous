@AGENTS.md

# Deventhous: working notes for Claude

Marketing site for Deventhous, a web development agency (a Stynark company) in Lagos. Read these before changing anything:

- [PROJECT.md](PROJECT.md): what the business sells, status, open items, decisions
- [DESIGN.md](DESIGN.md): visual language, tokens, components, motion, demo sites
- [SYSTEM.md](SYSTEM.md): architecture, routes, data flow, lead API, SEO

## Commands

```bash
npm run dev      # dev server (port 3000, or next free port)
npm run build    # production build: run before every commit
npx eslint .     # lint: must be clean
```

There are no unit tests. Verify UI changes in the browser at 375px and 1280px, in both themes.

## Rules that are easy to break

**Next.js 16 with Cache Components** (`cacheComponents: true` in `next.config.ts`):
- Read `node_modules/next/dist/docs/` before using an API you haven't checked; this version differs from older Next.js.
- `dynamicParams`, `dynamic`, and `revalidate` route segment configs are **not allowed**. Unknown slugs call `notFound()`.
- Dynamic `[slug]` pages export `instant = false` (every valid slug is prerendered by `generateStaticParams`).
- `useSearchParams` must sit inside `<Suspense>` (see `components/contact/brief-form.tsx`).
- `params` is a Promise; use the generated `PageProps<"/route/[slug]">` type.

**Content lives in data files, not in components.** Change the data, not the markup:
- Packages, prices, standalone services, entry offer, payment terms: `content/packages.ts`
- Company facts, WhatsApp, email, reply time: `lib/site.ts`
- FAQ: `content/faq.ts` · Work: `content/work.ts` · Blog: `content/blog/posts.ts` + `.mdx`

**Copy rules:**
- Never invent testimonials, client results, metrics, or client logos. Placeholders are `[LIKE THIS]`.
- Don't invent policies (delivery, returns, trade-ins) for real clients in their previews.
- No Vercel logo, wordmark, triangle, or copy. We match the design language only.
- Plain, short sentences. No "cutting-edge", "world-class", or hype.

**Styling:**
- Use theme tokens (`bg-background`, `bg-card`, `text-muted`, `border-border`…), never raw greys, on the agency site.
- Example client sites (`components/demo`) are the exception: they keep their own brand colors in both themes, like screenshots.
- Light theme (`#f5f5f5` background, white cards) is the default; dark mode must still work.

**Motion:**
- Animations are pure CSS (keyframes in `app/globals.css`). Don't add `motion` or other animation libraries.
- Scroll reveal: add `data-reveal` to an element; `components/layout/page-effects.tsx` sets `data-in`. Never set attributes on React elements before hydration.
- Respect reduced motion: alternate animation states use `demo-alt` / `ill-alt`, cursors use `demo-cursor` / `ill-cursor`; these hide when motion is reduced.

**Client JavaScript is minimal.** Server components by default; client components only for theme toggle, mobile menu, accordion, currency toggle, contact form, and page effects.

## Git

- Remote: `https://github.com/ExpectationsHACK/deventhous.git`, branch `main`.
- Run `npm run build` and `npx eslint .` before committing. `.env*` (except `.env.example`) and `.claude/` are ignored.
