import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { createWhatsAppLink } from '../utils/whatsapp';
import { 
  Globe2, 
  ShieldCheck, 
  Lock, 
  MessageSquare, 
  Laptop, 
  KeyRound, 
  CheckCircle2, 
  Zap, 
  ExternalLink,
  EyeOff,
  UserCheck
} from 'lucide-react';

export const RemoteSupportSection = () => {
  const { t, language } = useLanguage();

  const remoteWhatsAppMsg = language === 'hi'
    ? 'नमस्ते Team MrTech Care, मुझे AnyDesk / TeamViewer द्वारा रिमोट टेक्निकल सपोर्ट चाहिए।'
    : 'Hello Team MrTech Care, I need remote technical support via AnyDesk / TeamViewer.';

  const steps = [
    {
      num: "01",
      title: language === 'hi' ? 'व्हाट्सएप पर संपर्क करें' : 'Contact Us on WhatsApp',
      desc: language === 'hi' ? '+91 99909 46044 पर संदेश भेजें और अपनी समस्या या एरर स्क्रीनशॉट साझा करें।' : 'Send a quick WhatsApp message to +91 99909 46044 with your error message or symptoms.'
    },
    {
      num: "02",
      title: language === 'hi' ? 'समस्या का विवरण बताएं' : 'Explain Your Issue',
      desc: language === 'hi' ? 'हम समस्या का विश्लेषण करते हैं और पुष्टि करते हैं कि क्या इसे ऑनलाइन रिमोट से ठीक किया जा सकता है।' : 'We analyze the symptoms together and confirm whether remote resolution is feasible.'
    },
    {
      num: "03",
      title: language === 'hi' ? 'सेवा शुल्क पर सहमति' : 'Agree on Service Charges',
      desc: language === 'hi' ? 'काम शुरू होने से पहले आपको सांकेतिक दर (₹199 से शुरू) की स्पष्ट जानकारी दी जाती है।' : 'You receive clear upfront pricing (starts at ₹199). No hidden fees before we begin.'
    },
    {
      num: "04",
      title: language === 'hi' ? 'सुरक्षित रिमोट सेशन शुरू करें' : 'Start Secure Remote Session',
      desc: language === 'hi' ? 'आप AnyDesk या TeamViewer खोलकर 9 अंकों का कोड साझा करते हैं। स्क्रीन पर सब आपके सामने होता है।' : 'Launch AnyDesk or TeamViewer and share your temporary 9-digit session code.'
    },
    {
      num: "05",
      title: language === 'hi' ? 'समस्या का समाधान प्राप्त करें' : 'Receive Technical Assistance',
      desc: language === 'hi' ? 'सॉफ्टवेयर का डायग्नोसिस व सुधार किया जाता है। आप काम देखकर संतुष्ट होकर सेशन समाप्त करते हैं।' : 'We diagnose, fix, configure and test. You can terminate the session anytime with 1 click.'
    }
  ];

  return (
    <section id="remote-support" className="py-16 lg:py-20 relative bg-slate-50 dark:bg-midnight-950 border-t border-slate-200 dark:border-white/5 transition-colors duration-200">
      
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-electric-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/20 text-cyan-800 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Globe2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>{t('remote.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('remote.title')}
          </h2>

          <p className="mt-2 text-base text-slate-700 dark:text-slate-300">
            {t('remote.subtitle')}
          </p>

          {/* Software Badge Pills */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              <span>AnyDesk Remote Support</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>TeamViewer Support</span>
            </div>
          </div>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-center text-slate-900 dark:text-white mb-8">
            {t('remote.stepsTitle')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <div 
                key={step.num}
                className="relative flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-cyan-500/60 transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-flame-600 dark:text-flame-400">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 uppercase">
                      Step {idx + 1}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {step.title}
                  </h4>

                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                  <CheckCircle2 className="w-3 h-3 text-cyan-600 dark:text-cyan-400 mr-1" />
                  <span>100% Transparent</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strict Security & Privacy Guarantee Callout */}
        <div className="mt-12 rounded-2xl bg-white dark:bg-midnight-900 border border-emerald-300 dark:border-emerald-500/30 p-6 sm:p-8 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-700 dark:text-emerald-400 mt-1">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>{t('remote.securityTitle')}</span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-400 uppercase font-bold">
                    100% Verified Safety
                  </span>
                </h4>

                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {t('remote.securityDesc')}
                </p>

                <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-1.5 text-rose-700 dark:text-rose-400">
                    <EyeOff className="w-4 h-4 text-rose-500" />
                    <span>Never asks for passwords or OTPs</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400">
                    <Lock className="w-4 h-4 text-amber-500" />
                    <span>Never requests banking or payment PINs</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
                    <UserCheck className="w-4 h-4 text-emerald-500" />
                    <span>Close session anytime with 1 click</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href={createWhatsAppLink(remoteWhatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-flame-500 to-crimson-600 hover:from-flame-600 hover:to-crimson-700 rounded-xl shadow-md active:scale-95 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 fill-current text-white" />
                <span>{t('remote.startRemoteBtn')}</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
