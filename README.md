# SimpliFlow Consulting — Website

A complete, modern, multi-page website for **SimpliFlow Consulting**, a digital consulting firm specializing in web design, process automation, and digital marketing.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations & page transitions)
- **Lucide React** (icons)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Navbar, Footer, BackToTop)
│   ├── globals.css         # Global styles & Tailwind config
│   ├── page.tsx            # Home page (/)
│   ├── services/
│   │   └── page.tsx        # Services page (/services)
│   ├── about/
│   │   └── page.tsx        # About page (/about)
│   ├── work/
│   │   └── page.tsx        # Portfolio page (/work)
│   └── contact/
│       └── page.tsx        # Contact page (/contact)
└── components/
    ├── Navbar.tsx           # Sticky navigation with mobile hamburger menu
    ├── Footer.tsx           # Footer with links, social icons, contact info
    ├── BackToTop.tsx        # Floating back-to-top button
    ├── home/               # Home page sections
    │   ├── HeroSection.tsx
    │   ├── ServicesOverview.tsx
    │   ├── WhySimplIFlow.tsx
    │   ├── StatsBar.tsx
    │   ├── Testimonials.tsx
    │   └── CTABanner.tsx
    ├── services/           # Services page sections
    │   ├── ServicesHero.tsx
    │   ├── WebDesignSection.tsx
    │   ├── AutomationSection.tsx
    │   ├── MarketingSection.tsx
    │   └── ServicesCTA.tsx
    ├── about/              # About page sections
    │   ├── AboutHero.tsx
    │   ├── CompanyStory.tsx
    │   ├── MissionValues.tsx
    │   ├── TeamSection.tsx
    │   └── HiringBanner.tsx
    ├── work/               # Portfolio page
    │   └── WorkPageClient.tsx  # Client component with filter logic
    └── contact/            # Contact page
        └── ContactPageClient.tsx  # Form, map, FAQ accordion
```

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, services overview, value props, stats, testimonials, CTA |
| `/services` | Services | Detailed breakdown of web design, automation, and marketing |
| `/about` | About | Company story, mission, values, team, hiring banner |
| `/work` | Portfolio | Filterable project grid (All / Web Design / Automation / Marketing) |
| `/contact` | Contact | Contact form, contact info, map placeholder, FAQ accordion |

## Design System

| Property | Value |
|----------|-------|
| Primary color | `#0F172A` (dark navy) |
| Accent color | `#6366F1` (indigo) |
| Background | `#F8FAFC` (light gray) |
| Body font | Inter |
| Heading font | Plus Jakarta Sans |

## Features

- Fully responsive (mobile, tablet, desktop)
- Sticky navbar with active link highlighting and mobile hamburger menu
- Smooth scroll behavior
- Framer Motion animations (fade-in, slide-up, stagger effects)
- Filterable portfolio grid with AnimatePresence transitions
- Working contact form with submission state
- FAQ accordion with animated open/close
- Back-to-top button (appears after 400px scroll)
- SEO meta tags on every page
- Glassmorphism UI elements
- Hover animations on all cards and buttons
- Unsplash images for all photography (no API key required)
