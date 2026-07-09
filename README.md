# New Iona's Refreshment Parlor — Website

Next.js 14 (App Router) + Tailwind CSS build of the New Iona's Refreshment Parlor website
(Infanta, Quezon — est. 1977).

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.js       Root layout, fonts (Fraunces / Work Sans / Space Mono), metadata
  page.js          Home page, assembles all sections
  globals.css      Tailwind directives + small custom utilities
components/
  Header.js        Sticky nav with mobile menu
  Hero.js          Hero section
  TrustBar.js      Stats strip (rating, year established, etc.)
  Story.js         Heritage / "Our Story" section
  Menu.js          Signature dishes with category filter tabs
  Experience.js     Dining experience section
  Gallery.js       Photo placeholder gallery
  Testimonials.js  Sample guest reviews
  Location.js      Address, hours, contact, map
  Faq.js           FAQ accordion
  FinalCta.js      Closing call-to-action banner
  Footer.js
  Reveal.js        Scroll-reveal animation wrapper
```

## Before launch — replace placeholder content

- **Photos**: every image slot (hero, dish cards, gallery, dining room) is currently a
  CSS/SVG placeholder. Swap these for real photography — this is the single biggest
  upgrade you can make.
- **Testimonials** (`components/Testimonials.js`): sample quotes — replace with real
  Google/Facebook reviews.
- **Menu prices** (`components/Menu.js`): confirm current prices for each dish.
- **Contact details** (`components/Location.js`, `components/Footer.js`): landline,
  mobile numbers, and delivery partner are current as of research — double check before
  publishing.

## Design tokens

Color palette, type scale, and other design tokens live in `tailwind.config.js` under
`theme.extend`. Fonts are loaded via `next/font/google` in `app/layout.js`.
