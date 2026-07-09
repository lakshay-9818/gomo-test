export function ProductCardSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border border-line p-4">
      <div className="aspect-square w-full rounded-lg bg-cream-dark" />
      <div className="mt-4 h-4 w-3/4 rounded bg-cream-dark" />
      <div className="mt-2 h-4 w-1/4 rounded bg-cream-dark" />
    </div>
  )
}

export function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  )
}

export function ProductPageSkeleton() {
  return (
    <div className="grid animate-pulse gap-10 lg:grid-cols-2">
      <div className="aspect-square rounded-2xl bg-cream-dark" />
      <div className="space-y-4">
        <div className="h-8 w-2/3 rounded bg-cream-dark" />
        <div className="h-4 w-1/3 rounded bg-cream-dark" />
        <div className="h-24 w-full rounded bg-cream-dark" />
      </div>
    </div>
  )
}
