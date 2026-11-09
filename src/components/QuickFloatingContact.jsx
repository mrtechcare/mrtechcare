import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { createWhatsAppLink } from '../utils/whatsapp';
import { MessageSquare, X, PhoneCall } from 'lucide-react';

export const QuickFloatingContact = () => {
  const { language } = useLanguage();
  const [isDismissed, setIsDismissed] = useState(false);

  const defaultMsg = language === 'hi'
    ? 'नमस्ते राजा जी, मुझे टेक्निकल सहायता / रिपेयर के बारे में जानकारी चाहिए।'
    : 'Hello Raja ji, I need help with technical support / repair service.';

  if (isDismissed) {
    return (
      <a
        href={createWhatsAppLink(defaultMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:scale-110 text-white flex items-center justify-center shadow-2xl transition-all duration-300"
        aria-label="Direct WhatsApp Chat"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group">
      
      {/* Floating Prompt Pill - High contrast in both Day and Night modes */}
      <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-midnight-950 border border-emerald-500/40 text-slate-900 dark:text-white shadow-xl backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
        <span className="text-xs font-bold">
          {language === 'hi' ? 'व्हाट्सएप पर सहायता पाएं' : 'Instant WhatsApp Help'}
        </span>
        <button
          onClick={() => setIsDismissed(true)}
          className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white ml-1 p-0.5"
          aria-label="Dismiss prompt"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Action Circle Button with Radiant Glow */}
      <a
        href={createWhatsAppLink(defaultMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-emerald-400 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Chat with Raja Kumar on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-flame-400 rounded-full animate-ping opacity-75"></span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-flame-500 rounded-full"></span>
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>

    </div>
  );
};
