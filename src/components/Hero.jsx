import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { createWhatsAppLink, DISPLAY_PHONE } from '../utils/whatsapp';
import { 
  ShieldCheck, 
  MapPin, 
  Globe2, 
  Terminal, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Zap, 
  Lock, 
  Sparkles
} from 'lucide-react';

export const Hero = () => {
  const { t, language } = useLanguage();

  const heroWhatsAppMsg = language === 'hi'
    ? 'नमस्ते Team MrTech Care, मुझे अपने सिस्टम की समस्या के समाधान के लिए सर्विस बुक करनी है।'
    : 'Hello Team MrTech Care, I would like to book a service for my device troubleshooting.';

  return (
    <section id="home" className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 overflow-hidden bg-white dark:bg-midnight-950 transition-colors duration-200">
      
      {/* Background Decorative Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-electric-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-flame-500/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Genuine Operational Status Pill */}
        <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-flame-50 dark:bg-flame-500/15 border border-flame-200 dark:border-flame-500/30 shadow-xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span className="text-xs font-bold text-flame-800 dark:text-flame-300">
            {t('hero.statusPill')}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Stylish Brand Identity Badge (Cooljazz / Handwritten Style) */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5">
              <span className="font-script text-3xl sm:text-4xl font-bold text-flame-600 dark:text-flame-400 select-none">
                MrTech Care
              </span>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-flame-100 dark:bg-flame-500/15 text-flame-800 dark:text-flame-300 border border-flame-200 dark:border-flame-500/30">
                Your Tech. Our Care.
              </span>
            </div>

            {/* Main Headline - Jet Navy in Light Mode, Bright White in Dark Mode */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              {t('hero.headlineStart')}{' '}
              <span className="bg-gradient-to-r from-flame-600 via-crimson-600 to-electric-600 dark:from-flame-400 dark:via-crimson-400 dark:to-electric-400 bg-clip-text text-transparent">
                {t('hero.headlineHighlight')}
              </span>
            </h1>

            {/* Subtitle - Deep Slate in Light Mode */}
            <p className="mt-3 text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200">
              {t('hero.subtitle')}
            </p>

            {/* Description - High Contrast Readable Text */}
            <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {t('hero.description')}
            </p>

            {/* Call to Actions with High-Contrast Solid Buttons */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#estimator"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-flame-500 via-flame-600 to-crimson-600 hover:from-flame-600 hover:to-crimson-700 rounded-xl shadow-xs hover:shadow-md active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>{t('hero.bookBtn')}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 border border-slate-300 dark:border-white/15 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>{t('hero.exploreBtn')}</span>
              </a>

              <a
                href={createWhatsAppLink(heroWhatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>{t('hero.whatsappBtn')}</span>
              </a>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="mt-7 pt-5 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                <MapPin className="w-4 h-4 text-flame-600 dark:text-flame-400 shrink-0 mt-0.5" />
                <span>{t('hero.perks.doorstep')}</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                <Globe2 className="w-4 h-4 text-electric-600 dark:text-electric-400 shrink-0 mt-0.5" />
                <span>{t('hero.perks.remote')}</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{t('hero.perks.honest')}</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                <Lock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>{t('hero.perks.secure')}</span>
              </div>
            </div>

          </div>

          {/* Right Tech Console Workstation Visual */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-flame-500/25 via-crimson-500/20 to-electric-500/25 blur-lg opacity-75"></div>

              {/* Main Workstation Card */}
              <div className="relative rounded-2xl bg-white dark:bg-midnight-950 border border-slate-200 dark:border-flame-500/30 p-4 sm:p-6 shadow-xl dark:shadow-2xl">
                
                {/* Console Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-crimson-500 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-flame-500 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="ml-2 font-mono text-[11px] text-slate-500 dark:text-slate-400 font-semibold truncate">mrtechcare-diagnostics://live</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-ping"></span>
                    <span className="text-[10px] font-mono font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">Ready</span>
                  </div>
                </div>

                {/* Console Body */}
                <div className="mt-3.5 space-y-2.5 font-mono text-xs">
                  
                  {/* Operator */}
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-midnight-900 border border-slate-200 dark:border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-electric-600 dark:text-electric-400" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">Technical Operations</span>
                    </div>
                    <span className="text-slate-900 dark:text-white font-bold">Team MrTech Care</span>
                  </div>

                  {/* Remote Engine */}
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-midnight-900 border border-slate-200 dark:border-white/5 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-flame-600 dark:text-flame-400" />
                        <span className="text-slate-700 dark:text-slate-300 font-medium">Remote Engine</span>
                      </div>
                      <span className="text-flame-600 dark:text-flame-400 font-bold text-[11px]">AnyDesk / TeamViewer</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-200 dark:border-white/5">
                      <span>Pan-India Connectivity</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold">Secure Session</span>
                    </div>
                  </div>

                  {/* Doorstep Dispatch */}
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-midnight-900 border border-slate-200 dark:border-white/5 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-flame-600 dark:text-flame-400" />
                        <span className="text-slate-700 dark:text-slate-300 font-medium">Doorstep Dispatch</span>
                      </div>
                      <span className="text-flame-600 dark:text-flame-400 font-bold text-[11px]">Delhi NCR</span>
                    </div>
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {['Delhi', 'Noida', 'Ghaziabad', 'Greater Noida'].map((city) => (
                        <span key={city} className="px-2 py-0.5 rounded bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-[10px] text-slate-800 dark:text-slate-300 font-semibold shadow-2xs">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Service Spectrum */}
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-midnight-900 border border-slate-200 dark:border-white/5">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-slate-600 dark:text-slate-400 font-semibold">Authorized Spectrum</span>
                      <span className="text-flame-600 dark:text-electric-400 font-bold">11 Services</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-800 dark:text-slate-300 font-medium">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-flame-600 dark:text-flame-400 shrink-0" />
                        <span>Windows & Boot</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-electric-600 dark:text-electric-400 shrink-0" />
                        <span>SSD / RAM Speed</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-flame-600 dark:text-flame-400 shrink-0" />
                        <span>Laptop Hardware</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-crimson-600 dark:text-crimson-400 shrink-0" />
                        <span>Android & iPhone</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Console Footer Status */}
                <div className="mt-3.5 pt-2.5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    Authorized Repairs Only
                  </span>
                  <a
                    href={`tel:+919990946044`}
                    className="text-flame-600 dark:text-flame-400 font-bold font-mono hover:underline"
                  >
                    {DISPLAY_PHONE}
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
