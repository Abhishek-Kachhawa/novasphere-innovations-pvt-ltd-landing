import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../../data/caseStudiesData';
import { ArrowRight } from 'lucide-react';

export default function PortfolioView({ onOpenAudit }) {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const categories = ["All Projects", "Marketplace Services", "Brand Stores", "Web Development"];

  const filteredItems = activeCategory === "All Projects"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      
      {/* Header Banner */}
      <section className="py-16 bg-slate-950 text-white border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="text-xs font-black text-sky-400 uppercase tracking-widest">
            FEATURED PORTFOLIO & BRAND STORES
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Businesses Don't Need More Vendors. They Need Growth Partners.
          </h1>

          <p className="text-sm sm:text-base text-slate-300">
            Every project in our portfolio reflects a commitment to solving problems, creating value, and driving measurable outcomes.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenAudit}
              className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs px-6 py-3 rounded-xl transition-all shadow"
            >
              Start Your Project &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Portfolio Grid */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-2.5 left-2.5 bg-slate-950 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                </div>

                <div className="p-4 space-y-2">
                  <div className="text-[10px] font-bold text-blue-900 uppercase tracking-wider">{item.type}</div>
                  <h3 className="text-base font-extrabold text-slate-950">{item.name}</h3>
                  
                  <button
                    onClick={onOpenAudit}
                    className="text-xs font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1 pt-1"
                  >
                    <span>Visit Project &rarr;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-16 bg-slate-50 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl font-extrabold text-slate-950">Let's Build Your Next Success Story</h2>
          <p className="text-sm text-slate-600">From marketplace growth to Shopify scaling, Novasphere helps brands unlock sustainable growth.</p>
          <button
            onClick={onOpenAudit}
            className="bg-slate-950 text-white font-bold text-xs px-8 py-3.5 rounded-xl hover:bg-blue-900 transition-colors shadow"
          >
            Book Free Consultation
          </button>
        </div>
      </section>

    </div>
  );
}
