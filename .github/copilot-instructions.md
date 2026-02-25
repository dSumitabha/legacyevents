## Purpose
This file tells AI coding agents how this repository is organized and which patterns and files matter when making changes.

## Quick start (developer workflow)
- Run dev server: `npm run dev` (uses Next.js app router under `src/app`).
- Build: `npm run build` and serve: `npm run start`.
- CSS: Tailwind + `src/app/globals.css` (postcss configured).

## Architecture overview (big picture)
- Next.js (App Router) with source in `src/app` — `layout.tsx` sets global CSS and fonts, `page.tsx` composes the home page from section components.
- UI components live in `src/components` grouped by purpose: `sections/`, `portfolio/`, `testimonial/`.
- Data is kept as plain typed modules under `src/data` (example: `src/data/PortfolioItems.ts` exports an array of typed items used by portfolio components).
- Path alias: imports use `@/` (see `tsconfig.json` -> `@/*` -> `./src/*`). Use `@/components/...` when adding or editing imports.

## Project-specific patterns & conventions
- Components are TypeScript React functional components and are default-exported. Example import: `import HeroSection from "@/components/sections/HeroSection"` (see `src/app/page.tsx`).
- Data-driven UI: prefer adding typed arrays in `src/data` and consuming them in components (see `PortfolioItems.ts`).
- Static assets should go in `public/` (examples under `public/portfolio/`). Use absolute URLs like `/portfolio/event-1.jpg`.
- Fonts are configured with `next/font` inside `src/app/layout.tsx` — preserve that pattern when altering typography.

## Key files to inspect for most changes
- [src/app/page.tsx](src/app/page.tsx#L1-L40) — home composition
- [src/app/layout.tsx](src/app/layout.tsx#L1-L80) — global layout, fonts, globals.css
- [src/components/sections](src/components/sections) — main page sections
- [src/components/portfolio](src/components/portfolio) — portfolio item + lightbox
- [src/data/PortfolioItems.ts](src/data/PortfolioItems.ts#L1-L200) — canonical portfolio data shape
- `tsconfig.json` — shows `@/` path mapping
- `package.json` — project scripts and core deps (`next`, `react`, `framer-motion`, `tailwindcss`)

## Integration & external dependencies
- Next.js app router (Next v16), React 19, Tailwind CSS + PostCSS, Framer Motion for animations. Keep versions in `package.json` in mind when adding features.
- Deployment target: README references Vercel; follow Next.js deployment recommendations.

## Editing guidance for AI agents
- Make minimal, focused edits; prefer updating or adding a component inside `src/components` and wire it from `src/app/page.tsx`.
- When adding imports, use `@/` alias not relative `../../../` chains.
- Update `src/data/*` for content changes instead of hardcoding in components.
- Verify styling by running `npm run dev` and checking http://localhost:3000.

## Known omissions
- There are no automated tests or CI config in the repository. Changes should be validated manually by running the dev server and visually checking pages.

If any part of this guidance is unclear or you'd like the agent to follow stricter rules (commits, PR messages, tests), tell me which areas to expand.
