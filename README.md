# Recoda Intelligence — Cinematic 3D SaaS Website

A world-class, conversion-focused, 3D-animated marketing website for **Recoda Intelligence**, a cloud-based digital signage CMS.

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS + CSS variables |
| 3D Engine | React Three Fiber + Drei + Three.js |
| Scroll Motion | Framer Motion + custom Lenis hook |
| Smooth Scroll | @studio-freight/lenis |
| Tilt Effects | react-parallax-tilt |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata & providers
│   ├── page.tsx            # Home page — assembles all sections
│   ├── globals.css         # Global styles, CSS variables, animations
│   ├── opengraph-image.tsx # Auto-generated OG image
│   └── api/
│       └── demo-request/   # POST endpoint for demo bookings
├── components/
│   ├── 3d/
│   │   ├── HeroScene.tsx        # React Three Fiber 3D hero scene
│   │   └── HeroSceneFallback.tsx # CSS/Framer fallback for low-end devices
│   ├── sections/
│   │   ├── Navigation.tsx   # Sticky glass nav with mega-menu
│   │   ├── Hero.tsx         # Full-viewport hero with 3D scene
│   │   ├── SocialProof.tsx  # Marquee logos + count-up stats + quote
│   │   ├── HowItWorks.tsx   # 3-step animated section
│   │   ├── Features.tsx     # Asymmetric bento grid with hover animations
│   │   ├── Solutions.tsx    # Industry tabs with 3D screen mockups
│   │   ├── Templates.tsx    # Filterable template gallery
│   │   ├── Security.tsx     # Enterprise security with shield visual
│   │   ├── Pricing.tsx      # 3-tier pricing cards
│   │   ├── FAQ.tsx          # Animated accordion + support sidebar
│   │   ├── CTABand.tsx      # Full-bleed CTA with aurora background
│   │   └── Footer.tsx       # Multi-column footer + easter egg
│   └── ui/
│       ├── CustomCursor.tsx      # Blob cursor with magnetic behavior
│       ├── ThemeToggle.tsx       # Dark/light toggle
│       └── SmoothScrollProvider.tsx # Lenis wrapper
├── hooks/
│   ├── useLenis.ts     # Smooth scroll initialization
│   ├── useReveal.ts    # Intersection observer reveal
│   └── useCountUp.ts   # Number count-up animation
└── lib/
    └── utils.ts        # cn() helper + low-end device detection
```

## Customization

### Color Palette
Edit `tailwind.config.ts` to change brand colors:
```ts
brand: {
  indigo: "#5B5BFF",   // Primary
  violet: "#8B7CFF",   // Glow
  cyan: "#00E5FF",     // Accent
}
```

### Adding Content
- **New industry tab**: Add to the `industries` array in `Solutions.tsx`
- **New template**: Add to the `templates` array in `Templates.tsx`
- **New FAQ**: Add to the `faqs` array in `FAQ.tsx`

### Demo Request API
The `/api/demo-request` endpoint accepts POST requests with:
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "company": "string",
  "phone": "string",
  "screens": "string",
  "message": "string"
}
```
Wire it to your CRM or email service in `src/app/api/demo-request/route.ts`.

## Performance

- 3D scene dynamically imported (code-split)
- Low-end device fallback (< 4 CPU cores or `prefers-reduced-motion`)
- `prefers-reduced-motion` respected globally — all animations disabled
- Images use `next/image` with priority loading on hero
- Custom cursor and smooth scroll skipped on mobile/touch

## Accessibility

- WCAG 2.1 AA colour contrast
- Full keyboard navigation with visible focus rings
- All 3D scenes have `aria-label` and `role="img"`
- Skip-to-content link
- Mobile overlay nav has `role="dialog"` and `aria-modal`
- Form fields have associated labels

## Deployment

Deploy to Vercel with zero configuration:

```bash
vercel deploy
```

Set any environment variables in the Vercel dashboard.
