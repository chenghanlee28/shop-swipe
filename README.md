# 小物快選 Shop Swipe

Tinder-style swipe shopping web app — browse products with a swipe.

**Live site:** https://chenghanlee28.github.io/shop-swipe/

## Features

- Tinder-style card swiping (touch + mouse via Pointer Events API)
- Swipe right ❤ to add to cart, swipe left ✕ to skip
- Tap card or press ℹ to see product details
- Welfare product algorithm with pity guarantee
- Shopping cart drawer
- Google / LINE / Guest login (triggered only at checkout)
- Checkout form with order summary
- Fully responsive, mobile-first

## Setup

No build step — pure HTML/CSS/JS.

```bash
# Local preview
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/chenghanlee28/shop-swipe.git
git push -u origin main
# Enable GitHub Pages in repo Settings → Pages → Deploy from main branch
```

## Config

In `app.js` (top of file):

```js
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';   // from Google Cloud Console
const LINE_CHANNEL_ID  = 'YOUR_LINE_CHANNEL_ID';    // from LINE Developers
```

Until real IDs are set, login buttons use demo mode (instant mock login).

## Product Images

Replace `products/images/` with real photos and update `products/products.json` image paths.
Current placeholders use `https://picsum.photos/seed/{id}/400/500`.

## Welfare Products Algorithm

`WELFARE_CONFIG` in `app.js`:
- `minInterval: 7` — welfare can't appear within 7 regular cards of the last one
- `maxInterval: 16` — forces a welfare card if 16 regular cards pass without one
- `maxPerSession: 3` — max 3 welfare cards shown per browsing session
- `triggerChance: 0.11` — ~11% random trigger chance after minInterval
