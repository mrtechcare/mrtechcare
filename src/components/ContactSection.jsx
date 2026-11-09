import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  DISPLAY_PHONE, 
  BUSINESS_EMAIL, 
  TEAM_NAME, 
  getFormEnquiryLink, 
  createWhatsAppLink 
} from '../utils/whatsapp';
import { servicesData } from '../data/servicesData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Laptop, 
  Clock 
} from 'lucide-react';

export const ContactSection = () => {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    device: 'Laptop (Windows / Mac)',
    service: 'Windows Installation, Formatting & Troubleshooting',
    serviceMode: 'Doorstep Visit (Delhi NCR)',
    location: '',
    problem: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const deviceOptions = [
    'Laptop (Windows)',
    'Laptop (Mac / Apple)',
    'Desktop PC / Custom Rig',
    'Android Smartphone / Tablet',
    'iPhone / iPad',
    'Wi-Fi Router / Printer / Network',
    'Other Technical Equipment'
  ];

  const serviceOptions = servicesData.map(s => {
    const content = s[language] || s.en;
    return content.title;
  });

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = language === 'hi' ? 'कृपया अपना नाम दर्ज करें' : 'Please enter your name';
    }
    if (!formData.location.trim()) {
      errs.location = language === 'hi' ? 'कृपया अपना शहर / इलाका दर्ज करें' : 'Please specify your locality/area';
    }
    if (!formData.problem.trim() || formData.problem.trim().length < 10) {
      errs.problem = language === 'hi' 
        ? 'कृपया समस्या का कम से कम 10 अक्षरों में विवरण दें' 
        : 'Please briefly describe the symptoms (at least 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const waLink = getFormEnquiryLink({
      name: formData.name,
      device: formData.device,
      service: formData.service,
      serviceMode: formData.serviceMode,
      location: formData.location,
      problem: formData.problem
    });

    setTimeout(() => {
      window.open(waLink, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <section id="contact" className="py-16 lg:py-20 relative bg-slate-50 dark:bg-midnight-950 border-t border-slate-200 dark:border-white/5 transition-colors duration-200">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-flame-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-flame-100 dark:bg-flame-500/10 border border-flame-200 dark:border-flame-500/25 text-flame-700 dark:text-flame-400 text-xs font-bold uppercase tracking-wider mb-2.5">
            <MessageSquare className="w-3.5 h-3.5 text-flame-600 dark:text-flame-400" />
            <span>{t('contact.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('contact.title')}
          </h2>

          <p className="mt-2 text-base text-slate-700 dark:text-slate-300">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 shadow-sm space-y-5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {language === 'hi' ? 'सीधा संपर्क विवरण' : 'Direct Contact Information'}
              </h3>

              <div className="space-y-4">
                
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-flame-50 dark:bg-flame-500/10 border border-flame-200 dark:border-flame-500/20 flex items-center justify-center shrink-0 text-flame-600 dark:text-flame-400 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 dark:text-slate-400 font-semibold">
                      {t('contact.phoneLabel')}
                    </span>
                    <a
                      href="tel:+919990946044"
                      className="text-base font-bold text-slate-900 dark:text-white hover:text-flame-600 transition-colors font-mono"
                    >
                      {DISPLAY_PHONE}
                    </a>
                    <span className="block text-[11px] text-emerald-700 dark:text-emerald-400 font-bold mt-0.5">
                      ✓ Direct call & WhatsApp available
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-electric-50 dark:bg-electric-500/10 border border-electric-200 dark:border-electric-500/20 flex items-center justify-center shrink-0 text-electric-600 dark:text-electric-400 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 dark:text-slate-400 font-semibold">
                      {t('contact.emailLabel')}
                    </span>
                    <a
                      href={`mailto:${BUSINESS_EMAIL}`}
                      className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-electric-600 transition-colors font-mono break-all"
                    >
                      {BUSINESS_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Operational Base */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-flame-50 dark:bg-flame-500/10 border border-flame-200 dark:border-flame-500/20 flex items-center justify-center shrink-0 text-flame-600 dark:text-flame-400 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 dark:text-slate-400 font-semibold">
                      {t('contact.locationLabel')}
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {t('contact.locationValue')}
                    </span>
                    <span className="block text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      Doorstep: Delhi, Noida, Ghaziabad & Greater Noida
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 flex items-center justify-center shrink-0 text-purple-600 dark:text-purple-400 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 dark:text-slate-400 font-semibold">
                      Service Timings
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      Monday to Sunday: 09:00 AM – 09:00 PM
                    </span>
                  </div>
                </div>

              </div>

              {/* Instant WhatsApp Quick Link */}
              <div className="pt-3 border-t border-slate-100 dark:border-white/10">
                <a
                  href="https://wa.me/919990946044"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 rounded-xl shadow-md transition-all active:scale-98"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Privacy Box */}
            <div className="p-4 rounded-xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>{t('contact.privacyNote')}</span>
            </div>

          </div>

          {/* Right Column: Working WhatsApp Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-midnight-900 border border-flame-300 dark:border-flame-500/30 shadow-md">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/10 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {t('contact.formTitle')}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Prepares a formatted WhatsApp message directly on your device.
                  </p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-flame-100 dark:bg-flame-500/15 text-flame-800 dark:text-flame-300 border border-flame-200 dark:border-flame-500/30 font-bold">
                  Instant
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t('contact.nameLabel')} <span className="text-flame-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.namePlaceholder')}
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-flame-500 transition-colors ${
                      errors.name ? 'border-crimson-500' : 'border-slate-300 dark:border-white/10'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-crimson-600 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Device Type & Service Mode */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="device" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      {t('contact.deviceLabel')}
                    </label>
                    <select
                      id="device"
                      name="device"
                      value={formData.device}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-flame-500"
                    >
                      {deviceOptions.map((opt, i) => (
                        <option key={i} value={opt} className="bg-white dark:bg-midnight-950 text-slate-900 dark:text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="serviceMode" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      {t('contact.modeLabel')}
                    </label>
                    <select
                      id="serviceMode"
                      name="serviceMode"
                      value={formData.serviceMode}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-flame-500"
                    >
                      <option value="Doorstep Visit (Delhi NCR)" className="bg-white dark:bg-midnight-950 text-slate-900 dark:text-white">
                        Doorstep Visit (Delhi NCR)
                      </option>
                      <option value="Remote Online Support (Pan-India AnyDesk/TeamViewer)" className="bg-white dark:bg-midnight-950 text-slate-900 dark:text-white">
                        Remote Online Support (Pan-India)
                      </option>
                      <option value="Phone / WhatsApp Consultation" className="bg-white dark:bg-midnight-950 text-slate-900 dark:text-white">
                        Diagnostic Advice
                      </option>
                    </select>
                  </div>
                </div>

                {/* Service Required */}
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t('contact.serviceLabel')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-flame-500"
                  >
                    {serviceOptions.map((opt, i) => (
                      <option key={i} value={opt} className="bg-white dark:bg-midnight-950 text-slate-900 dark:text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location / Area */}
                <div>
                  <label htmlFor="location" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t('contact.locationFieldLabel')} <span className="text-flame-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder={t('contact.locationPlaceholder')}
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-flame-500 transition-colors ${
                      errors.location ? 'border-crimson-500' : 'border-slate-300 dark:border-white/10'
                    }`}
                  />
                  {errors.location && (
                    <p className="mt-1 text-xs text-crimson-600 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.location}</span>
                    </p>
                  )}
                </div>

                {/* Problem Description */}
                <div>
                  <label htmlFor="problem" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t('contact.problemLabel')} <span className="text-flame-600">*</span>
                  </label>
                  <textarea
                    id="problem"
                    name="problem"
                    rows="3"
                    value={formData.problem}
                    onChange={handleChange}
                    placeholder={t('contact.problemPlaceholder')}
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-flame-500 transition-colors resize-none ${
                      errors.problem ? 'border-crimson-500' : 'border-slate-300 dark:border-white/10'
                    }`}
                  ></textarea>
                  {errors.problem && (
                    <p className="mt-1 text-xs text-crimson-600 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.problem}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-flame-500 to-crimson-600 hover:from-flame-600 hover:to-crimson-700 active:scale-98 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>{t('contact.submitting')}</span>
                    ) : (
                      <>
                        <MessageSquare className="w-4 h-4 fill-current text-white" />
                        <span>{t('contact.submitBtn')}</span>
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
