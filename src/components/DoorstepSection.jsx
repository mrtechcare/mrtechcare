import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { createWhatsAppLink } from '../utils/whatsapp';
import { 
  MapPin, 
  Clock, 
  Calendar, 
  CheckCircle, 
  MessageSquare, 
  AlertTriangle,
  Building2,
  Navigation
} from 'lucide-react';

export const DoorstepSection = () => {
  const { t, language } = useLanguage();

  const doorstepWhatsAppMsg = language === 'hi'
    ? 'नमस्ते राजा जी, मुझे दिल्ली एनसीआर में डोरस्टेप कंप्यूटर / लैपटॉप रिपेयर के लिए अपॉइंटमेंट बुक करना है।'
    : 'Hello Raja ji, I want to schedule a doorstep computer / laptop repair visit in Delhi NCR.';

  const areas = [
    {
      city: language === 'hi' ? 'दिल्ली (Delhi)' : 'Delhi',
      sectors: language === 'hi' 
        ? 'साउथ दिल्ली, सेंट्रल दिल्ली, ईस्ट दिल्ली, वेस्ट दिल्ली, नॉर्थ दिल्ली, द्वारका, रोहिणी, कनॉट प्लेस आदि।' 
        : 'South Delhi, Central Delhi, East Delhi, West Delhi, North Delhi, Dwarka, Rohini, Connaught Place & surrounding localities.',
      status: language === 'hi' ? 'दैनिक विजिट उपलब्ध' : 'Daily Visits Available',
      badgeColor: 'border-flame-200 dark:border-flame-500/30 text-flame-800 dark:text-flame-400 bg-flame-50 dark:bg-flame-500/10'
    },
    {
      city: language === 'hi' ? 'नोएडा (Noida)' : 'Noida',
      sectors: language === 'hi' 
        ? 'सेक्टर 15 से 137, सेक्टर 62, 63, सेक्टर 18, नोएडा एक्सप्रेसवे, बॉटनिकल गार्डन, सेक्टर 50, 76 आदि।' 
        : 'Sector 15 to Sector 137, Sectors 62 & 63, Sector 18, Noida Expressway corridor, Botanical Garden, Sector 50 & 76.',
      status: language === 'hi' ? 'दैनिक विजिट उपलब्ध' : 'Daily Visits Available',
      badgeColor: 'border-cyan-200 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10'
    },
    {
      city: language === 'hi' ? 'गाजियाबाद (Ghaziabad)' : 'Ghaziabad',
      sectors: language === 'hi' 
        ? 'इंदिरापुरम, वैशाली, वसुंधरा, राज नगर एक्सटेंशन, क्रॉसिंग्स रिपब्लिक, कौशाम्बी व मोहन नगर।' 
        : 'Indirapuram (Nyay Khand, Vaibhav Khand), Vaishali, Vasundhara, Raj Nagar Extension, Crossings Republik & Kaushambi.',
      status: language === 'hi' ? 'दैनिक विजिट उपलब्ध' : 'Daily Visits Available',
      badgeColor: 'border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10'
    },
    {
      city: language === 'hi' ? 'ग्रेटर नोएडा (Greater Noida)' : 'Greater Noida',
      sectors: language === 'hi' 
        ? 'ग्रेटर नोएडा वेस्ट (नोएडा एक्सटेंशन), परी चौक, नॉलेज पार्क, अल्फा, बीटा, गामा व डेल्टा।' 
        : 'Greater Noida West (Noida Extension, Gaur City), Pari Chowk, Knowledge Park, Alpha, Beta, Gamma & Delta.',
      status: language === 'hi' ? 'दैनिक विजिट उपलब्ध' : 'Daily Visits Available',
      badgeColor: 'border-amber-200 dark:border-amber-500/30 text-amber-800 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10'
    }
  ];

  return (
    <section id="doorstep-service" className="py-16 lg:py-20 relative bg-slate-50 dark:bg-midnight-950 border-t border-slate-200 dark:border-white/5 transition-colors duration-200">
      
      {/* Background Subtle Map Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-flame-100 dark:bg-flame-500/10 border border-flame-200 dark:border-flame-500/25 text-flame-700 dark:text-flame-400 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Building2 className="w-3.5 h-3.5 text-flame-600 dark:text-flame-400" />
            <span>{t('doorstep.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('doorstep.title')}
          </h2>

          <p className="mt-2 text-base text-slate-700 dark:text-slate-300">
            {t('doorstep.subtitle')}
          </p>
        </div>

        {/* 4 Coverage Cities Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {areas.map((area, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500/60 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-flame-50 dark:bg-flame-500/10 border border-flame-200 dark:border-flame-500/20 flex items-center justify-center text-flame-600 dark:text-flame-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {area.city}
                    </h3>
                  </div>

                  <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${area.badgeColor}`}>
                    {area.status}
                  </span>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mt-2 font-normal">
                  {area.sectors}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Mon - Sun: 09:00 AM - 09:00 PM</span>
                </span>
                <span className="text-flame-600 dark:text-flame-400 font-bold">On-Site Service</span>
              </div>
            </div>
          ))}
        </div>

        {/* Scheduling Policy & WhatsApp Action Box */}
        <div className="mt-10 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4 max-w-2xl">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 flex items-center justify-center shrink-0 text-amber-700 dark:text-amber-500 mt-1">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                {language === 'hi' ? 'अपॉइंटमेंट और कवरेज उपलब्धता' : 'Scheduling & Availability Notice'}
              </h4>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {t('doorstep.notice')}
              </p>
            </div>
          </div>

          <a
            href={createWhatsAppLink(doorstepWhatsAppMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-flame-500 to-crimson-600 hover:from-flame-600 hover:to-crimson-700 rounded-xl shadow-md transition-all duration-200 shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-current text-white" />
            <span>{t('doorstep.bookDoorstepBtn')}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
