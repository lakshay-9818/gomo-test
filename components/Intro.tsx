import type { IntroData } from '@/types'
import { urlForImage } from '@/sanity/lib/image'

export default function Intro({ intro, id }: { intro?: IntroData; id?: string }) {
  if (!intro) return null
  else {console.log("INtropara",intro.introParagraphs)}

  // return (
  //   <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
  //     {intro?.introHeading && <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{intro.introHeading}</h2>}
  //     {intro?.introText && <p className="mt-4 text-base leading-relaxed text-ink-soft">{intro.introText}</p>}
  //     <div className="mx-auto mt-10 h-48 w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-[#c9b89c] to-[#8f7d63] sm:h-56" />
  //   </section>
  // )
  const imageAsset = intro?.introImage
      const imageUrl = urlForImage(imageAsset as never)?.width(1200).height(900).url()
  // Dynamic Data Object
  const contentData = {
  topTagline: "Start with us",
  mainHeading: intro?.introHeading,
  ctaText: "Learn more about us",
  ctaLink: "#",
  heroImage: {
    src: imageUrl || "/images/placeholder.jpg",
    alt: "Cozy café interior with wooden tables and brick accents"
  },
  paragraphs: intro?.introParagraphs || [],
  stats: intro?.stats?.length
    ? intro.stats
    : [
        { value: "50+", label: "Years of industry experience" },
        { value: "7", label: "Industries served" },
        { value: "50+", label: "Completed projects" },
        { value: "4", label: "Offices across Sweden" },
      ],
};

  return (
    <section id={id} className="bg-[#f4eee6] text-[#1c2c24] font-sans px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <p className="text-sm uppercase tracking-wider text-gray-600 mb-4">
            {contentData.topTagline}
          </p>
          <h2 className="text-3xl md:text-5xl font-normal leading-tight mb-6 text-slate-800">
            {contentData.mainHeading}
          </h2>
          <a 
            href={contentData.ctaLink} 
            className="inline-flex items-center gap-2 text-sm font-medium border-b border-current pb-1 hover:opacity-80 transition-opacity"
          >
            {contentData.ctaText} <span>➔</span>
          </a>
        </div>

        {/* Main Content: Image & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-28">
          {/* Image Container with Custom Border Radius */}
          <div className="w-full h-[300px] md:h-[450px] overflow-hidden rounded-[2rem] shadow-sm">
            <img 
              src={contentData.heroImage.src} 
              alt={contentData.heroImage.alt} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description Text */}
          <div className="space-y-6 text-base md:text-lg text-slate-700 font-light leading-relaxed">
            {contentData.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <hr className="border-t border-slate-300/60 mb-12" />

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
          {contentData.stats.map((stat, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <span className="text-5xl md:text-7xl font-light tracking-tight text-slate-800">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-gray-600 font-light max-w-[180px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
