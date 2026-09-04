import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, Phone, Mail, ArrowUp, Sparkles, X 
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';

export default function StickyActions({ onOpenAudit }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    "Hi Novasphere Team! 👋 I saw your website and I'd like to scale my seller account sales on Meesho, Amazon & Flipkart."
  );
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Floating CTA Banner Tooltip */}
      {tooltipVisible && (
        <div className="pointer-events-auto bg-blue-950 text-white rounded-2xl p-3.5 shadow-2xl border border-blue-800 max-w-xs flex items-start gap-3 relative animate-bounce">
          <button 
            onClick={() => setTooltipVisible(false)}
            className="absolute top-1.5 right-1.5 text-slate-400 hover:text-white p-1 rounded-full"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="w-8 h-8 rounded-xl bg-blue-600/30 text-sky-300 flex items-center justify-center shrink-0 mt-0.5 border border-blue-500/30">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-sky-300">Claim Free Store Audit Report!</div>
            <div className="text-[11px] text-slate-300 leading-tight mt-0.5">
              Boost your Meesho, Amazon & Flipkart sales by up to 150%.
            </div>
            <button
              onClick={() => {
                onOpenAudit();
                setTooltipVisible(false);
              }}
              className="mt-2 text-[11px] font-extrabold text-white bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded-lg transition-colors inline-flex items-center gap-1 shadow-sm"
            >
              Get Audit Now &rarr;
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button Cluster */}
      <div className="pointer-events-auto flex flex-col gap-2.5 items-end">
        
        {/* Free Audit Floating Pill */}
        <button
          onClick={onOpenAudit}
          className="hidden sm:flex items-center gap-2 bg-blue-900 text-sky-200 border border-blue-700/80 font-extrabold text-xs px-4 py-2.5 rounded-full shadow-xl shadow-blue-900/40 hover:bg-blue-800 transition-all hover:scale-105"
        >
          <Sparkles className="w-4 h-4 text-sky-300 animate-spin" style={{ animationDuration: '4s' }} />
          <span>Book Free Store Audit</span>
        </button>

        {/* Quick Email Button */}
        <a
          href={`mailto:${COMPANY_INFO.email}?subject=E-Commerce Growth Inquiry`}
          className="w-11 h-11 rounded-full bg-blue-900 hover:bg-blue-700 text-sky-200 hover:text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all border border-blue-700 group relative"
          title="Email Us"
        >
          <Mail className="w-5 h-5" />
          <span className="absolute right-14 bg-blue-950 text-white text-[11px] font-medium px-2 py-1 rounded shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-blue-800">
            Send Email
          </span>
        </a>

        {/* Direct Call Button */}
        <a
          href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
          className="w-11 h-11 rounded-full bg-blue-800 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all group relative border border-blue-600"
          title="Call Us Now"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-14 bg-blue-950 text-white text-[11px] font-medium px-2 py-1 rounded shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-blue-800">
            Call: {COMPANY_INFO.phone}
          </span>
        </a>

        {/* WhatsApp Direct Chat Sticky Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-600/30 hover:scale-110 transition-all group relative"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white stroke-emerald-600" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-300 rounded-full border-2 border-blue-950 animate-ping"></span>
          <span className="absolute right-14 bg-blue-950 text-white text-[11px] font-medium px-2.5 py-1 rounded shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-blue-800">
            WhatsApp Live Chat
          </span>
        </a>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-blue-900 hover:bg-blue-800 text-white flex items-center justify-center shadow-md hover:scale-105 transition-all mt-1 border border-blue-700"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5 text-sky-300" />
          </button>
        )}

      </div>
    </div>
  );
}
