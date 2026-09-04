import React from 'react';
import { Phone, Mail, Clock, MapPin, Sparkles, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';

export default function AnnouncementBar({ onOpenAudit }) {
  return (
    <div className="bg-blue-950 text-slate-200 text-xs border-b border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between py-2.5 gap-y-2 gap-x-4">
          
          {/* Contact Details */}
          <div className="flex flex-wrap items-center gap-5 text-slate-200">
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>

            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Call Us: <strong className="text-white font-bold">{COMPANY_INFO.phone}</strong></span>
            </a>

            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{COMPANY_INFO.workingHours}</span>
            </div>

            <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>{COMPANY_INFO.cityHQ}</span>
            </div>
          </div>

          {/* Quick Announcement CTA */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 bg-blue-900/80 text-sky-300 px-3 py-0.5 rounded-full border border-blue-700/60 text-[11px] font-semibold">
              <Sparkles className="w-3 h-3 text-sky-400 animate-pulse" />
              {COMPANY_INFO.stats.salesGrowth} Avg Sales Growth Guarantee
            </span>

            <button 
              onClick={onOpenAudit}
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-3.5 py-1 rounded-full text-xs transition-all shadow-sm shadow-blue-600/30"
            >
              Book Free Store Audit
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
