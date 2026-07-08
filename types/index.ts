export interface SeoData {
  title?: string
  description?: string
  ogImage?: unknown
}

export interface HeroData {
  heading?: string
  subheading?: string
  cta?: string
  ctaHref?: string
  image?: unknown
}

export interface IntroData {
  introHeading?: string
  introParagraphs?: string[]
  introImage?: unknown
  stats?: { _key: string; value?: string; label?: string }[]
}
export interface ProjectData {
  _id: string
  title: string
  slug: string
  description?: string
  image: unknown
}

export interface InsightData {
  _id: string
  title: string
  slug: string
  category?: 'News' | 'Article' | 'Press Release'
  coverImage?: unknown
  excerpt?: string
  body?: unknown[]
  publishedAt?: string
}

export interface FeatureData {
  _key: string
  title?: string
  description?: string
  icon?: string
}

export interface TestimonialData {
  _key: string
  quote?: string
  authorName?: string
  authorRole?: string
  authorLogo?: unknown
}

export interface HomepageData {
  hero?: HeroData
  intro?: IntroData
  projects?: ProjectData[]
  features?: FeatureData[]
  testimonials?: TestimonialData[]
  seo?: SeoData
}

export interface ProductData {
  _id: string
  name: string
  slug: string
  shortDescription?: string
  description?: string
  mainImage?: unknown
  gallery?: unknown[]
  category?: string
  seo?: SeoData
}

export interface FooterLink {
  label?: string
  href?: string
}

export interface SocialLink {
  platform?: string
  url?: string
}

export interface SiteSettingsData {
  siteName?: string
  footerText?: string
  footerLinks?: FooterLink[]
  socialLinks?: SocialLink[]
  defaultSeo?: SeoData
}
