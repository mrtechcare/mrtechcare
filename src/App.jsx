import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DiagnosticEstimator } from './components/DiagnosticEstimator';
import { VisualShowcase } from './components/VisualShowcase';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { RemoteSupportSection } from './components/RemoteSupportSection';
import { DoorstepSection } from './components/DoorstepSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuickFloatingContact } from './components/QuickFloatingContact';
import { Wrench, Tag, Globe2, UserCheck, ArrowRight } from 'lucide-react';

export function AppContent() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-midnight-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200 selection:bg-flame-500 selection:text-white">
      
      {/* Sticky Header with Coverage alert + Navigation + Horizontal Tabs */}
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Tab Views */}
      <main className="flex-1">
        {activeTab === 'overview' && (
          <div className="animate-fadeIn">
            <Hero />
            
            {/* Quick Section Jump Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 sm:-mt-6 mb-10 relative z-20">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <button
                  onClick={() => setActiveTab('services')}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500/60 shadow-xs hover:shadow-md text-left transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-flame-50 dark:bg-flame-500/10 text-flame-600 dark:text-flame-400 flex items-center justify-center">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 group-hover:text-flame-500 transition-all" />
                  </div>
                  <span className="block text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Explore 11 Services</span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">Hardware & Software</span>
                </button>

                <button
                  onClick={() => setActiveTab('pricing')}
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
                  onClick={() => setActiveTab('coverage')}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500/60 shadow-xs hover:shadow-md text-left transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 group-hover:text-emerald-500 transition-all" />
                  </div>
                  <span className="block text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Doorstep & Remote</span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">Delhi NCR & India</span>
                </button>

                <button
                  onClick={() => setActiveTab('contact')}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500/60 shadow-xs hover:shadow-md text-left transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 group-hover:text-purple-500 transition-all" />
                  </div>
                  <span className="block text-xs sm:text-sm font-bold text-slate-900 dark:text-white">About Raja Kumar</span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">WhatsApp Booking</span>
                </button>
              </div>
            </div>

            <DiagnosticEstimator />
          </div>
        )}

        {activeTab === 'services' && (
          <div className="animate-fadeIn">
            <ServicesSection />
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

        {activeTab === 'contact' && (
          <div className="animate-fadeIn">
            <AboutSection />
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer with linked tab handler */}
      <Footer onTabChange={setActiveTab} />
      
      {/* Floating Instant WhatsApp Button */}
      <QuickFloatingContact />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
