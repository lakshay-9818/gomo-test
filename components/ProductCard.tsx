import type { ProductData } from '@/types'

export default function ProductCard({ product }: { product: ProductData }) {
  return (
    <div className="w-[305px] h-[479px] bg-white border border-[#1E2E31] rounded-[10px] overflow-hidden flex flex-col">
      <div className="w-[303px] h-[258px] mx-auto mt-px flex items-center justify-center overflow-hidden">
        <div className="w-[258px] h-[258px] bg-[#E8DDD0] rounded-lg" />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-['Inter'] text-xl font-medium text-[#1E2E31] leading-[24.2px] mb-1">{product.name}</h3>
        <p className="font-['Inter'] text-xs font-normal text-[#1E2E31] leading-5 mb-auto">{product.shortDescription}</p>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex items-center justify-center h-11 bg-[#B8D1D1] rounded-[50px] cursor-pointer">
            <span className="font-['Inter'] text-sm font-normal text-[#1E2E31] leading-5 whitespace-nowrap">Request a quote</span>
          </div>
          <div className="flex items-center justify-center h-11 bg-[#1E2E31] rounded-[50px] cursor-pointer">
            <span className="font-['Inter'] text-sm font-normal text-white leading-5 whitespace-nowrap">Read more</span>
          </div>
        </div>
      </div>
    </div>
  );
}
