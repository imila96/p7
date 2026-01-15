// Common types used across the application

export interface NavLink {
  href: string
  label: string
  dropdown?: boolean
}

export interface FeatureCard {
  id: string
  title: string
  description: string
  icon?: string
}

export interface StoreExample {
  id: number
  category: string
  color: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  company: string
  role: string
  image?: string
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter?: string
    github?: string
  }
}
