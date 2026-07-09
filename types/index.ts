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

export interface BrandServedData {
  name: string;
  logo: string;
}

export interface ProjectData {
  _id: string
  title: string
  slug: string
  description?: string
  image: unknown
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
  brandsServed?: BrandServedData[]
  projects?: ProjectData[]
  features?: FeatureData[]
  testimonials?: TestimonialData[]
  seo?: SeoData
}

export interface ProductModel {
  name?: string
  articleNumber?: string
}

export interface ProductData {
  _id: string
  _type?: string
  name: string
  slug: string
  shortDescription?: string
  description?: unknown
  mainImage?: unknown
  gallery?: unknown[]
  category?: string
  articleNumber?: string
  models?: ProductModel[]
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

export interface SolutionCategory {
  _id: string;
  name: string;
  id: {
    current: string;
  };
  image?: unknown;
  tags?: string[];
  description?: string;
}

export interface FeatureItem {
  _id: string;
  title: string;
  description: string;
  iconImage: unknown;
}
export interface InsightData {
  _id: string;
  title: string;
  slug: string;
  classifi: 'news' | 'article' | 'press-release';
  coverImage: unknown;
  publishedAt: string;
}

export interface NavLinkData {
  _type: 'navLink';
  label: string;
  href: string;
}

export interface NavDropdownData {
  _type: 'navDropdown';
  label: string;
  links: NavLinkData[];
}

export type NavItem = NavLinkData | NavDropdownData;

export interface HeaderSettingsData {
  logoText: string;
  navItems: NavItem[];
  ctaText: string;
  ctaLink: string;
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterLinkGroupData {
  title: string;
  links: FooterLinkItem[];
}

export interface FooterContactGroupData {
  title: string;
  phone?: string;
  email?: string;
  visitingAddress?: string;
  postalAddress?: string;
}

export interface FooterSettingsData {
  bigLogoText: string;
  businessAreas: FooterLinkGroupData;
  quickLinks: FooterLinkGroupData;
  resources: FooterLinkGroupData;
  contactInfo: FooterContactGroupData;
  newsletterHeading: string;
}