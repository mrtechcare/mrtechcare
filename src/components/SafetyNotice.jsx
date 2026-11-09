import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldAlert, ShieldCheck, CheckCircle } from 'lucide-react';

export const SafetyNotice = () => {
  const { language } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="relative rounded-2xl bg-gradient-to-r from-midnight-950 via-midnight-900 to-midnight-950 light:from-white light:via-slate-50 light:to-white border border-electric-500/25 light:border-slate-300 p-5 sm:p-6 shadow-lg backdrop-blur-md">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-electric-500/10 light:bg-blue-50 border border-electric-500/30 flex items-center justify-center shrink-0 text-electric-400 light:text-electric-600">
            <ShieldCheck className="w-6 h-6" />
          </div>

          <div className="flex-1">
            <h4 className="text-base font-bold text-white light:text-slate-900 flex items-center gap-2">
              <span>
                {language === 'hi' 
                  ? 'प्रामाणिक एवं अधिकृत तकनीकी सेवा नीति' 
                  : 'Authorized & Legitimate Technical Support Policy'}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 light:bg-emerald-100 border border-emerald-500/30 text-emerald-400 light:text-emerald-800 font-semibold uppercase">
                {language === 'hi' ? 'सख्त अनुपालन' : 'Strict Compliance'}
              </span>
            </h4>

            <p className="mt-1 text-sm text-slate-300 light:text-slate-600 leading-relaxed">
              {language === 'hi'
                ? 'MrTech Care केवल वैध, आधिकारिक सॉफ्टवेयर और हार्डवेयर रिपेयर सेवाएं प्रदान करता है। हम किसी भी प्रकार की सुरक्षा बाईपास, चोरी किए गए उपकरणों की अनलॉकिंग, अनधिकृत पासवर्ड क्रैकिंग या सुरक्षा उल्लंघनों का कार्य नहीं करते हैं। प्रत्येक डिवाइस के वैध स्वामित्व की पुष्टि अपेक्षित है।'
                : 'MrTech Care exclusively provides legitimate, authorized software and hardware repair services. We strictly do not bypass device security, unlock stolen devices, crack passwords, or perform any unauthorized system intrusion. All diagnostic and repair work is performed transparently with owner authorization.'}
            </p>
          </div>

          <div className="shrink-0 self-end md:self-center">
            <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 light:text-slate-600 font-mono px-3 py-1.5 rounded-lg bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-300">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language === 'hi' ? 'गोपनीयता सुरक्षित' : 'Privacy Protected'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
