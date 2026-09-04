import React from 'react';
import Logo from '../common/Logo';
import { COMPANY_INFO } from '../../data/companyInfo';
import { 
  Phone, Mail, MapPin, ChevronRight, ShieldCheck 
} from 'lucide-react';

export default function Footer({ setActiveTab, onOpenAudit, onSelectService }) {
  const ecommServices = [
    "Meesho Account Management",
    "Amazon Account Management",
    "Flipkart Account Management",
    "Meesho Product Listing & Smart Ads",
    "Amazon A+ Content & PPC Bid Optimization",
    "Flipkart PLA Ads & Tier Scaling"
  ];

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    // { label: "Case Studies", id: "case-studies" }, // Commented out
    // { label: "Portfolio & Brands", id: "portfolio" }, // Commented out
    // { label: "Blog", id: "blog" }, // Commented out
    { label: "Careers", id: "careers" },
    { label: "Contact Us", id: "contact" }
  ];

  const servingCities = [
    "Indore"
  ];

  const handleLinkClick = (id) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-blue-950 text-slate-200 border-t border-blue-900">
      
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Col 1: Brand & About (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" />
            
            <p className="text-xs text-slate-300 leading-relaxed pt-2">
              <strong>{COMPANY_INFO.name}</strong> is India's leading e-commerce growth agency & platform service provider with {COMPANY_INFO.experienceYears} of experience. We assist sellers, D2C brands, and manufacturers in scaling their business across <strong>Meesho, Amazon, and Flipkart</strong>.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-200">
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} 
                className="flex items-center gap-2 hover:text-sky-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call Us: <strong className="text-white">{COMPANY_INFO.phone}</strong></span>
              </a>
              
              <a 
                href={`mailto:${COMPANY_INFO.email}`} 
                className="flex items-center gap-2 hover:text-sky-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-[11px]">{COMPANY_INFO.address}</span>
              </div>
            </div>

            <button
              onClick={onOpenAudit}
              className="mt-2 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow transition-all border border-blue-400/30"
            >
              Book Free Store Audit Report
            </button>
          </div>

          {/* Col 2: Core E-Commerce Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-blue-900 pb-2">
              E-Commerce Services
            </h4>
            <ul className="space-y-2 text-xs">
              {ecommServices.map((service, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick('services')}
                    className="flex items-center gap-1.5 hover:text-sky-300 transition-colors text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-sky-400 shrink-0" />
                    <span>{service}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Serving Cities & Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-blue-900 pb-2 mb-3">
                Ecommerce Services in Cities
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {servingCities.map((city, idx) => (
                  <span 
                    key={idx}
                    className="bg-blue-900/60 text-slate-200 hover:text-white text-[11px] px-2.5 py-1 rounded-md border border-blue-800"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-blue-900 pb-2 mb-2">
                Quick Links
              </h4>
              <ul className="grid grid-cols-2 gap-1.5 text-xs">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleLinkClick(link.id)}
                      className="hover:text-sky-300 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 4: Platform Badges (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-blue-900 pb-2">
              Certified Partners
            </h4>
            <div className="space-y-2 text-[11px]">
              {COMPANY_INFO.certifications.map((cert, idx) => (
                <div key={idx} className="bg-blue-900/50 p-2 rounded-lg border border-blue-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="text-slate-200 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Disclaimer Bar */}
      <div className="bg-blue-950/80 border-t border-blue-900/80 py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div>
            Copyright © 2020-2026 <strong>{COMPANY_INFO.name}</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} className="hover:text-white">
              Disclaimer
            </a>
            <span>•</span>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} className="hover:text-white">
              Terms & Conditions
            </a>
            <span>•</span>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} className="hover:text-white">
              Privacy Policy
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}
