import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { createWhatsAppLink, DISPLAY_PHONE } from '../utils/whatsapp';
import { 
  Smartphone, 
  Code2, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Send, 
  AlertCircle, 
  Clock, 
  Cpu, 
  Sparkles, 
  Lock, 
  Check, 
  FileText, 
  Building2, 
  User, 
  ExternalLink,
  ChevronRight,
  Globe,
  Server,
  Zap,
  HelpCircle,
  Bell,
  Fingerprint
} from 'lucide-react';

export const AppDevelopmentPage = ({ onNavigate }) => {
  const { language, t } = useLanguage();

  // Quote form states
  const [quoteType, setQuoteType] = useState('individual'); // 'individual' or 'corporate'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Form fields
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    companyName: '',
    gstNumber: '',
    appType: 'Business / Service Booking App',
    platforms: 'Both Android & iOS (Cross-Platform)',
    screenEstimate: 'Introductory Prototype / Utility (Starting Baseline)',
    details: ''
  });

  const appTypes = [
    { id: 'booking', label: language === 'hi' ? 'सर्विस बुकिंग एवं अपॉइंटमेंट ऐप' : 'Service Booking & Appointment App' },
    { id: 'portal', label: language === 'hi' ? 'कस्टमर अकाउंट एवं पोर्टल ऐप' : 'Customer Account & Self-Service Portal' },
    { id: 'ecommerce', label: language === 'hi' ? 'ई-कॉमर्स एवं रिटेल शॉपिंग ऐप' : 'E-Commerce & Retail Shopping App' },
    { id: 'internal', label: language === 'hi' ? 'स्टाफ एवं फील्ड ऑपरेशंस ऐप' : 'Internal Staff & Field Operations Tool' },
    { id: 'cross', label: language === 'hi' ? 'कस्टम क्रॉस-प्लेटफॉर्म ऐप' : 'Custom Cross-Platform Mobile Application' },
    { id: 'maintenance', label: language === 'hi' ? 'ऐप मेंटेनेंस व ओएस अपग्रेड' : 'App Maintenance & OS Compatibility Upgrade' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitQuote = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSubmissionSuccess(null);

    const cleanPhone = formData.phone.trim().replace(/\s+/g, '').replace(/^(\+91)/, '');
    if (!formData.name || formData.name.trim().length < 2) {
      setErrorMessage(language === 'hi' ? 'कृपया अपना नाम दर्ज करें (कम से कम 2 अक्षर)' : 'Please provide a valid contact name (at least 2 characters).');
      return;
    }

    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setErrorMessage(language === 'hi' ? 'कृपया सही 10-अंकीय मोबाइल नंबर दर्ज करें' : 'Please provide a valid 10-digit mobile number.');
      return;
    }

    if (!formData.email || !formData.email.includes('@')) {
      setErrorMessage(language === 'hi' ? 'कृपया सही ईमेल पता दर्ज करें' : 'Please provide a valid email address.');
      return;
    }

    if (quoteType === 'corporate' && (!formData.companyName || formData.companyName.trim().length < 2)) {
      setErrorMessage(language === 'hi' ? 'कृपया कंपनी का नाम दर्ज करें' : 'Please provide your registered Company / Organization name.');
      return;
    }

    try {
      setIsSubmitting(true);
      const payload = {
        quote_type: quoteType,
        contact_person: formData.name.trim(),
        phone: cleanPhone,
        email: formData.email.trim(),
        services_required: `Mobile App Development: ${formData.appType} [${formData.platforms}] (${formData.screenEstimate})`,
        project_details: formData.details.trim() || 'Mobile App Development quotation requested via dedicated service page.',
        ...(quoteType === 'corporate' && {
          company_name: formData.companyName.trim(),
          gst_number: formData.gstNumber.trim() || null,
          workstation_count: 1,
          fleet_scope: 'Mobile Application Infrastructure',
          preferred_sla: 'Standard App Delivery SLA'
        })
      };

      const res = await fetch('/api/quotations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setSubmissionSuccess(data);
        setFormData({
          name: '',
          phone: '',
          email: '',
          companyName: '',
          gstNumber: '',
          appType: 'Business / Service Booking App',
          platforms: 'Both Android & iOS (Cross-Platform)',
          screenEstimate: 'Introductory Prototype / Utility (Starting Baseline)',
          details: ''
        });
      } else {
        setErrorMessage(data.error || (language === 'hi' ? 'कोटेशन सबमिट करने में विफल। कृपया पुनः प्रयास करें।' : 'Failed to submit quotation. Please try again.'));
      }
    } catch (err) {
      setErrorMessage(language === 'hi' 
        ? 'सर्वर से कनेक्ट करने में असमर्थ। कृपया सीधे व्हाट्सएप पर संपर्क करें।' 
        : 'Network connection error. Please connect directly via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappInquiryMsg = language === 'hi'
    ? 'नमस्ते MrTech Care, मुझे मोबाइल ऐप डेवलपमेंट सेवा (Android / iOS) के बारे में जानकारी और कस्टम कोटेशन चाहिए।'
    : 'Hello MrTech Care, I would like to discuss a Mobile App Development project (Android / iOS) and get a custom quotation.';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-midnight-950 text-slate-900 dark:text-slate-100 py-6 sm:py-10 transition-colors duration-200">
      
      {/* 1. Breadcrumb & Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <button 
            onClick={() => onNavigate && onNavigate('overview')}
            className="hover:text-flame-500 transition-colors"
          >
            {language === 'hi' ? 'होम' : 'Home'}
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button 
            onClick={() => onNavigate && onNavigate('services')}
            className="hover:text-flame-500 transition-colors"
          >
            {language === 'hi' ? 'सेवाएं' : 'Services'}
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 dark:text-white font-bold">
            {language === 'hi' ? 'मोबाइल ऐप डेवलपमेंट' : 'Mobile App Development'}
          </span>
        </nav>
      </div>

      {/* 2. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="rounded-3xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-flame-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-electric-500/15 border border-blue-200 dark:border-electric-500/30 text-electric-600 dark:text-electric-400 text-xs font-bold font-mono uppercase tracking-wide mb-4">
              <Smartphone className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'क्रॉस-प्लेटफॉर्म मोबाइल इंजीनियरिंग' : 'Cross-Platform Mobile Engineering'}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {language === 'hi' 
                ? 'मोबाइल ऐप डेवलपमेंट (Android व iOS)' 
                : 'Cross-Platform Mobile App Development'}
            </h1>

            <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {language === 'hi'
                ? 'व्यवसायों, सर्विस बुकिंग और रिटेल के लिए सुरक्षित, स्मूथ व उपयोगी मोबाइल ऍप्लिकेशन्स। Android और iOS दोनों के लिए एकीकृत कोडबेस, रियल-टाइम बैकएंड सिंक और पारदर्शी कार्यक्षेत्र-आधारित मूल्य निर्धारण।'
                : 'Reliable, cross-platform mobile applications engineered for intuitive touch navigation, responsive workflows, and real-time backend synchronization across Android and iOS devices.'}
            </p>

            {/* Quick Metrics Bar (Without 100% IP claim) */}
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                <span className="block text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {language === 'hi' ? 'शुरुआती बेसलाइन मूल्य' : 'Starting Baseline Price'}
                </span>
                <span className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white font-mono">
                  ₹9,999 <span className="text-xs text-slate-500 font-normal font-sans">{language === 'hi' ? 'से शुरू' : 'onwards'}</span>
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                <span className="block text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {language === 'hi' ? 'प्लेटफॉर्म सपोर्ट' : 'Platform Support'}
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mt-0.5">
                  <Cpu className="w-4 h-4 text-emerald-500" />
                  Android & iOS
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                <span className="block text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {language === 'hi' ? 'साइनिंग कीज व क्रेडेंशियल्स' : 'Keys & Ownership'}
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-electric-400" />
                  {language === 'hi' ? 'क्लाइंट कंट्रोल' : 'Client Credential Control'}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#app-quote-section"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-flame-500 to-crimson-600 hover:from-flame-600 hover:to-crimson-700 shadow-md transition-all duration-200"
              >
                <Send className="w-4 h-4" />
                <span>{language === 'hi' ? 'कस्टम ऐप कोटेशन प्राप्त करें' : 'Request Mobile App Quotation'}</span>
              </a>

              <a
                href={createWhatsAppLink(whatsappInquiryMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-slate-800 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 border border-slate-200 dark:border-white/10 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                <span>{language === 'hi' ? 'व्हाट्सएप पर चर्चा करें' : 'Discuss App Scope on WhatsApp'}</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Service Scope & Mobile Capabilities Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {language === 'hi' ? 'मोबाइल ऐप समाधान एवं कार्यक्षेत्र' : 'Mobile Application Solutions & Scope'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {language === 'hi' 
              ? 'व्यवसायों, ऑन-डिमांड सेवाओं और ग्राहक प्रबंधन के लिए आधुनिक मोबाइल ऍप्लिकेशन्स।' 
              : 'Engineered for smooth touch experiences, fast API communication, and reliable offline data caching.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* 1. Service Booking Apps */}
          <div className="p-6 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-flame-50 dark:bg-flame-500/10 text-flame-500 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'सर्विस बुकिंग एवं अपॉइंटमेंट ऐप' : 'Service Booking & Scheduling'}
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'ग्राहक ऑन-डिमांड सेवाओं की बुकिंग, दिनांक-समय चयन, लाइव ऑर्डर ट्रैकिंग और स्थिति अपडेट सीधे ऐप से प्राप्त कर सकते हैं।'
                : 'On-demand service booking flows, appointment slot selection, order progress tracking, and instant technician status updates.'}
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'कैलेंडर शेड्यूलिंग व स्लॉट मैनेजमेंट' : 'Calendar scheduling & slot management'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'व्हाट्सएप व एसएमएस अलर्ट इंटीग्रेशन' : 'WhatsApp & SMS status triggers'}</span>
              </li>
            </ul>
          </div>

          {/* 2. Customer Portals & Self-Service */}
          <div className="p-6 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-electric-500/10 text-electric-400 flex items-center justify-center mb-4">
              <User className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'ग्राहक अकाउंट एवं पोर्टल ऐप' : 'Customer Account Portals'}
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'सुरक्षित यूजर रजिस्ट्रेशन, प्रोफाइल प्रबंधन, सेवा इतिहास, डिजिटल सदस्यता और इनवॉइस डाउनलोडिंग।'
                : 'Customer self-service apps featuring secure authentication, order history, digital membership cards, and receipt downloads.'}
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'ओटीपी / ईमेल ऑथेंटिकेशन' : 'Secure OTP / email authentication'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'सर्विस हिस्ट्री एवं इनवॉइसिंग' : 'Past service history & invoices'}</span>
              </li>
            </ul>
          </div>

          {/* 3. E-Commerce & Retail Shopping */}
          <div className="p-6 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'ई-कॉमर्स एवं रिटेल कैटलॉग ऐप' : 'E-Commerce & Retail Catalog'}
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'प्रोडक्ट कैटलॉग, विजुअल गैलरी, शॉपिंग कार्ट, विशलिस्ट, चेकआउट और ऑर्डर कन्फर्मेशन स्क्रीन।'
                : 'Dedicated retail shopping apps with dynamic inventory browsing, cart checkout flows, and payment gateway coordination.'}
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'कार्ट प्रबंधन एवं सर्च फिल्टर' : 'Search, filter & shopping cart'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'पेमेंट गेटवे इंटीग्रेशन सहायता' : 'Payment gateway integration setup'}</span>
              </li>
            </ul>
          </div>

          {/* 4. Staff & Field Operations */}
          <div className="p-6 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'फील्ड स्टाफ एवं ऑपरेशनल टूल्स' : 'Field Staff & Operations'}
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'ऑन-फील्ड तकनीशियनों व कर्मचारियों के लिए टास्क मैनेजमेंट, इन्वेंट्री सत्यापन, जॉब स्टेटस अपडेट और डिजिटल सिग्नेचर।'
                : 'Internal operations apps for field technicians, job assignment dispatching, inventory logs, and customer sign-off capture.'}
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'ऑफलाइन डेटा कैशिंग सपोर्ट' : 'Offline local data caching'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'डिजिटल जॉब कार्ड व स्टेटस' : 'Digital job cards & notes'}</span>
              </li>
            </ul>
          </div>

          {/* 5. Cross-Platform Unified Architecture */}
          <div className="p-6 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'क्रॉस-प्लेटफॉर्म यूनिफाइड कोड' : 'Cross-Platform Unified Code'}
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'क्रॉस-प्लेटफॉर्म मोबाइल आर्किटेक्चर पर आधारित एक ही सुव्यवस्थित कोडबेस जो Android और iOS दोनों पर उच्च गुणवत्ता का अनुभव प्रदान करता है।'
                : 'Unified cross-platform code repository driving both Android and iOS apps, reducing duplicate development costs and maintenance overhead.'}
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'सिंगल कोडबेस मेंटेनेंस' : 'Single codebase efficiency'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'प्लेटफॉर्म-विशिष्ट यूआई ट्वीक्स' : 'Platform-specific UI styling'}</span>
              </li>
            </ul>
          </div>

          {/* 6. Maintenance & SDK Upgrades */}
          <div className="p-6 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'ऐप मेंटेनेंस एवं ओएस अपग्रेड' : 'App Maintenance & Upgrades'}
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'नवीनतम Android और iOS संस्करणों के साथ अनुकूलता सुनिश्चित करना, SDK अपडेट्स, बग फिक्सेस और बैकएंड एपीआई संवर्धन।'
                : 'Updating existing mobile codebases for latest Android target SDKs and iOS compliance, API maintenance, and bug fixes.'}
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'Target SDK व API अपडेट' : 'Target SDK & build updates'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'परफॉर्मेंस व क्रैश सुधार' : 'Crash analysis & stabilization'}</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 4. Scope-Based Pricing Architecture Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white to-slate-100 dark:from-midnight-900 dark:to-midnight-950 border border-slate-200 dark:border-white/10 shadow-xs">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-electric-500/20 text-electric-600 dark:text-electric-400 shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {language === 'hi' ? 'पारदर्शी एवं कार्यक्षेत्र-आधारित ऐप मूल्य निर्धारण' : 'Transparent & Scope-Based App Pricing Architecture'}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'hi' ? (
                  <>
                    <strong className="text-slate-900 dark:text-white font-mono">₹9,999</strong> हमारा एंट्री-लेवल शुरुआती बेसलाइन मूल्य है, जो बुनियादी यूटिलिटी इंटरफेस या प्रारंभिक प्रोटोटाइप के लिए मान्य है। बहु-स्क्रीन वाले वाणिज्यिक ऐप्स, यूजर ऑथेंटिकेशन, लाइव डेटाबेस, पुश नोटिफिकेशन और ऐप स्टोर परिनियोजन से युक्त प्रोजेक्ट्स कोटेशन-आधारित होते हैं। अंतिम लागत आपके चुने हुए प्लेटफॉर्म्स (Android, iOS या दोनों), स्क्रीन की संख्या, बैकएंड जटिलता और एकीकरण पर निर्भर करती है।
                  </>
                ) : (
                  <>
                    <strong className="text-slate-900 dark:text-white font-mono">₹9,999 onwards</strong> represents our baseline starting price for an introductory utility, simple tool, or initial prototype interface. Complete commercial mobile applications with multiple functional screens, user authentication, live databases, push notifications, and store deployment are quotation-based. Final cost is calculated directly from your scope—target platforms (Android, iOS, or both), total screen count, backend complexity, offline capability, and third-party integrations.
                  </>
                )}
              </p>
              
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-500 dark:text-slate-400">
                <div className="p-3 rounded-lg bg-white dark:bg-midnight-950 border border-slate-200 dark:border-white/5">
                  <strong className="block text-slate-800 dark:text-slate-200 mb-0.5">
                    {language === 'hi' ? '1. प्लेटफॉर्म एवं स्क्रीन्स' : '1. Target Platforms & Views'}
                  </strong>
                  <span>{language === 'hi' ? 'Android / iOS एवं कुल स्क्रीन संख्या' : 'Android only, iOS only, or dual platform'}</span>
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-midnight-950 border border-slate-200 dark:border-white/5">
                  <strong className="block text-slate-800 dark:text-slate-200 mb-0.5">
                    {language === 'hi' ? '2. बैकएंड व ऑथेंटिकेशन' : '2. Backend & Security'}
                  </strong>
                  <span>{language === 'hi' ? 'क्लाउड डेटाबेस, एपीआई व ओटीपी लॉगिन' : 'Relational APIs, token auth & storage'}</span>
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-midnight-950 border border-slate-200 dark:border-white/5">
                  <strong className="block text-slate-800 dark:text-slate-200 mb-0.5">
                    {language === 'hi' ? '3. स्टोर परिनियोजन' : '3. Store Publishing'}
                  </strong>
                  <span>{language === 'hi' ? 'Play Store व App Store सबमिशन' : 'Keystore signing & store review assistance'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Realistic Technology Stack Table (Strictly Distinguishing Core vs Available on Request) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {language === 'hi' ? 'विश्वसनीय मोबाइल तकनीकी स्टैक' : 'Realistic Mobile Technology Stack'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {language === 'hi'
              ? 'हम केवल उन्हीं तकनीकों को प्रदर्शित करते हैं जिन्हें हम वास्तविक रूप से डिलीवर और सपोर्ट कर सकते हैं।'
              : 'We clearly distinguish our core proven mobile delivery capabilities from project-specific technologies.'}
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-white/10 shadow-xs bg-white dark:bg-midnight-900">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-4 sm:px-6">{language === 'hi' ? 'श्रेणी' : 'Engineering Domain'}</th>
                <th className="py-3 px-4 sm:px-6 text-emerald-600 dark:text-emerald-400">
                  {language === 'hi' ? 'कोर प्रमाणित क्षमताएं (स्टैंडर्ड डिलीवरी)' : 'Core Proven Capabilities (Standard Delivery)'}
                </th>
                <th className="py-3 px-4 sm:px-6 text-slate-500 dark:text-slate-400">
                  {language === 'hi' ? 'अनुरोध पर उपलब्ध (परियोजना विशिष्ट)' : 'Available on Request (Project-Specific)'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300">
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900 dark:text-white">Mobile Architecture & APIs</td>
                <td className="py-3.5 px-4 sm:px-6">RESTful Mobile JSON APIs, Cloudflare Edge Functions, Responsive Mobile Views, Fast2SMS OTP Integration</td>
                <td className="py-3.5 px-4 sm:px-6 text-slate-500">React Native, Expo, Flutter (Dart), Native Android (Kotlin)</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900 dark:text-white">Backend Infrastructure</td>
                <td className="py-3.5 px-4 sm:px-6">Cloudflare Workers, Node.js REST APIs, CORS-compliant serverless endpoints</td>
                <td className="py-3.5 px-4 sm:px-6 text-slate-500">Express.js, Python Flask / FastAPI on custom dedicated VPS</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900 dark:text-white">Data Storage & Caching</td>
                <td className="py-3.5 px-4 sm:px-6">Cloudflare D1 (Serverless SQLite), Cloudflare KV, Client Cache</td>
                <td className="py-3.5 px-4 sm:px-6 text-slate-500">AsyncStorage, PostgreSQL, Supabase, Firebase Cloud Firestore</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900 dark:text-white">Build & Packaging Support</td>
                <td className="py-3.5 px-4 sm:px-6">Production API configuration, Keystore signing guidance, Store metadata review</td>
                <td className="py-3.5 px-4 sm:px-6 text-slate-500">Android APK/AAB compilation, iOS IPA compilation via Apple Developer Program</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900 dark:text-white">Mobile Integrations</td>
                <td className="py-3.5 px-4 sm:px-6">WhatsApp Click-to-Chat, Mobile Webview, Fast2SMS Lead Routing</td>
                <td className="py-3.5 px-4 sm:px-6 text-slate-500">Firebase Cloud Messaging (FCM), Razorpay / Stripe In-App SDK, Biometrics</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. Developer Account Fees, Store Publishing & Credential Handover Terms */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Store Publishing & Developer Accounts (Fee transparency without assumptions) */}
          <div className="p-6 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 space-y-3">
            <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-base">
              <Globe className="w-5 h-5 text-emerald-500" />
              <span>{language === 'hi' ? 'डेवलपर अकाउंट्स एवं स्टोर शुल्क' : 'App Stores & Developer Account Fees'}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'गूगल प्ले और एप्पल डेवलपर पंजीकरण शुल्क संबंधित कंपनियों द्वारा सीधे उनके आधिकारिक वर्तमान दरों पर क्लाइंट के अपने पंजीकृत खाते के माध्यम से लिए जाते हैं। टीम मिस्टरटेक केयर ऐप बंडलिंग, कीस्टोर जनरेशन, प्राइवेसी पॉलिसी सहायता और स्टोर सबमिशन प्रक्रिया में संपूर्ण तकनीकी मार्गदर्शन प्रदान करती है।'
                : 'Google Play Console and Apple Developer Program registration fees are charged directly by Google and Apple respectively under the client\'s own registered developer account at their official current rates. Team MrTech Care provides technical assistance with application bundling, keystore generation, privacy policy templates, and store submission.'}
            </p>
          </div>

          {/* Secure Signing Keys & Production Credentials Handover */}
          <div className="p-6 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 space-y-3">
            <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-base">
              <ShieldCheck className="w-5 h-5 text-flame-500" />
              <span>{language === 'hi' ? 'साइनिंग कीज एवं क्रेडेंशियल सुरक्षा' : 'Signing Keys & Credential Handover'}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'क्लाइंट अपने प्रोडक्शन क्रेडेंशियल्स, रिलीज कीस्टोर्स (.jks), सर्विस अकाउंट कीज और डेटाबेस एक्सेस पर पूर्ण नियंत्रण रखते हैं। प्रोजेक्ट पूर्ण होने पर संपूर्ण सोर्स कोड और कीज सुरक्षित क्रेडेंशियल हैंडओवर प्रथाओं के तहत क्लाइंट को सौंपी जाती हैं।'
                : 'Clients retain full control and direct ownership of their production credentials, release signing keystores (.jks), API secrets, and server accounts. We practice secure credential handover upon milestone completion with zero vendor lock-in.'}
            </p>
          </div>

        </div>
      </section>

      {/* 7. Dedicated Quotation Form (Wired to /api/quotations) */}
      <section id="app-quote-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 scroll-mt-24">
        <div className="rounded-3xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 p-6 sm:p-10 shadow-md">
          
          <div className="max-w-2xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-electric-500/10 text-electric-600 dark:text-electric-400 text-xs font-bold mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'आधिकारिक मोबाइल ऐप कोटेशन' : 'Official App Project Quotation'}</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {language === 'hi' ? 'मोबाइल ऐप कोटेशन के लिए अनुरोध करें' : 'Request a Mobile App Development Quotation'}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {language === 'hi'
                ? 'अपने मोबाइल ऐप प्रोजेक्ट की रूपरेखा साझा करें। टीम मिस्टरटेक केयर तकनीकी समीक्षा कर 24 घंटे में विस्तृत कोटेशन भेजेगी।'
                : 'Share your mobile app requirements. Team MrTech Care will evaluate your target platforms, view hierarchy, and respond within 24 hours.'}
            </p>
          </div>

          {/* Submission Success Banner */}
          {submissionSuccess && (
            <div className="max-w-2xl mx-auto mb-8 p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-500/40 animate-fadeIn">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
                    {language === 'hi' ? 'ऐप कोटेशन अनुरोध सफलतापूर्वक दर्ज!' : 'App Quotation Request Recorded Successfully!'}
                  </h4>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300">
                    {submissionSuccess.message}
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700">
                      Ref: {submissionSuccess.quoteNumber}
                    </span>
                    <a
                      href={createWhatsAppLink(`Hi MrTech Care, I just submitted mobile app quote request ${submissionSuccess.quoteNumber}. Can you please review it?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-300 hover:underline"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-current" />
                      <span>{language === 'hi' ? 'व्हाट्सएप पर पुष्टि भेजें' : 'Send WhatsApp Follow-up'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Form Error Banner */}
          {errorMessage && (
            <div className="max-w-2xl mx-auto mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-300 dark:border-red-500/40 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Quotation Form */}
          <form onSubmit={handleSubmitQuote} className="max-w-2xl mx-auto space-y-5">
            
            {/* Quote Type Toggle */}
            <div className="flex p-1 rounded-xl bg-slate-100 dark:bg-midnight-950 border border-slate-200 dark:border-white/10 max-w-xs mx-auto">
              <button
                type="button"
                onClick={() => setQuoteType('individual')}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  quoteType === 'individual'
                    ? 'bg-white dark:bg-midnight-800 text-flame-600 dark:text-flame-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'व्यक्तिगत / व्यवसाय' : 'Individual / Small Biz'}</span>
              </button>
              <button
                type="button"
                onClick={() => setQuoteType('corporate')}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  quoteType === 'corporate'
                    ? 'bg-white dark:bg-midnight-800 text-flame-600 dark:text-flame-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'कॉर्पोरेट RFP' : 'Corporate / Company'}</span>
              </button>
            </div>

            {/* Corporate Fields */}
            {quoteType === 'corporate' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-200 dark:border-white/5 animate-fadeIn">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {language === 'hi' ? 'कंपनी / संगठन का नाम *' : 'Company / Organization Name *'}
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="e.g. Apex Logistics Pvt Ltd"
                    required
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-midnight-900 border border-slate-300 dark:border-white/10 text-xs focus:ring-2 focus:ring-flame-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {language === 'hi' ? 'जीएसटी नंबर (वैकल्पिक)' : 'GST Number (Optional)'}
                  </label>
                  <input
                    type="text"
                    name="gstNumber"
                    value={formData.gstNumber}
                    onChange={handleInputChange}
                    placeholder="07AAAAA0000A1Z5"
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-midnight-900 border border-slate-300 dark:border-white/10 text-xs focus:ring-2 focus:ring-flame-500 focus:outline-none uppercase"
                  />
                </div>
              </div>
            )}

            {/* Contact Person & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {language === 'hi' ? 'आपका नाम *' : 'Contact Person *'}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Sunita Verma"
                  required
                  className="w-full px-3 py-2.5 rounded-lg bg-white dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs focus:ring-2 focus:ring-flame-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {language === 'hi' ? 'मोबाइल नंबर (10 अंक) *' : 'Mobile Number (10 digits) *'}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-mono">+91</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="9812345678"
                    maxLength={10}
                    required
                    className="w-full pl-11 pr-3 py-2.5 rounded-lg bg-white dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs font-mono focus:ring-2 focus:ring-flame-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Email & App Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {language === 'hi' ? 'ईमेल पता *' : 'Email Address *'}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="sunita@example.com"
                  required
                  className="w-full px-3 py-2.5 rounded-lg bg-white dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs focus:ring-2 focus:ring-flame-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {language === 'hi' ? 'ऐप का प्रकार *' : 'Application Type *'}
                </label>
                <select
                  name="appType"
                  value={formData.appType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 rounded-lg bg-white dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs focus:ring-2 focus:ring-flame-500 focus:outline-none"
                >
                  {appTypes.map(type => (
                    <option key={type.id} value={type.label}>{type.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Target Platforms & Screen Estimates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {language === 'hi' ? 'लक्षित ऑपरेटिंग सिस्टम *' : 'Target Platform *'}
                </label>
                <select
                  name="platforms"
                  value={formData.platforms}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 rounded-lg bg-white dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs focus:ring-2 focus:ring-flame-500 focus:outline-none"
                >
                  <option value="Both Android & iOS (Cross-Platform)">Both Android & iOS (Cross-Platform Recommended)</option>
                  <option value="Android Only">Android Only (Google Play Store)</option>
                  <option value="iOS Only">iOS Only (Apple App Store)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {language === 'hi' ? 'अनुमानित स्क्रीन / कार्यक्षेत्र' : 'Estimated Views & Complexity'}
                </label>
                <select
                  name="screenEstimate"
                  value={formData.screenEstimate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 rounded-lg bg-white dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs focus:ring-2 focus:ring-flame-500 focus:outline-none"
                >
                  <option value="Introductory Prototype / Utility (Starting Baseline)">Introductory Utility / Prototype (Starting Baseline - ₹9,999 onwards)</option>
                  <option value="Standard Business App (4-8 Screens)">Standard Business App (4–8 Screens - Quotation-based)</option>
                  <option value="Full Service Booking App (8-15 Screens)">Full Service Booking App (8–15 Screens - Quotation-based)</option>
                  <option value="E-Commerce Shopping App with Cart & Payment">E-Commerce Shopping App with Cart & Payment (Quotation-based)</option>
                  <option value="Enterprise Field Operations Tool with Offline Sync">Enterprise Field Operations Tool with Offline Sync (Quotation-based)</option>
                </select>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {language === 'hi' ? 'परियोजना का विवरण एवं मुख्य सुविधाएं' : 'Project Scope & Required Features'}
              </label>
              <textarea
                name="details"
                rows={3}
                value={formData.details}
                onChange={handleInputChange}
                placeholder={language === 'hi' 
                  ? 'अपने ऐप की मुख्य आवश्यकताएं बताएं (उदा. लॉगिन विधि, बुकिंग फ्लो, पुश नोटिफिकेशन)...' 
                  : 'Describe your mobile app goals, user roles (e.g. customer vs staff), notification needs, payment requirements...'}
                className="w-full px-3 py-2.5 rounded-lg bg-white dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs focus:ring-2 focus:ring-flame-500 focus:outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-flame-500 to-crimson-600 hover:from-flame-600 hover:to-crimson-700 shadow-md transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>{language === 'hi' ? 'कोटेशन सबमिट हो रहा है...' : 'Recording Quotation in Cloudflare D1...'}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{language === 'hi' ? 'ऐप कोटेशन अनुरोध सबमिट करें' : 'Submit Mobile App Quotation Request'}</span>
                  </>
                )}
              </button>
              <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400">
                {language === 'hi'
                  ? '🔒 आपका डेटा गोपनीय है। कोई अग्रिम भुगतान आवश्यक नहीं है।'
                  : '🔒 Confidential inquiry. Direct D1 registration with zero upfront payment.'}
              </p>
            </div>

          </form>

        </div>
      </section>

      {/* 8. Cross-Link Banner to Website Development */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="p-6 rounded-2xl bg-slate-900 text-white dark:bg-midnight-900 border border-slate-800 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-electric-500/20 text-electric-400 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold">
                {language === 'hi' ? 'क्या आपको व्यावसायिक वेबसाइट की आवश्यकता है?' : 'Looking for a Modern Business Website or Portal?'}
              </h4>
              <p className="text-xs text-slate-400">
                {language === 'hi' 
                  ? 'React और Cloudflare द्वारा संचालित हाई-परफॉर्मेंस वेबसाइट्स (₹4,999 से शुरू)।' 
                  : 'High-performance websites and client portals starting from ₹4,999 onwards.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate && onNavigate('web-dev')}
            type="button"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-flame-500 hover:bg-flame-600 transition-colors shrink-0"
          >
            <span>{language === 'hi' ? 'वेबसाइट डेवलपमेंट देखें' : 'Explore Website Development'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
};
