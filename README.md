# MP Shop — The Cocoon style storefront

A Vite + React storefront inspired by *The Cocoon Original Vietnam*, with a
shop home page and a checkout / order page. Supports multi-language (English
and Vietnamese) via `react-i18next`.

## Features

- 🛍️ **Shop home page** with hero banner and featured products grid.
- 🧾 **Checkout page** with contact info, shipping address, shipping method,
  payment method, and order summary (quantity selector, promo code, totals).
- 🌐 **Multi-language**: English (`en`) and Vietnamese (`vi`), switchable from
  the header. Selection persists in `localStorage`.
- 🎨 Cream + gold color scheme matching the reference design.
- 🛒 Cart state managed via React Context, persisted to `localStorage`.

## Stack

- [Vite](https://vitejs.dev) + [React 18](https://react.dev)
- [react-router-dom](https://reactrouter.com) for routing
- [react-i18next](https://react.i18next.com) for translations

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview the build
```

## Project structure

```
src/
  components/   # Header, Footer, …
  context/      # CartContext (provider + hook)
  data/         # static product list + helpers
  locales/      # en/, vi/ translation JSON files
  pages/        # Home, Checkout
  styles/       # global.css (theme tokens + components)
  i18n.js       # i18next config
  main.jsx      # entry point
  App.jsx       # routes
```

## Demo promo code

Type `COCOON10` in the promo input on the checkout page to apply a 10%
discount.
