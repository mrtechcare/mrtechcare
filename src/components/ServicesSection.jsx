import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import { ServiceCard } from './ServiceCard';
import { SafetyNotice } from './SafetyNotice';
import { Wrench, Shield, CheckCircle2 } from 'lucide-react';

export const ServicesSection = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: t('services.filterAll') },
    { id: 'pc', label: t('services.filterPc') },
    { id: 'mobile', label: t('services.filterMobile') },
    { id: 'remote', label: t('services.filterRemote') },
    { id: 'doorstep', label: t('services.filterDoorstep') },
  ];

  const filteredServices = servicesData.filter((service) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'pc') return service.category === 'pc';
    if (activeFilter === 'mobile') return service.category === 'mobile';
    if (activeFilter === 'remote') return service.mode.includes('remote') || service.category === 'remote';
    if (activeFilter === 'doorstep') return service.mode.includes('doorstep') || service.category === 'doorstep';
    return true;
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
            <span>{t('services.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('services.title')}
          </h2>

          <p className="mt-2 text-base text-slate-700 dark:text-slate-300">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500 ${
                  isActive
                    ? 'bg-gradient-to-r from-flame-500 to-crimson-600 text-white shadow-md'
                    : 'bg-white dark:bg-midnight-900 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-white/10 shadow-xs'
                }`}
                aria-pressed={isActive}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid (All 11 Services) */}
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
