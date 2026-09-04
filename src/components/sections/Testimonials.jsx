import React from 'react';
import { TESTIMONIALS } from '../../data/testimonialsData';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-white text-slate-900 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-black text-blue-900 uppercase tracking-widest">
            <span className="w-6 h-[2px] bg-blue-900"></span>
            TESTIMONIALS
            <span className="w-6 h-[2px] bg-blue-900"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            What Our Clients Say About Us
          </h2>
          <p className="text-base text-slate-600">
            Real feedback from 500+ seller accounts across Meesho, Amazon & Flipkart.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-1">5.0</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-900 text-white font-extrabold text-sm flex items-center justify-center">
                    {item.initial}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-950">{item.name}</h4>
                    <p className="text-[10px] text-slate-500">{item.role}</p>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-blue-900 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                  {item.source}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
