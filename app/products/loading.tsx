import { ProductGridSkeleton } from '@/components/Skeletons'

export default function LoadingProducts() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 h-8 w-40 animate-pulse rounded bg-gray-200" />
      <ProductGridSkeleton />
    </div>
  )
}
