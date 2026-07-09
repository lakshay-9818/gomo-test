import { client, hasSanityConfig } from '@/sanity/lib/client'
import {
  homepageQuery,
  solutionCategoriesQuery,
  getAllFeatureItemsQuery,
  getAllInsightsQuery,
  getLayoutDataQuery,
  allProductsQuery,
  productBySlugQuery,
  relatedProductsQuery,
  teamMembersQuery,
} from '@/sanity/lib/queries'
import { mockHomepage,mockCategories,mockProducts } from '@/lib/mockData'
import type { HomepageData, ProductData, SiteSettingsData,SolutionCategory, FeatureItem, InsightData,HeaderSettingsData,FooterSettingsData, TeamMemberData} from '@/types'

export interface ContentResult<T> {
  data: T
  /** true when this came from local fallback data instead of Sanity */
  isFallback: boolean
  error?: string
}

/**
 * Every function here follows the same pattern: try Sanity, and if the
 * project isn't configured yet (or the request fails for any reason —
 * network, bad query, wrong dataset), fall back to local mock content
 * instead of crashing the page. The `isFallback` flag lets the UI show a
 * subtle "showing sample content" banner when relevant.
 */

export async function getLayoutData(): Promise<ContentResult<{ header: HeaderSettingsData | null; footer: FooterSettingsData | null }>> {
  if (!hasSanityConfig) {
    return { data: { header: null, footer: null }, isFallback: true, error: 'Sanity is not configured yet.' }
  }
  try {
    const data = await client.fetch<{ header: HeaderSettingsData | null; footer: FooterSettingsData | null }>(
      getLayoutDataQuery,
      {},
      { next: { revalidate: 300 } }
    )
if (!data.header && !data.footer) {
  return {
    data: { header: null, footer: null },
    isFallback: true,
    error: "No layout data found in Sanity.",
  };
}
    return { data, isFallback: false }
  } catch (err) {
    console.error('Failed to fetch layout data from Sanity:', err)
    return { data: { header: null, footer: null }, isFallback: true, error: 'Could not reach Sanity.' }
  }
}
  

export async function getHomepage(): Promise<ContentResult<HomepageData>> {
  if (!hasSanityConfig) {
    return { data: mockHomepage, isFallback: true, error: 'Sanity is not configured yet.' }
  }
  try {
    const data = await client.fetch<HomepageData | null>(
      homepageQuery,
      {},
      { next: { revalidate: 60 } }
    )
    if (!data) {
    console.log('No homepage document found in Sanity. Returning mock data.');
      return { data: mockHomepage, isFallback: true, error: 'No homepage document found in Sanity.' }
    }
    return { data, isFallback: false }
  } catch (err) {
    console.error('Failed to fetch homepage from Sanity:', err)
    return { data: mockHomepage, isFallback: true, error: 'Could not reach Sanity.' }
  }
}
export async function getSolutionCategories(): Promise<ContentResult<SolutionCategory[]>> {
  // Check config availability
  if (!hasSanityConfig) {
    return { 
      data: mockCategories, 
      isFallback: true, 
      error: 'Sanity is not configured yet.' 
    };
  }

  try {
    // Explicitly type the fetch return to hold either the category array or null
    const data = await client.fetch<SolutionCategory[] | null>(
      solutionCategoriesQuery,
      {},
      { next: { revalidate: 60 } } // Revalidate cache every 60 seconds
    );

    // Guard array checks: confirm document collection is not empty
    if (!data || data.length === 0) {
      console.log('No categories found in Sanity. Returning mock data.');
      return { 
        data: mockCategories, 
        isFallback: true, 
        error: 'No category documents found in Sanity.' 
      };
    }

    // Success response block
    return { data, isFallback: false };

  } catch (err) {
    console.error('Failed to fetch categories from Sanity:', err);
    return { 
      data: mockCategories, 
      isFallback: true, 
      error: err instanceof Error ? err.message : 'Could not reach Sanity API endpoints.' 
    };
  }
}



export async function getAllFeatureItems(): Promise<ContentResult<FeatureItem[]>> {
  console.log('Fetching all feature items from Sanity...');
  if (!hasSanityConfig) {
    return { data: [], isFallback: true, error: 'Sanity is not configured yet.' }
  }
  try {
    const data = await client.fetch<FeatureItem[]>(
      getAllFeatureItemsQuery,
      {},
      { next: { revalidate: 60 } }
    )
    if (!data || data.length === 0) {
      console.log('No feature items found in Sanity.');
      return { data: [], isFallback: true, error: 'No feature items found in Sanity.' }
    }
    return { data, isFallback: false }
  } catch (err) {
    console.error('Failed to fetch feature items from Sanity:', err)
    return { data: [], isFallback: true, error: 'Could not reach Sanity.' }
  }
}
export async function getAllInsights(): Promise<ContentResult<InsightData[]>> {
  console.log('Fetching all insights from Sanity...');
  if (!hasSanityConfig) {
    return { data: [], isFallback: true, error: 'Sanity is not configured yet.' }
  }
  try {
    const data = await client.fetch<InsightData[]>(
      getAllInsightsQuery,
      {},
      { next: { revalidate: 60 } }
    )
    if (!data || data.length === 0) {
      console.log('No insights found in Sanity.');
      return { data: [], isFallback: true, error: 'No insights found in Sanity.' }
    }
    return { data, isFallback: false }
  } catch (err) {
    console.error('Failed to fetch insights from Sanity:', err)
    return { data: [], isFallback: true, error: 'Could not reach Sanity.' }
  }
}

export async function getAllProducts(): Promise<ContentResult<ProductData[]>> {
  if (!hasSanityConfig) {
    return { data: mockProducts, isFallback: true, error: 'Sanity is not configured yet.' }
  }
  try {
    console.log('Fetching all products from Sanity...');
    const data = await client.fetch<ProductData[]>(allProductsQuery, {}, { next: { revalidate: 60 } })
    if (!data || data.length === 0) {
      console.log('No products found in Sanity. Returning mock data.');
      return { data: mockProducts, isFallback: true, error: 'No products found in Sanity.' }
    }
    console.log(`Fetched ${data.length} products from Sanity.`);
    return { data, isFallback: false }
  } catch (err) {
    console.error('Failed to fetch products from Sanity:', err)
    return { data: mockProducts, isFallback: true, error: 'Could not reach Sanity.' }
  }
}

export async function getProductBySlug(slug: string): Promise<ContentResult<ProductData | null>> {
  if (!hasSanityConfig) {
    const fallback = mockProducts.find((p) => p.slug === slug) ?? null
    return { data: fallback, isFallback: true, error: 'Sanity is not configured yet.' }
  }
  try {
    const data = await client.fetch<ProductData | null>(
      productBySlugQuery,
      { slug },
      { next: { revalidate: 60 } }
    )
    if (!data) {
      const fallback = mockProducts.find((p) => p.slug === slug) ?? null
      return { data: fallback, isFallback: true, error: 'Product not found in Sanity.' }
    }
    return { data, isFallback: false }
  } catch (err) {
    console.error('Failed to fetch product from Sanity:', err)
    const fallback = mockProducts.find((p) => p.slug === slug) ?? null
    return { data: fallback, isFallback: true, error: 'Could not reach Sanity.' }
  }
}

const mockTeamMembers: TeamMemberData[] = [
  {
    _id: 'mock-emma',
    name: 'Emma Johnson',
    role: 'Senior Design Consultant',
    description: 'Emma brings over 12 years of experience in hospitality interior design, specialising in creating functional yet inspiring commercial kitchen and dining spaces.',
    phone: '+46 70 123 45 67',
    email: 'emma.johnson@gomo.se',
    linkedin: 'linkedin.com/in/emma-johnson',
  },
  {
    _id: 'mock-lucas',
    name: 'Lucas Andersson',
    role: 'Project Manager',
    description: 'Lucas ensures every project runs on time and on budget. With a background in construction management, he coordinates seamlessly between clients, architects, and contractors.',
    phone: '+46 70 234 56 78',
    email: 'lucas.andersson@gomo.se',
  },
  {
    _id: 'mock-sofia',
    name: 'Sofia Lundberg',
    role: 'Sustainability Lead',
    description: 'Sofia drives our sustainability initiatives, advising clients on energy-efficient equipment, material sourcing, and circular design principles that reduce environmental impact.',
    linkedin: 'linkedin.com/in/sofia-lundberg',
  },
]

export async function getTeamMembers(): Promise<ContentResult<TeamMemberData[]>> {
  if (!hasSanityConfig) {
    return { data: mockTeamMembers, isFallback: true, error: 'Sanity is not configured yet.' }
  }
  try {
    const data = await client.fetch<TeamMemberData[]>(teamMembersQuery, {}, { next: { revalidate: 60 } })
    if (!data || data.length === 0) {
      return { data: mockTeamMembers, isFallback: true, error: 'No team members found in Sanity.' }
    }
    return { data, isFallback: false }
  } catch (err) {
    console.error('Failed to fetch team members from Sanity:', err)
    return { data: mockTeamMembers, isFallback: true, error: 'Could not reach Sanity.' }
  }
}

export async function getRelatedProducts(category?: string, id?: string): Promise<ProductData[]> {
  if (!category || !id) return []
  if (!hasSanityConfig) {
    return mockProducts.filter((p) => p.category === category && p._id !== id)
  }
  try {
    const data = await client.fetch<ProductData[]>(
      relatedProductsQuery,
      { category, id },
      { next: { revalidate: 60 } }
    )
    return data || []
  } catch (err) {
    console.error('Failed to fetch related products:', err)
    return mockProducts.filter((p) => p.category === category && p._id !== id)
  }
}

// export async function getSiteSettings(): Promise<ContentResult<SiteSettingsData>> {
//   if (!hasSanityConfig) {
//     return { data: mockSiteSettings, isFallback: true, error: 'Sanity is not configured yet.' }
//   }
//   try {
//     const data = await client.fetch<SiteSettingsData | null>(
//       siteSettingsQuery,
//       {},
//       { next: { revalidate: 300 } }
//     )
//     if (!data) {
//       return { data: mockSiteSettings, isFallback: true, error: 'No site settings document found.' }
//     }
//     return { data, isFallback: false }
//   } catch (err) {
//     console.error('Failed to fetch site settings from Sanity:', err)
//     return { data: mockSiteSettings, isFallback: true, error: 'Could not reach Sanity.' }
//   }
// }
