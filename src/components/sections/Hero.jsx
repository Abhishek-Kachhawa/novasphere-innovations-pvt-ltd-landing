import React from 'react';
import { 
  Star, ArrowRight, TrendingUp, ShieldCheck, 
  ShoppingBag, CheckCircle, Sparkles, Phone, MessageCircle, Mail
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';

export default function Hero({ onOpenAudit, onScrollToServices }) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hi Novasphere Team, I want to audit my seller account on Meesho, Amazon, and Flipkart.")}`;

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-slate-50/60 to-white text-slate-900 pt-8 pb-16 lg:py-20 border-b border-slate-200/80">
      
      {/* Background Square Grid Structure (56px Square Boxes) & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large Clean Square Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(30, 58, 138, 0.09) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(30, 58, 138, 0.09) 1.5px, transparent 1.5px)`,
            backgroundSize: '56px 56px'
          }}
        ></div>

        {/* Diagonal Soft Micro-Stripe Accent Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, rgba(30, 58, 138, 0.03) 0, rgba(30, 58, 138, 0.03) 1px, transparent 0, transparent 28px)`
          }}
        ></div>

        {/* Soft Radial Navy Ambient Glow Orbs */}
        <div className="absolute top-1/3 right-[12%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/25 via-sky-400/20 to-indigo-600/15 rounded-full blur-[110px]"></div>
        <div className="absolute -top-16 left-[5%] w-[450px] h-[450px] bg-blue-500/15 rounded-full blur-[90px]"></div>

        {/* Soft Translucent Floating Watermark Marketplace Badges in Grid Background */}
        <div className="absolute top-16 left-[46%] opacity-20 blur-[0.3px] animate-bounce pointer-events-none hidden md:block" style={{ animationDuration: '6s' }}>
          <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white font-black text-2xl flex items-center justify-center shadow-lg font-serif">
            a
          </div>
        </div>

        <div className="absolute bottom-16 left-[12%] opacity-20 blur-[0.3px] animate-pulse pointer-events-none hidden md:block" style={{ animationDuration: '4s' }}>
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-black text-lg flex items-center justify-center shadow-lg">
            f
          </div>
        </div>

        <div className="absolute top-1/3 right-[3%] opacity-20 blur-[0.3px] animate-bounce pointer-events-none hidden lg:block" style={{ animationDuration: '7s' }}>
          <div className="w-14 h-14 rounded-2xl bg-pink-600 text-white font-black text-2xl flex items-center justify-center shadow-lg font-serif">
            m
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge Pill */}
            <div className="inline-flex items-center gap-2 bg-blue-900/10 border border-blue-900/25 text-blue-950 px-4 py-1.5 rounded-full text-xs font-black tracking-wide shadow-sm backdrop-blur-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-700 animate-pulse"></span>
              <span className="text-blue-900 font-extrabold uppercase tracking-wider">
                INDIA'S #1 E-COMMERCE GROWTH AGENCY
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-950">
              Best <span className="relative inline-block text-blue-900">
                E-Commerce
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-600/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                </svg>
              </span> <br className="hidden sm:inline" />
              Platform Service Provider
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <strong>{COMPANY_INFO.name}</strong> offers complete seller account management for <strong className="text-blue-950 font-bold">Meesho, Amazon, & Flipkart</strong> including listings, inventory, performance marketing & 150%+ GMV scaling.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              
              {/* Primary Navy Blue Pill Button */}
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white font-extrabold text-base px-8 py-4 rounded-full shadow-xl shadow-blue-900/30 hover:shadow-2xl hover:scale-[1.04] transition-all duration-300 flex items-center justify-center gap-3 group border border-blue-700/50"
              >
                <span>Book Free Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-sky-300" />
              </button>

              {/* Secondary Expert Call Button */}
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-blue-950 border border-slate-300 font-bold text-base px-7 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 shadow-sm hover:border-blue-900/50 hover:shadow-md"
              >
                <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center border border-blue-200">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="border-b border-dotted border-slate-400">Talk to an Expert</span>
              </a>
            </div>

            {/* Rating & Social Proof Section */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 border-t border-slate-200/80">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="font-extrabold text-slate-900 text-base ml-1.5">4.9</span>
              </div>

              <div className="text-xs text-slate-600 font-medium">
                Trusted by <strong className="text-blue-950 font-black">500+ sellers</strong> across India
              </div>
            </div>

            {/* Marketplaces Pill Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {["Meesho Preferred", "Amazon SPN Network", "Flipkart Preferred Partner"].map((badge, idx) => (
                <span 
                  key={idx} 
                  className="bg-white text-slate-800 text-[11px] font-bold px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs flex items-center gap-1.5"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-blue-700" />
                  {badge}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Floating Hero Visual Container with Animated Gradient Shadow Aura */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Floating Wrapper */}
            <div className="relative mx-auto max-w-md lg:max-w-none group animate-hero-float">
              
              {/* Continuous Breathing Animated Gradient Shadow Aura behind Hero Card */}
              <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-600 opacity-70 animate-aura-glow pointer-events-none"></div>

              {/* Outer Card Shell */}
              <div className="relative bg-gradient-to-tr from-white via-blue-50/60 to-white border-2 border-blue-200/90 rounded-3xl p-3 shadow-2xl overflow-hidden backdrop-blur-md">
                
                {/* Hero Image from Public Folder */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
                  <img 
                    src="/hero_section_image.png" 
                    alt="Novasphere E-Commerce Platform Growth" 
                    className="w-full h-auto max-h-[500px] object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-103"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent opacity-70"></div>
                </div>

                {/* Floating Metric Card 1 (Top Left) */}
                <div className="absolute top-6 left-2 sm:-left-4 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-2xl flex items-center gap-3 animate-badge-float">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-slate-950">{COMPANY_INFO.stats.salesGrowth}</div>
                    <div className="text-[10px] font-bold text-slate-500">Avg Sales Growth</div>
                  </div>
                </div>

                {/* Floating Metric Card 2 (Middle Right) */}
                <div className="absolute top-1/2 -right-2 sm:-right-6 -translate-y-1/2 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3.5 shadow-2xl flex items-center gap-3 animate-badge-float" style={{ animationDelay: '1.5s' }}>
                  <div className="w-9 h-9 rounded-xl bg-blue-900 text-white flex items-center justify-center shadow-md shrink-0">
                    <Sparkles className="w-5 h-5 text-sky-300" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-slate-950">{COMPANY_INFO.stats.sellersOnboarded}</div>
                    <div className="text-[10px] font-bold text-slate-500">Active Sellers</div>
                  </div>
                </div>

                {/* Bottom Overlay Pill: Marketplaces Banner */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-blue-950/95 text-white backdrop-blur-md px-5 py-2.5 rounded-full border border-blue-700/80 shadow-2xl flex items-center gap-3 whitespace-nowrap">
                  <div className="flex items-center gap-1.5 font-bold text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="text-sky-300">Meesho</span>
                    <span>•</span>
                    <span className="text-amber-400">Amazon</span>
                    <span>•</span>
                    <span className="text-yellow-300">Flipkart</span>
                  </div>
                  <span className="text-[10px] font-extrabold bg-blue-800 text-white px-2 py-0.5 rounded-full border border-blue-600">
                    3 Core Platforms
                  </span>
                </div>

              </div>

            </div>

            {/* Right Side Floating Quick Icon Panel (WhatsApp, Phone, Email) */}
            <div className="hidden lg:flex flex-col gap-3 absolute -right-12 top-1/3 z-30">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-115"
                title="WhatsApp Us"
              >
                <MessageCircle className="w-5 h-5 fill-white stroke-emerald-500" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="w-10 h-10 rounded-full bg-blue-900 hover:bg-blue-800 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-115"
                title="Call Us"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-115"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
