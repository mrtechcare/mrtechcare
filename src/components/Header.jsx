import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { BrandLogo } from './BrandLogo';
import { DISPLAY_PHONE, OWNER_NAME, createWhatsAppLink } from '../utils/whatsapp';
import { 
  Menu, 
  X, 
  Phone, 
  MessageSquare, 
  Globe, 
  Sun, 
  Moon, 
  Sparkles,
  Flame,
  Wrench,
  Tag,
  Globe2,
  Camera,
  UserCheck,
  LayoutGrid
} from 'lucide-react';

export const Header = ({ activeTab, onTabChange }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme, isDark } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'overview', label: language === 'hi' ? 'होम / ओवरव्यू' : 'Overview', icon: LayoutGrid },
    { id: 'services', label: language === 'hi' ? 'सेवाएं (11)' : 'Services (11)', icon: Wrench },
    { id: 'pricing', label: language === 'hi' ? 'मूल्य सूची' : 'Pricing & Cost', icon: Tag },
    { id: 'coverage', label: language === 'hi' ? 'डोरस्टेप व रिमोट' : 'Coverage', icon: Globe2 },
    { id: 'gallery', label: language === 'hi' ? 'फोटो गैलरी' : 'Photo Lab', icon: Camera },
    { id: 'contact', label: language === 'hi' ? 'संपर्क व परिचय' : 'About & Contact', icon: UserCheck },
  ];

  const handleTabClick = (tabId) => {
    onTabChange(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const defaultWhatsAppMsg = language === 'hi'
    ? 'नमस्ते राजा जी, मुझे अपने डिवाइस रिपेयर / टेक्निकल सपोर्ट के बारे में बात करनी है।'
    : 'Hello Raja ji, I need assistance with computer / mobile repair support.';

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 dark:bg-midnight-950/90 border-b border-slate-200 dark:border-white/10 shadow-sm transition-colors duration-200">
      
      {/* Top Urgent Emergency Alert Strip - No Absolute Overlaps! */}
      <div className="bg-gradient-to-r from-crimson-600 via-flame-600 to-crimson-600 text-white text-[11px] sm:text-xs py-1.5 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-1.5 font-medium truncate">
            <span className="flex items-center justify-center w-4 h-4 rounded-full bg-white/20 shrink-0">
              <Flame className="w-3 h-3 text-amber-200 fill-current" />
            </span>
            <span className="font-bold text-amber-200 uppercase tracking-wider">Urgent:</span>
            <span className="truncate">Same-day doorstep in Delhi NCR • 5-min Remote Connect Pan-India</span>
          </div>

          <div className="flex items-center gap-3 shrink-0 ml-auto">
            <a 
              href="tel:+919990946044" 
              className="text-white hover:text-amber-200 font-bold flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3 fill-current" />
              <span>{DISPLAY_PHONE}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo with Custom MTC Monogram and Cooljazz Handwritten Name */}
          <button
            onClick={() => handleTabClick('overview')}
            type="button"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500 rounded-lg"
          >
            <BrandLogo size="md" showText={true} />
          </button>

          {/* Desktop Horizontal Pages / Tabs Bar */}
          <nav className="hidden xl:flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-midnight-900 border border-slate-200 dark:border-white/10" aria-label="Page Tabs">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  type="button"
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-flame-500 to-crimson-600 text-white shadow-glow-orange font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5'
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools: Day/Night Theme + Lang + WhatsApp */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Theme Toggle Button (Day Mode / Night Mode) */}
            <button
              onClick={toggleTheme}
              type="button"
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-100 dark:bg-midnight-900 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500"
              aria-label={isDark ? "Switch to Day Mode" : "Switch to Night Mode"}
              title={isDark ? "Day Mode (Light)" : "Night Mode (Dark)"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-electric-600" />
              )}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-midnight-900 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-flame-500" />
              <span>{language === 'en' ? 'हिन्दी' : 'EN'}</span>
            </button>

            {/* WhatsApp CTA */}
            <a
              href={createWhatsAppLink(defaultWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 active:scale-95 rounded-xl shadow-sm transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-midnight-900 rounded-xl border border-slate-200 dark:border-white/10 xl:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Tabs Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

        {/* Secondary Horizontal Tabs bar on Tablets / Mobile */}
        <div className="flex xl:hidden items-center gap-1 overflow-x-auto py-2 mt-2 scrollbar-none border-t border-slate-100 dark:border-white/5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                type="button"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-flame-500 to-crimson-600 text-white font-bold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-midnight-900 hover:bg-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-midnight-950 border-b border-slate-200 dark:border-white/10 px-4 pt-2 pb-5 shadow-2xl">
          <div className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  type="button"
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-flame-500/10 text-flame-600 dark:text-flame-400 font-bold border border-flame-500/30'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-flame-500" />
                    <span>{tab.label}</span>
                  </div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-flame-500"></span>}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2.5">
            <a
              href={createWhatsAppLink(defaultWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-white bg-gradient-to-r from-flame-500 to-crimson-600 rounded-xl shadow-glow-orange"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{t('nav.whatsappCta')}</span>
            </a>

            <div className="flex items-center justify-between text-xs text-slate-500 px-1 pt-1">
              <span>{OWNER_NAME} — Delhi NCR</span>
              <a href="tel:+919990946044" className="text-flame-500 font-bold">
                {DISPLAY_PHONE}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
