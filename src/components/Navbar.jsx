import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
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
  Calculator,
  Flame
} from 'lucide-react';

export const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme, isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#services', label: t('nav.services') },
    { href: '#estimator', label: t('nav.estimator') },
    { href: '#pricing', label: t('nav.pricing') },
    { href: '#remote-support', label: t('nav.remote') },
    { href: '#doorstep-service', label: t('nav.doorstep') },
    { href: '#about', label: t('nav.about') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const defaultWhatsAppMsg = language === 'hi'
    ? 'नमस्ते राजा जी, मुझे अपने डिवाइस रिपेयर / टेक्निकल सपोर्ट के बारे में बात करनी है।'
    : 'Hello Raja ji, I need assistance with computer / mobile repair support.';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-midnight-950/90 light:bg-white/90 backdrop-blur-md border-b border-white/10 light:border-slate-200 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500 rounded-lg p-1"
            aria-label="MrTech Care Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-flame-500 via-crimson-600 to-electric-600 border border-flame-400/40 shadow-glow-orange group-hover:scale-105 transition-all duration-300">
              <span className="font-mono font-black text-white text-base tracking-wider">MC</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping opacity-75"></span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full"></span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white light:text-slate-900 group-hover:text-flame-500 transition-colors">
                  MRTECH<span className="text-flame-500">CARE</span>
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-400 light:text-slate-500 tracking-wide">
                Your Tech. Our Care.
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-900 hover:bg-white/5 light:hover:bg-slate-100 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            
            {/* Theme Toggle Button (Day / Night) */}
            <button
              onClick={toggleTheme}
              type="button"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/5 light:bg-slate-100 hover:bg-white/10 light:hover:bg-slate-200 border border-white/10 light:border-slate-300 text-slate-200 light:text-slate-700 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500"
              aria-label={isDark ? t('theme.toggleToLight') : t('theme.toggleToDark')}
              title={isDark ? t('theme.toggleToLight') : t('theme.toggleToDark')}
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 light:text-slate-700 bg-white/5 light:bg-slate-100 hover:bg-white/10 light:hover:bg-slate-200 border border-white/10 light:border-slate-300 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500"
              aria-label={`Switch to ${language === 'en' ? 'Hindi' : 'English'}`}
            >
              <Globe className="w-3.5 h-3.5 text-electric-400 light:text-electric-600" />
              <span>{t('nav.langSwitch')}</span>
            </button>

            {/* Direct WhatsApp Action with Vibrant Gradient */}
            <a
              href={createWhatsAppLink(defaultWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-flame-500 to-crimson-600 hover:from-flame-600 hover:to-crimson-700 active:scale-95 rounded-lg shadow-glow-orange hover:shadow-glow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-flame-500"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{t('nav.whatsappCta')}</span>
            </a>
          </div>

          {/* Mobile Menu Trigger & Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              type="button"
              className="p-1.5 rounded-full bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-300 text-slate-200 light:text-slate-700"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-electric-600" />}
            </button>

            {/* Mobile Lang Toggle */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-slate-200 light:text-slate-700 bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-300 rounded-full"
              aria-label="Toggle language"
            >
              <Globe className="w-3 h-3 text-electric-400" />
              <span>{language === 'en' ? 'हिं' : 'EN'}</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 text-slate-300 light:text-slate-700 hover:text-white bg-white/5 light:bg-slate-100 rounded-lg border border-white/10 light:border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? t('nav.menuClose') : t('nav.menuOpen')}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-midnight-950/98 light:bg-white/98 backdrop-blur-xl border-b border-white/10 light:border-slate-200 px-4 pt-3 pb-6 animate-fadeIn shadow-2xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="px-4 py-2.5 text-base font-medium text-slate-200 light:text-slate-800 hover:text-white light:hover:text-flame-600 hover:bg-white/5 light:hover:bg-slate-100 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-white/10 light:border-slate-200 flex flex-col gap-3">
            <a
              href={createWhatsAppLink(defaultWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-white bg-gradient-to-r from-flame-500 to-crimson-600 rounded-lg shadow-glow-orange"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{t('nav.whatsappCta')}</span>
            </a>

            <div className="flex items-center justify-between text-xs text-slate-400 light:text-slate-500 px-2 pt-1">
              <span>{OWNER_NAME} — Delhi NCR</span>
              <a href={`tel:+919990946044`} className="text-flame-500 font-bold hover:underline">
                {DISPLAY_PHONE}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
