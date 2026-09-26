# Adding real product photos

Every product card and product page looks for an image at the path listed in
`src/config/siteConfig.js` (e.g. `/images/products/organic-grains.jpg`).
Until that file exists, the card just shows a colored gradient with the
product's initial — nothing breaks either way.

To add a real photo:
1. Save your image as `.jpg` under `public/images/products/`, using the
   exact filename referenced by that product's `image` field in siteConfig.js.
2. Recommended size: at least 800x600px, landscape orientation.
3. Free stock photo sources: Unsplash (unsplash.com), Pexels (pexels.com).
   Search terms per current placeholder product:
   - organic-grains.jpg → "organic rice grains" / "wheat field harvest"
   - organic-spices.jpg → "indian spices market" / "turmeric powder"
   - organic-pulses.jpg → "lentils pulses bowl"
   - organic-oils.jpg → "cold pressed oil bottle"
   - organic-dry-fruits.jpg → "almonds cashews dried fruit"
   - custom-sourcing.jpg → "shipping containers port" / "warehouse logistics"

Same idea for the navbar/footer logo: `public/images/logo-mark.png` is already
filled in with the logo you sent (background made transparent).
