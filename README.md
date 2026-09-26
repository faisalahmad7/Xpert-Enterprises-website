# Xpert Enterprises — Website

React + Vite site for Xpert Enterprises (import/export of organic products).
No router library needed — a small custom router lives in `src/router.jsx`.

## Run it

```
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Where to edit things

- **All text, contact info, and the product catalog:** `src/config/siteConfig.js`
  — one file, no component code to touch.
- **Product photos:** see `IMAGE_GUIDE.md`.
- **Pages:** `src/pages/` (Home, About, Products, Product detail, Contact, 404).
- **Reusable sections:** `src/components/`.
- **Colors, fonts, buttons:** `src/index.css` (CSS variables at the top).

## Build for hosting

```
npm run build
```

Outputs static files to `dist/`, which you can upload to any static host
(Netlify, Vercel, GitHub Pages, cPanel, etc.).
