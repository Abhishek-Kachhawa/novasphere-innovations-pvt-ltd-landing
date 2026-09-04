import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, TrendingUp, ShieldCheck, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { COMPANY_INFO } from '../../data/companyInfo';

export default function AuditModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    marketplace: 'Meesho',
    monthlySales: '₹1 Lakh - ₹5 Lakhs',
    category: 'Fashion & Apparel',
    name: '',
    phone: '',
    email: '',
    city: '',
    storeLink: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const templateParams = {
      marketplace: formData.marketplace,
      monthlySales: formData.monthlySales,
      category: formData.category,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      storeLink: formData.storeLink || 'N/A'
    };

    emailjs.send(
      'service_t09gnfe',
      'template_nvmjifg',
      templateParams,
      'ptKj_fClzEjfF30I0'
    )
    .then((result) => {
      console.log('Audit Request Email successfully sent!', result.text);
      setSubmitted(true);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Failed to send audit request email:', error);
      setErrorMessage('Failed to send audit request. Please try again or connect via WhatsApp.');
      setLoading(false);
    });
  };

  const handleClose = () => {
    setSubmitted(false);
    setStep(1);
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-blue-950 text-white rounded-3xl shadow-2xl border border-blue-800 max-w-lg w-full overflow-hidden relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900/90 p-6 relative border-b border-blue-900">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-full bg-blue-900 border border-blue-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/80 text-sky-300 border border-blue-700/80 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            100% Free - No Credit Card Required
          </div>

          <h3 className="text-xl font-extrabold tracking-tight text-white">
            Get Your Free E-Commerce Audit
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Let Novasphere's growth team audit your Meesho, Amazon, or Flipkart listings & ROAS.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 bg-blue-600/20 text-sky-400 rounded-full flex items-center justify-center mx-auto border border-blue-500/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-white">Audit Request Received!</h4>
              <p className="text-sm text-slate-300 max-w-xs mx-auto">
                Thank you <strong>{formData.name}</strong>! We have received your audit request for your <strong>{formData.marketplace}</strong> store via EmailJS. Our specialist will call you at <strong>{formData.phone}</strong> shortly.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="bg-blue-600 text-white font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-blue-500 transition-colors"
                >
                  Close & Back to Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Step indicator */}
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-blue-900 pb-3">
                <span className="font-semibold text-sky-400">Step {step} of 2</span>
                <span className="flex items-center gap-1 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  100% Privately Confidential
                </span>
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-950/80 border border-red-800 text-red-200 text-xs rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {step === 1 ? (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Select Primary Marketplace
                    </label>
                    <select
                      value={formData.marketplace}
                      onChange={(e) => setFormData({ ...formData, marketplace: e.target.value })}
                      className="w-full bg-blue-900/60 border border-blue-700 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      <option value="Meesho">Meesho Store</option>
                      <option value="Amazon">Amazon India (SPN)</option>
                      <option value="Flipkart">Flipkart Seller Account</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Current Monthly Sales Volume
                    </label>
                    <select
                      value={formData.monthlySales}
                      onChange={(e) => setFormData({ ...formData, monthlySales: e.target.value })}
                      className="w-full bg-blue-900/60 border border-blue-700 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
                      className="w-full bg-blue-900/60 border border-blue-700 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
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

                  <div className="bg-blue-900/40 border border-blue-800 rounded-xl p-3 flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-sky-400 shrink-0" />
                    <div className="text-xs text-slate-300">
                      Based on your selection, sellers in <strong>{formData.category}</strong> usually see <strong>+100% to +150% sales increase</strong> within 90 days of store optimization.
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
                      className="w-full bg-blue-900/60 border border-blue-700 rounded-xl px-3.5 py-2 text-sm text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
                        className="w-full bg-blue-900/60 border border-blue-700 rounded-xl px-3.5 py-2 text-sm text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Your City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Indore / Delhi"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-blue-900/60 border border-blue-700 rounded-xl px-3.5 py-2 text-sm text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
                      className="w-full bg-blue-900/60 border border-blue-700 rounded-xl px-3.5 py-2 text-sm text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Store Link / Brand Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. meesho.com/supplier/yourbrand"
                      value={formData.storeLink}
                      onChange={(e) => setFormData({ ...formData, storeLink: e.target.value })}
                      className="w-full bg-blue-900/60 border border-blue-700 rounded-xl px-3.5 py-2 text-sm text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      disabled={loading}
                      onClick={() => setStep(1)}
                      className="w-1/3 bg-blue-900 text-slate-300 border border-blue-700 font-semibold text-xs py-3 rounded-xl hover:bg-blue-800 transition-colors"
                    >
                      &larr; Back
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-2/3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold text-xs py-3 rounded-xl shadow-lg transition-colors border border-blue-400/30 flex items-center justify-center gap-1.5"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin text-sky-300" />
                          <span>Sending Audit...</span>
                        </>
                      ) : (
                        <span>Submit Audit Request</span>
                      )}
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
