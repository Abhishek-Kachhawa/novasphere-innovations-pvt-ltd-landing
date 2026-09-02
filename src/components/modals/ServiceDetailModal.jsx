import React from 'react';
import { X, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';

export default function ServiceDetailModal({ service, isOpen, onClose, onOpenAudit }) {
  if (!isOpen || !service) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi Novasphere Team, I want to inquire about ${service.title} service for my business.`
  );
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-slate-900 text-white rounded-3xl shadow-2xl border border-slate-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner header image */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-950">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent flex flex-col justify-end p-6 text-white">
            <span className="inline-block bg-blue-600/90 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit mb-2 border border-blue-400/30">
              {service.badge || "Premium Solution"}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">{service.title}</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">{service.subtitle}</p>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-slate-200 p-2 rounded-full bg-slate-950/80 border border-slate-800 backdrop-blur transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 space-y-6">
          {/* Growth Stat Badge */}
          <div className="flex items-center justify-between p-4 bg-slate-950 rounded-2xl border border-slate-800">
            <div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Average Client Impact</div>
              <div className="text-xl font-black text-sky-400">{service.growthStat}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Target Platforms</div>
              <div className="text-xs font-semibold text-slate-200">
                {service.targetPlatforms ? service.targetPlatforms.join(', ') : 'All E-Commerce Platforms'}
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-sky-300 uppercase tracking-wider mb-2">
              Service Overview
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Key Deliverables & Features */}
          <div>
            <h4 className="text-sm font-bold text-sky-300 uppercase tracking-wider mb-3">
              What Novasphere Delivers:
            </h4>
            <ul className="grid sm:grid-cols-1 gap-2.5">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenAudit();
              }}
              className="w-full sm:w-1/2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm py-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 border border-blue-400/30"
            >
              <Sparkles className="w-4 h-4 text-sky-300" />
              <span>Book Free Service Audit</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm py-3 rounded-xl transition-colors flex items-center justify-center gap-2 border border-sky-400/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
