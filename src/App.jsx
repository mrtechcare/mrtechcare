import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DiagnosticEstimator } from './components/DiagnosticEstimator';
import { VisualShowcase } from './components/VisualShowcase';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { QuotationsSection } from './components/QuotationsSection';
import { FeedbackSection } from './components/FeedbackSection';
import { RemoteSupportSection } from './components/RemoteSupportSection';
import { DoorstepSection } from './components/DoorstepSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { WebDevelopmentPage } from './components/WebDevelopmentPage';
import { AppDevelopmentPage } from './components/AppDevelopmentPage';
import { Footer } from './components/Footer';
import { QuickFloatingContact } from './components/QuickFloatingContact';
import { CustomerPortalModal } from './components/CustomerPortalModal';
import { Wrench, Tag, Globe2, UserCheck, ArrowRight, FileText, Star } from 'lucide-react';

const getInitialTab = () => {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (path.includes('web-dev') || hash.includes('web-dev') || path.includes('website-development')) return 'web-dev';
    if (path.includes('app-dev') || hash.includes('app-dev') || path.includes('app-development') || path.includes('mobile-app')) return 'app-dev';
    if (path.includes('service') || hash.includes('service')) return 'services';
    if (path.includes('pricing') || hash.includes('pricing')) return 'pricing';
    if (path.includes('quote') || hash.includes('quote') || path.includes('rfp')) return 'quotes';
    if (path.includes('coverage') || hash.includes('coverage')) return 'coverage';
    if (path.includes('gallery') || hash.includes('gallery')) return 'gallery';
    if (path.includes('feedback') || path.includes('review') || hash.includes('feedback') || hash.includes('review')) return 'feedback';
    if (path.includes('contact') || hash.includes('contact') || path.includes('about') || hash.includes('about')) return 'contact';
  }
  return 'overview';
};

export function AppContent() {
  const [activeTab, setActiveTab] = useState(getInitialTab);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const handleTabChange = (tabId, updateHistory = true) => {
    setActiveTab(tabId);
    if (updateHistory && typeof window !== 'undefined') {
      let targetPath = '/';
      if (tabId === 'web-dev') targetPath = '/web-development';
      else if (tabId === 'app-dev') targetPath = '/app-development';
      else if (tabId !== 'overview') targetPath = `/#${tabId}`;

      if (window.location.pathname !== targetPath && window.location.hash !== `#${tabId}`) {
        window.history.pushState({ tab: tabId }, '', targetPath);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      setActiveTab(getInitialTab());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-midnight-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200 selection:bg-flame-500 selection:text-white">
      
      {/* Sticky Header with Coverage alert + Navigation + Horizontal Tabs */}
      <Header 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
        onOpenPortal={() => setIsPortalOpen(true)} 
      />

      {/* Main Tab Views */}
      <main className="flex-1">
        {activeTab === 'overview' && (
          <div className="animate-fadeIn">
            <Hero />
            
            {/* Quick Section Jump Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 sm:-mt-6 mb-10 relative z-20">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <button
                  onClick={() => handleTabChange('services')}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500/60 shadow-xs hover:shadow-md text-left transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-flame-50 dark:bg-flame-500/10 text-flame-600 dark:text-flame-400 flex items-center justify-center">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 group-hover:text-flame-500 transition-all" />
                  </div>
                  <span className="block text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Explore 30 Services</span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">Hardware, Software, AI & Trading</span>
                </button>

                <button
                  onClick={() => handleTabChange('pricing')}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500/60 shadow-xs hover:shadow-md text-left transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-electric-500/10 text-electric-600 dark:text-electric-400 flex items-center justify-center">
                      <Tag className="w-4 h-4" />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 group-hover:text-electric-500 transition-all" />
                  </div>
                  <span className="block text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Pricing from ₹199</span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">Transparent Rates</span>
                </button>

                <button
                  onClick={() => handleTabChange('quotes')}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500/60 shadow-xs hover:shadow-md text-left transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <FileText className="w-4 h-4" />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 group-hover:text-emerald-500 transition-all" />
                  </div>
                  <span className="block text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Corporate & Individual RFQ</span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">Custom Quotations & AMC</span>
                </button>

                <button
                  onClick={() => handleTabChange('feedback')}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500/60 shadow-xs hover:shadow-md text-left transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                      <Star className="w-4 h-4" />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 group-hover:text-amber-500 transition-all" />
                  </div>
                  <span className="block text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Customer Reviews</span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">Verified Feedback & Google</span>
                </button>
              </div>
            </div>

            <DiagnosticEstimator />
          </div>
        )}

        {activeTab === 'services' && (
          <div className="animate-fadeIn">
            <ServicesSection onNavigate={handleTabChange} />
          </div>
        )}

        {activeTab === 'web-dev' && (
          <div className="animate-fadeIn">
            <WebDevelopmentPage onNavigate={handleTabChange} />
          </div>
        )}

        {activeTab === 'app-dev' && (
          <div className="animate-fadeIn">
            <AppDevelopmentPage onNavigate={handleTabChange} />
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="animate-fadeIn">
            <PricingSection />
            <div className="my-8 sm:my-12">
              <DiagnosticEstimator />
            </div>
          </div>
        )}

        {activeTab === 'quotes' && (
          <div className="animate-fadeIn">
            <QuotationsSection />
          </div>
        )}

        {activeTab === 'coverage' && (
          <div className="animate-fadeIn">
            <RemoteSupportSection />
            <DoorstepSection />
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="animate-fadeIn">
            <VisualShowcase />
          </div>
        )}

        {activeTab === 'feedback' && (
          <div className="animate-fadeIn">
            <FeedbackSection />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="animate-fadeIn">
            <AboutSection />
            <ContactSection />
          </div>
        )}
      </main>

      {/* Customer Account & Service History Portal Modal */}
      <CustomerPortalModal 
        isOpen={isPortalOpen} 
        onClose={() => setIsPortalOpen(false)} 
        onNavigateToServices={() => handleTabChange('services')} 
      />

      {/* Footer with linked tab handler */}
      <Footer onTabChange={handleTabChange} />
      
      {/* Floating Instant WhatsApp Button */}
      <QuickFloatingContact />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
