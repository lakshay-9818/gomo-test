import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'
import type { ProductData } from '@/types'

export default function ProductCard({ product }: { product: ProductData }) {
  const imageUrl = product.mainImage
    ? urlForImage(product.mainImage as never)?.width(400).height(400).url()
    : undefined

  return (
    <div className="w-full max-w-[320px] bg-white border border-[#1E2E31] rounded-[10px] overflow-hidden flex flex-col group shadow-sm hover:shadow-md transition-shadow duration-200">
      
      <div className="w-full p-4 pb-0 flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={product.name}
            width={400}
            height={400}
            className="w-full aspect-square object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="w-full aspect-square bg-[#E8DDD0] rounded-lg transition-transform duration-300 group-hover:scale-[1.02]" />
        )}
      </div>

      {/* Dynamic details section */}
      <div className="p-4 pt-3 flex flex-col flex-1 min-h-[190px]">
        <h3 className="font-sans text-lg md:text-xl font-medium text-[#1E2E31] tracking-tight line-clamp-1 mb-1">
          {product.name}
        </h3>
        
        <p className="font-sans text-xs font-normal text-gray-600 leading-relaxed line-clamp-3 mb-4">
          {product.shortDescription}
        </p>
        
        {/* Actions - Auto-aligned neatly to the bottom */}
        <div className="flex flex-col gap-2 mt-auto">
          <button 
            type="button"
            className="flex items-center justify-center h-10 md:h-11 bg-[#B8D1D1] rounded-[50px] cursor-pointer hover:bg-[#a5c2c2] active:scale-[0.99] transition-all"
          >
            <span className="font-sans text-xs md:text-sm font-medium text-[#1E2E31] whitespace-nowrap">
              Request a quote
            </span>
          </button>
          
          <Link 
            href={`/products/${product.slug}`}
            className="flex items-center justify-center h-10 md:h-11 bg-[#1E2E31] rounded-[50px] cursor-pointer hover:bg-[#283d41] active:scale-[0.99] transition-all"
          >
            <span className="font-sans text-xs md:text-sm font-medium text-white whitespace-nowrap">
              Read more
            </span>
          </Link>
        </div>
      </div>

    </div>
  );
}