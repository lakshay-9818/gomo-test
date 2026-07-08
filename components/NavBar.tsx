'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HeaderSettingsData, NavItem } from '@/types';

interface NavbarProps {
  data: HeaderSettingsData;
}

export default function Navbar({ data }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  if (!data) return null;

  return (
    <header className="bg-[#F6F1EA] text-[#1A2B23] sticky top-0 z-50 border-b border-gray-200/40 px-6 md:px-12 lg:px-16 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-12">
        
        {/* Left Side: Brand Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-slate-950">
          {data.logoText}
        </Link>

        {/* Center: Dynamic Navigation links from Sanity */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-sans text-sm font-medium tracking-wide text-gray-700">
          {data.navItems?.map((item: NavItem, idx) => {
            if (item._type === 'navLink') {
              return (
                <Link key={idx} href={item.href} className="hover:text-black transition-colors">
                  {item.label}
                </Link>
              );
            }

            if (item._type === 'navDropdown') {
              const isOpen = activeDropdown === item.label;
              return (
                <div 
                  key={idx} 
                  className="relative group py-2"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 hover:text-black transition-colors focus:outline-none">
                    {item.label}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" viewBox="0 0 24 24" 
                      strokeWidth={2.5} stroke="currentColor" 
                      className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  {/* Desktop Dropdown Submenu Layer */}
                  <div className={`absolute top-full left-0 bg-[#F6F1EA] shadow-xl border border-black/5 rounded-xl py-3 w-56 transition-all duration-200 origin-top ${
                    isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                  }`}>
                    {item.links.map((subLink, subIdx) => (
                      <Link 
                        key={subIdx} 
                        href={subLink.href} 
                        className="block px-4 py-2 hover:bg-black/5 transition-colors text-xs text-gray-800 font-normal"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </nav>

        {/* Right Side Tools: Lang, CTA Button, Burger Menu */}
        <div className="flex items-center gap-4 md:gap-6">
          
          {/* Language Picker Dropdown */}
          <div className="hidden sm:flex items-center gap-1 text-sm font-medium text-gray-700 cursor-pointer hover:text-black select-none">
            <span>En</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>

          {/* Core Dynamic Contact CTA Button */}
          <Link 
            href={data.ctaLink || '#'} 
            className="hidden md:inline-flex bg-[#1A2B23] text-white text-sm font-medium tracking-wide px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-150 shadow-sm"
          >
            {data.ctaText}
          </Link>

          {/* Burger Menu Button (Mobile Viewports Only) */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden flex flex-col gap-1.5 p-1 text-gray-800 hover:text-black focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className={`h-0.5 w-6 bg-current transform transition-transform duration-200 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-6 bg-current transition-opacity duration-200 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-current transform transition-transform duration-200 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Overlays */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[81px] bg-[#F6F1EA] z-40 border-t border-gray-200/50 p-6 flex flex-col gap-6 animate-fadeIn">
          <div className="flex flex-col gap-4 font-sans text-base font-medium">
            {data.navItems?.map((item, idx) => (
              <div key={idx} className="border-b border-black/5 pb-2">
                {item._type === 'navLink' ? (
                  <Link href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-1">
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    <span className="text-gray-400 text-xs block mb-1 uppercase tracking-wider font-bold">{item.label}</span>
                    <div className="pl-3 space-y-2 mt-1">
                      {item.links.map((sub, sIdx) => (
                        <Link key={sIdx} href={sub.href} onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-gray-800">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <Link 
            href={data.ctaLink || '#'} 
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center bg-[#1A2B23] text-white py-3.5 rounded-full font-medium mt-auto"
          >
            {data.ctaText}
          </Link>
        </div>
      )}
    </header>
  );
}