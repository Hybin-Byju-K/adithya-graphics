# Quick Reference Card - Adithya's Graphics

## 🚀 Start Development
```bash
npm install
npm run dev
# Opens at http://localhost:3000
```

## ✏️ Update Content
**File**: `lib/constants.ts`
- Contact info
- Services
- Testimonials
- Features
- Promises
- Expertise
- All changes reflect everywhere automatically

## 🎨 Change Colors
**File**: `app/globals.css`
- Update CSS variables in `:root`
- All 8 colors customizable
- Changes apply site-wide

## 🖼️ Replace Images
- **Logo**: `/public/images/logo.png`
- **Hero**: `/public/images/hero-cover.jpg`
- **Portfolio**: `/public/portfolio/[category]/`

## 📱 Responsive Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 📁 Page Files
- Home: `app/page.tsx`
- Portfolio: `app/portfolio/page.tsx`
- About: `app/about/page.tsx`
- Testimonials: `app/testimonials/page.tsx`
- Promises: `app/promises/page.tsx`
- Contact: `app/contact/page.tsx`

## 🎬 Component Locations
- **Buttons**: `components/ui/Button.tsx`
- **Cards**: `components/ui/Card.tsx`
- **Navbar**: `components/common/Navbar.tsx`
- **Hero**: `components/sections/Hero.tsx`
- **Services**: `components/sections/Services.tsx`

## 🔧 Important Constants
```typescript
// All in lib/constants.ts
CONTACT_INFO
SERVICES
TESTIMONIALS
FEATURES
PROMISES
EXPERTISE
DESIGN_SKILLS
PORTFOLIO_CATEGORIES
```

## 🎯 7 Service Categories
1. Business Card Design
2. Logo Design & Branding
3. Menu Design
4. Packaging Design
5. Poster & Print Design
6. Event Entrance Design
7. AI Video Production

## 🌈 Color System
```css
--background: #0D0D11
--surface: #1A1A22
--heading: #FFFFFF
--body: #94A3B8
--accent: #E51A24
--accent-hover: #B91C1C
--dark-gray: #2A2A35
--mid-gray: #3A3A45
--light-gray: #4A4A55
```

## 📊 Build & Deploy
```bash
npm run build          # Create production build
npm start              # Run production version
npm run lint           # Check for errors
```

## 🚀 Deploy to Vercel
1. `git push` to GitHub
2. Import repo on Vercel
3. Click Deploy
4. Add custom domain

## 🔗 Navigation Links (Auto-Linked)
- Home (/)
- Portfolio (/portfolio)
- About (/about)
- Testimonials (/testimonials)
- Promises (/promises)
- Contact (/contact)

## 🎨 Animation Libraries
- **Framer Motion** - Component animations
- **GSAP** - ScrollTrigger & timeline animations
- **Lenis** - Smooth scrolling

## ♿ Accessibility Features
- WCAG AA compliant
- Keyboard navigation
- ARIA labels
- Focus visible styles
- Semantic HTML

## 📚 Documentation Files
- `README.md` - Quick start guide
- `SETUP_GUIDE.md` - Detailed setup instructions
- `PROJECT_SUMMARY.md` - Complete feature list
- `QUICK_REFERENCE.md` - This file

## 🎁 What's Included
✅ 6 complete pages
✅ 15+ reusable components
✅ 10+ custom hooks
✅ 20+ animation variants
✅ Fully responsive
✅ TypeScript typed
✅ SEO optimized
✅ Accessibility compliant
✅ Production ready
✅ Easy to customize

## 🔴 Accent Red Usage
Used for:
- ✅ Buttons
- ✅ Hover states
- ✅ Active nav items
- ✅ Icons
- ✅ Decorative accents

NOT used for:
- ❌ Body text (readability)
- ❌ Large backgrounds
- ❌ Long content blocks

## 💡 Pro Tips
1. Edit content in `lib/constants.ts` for site-wide changes
2. Use CSS variables in `app/globals.css` for theming
3. Keep animations on GPU (use `transform` not `position`)
4. Mobile-first responsive design
5. Lazy load heavy sections
6. Use Next/Image for all images

## 🆘 Common Customizations
- Change accent: `--accent` in globals.css
- Add service: Add item to `SERVICES` array
- Add testimonial: Add item to `TESTIMONIALS` array
- Change navbar: Edit `components/common/Navbar.tsx`
- Modify portfolio: Update `app/portfolio/page.tsx`

## 📊 Performance Metrics
- Lighthouse: Target 90+
- FCP: < 1.5s
- TTI: < 3s
- CLS: < 0.1

## 🎯 Next Steps
1. ✅ Code is ready
2. Replace logo & images
3. Update `lib/constants.ts`
4. Add portfolio images
5. Test responsive design
6. Deploy to Vercel
7. Add custom domain
8. Monitor performance

---

**Status**: ✅ Production Ready
**Time to Customize**: 1-2 hours
**Time to Deploy**: 5-10 minutes
