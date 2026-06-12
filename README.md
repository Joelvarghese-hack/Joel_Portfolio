# Bitlane Relocations

Single-page marketing site for Bitlane Relocations, a moving company based in
Kingston, Ontario. One page, no multi-page routing.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger (pinned horizontal scroll stage and path drawing)
- Lenis (smooth scroll)
- Framer Motion (card tilt and CTA micro-interactions)
- Bricolage Grotesque variable font, self-hosted from `public/fonts`

## Run

```bash
npm install
npm run dev    # development
npm run build  # production build
npm run start  # serve the production build
```

## Deployment (GitHub Pages)

Every push to `main` runs `.github/workflows/deploy-pages.yml`, which builds a
static export (`STATIC_EXPORT=1`, `PAGES_BASE_PATH=/Bitlane-Website`) and
publishes it to GitHub Pages:

https://joelvarghese-hack.github.io/Bitlane-Website/

If the first run cannot enable Pages by itself, enable it once in the repo:
Settings, then Pages, then set Source to "GitHub Actions".

## Behavior

- Desktop and tablet (>= 768px): pinned horizontal scroll stage. A continuous
  red SVG path connects six nodes (Hero, Why, What We Move, The Process,
  Service Area, Quote) and draws with scroll. The Service Area node spawns the
  animated Kingston to Toronto to Ottawa to Montreal route polyline.
- Mobile (< 768px): plain vertical scroll with a thin progress line on the
  left edge, one dot per section.
- `prefers-reduced-motion: reduce`: vertical and static everywhere.
- Without JavaScript the page renders as a fully readable vertical document
  and the quote form still submits via `mailto:`.

## TODO before launch

The quote form posts to a placeholder address defined once in
`lib/formSubmit.ts` (`QUOTE_EMAIL`). Swap it with the real quotes inbox.
