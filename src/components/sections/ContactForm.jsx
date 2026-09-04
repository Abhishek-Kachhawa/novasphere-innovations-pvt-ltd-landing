import React, { useState } from 'react';
import {
  Mail, Phone, MapPin, Send, MessageCircle,
  CheckCircle2, ShieldCheck, Loader2, AlertCircle
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { COMPANY_INFO } from '../../data/companyInfo';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    service: 'Meesho Store Management',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      service: formData.service,
      message: formData.message || 'No additional message provided.'
    };

    emailjs.send(
      'service_t09gnfe',
      'template_pbc3m19',
      templateParams,
      'ptKj_fClzEjfF30I0'
    )
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setSubmitted(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setErrorMessage('Failed to send inquiry email. Please try again or connect via WhatsApp.');
        setLoading(false);
      });
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Novasphere Team, my name is ${formData.firstName || 'Seller'} and I'm looking for ${formData.service}. Please contact me.`
  );
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Column Info */}
          <div className="lg:col-span-5 space-y-6">

            <div className="text-xs font-black text-blue-900 uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-[2px] bg-blue-900"></span>
              CONTACT US
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-slate-950">
              Get in Touch for Support & Queries
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              We would love to hear from you! Whether you need Meesho, Amazon, or Flipkart account management, catalog audit, or ad optimization, our team is here to help.
            </p>

            {/* Core Advantages */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-slate-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                <span>Specialized in Meesho, Amazon & Flipkart Growth</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                <span>Customized Seller Account Growth Solutions</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                <span>Long-Term High-ROI Partnership</span>
              </div>
            </div>

            {/* Quick Contact Info Stack */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4 shadow-sm">

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 text-xs text-slate-800 hover:text-blue-900 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 border border-blue-200">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">Email Us</div>
                  <div className="font-bold">{COMPANY_INFO.email}</div>
                </div>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 text-xs text-slate-800 hover:text-blue-900 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 border border-blue-200">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">Phone Support</div>
                  <div className="font-bold">{COMPANY_INFO.phone}</div>
                </div>
              </a>

              <div className="flex items-start gap-3 text-xs text-slate-800 pt-2 border-t border-slate-200">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 border border-blue-200">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">Indore Address</div>
                  <div className="text-[11px] leading-snug">{COMPANY_INFO.address}</div>
                </div>
              </div>

              {/* Direct Quick Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 text-slate-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mx-auto border border-blue-200">
                    <CheckCircle2 className="w-10 h-10 text-blue-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950">Message Sent Successfully!</h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you <strong>{formData.firstName}</strong>. We have received your inquiry for <strong>{formData.service}</strong> via EmailJS. Our senior consultant will respond to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        city: '',
                        service: 'Meesho Store Management',
                        message: ''
                      });
                    }}
                    className="bg-blue-900 text-white font-bold text-xs px-6 py-2.5 rounded-xl hover:bg-blue-800 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-200 pb-3">
                    <h3 className="text-xl font-extrabold text-slate-950">Send Us A Message</h3>
                    <p className="text-xs text-slate-500">Fill out your details to receive custom e-commerce service pricing & advice.</p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Mahendra"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sharma"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="info@novasphereinnovation.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 92019 47498"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Indore"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Select Service *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                      >
                        <option value="Meesho Store Management">Meesho Store Management</option>
                        <option value="Amazon Account Management">Amazon Account Management</option>
                        <option value="Flipkart Account Management">Flipkart Account Management</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Message...
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Tell us about your brand, current sales, and what you'd like to achieve on Meesho, Amazon or Flipkart..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-900 hover:bg-blue-800 disabled:bg-blue-950/60 text-white font-extrabold text-sm py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-sky-300" />
                        <span>Sending Message via EmailJS...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                    We respect your privacy. Zero spam guarantee.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
