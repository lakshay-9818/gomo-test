import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { urlForImage } from '@/sanity/lib/image'
import ProductGallery from '@/components/ProductGallery'
import RelatedProducts from '@/components/RelatedProducts'
import CtaBanner from '@/components/CtaBanner'
import { getAllProducts, getProductBySlug, getRelatedProducts } from '@/lib/content'

export const revalidate = 60

interface Props {
  params: Promise<{ slug: string }>
}

// Bonus: pre-render known product slugs at build time (SSG), new ones
// fall back to on-demand rendering + ISR via `revalidate` above.
export async function generateStaticParams() {
  const { data: products } = await getAllProducts()
  return products.map((p) => ({ slug: p.slug }))
}

// Task 1 / Bonus: dynamic SEO metadata generated per-product from CMS data,
// with a sensible fallback if a product has no custom SEO fields set.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { data: product } = await getProductBySlug(slug)

  if (!product) {
    return { title: 'Product not found' }
  }

  const title = product.seo?.title || product.name
  const description = product.seo?.description || product.shortDescription

  return { title, description, openGraph: { title, description } }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const { data: product } = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const gallerySources = [product.mainImage, ...(product.gallery || [])]
    .map((img) => urlForImage(img as never)?.width(900).height(900).url())
    .filter((url): url is string => Boolean(url))

  const related = await getRelatedProducts(product.category, product._id)

  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <ProductGallery images={gallerySources} productName={product.name} />

          <div>
            {product.category && (
              <p className="text-xs font-medium uppercase tracking-wide text-ink-soft/70">
                {product.category}
              </p>
            )}
            <h1 className="mt-1 text-3xl font-semibold text-ink">{product.name}</h1>

            {product.articleNumber && (
              <p className="mt-1 text-sm text-ink-soft">Article No: {product.articleNumber}</p>
            )}

            {product.shortDescription && (
              <p className="mt-6 text-base text-ink-soft">{product.shortDescription}</p>
            )}

            {product.models && product.models.length > 0 && (
              <div className="mt-10 border-t border-line pt-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">Models</h2>
                <div className="mt-3 divide-y divide-line">
                  {product.models.map((model, i) => (
                    <div key={i} className="flex items-center justify-between py-3 text-sm">
                      <span className="text-ink">{model.name}</span>
                      <span className="text-ink-soft">{model.articleNumber}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.description ? (
              <div className="mt-10 border-t border-line pt-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">
                  Description
                </h2>
                {typeof product.description === 'string' ? (
                  <p className="mt-3 leading-relaxed text-ink-soft">{product.description}</p>
                ) : (
                  <div className="mt-3 leading-relaxed text-ink-soft">
                    <PortableText value={product.description as any} />
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <RelatedProducts products={related} />
      <CtaBanner
        cta={{
          heading: 'We create sustainable and profitable turnkey solutions for modern businesses.',
          ctaLabel: 'Get in touch',
          ctaHref: '/#contact',
        }}
      />
    </div>
  )
}
