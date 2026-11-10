import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import { ServiceCard } from './ServiceCard';
import { SafetyNotice } from './SafetyNotice';
import { createWhatsAppLink, DISPLAY_PHONE } from '../utils/whatsapp';
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
  Monitor,
  Search,
  X,
  Phone,
  MessageSquare,
  MapPin,
  Laptop,
  ArrowRight,
  Filter
} from 'lucide-react';

export const ServicesSection = ({ onNavigate }) => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Category counts computed dynamically from servicesData
  const categoryCounts = useMemo(() => {
    const counts = { all: servicesData.length };
    servicesData.forEach((s) => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filterTabs = [
    { id: 'all', label: language === 'hi' ? 'सभी सेवाएं' : 'All Services', count: categoryCounts.all, icon: Wrench },
    { id: 'hardware', label: language === 'hi' ? 'कंप्यूटर व हार्डवेयर' : 'Computer & Hardware', count: categoryCounts.hardware, icon: Monitor },
    { id: 'mobile', label: language === 'hi' ? 'मोबाइल व फर्मवेयर' : 'Mobile & Firmware', count: categoryCounts.mobile, icon: Smartphone },
    { id: 'digital', label: language === 'hi' ? 'वेब व ऐप डेवलपमेंट' : 'Web & App Development', count: categoryCounts.digital, icon: Code },
    { id: 'automation', label: language === 'hi' ? 'ऑटोमेशन व AI' : 'Business Automation & AI', count: categoryCounts.automation, icon: Sliders },
    { id: 'trading', label: language === 'hi' ? 'ट्रेडिंग ऑटोमेशन (तकनीकी)' : 'Trading Systems (Technical)', count: categoryCounts.trading, icon: TrendingUp },
    { id: 'amc', label: language === 'hi' ? 'एएमसी (AMC) मेंटेनेंस' : 'AMC Maintenance', count: categoryCounts.amc, icon: Briefcase },
  ];

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesCategory = activeFilter === 'all' || service.category === activeFilter;
      if (!matchesCategory) return false;
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const en = service.en;
      const hi = service.hi;

      const matchEn = en?.title?.toLowerCase().includes(q) || 
                      en?.shortDesc?.toLowerCase().includes(q) || 
                      en?.features?.some(f => f.toLowerCase().includes(q));

      const matchHi = hi?.title?.toLowerCase().includes(q) || 
                      hi?.shortDesc?.toLowerCase().includes(q) || 
                      hi?.features?.some(f => f.toLowerCase().includes(q));

      const matchId = service.id.toLowerCase().includes(q) || (service.badge && service.badge.toLowerCase().includes(q));

      return matchEn || matchHi || matchId;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="services" className="py-16 lg:py-20 relative bg-slate-50 dark:bg-midnight-950 border-t border-slate-200 dark:border-white/5 transition-colors duration-200">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-electric-500/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-flame-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 xl:px-6 2xl:px-8 relative z-10">
        
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

          {/* Instant Search Bar */}
          <div className="mt-6 max-w-xl mx-auto relative">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'hi' ? 'सेवा खोजें (उदा. SSD, स्क्रीन, आईफोन, AMC, React)...' : 'Search 30 services (e.g. SSD, display, iPhone, AMC, web)...'}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-flame-500 shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            {searchQuery && (
              <div className="mt-2 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between px-1">
                <span>
                  {language === 'hi' 
                    ? `कुल ${filteredServices.length} सेवाएं मिलीं` 
                    : `Found ${filteredServices.length} matching services`}
                </span>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="text-flame-600 dark:text-flame-400 font-bold hover:underline"
                >
                  {language === 'hi' ? 'सर्च रीसेट करें' : 'Reset search'}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile & Tablet Horizontal Filter Tabs (<xl screen widths) */}
        <div className="mt-8 flex xl:hidden flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto">
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
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Desktop Layout Container (Left Sticky Navigator + Centre Cards + Right Info) */}
        <div className="flex flex-col xl:flex-row items-start gap-6 lg:gap-7 mt-8">

          {/* LEFT COLUMN: Sticky Service Category Navigation (xl: and above) */}
          <aside className="w-64 shrink-0 hidden xl:block sticky top-24 self-start space-y-4">
            <div className="p-4 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 shadow-xs">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100 dark:border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5 text-flame-500" />
                  <span>{language === 'hi' ? 'सेवा श्रेणियां' : 'Categories'}</span>
                </span>
                <span className="text-[11px] font-mono text-slate-500 font-bold">30 Services</span>
              </div>

              <nav className="space-y-1" aria-label="Service Categories">
                {filterTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveFilter(tab.id)}
                      type="button"
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                        isActive
                          ? 'bg-gradient-to-r from-flame-500 to-crimson-600 text-white shadow-sm'
                          : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                      }`}
                      aria-current={isActive ? 'true' : 'false'}
                    >
                      <div className="flex items-center gap-2 truncate pr-1">
                        <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} />
                        <span className="truncate">{tab.label}</span>
                      </div>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono shrink-0 ${
                        isActive ? 'bg-white/20 text-white font-bold' : 'bg-slate-100 dark:bg-midnight-950 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/5'
                      }`}>
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Quick Diagnostic Assistance Pill */}
            <div className="p-4 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 shadow-xs text-xs space-y-2">
              <span className="block font-bold text-slate-900 dark:text-white">
                {language === 'hi' ? 'सटीक सेवा चयन' : 'Quick Assistance'}
              </span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                {language === 'hi'
                  ? 'यदि आप अपनी समस्या के बारे में सुनिश्चित नहीं हैं, तो हमारे तकनीशियन से सीधे बात करें।'
                  : 'Not sure which service fits your issue? Connect directly with our technician.'}
              </p>
              <a
                href={createWhatsAppLink("Hello Team MrTech Care, I need guidance selecting the right service for my device.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold transition-colors shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>{language === 'hi' ? 'व्हाट्सएप सलाह' : 'WhatsApp Guidance'}</span>
              </a>
            </div>
          </aside>

          {/* CENTRE COLUMN: Main Service Catalogue */}
          <main className="flex-1 w-full min-w-0">
            
            {/* Dedicated Financial Risk Disclosure when viewing Trading Automation */}
            {(activeFilter === 'trading' || activeFilter === 'all') && (
              <div className="mb-6 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border-2 border-amber-300 dark:border-amber-500/30 p-4 sm:p-5 text-slate-800 dark:text-slate-200">
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

            {/* Services Grid (Balanced 2-col on desktop, cards never squeezed) */}
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} onNavigate={onNavigate} />
                ))}
              </div>
            ) : (
              <div className="p-10 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 text-center space-y-3">
                <Wrench className="w-8 h-8 text-slate-400 mx-auto" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {language === 'hi' ? 'कोई मेल खाती सेवा नहीं मिली' : 'No matching services found'}
                </h3>
                <p className="text-xs text-slate-500">
                  {language === 'hi' ? 'कृपया अपनी खोज बदलें या फिल्टर रीसेट करें।' : 'Try adjusting your search terms or clearing category filters.'}
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
                  className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white/10 text-white text-xs font-bold"
                >
                  {language === 'hi' ? 'सभी 30 सेवाएं देखें' : 'View All 30 Services'}
                </button>
              </div>
            )}

            {/* Safety & Legitimacy Banner */}
            <div className="mt-10">
              <SafetyNotice />
            </div>
          </main>

          {/* RIGHT COLUMN: Supporting Business Information Panel (Active only on 2xl: widescreen displays to avoid squeezing) */}
          <aside className="w-72 shrink-0 hidden 2xl:block sticky top-24 self-start space-y-4">
            
            {/* Service Delivery Modes Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 shadow-xs space-y-3.5">
              <div className="flex items-center gap-2 pb-2.5 border-b border-slate-100 dark:border-white/10">
                <MapPin className="w-4 h-4 text-flame-500" />
                <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  {language === 'hi' ? 'सेवा वितरण मॉडल' : 'Service Delivery Modes'}
                </h3>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-200 dark:border-white/5 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-white block">
                    {language === 'hi' ? '1. डोरस्टेप ऑन-साइट सर्विस' : '1. On-Site Doorstep Service'}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                    Delhi, Gurugram, Faridabad, Noida & Ghaziabad
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-200 dark:border-white/5 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-white block">
                    {language === 'hi' ? '2. रिमोट स्क्रीन शेयर सपोर्ट' : '2. Remote Screen Support'}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                    Pan-India via AnyDesk / TeamViewer
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-200 dark:border-white/5 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-white block">
                    {language === 'hi' ? '3. क्लाउड व सॉफ्टवेयर इंजीनियरिंग' : '3. Cloud & Code Engineering'}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                    Web, App, Automation & API Systems
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Tech Support Hotline Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 shadow-xs space-y-3">
              <span className="block text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                {language === 'hi' ? 'तकनीकी हेल्पलाइन' : 'Direct Tech Desk'}
              </span>
              <div className="font-mono text-sm font-bold text-flame-600 dark:text-flame-400">
                {DISPLAY_PHONE}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {language === 'hi' ? 'कार्य समय: सुबह 9:00 से रात 9:00 बजे (सातों दिन)' : 'Support Hours: 9:00 AM – 9:00 PM (All 7 Days)'}
              </p>
              <a
                href={createWhatsAppLink("Hello Team MrTech Care, I need support regarding a service.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-xs font-bold transition-all shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp Booking</span>
              </a>
            </div>

            {/* Corporate AMC Inquiry Card */}
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-midnight-900/60 border border-slate-200 dark:border-white/10 text-xs space-y-2">
              <span className="font-bold text-slate-900 dark:text-white block">
                {language === 'hi' ? 'कार्यालय व कॉर्पोरेट AMC' : 'Corporate IT & AMC'}
              </span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 font-normal">
                {language === 'hi' 
                  ? '10+ कंप्यूटरों वाले कार्यालयों के लिए औपचारिक कोटेशन व अनुबंध।' 
                  : 'Tailored maintenance contracts for offices with 10+ workstations.'}
              </p>
              <a
                href="#quotations"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-flame-600 dark:text-flame-400 hover:underline"
              >
                <span>{language === 'hi' ? 'कॉर्पोरेट RFP सबमिट करें' : 'Submit Corporate RFP'}</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

          </aside>

        </div>

      </div>
    </section>
  );
};
