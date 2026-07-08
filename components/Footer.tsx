'use client';

import React from 'react';
import Link from 'next/link';
import { FooterSettingsData } from '@/types';

interface FooterProps {
  data: FooterSettingsData;
}

export default function Footer({ data }: FooterProps) {
  if (!data) return null;

  return (
    <footer className="bg-[#222525] text-[#E5E2DC] font-sans w-full overflow-hidden mt-auto">
      
      {/* 1. Giant Brand Text Layout */}
      <div className="w-full select-none pt-4 px-4 overflow-hidden flex justify-center border-b border-gray-800/20">
        <h1 className="text-[17vw] leading-none font-bold tracking-tighter text-[#161818] uppercase select-none w-full text-center">
          {data.bigLogoText}
        </h1>
      </div>

      {/* 2. Main Columns Section Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Links Left Columns Wrapper (takes 7 blocks out of 12) */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          {/* Business Areas */}
          {data.businessAreas && (
            <div>
              <h3 className="text-sm font-medium tracking-wide text-white mb-5">{data.businessAreas.title}</h3>
              <ul className="space-y-3 text-xs text-gray-400 font-light">
                {data.businessAreas.links?.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quick Links */}
          {data.quickLinks && (
            <div>
              <h3 className="text-sm font-medium tracking-wide text-white mb-5">{data.quickLinks.title}</h3>
              <ul className="space-y-3 text-xs text-gray-400 font-light">
                {data.quickLinks.links?.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Resources */}
          {data.resources && (
            <div>
              <h3 className="text-sm font-medium tracking-wide text-white mb-5">{data.resources.title}</h3>
              <ul className="space-y-3 text-xs text-gray-400 font-light">
                {data.resources.links?.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Contact Metadata Block Column (takes 2 blocks out of 12) */}
        {data.contactInfo && (
          <div className="md:col-span-2">
            <h3 className="text-sm font-medium tracking-wide text-white mb-5">{data.contactInfo.title}</h3>
            <div className="space-y-5 text-xs text-gray-400 font-light leading-relaxed">
              {data.contactInfo.phone && <p className="hover:text-white transition-colors">{data.contactInfo.phone}</p>}
              {data.contactInfo.email && <p className="hover:text-white transition-colors break-all">{data.contactInfo.email}</p>}
              
              {data.contactInfo.visitingAddress && (
                <div>
                  <span className="text-[10px] text-gray-500 uppercase block tracking-wider mb-0.5">Visiting address</span>
                  <p className="whitespace-pre-line">{data.contactInfo.visitingAddress}</p>
                </div>
              )}
              
              {data.contactInfo.postalAddress && (
                <div>
                  <span className="text-[10px] text-gray-500 uppercase block tracking-wider mb-0.5">Postal address</span>
                  <p className="whitespace-pre-line">{data.contactInfo.postalAddress}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 3. Right Side: Newsletter Action Element Container (takes 3 blocks out of 12) */}
        <div className="md:col-span-3 flex flex-col justify-between gap-8">
          <div>
            <h2 className="text-xl md:text-2xl font-serif font-light tracking-wide text-gray-200 leading-snug mb-6 max-w-sm">
              {data.newsletterHeading}
            </h2>
            
            {/* Minimalist Input Field Container */}
            <form onSubmit={(e) => e.preventDefault()} className="relative w-full border-b border-gray-600 pb-2 flex items-center group">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent text-sm w-full text-white placeholder-gray-500 focus:outline-none pr-8 font-light"
                required
              />
              <button type="submit" aria-label="Submit newsletter subscription" className="absolute right-0 text-gray-400 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </form>
          </div>

          {/* Verification Badges & Social Links Layer */}
          <div className="flex items-center justify-between gap-4 pt-4 mt-auto">
            {/* SVG/Placeholder Verification Marks */}
            <div className="flex items-center gap-3 opacity-60">
              <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-[8px] font-mono tracking-tighter text-gray-400">ISO</div>
              <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-[8px] font-mono tracking-tighter text-gray-400">ISO</div>
            </div>
            
            {/* Social Network Vector Containers */}
            <div className="flex items-center gap-2.5">
              {['instagram', 'facebook', 'linkedin'].map((platform, sIdx) => (
                <a key={sIdx} href="#" aria-label={`Follow us on ${platform}`} className="w-7 h-7 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors">
                  <span className="text-[10px] capitalize font-light">{platform[0]}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 4. Bottom Legal Meta Sub-bar */}
      <div className="bg-[#9B899A] text-[#222525] text-xs font-light py-4 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>All rights reserved</div>
          <div>© {data.bigLogoText} 2026</div>
          <div className="flex items-center gap-4 text-gray-900/80">
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy policy</Link>
            <span>|</span>
            <Link href="/cookies" className="hover:text-black transition-colors">Cookie policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-black transition-colors">Terms & conditions</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}