# Adithya's Graphics - Setup & Customization Guide

## 📋 Table of Contents
1. Quick Start
2. Brand Assets Setup
3. Content Customization
4. Portfolio Management
5. Vercel Deployment
6. Advanced Customization

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ (or Node 18 with workarounds)
- npm or yarn
- Git (for version control)

### Installation & Development

```bash
# Navigate to project
cd adithya-graphics

# Install dependencies
npm install

# Start development server
npm run dev

# Project opens at http://localhost:3000
```

### Build for Production

```bash
npm run build      # Creates optimized production build
npm start          # Runs production server locally
npm run lint       # Lints code for errors
```

---

## 🖼️ Brand Assets Setup

### Replace Logo

The logo appears in:
1. **Navigation bar** (top-left)
2. **Hero section** (top-left corner)

**Steps to replace:**

1. Prepare your logo:
   - Recommended: 256x256px PNG with transparent background
   - Or: 200x200px minimum, any image format

2. Save to: `/public/images/logo.png`

3. **Option A: Simple Text Logo (Current)**
   - Currently displays "AG" in the navbar
   - Edit `components/common/Navbar.tsx` line 30:
   ```jsx
   <motion.div className="text-2xl font-bold text-accent">
     AG  {/* Change this to your brand initial or text */}
   </motion.div>
   ```

4. **Option B: Use Image Logo**
   - Edit `components/common/Navbar.tsx`:
   ```jsx
   import Image from 'next/image'

   <Link href="/" className="flex-shrink-0">
     <Image
       src="/images/logo.png"
       alt="Logo"
       width={50}
       height={50}
     />
   </Link>
   ```

### Replace Hero Background Image

The hero section background appears on the home page.

**Steps to replace:**

1. Prepare your image:
   - Recommended: 1920x1080px or larger
   - Aspect ratio: 16:9
   - File format: JPG for best performance

2. Save to: `/public/images/hero-cover.jpg`

3. Update `components/sections/Hero.tsx` line 40:
   ```jsx
   <Image
     src="https://images.unsplash.com/photo..." {/* Replace with your image path */}
     alt="Hero background"
   />
   ```

---

## ✏️ Content Customization

### All Content is in ONE File

**Location:** `lib/constants.ts`

This file contains all static text content used across the website. Update it to change content everywhere automatically.

### What to Update

#### 1. Contact Information
```typescript
export const CONTACT_INFO = {
  email: 'adithya@adithyasgraphics.com',  // Your email
  phone: '+91 95679 51234',                // Your phone
  whatsapp: '+91 95679 51234',             // WhatsApp number (for WhatsApp link)
  location: 'Thrissur, Kerala, India',     // Your location
  businessName: "Adithya's Graphics",      // Your business name
}
```

#### 2. Navigation Links
```typescript
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  // ... edit labels if desired
]
```

#### 3. Services (7 items)
```typescript
export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Business Card Design',        // Update title
    description: 'Professional business cards...', // Update description
    image: '/images/services/business-card.jpg', // Update image path
  },
  // ... more items
]
```

#### 4. Features (Why Choose Us)
```typescript
export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Strategy-Driven Design',
    description: 'Every design decision...',
  },
  // ... customize these
]
```

#### 5. Testimonials
```typescript
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Msirajs Official',
    content: 'The owner went above and beyond...',
    rating: 5,
  },
  // ... add/edit testimonials
]
```

#### 6. About Page Content

Currently, about page content is hardcoded. To edit:
1. Open `app/about/page.tsx`
2. Find the "My Story" section (line ~40)
3. Edit the text directly

#### 7. Expertise Skills
```typescript
export const EXPERTISE: Expertise[] = [
  {
    id: '1',
    title: 'Brand Identity Design',
    description: 'Logos, business cards...',
  },
  // ... customize expertise items
]
```

#### 8. Tools & Technologies
```typescript
export const DESIGN_SKILLS: Skill[] = [
  { name: 'Adobe Illustrator', category: 'Design & Vector', proficiency: 'expert' },
  // ... add your tools
]
```

#### 9. Promises (4 core promises)
```typescript
export const PROMISES = [
  {
    id: '1',
    title: 'Problem-Solving Design',
    content: "I don't just design...",
  },
  // ... 4 promises total
]
```

### To Add/Edit Testimonials

1. Open `lib/constants.ts`
2. Find `TESTIMONIALS` array (around line 70)
3. Add new testimonial:
```typescript
{
  id: '4',  // New ID
  author: 'New Client Name',
  content: 'Great feedback here...',
  rating: 5,
}
```

---

## 🎨 Portfolio Management

### Portfolio Structure

Portfolio items are organized by category in two main files:
- `components/sections/SelectedWorks.tsx` - Homepage preview (6 items)
- `app/portfolio/page.tsx` - Full portfolio with filtering

### Add Portfolio Items

**Step 1:** Add image to appropriate folder

Examples:
- `/public/portfolio/logo-branding/your-image.jpg`
- `/public/portfolio/packaging/my-design.png`
- `/public/portfolio/video/thumbnail.jpg`

**Step 2:** Update portfolio data

In `app/portfolio/page.tsx`, find `PORTFOLIO_ITEMS`:

```typescript
const PORTFOLIO_ITEMS = {
  'logo-branding': [
    { id: '1', title: 'Brand Identity System', image: 'https://images...' },
    { id: '2', title: 'Logo Design Concepts', image: 'https://images...' },
    // ADD YOUR ITEMS HERE:
    { id: '4', title: 'Your Project Title', image: '/public/portfolio/logo-branding/your-image.jpg' },
  ],
}
```

**Step 3:** Home page portfolio preview

In `components/sections/SelectedWorks.tsx`, update `PORTFOLIO_PREVIEW`:

```typescript
const PORTFOLIO_PREVIEW = [
  {
    id: '1',
    title: 'Your Project Title',
    category: 'logo-branding',
    image: '/public/portfolio/logo-branding/your-image.jpg',
    featured: true,
  },
]
```

### Portfolio Categories Available

- `business-card` - Business Card Design
- `logo-branding` - Logo Design & Branding
- `menu` - Menu Design
- `packaging` - Packaging Design
- `poster` - Poster & Print Design
- `event` - Event Entrance Design
- `video` - AI Video Production

---

## 🎨 Design Customization

### Change Accent Color

The accent red color appears throughout the site.

**To change:**

1. Open `app/globals.css`
2. Find `:root` section (line ~6)
3. Update colors:
```css
:root {
  --accent: #E51A24;        /* Change this hex code */
  --accent-hover: #B91C1C;  /* Change this hover color */
}
```

### Change Entire Color Scheme

In `app/globals.css` `:root`:
```css
:root {
  --background: #0D0D11;    /* Main background */
  --surface: #1A1A22;       /* Secondary background */
  --heading: #FFFFFF;       /* Text headings */
  --body: #94A3B8;          /* Body text */
  --dark-gray: #2A2A35;     /* Borders */
  --mid-gray: #3A3A45;      /* Secondary borders */
  --light-gray: #4A4A55;    /* Tertiary borders */
}
```

### Change Font

Currently uses system fonts (fast and reliable).

To use Google Fonts:
1. Import in `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
```

2. Update font-family:
```css
:root {
  --font-sans: 'Poppins', system-ui, sans-serif;
}
```

### Change Section Spacing

Edit `app/globals.css`:
```css
.section-padding {
  padding-top: 4rem;      /* Increase for more space */
  padding-bottom: 4rem;
}
```

---

## 🚀 Vercel Deployment

### Step-by-Step Deployment

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio website"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click Deploy (no config needed)

3. **Configure Custom Domain**
   - In Vercel dashboard: Settings > Domains
   - Add your domain (e.g., adithyasgraphics.com)
   - Follow DNS setup instructions from your registrar

### Environment Variables (Optional)

If adding email functionality later, create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## 📧 Email Configuration (Optional)

To enable form submissions:

1. **Using SendGrid:**
   ```bash
   npm install @sendgrid/mail
   ```

2. Create `/app/api/contact/route.ts`:
   ```typescript
   import sgMail from '@sendgrid/mail'

   export async function POST(request: Request) {
     const { name, email, subject, message } = await request.json()

     // Send email logic
   }
   ```

---

## 🔍 SEO & Meta Tags

### Homepage Meta Tags

Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Adithya's Graphics - Your Site Title",
  description: 'Your site description for search results',
  keywords: ['design', 'branding', 'graphics'],
}
```

### Social Media Meta Tags

In `app/layout.tsx`:
```typescript
openGraph: {
  title: 'Your Title',
  description: 'Your description',
  images: [
    {
      url: 'https://yourdomain.com/og-image.jpg',
      width: 1200,
      height: 630,
    },
  ],
}
```

Create an og-image.jpg (1200x630px) in `/public/` for social sharing.

---

## 🔗 Important File Paths

| Content | File Location |
|---------|---------------|
| Contact Info | `lib/constants.ts` |
| Services | `lib/constants.ts` |
| Testimonials | `lib/constants.ts` |
| About Story | `app/about/page.tsx` |
| Home Page Sections | `components/sections/` |
| Colors & Styling | `app/globals.css` |
| Animations | `lib/animations.ts` |
| Logo | `components/common/Navbar.tsx` |
| Hero Image | `components/sections/Hero.tsx` |
| Portfolio | `app/portfolio/page.tsx` |

---

## 🎯 Customization Checklist

- [ ] Replace logo
- [ ] Update hero background image
- [ ] Update contact information (email, phone, location)
- [ ] Edit all testimonials
- [ ] Update services descriptions and images
- [ ] Update about page story
- [ ] Change accent color (if desired)
- [ ] Add portfolio items
- [ ] Update social media links in footer
- [ ] Add portfolio images for 7 categories
- [ ] Configure SendGrid for contact form (optional)
- [ ] Update SEO meta tags
- [ ] Create og-image for social sharing
- [ ] Test on mobile devices
- [ ] Deploy to Vercel
- [ ] Set up custom domain

---

## 🐛 Troubleshooting

### Images not loading
- Check file paths are relative to `/public/`
- Ensure files exist in the folder
- Use Next/Image for better optimization

### Animations not smooth on mobile
- Check browser DevTool Performance tab
- Reduce animation complexity if needed
- Test on actual mobile device

### Form not submitting
- Check browser console for errors
- Email service not configured (currently logs to console)
- Add email service to enable submissions

### Styling issues
- Clear .next folder: `rm -rf .next`
- Restart dev server
- Check Tailwind config is correct

---

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- [GSAP Docs](https://greensock.com/docs)

---

**Last Updated:** June 2026
**Version:** 1.0
