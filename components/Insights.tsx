'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { InsightData } from '@/types';
import { urlForImage } from '@/sanity/lib/image';

export default function Insights({ insights }: { insights: InsightData[] }) {
  if (!insights || insights.length === 0) return null;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Monitor scrolling to update active indicator dots
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const { scrollLeft, clientWidth } = scrollContainer;
      // Calculate active dot index based on horizontal position scroll percentages
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-[#F6F1EA] py-20 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Header Container */}
      <div className="max-w-4xl mx-auto text-center mb-16 flex flex-col items-center">
        <span className="text-sm md:text-base font-serif italic text-gray-800 mb-4 tracking-wide">
          How we create value for our clients
        </span>
        <h2 className="text-3xl md:text-5xl font-normal text-[#1A2B23] tracking-tight leading-tight max-w-3xl mb-6">
          Our most recent successful projects delivered together with our clients
        </h2>
        <Link 
          href="/insights" 
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-800 border-b border-gray-800 pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors duration-200"
        >
          View all insights
          <span className="text-xs">➔</span>
        </Link>
      </div>

      {/* Horizontal Carousel Wrapper */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-none no-scrollbar -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-16 lg:px-16"
      >
        {insights.map((insight) => {
          const slugString = typeof insight.slug === 'object' && insight.slug !== null
            ? (insight.slug as any).current 
            : insight.slug;

          return (
            <div 
              key={insight._id || slugString}
              className="relative flex-none w-[85vw] sm:w-[45vw] lg:w-[28vw] aspect-[4/5] rounded-[24px] overflow-hidden group snap-start shadow-sm"
            >
              {/* Floating Classification Tag Badge */}
              {insight.type && (
                <div className="absolute top-5 left-5 z-10">
                  <span className="text-xs font-light text-slate-200 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 capitalize tracking-wide">
                    {insight.type === 'press-release' ? 'Press release' : insight.type}
                  </span>
                </div>
              )}

              {/* Project Background Image */}
              {insight.coverImage && (
                <Image
                  src={urlForImage(insight.coverImage).width(600).height(750).url()}
                  alt={insight.title}
                  fill
                  sizes="(max-w-640px) 85vw, (max-w-1024px) 45vw, 28vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  unoptimized
                />
              )}

              {/* Bottom Glass Overlay Container */}
              <div className="absolute bottom-0 left-0 right-0 p-1">
                <div className="bg-black/25 backdrop-blur-md rounded-[20px] overflow-hidden border border-white/10 text-white flex flex-col justify-between h-36">
                  
                  {/* Upper portion: Title */}
                  <div className="p-5 pb-0">
                    <h3 className="text-xl md:text-2xl font-normal tracking-wide line-clamp-2 leading-snug">
                      {insight.title}
                    </h3>
                  </div>

                  {/* Lower portion: Metadata grid split */}
                  <div className="grid grid-cols-12 border-t border-white/10 mt-auto bg-black/10">
                    <div className="col-span-8 p-4 flex items-center">
                      <p className="text-xs md:text-sm text-gray-200/90 line-clamp-1 font-light">
                        {insight.publishedAt
                          ? new Date(insight.publishedAt).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })
                          : ""
                        }
                      </p>
                    </div>
                    
                    <Link 
                      href={`/insight/${slugString}`}
                      className="col-span-4 p-4 border-l border-white/10 flex items-center justify-center gap-1.5 text-xs md:text-sm font-medium hover:bg-white/10 transition-colors duration-200"
                    >
                      <span>Read more</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2} 
                        stroke="currentColor" 
                        className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- PAGINATION DOTS CONTAINER --- */}
      <div className="flex items-center justify-center gap-2 mt-6 px-2 max-w-7xl mx-auto">
        {insights.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              const container = scrollRef.current;
              if (container) {
                const itemWidth = container.scrollWidth / insights.length;
                container.scrollTo({ left: itemWidth * idx, behavior: 'smooth' });
              }
            }}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ease-out cursor-pointer ${
              activeIndex === idx 
                ? 'w-6 bg-[#1A2B23]' // Primary active accent tone matching text
                : 'w-2.5 bg-gray-400/50 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </section>
  );
}