# Unified Workflow & Strategic Initiatives — Portfolio Dashboard

A comprehensive project portfolio management dashboard with a full WBS (Work Breakdown Structure) system, task tracker, asset catalog, and knowledge library — all in a single-page app with dark/light mode toggle.

![screenshot](assets/screenshots/wbs-portfolio.png)

## Live Demo

**Live:** [https://kareembullard.github.io/wbs-portfolio/](https://kareembullard.github.io/wbs-portfolio/)

`index.html` is a fully self-contained single-file app (inline CSS/JS, no external dependencies) served directly from GitHub Pages — no build step. `Unified_Workflow_Strategic_Initiatives_Portfolio_Dashboard.html`, `Unified_Workflow_Strategic_Initiatives_Portfolio_Dashboard-STANDALONE.html`, and `wbs-Portfolio_index.html` are redirect stubs pointing to `index.html`, kept only so old bookmarks/links don't 404. The legacy `app.js`/`style.css` files are no longer referenced. A React/Vite version with TypeScript is also available in `react-src/` for local development.

## Features

- **Overview** — Stats, per-branch progress bars, and the project wiki content
- **WBS** — Full work breakdown structure, click any element to edit
- **Dictionary** — Definitions and descriptions for each WBS element, with branch/tag filter pills
- **Tasks** — Task management with status/priority pills and inline advance
- **Asset Catalog** — Inventory of project assets and deliverables
- **Reporting Forms** — Structured project reporting
- **Knowledge Library** — Reference documents and resources
- Light/dark theme toggle (shared portfolio-wide preference), no manual per-app toggle needed
- Every card is click-to-edit directly, no separate Edit button

## Tech Stack

| Layer | Technology |
|---|---|
| HTML Version | Vanilla HTML + CSS + JavaScript |
| React Version | React 18 + TypeScript + Vite |
| Icons | Font Awesome 6 |
| Fonts | Google Fonts |

## React Version — Local Setup

**Prerequisites:** Node.js 18+

```bash
npm install
npm run build   # TypeScript compile + Vite build
npm run preview
```

## Project Structure

```
├── index.html                   # ← Deploy this (self-contained, no build)
├── Unified_Workflow_..._Dashboard(.html/-STANDALONE.html), wbs-Portfolio_index.html  # redirect stubs → index.html
├── style.css, app.js            # legacy, no longer referenced by index.html
├── src/
│   └── components/             # React component source
├── package.json
└── vite.config.ts
```

## About

Built by Kareem Bullard as part of the King Projects portfolio — a production-grade WBS and portfolio management tool demonstrating advanced dashboard architecture, multi-view navigation, and comprehensive project tracking features.
