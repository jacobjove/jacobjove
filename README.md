# jacobjove.org

Personal site: a static [Astro](https://astro.build) site with Markdown content.

- `src/content/pages/about.md`: the About page.
- `src/content/essays/*.md`: essays. Frontmatter: `title`, `description`, `date`, optional `draft: true` (shown only in `pnpm dev`). The Writing page, its nav link, and the RSS feed link appear once an essay is published.
- `public/`: portrait, résumé, favicon.

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # dist/
```

Deploys to Cloudflare Pages on every push to `main` (`.github/workflows/deploy.yml`). Pull requests only build.
