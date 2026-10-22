# Design

Deventhous follows the design language of Vercel's marketing site: near-monochrome, Geist type, hairline borders, a faint grid, tight spacing, and quiet motion. We copy the language, never the logo, illustrations, or text. Color appears in small accents and inside the example client sites.

## Principles

1. **Monochrome first.** Black, white, and a ladder of greys. Color only for status, accents, and client demos.
2. **Hairlines, not shadows.** 1px borders separate everything. Shadows only lift floating demo windows.
3. **Light by default.** Near-white grey page (`#f5f5f5`) with white cards. Dark mode is supported through the theme toggle.
4. **Generous space, tight type.** Large section padding, negative letter-spacing on headings.
5. **Grid texture.** Faint 64px grid with a radial fade behind heroes and CTA bands.
6. **Quiet motion.** Fade-up reveals, hover border shifts, looping demo animations. Nothing bounces.

## Tokens (`app/globals.css`)

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--background` | `#f5f5f5` | `#000000` | Page |
| `--background-2` | `#ececec` | `#0a0a0a` | Hover, footer, wells |
| `--card` | `#ffffff` | `#0a0a0a` | Cards, inputs |
| `--foreground` | `#0a0a0a` | `#ededed` | Text, primary buttons |
| `--muted` | `#5f5f5f` | `#a1a1a1` | Secondary text |
| `--border` / `--border-strong` | `#e2e2e2` / `#cccccc` | `#1f1f1f` / `#333333` | Hairlines |
| `--accent` | `#0070f3` | `#3291ff` | Links, focus ring, "Recommended" |
| `--success` | `#0cce6b` | `#50e3c2` | Status, score rings |

Tailwind v4 exposes these as `bg-background`, `text-muted`, `border-border`, etc. (`@theme inline`). Radius: 6px (`rounded-sm`), 8px (`rounded-md`), 12px (`rounded-lg`).

## Typography

Geist Sans and Geist Mono (`geist` package). Scale tokens: `text-display` (72/44px), `text-h1` (48/36px), `text-h2` (36/30px), `text-h3`, `text-body-lg`, `text-body`, `text-small`, `text-label` (12px mono, uppercase eyebrows and tags).

## Layout

- Content column: max 1200px, 24px gutters (16px on mobile), framed by vertical hairlines on large screens.
- `Section` (`components/ui/section.tsx`) adds a top hairline with "+" crosshair marks at the frame corners.
- Section padding: 64px mobile, 96–112px desktop.

## Components

`components/ui`: `Button`/`ButtonLink` (primary, secondary, ghost), `Card` (hover border + cursor spotlight), `Badge` (mono, uppercase), `SectionHeader`, `LinkArrow`, `CheckList`, `FaqAccordion` (Radix), `Price` (₦/$), `CurrencyToggle`, `ScoreRing`, `CodeWindow`.

`components/sections`: hero, package strip, services bento, why, performance, automation band, packages grid, ladder, comparison table, standalone services, process and payment terms, work, FAQ, CTA band, page hero.

## Motion

- **Reveal:** `data-reveal` elements fade up 12px over 400ms once, driven by `PageEffects` after hydration. A 4s safety net shows everything if JavaScript never runs.
- **Hover:** border brightens; cards show a soft radial spotlight that follows the cursor (fine pointers only).
- **Reduced motion:** all reveals and loops are disabled; alternate animation states are hidden.

## Example client sites (`components/demo`)

Fictional businesses that show what each package looks like. Each keeps its own brand palette in both themes, like a screenshot.

| Demo | Package | Palette |
| --- | --- | --- |
| Ada & Co. Events (landing page) | Launchpad | Plum, gold, cream |
| Kíkí Atelier (fashion store) | Business Store | Cream, terracotta, adire indigo |
| Lekki Smile Dental (clinic) | Pro Site / Intelligent Business (with AI chat) | White, teal |
| Prime Homes Lagos (property) | Growth Site | Forest green, gold, sunset skyline |
| Brightpath Academy (LMS) | Academy | Indigo, violet |

**Sizing:** demos are drawn in `em` on a `1.4cqw` base inside a 16:10 `DemoScreen`, so they scale like a screenshot at any width. Loops run on a 6s cycle via `loop()`, offset by `--d` so the hero carousel restarts each site's animation when it appears.

**Client work previews (`components/demo/clients`):** JD Hub (navy and electric blue gadget store), DML Prints (CMYK magenta/cyan/yellow printing store), Namorx Couture (ivory, black, and gold editorial fashion). Each renders as a cropped thumbnail in `DemoScreen` and as a full one-page preview in `PageScreen`, which clamps the base font for readability and restacks with `@max-3xl/page:` container-query variants.

## Service illustrations (`components/illustrations`)

Theme-aware animated drawings, 4:3 (AI automation is 2:1), sized in em from a cqw base:

- **Payments:** checkout → choose card/transfer/USSD → processing → payment successful
- **E-commerce:** an order card moves New → Packed → Shipped; stock decrements; WhatsApp notification
- **SEO:** your listing climbs from #4 to #1; organic traffic line draws upward
- **AI automation:** WhatsApp, website chat, and Instagram flow into an AI agent, which completes four outcomes
- **Courses:** lessons tick off, progress fills, certificate unlocks
- **Support:** uptime bars, a backup completing, security updates, an alert resolved

Steps use shared keyframes `ill-on-1` … `ill-on-5` (reveal at step N, hide together at the end), plus `ill-phase-a/b/c` for state swaps.

## Icons

`lucide-react`, stroke 1.5–2. Lucide ships no brand icons; use generic icons (for example, a camera for Instagram).
