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
import { Wrench, Tag, Globe2, Camera, UserCheck, Sparkles, ArrowRight } from 'lucide-react';

export function AppContent() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-midnight-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200 selection:bg-flame-500 selection:text-white">
      
      {/* Sticky Header with Emergency alert + Navigation + Horizontal Tabs */}
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Tab Views */}
      <main className="flex-1">
        {activeTab === 'overview' && (
          <div className="animate-fadeIn">
            <Hero />
            
            {/* Quick Tab Jump Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-12 relative z-20">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  onClick={() => setActiveTab('services')}
                  className="p-4 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500 shadow-sm hover:shadow-glow-orange text-left transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-flame-500/10 text-flame-500 flex items-center justify-center">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="block text-xs font-bold text-slate-900 dark:text-white">Explore 11 Services</span>
                  <span className="text-[11px] text-slate-500">Hardware & Software</span>
                </button>

                <button
                  onClick={() => setActiveTab('pricing')}
                  className="p-4 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500 shadow-sm hover:shadow-glow-orange text-left transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-electric-500/10 text-electric-500 flex items-center justify-center">
                      <Tag className="w-4 h-4" />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="block text-xs font-bold text-slate-900 dark:text-white">Pricing from ₹199</span>
                  <span className="text-[11px] text-slate-500">Transparent Rates</span>
                </button>

                <button
                  onClick={() => setActiveTab('coverage')}
                  className="p-4 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500 shadow-sm hover:shadow-glow-orange text-left transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="block text-xs font-bold text-slate-900 dark:text-white">Doorstep & Remote</span>
                  <span className="text-[11px] text-slate-500">Delhi NCR & India</span>
                </button>

                <button
                  onClick={() => setActiveTab('contact')}
                  className="p-4 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500 shadow-sm hover:shadow-glow-orange text-left transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="block text-xs font-bold text-slate-900 dark:text-white">About Raja Kumar</span>
                  <span className="text-[11px] text-slate-500">WhatsApp Booking</span>
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
            <div className="my-12">
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

      {/* Footer */}
      <Footer />
      
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
