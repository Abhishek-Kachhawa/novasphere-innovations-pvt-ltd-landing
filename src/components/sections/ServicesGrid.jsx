import React, { useState } from 'react';
import { 
  SERVICE_CATEGORIES, SERVICES_DATA 
} from '../../data/servicesData';
import { 
  ShoppingBag, Zap, TrendingUp, Code, FileText, LayoutGrid, 
  ArrowRight, CheckCircle2, Sparkles, PackageCheck, Shirt, Store, 
  Globe, Truck, Crown, Search, Palette, FileCheck 
} from 'lucide-react';

const iconMap = {
  ShoppingBag, Zap, TrendingUp, Code, FileText, LayoutGrid,
  PackageCheck, Shirt, Store, Globe, Truck, Crown, Search, Palette, FileCheck
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
            OUR SERVICES
            <span className="w-6 h-[2px] bg-blue-900"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Comprehensive E-Commerce Solutions for Every Platform
          </h2>
          <p className="text-base text-slate-600">
            Maximise your reach and revenue with our comprehensive e-commerce solution for every platform. Whether you are selling fashion, electronics, audio, essentials, etc, we can help you.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-10 mb-12">
          {SERVICE_CATEGORIES.map((cat) => {
            const IconComp = iconMap[cat.icon] || LayoutGrid;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-950 text-white shadow-lg shadow-slate-950/20 scale-105'
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || ShoppingBag;
            return (
              <div 
                key={service.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 overflow-hidden"
              >
                {/* Image Banner & Badge */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                  
                  {/* Badge */}
                  <span className="absolute top-3 left-3 bg-white/95 text-slate-900 text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                    {service.badge}
                  </span>

                  {/* Growth stat overlay */}
                  <span className="absolute bottom-3 right-3 bg-blue-900 text-white font-black text-xs px-2.5 py-1 rounded-lg shadow">
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

                    <h3 className="text-xl font-bold text-slate-950 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Feature Bullets */}
                  <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card Action Buttons */}
                  <div className="pt-2 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-1 text-xs font-extrabold text-blue-900 hover:text-blue-700 transition-colors"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={onOpenAudit}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-xl transition-colors"
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
        <div className="mt-16 bg-slate-950 rounded-3xl p-8 sm:p-10 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Ready to scale your e-commerce revenue?</h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Get an end-to-end audit report for Amazon, Flipkart, Myntra & Blinkit stores crafted by Jaipur's premier growth agency.
            </p>
          </div>

          <button
            onClick={onOpenAudit}
            className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm px-8 py-4 rounded-2xl shadow-xl transition-all hover:scale-105 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-sky-300" />
            <span>Book Free Audit Now</span>
          </button>
        </div>

      </div>
    </section>
  );
}
