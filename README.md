# Bitlane Relocations

Marketing site for Bitlane Relocations, a moving company based in Kingston,
Ontario. Homepage with a scroll-driven 3D truck animation, plus five static
inner pages.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Three.js + React Three Fiber + drei (truck animation only)
- @react-three/postprocessing (bloom on the trail and truck highlights)
- @react-spring/three (truck weight and inertia) + maath (damping)
- GSAP + ScrollTrigger (scroll-to-progress bridge)
- Lenis (smooth scroll)
- Framer Motion (inner page micro-interactions)
- Bricolage Grotesque variable font, self-hosted from `public/fonts`

## Run

```bash
npm install
npm run dev    # development
npm run build  # production build
npm run start  # serve the production build
```

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero, truck scroll animation (Our Process), quote form, Why Bitlane, What We Move, Service Area, coverage stats |
| `/services` | 8 expanded service cards with starting prices |
| `/about` | Company copy and stats |
| `/process` | The four steps in long form |
| `/coverage` | Six cities with distance notes |
| `/contact` | Contact details and the shared quote form |

## Behavior

- Desktop (>= 768px): the homepage process section pins a Three.js canvas.
  A low-poly red truck drives a curved road as you scroll, leaving a glowing
  trail; four milestone cards reveal as it passes; a rotating red pin marks
  the destination.
- Mobile (< 768px): the canvas never mounts. The process renders as a static
  numbered timeline with a thin connecting line.
- `prefers-reduced-motion: reduce`: no canvas, milestone cards in a 2x2 grid,
  everything static.
- Without JavaScript the page renders as a fully readable document and the
  quote form still submits via `mailto:`.

## Deployment (GitHub Pages)

The static export is prebuilt and committed to `dist/`. Every push to `main`
runs `.github/workflows/deploy-pages.yml`, which publishes `dist/` to GitHub
Pages directly (no build on CI):

https://joelvarghese-hack.github.io/Bitlane-Website/

To regenerate `dist/` after changing the site:

```bash
STATIC_EXPORT=1 PAGES_BASE_PATH=/Bitlane-Website npm run build
rm -rf dist && cp -r out dist
```

## TODO before launch

- Replace the placeholder email in `lib/formSubmit.ts` (`QUOTE_EMAIL`).
- Replace the placeholder service pricing in `app/services/page.tsx`.
