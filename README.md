# [AGENCY NAME] — Premium Creative Agency

A from-scratch Next.js App Router creative agency landing page with:
- Editorial / cinematic art direction
- Framer Motion reveals and interaction
- Lenis smooth scrolling
- Responsive asymmetrical project layouts
- Desktop service accordion + mobile-friendly interaction
- Preloader sequence
- Reduced-motion support
- Centralized project placeholder data
- Semantic HTML and accessible controls

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Replace placeholder content

1. Agency name, copy and contact details:
   - `components/Navigation.tsx`
   - `components/Hero.tsx`
   - `components/StudioIntro.tsx`
   - `components/Contact.tsx`
   - `components/Footer.tsx`

2. Projects and images:
   - `data/projects.ts`

3. Studio image:
   - `components/StudioCulture.tsx`

4. Design tokens:
   - `app/globals.css`
   - `--background`, `--foreground`, `--muted`, `--accent`, `--border`, `--surface`

## Notes

The supplied Unsplash images are temporary visual placeholders only. Replace them with licensed/local project assets before production.

For production, consider moving project images to `public/images` and using `next/image` for optimized local/image-CDN delivery.


## Revision 02 — startup fixes

This revision fixes the startup errors reported in the browser:
- Added the `@/*` TypeScript path alias used by imports such as `@/components/Hero`.
- Added the Tailwind v4 PostCSS adapter dependency required by `postcss.config.mjs`.
- Fixed the `"use client"` directive in `components/SmoothScroll.tsx`.
- Added a Turbopack root setting to avoid workspace-root/package-lock ambiguity when the project is run from a nested directory.

After replacing the project, run:

```bash
npm install
npm run dev
```


## Revision 03 — robust module resolution

The previous browser log still showed `Can't resolve '@/components/...'` even after Next.js rewrote `tsconfig.json`. To make this package robust across Windows/Turbopack/workspace extraction, the application no longer depends on the `@/*` path alias. Component/data imports now use explicit relative paths.

This is intentional: it removes an unnecessary source of module-resolution failure without changing the visual design.
