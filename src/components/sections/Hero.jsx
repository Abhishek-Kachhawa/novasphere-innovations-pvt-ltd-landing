import React from 'react';
import { 
  Star, ArrowRight, TrendingUp, ShieldCheck, 
  ShoppingBag, CheckCircle, Sparkles 
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';

export default function Hero({ onOpenAudit, onScrollToServices }) {
  const marketplaceBadges = [
    "Amazon SPN Network",
    "Flipkart Preferred Partner",
    "Myntra Premier",
    "Shopify Certified",
    "Blinkit Quick-Commerce"
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-white text-slate-900 pt-10 pb-16 lg:py-24 border-b border-slate-200/80">
      {/* Subtle Ambient Navy Grid Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] -z-10"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50/80 rounded-full blur-3xl -z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Executive Badge Pill */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-900 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-700" />
              <span>INDIA'S #1 E-COMMERCE GROWTH AGENCY</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-none text-slate-950">
              Best E-Commerce <br className="hidden sm:inline" />
              <span className="text-blue-900">
                Platform Service Provider
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <strong>{COMPANY_INFO.name}</strong> offers complete seller account management for <strong className="text-slate-900">Myntra, Amazon, Flipkart, Shopify, Blinkit & Zepto</strong> including listings, inventory, performance marketing & 340%+ GMV scaling.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto bg-slate-950 hover:bg-blue-900 text-white font-black text-base px-8 py-4 rounded-2xl shadow-xl shadow-slate-950/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group"
              >
                <span>Book Free Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-bold text-base px-7 py-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Talk to an Expert</span>
              </a>
            </div>

            {/* Rating & Social Proof Banner */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 border-t border-slate-200">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="font-extrabold text-slate-900 text-base ml-1.5">4.9</span>
              </div>
              <div className="text-xs text-slate-600 font-medium">
                Trusted by <strong className="text-slate-900">1000+ sellers</strong> across India
              </div>
            </div>

            {/* Platform Badges Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
              {marketplaceBadges.map((badge, idx) => (
                <span 
                  key={idx} 
                  className="bg-slate-100 text-slate-800 text-[11px] font-bold px-3 py-1 rounded-xl border border-slate-200 flex items-center gap-1.5"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-blue-700" />
                  {badge}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Visual Card & Metrics Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Executive White Glass Card */}
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
                
                {/* Card Top Title */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center border border-blue-200">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">Seller Account Dashboard</h4>
                      <p className="text-[11px] text-slate-500">Live GMV & ROAS Tracker</p>
                    </div>
                  </div>
                  <span className="bg-blue-50 text-blue-900 text-[11px] font-bold px-2.5 py-1 rounded-full border border-blue-200">
                    Live Scaling
                  </span>
                </div>

                {/* Highlighted Key Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                    <div className="text-[11px] text-slate-500 font-bold uppercase">Avg Sales Growth</div>
                    <div className="text-2xl sm:text-3xl font-black text-blue-900 mt-1">
                      {COMPANY_INFO.stats.salesGrowth}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">In First 90 Days</div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                    <div className="text-[11px] text-slate-500 font-bold uppercase">GMV Managed</div>
                    <div className="text-2xl sm:text-3xl font-black text-blue-900 mt-1">
                      {COMPANY_INFO.stats.gmvManaged}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">Across Marketplaces</div>
                  </div>
                </div>

                {/* Feature Bullet List */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 border border-blue-200">
                      ✓
                    </div>
                    <span>End-to-End Amazon, Flipkart & Myntra Management</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 border border-blue-200">
                      ✓
                    </div>
                    <span>Instant Commerce Onboarding (Blinkit & Zepto)</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 border border-blue-200">
                      ✓
                    </div>
                    <span>A+ Content, SEO Cataloging & Ad ROAS Optimization</span>
                  </div>
                </div>

                {/* Free Audit Trigger inside Card */}
                <button
                  onClick={onOpenAudit}
                  className="w-full bg-slate-950 hover:bg-blue-900 text-white font-black text-sm py-3.5 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-sky-300" />
                  <span>Get Free Audit for Your E-Commerce Store</span>
                </button>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
