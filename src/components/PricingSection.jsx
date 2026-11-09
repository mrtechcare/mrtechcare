import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { pricingPlans } from '../data/pricingData';
import { translations } from '../data/translations';
import { getServiceBookingLink } from '../utils/whatsapp';
import { 
  Check, 
  AlertCircle, 
  HelpCircle, 
  Tag, 
  MessageSquare, 
  Sparkles,
  Info,
  ShieldAlert,
  Flame,
  Wrench,
  Smartphone,
  Briefcase,
  TrendingUp
} from 'lucide-react';

export const PricingSection = () => {
  const { t, language } = useLanguage();
  const [pricingCategory, setPricingCategory] = useState('all');

  const pricingCategories = [
    { id: 'all', label: language === 'hi' ? 'सभी दरें (All)' : 'All Rates' },
    { id: 'repair', label: language === 'hi' ? 'कंप्यूटर व विंडोज' : 'Computer & Windows', icon: Wrench },
    { id: 'mobile', label: language === 'hi' ? 'मोबाइल व फर्मवेयर' : 'Mobile & Firmware', icon: Smartphone },
    { id: 'amc', label: language === 'hi' ? 'एएमसी (AMC)' : 'AMC Maintenance', icon: Briefcase },
    { id: 'trading', label: language === 'hi' ? 'ट्रेडिंग ऑटोमेशन' : 'Trading Systems', icon: TrendingUp },
  ];

  const filteredPlans = pricingPlans.filter((plan) => {
    if (pricingCategory === 'all') return true;
    return plan.category === pricingCategory;
  });

  return (
    <section id="pricing" className="py-16 lg:py-20 relative bg-slate-50 dark:bg-midnight-950 border-t border-slate-200 dark:border-white/5 transition-colors duration-200">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-flame-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-flame-100 dark:bg-flame-500/15 border border-flame-200 dark:border-flame-500/25 text-flame-700 dark:text-flame-400 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Tag className="w-3.5 h-3.5 text-flame-600 dark:text-flame-400" />
            <span>{t('pricing.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('pricing.title')}
          </h2>

          <p className="mt-2 text-base text-slate-700 dark:text-slate-300">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Category Filters */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {pricingCategories.map((cat) => {
            const isActive = pricingCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setPricingCategory(cat.id)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500 ${
                  isActive
                    ? 'bg-gradient-to-r from-flame-500 to-crimson-600 text-white shadow-md'
                    : 'bg-white dark:bg-midnight-900 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-white/10 shadow-xs'
                }`}
                aria-pressed={isActive}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlans.map((plan) => {
            const content = plan[language] || plan.en;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white dark:bg-midnight-900 border-2 border-flame-500 shadow-xl'
                    : 'bg-white dark:bg-midnight-900/90 border border-slate-200 dark:border-white/10 hover:border-flame-500/40 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular Ribbon with Flame Icon */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-flame-500 to-crimson-600 text-white text-[11px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                    <Flame className="w-3 h-3 text-amber-200 fill-current" />
                    <span>{t('pricing.popularBadge')}</span>
                  </div>
                )}

                <div>
                  {/* Top Scope & Coverage */}
                  <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-mono mb-2">
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-300 font-semibold">
                      {plan.coverage}
                    </span>
                    <span>Indicative Base</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                    {content.title}
                  </h3>

                  {/* Scope description */}
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                    {content.scope}
                  </p>

                  {/* Price Tag */}
                  <div className="mt-5 pb-5 border-b border-slate-100 dark:border-white/10 flex items-baseline gap-1">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-bold">
                      {t('pricing.startingAt')}
                    </span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight ml-1">
                      ₹{plan.price}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                      * (Base Fee)
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="mt-5 space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                    {content.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card Area */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex flex-col gap-3">
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                    ℹ️ {content.note}
                  </p>

                  <a
                    href={getServiceBookingLink(plan.serviceKey, language)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold rounded-xl transition-all duration-200 shadow-sm ${
                      plan.popular
                        ? 'bg-gradient-to-r from-flame-500 to-crimson-600 hover:from-flame-600 hover:to-crimson-700 text-white shadow-md'
                        : 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-white/10 dark:hover:bg-white/15 dark:text-white border border-slate-700 dark:border-white/10'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current text-amber-300" />
                    <span>{t('pricing.bookNow')}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Essential Pricing Policy & Transparency Box */}
        <div className="mt-12 rounded-2xl bg-white dark:bg-midnight-900 border border-flame-300 dark:border-flame-500/30 p-6 sm:p-8 shadow-md">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 flex items-center justify-center shrink-0 text-amber-700 dark:text-amber-500 mt-0.5">
              <Info className="w-5 h-5" />
            </div>

            <div className="flex-1">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                {t('pricing.disclaimerTitle')}
              </h4>

              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {translations[language].pricing.disclaimerPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-midnight-950/60 border border-slate-200 dark:border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-flame-500 mt-2 shrink-0"></span>
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
