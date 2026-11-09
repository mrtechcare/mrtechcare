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
    <div className="group relative flex flex-col justify-between rounded-2xl bg-midnight-950/80 light:bg-white border border-white/10 light:border-slate-200 hover:border-flame-500/50 light:hover:border-flame-500 p-6 transition-all duration-300 hover:shadow-glow-orange hover:-translate-y-1">
      
      {/* Top Header */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-flame-500/10 light:bg-orange-50 border border-flame-500/30 flex items-center justify-center text-flame-500 group-hover:bg-gradient-to-r group-hover:from-flame-500 group-hover:to-crimson-600 group-hover:text-white transition-all duration-300 shadow-sm">
            <IconComponent className="w-6 h-6" />
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-200 text-slate-300 light:text-slate-600">
              {modeBadgeText()}
            </span>
            {service.badge && (
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-flame-500/15 light:bg-orange-100 text-flame-400 light:text-orange-700 border border-flame-500/30">
                {service.badge}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white light:text-slate-900 group-hover:text-flame-500 light:group-hover:text-flame-600 transition-colors leading-snug">
          {content.title}
        </h3>

        {/* Short Description */}
        <p className="mt-2 text-sm text-slate-300 light:text-slate-600 leading-relaxed">
          {content.shortDesc}
        </p>

        {/* Bullet Features */}
        <ul className="mt-4 space-y-2 text-xs text-slate-300 light:text-slate-600 border-t border-white/5 light:border-slate-100 pt-4">
          {content.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-400 light:text-emerald-600 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer: Starting Price & WhatsApp Button */}
      <div className="mt-6 pt-4 border-t border-white/10 light:border-slate-200 flex items-center justify-between gap-3">
        <div>
          <span className="block text-[11px] text-slate-400 light:text-slate-500 font-medium">
            {t('services.startingFrom')}
          </span>
          <span className="text-xl font-extrabold text-white light:text-slate-900 font-mono">
            ₹{service.startingPrice}
            <span className="text-xs text-slate-400 light:text-slate-500 font-sans font-normal ml-0.5">*</span>
          </span>
        </div>

        <a
          href={getServiceBookingLink(content.title, language)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-white/10 light:bg-slate-900 hover:bg-gradient-to-r hover:from-flame-500 hover:to-crimson-600 border border-white/15 light:border-slate-700 rounded-lg transition-all duration-200 shadow-sm"
          aria-label={`Book ${content.title} on WhatsApp`}
        >
          <MessageSquare className="w-3.5 h-3.5 fill-current text-emerald-400 light:text-emerald-300 group-hover:text-white" />
          <span>{t('services.bookService')}</span>
        </a>
      </div>

    </div>
  );
};
