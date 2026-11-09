import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { EmergencyBanner } from './components/EmergencyBanner';
import { Navbar } from './components/Navbar';
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

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-midnight-950 light:bg-slate-50 text-slate-100 light:text-slate-900 flex flex-col font-sans transition-colors duration-300 selection:bg-flame-500 selection:text-white">
          <EmergencyBanner />
          <Navbar />
          <main className="flex-1">
            <Hero />
            <DiagnosticEstimator />
            <VisualShowcase />
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
    </ThemeProvider>
  );
}

export default App;
