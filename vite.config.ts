import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * BASE PATH (where the site lives on the web)
 * -------------------------------------------
 * GitHub Pages project sites are served from a subpath, e.g.
 *   https://YOUR_USERNAME.github.io/len-mogo-stickers/
 * so every asset URL must start with "/len-mogo-stickers/".
 *
 * You don't need to edit this file: the GitHub Actions workflow
 * (.github/workflows/deploy.yml) sets BASE_PATH automatically from
 * your repository name. Locally it falls back to "/".
 *
 * Custom domain later (e.g. www.lenmogo.com)? Set BASE_PATH to "/"
 * in the workflow — see README.md → "Using a custom domain".
 */
const base = process.env.BASE_PATH || "/";

/**
 * On Vercel, use the project's production address for the canonical link and
 * Facebook share image (Facebook needs a full https:// URL). Vercel provides
 * VERCEL_PROJECT_PRODUCTION_URL automatically; a VITE_SITE_URL you set yourself
 * in Vercel's Environment Variables (e.g. a custom domain) takes priority.
 */
if (!process.env.VITE_SITE_URL && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
  process.env.VITE_SITE_URL = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/`;
}

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
});
