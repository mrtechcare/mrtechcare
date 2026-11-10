import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BrandLogo } from './BrandLogo';
import { 
  DISPLAY_PHONE, 
  BUSINESS_EMAIL, 
  TEAM_NAME, 
  createWhatsAppLink 
} from '../utils/whatsapp';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  ArrowUp, 
  Globe2
} from 'lucide-react';

export const Footer = ({ onTabChange }) => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (tabId) => {
    if (onTabChange) {
      onTabChange(tabId);
    }
    scrollToTop();
  };

  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-midnight-950 dark:text-slate-400 border-t border-slate-800 dark:border-white/10 pt-12 pb-16 sm:pb-12 relative overflow-hidden transition-colors">
      
      {/* Top Subtle Border Highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-flame-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-slate-800 dark:border-white/10">
          
          {/* Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <BrandLogo size="md" showText={true} />

            <p className="text-xs text-flame-400 font-bold tracking-wider uppercase">
              {t('footer.tagline')}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-400 leading-relaxed max-w-sm font-normal">
              {t('footer.bio')}
            </p>

            <div className="pt-1 text-xs text-slate-400 font-mono">
              <span>Operations: </span>
              <span className="text-white font-bold">{TEAM_NAME}</span>
            </div>
          </div>

          {/* Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => handleNav('overview')} 
                  className="hover:text-flame-400 text-slate-300 dark:text-slate-400 transition-colors text-left"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-flame-400 text-slate-300 dark:text-slate-400 transition-colors text-left"
                >
                  {t('nav.services')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('web-dev')} 
                  className="hover:text-flame-400 text-slate-300 dark:text-slate-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>{language === 'hi' ? 'वेबसाइट डेवलपमेंट' : 'Website Development'}</span>
                  <span className="text-[10px] text-flame-400 font-mono">₹4,999+</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('app-dev')} 
                  className="hover:text-flame-400 text-slate-300 dark:text-slate-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>{language === 'hi' ? 'मोबाइल ऐप डेवलपमेंट' : 'Mobile App Development'}</span>
                  <span className="text-[10px] text-electric-400 font-mono">₹9,999+</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('pricing')} 
                  className="hover:text-flame-400 text-slate-300 dark:text-slate-400 transition-colors text-left"
                >
                  {t('nav.pricing')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('quotes')} 
                  className="hover:text-flame-400 text-slate-300 dark:text-slate-400 transition-colors text-left"
                >
                  {language === 'hi' ? 'कोटेशन एवं AMC' : 'Quotations & AMC'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('feedback')} 
                  className="hover:text-flame-400 text-slate-300 dark:text-slate-400 transition-colors text-left"
                >
                  {language === 'hi' ? 'ग्राहक समीक्षाएं' : 'Customer Feedback'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('coverage')} 
                  className="hover:text-flame-400 text-slate-300 dark:text-slate-400 transition-colors text-left"
                >
                  {t('nav.remote')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('gallery')} 
                  className="hover:text-flame-400 text-slate-300 dark:text-slate-400 transition-colors text-left"
                >
                  {t('nav.gallery')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')} 
                  className="hover:text-flame-400 text-slate-300 dark:text-slate-400 transition-colors text-left"
                >
                  {t('nav.about')}
                </button>
              </li>
            </ul>
          </div>

          {/* Service Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('footer.coverage')}
            </h3>
            
            <div className="space-y-2 text-xs text-slate-300 dark:text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-flame-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold">Doorstep Service:</span>
                  <p className="text-slate-400 mt-0.5">Delhi, Noida, Ghaziabad & Greater Noida</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Globe2 className="w-3.5 h-3.5 text-electric-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold">Remote IT Assistance:</span>
                  <p className="text-slate-400 mt-0.5">Across all Indian states via AnyDesk / TeamViewer</p>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <span className="inline-block text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                Mon - Sun: 9:00 AM - 9:00 PM
              </span>
            </div>
          </div>

          {/* Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('footer.contactInfo')}
            </h3>

            <div className="space-y-2 text-xs text-slate-300">
              <div>
                <span className="text-slate-400 block font-medium">Direct Phone / WhatsApp:</span>
                <a
                  href="tel:+919990946044"
                  className="text-white hover:text-flame-400 font-bold font-mono transition-colors text-sm"
                >
                  {DISPLAY_PHONE}
                </a>
              </div>

              <div>
                <span className="text-slate-400 block font-medium">Email Address:</span>
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="text-white hover:text-flame-400 font-mono transition-colors break-all"
                >
                  {BUSINESS_EMAIL}
                </a>
              </div>
            </div>

            <div className="pt-1.5">
              <a
                href={createWhatsAppLink("Hello Team MrTech Care, I want to inquire about MrTech Care services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-500">
          
          <div className="text-center md:text-left">
            <p>
              © {currentYear} MrTech Care. {t('footer.rights')}
            </p>
            <p className="mt-1 text-[11px] text-slate-400 dark:text-slate-500 max-w-2xl leading-normal">
              {t('footer.disclaimer')}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 dark:bg-white/5 hover:bg-slate-700 dark:hover:bg-white/10 text-slate-200 dark:text-slate-300 hover:text-white border border-slate-700 dark:border-white/10 transition-colors text-xs"
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
