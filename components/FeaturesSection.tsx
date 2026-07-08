import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { FeatureItem } from '@/types';

const content= 
    { tagline:"Why Choose Us",
        heading:"We create sustainable and profitable turnkey solutions for modern businesses",
        ctaText:"Learn More",
        ctaLink:"#features"};

export default function FeaturesSection({ features }: { features: FeatureItem[] }) {

  if (!features || features.length === 0) return null;

  return (
    <section className="bg-[#b3cbd2] text-[#1c2c24] font-sans py-16 md:py-24 rounded-2xl overflow-hidden max-w-7xl mx-auto">
      
      {/* Header Context */}
      <div className="px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-wider text-slate-700/80 font-serif mb-4">
            {content.tagline}
          </p>
          <h2 className="text-3xl md:text-5xl font-normal leading-tight tracking-wide text-slate-900 mb-6">
            {content.heading}
          </h2>
          
          {content.ctaText && (
            <a 
              href={content.ctaLink || "#"} 
              className="inline-flex items-center gap-2 text-sm font-medium border-b border-current pb-1 hover:opacity-80 transition-opacity"
            >
              {content.ctaText} <span>➔</span>
            </a>
          )}
        </div>
      </div>

      {/* Dynamic Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-slate-900/10">
        {features.map((item) => {
          const iconUrl = item.iconImage 
            ? urlForImage(item.iconImage).width(48).height(48).url() 
            : null;

          return (
            <div 
              key={item._id} 
              className="p-8 md:p-10 flex flex-col justify-start min-h-[320px] 
                         border-b border-slate-900/10 sm:border-r last:border-r-0
                         [&:nth-child(2n)]:sm:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:not(:last-child)]:border-r"
            >
              {/* Dynamic Icon Container */}
              <div className="mb-14 w-12 h-12 relative flex items-center justify-center">
                {iconUrl ? (
                  <Image 
                    src={iconUrl}
                    alt="" 
                    width={48}
                    height={48}
                    className="object-contain max-w-full max-h-full opacity-90"
                    unoptimized
                  />
                ) : (
                  <div className="w-8 h-8 rounded bg-slate-900/10" />
                )}
              </div>

              {/* Text Meta Fields */}
              <div className="space-y-3 mt-auto">
                <h3 className="text-xl font-medium tracking-wide text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-slate-800/90 whitespace-normal">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}