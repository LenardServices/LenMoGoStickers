# Len Mogo Stickers — Website

Static one-page website for **Len Mogo Stickers** (Monopoly GO sticker services, event carries and invite bar filling). It's an information page: every button sends visitors to the Facebook page, where prices, availability and orders are handled.

Built with React, TypeScript, Vite, Tailwind CSS and Lucide icons. No backend, database, login or payments.

---

## Everyday edits — one file

Almost everything you'll want to change lives in **`src/config/site.ts`**:

| What | Where in `site.ts` |
|---|---|
| Facebook page link | `links.facebookPage` |
| Messenger link | `links.messenger` |
| Discord (optional, `""` hides it) | `links.discord` |
| Business name, descriptions, hero text, disclaimer | `brand` |
| Button labels | `labels` |
| The six services (title, text, icon, color, artwork) | `services` |
| "Why choose us" points | `reasons` |
| How It Works steps | `steps` |
| FAQ | `faqs` |

Current links:

```ts
facebookPage: "https://www.facebook.com/profile.php?id=61595897465452",
messenger:    "https://m.me/61595897465452",
```

If you later give the page a username (e.g. `lenmogostickers`), change both to
`https://www.facebook.com/lenmogostickers` and `https://m.me/lenmogostickers`.

### Images

All images are in **`public/images/`**. Replace a file with one of the same name to swap it:

| File | Used for |
|---|---|
| `logo.webp` | Logo in the header, hero, about card, CTA, footer |
| `partners-event.webp` | Partners Carry card |
| `invite-bar.webp` | Invite Bar Filling card — **shows a price, update it when the price changes** |
| `og-image.jpg` | Preview picture when the link is shared on Facebook (1200×630) |
| `../favicon.png`, `../apple-touch-icon.png` | Browser tab / phone home-screen icons |

To add artwork to another service card, put the file in `public/images/` and add an `image: { src, alt }` block to that service in `site.ts` (copy the Partners Carry one).

Colors and fonts are set at the top of `src/styles/index.css` (`@theme`).

---

## Run it on your computer

Requires [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install        # first time only
npm run dev        # opens a live preview at http://localhost:5173
npm run build      # checks types and builds the final site into dist/
npm run preview    # serves the built site to double-check it
```

After your first `npm install`, commit the generated `package-lock.json` — it pins exact package versions so every deploy builds the same way.

---

## Publish on GitHub Pages (one-time setup)

1. Create a repository on GitHub, e.g. `len-mogo-stickers`.
2. In this folder:
   ```bash
   git init
   git add .
   git commit -m "Len Mogo Stickers website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/len-mogo-stickers.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Open the **Actions** tab and wait for "Deploy to GitHub Pages" to turn green (re-run it once if the first run started before step 3).
5. Your site is live at `https://YOUR_USERNAME.github.io/len-mogo-stickers/`.

The workflow (`.github/workflows/deploy.yml`) figures out the right base path from your repository name automatically, so you don't need to edit `vite.config.ts`. A repository named `YOUR_USERNAME.github.io` is served from the root instead.

## Updating the site

```bash
# edit src/config/site.ts (or swap an image)
git add .
git commit -m "Update FAQ"
git push
```

Every push to `main` rebuilds and redeploys the site in a minute or two.

## Publish on Vercel instead

1. Push this project to GitHub (steps above, without the Pages settings).
2. On [vercel.com](https://vercel.com), sign in with GitHub → **Add New… → Project** → **Import** your repository.
3. Vercel detects **Vite** automatically (build `npm run build`, output `dist`). Click **Deploy**.

Every push to `main` redeploys. The share image and canonical URL use your `*.vercel.app` address automatically. For a custom domain, add it under Project → Settings → Domains and set the environment variable `VITE_SITE_URL` to `https://yourdomain.com/`.

Using only Vercel? Delete the `.github` folder so GitHub doesn't also try to deploy to Pages.

## Using a custom domain later

1. In `.github/workflows/deploy.yml`, set `CUSTOM_DOMAIN: "www.yourdomain.com"`.
2. Create `public/CNAME` containing just `www.yourdomain.com`.
3. In GitHub → Settings → Pages, enter the domain and follow GitHub's DNS instructions.

The workflow then builds with base path `/` and uses your domain for the canonical URL and Facebook share image.

## Checking the Facebook preview

After deploying, paste your site URL into Facebook's [Sharing Debugger](https://developers.facebook.com/tools/debug/) and click **Scrape Again** to refresh the preview image and text.

---

## Project structure

```
.github/workflows/deploy.yml   GitHub Pages build + deploy
public/
  images/                      logo, service artwork, share image
  favicon.png, apple-touch-icon.png
src/
  config/site.ts               ← all editable content and links
  components/                  Navbar, Hero, About, Services, ServiceCard,
                               WhyChooseUs, HowItWorks, FacebookCTA, FAQ, Footer
  styles/index.css             Tailwind + brand colors/fonts
  App.tsx, main.tsx
index.html                     page title, description, share tags
vite.config.ts                 build settings (base path)
```

---

*Len Mogo Stickers is an independent service page and is not affiliated with or endorsed by Scopely or Monopoly GO.*
