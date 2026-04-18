# Portfolio

Personal portfolio site built with [Astro](https://astro.build) and deployed to GitHub Pages at [ryanelk.github.io/portfolio](https://ryanelk.github.io/portfolio).

## Stack

- **Astro 5** — static site framework
- **TypeScript** — strict mode
- **GitHub Actions** — auto-deploys to GitHub Pages on push to `main`
- **Last.fm API** — `/api/nowplaying` endpoint for live music status

## Getting Started

```sh
npm install
npm run dev
```

The dev server starts at `http://localhost:4321/portfolio`.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm run dev`     | Start local dev server at `localhost:4321`  |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview the production build locally        |

## Testing

There is no automated test suite. To verify changes work correctly:

1. Run `npm run dev` and check your changes in the browser
2. Run `npm run build` to confirm the production build succeeds with no errors
3. Run `npm run preview` to spot-check the built output before opening a PR

## Contributing / Pull Requests

1. Branch off `main` with a descriptive name — e.g. `feature-about-page` or `fix-footer-icons`
2. Make your changes and verify them with the steps above
3. Open a PR against `main`
4. Once merged, GitHub Actions automatically builds and deploys the site to GitHub Pages

## Adding a New Project

All projects are defined in `src/config/ryan.ts` in the `projects` array. Each entry has four fields:

```ts
{
  name: 'My Project',
  description: 'Short description of the project. Made in Godot for Some Game Jam.',
  img: 'assets/projects/15.png',
  date: new Date(2026, 0, 1), // year, month (0-indexed), day
},
```

Steps:

1. **Add the image** — place it in `public/assets/projects/` and note the filename.
2. **Add the entry** — open `src/config/ryan.ts` and append a new object to the `projects` array with the fields above.
3. **Verify** — run `npm run build` and check for errors. Run `npm run dev` to preview the work page.

The work page sorts projects by `date` descending, so the newest project will appear first automatically.

## Project Structure

```
src/
├── components/       # Reusable Astro components
├── config/           # Per-user site config (ryan.ts, reina.ts, types.ts)
├── content/work/     # Markdown files for collab project detail pages
├── layouts/          # BaseLayout.astro
├── pages/            # Routes — index, about, work, resume, 404
│   └── api/          # nowplaying.ts (Last.fm now-playing endpoint)
└── utils/            # parseProject.ts — transforms config projects for the work page
public/
└── assets/
    ├── projects/     # Project images (0.png, 1.png, ...)
    └── resume/       # Resume PDFs
```
