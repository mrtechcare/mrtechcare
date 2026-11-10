import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { createWhatsAppLink } from '../utils/whatsapp';
import { MessageSquare, X } from 'lucide-react';

export const QuickFloatingContact = () => {
  const { language } = useLanguage();
  const [isPromptDismissed, setIsPromptDismissed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const defaultMsg = language === 'hi'
    ? 'नमस्ते Team MrTech Care, मुझे टेक्निकल सहायता / रिपेयर के बारे में जानकारी चाहिए।'
    : 'Hello Team MrTech Care, I need help with technical support / repair service.';

  return (
    <aside 
      aria-label="Direct WhatsApp Support" 
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex items-center justify-end group pointer-events-auto select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Prompt Pill - Revealed ONLY on hover/focus on desktop, completely unmounted when not active */}
      {!isPromptDismissed && isHovered && (
        <div 
          className="hidden lg:flex items-center gap-2 mr-2 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-midnight-950/95 border border-emerald-500/30 text-slate-900 dark:text-white shadow-lg backdrop-blur-md animate-fadeIn"
          role="tooltip"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-xs font-bold whitespace-nowrap">
            {language === 'hi' ? 'व्हाट्सएप सहायता' : 'Instant WhatsApp Help'}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsPromptDismissed(true);
            }}
            className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white ml-1 p-0.5 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500"
            aria-label="Dismiss WhatsApp prompt"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Action Circle Button - Compact 48px on mobile, 52px on desktop */}
      <a
        href={createWhatsAppLink(defaultMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-emerald-400 text-white shadow-xl hover:scale-105 active:scale-95 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
        aria-label="Chat directly with Team MrTech Care on WhatsApp"
        title="Chat on WhatsApp (+91 99909 46044)"
      >
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-flame-400 rounded-full animate-ping opacity-75"></span>
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-flame-500 rounded-full"></span>
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
      </a>
    </aside>
  );
};
