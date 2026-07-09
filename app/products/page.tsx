import type { Metadata } from 'next'
import ProductGrid from '@/components/ProductGrid'
import ErrorState from '@/components/ErrorState'
import { getAllProducts } from '@/lib/content'
import { ExpertSection } from '@/components/ExpertSection'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our full product catalog.',
}

export default async function ProductsPage() {
  const { data: products, error } = await getAllProducts()
  const categories = Array.from(new Set(products.map((p) => p.category).filter(Boolean) as string[]))

  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-2xl border border-line bg-cream-dark/30 p-6 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <h1 className="text-3xl font-semibold text-ink">All Products</h1>
            <p className="mt-2 max-w-xl text-sm text-ink-soft">
              Browse our full range of bakery and hospitality equipment — {products.length} item
              {products.length === 1 ? '' : 's'} available, from prep stations to production-line mixers.
            </p>
          </div>
        </div>

        {categories.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-line bg-cream px-4 py-2 text-xs font-medium text-ink-soft"
              >
                {cat}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {products.length === 0 ? (
          <ErrorState
            title="No products available"
            message={error || 'Check back soon — new products are on the way.'}
          />
        ) : (
          <ProductGrid products={products} />
        )}
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#7c6c53] to-[#332c22] text-center sm:h-48">
          <p className="relative px-6 text-lg font-medium text-white sm:text-xl">
            Find the right equipment for all your bakery needs
          </p>
        </div>
      </div>
      <ExpertSection/>
    </div>
  )
}
