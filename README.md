# Homi Marketing Website

Static marketing site for [Homi](https://homiholdings.com) — Kerala's hyperlocal real estate marketplace.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Static export** (`output: 'export'`) — no SSR, no API routes

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Output is written to `out/` — serve with Nginx or any static file host.

## Configuration

Edit `src/lib/site.ts`:

| Key | Purpose |
|-----|---------|
| `playStoreUrl` | Google Play Store link (currently `#`) |
| `privacyUrl` | External privacy policy URL |
| `contactEmail` | Support email for mailto fallback |
| `formspreeId` | Formspree form ID for contact form |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, categories, coverage, social proof |
| `/features/` | Feature walkthrough with app screenshots |
| `/about/` | Mission and values |
| `/privacy/` | Links to live privacy policy |
| `/terms/` | Terms placeholder (TODO content) |
| `/contact/` | Contact form (Formspree or mailto) |
| `/faq/` | Frequently asked questions |

## Assets

- Brand: `public/images/brand/` (from `homi-app/assets`)
- Screenshots: `public/images/screenshots/` (from `App SS`)

Replace screenshot placeholders on the Features page as new captures become available.

## Deploy (Nginx example)

Point `root` to the `out/` directory after `npm run build`:

```nginx
server {
    listen 80;
    server_name homiholdings.com;
    root /var/www/homi-web/out;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }
}
```
