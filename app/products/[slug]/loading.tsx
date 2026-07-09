import { ProductPageSkeleton } from '@/components/Skeletons'

export default function LoadingProduct() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <ProductPageSkeleton />
    </div>
  )
}
