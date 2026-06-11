# Gemini Prompt — Shop Swipe UX Improvement

## Context

I'm building **小物快選 (Shop Swipe)**, a mobile-first Tinder-style shopping web app prototype. The whole app lives in three files with zero dependencies:

- `index.html` — all CSS + HTML (≈1000 lines)
- `app.js` — all JavaScript logic (≈900 lines)
- `products/products.json` — 50-product catalog
- `images/product-{1..50}.jpg` — local product photos

**Tech stack:** Pure vanilla HTML/CSS/JS. No framework, no build tool, no npm. Runs directly in any browser (open index.html).

---

## What the App Does

Users swipe product cards like Tinder:
- **Swipe RIGHT / ❤ button** → adds product to cart
- **Swipe LEFT / ✕ button** → skips product
- **Tap card / ℹ button** → opens product detail modal
- "加入購物車" button in modal = right swipe (adds to cart AND advances to next card)

### Card Stack
Three cards visible simultaneously with CSS 3D-stacked perspective (front card is interactive, back cards scale down). Cards fly off-screen with CSS animations (`fly-right` / `fly-left`). New cards fade in from behind. Implemented via the Pointer Events API (pointerdown/pointermove/pointerup) with a tap-vs-drag distinction.

### Product Strategy
- **Products 1–40 (regular):** Everyday lifestyle items — ceramics, leather goods, jewelry, running shoes, yoga gear, candles, storage baskets, skincare, etc. Priced NT$199–NT$1,980.
- **Products 41–50 (welfare/福利品):** Flagship tech at COST PRICE — AirPods Pro 2 (NT$2,290, was NT$7,490), iPhone 15 (NT$12,900, was NT$28,900), Sony WH-1000XM5, Apple Watch, Nintendo Switch OLED, iPad Air M2, DJI Mini 4 Pro, Dyson Airwrap, GoPro HERO12, Galaxy Buds2 Pro. Strategy: sell at a loss like Costco rotisserie chickens — the shock value hooks users and builds app habit.

### Welfare Card Algorithm
Welfare cards appear probabilistically between regular cards:
- minInterval: 7 (at least 7 regular cards before next welfare)
- maxInterval: 16 (forces a welfare card after 16 consecutive regular cards)
- triggerChance: 11% per card after minInterval
- maxPerSession: 3 welfare cards per session

### Cart & Checkout
- Cart items shown in a slide-in drawer, supports quantity adjustment and item removal
- Checkout flow: Login (Google / LINE / guest) → order form → success screen
- Cart persists in memory only (no localStorage)

### Other Features
- Onboarding overlay (shown once, stored in localStorage)
- Countdown timer on welfare cards (dynamic, seeded per product)
- Social proof numbers on regular cards ("🔥 X 人今天加入購物車")
- Toast notifications on swipe/cart actions
- Keyboard shortcuts: → or L (like), ← or N (nope), I (info), Esc (close modal)
- Responsive: mobile-first, works on iPhone/Android, iPad, and desktop

---

## Current UI Structure

```
┌─────────────────────────────┐
│  Header: Logo | 🛒 | Login  │  ← sticky, glassmorphism
├─────────────────────────────┤
│                             │
│   [card-back-2]             │
│    [card-back-1]            │
│     [card-front]            │  ← full-image Tinder card
│      - product photo        │
│      - dark gradient        │
│      - name, price, tag     │
│      - countdown/social     │
│                             │
├─────────────────────────────┤
│   ✕      ℹ      ❤          │  ← 3 action buttons
└─────────────────────────────┘
```

Modals appear as bottom sheets: product detail, login, checkout.

---

## What I Want You to Improve

Please review the full code (index.html + app.js) and suggest or implement concrete UX improvements. Focus on:

1. **Swipe feel** — Does the card physics feel natural? The snap-back threshold is 80px. The rotation is `currentX * 0.08` deg. Any micro-interaction improvements?

2. **Welfare card experience** — When a welfare card appears, is the urgency/excitement communicated well? We have a gold pulsing glow, shimmer effect, "⚡ 成本價出清 · 限量" tag, and live countdown. What else would make a user feel they MUST swipe right?

3. **Empty cart → engagement** — When users open an empty cart, how can we better guide them back to swiping?

4. **Post-swipe feedback** — Right now a toast says "❤ 已加入購物車: [name]". Is there a better way to confirm the action without interrupting the next card?

5. **Onboarding** — The onboarding overlay has a swaying card animation and hints (left = skip, right = like). Could it be more engaging? (Should we add a live demo swipe?)

6. **Product detail modal** — Currently shows image, name, price, description, and "加入購物車" button. What additional product context would help conversion? (Reviews? Shipping estimate? Size info?)

7. **Discovery / personalization** — Swiping stats are tracked (`swipeStats.categories`) but never shown to the user during browsing. How could we surface category preference to improve the browse experience?

8. **Accessibility** — Screen reader support, focus management in modals, color contrast on the card gradient text.

9. **Performance** — Cards use `loading="lazy"` on images. Is there a better preloading strategy so the next card's image is always ready before the current card flies off?

10. **Any other UX issues you spot** — Visual hierarchy, touch target sizes, animation timing, color palette, typography scale.

---

## Constraints

- Must stay in vanilla HTML/CSS/JS (no React, no Vue, no build step)
- Must stay a single-page app (no routing)
- Target device: iPhone SE size (375px) and up
- Existing animations must remain smooth at 60fps
- Do NOT add authentication backends — the Google/LINE login is demo-only

Please either suggest improvements with before/after code snippets, or directly rewrite sections of the code with explanations of each change.
