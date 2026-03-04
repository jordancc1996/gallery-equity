# Gallery Equity

Lead-capture landing page for Gallery Equity — art finance and equity solutions for high-net-worth collectors.

## Stack

- **Astro** (static)
- **Tailwind CSS v4**
- **Netlify** (hosting + forms)

## Commands

| Command        | Action                                      |
|----------------|---------------------------------------------|
| `npm run dev`  | Start dev server at `localhost:4321`        |
| `npm run build`| Build for production (output in `dist/`)    |
| `npm run preview` | Preview production build locally       |

## Deploy (Netlify)

Connect the repo to Netlify; the adapter is already configured. Ensure the form is present in the built HTML (it is by default).

## OG image

Add a 1200×630 image at `public/og-image.jpg` for social previews (dark background, “Gallery Equity” in white recommended). The layout already references it in meta tags.

## Placeholder copy

Replace any `[USER WILL PROVIDE]` or placeholder headlines/copy in:

- `src/components/Hero.astro`
- `src/components/FAQ.astro` (subtext under “Everything You Need to Know”)
- `src/components/ContactCTA.astro`
- `src/components/BlogPreview.astro` (titles, dates, links when you have real posts)

## Form

The contact form uses Netlify Forms. Form name: `gallery-equity-inquiry`. Submissions appear in the Netlify dashboard.
