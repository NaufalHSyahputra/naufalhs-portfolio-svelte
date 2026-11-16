# Naufal Hakim Syahputra — Portfolio

A SvelteKit recreation of the original portfolio. Résumé content lives in `src/lib/resume.json`; images and downloadable CVs live in `static/assets`.

```sh
npm install
npm run dev
npm run check
npm run build
```

## Cloudflare Workers

The project uses the Cloudflare adapter for SvelteKit 2. In Cloudflare Workers Builds, use `npm run build` as the build command and `npx wrangler deploy` as the deploy command. The Worker and assets are configured in `wrangler.jsonc`; the Worker name matches the existing Cloudflare project.

For a local Cloudflare runtime preview, run `npm run build` followed by `npx wrangler dev`.
