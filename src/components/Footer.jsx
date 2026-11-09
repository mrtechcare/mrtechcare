import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  DISPLAY_PHONE, 
  BUSINESS_EMAIL, 
  OWNER_NAME, 
  createWhatsAppLink 
} from '../utils/whatsapp';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  ArrowUp, 
  ShieldCheck, 
  Heart,
  Globe2,
  Flame
} from 'lucide-react';

export const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-midnight-950 light:bg-slate-900 text-slate-400 border-t border-white/10 pt-16 pb-12 relative overflow-hidden transition-colors">
      
      {/* Top Subtle Border Highlight with Fire & Electric Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-flame-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-flame-500 via-crimson-600 to-electric-600 border border-flame-400/40 text-white font-mono font-black text-sm">
                MC
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                MRTECH<span className="text-flame-500">CARE</span>
              </span>
            </div>

            <p className="text-xs text-flame-400 font-bold tracking-wider uppercase">
              {t('footer.tagline')}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {t('footer.bio')}
            </p>

            <div className="pt-2 text-xs text-slate-300 font-mono">
              <span>Operated by: </span>
              <span className="text-white font-bold">{OWNER_NAME}</span>
            </div>
          </div>

          {/* Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-flame-400 transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-flame-400 transition-colors">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-flame-400 transition-colors">
                  {t('nav.estimator')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-flame-400 transition-colors">
                  {t('nav.pricing')}
                </a>
              </li>
              <li>
                <a href="#remote-support" className="hover:text-flame-400 transition-colors">
                  {t('nav.remote')}
                </a>
              </li>
              <li>
                <a href="#doorstep-service" className="hover:text-flame-400 transition-colors">
                  {t('nav.doorstep')}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-flame-400 transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-flame-400 transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('footer.coverage')}
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-flame-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold">Doorstep Repair:</span>
                  <p className="text-slate-400 mt-0.5">Delhi, Noida, Ghaziabad & Greater Noida</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Globe2 className="w-3.5 h-3.5 text-electric-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold">Remote IT Support:</span>
                  <p className="text-slate-400 mt-0.5">Across all Indian states & Union Territories</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-block text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Mon - Sun: 9:00 AM - 9:00 PM
              </span>
            </div>
          </div>

          {/* Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('footer.contactInfo')}
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div>
                <span className="text-slate-400 block">Phone / WhatsApp:</span>
                <a
                  href="tel:+919990946044"
                  className="text-white hover:text-flame-400 font-bold font-mono transition-colors"
                >
                  {DISPLAY_PHONE}
                </a>
              </div>

              <div>
                <span className="text-slate-400 block">Email:</span>
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="text-white hover:text-flame-400 font-mono transition-colors break-all"
                >
                  {BUSINESS_EMAIL}
                </a>
              </div>

              <div>
                <span className="text-slate-400 block">Official Website:</span>
                <a
                  href="https://mrtechcare.in"
                  className="text-flame-400 hover:underline font-mono"
                >
                  mrtechcare.in
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={createWhatsAppLink("Hello Raja ji, I want to inquire about MrTech Care service.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 text-xs font-semibold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          
          <div className="text-center md:text-left">
            <p>
              © {currentYear} MrTech Care. {t('footer.rights')}
            </p>
            <p className="mt-1 text-[11px] text-slate-500 max-w-2xl">
              {t('footer.disclaimer')}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors text-xs"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </footer>
  );
};
