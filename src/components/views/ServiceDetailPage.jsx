import React, { useState } from 'react';
import { 
  ArrowLeft, CheckCircle2, Star, ShieldCheck, Sparkles, 
  ArrowRight, Phone, MessageCircle, HelpCircle, ChevronDown 
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';
import { CASE_STUDIES } from '../../data/caseStudiesData';

export default function ServiceDetailPage({ service, onBack, onOpenAudit, onOpenCaseStudy }) {
  if (!service) return null;

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const whatsappMessage = encodeURIComponent(
    `Hi Novasphere Team, I am interested in ${service.title} service for my seller account.`
  );
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${whatsappMessage}`;

  const processSteps = [
    { num: "Step 1", title: "Initial Consultation & Account Audit", desc: "Deep-dive diagnostic of your current listings, ACOS, search rankings, and inventory health." },
    { num: "Step 2", title: "Custom Growth Strategy Development", desc: "Formulating marketplace keyword mapping, pricing elasticity, and promotional campaign calendars." },
    { num: "Step 3", title: "Catalog & Listing Implementation", desc: "Executing high-converting A+ content, SEO titles, bullet points, and variation matrices." },
    { num: "Step 4", title: "Ongoing Account & PPC Management", desc: "Daily bid optimization, Buy Box tracking, FBA restocking alerts, and order SLA monitoring." },
    { num: "Step 5", title: "Reporting & Performance Analytics", desc: "Transparent weekly and monthly GMV, ACOS, and return rate breakdown reports." },
    { num: "Step 6", title: "Active Issue Resolution & Health Shield", desc: "Direct resolution of suppressed listings, brand gating, and policy flags." }
  ];

  const whoNeedsList = [
    { title: "New Sellers", desc: "Businesses launching on marketplaces looking for smooth setup & zero policy errors." },
    { title: "Growing Businesses", desc: "Sellers experiencing sales plateaus wanting aggressive scaling & lower ad costs." },
    { title: "Established Brands", desc: "D2C brands seeking dedicated account management to free up internal bandwidth." },
    { title: "Sellers Facing Suspensions", desc: "Accounts struggling with suppressed listings, IP flags, or policy violations." }
  ];

  const serviceFaqs = [
    { q: `Can I manage my ${service.platform} seller account myself?`, a: `Yes, but managing sponsored ads, listing SEO, catalog hygiene, and policy updates takes 30+ hours weekly. Our dedicated account managers handle execution so you can focus on product sourcing.` },
    { q: `What is the cost associated with ${service.title}?`, a: `We offer flexible monthly retainers and performance-linked revenue share packages with zero hidden setup fees.` },
    { q: `Will I lose control over my seller account?`, a: `No! You maintain 100% owner access and admin rights. We operate as secondary user account managers.` },
    { q: `Can Novasphere help resolve suppressed listings or account suspensions?`, a: `Yes, our team specializes in catalog hygiene, appeal documentation, and restoring account health flags.` }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen animate-in fade-in duration-300">
      
      {/* Top Breadcrumb Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-900 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>&larr; Back to All Services</span>
          </button>
          
          <div className="text-xs text-slate-500 font-semibold">
            Services / <span className="text-slate-900">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section of Service */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 border border-blue-200 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-blue-700" />
                {service.badge || "OFFICIAL PLATFORM MANAGEMENT"}
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {service.subtitle} {service.description}
              </p>

              {/* Ratings Badges */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-1 text-xs font-bold text-slate-800 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>4.9/5.0 Google Reviews</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-slate-800 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
                  <ShieldCheck className="w-4 h-4 text-blue-700" />
                  <span>Certified Account Specialist</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button
                  onClick={onOpenAudit}
                  className="w-full sm:w-auto bg-slate-950 hover:bg-blue-900 text-white font-black text-sm px-8 py-4 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-sky-300" />
                  <span>Book Free {service.platform} Audit</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm px-7 py-4 rounded-2xl transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Consultant</span>
                </a>
              </div>
            </div>

            {/* Right Card Image */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-xl space-y-6">
                <div className="relative h-56 rounded-2xl overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <span className="absolute bottom-3 right-3 bg-blue-900 text-white font-black text-xs px-3 py-1 rounded-lg">
                    {service.growthStat}
                  </span>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-blue-900">
                    Target Platforms Supported
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(service.targetPlatforms || ["Amazon India", "Global Marketplaces"]).map((tp, idx) => (
                      <span key={idx} className="bg-white text-slate-800 text-xs font-bold px-3 py-1 rounded-lg border border-slate-200">
                        {tp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Deliverables Checklist Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              What Is Included In Our {service.title}?
            </h2>
            <p className="text-sm text-slate-600">
              Our service covers a wide range of operational, technical & marketing tasks to maximize your sales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feat, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-900 border border-blue-200 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{feat}</h4>
                  <p className="text-xs text-slate-500 mt-1">Full operational execution & tracking by Novasphere team.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Step Process Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="text-xs font-black text-blue-900 uppercase tracking-widest">HOW WE WORK</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Our 6-Step {service.platform} Management Process
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((p, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-blue-900 bg-white px-3 py-1 rounded-full border border-slate-200">
                    {p.num}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-950">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs This Service Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Who Needs {service.title}?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoNeedsList.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
                <h4 className="text-base font-bold text-slate-950">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Frequently Asked Questions About {service.title}
            </h2>
          </div>

          <div className="space-y-3">
            {serviceFaqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between text-sm font-bold text-slate-900"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaqIndex === idx ? 'rotate-180 text-blue-900' : ''}`} />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-600 border-t border-slate-200/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
