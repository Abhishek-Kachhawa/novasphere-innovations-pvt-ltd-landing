import React, { useState } from 'react';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import StickyActions from './components/layout/StickyActions';

// Home Sections
import Hero from './components/sections/Hero';
import GrowthStats from './components/sections/GrowthStats';
import AboutUs from './components/sections/AboutUs';
// import BrandMarquee from './components/sections/BrandMarquee'; // Commented out per request
import ServicesGrid from './components/sections/ServicesGrid';
import ProductListingHygiene from './components/sections/ProductListingHygiene';
import WhyChooseUs from './components/sections/WhyChooseUs';
import IndustryVerticals from './components/sections/IndustryVerticals';
import LocationAdvantage from './components/sections/LocationAdvantage';
// import CaseStudies from './components/sections/CaseStudies'; // Commented out per request
import Testimonials from './components/sections/Testimonials';
import FAQSection from './components/sections/FAQSection';
import ContactForm from './components/sections/ContactForm';

// Dedicated Full Page Views
// import PortfolioView from './components/sections/PortfolioView'; // Commented out per request
// import BlogView from './components/sections/BlogView'; // Commented out per request
import CareersView from './components/sections/CareersView';
import ServiceDetailPage from './components/views/ServiceDetailPage';
// import CaseStudyDetailPage from './components/views/CaseStudyDetailPage'; // Commented out per request

// Modals
import AuditModal from './components/modals/AuditModal';

import { SERVICES_DATA } from './data/servicesData';
import { CASE_STUDIES } from './data/caseStudiesData';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'about' | 'services' | 'service-detail' | 'careers' | 'contact'
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  
  const [selectedService, setSelectedService] = useState(SERVICES_DATA[0]);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(CASE_STUDIES[0]);

  // Handle service selection & navigate to dynamic service detail view
  const handleSelectService = (service) => {
    setSelectedService(service);
    setCurrentView('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle case study selection (kept for fallback)
  const handleSelectCaseStudy = (caseStudy) => {
    setSelectedCaseStudy(caseStudy);
    // setCurrentView('case-study-detail'); // Commented out
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (viewId) => {
    setCurrentView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-900 selection:text-white flex flex-col">
      
      {/* Announcement Top Bar */}
      <AnnouncementBar onOpenAudit={() => setAuditModalOpen(true)} />

      {/* Navigation Header */}
      <Navbar 
        activeTab={currentView} 
        setActiveTab={handleNavClick} 
        onOpenAudit={() => setAuditModalOpen(true)}
        onSelectService={handleSelectService}
      />

      {/* Main Content Router */}
      <main className="flex-1">

        {/* 1. DYNAMIC SERVICE DETAIL PAGE */}
        {currentView === 'service-detail' && (
          <ServiceDetailPage 
            service={selectedService}
            onBack={() => setCurrentView('services')}
            onOpenAudit={() => setAuditModalOpen(true)}
            onOpenCaseStudy={handleSelectCaseStudy}
          />
        )}

        {/* 2. DYNAMIC CASE STUDY DETAIL PAGE (COMMENTED OUT) */}
        {/*
        {currentView === 'case-study-detail' && (
          <CaseStudyDetailPage 
            caseStudy={selectedCaseStudy}
            onBack={() => setCurrentView('services')}
            onOpenAudit={() => setAuditModalOpen(true)}
          />
        )}
        */}

        {/* 3. DEDICATED ABOUT US PAGE */}
        {currentView === 'about' && (
          <AboutUs 
            onOpenAudit={() => setAuditModalOpen(true)} 
            onNavigatePortfolio={() => handleNavClick('contact')}
          />
        )}

        {/* 4. DEDICATED SERVICES PAGE */}
        {currentView === 'services' && (
          <div className="py-6">
            <ServicesGrid 
              onSelectService={handleSelectService} 
              onOpenAudit={() => setAuditModalOpen(true)}
            />
            <ProductListingHygiene onOpenAudit={() => setAuditModalOpen(true)} />
          </div>
        )}

        {/* 5. DEDICATED CASE STUDIES PAGE (COMMENTED OUT) */}
        {/*
        {currentView === 'case-studies' && (
          <div className="py-6">
            <CaseStudies 
              onOpenAudit={() => setAuditModalOpen(true)} 
              onSelectCaseStudy={handleSelectCaseStudy}
            />
          </div>
        )}
        */}

        {/* 6. DEDICATED PORTFOLIO PAGE (COMMENTED OUT) */}
        {/*
        {currentView === 'portfolio' && (
          <PortfolioView onOpenAudit={() => setAuditModalOpen(true)} />
        )}
        */}

        {/* 7. DEDICATED BLOG PAGE (COMMENTED OUT) */}
        {/*
        {currentView === 'blog' && (
          <BlogView onOpenAudit={() => setAuditModalOpen(true)} />
        )}
        */}

        {/* 8. DEDICATED CAREERS PAGE */}
        {currentView === 'careers' && (
          <CareersView />
        )}

        {/* 9. DEDICATED CONTACT US PAGE */}
        {currentView === 'contact' && (
          <div className="py-6">
            <ContactForm />
            <LocationAdvantage onOpenAudit={() => setAuditModalOpen(true)} />
          </div>
        )}

        {/* 10. MAIN HOMEPAGE FULL VIEW */}
        {currentView === 'home' && (
          <>
            <Hero 
              onOpenAudit={() => setAuditModalOpen(true)} 
              onScrollToServices={() => handleNavClick('services')}
            />

            <GrowthStats />

            <AboutUs 
              onOpenAudit={() => setAuditModalOpen(true)} 
              onNavigatePortfolio={() => handleNavClick('contact')}
            />

            {/* BrandMarquee section commented out as requested */}
            {/* <BrandMarquee /> */}

            <ServicesGrid 
              onSelectService={handleSelectService} 
              onOpenAudit={() => setAuditModalOpen(true)}
            />

            <ProductListingHygiene onOpenAudit={() => setAuditModalOpen(true)} />

            <WhyChooseUs />

            <IndustryVerticals onOpenAudit={() => setAuditModalOpen(true)} />

            <LocationAdvantage onOpenAudit={() => setAuditModalOpen(true)} />

            {/* Case Studies section commented out as requested */}
            {/*
            <CaseStudies 
              onOpenAudit={() => setAuditModalOpen(true)} 
              onSelectCaseStudy={handleSelectCaseStudy}
            />
            */}

            <Testimonials />

            <FAQSection />

            <ContactForm />
          </>
        )}

      </main>

      {/* Footer */}
      <Footer 
        setActiveTab={handleNavClick} 
        onOpenAudit={() => setAuditModalOpen(true)}
        onSelectService={handleSelectService}
      />

      {/* Sticky Floating Quick Actions Bar */}
      <StickyActions onOpenAudit={() => setAuditModalOpen(true)} />

      {/* Interactive Audit Modal */}
      <AuditModal 
        isOpen={auditModalOpen} 
        onClose={() => setAuditModalOpen(false)} 
      />

    </div>
  );
}
