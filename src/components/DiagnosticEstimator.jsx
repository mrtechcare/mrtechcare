import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { createWhatsAppLink } from '../utils/whatsapp';
import { 
  Laptop, 
  Monitor, 
  Smartphone, 
  Apple, 
  Wifi, 
  Calculator, 
  Clock, 
  Tag, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  Sparkles,
  Zap,
  MapPin,
  Globe2
} from 'lucide-react';

export const DiagnosticEstimator = () => {
  const { t, language } = useLanguage();

  const [selectedDevice, setSelectedDevice] = useState('laptop');
  const [selectedIssue, setSelectedIssue] = useState('slow');
  const [selectedMode, setSelectedMode] = useState('doorstep');

  const devices = [
    { id: 'laptop', label: 'Laptop', icon: Laptop, color: 'text-electric-500' },
    { id: 'desktop', label: 'Desktop PC', icon: Monitor, color: 'text-flame-500' },
    { id: 'android', label: 'Android Phone', icon: Smartphone, color: 'text-emerald-500' },
    { id: 'iphone', label: 'iPhone / iPad', icon: Apple, color: 'text-cyan-400' },
    { id: 'network', label: 'Wi-Fi & Printer', icon: Wifi, color: 'text-purple-400' },
  ];

  const issueMatrix = {
    laptop: [
      { id: 'slow', name: 'Slow Speed / Freezing (Needs SSD/RAM)', price: 299, time: '40 - 60 mins', mode: 'doorstep' },
      { id: 'windows', name: 'Windows Blue Screen / Boot Loop', price: 499, time: '45 - 90 mins', mode: 'both' },
      { id: 'thermal', name: 'Overheating / Fan Noise / Shutdown', price: 299, time: '45 - 60 mins', mode: 'doorstep' },
      { id: 'screen', name: 'Broken Screen / Display Flickering', price: 299, time: 'Same-day inspection', mode: 'doorstep' },
      { id: 'driver', name: 'Sound, Wi-Fi or Driver Missing', price: 199, time: '20 - 30 mins', mode: 'remote' },
    ],
    desktop: [
      { id: 'boot', name: 'No Display / Won\'t Turn On', price: 299, time: '30 - 60 mins', mode: 'doorstep' },
      { id: 'windows', name: 'Windows 10 / 11 Clean Installation', price: 499, time: '45 - 75 mins', mode: 'both' },
      { id: 'upgrade', name: 'High-Speed SSD & RAM Boost', price: 299, time: '30 - 45 mins', mode: 'doorstep' },
      { id: 'assembly', name: 'Custom PC Assembly & Cable Work', price: 499, time: '1 - 2 hours', mode: 'doorstep' },
      { id: 'remote-bug', name: 'Software Crash / Malfunctioning Apps', price: 199, time: '20 - 40 mins', mode: 'remote' },
    ],
    android: [
      { id: 'bootloop', name: 'Stuck on Logo / Bootloop', price: 299, time: '30 - 60 mins', mode: 'both' },
      { id: 'stockrom', name: 'Official Stock Firmware Flashing', price: 299, time: '40 - 60 mins', mode: 'both' },
      { id: 'battery', name: 'Battery Draining / Charging Port', price: 299, time: 'Physical check', mode: 'doorstep' },
      { id: 'screen', name: 'Screen / Touch Digitizer Check', price: 299, time: 'Same day', mode: 'doorstep' },
    ],
    iphone: [
      { id: 'applelogo', name: 'Stuck on White Apple Logo Loop', price: 299, time: '30 - 60 mins', mode: 'both' },
      { id: 'itunes', name: 'Recovery Mode / iTunes Error Codes', price: 299, time: '30 - 50 mins', mode: 'both' },
      { id: 'iosupdate', name: 'iOS Update Failure Diagnosis', price: 299, time: '30 - 45 mins', mode: 'both' },
      { id: 'hardware', name: 'Display or Battery Evaluation', price: 299, time: 'Same day inspection', mode: 'doorstep' },
    ],
    network: [
      { id: 'printer', name: 'Wireless / Network Printer Offline', price: 249, time: '20 - 35 mins', mode: 'both' },
      { id: 'wifi', name: 'Frequent Wi-Fi Disconnects & IP Conflict', price: 249, time: '25 - 45 mins', mode: 'both' },
      { id: 'router', name: 'New Router Setup & Wi-Fi Password', price: 249, time: '20 - 30 mins', mode: 'both' },
      { id: 'sharing', name: 'Home Office LAN File / Folder Sharing', price: 249, time: '30 - 45 mins', mode: 'both' },
    ],
  };

  const currentIssues = issueMatrix[selectedDevice] || issueMatrix.laptop;
  const activeIssueObj = currentIssues.find(i => i.id === selectedIssue) || currentIssues[0];

  const handleDeviceChange = (devId) => {
    setSelectedDevice(devId);
    setSelectedIssue(issueMatrix[devId][0].id);
  };

  const selectedDeviceObj = devices.find(d => d.id === selectedDevice);

  const bookingMessage = language === 'hi'
    ? `नमस्ते राजा जी (MrTech Care),\nमैंने वेबसाइट के डायग्नोस्टिक टूल से चेक किया:\n📱 डिवाइस: *${selectedDeviceObj?.label}*\n⚠️ समस्या: *${activeIssueObj?.name}*\n📍 मोड: *${selectedMode === 'doorstep' ? 'डोरस्टेप (दिल्ली एनसीआर)' : 'रिमोट (ऑनलाइन भारत)'}*\n💰 अनुमानित बेस: ₹${activeIssueObj?.price}\n\nकृपया मुझे उपलब्धता बताएं।`
    : `Hello Raja ji (MrTech Care),\nI checked my issue on your instant diagnostic tool:\n📱 Device: *${selectedDeviceObj?.label}*\n⚠️ Issue: *${activeIssueObj?.name}*\n📍 Mode: *${selectedMode === 'doorstep' ? 'Doorstep (Delhi NCR)' : 'Remote (Pan-India)'}*\n💰 Estimated Base: ₹${activeIssueObj?.price}\n\nPlease confirm availability and next steps.`;

  return (
    <section id="estimator" className="py-20 lg:py-24 relative bg-midnight-950 dark:bg-midnight-950 light:bg-slate-50 border-t border-white/5 transition-colors">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-flame-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-electric-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-flame-500/10 border border-flame-500/30 text-flame-500 dark:text-flame-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t('estimator.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            {t('estimator.title')}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-300 light:text-slate-600">
            {t('estimator.subtitle')}
          </p>
        </div>

        {/* Interactive Estimator Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Device Selection Pills */}
            <div className="p-5 sm:p-6 rounded-2xl bg-midnight-900/90 light:bg-white border border-white/10 light:border-slate-200 shadow-card-elevated">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-500 mb-3">
                {t('estimator.selectDevice')}
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {devices.map((dev) => {
                  const Icon = dev.icon;
                  const isSelected = selectedDevice === dev.id;
                  return (
                    <button
                      key={dev.id}
                      onClick={() => handleDeviceChange(dev.id)}
                      type="button"
                      className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-electric-500/15 light:bg-electric-50 border-electric-500 text-white light:text-electric-700 shadow-glow-sm'
                          : 'bg-midnight-950/60 light:bg-slate-50 border-white/5 light:border-slate-200 text-slate-300 light:text-slate-700 hover:border-white/20'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${dev.color} shrink-0`} />
                      <span className="text-xs sm:text-sm font-semibold">{dev.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Issue Selection Radio List */}
            <div className="p-5 sm:p-6 rounded-2xl bg-midnight-900/90 light:bg-white border border-white/10 light:border-slate-200 shadow-card-elevated">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-500 mb-3">
                {t('estimator.selectIssue')}
              </label>

              <div className="space-y-2">
                {currentIssues.map((issue) => {
                  const isSelected = selectedIssue === issue.id;
                  return (
                    <div
                      key={issue.id}
                      onClick={() => setSelectedIssue(issue.id)}
                      className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-gradient-to-r from-electric-500/15 to-flame-500/15 light:from-electric-50 light:to-orange-50 border-flame-500 text-white light:text-slate-900 shadow-sm'
                          : 'bg-midnight-950/60 light:bg-slate-50 border-white/5 light:border-slate-200 text-slate-300 light:text-slate-700 hover:bg-white/5 light:hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? 'border-flame-500 bg-flame-500' : 'border-slate-500'
                        }`}>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                        </span>
                        <span className="text-xs sm:text-sm font-medium">{issue.name}</span>
                      </div>
                      <span className="font-mono text-xs font-bold text-flame-400 light:text-flame-600 shrink-0 ml-2">
                        Starts ₹{issue.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Service Mode Preference */}
            <div className="p-5 sm:p-6 rounded-2xl bg-midnight-900/90 light:bg-white border border-white/10 light:border-slate-200 shadow-card-elevated">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-500 mb-3">
                {t('estimator.selectMode')}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedMode('doorstep')}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                    selectedMode === 'doorstep'
                      ? 'bg-flame-500/15 light:bg-orange-50 border-flame-500 text-white light:text-orange-900 shadow-glow-orange'
                      : 'bg-midnight-950/60 light:bg-slate-50 border-white/5 light:border-slate-200 text-slate-300 light:text-slate-700'
                  }`}
                >
                  <MapPin className="w-5 h-5 text-flame-500 shrink-0" />
                  <div>
                    <span className="block text-xs sm:text-sm font-bold">Doorstep Visit</span>
                    <span className="text-[11px] text-slate-400 light:text-slate-500">Delhi, Noida, Ghaziabad, Gr. Noida</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedMode('remote')}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                    selectedMode === 'remote'
                      ? 'bg-electric-500/15 light:bg-blue-50 border-electric-500 text-white light:text-blue-900 shadow-glow-sm'
                      : 'bg-midnight-950/60 light:bg-slate-50 border-white/5 light:border-slate-200 text-slate-300 light:text-slate-700'
                  }`}
                >
                  <Globe2 className="w-5 h-5 text-electric-400 shrink-0" />
                  <div>
                    <span className="block text-xs sm:text-sm font-bold">Remote Online Support</span>
                    <span className="text-[11px] text-slate-400 light:text-slate-500">AnyDesk / TeamViewer (Pan-India)</span>
                  </div>
                </button>
              </div>
            </div>

          </div>

          {/* Dynamic Result Summary Column (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="relative rounded-2xl bg-gradient-to-b from-midnight-900 via-midnight-950 to-midnight-900 light:from-white light:to-slate-50 border-2 border-flame-500/40 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10 light:border-slate-200">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-flame-400 light:text-flame-600 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  {t('estimator.resultTitle')}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 light:text-emerald-700 border border-emerald-500/30">
                  Instant Quote
                </span>
              </div>

              {/* Selected Specs */}
              <div className="mt-5 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400 light:text-slate-500">
                  <span>Selected Device:</span>
                  <span className="text-white light:text-slate-900 font-bold">{selectedDeviceObj?.label}</span>
                </div>

                <div className="flex items-start justify-between gap-2 text-slate-400 light:text-slate-500">
                  <span className="shrink-0">Identified Symptom:</span>
                  <span className="text-right text-slate-200 light:text-slate-800 font-medium">{activeIssueObj?.name}</span>
                </div>

                <div className="flex items-center justify-between text-slate-400 light:text-slate-500">
                  <span>Service Mode:</span>
                  <span className="text-electric-400 light:text-electric-600 font-semibold">
                    {selectedMode === 'doorstep' ? 'Doorstep (Delhi NCR)' : 'Remote Pan-India'}
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-400 light:text-slate-500">
                  <span>Estimated Time:</span>
                  <span className="text-emerald-400 light:text-emerald-600 font-semibold">{activeIssueObj?.time}</span>
                </div>
              </div>

              {/* Big Price Callout */}
              <div className="my-6 p-4 rounded-xl bg-flame-500/10 light:bg-orange-50 border border-flame-500/30 flex items-baseline justify-between">
                <div>
                  <span className="block text-[11px] text-slate-400 light:text-slate-600 uppercase font-semibold">
                    {t('estimator.baseFee')}
                  </span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 font-mono">
                    ₹{activeIssueObj?.price}
                  </span>
                  <span className="text-xs text-slate-400 ml-1 font-normal">*base labor</span>
                </div>

                <div className="text-right">
                  <span className="inline-block text-[10px] font-mono text-emerald-400 light:text-emerald-700 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Zero Extra Hidden Fee
                  </span>
                </div>
              </div>

              {/* Booking WhatsApp Action */}
              <a
                href={createWhatsAppLink(bookingMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-gradient-to-r from-flame-500 to-crimson-600 hover:from-flame-600 hover:to-crimson-700 text-white font-bold text-sm sm:text-base shadow-glow-orange active:scale-98 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-current text-white" />
                <span>{t('estimator.actionBook')}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="mt-4 text-[11px] text-slate-400 light:text-slate-500 text-center leading-normal">
                ℹ️ {t('estimator.safetyNote')}
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
