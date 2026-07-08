import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'
import type { HeroData } from '@/types'

export default function Hero({ hero }: { hero?: HeroData }) {
  if (!hero) return null

  const imageAsset = hero.image
  const imageUrl = urlForImage(imageAsset as never)?.width(1200).height(900).url()
  const ctaText = hero.cta

  return ( <section >
    <div 
      className="relative h-screen w-full flex flex-col justify-between items-center px-4 py-12 overflow-hidden">
        {imageUrl && 
        <Image
        src={imageUrl}
        alt="Background Image"
        fill // Tells the image to stretch and fill the parent container
        priority // Tells Next.js to preload this image since it's above the fold
        className="object-cover object-center z-0" // acts like bg-cover bg-center
      />}
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* 1. Tagline - Stays at the absolute top */}
      {hero.subheading && (
      <p className="relative z-10 text-sm md:text-lg font-semibold tracking-widest text-emerald-400 text-center">
        {hero.subheading}
      </p>
      )}

      {/* 2. Brand Name - Locked exactly in the vertical and horizontal center */}
      <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold text-white tracking-tight text-center drop-shadow-lg">
        {hero.heading}
      </h1>

      {/* 3. Call to Action - Stays at the absolute bottom */}
      <div className="relative z-10 text-center">
          <>
          {ctaText}<br/>
             <Link
               href={hero.ctaHref || '/products'}
               className="mt-8 inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
             >
               //downArrow
             </Link>
             </>
          
      </div>

    </div>
    </section>
  );
};