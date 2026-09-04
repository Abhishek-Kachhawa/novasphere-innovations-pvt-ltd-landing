import React, { useState } from 'react';
import { 
  SERVICE_CATEGORIES, SERVICES_DATA 
} from '../../data/servicesData';
import { 
  ShoppingBag, Store, PackageCheck, LayoutGrid, 
  ArrowRight, CheckCircle2, Sparkles 
} from 'lucide-react';

const iconMap = {
  ShoppingBag, Store, PackageCheck, LayoutGrid
};

export default function ServicesGrid({ onSelectService, onOpenAudit }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = activeCategory === "all" 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-white text-slate-900 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-black text-blue-900 uppercase tracking-widest">
            <span className="w-6 h-[2px] bg-blue-900"></span>
            OUR CORE SERVICES
            <span className="w-6 h-[2px] bg-blue-900"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Specialized Seller Account Management
          </h2>
          <p className="text-base text-slate-600">
            Maximise your reach and revenue on India's top 3 marketplaces: <strong>Meesho, Amazon & Flipkart</strong>. We handle cataloging, listings, PPC ads, inventory forecasting & account health restoration.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10 mb-12">
          {SERVICE_CATEGORIES.map((cat) => {
            const IconComp = iconMap[cat.icon] || LayoutGrid;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-900 text-white shadow-lg shadow-blue-900/25 scale-105 border border-blue-700'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <IconComp className={`w-4 h-4 ${isActive ? 'text-sky-300' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || ShoppingBag;
            return (
              <div 
                key={service.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 overflow-hidden"
              >
                {/* Image Banner & Badge */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  
                  {/* Badge */}
                  <span className="absolute top-3 left-3 bg-white/95 text-blue-950 text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm border border-slate-200">
                    {service.badge}
                  </span>

                  {/* Growth stat overlay */}
                  <span className="absolute bottom-3 right-3 bg-blue-900 text-white font-black text-xs px-3 py-1 rounded-lg shadow-md border border-blue-700">
                    {service.growthStat}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
                      <IconComponent className="w-4 h-4" />
                      <span>{service.platform}</span>
                    </div>

                    <h3 className="text-xl font-black text-slate-950 group-hover:text-blue-900 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {service.features.slice(0, 4).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card Action Buttons */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-900 hover:text-blue-700 transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={onOpenAudit}
                      className="bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors shadow-xs"
                    >
                      Book Audit
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 rounded-3xl p-8 sm:p-10 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-900">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Ready to scale your Meesho, Amazon & Flipkart revenue?</h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Get an end-to-end audit report for your seller account crafted by Indore's premier e-commerce growth agency.
            </p>
          </div>

          <button
            onClick={onOpenAudit}
            className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm px-8 py-4 rounded-2xl shadow-xl transition-all hover:scale-105 flex items-center gap-2 border border-blue-400/40"
          >
            <Sparkles className="w-4 h-4 text-sky-300" />
            <span>Book Free Store Audit Now</span>
          </button>
        </div>

      </div>
    </section>
  );
}
