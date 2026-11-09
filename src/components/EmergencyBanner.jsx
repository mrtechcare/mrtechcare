import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { createWhatsAppLink, DISPLAY_PHONE } from '../utils/whatsapp';
import { Flame, PhoneCall, MessageSquare, AlertCircle } from 'lucide-react';

export const EmergencyBanner = () => {
  const { t, language } = useLanguage();

  const emergencyWhatsAppMsg = language === 'hi'
    ? '🚨 EMERGENCY: नमस्ते राजा जी, मेरा कंप्यूटर / लैपटॉप अचानक बंद हो गया है। मुझे तुरंत सहायता चाहिए।'
    : '🚨 EMERGENCY: Hello Raja ji, my computer / laptop broke down unexpectedly. I need urgent priority assistance.';

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-crimson-600 via-flame-600 to-crimson-600 text-white shadow-lg border-b border-orange-400/30">
      
      {/* Background Subtle Shimmer */}
      <div className="absolute inset-0 bg-white/10 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          
          {/* Left Alert Headline */}
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 shrink-0 animate-bounce">
              <Flame className="w-4 h-4 text-amber-200 fill-current" />
            </span>
            <div className="text-xs sm:text-sm font-medium">
              <span className="font-extrabold uppercase tracking-wider text-amber-200 mr-2">
                {t('emergency.badge')}
              </span>
              <span className="font-semibold text-white">
                {t('emergency.title')}
              </span>
              <span className="hidden lg:inline text-white/90 ml-1.5 font-normal">
                — {t('emergency.subtitle')}
              </span>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="tel:+919990946044"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white text-crimson-700 hover:bg-slate-100 text-xs font-bold shadow-sm transition-all active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5 fill-current" />
              <span>{t('emergency.callBtn')}</span>
            </a>

            <a
              href={createWhatsAppLink(emergencyWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/25 hover:bg-black/35 text-white text-xs font-bold border border-white/20 transition-all active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current text-amber-300" />
              <span>{t('emergency.chatBtn')}</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
