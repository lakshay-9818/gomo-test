// "use client";

// import React, { useState } from 'react';
// import Image from 'next/image';

// export default function Categories({ categories }: { categories?: any[] }) {
//   // 1. Dynamic Data Array for Industries
//   const industries = [
//     {
//       id: "offices",
//       name: "Offices & Workplaces",
//       image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
//       tags: ["Workplace analysis", "Interior design", "Project management"],
//       description: "We help businesses create functional and inspiring workplaces that support productivity and daily work."
//     },
//     {
//       id: "hotels",
//       name: "Hotels",
//       image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
//       tags: ["Lobby architecture", "Room ergonomics", "Hospitality design"],
//       description: "Crafting memorable guest experiences through premium materials and optimized, relaxing interior layouts."
//     },
//     {
//       id: "restaurants",
//       name: "Restaurants",
//       image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
//       tags: ["Dining layout", "Kitchen logistics", "Ambiance lighting"],
//       description: "Balancing high-capacity commercial kitchen workflows with elegant, inviting atmosphere for diners."
//     },
//     {
//       id: "cafes",
//       name: "Cafés",
//       image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
//       tags: ["Counter efficiency", "Bespoke seating", "Social spaces"],
//       description: "Optimizing foot traffic flow around espresso bars while fostering cozy spots for long-stay patrons."
//     },
//     {
//       id: "shops",
//       name: "Shops & Retail",
//       image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1200&q=80",
//       tags: ["Visual merchandising", "Storefront layout", "Lighting strategy"],
//       description: "Driving retail engagement with strategic product positioning pathways and curated customer journeys."
//     },
//     {
//       id: "bakery",
//       name: "Bakery & Confectionery",
//       image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
//       tags: ["Oven integration", "Display hygiene", "Production flow"],
//       description: "Integrating technical baking infrastructure cleanly with front-of-house sensory display counters."
//     },
//     {
//       id: "food-industry",
//       name: "Food Industry",
//       image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
//       tags: ["Industrial scaling", "Hygiene compliance", "Automation workflows"],
//       description: "High-yield food assembly plant designs meeting strict international safety and processing benchmarks."
//     }
//   ];

//   // 2. Active Tab State
//   const [activeTab, setActiveTab] = useState(industries[0]);

//   return (
//     <section className="bg-[#f4eee6] text-[#1c2c24] font-sans px-6 py-16 md:py-24">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Top Header Text Section */}
//         <div className="text-center max-w-4xl mx-auto mb-14 md:mb-18">
//           <p className="text-xs text-slate-600 mb-4 tracking-normal">
//             Enabling businesses to succeed since 1973
//           </p>
//           <h2 className="text-2xl md:text-4xl font-normal leading-tight text-slate-800 tracking-wide max-w-3xl mx-auto">
//             We create sustainable and profitable complete solutions for cafés, restaurants and bakeries from first idea to finished business.
//           </h2>
//         </div>

//         {/* Content Split Grid Block */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
//           {/* Left Panel: Navigation Menu */}
//           <div className="bg-[#1e2d2f] text-white p-8 md:p-12 rounded-2xl flex flex-col justify-center min-h-[500px]">
//             <ul className="space-y-4 md:space-y-5">
//               {industries.map((item) => {
//                 const isActive = currentTab.id === item.id;
//                 return (
//                   <li key={item.id}>
//                     <button
//                       onClick={() => setActiveTab(item)}
//                       onMouseEnter={() => setActiveTab(item)} // Optional: Swaps layout on hover
//                       className={`w-full text-left flex items-center justify-between text-2xl md:text-[32px] font-serif transition-all duration-300 ${
//                         isActive 
//                           ? "text-white opacity-100 font-normal" 
//                           : "text-slate-400 opacity-40 hover:opacity-70"
//                       }`}
//                     >
//                       <span>{item.name}</span>
//                       {isActive && <span className="text-xl font-sans ml-4 font-light">➔</span>}
//                     </button>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>

//           {/* Right Panel: Feature Showroom Card */}
//           <div className="relative rounded-2xl overflow-hidden min-h-[500px] flex flex-col justify-end group shadow-md">
            
//             {/* Dynamic Background Image */}
//             <Image
//               src={currentTab.image}
//               alt={currentTab.name}
//               fill
//               className="object-cover transition-transform duration-700 ease-out"
//               sizes="(max-w-1024px) 100vw, 50vw"
//               priority
//             />

//             {/* Frosted / Gradient Info Overlay matching your look */}
//             <div className="relative w-full p-8 md:p-10 bg-black/20 backdrop-blur-md border-t border-white/10 text-white flex flex-col justify-between group">
//               <div>
//                 <h3 className="text-xl md:text-2xl font-normal mb-4 font-sans">
//                   {currentTab.name}
//                 </h3>
                
//                 {/* Dynamically Populated Sub-tags */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {currentTab.tags.map((tag, idx) => (
//                     <span 
//                       key={idx} 
//                       className="text-[11px] font-light bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-slate-200"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <p className="text-sm font-light text-slate-200/90 leading-relaxed max-w-md mb-8">
//                   {currentTab.description}
//                 </p>
//               </div>

//               {/* Bottom Right Sticky Action Trigger */}
//               <div className="flex justify-end border-t border-white/10 pt-4 mt-2">
//                 <a 
//                   href="#solutions" 
//                   className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-light text-slate-200 hover:text-white transition-colors"
//                 >
//                   Explore solutions <span className="text-sm">↗</span>
//                 </a>
//               </div>
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image'
import type {SolutionCategory} from '@/types'


export default function Categories({ categories, id }: { categories: SolutionCategory[]; id?: string }) {
  // Hooks MUST be called before any early return
  const [activeTab, setActiveTab] = useState<SolutionCategory | null>(null);

  // Safe Fallback: Handle situations where Sanity data might be empty or loading
  if (!categories || categories.length === 0) {
    return null;
  }

  // Initialize once categories are available
  const currentTab = activeTab ?? categories[0];

  return (
    <section id={id} className="bg-[#f4eee6] text-[#1c2c24] font-sans px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Text Section */}
        <div className="text-center max-w-4xl mx-auto mb-14 md:mb-18">
          <p className="text-xs text-slate-600 mb-4 tracking-normal">
            Enabling businesses to succeed since 1973
          </p>
          <h2 className="text-2xl md:text-4xl font-normal leading-tight text-slate-800 tracking-wide max-w-3xl mx-auto">
            We create sustainable and profitable complete solutions for cafés, restaurants and bakeries from first idea to finished business.
          </h2>
        </div>

        {/* Content Split Grid Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Left Panel: Navigation Menu */}
          <div className="bg-[#1e2d2f] text-white p-8 md:p-12 rounded-2xl flex flex-col justify-center min-h-[500px]">
            <ul className="space-y-4 md:space-y-5">
              {categories.map((item) => {
                const isActive = currentTab._id === item._id;
                return (
                  <li key={item._id}>
                    <button
                      type="button"
                      onClick={() => setActiveTab(item)}
                      onMouseEnter={() => setActiveTab(item)} // Optional: updates slide on hover
                      className={`w-full text-left flex items-center justify-between text-2xl md:text-[32px] font-serif transition-all duration-300 ${
                        isActive 
                          ? "text-white opacity-100 font-normal" 
                          : "text-slate-400 opacity-40 hover:opacity-70"
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive && <span className="text-xl font-sans ml-4 font-light">➔</span>}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Panel: Feature Showroom Card */}
          <div className="relative rounded-2xl overflow-hidden min-h-[500px] flex flex-col justify-end group shadow-md">

                      {urlForImage(currentTab.image as never)?.url() && 
                          <Image
                              src={urlForImage(currentTab.image as never)?.width(1200).height(800).url() || 'image-placeholder.jpg'}
                              alt={currentTab.name}
                              fill
                              className="object-cover transition-transform duration-700 ease-out"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              priority
                          />
                      }

            {/* Frosted / Gradient Info Overlay */}
            <div className="relative w-full p-8 md:p-10 bg-black/20 backdrop-blur-md border-t border-white/10 text-white flex flex-col justify-between group">
              <div>
                <h3 className="text-xl md:text-2xl font-normal mb-4 font-sans">
                  {currentTab.name}
                </h3>
                
                {/* Dynamically Populated Sub-tags from Sanity Array */}
                {currentTab.tags && currentTab.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {currentTab.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-[11px] font-light bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {currentTab.description && (
                  <p className="text-sm font-light text-slate-200/90 leading-relaxed max-w-md mb-8">
                    {currentTab.description}
                  </p>
                )}
              </div>

              {/* Bottom Right Sticky Action Trigger */}
              <div className="flex justify-end border-t border-white/10 pt-4 mt-2">
                <a 
                  href="#solutions" 
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-light text-slate-200 hover:text-white transition-colors"
                >
                  Explore solutions <span className="text-sm">↗</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}