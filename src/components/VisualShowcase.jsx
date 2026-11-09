import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { createWhatsAppLink } from '../utils/whatsapp';
import { 
  Camera, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Zap, 
  Flame, 
  Cpu, 
  HardDrive, 
  Smartphone, 
  Monitor 
} from 'lucide-react';

export const VisualShowcase = () => {
  const { t, language } = useLanguage();

  const showcaseItems = [
    {
      id: "laptop-thermal",
      img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
      badge: "Thermal & Motherboard",
      badgeColor: "bg-flame-500/20 text-flame-400 border-flame-500/30",
      title: language === 'hi' ? 'लैपटॉप टीयरडाउन व थर्मल रिपेयर' : 'Laptop Teardown & Thermal Repair',
      desc: language === 'hi' 
        ? 'हाई-ग्रेड थर्मल पेस्ट और फैन सर्विसिंग से ओवरहीटिंग 40°C तक कम होती है और सिस्टम क्रैश रुकता है।'
        : 'High-grade thermal repasting and ultrasonic fan cleaning drops CPU/GPU temps by up to 35°C to prevent thermal throttling.',
      stat: "❄️ 35°C Cooler",
      icon: Cpu
    },
    {
      id: "ssd-boost",
      img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
      badge: "Speed Upgrade",
      badgeColor: "bg-electric-500/20 text-electric-400 border-electric-500/30",
      title: language === 'hi' ? 'NVMe SSD व RAM स्पीड बूस्ट' : 'NVMe SSD & High-Speed RAM Upgrades',
      desc: language === 'hi'
        ? 'धीमे हार्ड डिस्क वाले लैपटॉप व कंप्यूटर को सुपरफास्ट बनाएं। बूट टाइम 3 मिनट से घटकर 10 सेकंड।'
        : 'Cloning existing OS to high-speed PCIe NVMe SSDs. Instant boot-up in 10 seconds and silky smooth multitasking.',
      stat: "⚡ 10x Faster Boot",
      icon: HardDrive
    },
    {
      id: "mobile-bench",
      img: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=800&q=80",
      badge: "Mobile Precision",
      badgeColor: "bg-crimson-500/20 text-crimson-400 border-crimson-500/30",
      title: language === 'hi' ? 'स्मार्टफोन व आईफोन हार्डवेयर लैब' : 'Precision Mobile Hardware Bench',
      desc: language === 'hi'
        ? 'डिस्प्ले स्क्रीन रिप्लेसमेंट, कमजोर बैटरी बदलना और चार्जिंग जैक की सटीक माइक्रो-सोल्डरिंग।'
        : 'Careful display assembly, battery renewal, microphone, and charging dock repair under high-magnification tools.',
      stat: "📱 OEM Grade Parts",
      icon: Smartphone
    },
    {
      id: "remote-command",
      img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
      badge: "Live IT Support",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      title: language === 'hi' ? '256-बिट सुरक्षित ऑनलाइन सपोर्ट' : 'Encrypted Remote Diagnostic Station',
      desc: language === 'hi'
        ? 'पूरे भारत में AnyDesk व TeamViewer द्वारा विंडोज, ड्राइवर और नेटवर्क प्रिंटर की लाइव समस्या समाधान।'
        : 'Dual-monitor live diagnostic terminal solving software glitches, driver bugs, and printer conflicts across India.',
      stat: "🔒 256-Bit Encrypted",
      icon: Monitor
    }
  ];

  return (
    <section className="py-20 lg:py-24 relative bg-midnight-900 light:bg-slate-100 border-t border-white/5 transition-colors overflow-hidden">
      
      {/* Decorative Glow Blobs */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-electric-500/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-flame-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>{t('visualShowcase.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            {t('visualShowcase.title')}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-300 light:text-slate-600">
            {t('visualShowcase.subtitle')}
          </p>
        </div>

        {/* 4 Interactive Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {showcaseItems.map((item) => {
            const Icon = item.icon;
            const waInquiry = language === 'hi'
              ? `नमस्ते राजा जी (MrTech Care), मुझे *${item.title}* के बारे में बात करनी है।`
              : `Hello Raja ji (MrTech Care), I would like to inquire about *${item.title}*.`;

            return (
              <div 
                key={item.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-midnight-950 light:bg-white border border-white/10 light:border-slate-200 overflow-hidden shadow-card-elevated hover:border-flame-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Photo Header with Overlay */}
                <div className="relative h-60 w-full overflow-hidden bg-midnight-800">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/40 to-transparent light:from-white light:via-transparent light:to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border backdrop-blur-md ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Top Right Stat Chip */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-midnight-950/80 light:bg-white/90 text-white light:text-slate-900 border border-white/10 light:border-slate-300 shadow-sm backdrop-blur-md">
                      {item.stat}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-white light:text-slate-900 group-hover:text-flame-400 light:group-hover:text-flame-600 transition-colors flex items-center gap-2">
                      <Icon className="w-5 h-5 text-flame-500 shrink-0" />
                      <span>{item.title}</span>
                    </h3>

                    <p className="mt-3 text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-6 pt-4 border-t border-white/10 light:border-slate-200 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400 light:text-slate-500">
                      Doorstep Delhi NCR & Remote India
                    </span>

                    <a
                      href={createWhatsAppLink(waInquiry)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-flame-400 light:text-flame-600 hover:text-flame-300 group-hover:translate-x-0.5 transition-all"
                    >
                      <span>Inquire Now</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
