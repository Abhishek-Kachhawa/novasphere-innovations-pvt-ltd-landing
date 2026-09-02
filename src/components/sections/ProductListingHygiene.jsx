import React from 'react';
import { LISTING_STEPS } from '../../data/servicesData';
import { 
  CheckCircle2, Type, FileText, MapPin, 
  Image, Layers, ArrowRight 
} from 'lucide-react';

const iconMap = {
  Type, FileText, MapPin, Image, Layers, CheckCircle2
};

export default function ProductListingHygiene({ onOpenAudit }) {
  return (
    <section className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-black text-blue-900 uppercase tracking-widest">
            <span className="w-6 h-[2px] bg-blue-900"></span>
            PRODUCT LISTING
            <span className="w-6 h-[2px] bg-blue-900"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-950">
            Skyrocket Your Sales with Professional E-Commerce Product Listing Services
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Boost your store, visibility and sales with Novasphere. Our professional E-commerce product listing services help to stand out. From keyword optimization to SEO description to product image, we ensure every element is crafted to attract buyers as well as improve ranking on the platform.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {LISTING_STEPS.map((step, idx) => {
            const IconComponent = iconMap[step.icon] || CheckCircle2;
            return (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 border border-blue-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-blue-900 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-blue-900 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] font-bold text-blue-900">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-700" />
                  <span>Platform Guideline Compliant</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 bg-slate-950 hover:bg-blue-900 text-white font-black text-sm px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition-all"
          >
            <span>Audit My Product Listings For Free</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
