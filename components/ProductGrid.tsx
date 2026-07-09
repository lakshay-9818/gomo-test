'use client'

import { useMemo, useState } from 'react'
import ProductCard from './ProductCard'
import { FilterSidebar, type Category } from './FilterSidebar'
import type { ProductData } from '@/types'

export default function ProductGrid({ products }: { products: ProductData[] }) {
  const [query, setQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const categories = useMemo<Category[]>(() => {
    const set = new Set(products.map((p) => p.category).filter(Boolean) as string[])
    return Array.from(set).map((name) => ({ name }))
  }, [products])

  function toggleCategory(cat: string) {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesQuery = p.name.toLowerCase().includes(query.trim().toLowerCase())
      const matchesCategory =
        selectedCategories.length === 0 || (p.category && selectedCategories.includes(p.category))
      return matchesQuery && matchesCategory
    })
  }, [products, query, selectedCategories])

  return (
    <div className="grid gap-10 lg:grid-cols-[293px_1fr]">
      {/* Sidebar filters */}
      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-ink-soft">
            Search
          </label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-lg border border-line bg-cream px-3 py-2 text-sm focus:border-ink-soft focus:outline-none"
          />
        </div>

        <FilterSidebar
          categories={categories}
          selectedCategories={selectedCategories}
          onToggleCategory={toggleCategory}
        />
      </div>

      {/* Product grid */}
      <div>
        {filtered.length === 0 ? (
          <p className="py-16 text-center text-sm text-ink-soft">No products match your filters.</p>
        ) : (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}