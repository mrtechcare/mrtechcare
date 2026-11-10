import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { BrandLogo } from './BrandLogo';
import { DISPLAY_PHONE, TEAM_NAME, createWhatsAppLink } from '../utils/whatsapp';
import { 
  Menu, 
  X, 
  Phone, 
  MessageSquare, 
  Globe, 
  Sun, 
  Moon, 
  Wrench, 
  Tag, 
  Globe2, 
  Camera, 
  UserCheck, 
  LayoutGrid,
  CheckCircle2,
  FileText,
  Star,
  ShieldCheck,
  ChevronDown,
  Smartphone
} from 'lucide-react';

export const Header = ({ activeTab, onTabChange, onOpenPortal }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme, isDark } = useTheme();
  const { user, isAuthenticated } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'overview', label: language === 'hi' ? 'ओवरव्यू' : 'Overview', icon: LayoutGrid },
    { id: 'services', label: language === 'hi' ? 'सेवाएं' : 'Services', icon: Wrench },
    { id: 'pricing', label: language === 'hi' ? 'मूल्य' : 'Pricing', icon: Tag },
    { id: 'quotes', label: language === 'hi' ? 'कोटेशन' : 'Quotes', icon: FileText },
    { id: 'coverage', label: language === 'hi' ? 'कवरेज' : 'Coverage', icon: Globe2 },
    { id: 'gallery', label: language === 'hi' ? 'गैलरी' : 'Gallery', icon: Camera },
    { id: 'feedback', label: language === 'hi' ? 'समीक्षा' : 'Reviews', icon: Star },
    { id: 'contact', label: language === 'hi' ? 'संपर्क' : 'Contact', icon: UserCheck },
  ];

  const handleTabClick = (tabId) => {
    onTabChange(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const defaultWhatsAppMsg = language === 'hi'
    ? 'नमस्ते Team MrTech Care, मुझे अपने डिवाइस रिपेयर / टेक्निकल सपोर्ट के बारे में बात करनी है।'
    : 'Hello Team MrTech Care, I need assistance with technical support / service.';

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-midnight-950 border-b border-slate-200 dark:border-white/10 shadow-xs transition-colors duration-200">
      
      {/* Top Authentic Service Coverage Strip */}
      <div className="bg-gradient-to-r from-slate-900 via-midnight-800 to-slate-900 dark:from-midnight-950 dark:via-midnight-900 dark:to-midnight-950 text-white text-[11px] sm:text-xs py-1.5 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-1.5 font-medium truncate">
            <span className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            </span>
            <span className="font-bold text-flame-400 uppercase tracking-wider">{t('topBar.label')}</span>
            <span className="truncate text-slate-200">{t('topBar.text')}</span>
          </div>

          <div className="flex items-center gap-3 shrink-0 ml-auto">
            <a 
              href="tel:+919990946044" 
              className="text-white hover:text-flame-400 font-bold flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-flame-400 rounded px-1"
              aria-label="Call +91 99909 46044"
            >
              <Phone className="w-3 h-3 fill-current text-flame-400" />
              <span className="font-mono">{DISPLAY_PHONE}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-4 2xl:px-8 py-2 sm:py-2.5">
        <div className="flex items-center justify-between gap-2 xl:gap-2.5 2xl:gap-3">
          
          {/* Brand Logo with Custom MTC Monogram and Cooljazz Handwritten Name */}
          <button
            onClick={() => handleTabClick('overview')}
            type="button"
            className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500 rounded-lg text-left"
            aria-label="MrTech Care - Back to Overview"
          >
            <BrandLogo size="md" showText={true} />
          </button>

          {/* Desktop Horizontal Pages / Tabs Bar */}
          <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1 p-1 rounded-xl bg-slate-100 dark:bg-midnight-900 border border-slate-200 dark:border-white/10 shrink" aria-label="Page Tabs">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isServiceGroup = tab.id === 'services';
              const isActive = activeTab === tab.id || (isServiceGroup && (activeTab === 'web-dev' || activeTab === 'app-dev'));

              if (isServiceGroup) {
                return (
                  <div key={tab.id} className="relative group">
                    <button
                      onClick={() => handleTabClick('services')}
                      type="button"
                      className={`flex items-center gap-1 xl:gap-1.5 px-2 xl:px-2 2xl:px-3 py-1.5 rounded-lg text-[11px] 2xl:text-xs font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500 whitespace-nowrap ${
                        isActive
                          ? 'bg-gradient-to-r from-flame-500 to-crimson-600 text-white shadow-sm'
                          : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/80 dark:hover:bg-white/5'
                      }`}
                      aria-selected={isActive}
                      role="tab"
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} />
                      <span>{tab.label}</span>
                      <ChevronDown className="w-2.5 h-2.5 opacity-70 group-hover:rotate-180 transition-transform duration-200 shrink-0" />
                    </button>

                    {/* Flyout Dropdown for Quick Access to Web & App Dev */}
                    <div className="absolute top-full left-0 mt-1.5 w-56 p-1.5 rounded-xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-150 z-50">
                      <button
                        onClick={() => handleTabClick('services')}
                        type="button"
                        className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 flex items-center justify-between"
                      >
                        <span>{language === 'hi' ? 'सभी 30 सेवाएं (कैटलॉग)' : 'All 30 Services'}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300 font-mono">30</span>
                      </button>
                      <button
                        onClick={() => handleTabClick('web-dev')}
                        type="button"
                        className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center justify-between transition-colors ${
                          activeTab === 'web-dev'
                            ? 'bg-flame-50 dark:bg-flame-500/10 text-flame-600 dark:text-flame-400'
                            : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-flame-500" />
                          <span>{language === 'hi' ? 'वेबसाइट डेवलपमेंट' : 'Website Development'}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">₹4,999+</span>
                      </button>
                      <button
                        onClick={() => handleTabClick('app-dev')}
                        type="button"
                        className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center justify-between transition-colors ${
                          activeTab === 'app-dev'
                            ? 'bg-blue-50 dark:bg-electric-500/10 text-electric-600 dark:text-electric-400'
                            : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <Smartphone className="w-3.5 h-3.5 text-electric-400" />
                          <span>{language === 'hi' ? 'मोबाइल ऐप डेवलपमेंट' : 'App Development'}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">₹9,999+</span>
                      </button>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  type="button"
                  className={`flex items-center gap-1 xl:gap-1.5 px-2 xl:px-2 2xl:px-3 py-1.5 rounded-lg text-[11px] 2xl:text-xs font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500 whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-flame-500 to-crimson-600 text-white shadow-sm'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/80 dark:hover:bg-white/5'
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools: Interactive Theme Switcher + Lang + WhatsApp */}
          <div className="flex items-center gap-1.5 sm:gap-2 2xl:gap-2.5 shrink-0">
            
            {/* Dedicated Day/Night Pill Switcher with high contrast in both modes */}
            <div className="flex items-center p-0.5 rounded-xl bg-slate-100 dark:bg-midnight-900 border border-slate-200 dark:border-white/10 shadow-xs shrink-0">
              <button
                onClick={() => isDark && toggleTheme()}
                type="button"
                className={`flex items-center gap-1 px-2 2xl:px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-flame-500 ${
                  !isDark 
                    ? 'bg-white text-flame-600 shadow-xs border border-slate-200' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                aria-pressed={!isDark}
                title="Switch to Day Mode (Clean White & Colorful)"
              >
                <Sun className={`w-3.5 h-3.5 shrink-0 ${!isDark ? 'text-amber-500 fill-amber-400' : 'text-slate-400'}`} />
                <span className="hidden sm:inline xl:hidden 2xl:inline">Day</span>
              </button>

              <button
                onClick={() => !isDark && toggleTheme()}
                type="button"
                className={`flex items-center gap-1 px-2 2xl:px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-flame-500 ${
                  isDark 
                    ? 'bg-midnight-800 text-electric-400 shadow-xs border border-white/10' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                aria-pressed={isDark}
                title="Switch to Dark Mode (Midnight Navy)"
              >
                <Moon className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-cyan-400 fill-cyan-400' : 'text-slate-400'}`} />
                <span className="hidden sm:inline xl:hidden 2xl:inline">Dark</span>
              </button>
            </div>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="inline-flex items-center gap-1 px-2 2xl:px-2.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-midnight-900 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500 shrink-0"
              aria-label={`Switch to ${language === 'en' ? 'Hindi' : 'English'}`}
            >
              <Globe className="w-3.5 h-3.5 text-flame-600 dark:text-flame-400 shrink-0" />
              <span>{language === 'en' ? 'हिन्दी' : 'EN'}</span>
            </button>

            {/* Customer Portal / Account Button */}
            <button
              onClick={onOpenPortal}
              type="button"
              className={`inline-flex items-center gap-1.5 px-2 2xl:px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500 ${
                isAuthenticated
                  ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30'
                  : 'bg-slate-100 dark:bg-midnight-900 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'
              }`}
              title={isAuthenticated ? 'Logged In - View Service History' : 'Customer Login & Track Repairs'}
            >
              {isAuthenticated ? (
                <>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="hidden sm:inline font-mono">{user?.phone ? user.phone.slice(-4) : 'Account'}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                </>
              ) : (
                <>
                  <UserCheck className="w-3.5 h-3.5 text-flame-500 shrink-0" />
                  <span className="hidden sm:inline">{language === 'hi' ? 'लॉगिन' : 'Portal'}</span>
                </>
              )}
            </button>

            {/* WhatsApp CTA */}
            <a
              href={createWhatsAppLink(defaultWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 2xl:px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 active:scale-95 rounded-xl shadow-xs transition-all shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current shrink-0" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Trigger (min 44x44px for accessibility) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-midnight-900 rounded-xl border border-slate-200 dark:border-white/10 xl:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? t('nav.menuClose') : t('nav.menuOpen')}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

        {/* Horizontal Tabs Bar on Mobile & Tablet */}
        <div className="flex xl:hidden items-center gap-1.5 overflow-x-auto py-2 mt-2 scrollbar-none border-t border-slate-100 dark:border-white/5 -mx-4 px-4 sm:mx-0 sm:px-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                type="button"
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500 ${
                  isActive
                    ? 'bg-gradient-to-r from-flame-500 to-crimson-600 text-white shadow-xs'
                    : 'text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-midnight-900 hover:bg-slate-200 dark:hover:bg-white/5 border border-slate-200 dark:border-white/5'
                }`}
              >
                <Icon className={`w-3 h-3 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-midnight-950 border-b border-slate-200 dark:border-white/10 px-4 pt-2 pb-5 shadow-2xl animate-fadeIn">
          <div className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <React.Fragment key={tab.id}>
                  <button
                    onClick={() => handleTabClick(tab.id)}
                    type="button"
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-colors ${
                      isActive
                        ? 'bg-flame-50 dark:bg-flame-500/10 text-flame-600 dark:text-flame-400 border border-flame-200 dark:border-flame-500/30'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-flame-500" />
                      <span>{tab.label}</span>
                    </div>
                    {isActive && <span className="w-2 h-2 rounded-full bg-flame-500"></span>}
                  </button>

                  {/* Sub-links for Website & App Development in Mobile Drawer */}
                  {tab.id === 'services' && (
                    <div className="pl-6 pr-2 py-1 space-y-1">
                      <button
                        onClick={() => handleTabClick('web-dev')}
                        type="button"
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                          activeTab === 'web-dev'
                            ? 'bg-flame-50 dark:bg-flame-500/10 text-flame-600 dark:text-flame-400 border border-flame-200 dark:border-flame-500/30'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Globe className="w-3.5 h-3.5 text-flame-500" />
                          <span>{language === 'hi' ? 'वेबसाइट डेवलपमेंट' : 'Website Development'}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">₹4,999+</span>
                      </button>

                      <button
                        onClick={() => handleTabClick('app-dev')}
                        type="button"
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                          activeTab === 'app-dev'
                            ? 'bg-blue-50 dark:bg-electric-500/10 text-electric-600 dark:text-electric-400 border border-blue-200 dark:border-electric-500/30'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Smartphone className="w-3.5 h-3.5 text-electric-400" />
                          <span>{language === 'hi' ? 'मोबाइल ऐप डेवलपमेंट' : 'Mobile App Development'}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">₹9,999+</span>
                      </button>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenPortal();
              }}
              type="button"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold rounded-xl border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-midnight-900 text-slate-800 dark:text-slate-200 shadow-xs"
            >
              <ShieldCheck className="w-4 h-4 text-flame-500" />
              <span>{isAuthenticated ? `Logged In (${user?.phone || 'Customer'})` : (language === 'hi' ? 'ग्राहक पोर्टल एवं सेवा इतिहास' : 'Customer Portal & Service History')}</span>
            </button>

            <a
              href={createWhatsAppLink(defaultWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 text-xs font-bold text-white bg-gradient-to-r from-flame-500 to-crimson-600 rounded-xl shadow-xs"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{t('nav.whatsappCta')}</span>
            </a>

            <div className="flex items-center justify-between text-xs text-slate-500 px-1 pt-1">
              <span>{TEAM_NAME} — Delhi NCR</span>
              <a href="tel:+919990946044" className="text-flame-600 dark:text-flame-400 font-bold">
                {DISPLAY_PHONE}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
