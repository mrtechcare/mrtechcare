import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { createWhatsAppLink, DISPLAY_PHONE } from '../utils/whatsapp';
import { 
  ShieldCheck, 
  MapPin, 
  Globe2, 
  Cpu, 
  Terminal, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Zap, 
  Lock,
  Wrench,
  Monitor,
  Flame,
  Clock,
  Sparkles
} from 'lucide-react';

export const Hero = () => {
  const { t, language } = useLanguage();

  const heroWhatsAppMsg = language === 'hi'
    ? 'नमस्ते राजा जी, मुझे अपने सिस्टम की समस्या के समाधान के लिए सर्विस बुक करनी है।'
    : 'Hello Raja ji, I would like to book a service for my device troubleshooting.';

  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-radial-glow bg-tech-grid">
      
      {/* Background Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-electric-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-flame-500/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Urgent Live Dispatch Bar */}
        <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-flame-500/15 via-crimson-500/15 to-electric-500/15 border border-flame-500/30 shadow-sm backdrop-blur-md">
          <span className="flex items-center justify-center w-2 h-2 rounded-full bg-flame-500 animate-ping"></span>
          <span className="text-xs font-bold text-flame-400 light:text-flame-600 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-flame-500 fill-current" />
            <span>Today in Delhi NCR: 3 Doorstep Slots Remaining • Remote Connect in &lt; 5 mins</span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Stylish Brand Identity Badge (Cooljazz / Handwritten Style) */}
            <div className="flex items-center gap-3 mb-4">
              <span className="font-script text-3xl sm:text-4xl font-bold bg-gradient-to-r from-flame-500 via-crimson-500 to-electric-500 bg-clip-text text-transparent select-none">
                MrTech Care
              </span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-flame-500/10 border border-flame-500/25 text-flame-500 dark:text-flame-400">
                Your Tech. Our Care.
              </span>
            </div>

            {/* Main Headline with Fire & Electric Gradients */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight leading-[1.15]">
              {t('hero.headlineStart')}{' '}
              <span className="bg-gradient-to-r from-flame-500 via-crimson-500 to-electric-500 bg-clip-text text-transparent">
                {t('hero.headlineHighlight')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3 text-lg sm:text-xl font-semibold text-slate-200 light:text-slate-700">
              {t('hero.subtitle')}
            </p>

            {/* Description */}
            <p className="mt-4 text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed max-w-2xl">
              {t('hero.description')}
            </p>

            {/* Call to Actions with Orange & Red Accent */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#estimator"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-flame-500 via-flame-600 to-crimson-600 hover:from-flame-600 hover:to-crimson-700 rounded-xl shadow-glow-orange hover:shadow-lg active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-400"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Instant Diagnostic & Cost</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-200 light:text-slate-800 bg-white/5 light:bg-slate-100 hover:bg-white/10 light:hover:bg-slate-200 hover:text-white light:hover:text-black border border-white/15 light:border-slate-300 rounded-xl transition-all duration-200"
              >
                <span>{t('hero.exploreBtn')}</span>
              </a>

              <a
                href={createWhatsAppLink(heroWhatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-emerald-400 light:text-emerald-700 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>{t('hero.whatsappBtn')}</span>
              </a>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="mt-8 pt-6 border-t border-white/10 light:border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 light:text-slate-700">
                <MapPin className="w-4 h-4 text-flame-500 shrink-0 mt-0.5" />
                <span>{t('hero.perks.doorstep')}</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 light:text-slate-700">
                <Globe2 className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                <span>{t('hero.perks.remote')}</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 light:text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{t('hero.perks.honest')}</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 light:text-slate-700">
                <Lock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{t('hero.perks.secure')}</span>
              </div>
            </div>

          </div>

          {/* Right Tech Console Workstation Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-flame-500/30 via-crimson-500/30 to-electric-500/30 blur-lg opacity-75"></div>

              {/* Main Workstation Card */}
              <div className="relative rounded-2xl bg-midnight-950/90 light:bg-white border border-flame-500/30 light:border-slate-300 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
                
                {/* Console Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 light:border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-crimson-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-flame-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="ml-2 font-mono text-xs text-slate-400 light:text-slate-500">mrtechcare-diagnostics://live</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="text-[10px] font-mono font-medium text-emerald-400 light:text-emerald-700 uppercase tracking-wider">Ready</span>
                  </div>
                </div>

                {/* Console Body */}
                <div className="mt-4 space-y-3 font-mono text-xs">
                  
                  {/* System Status Row */}
                  <div className="p-3 rounded-lg bg-midnight-900/90 light:bg-slate-50 border border-white/5 light:border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Terminal className="w-4 h-4 text-electric-400" />
                      <span className="text-slate-300 light:text-slate-600">Diagnostic Operator</span>
                    </div>
                    <span className="text-white light:text-slate-900 font-semibold">Raja Kumar</span>
                  </div>

                  {/* Remote Support Engine */}
                  <div className="p-3 rounded-lg bg-midnight-900/90 light:bg-slate-50 border border-white/5 light:border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-flame-400" />
                        <span className="text-slate-300 light:text-slate-600">Remote Engine</span>
                      </div>
                      <span className="text-flame-400 light:text-flame-600 font-semibold text-[11px]">AnyDesk / TeamViewer</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 light:text-slate-500 pt-1 border-t border-white/5 light:border-slate-200">
                      <span>Pan-India Connectivity</span>
                      <span className="text-emerald-400 light:text-emerald-600 font-bold">Encrypted 256-bit</span>
                    </div>
                  </div>

                  {/* Doorstep Dispatch */}
                  <div className="p-3 rounded-lg bg-midnight-900/90 light:bg-slate-50 border border-white/5 light:border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-flame-500" />
                        <span className="text-slate-300 light:text-slate-600">Doorstep Dispatch</span>
                      </div>
                      <span className="text-flame-500 font-semibold text-[11px]">Delhi NCR</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['Delhi', 'Noida', 'Ghaziabad', 'Greater Noida'].map((city) => (
                        <span key={city} className="px-2 py-0.5 rounded bg-white/5 light:bg-slate-200 border border-white/10 light:border-slate-300 text-[10px] text-slate-300 light:text-slate-700">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Service Spectrum */}
                  <div className="p-3 rounded-lg bg-midnight-900/90 light:bg-slate-50 border border-white/5 light:border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-400 light:text-slate-500">Hardware & Software Spectrum</span>
                      <span className="text-electric-400 light:text-electric-600 font-bold">11 Services</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 light:text-slate-700">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-flame-500 shrink-0" />
                        <span>Windows & Boot</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-electric-400 shrink-0" />
                        <span>SSD / RAM Speed</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-flame-500 shrink-0" />
                        <span>Laptop Hardware</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-crimson-400 shrink-0" />
                        <span>Android & iPhone</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Console Footer Status */}
                <div className="mt-4 pt-3 border-t border-white/10 light:border-slate-200 flex items-center justify-between text-[11px] text-slate-400 light:text-slate-500">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Authorized Solutions Only
                  </span>
                  <a
                    href={`tel:+919990946044`}
                    className="text-flame-500 font-medium font-mono hover:underline"
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
