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
    <div className="group relative flex flex-col justify-between rounded-2xl bg-midnight-950/80 border border-white/10 hover:border-electric-500/40 p-6 transition-all duration-300 hover:shadow-glow-sm hover:-translate-y-1">
      
      {/* Top Header */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/30 flex items-center justify-center text-electric-400 group-hover:bg-electric-500 group-hover:text-white transition-all duration-300 shadow-sm">
            <IconComponent className="w-6 h-6" />
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
              {modeBadgeText()}
            </span>
            {service.badge && (
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-electric-500/15 text-electric-300 border border-electric-500/25">
                {service.badge}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white group-hover:text-electric-400 transition-colors leading-snug">
          {content.title}
        </h3>

        {/* Short Description */}
        <p className="mt-2 text-sm text-slate-300 leading-relaxed">
          {content.shortDesc}
        </p>

        {/* Bullet Features */}
        <ul className="mt-4 space-y-2 text-xs text-slate-300 border-t border-white/5 pt-4">
          {content.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer: Starting Price & WhatsApp Button */}
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
        <div>
          <span className="block text-[11px] text-slate-400 font-medium">
            {t('services.startingFrom')}
          </span>
          <span className="text-xl font-extrabold text-white font-mono">
            ₹{service.startingPrice}
            <span className="text-xs text-slate-400 font-sans font-normal ml-0.5">*</span>
          </span>
        </div>

        <a
          href={getServiceBookingLink(content.title, language)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-white/10 hover:bg-electric-500 border border-white/15 hover:border-electric-500 rounded-lg transition-all duration-200 shadow-sm"
          aria-label={`Book ${content.title} on WhatsApp`}
        >
          <MessageSquare className="w-3.5 h-3.5 fill-current text-emerald-400 group-hover:text-white" />
          <span>{t('services.bookService')}</span>
        </a>
      </div>

    </div>
  );
};
