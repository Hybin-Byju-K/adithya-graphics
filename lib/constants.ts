import { Feature, Testimonial, Service, Expertise, Skill } from '@/types'

// Navigation
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Promises', href: '/promises' },
  { label: 'Contact', href: '/contact' },
]

// Contact Info
export const CONTACT_INFO = {
  email: 'adithya@adithyasgraphics.com',
  phone: '+91 95679 51234',
  whatsapp: '+91 95679 51234',
  location: 'Thrissur, Kerala, India',
  businessName: "Adithya's Graphics",
}

// Services
export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Business Card Design',
    description: 'Professional business cards that make a lasting impression',
    image: '/images/services/business-card.jpg',
  },
  {
    id: '2',
    title: 'Logo Design & Branding',
    description: 'Complete visual identity systems for modern brands',
    image: '/images/services/logo-branding.jpg',
  },
  {
    id: '3',
    title: 'Menu Design',
    description: 'Strategic menu layouts that enhance dining experiences',
    image: '/images/services/menu.jpg',
  },
  {
    id: '4',
    title: 'Packaging Design',
    description: 'Eye-catching packaging that stands out on shelves',
    image: '/images/services/packaging.jpg',
  },
  {
    id: '5',
    title: 'Poster & Print Design',
    description: 'Bold designs for print and promotional materials',
    image: '/images/services/poster.jpg',
  },
  {
    id: '6',
    title: 'Event Entrance Design',
    description: 'Immersive spatial branding for events and experiences',
    image: '/images/services/event.jpg',
  },
  {
    id: '7',
    title: 'AI Video Production',
    description: 'Modern short-form video content creation',
    image: '/images/services/video.jpg',
  },
]

// Features - Why Choose Us
export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Strategy-Driven Design',
    description:
      'Every design decision is backed by research and business objectives',
  },
  {
    id: '2',
    title: 'Brand Consistency',
    description:
      'Cohesive visual systems across all digital and print touchpoints',
  },
  {
    id: '3',
    title: 'Fast Delivery',
    description: 'Quick turnarounds without compromising quality',
  },
  {
    id: '4',
    title: 'Accessibility Focus',
    description:
      'Designs inclusive and accessible to all users and platforms',
  },
  {
    id: '5',
    title: 'Print & Digital Expertise',
    description: 'Proficiency across both traditional and digital mediums',
  },
]

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Msirajs Official',
    content:
      'The owner went above and beyond to understand my needs and delivered exceptional work. Highly recommended for anyone seeking top-notch products and outstanding customer service!',
    rating: 5,
  },
  {
    id: '2',
    author: 'Hybin Byju K',
    content:
      "I had a great experience guys. The owner of this business was very friendly, he asked every detail of my imagination to create a splendid work. I guarantee that everyone can get satisfaction here.",
    rating: 5,
  },
  {
    id: '3',
    author: 'Sujith G',
    content:
      "I am very comfortable with their work. Adhi's sincerity in doing any work in a way that suits our needs is commendable. The special thing I like most about them is their punctuality. Their excellent work in doing any work on time is something to be mentioned. Keep up the good work like this. All the best and prayers 🤝",
    rating: 5,
  },
]

// Expertise/Skills
export const EXPERTISE: Expertise[] = [
  {
    id: '1',
    title: 'Brand Identity Design',
    description:
      'Logos, business cards, letterheads, and complete visual systems.',
  },
  {
    id: '2',
    title: 'Digital & Social Media',
    description:
      'Campaign ads, web banners, layout design, and UI assets.',
  },
  {
    id: '3',
    title: 'Print & Publication',
    description:
      'Brochures, flyers, posters, and large-format event layouts.',
  },
  {
    id: '4',
    title: 'Video & Motion Graphics',
    description:
      'Video creation, editing, and short-form marketing content.',
  },
  {
    id: '5',
    title: 'Marketing Research',
    description:
      'Aligning creative assets with the latest industry shifts and AI-driven workflows.',
  },
]

// Design & Vector Tools
export const DESIGN_SKILLS: Skill[] = [
  { name: 'Adobe Illustrator', category: 'Design & Vector', proficiency: 'expert' },
  { name: 'Photoshop', category: 'Design & Vector', proficiency: 'expert' },
  { name: 'CorelDRAW', category: 'Design & Vector', proficiency: 'advanced' },
  { name: 'Adobe InDesign', category: 'Layout & Print', proficiency: 'expert' },
  { name: 'Adobe Premiere Pro', category: 'Video Production', proficiency: 'advanced' },
  { name: 'ChatGPT', category: 'AI & Productivity', proficiency: 'advanced' },
  { name: 'Canva', category: 'AI & Productivity', proficiency: 'advanced' },
  { name: 'MS Office', category: 'AI & Productivity', proficiency: 'advanced' },
]

// Promises
export const PROMISES = [
  {
    id: '1',
    title: 'Problem-Solving Design',
    content:
      "I don't just design to make things look good; I design to solve your business problems.",
  },
  {
    id: '2',
    title: 'Print-Perfect Quality',
    content:
      'Your deliverables will be flawless, whether they are printed on a 15-foot event arch or viewed on a smartphone screen.',
  },
  {
    id: '3',
    title: 'Transparent Process',
    content:
      'A transparent, collaborative revision process with zero guesswork.',
  },
  {
    id: '4',
    title: 'Reliable Delivery',
    content:
      'Proactive updates and strict adherence to agreed-upon deadlines.',
  },
]

// Lifestyle Content
export const LIFESTYLE = [
  'Catching up on the latest movies or tracking updates in the world of cars.',
  'Following intense cricket and football matches.',
  'Traveling to experience new places, cultures, and visual environments.',
]

// Portfolio Categories
export const PORTFOLIO_CATEGORIES = [
  { id: 'business-card', name: 'Business Card Design' },
  { id: 'logo-branding', name: 'Logo Design & Branding' },
  { id: 'menu', name: 'Menu Design' },
  { id: 'packaging', name: 'Packaging Design' },
  { id: 'poster', name: 'Poster & Print Design' },
  { id: 'event', name: 'Event Entrance Design' },
  { id: 'video', name: 'AI Video Production' },
]

// SEO Meta
export const SITE_METADATA = {
  siteName: "Adithya's Graphics",
  description:
    'Premium graphic design studio offering branding, print design, digital marketing, and video production services. Based in Thrissur, Kerala.',
  keywords: [
    'graphic design',
    'branding',
    'logo design',
    'print design',
    'packaging design',
    'video production',
    'digital marketing',
  ],
  author: 'Adithya Krishnan',
  twitterHandle: '@adithyasgraphics',
  locale: 'en_US',
}

// Social Links (future use)
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/adithyasgraphics',
  behance: 'https://behance.net/adithyasgraphics',
  linkedin: 'https://linkedin.com/in/adithyakrishnan',
  twitter: 'https://twitter.com/adithyasgraphics',
}

// Animation Config
export const ANIMATION_CONFIG = {
  defaultDuration: 0.6,
  staggerDelay: 0.1,
  easeTypes: {
    smooth: [0.25, 0.46, 0.45, 0.94],
    easeOut: [0.34, 1.56, 0.64, 1],
    easeIn: [0.17, 0.67, 0.83, 0.67],
  },
}

// CTA Links
export const CTA_BUTTONS = {
  portfolio: { label: 'View Portfolio', href: '/portfolio' },
  contact: { label: "Let's Work Together", href: '/contact' },
  whatsapp: { label: 'Message on WhatsApp', href: `https://wa.me/${CONTACT_INFO.whatsapp}` },
  email: { label: 'Send Email', href: `mailto:${CONTACT_INFO.email}` },
}
