import React from 'react';
import { 
  Award, Layers, BarChart3, Megaphone, 
  Sparkles, ArrowRight, CheckCircle2, ShieldCheck, 
  Users, Globe, Heart, Lightbulb, Target
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';

export default function AboutUs({ onOpenAudit, onNavigatePortfolio }) {
  const whatWeDoItems = [
    {
      title: "Marketplace Growth",
      desc: "Expand your presence across leading marketplaces through strategic account management, catalog optimization, advertising support, and performance monitoring.",
      icon: Layers,
      color: "bg-blue-50 text-blue-900"
    },
    {
      title: "Website Development",
      desc: "Build fast, responsive, and conversion-focused websites designed to strengthen your digital presence and improve customer experience.",
      icon: Globe,
      color: "bg-sky-50 text-sky-900"
    },
    {
      title: "Digital Marketing",
      desc: "Generate awareness, traffic, and leads through performance-driven marketing strategies tailored to your business objectives.",
      icon: BarChart3,
      color: "bg-indigo-50 text-indigo-900"
    },
    {
      title: "Compliance & Business Support",
      desc: "Simplify business operations through registration, compliance, accounting, and support services that allow you to focus on growth.",
      icon: ShieldCheck,
      color: "bg-slate-100 text-slate-900"
    }
  ];

  const coreValues = [
    { title: "Integrity", desc: "Honesty and total transparency in all seller account strategies & reporting.", icon: ShieldCheck },
    { title: "Excellence", desc: "Setting the highest standards in cataloging, PPC management & ACOS reduction.", icon: Award },
    { title: "Innovation", desc: "Pioneering quick commerce onboarding for Blinkit, Zepto & modern tech stacks.", icon: Lightbulb },
    { title: "Collaboration", desc: "Working as a seamless extension of your internal business team.", icon: Users },
    { title: "Growth", desc: "Unlocking sustainable, long-term recurring revenue for every client brand.", icon: Target }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      
      {/* Top Header Banner */}
      <section className="py-16 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-950 text-sky-300 border border-blue-800/80 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            ABOUT NOVASPHERE INNOVATIONS
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Your eCommerce Growth Partner
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal">
            Helping brands grow across marketplaces, websites, and digital channels through strategy, execution, and measurable results.
          </p>

          <div className="pt-2">
            <button
              onClick={onNavigatePortfolio}
              className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs px-6 py-3 rounded-xl transition-all shadow border border-blue-400/30"
            >
              Explore Our Portfolio &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                  alt="Who We Are" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 z-20 bg-slate-950 text-white p-5 rounded-2xl border border-slate-800 shadow-2xl max-w-xs">
                <div className="text-xs text-sky-300 font-extrabold uppercase">8+ Years Experience</div>
                <div className="text-xs text-slate-300 mt-0.5">Managing 1000+ Active Seller Accounts Across India</div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-black text-blue-900 uppercase tracking-widest flex items-center gap-2">
                <span className="w-6 h-[2px] bg-blue-900"></span>
                WHO WE ARE
              </div>

              <h2 className="text-3xl font-extrabold text-slate-950">
                Building Scalable Digital Growth Frameworks
              </h2>

              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>{COMPANY_INFO.name}</strong> is an eCommerce growth and digital commerce company focused on helping businesses establish, optimize, and scale their online presence.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                We understand that success in today's competitive market requires more than just selling products online. It requires the right strategy, technology, marketplace expertise, customer experience, and continuous optimization.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Our team works closely with businesses to create scalable growth frameworks that help brands expand their reach, improve operational efficiency, and achieve sustainable long-term growth.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">Our Mission & Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 border border-blue-200 flex items-center justify-center font-bold">
                🎯
              </div>
              <h3 className="text-xl font-extrabold text-slate-950">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To build scalable growth systems that help modern brands succeed in digital commerce. We strive to be a trusted growth partner by combining marketplace expertise, website development, digital marketing, and business support solutions that drive visibility, sales, customer engagement, and long-term business success.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 border border-blue-200 flex items-center justify-center font-bold">
                👁️
              </div>
              <h3 className="text-xl font-extrabold text-slate-950">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To become one of India's most trusted eCommerce growth partners by helping businesses unlock their full potential across marketplaces, websites, and digital channels. We envision a future where businesses of every size have access to the expertise, technology, and growth strategies needed to compete, scale, and thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Grid */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="text-xs font-black text-blue-900 uppercase tracking-widest">WHAT WE DO</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">End-to-End eCommerce Capabilities</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDoItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3">
                  <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center border border-slate-200`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-950">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 text-center space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center mx-auto border border-blue-200">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-950">{val.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-snug">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Message Quote Section */}
      <section className="py-16 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">BUILDING MORE THAN A COMPANY</span>
          
          <h2 className="text-2xl sm:text-3xl font-black text-white">Arvind Ajmera — Founder & Director</h2>

          <p className="text-xs text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Novasphere Innovations Private Limited was founded in 2018 with a simple but powerful belief: Every business deserves access to the expertise, systems, and strategic support required to grow with confidence.
          </p>

          <blockquote className="text-lg sm:text-xl font-bold italic text-sky-300 max-w-3xl mx-auto">
            "Growth is not a destination. It is a continuous process of learning, improving, and creating value."
          </blockquote>
        </div>
      </section>

      {/* Let's Grow Together CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold text-slate-950">Let's Grow Together</h2>
          <p className="text-sm text-slate-600">
            Whether you're launching a new brand, expanding across marketplaces, building an eCommerce website, or looking to accelerate digital growth, we are here to help.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={onOpenAudit}
              className="bg-slate-950 text-white font-bold text-xs px-6 py-3 rounded-xl hover:bg-blue-900 transition-colors shadow"
            >
              Contact Us & Book Free Audit
            </button>
            <button
              onClick={onNavigatePortfolio}
              className="bg-slate-100 text-slate-900 border border-slate-300 font-bold text-xs px-6 py-3 rounded-xl hover:bg-slate-200 transition-colors"
            >
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
