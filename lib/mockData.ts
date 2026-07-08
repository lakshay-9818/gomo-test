import type { HomepageData, ProductData, SiteSettingsData } from '@/types'

/**
 * This fallback content lets the UI render correctly *before* a real Sanity
 * project is connected, and keeps it rendering gracefully if a fetch fails
 * at runtime. Swap in your own project's real content via the Studio at
 * /studio once NEXT_PUBLIC_SANITY_PROJECT_ID / DATASET are set.
 */

export const mockHomepage: HomepageData = {
  hero: {
    heading: 'Build faster. Launch smarter.',
    subheading:
      'A composable storefront powered by Next.js and a headless CMS — content editors ship copy changes without a deploy.',
    cta: 'Shop the collection',
    ctaHref: '/products',
  },
  intro: {
    introHeading: 'A composable storefront powered by Next.js and a headless CMS',
    introParagraphs: [
      'Content editors ship copy changes without a deploy.',
      'Built on Sanity and Next.js for speed, flexibility, and a smooth editing experience.',
    ],
    stats: [
      { _key: 'stat-1', value: '50+', label: 'Bakery Equipment' },
      { _key: 'stat-2', value: '12', label: 'Years of Experience' },
      { _key: 'stat-3', value: '99%', label: 'Customer Satisfaction' },
    ],
  },
}