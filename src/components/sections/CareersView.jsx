import React, { useState } from 'react';
import { 
  MapPin, ArrowRight, CheckCircle2, 
  ChevronDown, Mail, Phone, Sparkles 
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';

export default function CareersView() {
  const [openFaq, setOpenFaq] = useState(null);

  const jobs = [
    {
      id: "ecomm-mgr",
      title: "eCommerce Account Manager",
      type: "Full-Time",
      location: "📍 Indore, Madhya Pradesh",
      responsibilities: [
        "Manage seller accounts across Meesho, Amazon, and Flipkart",
        "Drive sales growth and account performance",
        "Optimize product listings and catalog management",
        "Coordinate with clients and internal teams",
        "Analyze marketplace performance and prepare reports"
      ],
      requirements: [
        "Experience in eCommerce marketplace management",
        "Strong analytical and communication skills",
        "Knowledge of seller central panels and marketplace operations"
      ]
    },
    {
      id: "gst-intern",
      title: "GST Intern",
      type: "Internship",
      location: "📍 Indore, Madhya Pradesh",
      responsibilities: [
        "Assist with GST filings and compliance",
        "Support accounting and taxation activities",
        "Maintain financial records and documentation",
        "Learn practical GST and taxation processes"
      ],
      requirements: [
        "Commerce background preferred",
        "Basic knowledge of GST and accounting principles",
        "Strong attention to detail"
      ]
    },
    {
      id: "digital-mktg-intern",
      title: "Digital Marketing Intern",
      type: "Internship",
      location: "📍 Indore, Madhya Pradesh",
      responsibilities: [
        "Assist with marketplace sponsored ads & marketing",
        "Support SEO and content marketing activities",
        "Help manage advertising campaigns on Meesho, Amazon, & Flipkart",
        "Research industry trends and competitors"
      ],
      requirements: [
        "Interest in Digital Marketing & E-Commerce",
        "Basic understanding of online platforms",
        "Strong communication skills"
      ]
    }
  ];

  const benefits = [
    "Hands-On Industry Experience",
    "Growth-Focused Work Environment",
    "Learning & Development Opportunities",
    "Exposure to Leading eCommerce Marketplaces (Meesho, Amazon, Flipkart)",
    "Collaborative Team Culture",
    "Career Advancement Opportunities"
  ];

  const hiringSteps = [
    { step: "Step 1", title: "Submit Your Application" },
    { step: "Step 2", title: "Initial Screening" },
    { step: "Step 3", title: "Interview Round" },
    { step: "Step 4", title: "Final Selection" },
    { step: "Step 5", title: "Welcome to Novasphere" }
  ];

  const careerFaqs = [
    { q: "Where is Novasphere Innovations located?", a: `Our corporate office is located at ${COMPANY_INFO.address}.` },
    { q: "Do you offer internships?", a: "Yes! We regularly offer internships in GST & Accounting, Digital Marketing, and eCommerce Operations with full learning & PPO opportunities." },
    { q: "How can I apply for a job?", a: `You can apply directly by emailing your CV to ${COMPANY_INFO.email} or calling our HR helpline at ${COMPANY_INFO.phone}.` },
    { q: "Does Novasphere hire freshers?", a: "Yes, we welcome passionate freshers for intern and entry-level marketplace executive roles." }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      
      {/* Header Banner */}
      <section className="py-16 bg-blue-950 text-white text-center border-b border-blue-900">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-900 text-sky-300 border border-blue-700/80 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            CAREERS AT NOVASPHERE INNOVATIONS
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Build Your Career in eCommerce & Digital Growth
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Join a team that's helping brands scale across leading marketplaces like Meesho, Amazon, and Flipkart. Whether you're an experienced professional or looking to start your career, we offer opportunities to learn, grow, and make a real impact.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-sky-300 pt-2">
            <span>📍 Indore, Madhya Pradesh</span>
            <span>•</span>
            <span>📈 Fast-Growing Company</span>
            <span>•</span>
            <span>🎓 Learning & Growth Opportunities</span>
          </div>
        </div>
      </section>

      {/* Why Join Novasphere Innovations */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">Why Join Us?</h2>
            <p className="text-sm text-slate-600">
              At Novasphere Innovations, we believe our people are our greatest asset. When you join us, you become part of a team focused on innovation, collaboration, and continuous learning.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3 text-xs font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">Current Openings</h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {jobs.map((job) => (
              <div key={job.id} className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
                  <div>
                    <span className="bg-blue-900 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      {job.type}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-950 mt-1">{job.title}</h3>
                    <div className="text-xs font-semibold text-slate-500">{job.location}</div>
                  </div>

                  <a
                    href={`mailto:${COMPANY_INFO.email}?subject=Application for ${job.title}`}
                    className="bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-colors shadow-sm"
                  >
                    Apply Now
                  </a>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <h4 className="font-extrabold text-slate-900 uppercase tracking-wider mb-2">Responsibilities:</h4>
                    <ul className="space-y-1 text-slate-600">
                      {job.responsibilities.map((r, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-blue-900 font-bold">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-slate-900 uppercase tracking-wider mb-2">Requirements:</h4>
                    <ul className="space-y-1 text-slate-600">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-blue-900 font-bold">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Hiring Process */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">Our Hiring Process</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {hiringSteps.map((s, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1">
                <span className="text-[10px] font-bold text-blue-900 uppercase">{s.step}</span>
                <h4 className="text-xs font-extrabold text-slate-950">{s.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career FAQs */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-950 text-center">Career FAQs</h2>
          
          <div className="space-y-3">
            {careerFaqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-4 flex items-center justify-between text-sm font-bold text-slate-950"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === idx ? 'rotate-180 text-blue-900' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 text-xs text-slate-600 border-t border-slate-200/60 pt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Grow Contact HR Banner */}
      <section className="py-16 bg-blue-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl font-extrabold">Ready to Grow with Us?</h2>
          <p className="text-sm text-slate-300">Join a company that's helping businesses succeed in the digital marketplace.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-extrabold pt-2">
            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 text-sky-300 hover:text-white">
              <Mail className="w-4 h-4" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-sky-300 hover:text-white">
              <Phone className="w-4 h-4" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
