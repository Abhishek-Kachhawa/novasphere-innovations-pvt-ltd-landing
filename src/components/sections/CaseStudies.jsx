import React, { useState } from 'react';
import { CASE_STUDIES } from '../../data/caseStudiesData';
import { ArrowRight } from 'lucide-react';

export default function CaseStudies({ onOpenAudit, onSelectCaseStudy }) {
  const [selectedCase, setSelectedCase] = useState(CASE_STUDIES[0]);

  const handleCardClick = (cs) => {
    setSelectedCase(cs);
    if (onSelectCaseStudy) {
      onSelectCaseStudy(cs);
    }
  };

  return (
    <section id="case-studies" className="py-20 bg-slate-50 text-slate-900 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-black text-blue-900 uppercase tracking-widest">
            <span className="w-6 h-[2px] bg-blue-900"></span>
            CASE STUDY
            <span className="w-6 h-[2px] bg-blue-900"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Real Revenue Scale Built For Growing Brands
          </h2>
          <p className="text-base text-slate-600">
            See how our tailored listing optimization, PPC advertising & marketplace management transformed sales for real Indian sellers.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {CASE_STUDIES.map((cs) => (
            <div 
              key={cs.id}
              onClick={() => handleCardClick(cs)}
              className={`cursor-pointer rounded-3xl border transition-all duration-300 p-6 flex flex-col justify-between ${
                selectedCase?.id === cs.id
                  ? 'border-blue-900 bg-white shadow-xl ring-2 ring-blue-900/20'
                  : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-100">
                  <img src={cs.image} alt={cs.title} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-slate-950 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                    {cs.category}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-blue-900 font-bold">
                  {Array.isArray(cs.marketplaces) 
                    ? cs.marketplaces.join(' • ') 
                    : (cs.marketplace || 'Amazon India')}
                </div>

                <h3 className="text-lg font-bold text-slate-950 leading-snug">
                  {cs.title}
                </h3>

                {/* Key Metric Highlights */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                  {(cs.metrics || []).map((m, idx) => (
                    <div key={idx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div className="text-[10px] text-slate-500 font-semibold uppercase">{m.label}</div>
                      <div className="text-lg font-black text-blue-900">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 flex items-center justify-between text-xs font-bold text-blue-900">
                <span>View Full Case Study Details</span>
                <ArrowRight className="w-4 h-4 text-blue-900" />
              </div>
            </div>
          ))}
        </div>

        {/* Selected Case Study Highlight Box */}
        {selectedCase && (
          <div className="mt-12 bg-slate-950 text-white rounded-3xl p-8 border border-slate-800 shadow-2xl grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Featured Growth Breakdown: {selectedCase.client}
              </span>
              <h4 className="text-xl sm:text-2xl font-bold">{selectedCase.title}</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong>Challenge:</strong> {selectedCase.challenge || selectedCase.challenges?.[0]?.desc || 'Product visibility and discoverability optimization needed across competitive categories.'}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong>Novasphere Solution:</strong> {selectedCase.solution || selectedCase.strategySteps?.[0]?.desc || 'Executed strategic listing SEO, A+ content modules, and PPC ad bidding.'}
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col items-center justify-center space-y-3 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6 text-center">
              <div className="text-xs text-slate-400 font-semibold uppercase">Campaign Duration</div>
              <div className="text-2xl font-black text-sky-400">{selectedCase.duration || selectedCase.period || '12 Months'}</div>
              <button
                onClick={() => handleCardClick(selectedCase)}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs py-3 rounded-xl transition-colors shadow"
              >
                Read Complete Case Study Page &rarr;
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
