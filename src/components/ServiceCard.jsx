import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getServiceBookingLink } from '../utils/whatsapp';
import { 
  Monitor, 
  Cpu, 
  Terminal, 
  Laptop, 
  HardDrive, 
  Smartphone, 
  Wrench, 
  Wifi, 
  Headphones, 
  Home, 
  Check, 
  ArrowUpRight, 
  MessageSquare, 
  ShieldCheck 
} from 'lucide-react';

const iconMap = {
  Monitor,
  Cpu,
  Terminal,
  Laptop,
  HardDrive,
  Smartphone,
  Wrench,
  Wifi,
  Headphones,
  Home,
};

export const ServiceCard = ({ service }) => {
  const { language, t } = useLanguage();
  const IconComponent = iconMap[service.icon] || Wrench;
  const content = service[language] || service.en;

  const modeBadgeText = () => {
    if (service.mode === 'doorstep') {
      return language === 'hi' ? 'डोरस्टेप (दिल्ली एनसीआर)' : 'Doorstep (Delhi NCR)';
    }
    if (service.mode === 'remote') {
      return language === 'hi' ? 'रिमोट (पूरे भारत में)' : 'Remote (Pan-India)';
    }
    return language === 'hi' ? 'डोरस्टेप व रिमोट दोनों' : 'Doorstep & Remote';
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-midnight-950 border border-slate-200 dark:border-white/10 hover:border-flame-500/60 dark:hover:border-flame-500 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      
      {/* Top Header */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-flame-50 dark:bg-flame-500/10 border border-flame-200 dark:border-flame-500/30 flex items-center justify-center text-flame-600 dark:text-flame-400 group-hover:bg-gradient-to-r group-hover:from-flame-500 group-hover:to-crimson-600 group-hover:text-white transition-all duration-300 shadow-xs">
            <IconComponent className="w-6 h-6" />
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
              {modeBadgeText()}
            </span>
            {service.badge && (
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-flame-100 dark:bg-flame-500/15 text-flame-800 dark:text-flame-300 border border-flame-200 dark:border-flame-500/30">
                {service.badge}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-flame-600 dark:group-hover:text-flame-400 transition-colors leading-snug">
          {content.title}
        </h3>

        {/* Short Description */}
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
          {content.shortDesc}
        </p>

        {/* Bullet Features */}
        <ul className="mt-4 space-y-2 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-white/5 pt-4">
          {content.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer: Starting Price & WhatsApp Button */}
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-3">
        <div>
          <span className="block text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
            {t('services.startingFrom')}
          </span>
          <span className="text-xl font-extrabold text-slate-900 dark:text-white font-mono">
            ₹{service.startingPrice}
            <span className="text-xs text-slate-500 dark:text-slate-400 font-sans font-normal ml-0.5">*</span>
          </span>
        </div>

        <a
          href={getServiceBookingLink(content.title, language)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-gradient-to-r hover:from-flame-500 hover:to-crimson-600 dark:bg-white/10 dark:hover:bg-gradient-to-r dark:hover:from-flame-500 dark:hover:to-crimson-600 rounded-lg transition-all duration-200 shadow-sm"
          aria-label={`Book ${content.title} on WhatsApp`}
        >
          <MessageSquare className="w-3.5 h-3.5 fill-current text-emerald-400" />
          <span>{t('services.bookService')}</span>
        </a>
      </div>

    </div>
  );
};
