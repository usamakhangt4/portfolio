# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single static portfolio site built with **Astro 7 + Tailwind CSS v4 + TypeScript**. There is no backend, database, or API — the only service is the Astro dev server.

### Node version (important)
- The codebase requires **Node 22** (`package.json` `engines.node: 22.x`, README: `>=22.12.0`) and `npm >=9.6.5`.
- Node 22 is installed via `nvm` and set as the nvm default (`nvm alias default 22`). Because `~/.bashrc` sources nvm, fresh interactive/login shells resolve `node v22` and its bundled `npm`. Verify with `node --version` (expect `v22.x`) and `npm --version`.
- Note: the VM's built-in `/exec-daemon/node` is also v22 but ships **without `npm`**, so rely on the nvm-provided Node 22 (which includes npm). If a shell lacks `npm`, run `nvm use 22`.

### Commands
- Install deps: `npm ci` (uses `package-lock.json`; `npm install` also works).
- Dev server (primary service): `npm run dev -- --host 127.0.0.1` → http://localhost:4321 (Astro's default port; pass `--port` to change).
- Type/content check + lint: `npm run check` (runs `astro check`).
- Production build: `npm run build` (runs `astro check` then `astro build`, output in `dist/`).
- Preview built site: `npm run preview`.
- There are no unit/e2e test files in this repo; `astro check` is the main automated gate.

### Notes
- Content lives in `src/content/work/` (case studies), validated by `src/content.config.ts`. Pages are in `src/pages/` (`index.astro`, `work/[slug].astro`). Styling is in `src/styles/global.css`.
- Set `SITE_URL` or `PUBLIC_SITE_URL` for production canonical URLs / sitemap; not required for local dev.
