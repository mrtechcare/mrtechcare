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
  Monitor
} from 'lucide-react';

export const Hero = () => {
  const { t, language } = useLanguage();

  const heroWhatsAppMsg = language === 'hi'
    ? 'नमस्ते राजा जी, मुझे अपने सिस्टम की समस्या के समाधान के लिए सर्विस बुक करनी है।'
    : 'Hello Raja ji, I would like to book a service for my device troubleshooting.';

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-radial-glow bg-tech-grid">
      
      {/* Background Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/25 w-fit mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-electric-400 animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wide text-electric-400 uppercase">
                {t('hero.badge')}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              {t('hero.headlineStart')}{' '}
              <span className="bg-gradient-to-r from-electric-400 via-cyan-300 to-electric-glow bg-clip-text text-transparent">
                {t('hero.headlineHighlight')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3 text-lg sm:text-xl font-semibold text-slate-200">
              {t('hero.subtitle')}
            </p>

            {/* Description */}
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {t('hero.description')}
            </p>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-electric-500 hover:bg-electric-600 rounded-xl shadow-glow-sm hover:shadow-glow-md active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-400"
              >
                <span>{t('hero.bookBtn')}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-200 bg-white/5 hover:bg-white/10 hover:text-white border border-white/15 rounded-xl transition-all duration-200"
              >
                <span>{t('hero.exploreBtn')}</span>
              </a>

              <a
                href={createWhatsAppLink(heroWhatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>{t('hero.whatsappBtn')}</span>
              </a>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                <span>{t('hero.perks.doorstep')}</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <Globe2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{t('hero.perks.remote')}</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{t('hero.perks.honest')}</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <Lock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{t('hero.perks.secure')}</span>
              </div>
            </div>

          </div>

          {/* Right Tech Console Workstation Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-electric-500/30 via-cyan-500/20 to-electric-600/30 blur-lg opacity-75"></div>

              {/* Main Workstation Card */}
              <div className="relative rounded-2xl bg-midnight-950/90 border border-electric-500/30 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
                
                {/* Console Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="ml-2 font-mono text-xs text-slate-400">mrtechcare-diagnostics://live</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="text-[10px] font-mono font-medium text-emerald-400 uppercase tracking-wider">Ready</span>
                  </div>
                </div>

                {/* Console Body */}
                <div className="mt-4 space-y-3 font-mono text-xs">
                  
                  {/* System Status Row */}
                  <div className="p-3 rounded-lg bg-midnight-900/90 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Terminal className="w-4 h-4 text-electric-400" />
                      <span className="text-slate-300">Diagnostic Operator</span>
                    </div>
                    <span className="text-white font-semibold">Raja Kumar</span>
                  </div>

                  {/* Remote Support Engine */}
                  <div className="p-3 rounded-lg bg-midnight-900/90 border border-white/5 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-cyan-400" />
                        <span className="text-slate-300">Remote Engine</span>
                      </div>
                      <span className="text-cyan-300 font-semibold text-[11px]">AnyDesk / TeamViewer</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-white/5">
                      <span>Pan-India Connectivity</span>
                      <span className="text-emerald-400">Encrypted 256-bit</span>
                    </div>
                  </div>

                  {/* Doorstep Dispatch */}
                  <div className="p-3 rounded-lg bg-midnight-900/90 border border-white/5 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-electric-400" />
                        <span className="text-slate-300">Doorstep Dispatch</span>
                      </div>
                      <span className="text-electric-400 font-semibold text-[11px]">Delhi NCR</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['Delhi', 'Noida', 'Ghaziabad', 'Greater Noida'].map((city) => (
                        <span key={city} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-slate-300">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Service Spectrum */}
                  <div className="p-3 rounded-lg bg-midnight-900/90 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-400">Hardware & Software Spectrum</span>
                      <span className="text-electric-400">11 Services</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-electric-400 shrink-0" />
                        <span>Windows & Boot</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-electric-400 shrink-0" />
                        <span>SSD / RAM Speed</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-electric-400 shrink-0" />
                        <span>Laptop Hardware</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-electric-400 shrink-0" />
                        <span>Android & iPhone</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Console Footer Status */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Authorized Solutions Only
                  </span>
                  <a
                    href={`tel:+919990946044`}
                    className="text-electric-400 hover:text-electric-300 font-medium font-mono"
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
