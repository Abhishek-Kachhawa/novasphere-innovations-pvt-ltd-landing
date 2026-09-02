import React, { useState } from 'react';
import { Calendar, User, Search, ArrowRight } from 'lucide-react';

export default function BlogView({ onOpenAudit }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogs = [
    {
      id: 1,
      title: "eCommerce Account Management: What Does an Account Manager Actually Do?",
      author: "Arvind Ajmera",
      date: "August 31, 2026",
      category: "eCommerce",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=600&q=80",
      excerpt: "Comprehensive breakdown of how an eCommerce Account Manager drives marketplace sales, listing optimization, PPC bidding, and account health compliance."
    },
    {
      id: 2,
      title: "How to Sell on AJIO: Complete Seller Registration and Account Setup Guide",
      author: "Arvind Ajmera",
      date: "August 22, 2026",
      category: "Ajio",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
      excerpt: "Step-by-step onboarding guide for fashion brands wanting to list products on AJIO B2B and B2C portals in 2026."
    },
    {
      id: 3,
      title: "How to Sell on Myntra: Seller Onboarding Guide 2026",
      author: "Arvind Ajmera",
      date: "August 11, 2026",
      category: "Myntra",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=600&q=80",
      excerpt: "Everything you need to know about passing Myntra style guide verification, catalog approvals, and listing management."
    },
    {
      id: 4,
      title: "Top 20 Best-Selling Products on eCommerce Marketplaces During Rakhi in India (2026 Guide)",
      author: "Arvind Ajmera",
      date: "August 04, 2026",
      category: "Sell Online",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
      excerpt: "Key inventory picks and festive promotion strategies for Indian marketplace sellers preparing for festival season spikes."
    },
    {
      id: 5,
      title: "10 Amazon Selling Mistakes That Reduce Sales and Profits",
      author: "Arvind Ajmera",
      date: "July 23, 2026",
      category: "Amazon",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=600&q=80",
      excerpt: "Avoid stockouts, improper PPC match types, bad A+ content images, and suppressed listings to protect your margins."
    },
    {
      id: 6,
      title: "Blinkit Seller Onboarding Guide (2026): How to Sell on Blinkit Successfully",
      author: "Arvind Ajmera",
      date: "July 10, 2026",
      category: "Blinkit Seller",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=600&q=80",
      excerpt: "Hyper-local dark store mapping, instant catalog uploads, and merchant compliance guidelines for quick commerce."
    }
  ];

  const categories = ['All', 'eCommerce', 'Amazon', 'Ajio', 'Myntra', 'Blinkit Seller', 'Sell Online'];

  const filteredBlogs = blogs.filter(b => {
    const matchesCategory = selectedCategory === 'All' || b.category === selectedCategory;
    const matchesSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase()) || b.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      
      {/* Header Banner */}
      <section className="py-16 bg-slate-950 text-white border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="text-xs font-black text-sky-400 uppercase tracking-widest">
            BLOGS & MARKETPLACE INSIGHTS
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Explore Diverse Technologies & Growth Insights
          </h1>

          <p className="text-sm sm:text-base text-slate-300">
            Stay ahead with the latest tech stacks, marketplace algorithms, and global e-commerce insights for continuous innovation.
          </p>
        </div>
      </section>

      {/* Search & Category Filter Bar */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Select Pill Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-900 text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Blog Ecommerce..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-4 py-2 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-blue-900 focus:outline-none shadow-sm"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-12 text-slate-500 font-semibold text-sm">
              No blog articles found matching your search. Try another keyword.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((b) => (
                <div 
                  key={b.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img src={b.image} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <span className="absolute top-3 left-3 bg-slate-950 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                        {b.category}
                      </span>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                        <span className="flex items-center gap-1 font-bold text-blue-900">
                          <User className="w-3.5 h-3.5" />
                          Published By: {b.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {b.date}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-950 group-hover:text-blue-900 transition-colors leading-snug">
                        {b.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {b.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={onOpenAudit}
                      className="text-xs font-extrabold text-blue-900 hover:text-blue-700 flex items-center gap-1.5"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
