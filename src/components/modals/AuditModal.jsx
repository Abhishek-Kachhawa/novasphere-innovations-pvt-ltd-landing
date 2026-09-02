import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';

export default function AuditModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    marketplace: 'Amazon',
    monthlySales: '₹1 Lakh - ₹5 Lakhs',
    category: 'Fashion & Apparel',
    name: '',
    phone: '',
    email: '',
    city: '',
    storeLink: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-slate-900 text-white rounded-3xl shadow-2xl border border-slate-800 max-w-lg w-full overflow-hidden relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-950 p-6 relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-full bg-slate-900 border border-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950 text-sky-300 border border-blue-800/80 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            100% Free - No Credit Card Required
          </div>

          <h3 className="text-xl font-extrabold tracking-tight text-white">
            Get Your Free E-Commerce Audit
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Let Novasphere's Jaipur growth team audit your listings, ROAS & inventory.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600/20 text-sky-400 rounded-full flex items-center justify-center mx-auto border border-blue-500/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-white">Audit Request Received!</h4>
              <p className="text-sm text-slate-300 max-w-xs mx-auto">
                Thank you <strong>{formData.name}</strong>! Our E-Commerce Account Specialist will review your <strong>{formData.marketplace}</strong> store and call you at <strong>{formData.phone}</strong> within 2 hours.
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="bg-blue-600 text-white font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-blue-500 transition-colors"
                >
                  Close & Back to Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Step indicator */}
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
                <span className="font-semibold text-sky-400">Step {step} of 2</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  Privately Confidential
                </span>
              </div>

              {step === 1 ? (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Select Primary Marketplace
                    </label>
                    <select
                      value={formData.marketplace}
                      onChange={(e) => setFormData({ ...formData, marketplace: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      <option value="Amazon">Amazon India (SPN)</option>
                      <option value="Flipkart">Flipkart</option>
                      <option value="Myntra">Myntra</option>
                      <option value="Blinkit">Blinkit Quick Commerce</option>
                      <option value="Zepto">Zepto</option>
                      <option value="Shopify">Shopify D2C Store</option>
                      <option value="Meesho">Meesho</option>
                      <option value="Other">Other Marketplace</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Current Monthly Sales Volume
                    </label>
                    <select
                      value={formData.monthlySales}
                      onChange={(e) => setFormData({ ...formData, monthlySales: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      <option value="Just Starting">Just Starting / Launching New Store</option>
                      <option value="Under ₹1 Lakh">Under ₹1 Lakh / Month</option>
                      <option value="₹1 Lakh - ₹5 Lakhs">₹1 Lakh - ₹5 Lakhs / Month</option>
                      <option value="₹5 Lakhs - ₹25 Lakhs">₹5 Lakhs - ₹25 Lakhs / Month</option>
                      <option value="₹25 Lakhs+">₹25 Lakhs+ Enterprise Scale</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Product Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      <option value="Fashion & Apparel">Fashion, Ethnic & Apparel</option>
                      <option value="Home & Kitchen">Home & Kitchen Products</option>
                      <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                      <option value="Mobile & Electronics">Mobile & Tech Accessories</option>
                      <option value="Fitness & Lifestyle">Fitness & Lifestyle</option>
                      <option value="Baby & Toys">Baby, Toys & Daily Essentials</option>
                      <option value="Food & Grocery">Food, Beverages & FMCG</option>
                    </select>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-sky-400 shrink-0" />
                    <div className="text-xs text-slate-300">
                      Based on your selection, sellers in <strong>{formData.category}</strong> usually see <strong>+240% to +340% sales increase</strong> within 90 days of store optimization.
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm py-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 border border-blue-400/30"
                  >
                    <span>Next: Enter Contact Info</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-3.5 animate-in fade-in">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mahendra Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 92019 47498"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Your City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jaipur / Delhi"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="info@yourcompany.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Store Link / Brand Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. amazon.in/shops/yourbrand"
                      value={formData.storeLink}
                      onChange={(e) => setFormData({ ...formData, storeLink: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 bg-slate-950 text-slate-300 border border-slate-800 font-semibold text-xs py-3 rounded-xl hover:bg-slate-800 transition-colors"
                    >
                      &larr; Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-3 rounded-xl shadow-lg transition-colors border border-blue-400/30"
                    >
                      Submit Audit Request
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
