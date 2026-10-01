# Portfolio-Website

My portfolio website — a dark, Apple-inspired case-study site built with React, TypeScript and Vite.

## Run it locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Where to edit things

| What | File |
|---|---|
| Name, hero text, about, contact, stats, experience, toolkit, education | `src/data/site.ts` |
| Projects and case-study content | `src/data/projects.ts` |
| Colors, fonts, type sizes, spacing | `src/styles/global.css` (`:root` tokens) |
| Grainy gradient background | `.backdrop` in `src/styles/global.css` |
| Résumé PDF | `public/resume.pdf` (replace the file, keep the name) |
| Project screenshots | put files in `public/images/`, then add to a project's `gallery` as `'./images/name.png'` |

**To-dos before sharing:**
- Write the `learned` reflection for each project in `src/data/projects.ts`. Until you do, that section is hidden in production — a dashed reminder box shows only in `npm run dev`.
- Add screenshots/wireframes to each project's `gallery`.

## Project structure

```
src/
  data/            content (edit this first)
  styles/          global tokens + utilities
  components/
    sections/      homepage sections (Hero, Work, Experience, ...)
    art/           animated project illustrations (photo grid, cache grid, state machine)
    Nav, Footer, Button, Chip, Reveal, ProjectTile
  pages/           Home, CaseStudy
  hooks/           useReducedMotion, useSectionNav
```

Routing uses `HashRouter` (URLs look like `/#/work/cpu-fighters`) so every page works on GitHub Pages without server rewrites.

## Deploy (free, GitHub Pages)

1. Push to `main`.
2. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions** (one-time).
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`.

The site will be live at `https://jonaselijah.github.io/Portfolio-Website/`.
