# Portfolio

Personal portfolio site built with [Astro](https://astro.build) and deployed to GitHub Pages at [ryanelk.github.io/portfolio](https://ryanelk.github.io/portfolio).

## Stack

- **Astro 5** — static site framework
- **TypeScript** — strict mode
- **GitHub Actions** — auto-deploys to GitHub Pages on push to `main`
- **Spotify API** — `/api/nowplaying` endpoint for live music status

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

## Project Structure

```
src/
├── components/     # Reusable Astro components
├── content/work/   # Project entries (Markdown), organized by category
├── layouts/        # BaseLayout.astro
└── pages/          # Routes — index, about, work, resume, 404
    └── api/        # nowplaying.ts (Spotify now-playing endpoint)
public/
└── assets/         # Images and static files
```
