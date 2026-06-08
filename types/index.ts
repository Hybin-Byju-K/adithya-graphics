// Portfolio Types
export interface PortfolioItem {
  id: string
  title: string
  image: string
  thumbnail?: string
  category: PortfolioCategory
  description?: string
  tags?: string[]
  link?: string
  featured: boolean
}

export type PortfolioCategory =
  | 'business-card'
  | 'logo-branding'
  | 'menu'
  | 'packaging'
  | 'poster'
  | 'event'
  | 'video'

export interface PortfolioCategoryConfig {
  id: PortfolioCategory
  name: string
  description: string
  items: PortfolioItem[]
}

// Service Types
export interface Service {
  id: string
  title: string
  description: string
  icon?: React.ReactNode
  image?: string
}

// Testimonial Types
export interface Testimonial {
  id: string
  author: string
  content: string
  rating: number
  avatar?: string
}

// Feature Types
export interface Feature {
  id: string
  title: string
  description: string
  icon?: React.ReactNode
}

// Contact Form Types
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

// Animation Types
export interface AnimationVariants {
  hidden: any
  visible: any
  exit?: any
}

export interface ScrollAnimationConfig {
  trigger?: React.RefObject<HTMLElement>
  start?: string
  end?: string
  scrub?: boolean | number
}

// Page Metadata
export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
}

// Navigation Types
export interface NavLink {
  label: string
  href: string
  target?: '_blank' | '_self'
}

// Skill Types
export interface Skill {
  name: string
  category: string
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

// Expertise Types
export interface Expertise {
  id: string
  title: string
  description: string
  icon?: React.ReactNode
}
