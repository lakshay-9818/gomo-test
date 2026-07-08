import React from 'react';
import Image from 'next/image';
import type { BrandServedData } from '@/types';
import { urlForImage } from '@/sanity/lib/image'

export default function LogoMarquee({ brandsServed }: { brandsServed?: BrandServedData[] }) {
  if(!brandsServed || brandsServed.length === 0) {return null} // Return null if brandsServed is undefined or empty

  // Update this array with your actual brand logo paths
  const brands = brandsServed || [
    { name: 'Brand 1', logo: '/images/brand1.svg' },
    { name: 'Brand 2', logo: '/images/brand2.svg' },
  ];

  // Duplicating the array to create the endless, seamless marquee trail
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands]; // Repeat 4 times for a longer marquee

  return (
  <div className="w-full bg-[#f4eee6] py-14 overflow-hidden">
    {/* Title Styled like the image */}
    <p className="text-center text-[15px] text-slate-700 font-serif mb-10 tracking-wide">
      Leading brands we have worked with
    </p>

    {/* Infinite Scroll Wrapper */}
    <div className="relative flex w-full overflow-x-hidden">
      
      {/* The Animated Track */}
      <div className="flex whitespace-nowrap animate-marquee gap-4 pr-4 shrink-0">
        {duplicatedBrands.map((brand, index) => {
          // Resolve Sanity CDN Image Source cleanly or fallback safely
          const logoUrl = brand.logo 
            ? urlForImage(brand.logo)?.width(100).height(40).url() 
            : null;

          return (
            <div 
              key={index} 
              className="flex items-center justify-center w-48 h-24 bg-[#ede6dc] border border-slate-300/60 rounded-xl px-6 transition-colors duration-300 shrink-0"
            >
              <div className="relative w-full h-full flex items-center justify-center opacity-85 grayscale contrast-125">
                {logoUrl ? (
                  <Image 
                    src={logoUrl} 
                    alt={`${brand.name} logo`} 
                    width={140} 
                    height={60}  
                    className="max-w-full max-h-full object-contain"
                    unoptimized // Highly recommended for Sanity/Dynamic CDN image optimization handling
                  />
                ) : (
                  <span className="text-sm font-medium text-slate-700 font-serif whitespace-normal text-center">
                    {brand.name}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  </div>
);

}