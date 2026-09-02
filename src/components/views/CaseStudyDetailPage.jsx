import React from 'react';
import { 
  ArrowLeft, CheckCircle2, TrendingUp, Sparkles, 
  ArrowRight, ShieldCheck, DollarSign, Package, Layers 
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';

export default function CaseStudyDetailPage({ caseStudy, onBack, onOpenAudit }) {
  if (!caseStudy) return null;

  return (
    <div className="bg-white text-slate-900 min-h-screen animate-in fade-in duration-300">
      
      {/* Top Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-200 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-900 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>&larr; Back to Case Studies</span>
          </button>
          
          <div className="text-xs text-slate-500 font-semibold">
            Case Study / <span className="text-slate-900">{caseStudy.client}</span>
          </div>
        </div>
      </div>

      {/* Case Study Hero */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 border border-blue-200 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-700" />
              {caseStudy.marketplace || "AMAZON GROWTH CASE STUDY"}
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              {caseStudy.title}
            </h1>

            <p className="text-base text-slate-600 leading-relaxed">
              Driving measurable growth through strategic {caseStudy.marketplace || "marketplace"} management over a {caseStudy.duration || "12-Month"} engagement period.
            </p>
          </div>

          {/* Metric Counter Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {caseStudy.metrics.map((m, idx) => (
              <div key={idx} className="bg-slate-950 text-white p-6 rounded-3xl border border-slate-800 shadow-xl space-y-1">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{m.label}</div>
                <div className="text-2xl sm:text-3xl font-black text-sky-400">{m.value}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Overview & Snapshot Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Overview Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl font-extrabold text-slate-950">Client Overview</h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {caseStudy.overview}
              </p>

              {/* Business Objectives */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <h3 className="text-lg font-extrabold text-slate-950">Business Objectives</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {(caseStudy.objectives || ["Increase Product Visibility", "Improve Discoverability", "Enhance Customer Acquisition", "Strengthen Marketplace Presence"]).map((obj, idx) => (
                    <div key={idx} className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2.5 text-xs font-bold text-slate-900">
                      <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Project Snapshot Table */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-4">
                <h3 className="text-lg font-extrabold text-slate-950 border-b border-slate-100 pb-3">
                  Project Snapshot
                </h3>

                <div className="space-y-3">
                  {(caseStudy.snapshot || [
                    { label: "Client", value: caseStudy.client },
                    { label: "Industry", value: caseStudy.category },
                    { label: "Marketplace", value: caseStudy.marketplace },
                    { label: "Duration", value: caseStudy.duration }
                  ]).map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-slate-100 last:border-0">
                      <span className="font-semibold text-slate-500">{item.label}</span>
                      <span className="font-extrabold text-slate-900 text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Challenges & Solution Strategy */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Challenges Grid */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-950">Key Challenges Identified</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(caseStudy.challenges || []).map((ch, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-2">
                  <h4 className="text-base font-bold text-slate-950">{ch.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{ch.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Strategy Steps Grid */}
          <div className="space-y-6 pt-6 border-t border-slate-100">
            <h2 className="text-2xl font-extrabold text-slate-950">Our Growth Strategy Executed</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(caseStudy.strategySteps || []).map((st, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-900 font-bold text-xs flex items-center justify-center border border-blue-200 mb-2">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-slate-950">{st.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Business Impact Checklist */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Business Impact & Results Delivered
            </h2>
            <p className="text-sm text-slate-600">
              The engagement delivered measurable improvements across key marketplace performance metrics.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(caseStudy.businessImpact || []).map((imp, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3 text-xs font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                <span>{imp}</span>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-10 bg-slate-950 text-white rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800 shadow-2xl">
            <div>
              <h3 className="text-xl sm:text-2xl font-black">Looking to Scale Your Amazon / Marketplace Business?</h3>
              <p className="text-xs text-slate-300 mt-1">Whether launching a new line or improving ROI, Novasphere delivers measurable growth.</p>
            </div>
            <button
              onClick={onOpenAudit}
              className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs px-6 py-3.5 rounded-xl transition-colors shadow flex items-center gap-2"
            >
              <span>Book Free Strategy Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
