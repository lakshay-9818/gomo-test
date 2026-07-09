'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ProductGallery({ images, productName }: { images: string[]; productName: string }) {
  const [selected, setSelected] = useState(0)

  if (images.length === 0) {
    return <div className="aspect-square w-full rounded-2xl bg-[#E8DDD0] flex items-center justify-center text-gray-400 text-sm">{productName}</div>
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#E8DDD0]">
        <Image src={images[selected]} alt={productName} fill className="object-cover" unoptimized />
      </div>
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto">
          {images.map((src, i) => (
            <button key={i} onClick={() => setSelected(i)} className={`relative w-20 h-20 shrink-0 rounded-xl overflow-hidden border-2 ${i === selected ? 'border-[#1E2E31]' : 'border-transparent'}`}>
              <Image src={src} alt={`${productName} ${i + 1}`} fill className="object-cover" unoptimized />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
