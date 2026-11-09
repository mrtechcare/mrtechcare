import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { OWNER_NAME, BUSINESS_NAME, DISPLAY_PHONE, BUSINESS_EMAIL } from '../utils/whatsapp';
import { 
  UserCheck, 
  ShieldCheck, 
  MessageSquare, 
  CheckCircle2, 
  Search, 
  PhoneCall, 
  Laptop, 
  Wrench, 
  Award, 
  Sparkles 
} from 'lucide-react';

export const AboutSection = () => {
  const { t, language } = useLanguage();

  const values = [
    {
      title: language === 'hi' ? 'सटीक व सच्चा डायग्नोसिस' : 'Honest Diagnostics',
      desc: language === 'hi'
        ? 'हम केवल उसी हिस्से को ठीक या बदलते हैं जो वास्तव में खराब है। कोई अनावश्यक रिपेयर या पार्ट्स का खर्च नहीं थोपा जाता।'
        : 'We only repair or replace components that are genuinely faulty. No inflated bills or pushy upselling.'
    },
    {
      title: language === 'hi' ? 'पारदर्शी व स्पष्ट बातचीत' : 'Transparent Communication',
      desc: language === 'hi'
        ? 'सरल हिंदी या अंग्रेजी में पूरी स्थिति समझाई जाती है, बिना किसी जटिल तकनीकी शब्दों या अस्पष्टता के।'
        : 'Clear explanations in simple terms before work begins, detailing what failed, why, and the exact steps to fix it.'
    },
    {
      title: language === 'hi' ? 'स्क्रीन पर आपका 100% नियंत्रण' : 'Complete Client Control',
      desc: language === 'hi'
        ? 'रिमोट सपोर्ट के दौरान आपकी स्क्रीन आपके सामने खुली रहती है और आप किसी भी समय सत्र समाप्त कर सकते हैं।'
        : 'During remote sessions, everything occurs directly on your screen. You can monitor and terminate the session at any second.'
    },
    {
      title: language === 'hi' ? 'सीधी व्यक्तिगत जवाबदेही' : 'Direct Owner Accountability',
      desc: language === 'hi'
        ? 'कोई अज्ञात सब-कॉन्ट्रैक्टर या कॉल सेंटर नहीं। राजा कुमार आपके सिस्टम की शुरुआत से अंत तक सीधी जिम्मेदारी लेते हैं।'
        : 'No anonymous middlemen or ticket queues. You deal directly with Raja Kumar for diagnosis, service, and follow-up.'
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-20 relative bg-slate-50 dark:bg-midnight-950 border-t border-slate-200 dark:border-white/5 transition-colors duration-200">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-flame-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric-100 dark:bg-electric-500/10 border border-electric-300 dark:border-electric-500/20 text-electric-800 dark:text-electric-400 text-xs font-bold uppercase tracking-wider mb-2.5">
            <UserCheck className="w-3.5 h-3.5 text-electric-600 dark:text-electric-400" />
            <span>{t('about.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('about.title')}
          </h2>

          <p className="mt-2 text-base text-slate-700 dark:text-slate-300">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Narrative & Operator Bio Card */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story Column */}
          <div className="lg:col-span-7 flex flex-col justify-between p-7 sm:p-9 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 shadow-sm">
            <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              <p className="text-base sm:text-lg text-slate-900 dark:text-white font-bold">
                {t('about.lead')}
              </p>
              <p>
                {t('about.p1')}
              </p>
              <p>
                {t('about.p2')}
              </p>
              <p>
                {t('about.p3')}
              </p>
            </div>

            {/* Direct Tech Contact Strip */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="block text-xs text-slate-500 dark:text-slate-400 font-semibold">Direct Technician & Owner</span>
                <span className="text-lg font-bold text-slate-900 dark:text-white font-mono">{OWNER_NAME}</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:+919990946044`}
                  className="px-3.5 py-2 text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-midnight-950 hover:bg-slate-200 rounded-lg border border-slate-200 dark:border-white/10 transition-colors"
                >
                  {DISPLAY_PHONE}
                </a>
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="px-3.5 py-2 text-xs font-bold text-flame-700 dark:text-flame-400 bg-flame-50 dark:bg-flame-500/10 hover:bg-flame-100 rounded-lg border border-flame-200 dark:border-flame-500/30 transition-colors"
                >
                  {BUSINESS_EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Core Principles Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {values.map((v, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500/40 transition-all duration-200 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-flame-600 dark:text-flame-400 shrink-0" />
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {v.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-6">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
