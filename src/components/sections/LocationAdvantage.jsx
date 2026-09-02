import React from 'react';
import { MapPin, Building2, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';

export default function LocationAdvantage({ onOpenAudit }) {
  return (
    <section className="py-20 bg-white text-slate-900 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-black text-blue-900 uppercase tracking-widest">
              <span className="w-6 h-[2px] bg-blue-900"></span>
              LOCATION ADVANTAGE
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-950">
              Best E-Commerce Handling Company in Jaipur
            </h2>

            <p className="text-base text-slate-700 leading-relaxed">
              Novasphere Innovations is your trusted partner for seamless e-commerce management. We proudly serve as Jaipur's leading e-commerce management agency. We help local and national businesses to scale their business and revenue across various online marketplace. From inventory to marketing, we handle all with precision and professionalism.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Our strategic location in Jaipur allows us to work with all kinds of businesses. We work with manufacturers, wholesalers, D2C brands and help to expand on Amazon, Flipkart, Meesho, JioMart, Shopify, and many more. Work with Novasphere Innovations and make your e-commerce business huge.
            </p>

            {/* Serving Cities Grid */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-3">
                Key E-Commerce Cities & Manufacturing Hubs We Serve:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {COMPANY_INFO.servingCities.map((city, idx) => (
                  <div key={idx} className="bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-700 shrink-0" />
                      <div className="text-sm font-bold text-slate-900">{city.name}</div>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1 pl-6">{city.highlight}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Visual Office Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-950 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-sky-400 border border-blue-500/30 flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Jaipur Headquarters</h4>
                  <p className="text-xs text-slate-400">Mansarovar Commercial Hub</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Toll Free: <strong>{COMPANY_INFO.tollFree}</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Serving 1000+ Sellers Across All Indian States</span>
                </div>
              </div>

              <div className="p-4 bg-blue-950/60 rounded-2xl border border-blue-800/40 text-xs text-sky-200">
                ⚡ <strong>Local Jaipur Advantage:</strong> In-person cataloging studio assistance & direct onboarding manager sessions available at our Mansarovar office.
              </div>

              <button
                onClick={onOpenAudit}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-3.5 rounded-xl shadow transition-colors border border-blue-400/30"
              >
                Schedule Jaipur Office Meeting / Audit
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
