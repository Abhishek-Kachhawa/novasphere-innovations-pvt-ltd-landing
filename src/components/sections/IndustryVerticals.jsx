import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function IndustryVerticals({ onOpenAudit }) {
  const categories = [
    {
      name: "Home & Kitchen",
      desc: "Home & Kitchen Products",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
      badge: "High Growth"
    },
    {
      name: "Beauty & Personal Care",
      desc: "Beauty & Personal Care",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      badge: "Fast Delivery"
    },
    {
      name: "Fashion & Accessories",
      desc: "Fashion & Accessories",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
      badge: "Myntra Special"
    },
    {
      name: "Mobile & Tech Accessories",
      desc: "Mobile & Tech Accessories",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
      badge: "High ROAS"
    },
    {
      name: "Fitness & Lifestyle",
      desc: "Fitness & Lifestyle Items",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
      badge: "Trending"
    },
    {
      name: "Baby Products",
      desc: "Baby Products",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80",
      badge: "Blinkit Top SKU"
    },
    {
      name: "Toys, Gifts & Essentials",
      desc: "Toys, Gifts & Daily Essentials",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=600&q=80",
      badge: "High Margin"
    },
    {
      name: "Pet Care Items",
      desc: "Pet Care Items",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
      badge: "Hyper-Commerce"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-black text-blue-900 uppercase tracking-widest">
            <span className="w-6 h-[2px] bg-blue-900"></span>
            INDUSTRIES WE SERVE
            <span className="w-6 h-[2px] bg-blue-900"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            We Work with Diverse E-Commerce Businesses
          </h2>
          <p className="text-base text-slate-600">
            From fashion brands to electronics brands, we work with diverse E-Commerce businesses.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className="group relative rounded-3xl overflow-hidden shadow-sm border border-slate-200 transition-all duration-300 h-64 hover:shadow-xl"
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-4 text-white">
                <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full w-fit mb-1">
                  {cat.badge}
                </span>
                <h3 className="text-sm sm:text-base font-extrabold">{cat.name}</h3>
                <p className="text-[11px] text-slate-300 line-clamp-1">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Counter Banner */}
        <div className="mt-12 bg-slate-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800">
          <div>
            <div className="text-xl sm:text-2xl font-black">500+ Brands Served Across 10+ Marketplaces</div>
            <div className="text-xs text-slate-300 mt-1">Get custom category keyword research and ROAS strategy.</div>
          </div>
          <button
            onClick={onOpenAudit}
            className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs px-6 py-3 rounded-xl transition-colors shadow flex items-center gap-1.5"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
