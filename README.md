# Towhidul Islam — Portfolio

Personal portfolio of **Towhidul Islam** — geospatial researcher in InSAR and climate hazards, and founder of SAR.Sense Geointelligence Lab.

Live site: https://towhidulislam27.github.io/

Built with React, Vite and Tailwind CSS.

## Updating content

All text lives in [`src/data/content.js`](src/data/content.js) — edit it and push; no layout code needs touching.

- Project screenshots: `public/images/` (see the README there)
- Demo videos: `public/videos/` (see the README there)
- Field photos: `public/images/experience/`

## Local development

```bash
npm install
npm run dev
```

## Deployment

Every push to `main` builds and publishes the site to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
(repo **Settings → Pages → Source: GitHub Actions**).
