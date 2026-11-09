import React from 'react';
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
  Flame
} from 'lucide-react';

export const PricingSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="pricing" className="py-20 lg:py-28 relative bg-midnight-950 light:bg-slate-100 border-t border-white/5 light:border-slate-200 transition-colors">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-flame-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-flame-500/10 border border-flame-500/25 text-flame-400 light:text-flame-600 text-xs font-semibold uppercase tracking-wider mb-3">
            <Tag className="w-3.5 h-3.5" />
            <span>{t('pricing.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            {t('pricing.title')}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-300 light:text-slate-600">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Cards Grid (6 Indicative Starting Rates) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => {
            const content = plan[language] || plan.en;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-midnight-850 to-midnight-950 light:from-white light:to-orange-50/50 border-2 border-flame-500 shadow-glow-orange'
                    : 'bg-midnight-900/90 light:bg-white border border-white/10 light:border-slate-200 hover:border-flame-500/40 shadow-card-elevated'
                }`}
              >
                {/* Popular Ribbon with Flame Icon */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-flame-500 to-crimson-600 text-white text-[11px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                    <Flame className="w-3 h-3 text-amber-200 fill-current" />
                    <span>{t('pricing.popularBadge')}</span>
                  </div>
                )}

                <div>
                  {/* Top Scope & Coverage */}
                  <div className="flex items-center justify-between text-xs text-slate-400 light:text-slate-500 font-mono mb-2">
                    <span className="px-2 py-0.5 rounded bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-200 text-slate-300 light:text-slate-700">
                      {plan.coverage}
                    </span>
                    <span>Indicative Base</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white light:text-slate-900 mt-1">
                    {content.title}
                  </h3>

                  {/* Scope description */}
                  <p className="mt-1 text-xs text-slate-400 light:text-slate-500">
                    {content.scope}
                  </p>

                  {/* Price Tag */}
                  <div className="mt-5 pb-5 border-b border-white/10 light:border-slate-100 flex items-baseline gap-1">
                    <span className="text-xs text-slate-400 light:text-slate-500 font-medium">
                      {t('pricing.startingAt')}
                    </span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 font-mono tracking-tight ml-1">
                      ₹{plan.price}
                    </span>
                    <span className="text-xs text-slate-400 light:text-slate-500 font-normal">
                      * (Base Fee)
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="mt-5 space-y-2.5 text-xs text-slate-300 light:text-slate-600">
                    {content.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 light:text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card Area */}
                <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-100 flex flex-col gap-3">
                  <p className="text-[11px] text-slate-400 light:text-slate-500 italic">
                    ℹ️ {content.note}
                  </p>

                  <a
                    href={getServiceBookingLink(plan.serviceKey, language)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold rounded-xl transition-all duration-200 shadow-sm ${
                      plan.popular
                        ? 'bg-gradient-to-r from-flame-500 to-crimson-600 hover:from-flame-600 hover:to-crimson-700 text-white shadow-glow-orange'
                        : 'bg-white/10 light:bg-slate-900 hover:bg-white/15 text-white border border-white/10 light:border-slate-700'
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
        <div className="mt-14 rounded-2xl bg-midnight-900 light:bg-white border border-flame-500/30 light:border-slate-200 p-6 sm:p-8 backdrop-blur-md shadow-card-elevated">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-500 mt-0.5">
              <Info className="w-5 h-5" />
            </div>

            <div className="flex-1">
              <h4 className="text-lg font-bold text-white light:text-slate-900 tracking-tight">
                {t('pricing.disclaimerTitle')}
              </h4>

              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300 light:text-slate-600">
                {translations[language].pricing.disclaimerPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-midnight-950/60 light:bg-slate-50 border border-white/5 light:border-slate-200">
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
