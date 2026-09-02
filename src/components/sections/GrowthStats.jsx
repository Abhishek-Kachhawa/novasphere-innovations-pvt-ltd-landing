import React from 'react';
import { TrendingUp, Users, Store, DollarSign, Repeat } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';

export default function GrowthStats() {
  const statItems = [
    {
      label: "Avg Sales Growth",
      value: COMPANY_INFO.stats.salesGrowth,
      sub: "Proven Revenue Uplift",
      icon: TrendingUp
    },
    {
      label: "Active Sellers",
      value: COMPANY_INFO.stats.sellersOnboarded,
      sub: "Pan-India Accounts",
      icon: Users
    },
    {
      label: "Marketplaces Managed",
      value: COMPANY_INFO.stats.marketplaces,
      sub: "Amazon, Flipkart & More",
      icon: Store
    },
    {
      label: "GMV Managed",
      value: COMPANY_INFO.stats.gmvManaged,
      sub: "High Volume Scale",
      icon: DollarSign
    },
    {
      label: "Client Retention",
      value: COMPANY_INFO.stats.clientRetention,
      sub: "Long-term Partnerships",
      icon: Repeat
    }
  ];

  return (
    <section className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white text-slate-900 rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {statItems.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/50 transition-colors border border-slate-100 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 border border-blue-200 flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                <IconComponent className="w-6 h-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-950">
                {item.value}
              </div>
              <div className="text-xs font-bold text-blue-900 uppercase tracking-wide mt-1">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {item.sub}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
