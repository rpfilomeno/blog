# AGENTS.md

Astro 5 blog (Tailwind 4, MDX, TypeScript) deployed to GitHub Pages at https://roger.rogverse.fyi.

## Commands

- `npm run dev` — dev server
- `npm run build` — runs `astro check` (type check) then `astro build`. CI fails if `astro check` fails, so run it before pushing.
- `npm run lint` / `npm run format:check` — ESLint + Prettier (both run in CI). `no-console` is an error.
- `npm run format` — auto-format (Prettier).

## Content / posts

- Posts live in `src/content/blog/` as `.md`; the **filename is the URL slug** (must be URL-safe). Copy `template.md` for the frontmatter shape.
- Frontmatter is schema-validated in `src/content/config.ts`. Allowed fields: `title`, `description`, `pubDate`, optional `updatedDate`, `coverImageCredit`, `cover`. Only these — do not add custom keys.
- `cover:` may be a **remote URL**. `src/plugins/download-covers.mjs` downloads it at build time to `src/assets/blogimages/<slug>/cover.jpg`; `BlogPostLayout` globs that path and renders it via `astro:assets`. Check the downloaded file exists after a build.
- `updatedDate` and `coverImageCredit` are optional; `pubDate` is required.

## Gotchas

- `public/decapcms/config.yml` is stale: it targets `src/content/post` and uses `tags`/`category` fields that don't exist in the content schema. Don't rely on it.
- Formatting is tabs, no semicolons, single quotes (`prettier-plugin-astro`).
- ESLint ignores config files and `public/`, `dist/`, `.astro/`.
- `astro-blog-tui.exe` at repo root is a prebuilt editor binary; don't touch it.
- Node version is managed by mise (`mise.toml`: latest). CI installs with npm.
