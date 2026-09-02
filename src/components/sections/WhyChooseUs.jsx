import React from 'react';
import { 
  Award, Target, TrendingUp, DollarSign, Users, ShieldCheck, Headphones 
} from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Specialization in e-commerce platforms",
      type: "Startups",
      desc: "Official Amazon SPN, Flipkart Partner & Shopify certified experts focused on marketplace sales.",
      icon: Award
    },
    {
      title: "Custom solution for all business needs",
      type: "Enterprises",
      desc: "Tailored strategic roadmaps whether you are a brand new startup, regional wholesaler or established D2C enterprise.",
      icon: Target
    },
    {
      title: "Proven track record of increasing sales",
      type: "Agency",
      desc: "+340% average sales growth in first 90 days with empirical GMV metric reporting.",
      icon: TrendingUp
    },
    {
      title: "Affordable and reliable services",
      type: "Agency",
      desc: "Transparent monthly retainers with zero hidden setup fees and high return on investment.",
      icon: DollarSign
    },
    {
      title: "1000+ successful seller accounts",
      type: "Agency",
      desc: "Proven track record managing fashion, electronics, home decor, beauty & FMCG across India.",
      icon: Users
    },
    {
      title: "All Platform-certified experts & fast support",
      type: "Agency",
      desc: "Dedicated Account Managers providing instant WhatsApp & direct phone assistance from 8 AM to 6 PM.",
      icon: Headphones
    }
  ];

  return (
    <section className="py-20 bg-white text-slate-900 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-black text-blue-900 uppercase tracking-widest">
            <span className="w-6 h-[2px] bg-blue-900"></span>
            WHY CHOOSE US
            <span className="w-6 h-[2px] bg-blue-900"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Why Choose Novasphere?
          </h2>
          <p className="text-base text-slate-600">
            We combine deep marketplace algorithms expertise with operational execution to deliver predictable, recurring GMV growth.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {reasons.map((r, idx) => {
            const IconComponent = r.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:bg-blue-50/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 border border-blue-200 flex items-center justify-center shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold bg-white text-blue-900 px-3 py-1 rounded-full border border-slate-200">
                      {r.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 mt-4">
                    {r.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {r.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] font-bold text-blue-900">
                  <ShieldCheck className="w-4 h-4 text-blue-700" />
                  <span>Verified Growth Partner</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
