# Adithya's Graphics - Premium Portfolio Website

A premium, production-ready portfolio website for graphic designer **Adithya Krishnan**, built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **GSAP ScrollTrigger**, and **Lenis smooth scrolling**.

## 🎨 Features

### Design & Animation
- ✨ Premium dark theme with accent red color system (#E51A24)
- 🎬 Advanced GSAP ScrollTrigger animations
- 🌊 Smooth scroll experience with Lenis
- 🎭 Framer Motion page transitions and interactions
- 🖱️ Magnetic button effects and hover states
- ✍️ Text reveal animations
- 🎪 Parallax backgrounds and floating particles

### Pages
- 🏠 **Home** - Hero section with animated headlines, services, testimonials, CTA
- 🎨 **Portfolio** - Category-based filtering with masonry layout
- 👤 **About** - Story, expertise, toolkit, and lifestyle sections
- ⭐ **Testimonials** - All client testimonials with star ratings
- 💎 **Promises** - Core promises with numbered cards
- 📧 **Contact** - Contact form with WhatsApp and email CTAs

### Technical
- 📱 Fully responsive (mobile-first approach)
- ♿ WCAG accessibility compliance
- 🔍 SEO optimized with metadata and structured data
- ⚡ Performance optimized (lazy loading, image optimization)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

## 📁 Key Folders

- `/app` - Pages and routes
- `/components` - Reusable components (UI, sections, common)
- `/hooks` - Custom React hooks
- `/lib` - Utilities, animations, and constants
- `/types` - TypeScript definitions
- `/public` - Static assets (images, portfolio, robots.txt)

## 🎨 Color System

All colors use CSS variables (editable in `app/globals.css`):
- Background: `#0D0D11`
- Surface: `#1A1A22`
- Accent Red: `#E51A24`
- Text: `#FFFFFF` (headings), `#94A3B8` (body)

## ✏️ Content & Information

All static content is in `lib/constants.ts`:
- `SERVICES` - 7 service offerings
- `TESTIMONIALS` - Client testimonials
- `FEATURES` - Why Choose Us items
- `PROMISES` - Core promises
- `EXPERTISE` - Expertise sections
- `CONTACT_INFO` - Contact details

Update this file to change content across all pages.

## 🖼️ Replacing Brand Assets

### Logo
- Replace `/public/images/logo.png` with your logo
- Update navbar and hero sections if needed

### Hero Background
- Replace `/public/images/hero-cover.jpg` with your image (1920x1080px+)

### Portfolio Images
Update portfolio items in:
- `components/sections/SelectedWorks.tsx`
- `app/portfolio/page.tsx`

## 📋 Pages Overview

**Home** (`/`) - 6 sections
- Hero with animated headlines
- Services (7 cards)
- Why Choose Us (5 features)
- Selected Works portfolio preview
- Testimonials preview
- Large CTA banner

**Portfolio** (`/portfolio`) - Category filtering with all portfolio items

**About** (`/about`) - Story, expertise, tools, lifestyle

**Testimonials** (`/testimonials`) - All client testimonials

**Promises** (`/promises`) - 4 core promises with numbers

**Contact** (`/contact`) - Contact form, email, phone, WhatsApp

## 🔧 Customization

### Change Accent Color
Edit `--accent` and `--accent-hover` in `app/globals.css`

### Add Content
Edit constants in `lib/constants.ts` - changes reflect across entire site

### Add New Animation
Create variant in `lib/animations.ts`, use in component with Framer Motion

### Add New Section
Create component in `components/sections/`, import and use in page

## 📊 Performance

Targets:
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Mobile optimized with lazy loading
- Image optimization with Next/Image
- Code splitting via dynamic imports

## 🚀 Deploy

### To Vercel (Recommended)
1. Push to GitHub
2. Connect repo to Vercel
3. Deploy (auto-configured for Next.js)

## 📚 Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - React animations
- **GSAP** - ScrollTrigger animations
- **Lenis** - Smooth scrolling
- **React Icons** - SVG icons
- **Next/Image** - Image optimization

## 🎬 Key Components

- `Hero` - Homepage hero with animated headlines
- `Services` - 7 interactive service cards
- `WhyChooseUs` - Feature cards with stats
- `SelectedWorks` - Portfolio preview masonry
- `TestimonialPreview` - 3 testimonials
- `CTA` - Call-to-action banner
- `Navbar` - Sticky navigation
- `Footer` - Footer with links
- `Button` - Magnetic button component
- `Card` - Premium card with tilt
- `SectionHeading` - Animated heading component

## 🔍 SEO

- Auto-generated sitemap
- robots.txt for search engines
- Meta tags on root layout
- Image alt text
- Semantic HTML

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus visible styles
- Color contrast WCAG AA
- Form labels

## 📞 Support & Updates

For issues or customization help, refer to the included setup guide.

---

**Status**: Production Ready ✅
**Version**: 1.0
**Created**: 2026
