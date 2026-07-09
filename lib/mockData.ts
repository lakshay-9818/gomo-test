import type { HomepageData, ProductData, SiteSettingsData, SolutionCategory } from '@/types'

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
  brandsServed: [
    { name: 'Polarbröd', logo: '/logos/polarbrod.svg' },
    { name: 'Sushi Yama', logo: '/logos/sushiyama.svg' },
    { name: 'Capricci', logo: '/logos/capricci.svg' },
    { name: 'Hard Rock Cafe', logo: '/logos/hardrock.svg' },
  ],
}
export const mockProducts: ProductData[] = [
  {
    _id: 'mock-1',
    name: 'Björn Whisk Mixer',
    slug: 'bjorn-whisk-mixer',
    category: 'Whisks',
    shortDescription: 'Ergonomic professional whisk mixer for high-volume bakeries.',
    description:
      'The Björn Whisk Mixer is engineered for continuous daily use, with a reinforced motor housing and a whisk head designed to aerate batters evenly at every speed setting. Trusted across professional bakery lines for consistent results shift after shift.',
  },
  {
    _id: 'mock-2',
    name: 'Bagel Slicer Pro',
    slug: 'bagel-slicer-pro',
    category: 'Slicers',
    shortDescription: 'High-throughput bagel and roll slicing station.',
    description:
      'A compact slicing station built for bakery counters and production lines alike, with an adjustable guide for consistent cut thickness across bagels, rolls, and buns.',
  },
  {
    _id: 'mock-3',
    name: 'Strawberry Huller Station',
    slug: 'strawberry-huller-station',
    category: 'Prep',
    shortDescription: 'Fast, consistent fruit prep for pastry kitchens.',
    description:
      'Speeds up fruit prep for tarts, jams, and toppings with a simple, repeatable hulling action designed for kitchen staff of any experience level.',
  },
  {
    _id: 'mock-4',
    name: 'Björn Whisk Mixer — Compact',
    slug: 'bjorn-whisk-mixer-compact',
    category: 'Whisks',
    shortDescription: 'Countertop version of our flagship whisk mixer.',
    description: 'All the performance of the full-size Björn mixer, sized for smaller kitchens and cafés.',
  },
  {
    _id: 'mock-5',
    name: 'Bengal Oven 20L',
    slug: 'bengal-oven-20l',
    category: 'Ovens',
    shortDescription: 'Compact deck oven for artisan bread production.',
    description: 'A 20-liter deck oven with precise steam injection, built for artisan loaves and pastries.',
  },
  {
    _id: 'mock-6',
    name: 'Talora 100 Mixer',
    slug: 'talora-100-mixer',
    category: 'Mixers',
    shortDescription: '100L planetary mixer for large-batch production.',
    description: 'Heavy-duty planetary mixer with a 100-liter bowl, suited to industrial bakery output.',
  },
  {
    _id: 'mock-7',
    name: 'ETG Gas & CO2 Control Panel',
    slug: 'etg-gas-co2-control-panel',
    category: 'Controls',
    shortDescription: 'Precision gas and CO2 monitoring for controlled-atmosphere storage.',
    description: 'Digital control panel for monitoring and adjusting gas mix in controlled-atmosphere storage rooms.',
  },
  {
    _id: 'mock-8',
    name: 'Björn Whisk Mixer — Pro XL',
    slug: 'bjorn-whisk-mixer-pro-xl',
    category: 'Whisks',
    shortDescription: 'Our largest-capacity whisk mixer for industrial lines.',
    description: 'The XL variant of the Björn line, built for the highest-volume production environments.',
  },
]


export const mockCategories: SolutionCategory[] = [
  {
    _id: "mock-offices",
    name: "Offices & Workplaces",
    id: { current: "offices" },
  },
];