import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { RemoteSupportSection } from './components/RemoteSupportSection';
import { DoorstepSection } from './components/DoorstepSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuickFloatingContact } from './components/QuickFloatingContact';

export function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-midnight-900 text-slate-100 flex flex-col font-sans selection:bg-electric-500 selection:text-white">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <ServicesSection />
          <PricingSection />
          <RemoteSupportSection />
          <DoorstepSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
        <QuickFloatingContact />
      </div>
    </LanguageProvider>
  );
}

export default App;
