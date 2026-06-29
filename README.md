# Bitlane Relocations

Marketing site for Bitlane Relocations, a full-service moving company based in
Kingston, Ontario. Bright green and white theme with a scroll-driven 3D truck
animation, plus five static inner pages.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (green / white / ink design system)
- Three.js + React Three Fiber + drei (truck animation)
- @react-three/postprocessing (bloom on the trail and headlights)
- @react-spring/three (truck weight and inertia) + maath (damping)
- GSAP + ScrollTrigger (scroll-to-progress bridge)
- Lenis (smooth scroll)
- Framer Motion (component micro-interactions)
- Hanken Grotesk variable font (SIL OFL), self-hosted in `public/fonts`

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
| `/` | Hero with quote CTA and rating badges, photo grid, full-service feature grid, advantages, moving checklist, marquee, 3D truck animation, about block, FAQ, blog, quote form |
| `/services` | 8 service cards with starting prices |
| `/about` | Company copy and stats |
| `/process` | The four steps in long form |
| `/coverage` | Six cities with distance notes |
| `/contact` | Contact details and the shared quote form |

## Behavior

- Desktop (>= 768px): the process section pins a Three.js canvas where a green
  low-poly truck drives a curved road, leaves a bloomed light trail, passes
  four milestone cards, and arrives at a rotating pin.
- Mobile (< 768px): the canvas never mounts. The process renders as a static
  numbered timeline.
- `prefers-reduced-motion: reduce`: no canvas, static cards, no marquee motion.
- Without JavaScript the page renders fully and the quote form submits via
  `mailto:`.

## Deployment (GitHub Pages)

The static export is prebuilt and committed to `dist/` on the deployment branch.
Every push to `main` publishes `dist/` to GitHub Pages (no build on CI):

https://joelvarghese-hack.github.io/Bitlane-Website/

To regenerate `dist/` after changing the site:

```bash
STATIC_EXPORT=1 PAGES_BASE_PATH=/Bitlane-Website npm run build
rm -rf dist && cp -r out dist
```

## Assets and TODOs before launch

- Photography is placeholder stock under Creative Commons. See `CREDITS.md`.
- Replace the placeholder email in `lib/formSubmit.ts` (`QUOTE_EMAIL`).
- Replace placeholder service pricing in `app/services/page.tsx`.
- Rating badges (`components/home/RatingBadges.tsx`) use sample medium-tier
  numbers. Swap in real review-platform figures.
