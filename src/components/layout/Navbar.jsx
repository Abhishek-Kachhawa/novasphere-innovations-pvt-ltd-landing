import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, Phone, ArrowUpRight, 
  ShoppingBag, Zap, TrendingUp, Code, ShieldCheck
} from 'lucide-react';
import Logo from '../common/Logo';
import { SERVICES_DATA } from '../../data/servicesData';
import { COMPANY_INFO } from '../../data/companyInfo';

export default function Navbar({ activeTab, setActiveTab, onOpenAudit, onSelectService }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'about', label: 'About Us' },
    { id: 'portfolio', label: 'Portfolio & Brands' },
    { id: 'blog', label: 'Blog' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const categoryGroups = [
    {
      title: "Marketplace Account Management",
      icon: ShoppingBag,
      color: "text-blue-600 bg-blue-50",
      items: SERVICES_DATA.filter(s => s.category === "marketplace")
    },
    {
      title: "Quick Commerce & Onboarding",
      icon: Zap,
      color: "text-sky-600 bg-sky-50",
      items: SERVICES_DATA.filter(s => s.category === "onboarding")
    },
    {
      title: "Digital Marketing & Performance PPC",
      icon: TrendingUp,
      color: "text-indigo-600 bg-indigo-50",
      items: SERVICES_DATA.filter(s => s.category === "marketing")
    },
    {
      title: "Web & Store Development",
      icon: Code,
      color: "text-slate-700 bg-slate-100",
      items: SERVICES_DATA.filter(s => s.category === "webdev" || s.category === "cataloging")
    }
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200' 
        : 'bg-white py-4 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            className="focus:outline-none"
          >
            <Logo variant="dark" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.id} 
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick('services')}
                      className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-bold rounded-xl transition-colors ${
                        activeTab === 'services' || servicesDropdownOpen
                          ? 'text-blue-700 bg-blue-50'
                          : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
                      }`}
                    >
                      Services
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-blue-700' : ''}`} />
                    </button>

                    {/* Mega Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[880px] bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 grid grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                        {categoryGroups.map((cat, idx) => {
                          const IconComp = cat.icon;
                          return (
                            <div key={idx} className="space-y-3">
                              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                                <div className={`p-1.5 rounded-lg ${cat.color}`}>
                                  <IconComp className="w-4 h-4" />
                                </div>
                                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                                  {cat.title}
                                </h4>
                              </div>
                              <ul className="space-y-1">
                                {cat.items.map((item) => (
                                  <li key={item.id}>
                                    <button
                                      onClick={() => {
                                        onSelectService(item);
                                        setServicesDropdownOpen(false);
                                      }}
                                      className="w-full text-left flex items-start gap-2.5 p-2 rounded-xl hover:bg-blue-50/60 transition-colors group/item"
                                    >
                                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 group-hover/item:bg-blue-600 transition-colors" />
                                      <div>
                                        <div className="text-xs font-bold text-slate-800 group-hover/item:text-blue-700 flex items-center gap-1">
                                          {item.title}
                                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity text-blue-600" />
                                        </div>
                                        <div className="text-[11px] text-slate-500 line-clamp-1">
                                          {item.subtitle}
                                        </div>
                                      </div>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                        
                        <div className="col-span-2 bg-slate-950 text-white rounded-2xl p-4 flex items-center justify-between mt-2 border border-slate-800">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
                              <ShieldCheck className="w-5 h-5 text-sky-400" />
                            </div>
                            <div>
                              <div className="text-xs font-extrabold">Need a Custom E-Commerce Growth Strategy?</div>
                              <div className="text-[11px] text-slate-300">Talk directly with our Jaipur E-Commerce Growth Consultants.</div>
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              onOpenAudit();
                              setServicesDropdownOpen(false);
                            }}
                            className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors shadow-sm"
                          >
                            Book Free Strategy Session
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 text-sm font-bold rounded-xl transition-colors ${
                    activeTab === link.id
                      ? 'text-blue-700 bg-blue-50'
                      : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="hidden lg:flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-blue-700 bg-slate-100 hover:bg-slate-200/80 px-3.5 py-2.5 rounded-xl transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Talk to Expert</span>
            </a>

            <button
              onClick={onOpenAudit}
              className="bg-slate-950 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-slate-950/20 transition-all flex items-center gap-2 group"
            >
              <span>Book Free Audit</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-3 text-sm font-bold rounded-xl flex items-center justify-between ${
                  activeTab === link.id ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                onOpenAudit();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl shadow-md text-sm text-center block"
            >
              Book Free Store Audit Now
            </button>
            
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full bg-slate-100 text-slate-800 font-bold py-3 rounded-xl text-sm text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              Call Toll Free: {COMPANY_INFO.tollFree}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
