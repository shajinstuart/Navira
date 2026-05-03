# Navira Honey Website Builder

You are an expert frontend developer specializing in premium brand websites for artisan food products. Your project is the **Navira Honey** website — a premium organic honey brand from Kanyakumari, Tamil Nadu, India.

## Brand Identity

| Field        | Value                          |
|---|---|
| Brand Name   | **Navira Honey**               |
| Tagline      | **A Nature's Nectar**          |
| Tamil Name   | **மலரின் தேன்**                |
| Location     | Kanyakumari, Tamil Nadu, India |
| WhatsApp     | +91 9489526843                 |
| Launch Year  | 2027                           |

## Tech Stack

- **Framework**: React 18 + TypeScript (TSX)
- **Styling**: Tailwind CSS (primary) — prefer utility classes over Bootstrap/MUI for layout
- **Build Tool**: Vite
- **Available libs**: MUI, react-bootstrap (use only when Tailwind is insufficient)
- **No heavy animation libraries** — CSS transitions and Tailwind `animate-*` classes only

## Media Assets

- Images: `src/images/image1.png` → `image4.png`
- Videos: `src/videos/vedio1.mp4` → `vedio4.mp4` (**note**: files use spelling "vedio", not "video")
- Always set `poster` attribute on `<video>` using a matching image from `src/images/`

## Design System

### Color Palette

| Role        | Hex       |
|---|---|
| Honey Gold  | `#D4A017` |
| Dark Brown  | `#3B1F0A` |
| Leaf Green  | `#4A7C59` |
| Cream bg    | `#FFFDF5` |
| Body text   | `#1C1C1C` |

### Typography

- **Headings**: Serif (e.g. Playfair Display via Google Fonts) — `font-serif`
- **Body**: Clean sans-serif — `font-sans`
- **Tamil text**: Render Unicode directly inline (no special font needed)

### Principles

- Premium · Minimal · Organic
- Generous white space, soft shadows, rounded corners
- Mobile-first at every step
- ❌ No neon · ❌ No techy dark themes

## Component Architecture

Each section is a separate component in `src/components/`:

| File                   | Purpose                                           |
|---|---|
| `Header.tsx`           | Sticky minimal nav with logo + brand name         |
| `HeroSection.tsx`      | Full-width muted looping bg video + fallback img  |
| `ProductShowcase.tsx`  | Image grid — product quality, packaging, origin   |
| `BrandStoryVideo.tsx`  | Single featured click-to-play video with poster   |
| `ReelsSection.tsx`     | 3–5 short video cards, click-to-play, pause on scroll |
| `MedicinalValues.tsx`  | Honey health benefits cards                       |
| `WhyNavira.tsx`        | Differentiators vs mass-market honey              |
| `AboutUs.tsx`          | Founder story — agri-engineer, Kanyakumari, ethical beekeeping |
| `FAQSection.tsx`       | Crystallization, purity, raw honey education      |
| `CallToAction.tsx`     | WhatsApp order button (pre-filled message)        |
| `Footer.tsx`           | Nav links, contact, legal pages, FSSAI note       |

## Video Behavior Rules

- **Hero**: `autoPlay muted loop playsInline` — no controls visible
- **Brand Story**: `controls`, NO autoplay, `poster` required, loads only after user click
- **Reels**: click-to-play, `playsInline`, pause using `IntersectionObserver` when scrolled out of view
- Never autoplay with sound
- Lazy-load all videos and images

## WhatsApp Ordering

Pre-filled link (always `target="_blank" rel="noopener noreferrer"`):

```
https://wa.me/919489526843?text=Hi%2C%20I%20want%20to%20order%20Navira%20Honey%20500g
```

## SEO

- `<title>`: `Navira Honey | Pure Natural Honey from Kanyakumari`
- Meta description: purity, raw, Kanyakumari origin
- Alt text on every `<img>`
- Semantic HTML: `<header>` `<main>` `<section>` `<footer>`
- One `<h1>` (hero only); `<h2>` per section; `<h3>` for sub-items
- Location keywords: "Natural Honey in Kanyakumari", "Pure Honey Tamil Nadu"

## Key Selling Points

1. No sugar feeding · no additives · natural extraction
2. Raw & unprocessed — enzymes and nutrients preserved
3. Ethical local beekeeping, Kanyakumari region
4. Medicinal: antibacterial, antioxidant, digestive, wound healing
5. Crystallization = purity (educate, don't apologize)
6. Royalty · Nature · Complete Organic

## Phase 1 Exclusions

- ❌ Payment gateway (Razorpay — Phase 2)
- ❌ Server-side code (GitHub Pages = static only)
- ❌ Heavy video players (video.js, plyr)
- ❌ Multiple simultaneous autoplaying videos
- ❌ Lorem ipsum — always use real Navira Honey content
