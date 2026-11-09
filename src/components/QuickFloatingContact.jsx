import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { createWhatsAppLink } from '../utils/whatsapp';
import { MessageSquare, X } from 'lucide-react';

export const QuickFloatingContact = () => {
  const { language } = useLanguage();
  const [isDismissed, setIsDismissed] = useState(false);

  const defaultMsg = language === 'hi'
    ? 'नमस्ते राजा जी, मुझे टेक्निकल सहायता / रिपेयर के बारे में जानकारी चाहिए।'
    : 'Hello Raja ji, I need help with technical support / repair service.';

  return (
    <aside 
      aria-label="Direct WhatsApp Support" 
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 group pointer-events-auto select-none"
    >
      {/* Floating Prompt Pill - Hidden on mobile screens so it never covers buttons or content */}
      {!isDismissed && (
        <div className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-midnight-950 border border-emerald-500/40 text-slate-900 dark:text-white shadow-xl backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-xs font-bold whitespace-nowrap">
            {language === 'hi' ? 'व्हाट्सएप पर सहायता पाएं' : 'Instant WhatsApp Help'}
          </span>
          <button
            onClick={() => setIsDismissed(true)}
            className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white ml-1 p-0.5 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500"
            aria-label="Dismiss WhatsApp prompt"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Action Circle Button - Compact 48px on mobile, 56px on desktop */}
      <a
        href={createWhatsAppLink(defaultMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-emerald-400 text-white shadow-xl hover:scale-105 active:scale-95 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
        aria-label="Chat directly with Raja Kumar on WhatsApp"
        title="Chat on WhatsApp (+91 99909 46044)"
      >
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-flame-400 rounded-full animate-ping opacity-75"></span>
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-flame-500 rounded-full"></span>
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
      </a>
    </aside>
  );
};
