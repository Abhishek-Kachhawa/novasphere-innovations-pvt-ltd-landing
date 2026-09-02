import React from 'react';
import { TRUSTED_BRANDS } from '../../data/caseStudiesData';

export default function BrandMarquee() {
  return (
    <section className="py-12 bg-white text-slate-900 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-black text-blue-900 uppercase tracking-widest">
          <span className="w-6 h-[2px] bg-blue-900"></span>
          <span>TRUSTED PARTNERS</span>
          <span className="w-6 h-[2px] bg-blue-900"></span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mt-2">
          We Provide Services For These Leading Brands & Marketplaces
        </h3>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center py-4 bg-slate-50">
        <div className="flex space-x-8 animate-marquee whitespace-nowrap">
          {TRUSTED_BRANDS.concat(TRUSTED_BRANDS).map((brand, idx) => (
            <div 
              key={idx}
              className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow shrink-0"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-900 text-white font-black text-sm flex items-center justify-center font-mono">
                {brand.logoText.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{brand.name}</div>
                <div className="text-[10px] font-semibold text-blue-700 uppercase tracking-wider">{brand.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
