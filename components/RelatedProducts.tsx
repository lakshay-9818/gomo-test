'use client'

import ProductCard from './ProductCard'
import type { ProductData } from '@/types'

export default function RelatedProducts({ products }: { products: ProductData[] }) {
  if (!products || products.length === 0) return null

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-[#1A2B23] mb-8">Related Products</h2>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  )
}
