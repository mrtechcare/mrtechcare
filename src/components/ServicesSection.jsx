import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import { ServiceCard } from './ServiceCard';
import { SafetyNotice } from './SafetyNotice';
import { 
  Wrench, 
  ShieldAlert, 
  Info, 
  TrendingUp, 
  CheckCircle2, 
  Briefcase, 
  Code, 
  Sliders, 
  Smartphone, 
  Monitor 
} from 'lucide-react';

export const ServicesSection = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: language === 'hi' ? 'सभी सेवाएं (30)' : 'All Services (30)', icon: Wrench },
    { id: 'hardware', label: language === 'hi' ? 'कंप्यूटर व हार्डवेयर' : 'Computer & Hardware', icon: Monitor },
    { id: 'mobile', label: language === 'hi' ? 'मोबाइल व फर्मवेयर' : 'Mobile & Firmware', icon: Smartphone },
    { id: 'digital', label: language === 'hi' ? 'वेब व ऐप डेवलपमेंट' : 'Web & App Development', icon: Code },
    { id: 'automation', label: language === 'hi' ? 'ऑटोमेशन व AI' : 'Business Automation & AI', icon: Sliders },
    { id: 'trading', label: language === 'hi' ? 'ट्रेडिंग ऑटोमेशन (तकनीकी)' : 'Trading Systems (Technical)', icon: TrendingUp },
    { id: 'amc', label: language === 'hi' ? 'एएमसी (AMC) मेंटेनेंस' : 'AMC Maintenance', icon: Briefcase },
  ];

  const filteredServices = servicesData.filter((service) => {
    if (activeFilter === 'all') return true;
    return service.category === activeFilter;
  });

  return (
    <section id="services" className="py-16 lg:py-20 relative bg-slate-50 dark:bg-midnight-950 border-t border-slate-200 dark:border-white/5 transition-colors duration-200">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-electric-500/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-flame-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-flame-100 dark:bg-flame-500/10 border border-flame-200 dark:border-flame-500/20 text-flame-700 dark:text-flame-400 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Wrench className="w-3.5 h-3.5 text-flame-600 dark:text-flame-400" />
            <span>{language === 'hi' ? 'विस्तृत सेवा स्पेक्ट्रम' : 'Comprehensive Tech Services'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {language === 'hi' ? 'हार्डवेयर रिपेयर से लेकर आधुनिक सॉफ्टवेयर व ऑटोमेशन' : 'From Hardware Repairs to Modern Software & Automation'}
          </h2>

          <p className="mt-2 text-base text-slate-700 dark:text-slate-300">
            {language === 'hi'
              ? 'कंप्यूटर व लैपटॉप हार्डवेयर, मोबाइल फर्मवेयर, कस्टम वेब/ऐप डेवलपमेंट, बिजनेस ऑटोमेशन व एएमसी समाधान।'
              : 'End-to-end technology solutions: on-site hardware repairs, remote IT troubleshooting, web & app engineering, and automation systems.'}
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                type="button"
                className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500 ${
                  isActive
                    ? 'bg-gradient-to-r from-flame-500 to-crimson-600 text-white shadow-md'
                    : 'bg-white dark:bg-midnight-900 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-white/10 shadow-xs'
                }`}
                aria-pressed={isActive}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dedicated Financial Risk Disclosure when viewing Trading Automation */}
        {(activeFilter === 'trading' || activeFilter === 'all') && (
          <div className="mt-8 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border-2 border-amber-300 dark:border-amber-500/30 p-4 sm:p-5 text-slate-800 dark:text-slate-200">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm leading-relaxed">
                <span className="font-bold text-amber-900 dark:text-amber-300 block mb-0.5">
                  {language === 'hi' ? 'महत्वपूर्ण विधिक एवं वित्तीय जोखिम प्रकटीकरण (Risk Disclosure):' : 'Mandatory Technical & Financial Risk Disclosure:'}
                </span>
                <p className="text-slate-700 dark:text-slate-300">
                  {language === 'hi'
                    ? 'MrTech Care केवल तकनीकी सॉफ्टवेयर डेवलपमेंट, एपीआई इंटीग्रेशन और एल्गोरिदम कोडिंग सेवाएं प्रदान करता है। हम कोई वित्तीय, निवेश या सेबी/नियामक परामर्श नहीं देते हैं और न ही किसी प्रकार के मुनाफे का दावा करते हैं। वित्तीय बाजारों में ट्रेडिंग में पूंजी जोखिम शामिल होता है। उपयोगकर्ता अपने सभी ब्रोकर खातों और रिस्क पैरामीटर्स के लिए स्वयं जिम्मेदार होते हैं।'
                    : 'Team MrTech Care provides technical software engineering, API integration, and algorithm development services exclusively. We do not provide financial, investment, or trading advisory services, and we never make claims or promises regarding financial profits or trading returns. Trading in foreign exchange, commodities, and digital assets involves substantial risk of financial loss. Clients retain sole control and responsibility over their broker credentials and risk settings.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Safety & Legitimacy Banner */}
        <div className="mt-12">
          <SafetyNotice />
        </div>

      </div>
    </section>
  );
};
