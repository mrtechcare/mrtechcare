import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { createWhatsAppLink, DISPLAY_PHONE } from '../utils/whatsapp';
import { 
  Globe, 
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
  Smartphone,
  Server,
  Zap,
  HelpCircle
} from 'lucide-react';

export const WebDevelopmentPage = ({ onNavigate }) => {
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
    websiteType: 'Business Website',
    pagesEstimate: 'Single Landing Page (Starting Baseline)',
    details: ''
  });

  const websiteTypes = [
    { id: 'landing', label: language === 'hi' ? 'सिंगल-पेज लैंडिंग साइट' : 'Single-Page Landing Site' },
    { id: 'business', label: language === 'hi' ? 'बिजनेस / कॉर्पोरेट वेबसाइट' : 'Corporate / Business Website' },
    { id: 'portfolio', label: language === 'hi' ? 'पोर्टफोलियो एवं शोकेस' : 'Portfolio & Showcase' },
    { id: 'portal', label: language === 'hi' ? 'कस्टम वेब ऐप / पोर्टल' : 'Custom Web App / Portal' },
    { id: 'ecommerce', label: language === 'hi' ? 'ई-कॉमर्स / प्रोडक्ट कैटलॉग' : 'E-Commerce / Product Catalog' },
    { id: 'redesign', label: language === 'hi' ? 'वेबसाइट री-डिजाइन व स्पीड' : 'Website Redesign & Maintenance' }
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
        services_required: `Website Development: ${formData.websiteType} (${formData.pagesEstimate})`,
        project_details: formData.details.trim() || 'Website Development quotation requested via dedicated service page.',
        ...(quoteType === 'corporate' && {
          company_name: formData.companyName.trim(),
          gst_number: formData.gstNumber.trim() || null,
          workstation_count: 1,
          fleet_scope: 'Web Portal Infrastructure',
          preferred_sla: 'Standard Web Delivery SLA'
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
          websiteType: 'Business Website',
          pagesEstimate: 'Single Landing Page (Starting Baseline)',
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
    ? 'नमस्ते MrTech Care, मुझे वेबसाइट डेवलपमेंट सेवा के बारे में जानकारी और कस्टम कोटेशन चाहिए।'
    : 'Hello MrTech Care, I would like to discuss a Website Development project and get a custom quotation.';

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
            {language === 'hi' ? 'वेबसाइट डेवलपमेंट' : 'Website Development'}
          </span>
        </nav>
      </div>

      {/* 2. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="rounded-3xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-flame-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-electric-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-flame-100 dark:bg-flame-500/15 border border-flame-200 dark:border-flame-500/30 text-flame-700 dark:text-flame-400 text-xs font-bold font-mono uppercase tracking-wide mb-4">
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'आधुनिक वेब इंजीनियरिंग' : 'Modern Web Engineering'}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {language === 'hi' 
                ? 'हाई-परफॉर्मेंस वेबसाइट डेवलपमेंट' 
                : 'High-Performance Modern Website Development'}
            </h1>

            <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {language === 'hi'
                ? 'बिजनेस वेबसाइट्स, लैंडिंग पेज और इंटरैक्टिव पोर्टल्स—React, Vite और आधुनिक क्लाउड तकनीकों द्वारा निर्मित। मोबाइल-फ्रेंडली रिस्पॉन्सिव लेआउट, सर्च इंजन अनुकूल संरचना और सुरक्षित क्लाउड सेटअप।'
                : 'Fast, responsive, search-friendly business websites and interactive client portals. Engineered with clean React architecture, modern CSS, and Cloudflare edge delivery with transparent, scope-based pricing.'}
            </p>

            {/* Quick Metrics Bar (Without 100% IP claim) */}
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                <span className="block text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {language === 'hi' ? 'शुरुआती बेसलाइन मूल्य' : 'Starting Baseline Price'}
                </span>
                <span className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white font-mono">
                  ₹4,999 <span className="text-xs text-slate-500 font-normal font-sans">{language === 'hi' ? 'से शुरू' : 'onwards'}</span>
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                <span className="block text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {language === 'hi' ? 'सुरक्षा एवं प्रदर्शन' : 'Security & CDN'}
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Cloudflare SSL/TLS
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                <span className="block text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {language === 'hi' ? 'डिलीवरी एवं स्वामित्व' : 'Delivery & Ownership'}
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mt-0.5">
                  <Code2 className="w-4 h-4 text-electric-400" />
                  {language === 'hi' ? 'सोर्स कोड हैंडओवर' : 'Source Code Handover'}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#quote-section"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-flame-500 to-crimson-600 hover:from-flame-600 hover:to-crimson-700 shadow-md transition-all duration-200"
              >
                <Send className="w-4 h-4" />
                <span>{language === 'hi' ? 'कस्टम कोटेशन प्राप्त करें' : 'Request Custom Website Quote'}</span>
              </a>

              <a
                href={createWhatsAppLink(whatsappInquiryMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-slate-800 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 border border-slate-200 dark:border-white/10 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                <span>{language === 'hi' ? 'व्हाट्सएप पर बात करें' : 'Chat on WhatsApp'}</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Service Scope & Catalog Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {language === 'hi' ? 'वेबसाइट समाधान एवं कार्यक्षेत्र' : 'Website Solutions & Capabilities'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {language === 'hi' 
              ? 'आपकी व्यावसायिक आवश्यकताओं के अनुसार तैयार किए गए वेब डेवलपमेंट समाधान।' 
              : 'Engineered for modern performance, clean user navigation, and business conversions.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* 1. Landing Pages */}
          <div className="p-6 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-flame-50 dark:bg-flame-500/10 text-flame-500 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'सिंगल-पेज एवं लैंडिंग साइट' : 'Single-Page & Landing Sites'}
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'हाई-कन्वर्टिंग लैंडिंग पेज जो खास तौर पर लीड जनरेशन, उत्पाद लॉन्च, या स्थानीय व्यावसायिक प्रचार के लिए तैयार किए जाते हैं।'
                : 'High-converting single-page websites tailored for focused lead capture, promotional campaigns, or local service presentations.'}
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'कॉल-टू-एक्शन एवं व्हाट्सएप इंटीग्रेशन' : 'Call-to-Action & WhatsApp integration'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'फास्ट मोबाइल लोड स्पीड' : 'Fast mobile loading speed'}</span>
              </li>
            </ul>
          </div>

          {/* 2. Corporate & Business Websites */}
          <div className="p-6 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-electric-500/10 text-electric-400 flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'मल्टी-पेज कॉर्पोरेट वेबसाइट' : 'Multi-Page Business Websites'}
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'कंपनियों, एजेंसियों और सेवा प्रदाताओं के लिए पेशेवर वेब उपस्थिति (होम, परिचय, सेवाएं, केस स्टडीज, संपर्क)।'
                : 'Structured multi-page company web presence presenting your core services, company profile, client testimonials, and inquiries.'}
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'स्पष्ट नेविगेशन व सर्च फ्रेंडली संरचना' : 'Clean multi-page navigation & SEO layout'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'कॉन्टैक्ट फॉर्म व इंक्वायरी रूटिंग' : 'Contact forms & inquiry routing'}</span>
              </li>
            </ul>
          </div>

          {/* 3. Portfolios */}
          <div className="p-6 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'प्रोफेशनल पोर्टफोलियो एवं शोकेस' : 'Portfolios & Showcase Sites'}
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'फोटोग्राफरों, आर्किटेक्ट्स, डिजाइनरों व सलाहकारों के लिए आकर्षक विजुअल गैलरी और वर्क शोकेस।'
                : 'Visually rich portfolio platforms for creative studios, architects, photographers, and independent consultants.'}
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'हाई-रेजोल्यूशन इमेज गैलरी व फिल्टर' : 'Responsive media showcase & filters'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'ब्रांडेड डिजाइन प्रेजेंटेशन' : 'Bespoke branding & aesthetic layout'}</span>
              </li>
            </ul>
          </div>

          {/* 4. Custom Web Applications */}
          <div className="p-6 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'कस्टम वेब ऐप एवं कस्टमर पोर्टल' : 'Custom Web Apps & Portals'}
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'डेटाबेस-कनेक्टेड कस्टम वेब ऍप्लिकेशन्स, क्लाइंट अकाउंट एरिया, बुकिंग इंजन और इंटरैक्टिव डैशबोर्ड।'
                : 'Dynamic web applications featuring customer login, service tracking, booking management, and relational database storage.'}
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'Cloudflare D1 / SQL डेटा स्टोरेज' : 'Cloudflare D1 / relational data store'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'सुरक्षित ऑथेंटिकेशन व सेशन मैनेजमेंट' : 'Secure session & credential management'}</span>
              </li>
            </ul>
          </div>

          {/* 5. E-Commerce & Catalogs */}
          <div className="p-6 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'ई-कॉमर्स एवं प्रोडक्ट कैटलॉग' : 'E-Commerce & Product Catalogs'}
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'उत्पाद सूचीकरण, सर्च व फिल्टर, शॉपिंग कार्ट फ्लो और डायरेक्ट व्हाट्सएप या पेमेंट गेटवे इंटीग्रेशन।'
                : 'Digital catalogs with category filtering, detailed product views, shopping cart interactions, and payment ready gateways.'}
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'ऑर्डर मैनेजमेंट व व्हाट्सएप ऑर्डरिंग' : 'Cart management & WhatsApp ordering'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'पेमेंट गेटवे इंटीग्रेशन सहायता' : 'Payment gateway integration setup'}</span>
              </li>
            </ul>
          </div>

          {/* 6. Redesign & Performance Tuning */}
          <div className="p-6 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 hover:border-flame-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'री-डिजाइन एवं स्पीड ऑप्टिमाइजेशन' : 'Redesign & Speed Optimization'}
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'पुरानी और धीमी वेबसाइटों का आधुनिकीकरण, मोबाइल रिस्पॉन्सिव सुधार, कोड सफाई और स्पीड ऑप्टिमाइजेशन।'
                : 'Modernizing legacy websites with clean responsive code, asset compression, CDN caching, and layout polish.'}
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'मोबाइल ब्रेकपॉइंट व लेआउट सुधार' : 'Mobile breakpoint repairs & modern UI'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'इमेज व स्क्रिप्ट ऑप्टिमाइजेशन' : 'Asset minification & cache policies'}</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 4. Scope-Based Pricing Architecture Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white to-slate-100 dark:from-midnight-900 dark:to-midnight-950 border border-slate-200 dark:border-white/10 shadow-xs">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2.5 rounded-xl bg-flame-100 dark:bg-flame-500/20 text-flame-600 dark:text-flame-400 shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {language === 'hi' ? 'पारदर्शी एवं कार्यक्षेत्र-आधारित मूल्य निर्धारण' : 'Transparent & Scope-Based Pricing Architecture'}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'hi' ? (
                  <>
                    <strong className="text-slate-900 dark:text-white font-mono">₹4,999</strong> हमारा एंट्री-लेवल शुरुआती बेसलाइन मूल्य है, जो बुनियादी सिंगल-पेज लैंडिंग साइट या बेसिक वेब उपस्थिति के लिए उपयुक्त है। अंतिम परियोजना लागत आपके प्रोजेक्ट के विशिष्ट कार्यक्षेत्र पर निर्भर करती है—जैसे कुल पृष्ठों की संख्या, कस्टम डिजाइन, डेटाबेस व फॉर्म्स, और तृतीय-पक्ष एकीकरण। हर मल्टी-पेज या कस्टम प्रोजेक्ट के लिए काम शुरू होने से पहले एक स्पष्ट, लिखित कोटेशन प्रदान किया जाता है।
                  </>
                ) : (
                  <>
                    <strong className="text-slate-900 dark:text-white font-mono">₹4,999 onwards</strong> represents our baseline starting price for an entry-level, single-purpose landing page or basic web presence. Final project cost is determined by your specific requirements—including total number of pages, custom UI/UX design depth, database integrations, dynamic forms, and third-party APIs. Every multi-page or functional business website receives an itemized, transparent quotation before work commences.
                  </>
                )}
              </p>
              
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-500 dark:text-slate-400">
                <div className="p-3 rounded-lg bg-white dark:bg-midnight-950 border border-slate-200 dark:border-white/5">
                  <strong className="block text-slate-800 dark:text-slate-200 mb-0.5">
                    {language === 'hi' ? '1. पेज एवं सामग्री' : '1. Page Count & Content'}
                  </strong>
                  <span>{language === 'hi' ? 'पेजों की संख्या और सामग्री लेआउट' : 'Number of distinct views, sections & assets'}</span>
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-midnight-950 border border-slate-200 dark:border-white/5">
                  <strong className="block text-slate-800 dark:text-slate-200 mb-0.5">
                    {language === 'hi' ? '2. कार्यक्षमता व डेटाबेस' : '2. Dynamic Functionality'}
                  </strong>
                  <span>{language === 'hi' ? 'डेटाबेस, ग्राहक लॉगिन व फॉर्म्स' : 'Relational databases, portal login & APIs'}</span>
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-midnight-950 border border-slate-200 dark:border-white/5">
                  <strong className="block text-slate-800 dark:text-slate-200 mb-0.5">
                    {language === 'hi' ? '3. तृतीय-पक्ष एकीकरण' : '3. Integrations'}
                  </strong>
                  <span>{language === 'hi' ? 'पेमेंट गेटवे, एसएमएस व मैप्स' : 'Payment gateways, SMS alerts & external tools'}</span>
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
            {language === 'hi' ? 'विश्वसनीय तकनीकी स्टैक' : 'Realistic Technical Stack'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {language === 'hi'
              ? 'हम केवल उन्हीं तकनीकों को प्रदर्शित करते हैं जिन्हें हम वास्तविक रूप से डिलीवर और सपोर्ट कर सकते हैं।'
              : 'We clearly distinguish our core proven delivery capabilities from technologies deployed on project-specific requirements.'}
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
                <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900 dark:text-white">Frontend Architecture</td>
                <td className="py-3.5 px-4 sm:px-6">React 18, Vite, Tailwind CSS, Semantic HTML5, Modern ES6+ JavaScript</td>
                <td className="py-3.5 px-4 sm:px-6 text-slate-500">Next.js (SSR / SSG), TypeScript, Vue.js</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900 dark:text-white">Serverless Backend & APIs</td>
                <td className="py-3.5 px-4 sm:px-6">Cloudflare Pages Functions, Cloudflare Workers, Node.js REST APIs</td>
                <td className="py-3.5 px-4 sm:px-6 text-slate-500">Express.js, Python Flask / FastAPI on custom VPS</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900 dark:text-white">Database & Storage</td>
                <td className="py-3.5 px-4 sm:px-6">Cloudflare D1 (Serverless SQLite), Cloudflare KV, Browser LocalStorage</td>
                <td className="py-3.5 px-4 sm:px-6 text-slate-500">PostgreSQL, MySQL, Supabase, Firebase</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900 dark:text-white">Security & DNS</td>
                <td className="py-3.5 px-4 sm:px-6">Cloudflare DNS, Cloudflare SSL/TLS proxy configuration, WAF rules</td>
                <td className="py-3.5 px-4 sm:px-6 text-slate-500">Custom SSL installation on cPanel/Plesk Linux servers</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900 dark:text-white">Business Integrations</td>
                <td className="py-3.5 px-4 sm:px-6">WhatsApp Click-to-Chat, Google Maps Embed, Fast2SMS Lead Routing</td>
                <td className="py-3.5 px-4 sm:px-6 text-slate-500">Razorpay, Cashfree, Stripe payment gateways, Custom Webhooks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. SSL, Hosting & Ownership Terms */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* SSL & Infrastructure Terms */}
          <div className="p-6 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 space-y-3">
            <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-base">
              <Lock className="w-5 h-5 text-emerald-500" />
              <span>{language === 'hi' ? 'SSL सर्टिफिकेट एवं होस्टिंग व्यवस्था' : 'SSL & Hosting Arrangements'}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'जब आपकी डोमेन का DNS क्लाउडफ्लेयर प्रॉक्सी के माध्यम से सेट किया जाता है, तो निःशुल्क Cloudflare Universal SSL/TLS कॉन्फ़िगरेशन प्रदान किया जाता है। डोमेन पंजीकरण शुल्क (उदा. BigRock, Namecheap), वार्षिक होस्टिंग सर्वर शुल्क, एसएमएस पैक और पेमेंट गेटवे शुल्क संबंधित सेवा प्रदाताओं द्वारा सीधे देय होते हैं, जब तक कि औपचारिक कोटेशन में शामिल न हों।'
                : 'Free Cloudflare Universal SSL/TLS configuration is provided when domain DNS is routed through Cloudflare\'s secure proxy. Domain registration fees, annual server hosting plans, third-party SMS pack credits, and payment gateway merchant transaction fees remain separate client costs unless explicitly itemized in a written quotation.'}
            </p>
          </div>

          {/* Source Code Handover & Credential Control */}
          <div className="p-6 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 space-y-3">
            <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-base">
              <ShieldCheck className="w-5 h-5 text-flame-500" />
              <span>{language === 'hi' ? 'सोर्स कोड एवं क्रेडेंशियल सुरक्षा' : 'Deliverables & Credential Control'}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'प्रोजेक्ट के पूर्ण होने व भुगतान पर, क्लाइंट को संपूर्ण प्रोडक्शन सोर्स कोड और परिनियोजन कॉन्फ़िगरेशन सौंपा जाता है। क्लाइंट अपने प्रोडक्शन क्रेडेंशियल्स और डोमेन सेटिंग्स पर पूर्ण नियंत्रण रखते हैं। हम सुरक्षित क्रेडेंशियल हैंडओवर प्रथाओं का पालन करते हैं।'
                : 'Upon final milestone settlement, complete production source code and deployment configurations are delivered to the client. Clients retain full ownership and control over their production credentials, hosting accounts, and DNS records with zero vendor lock-in, using secure handover protocols.'}
            </p>
          </div>

        </div>
      </section>

      {/* 7. Dedicated Quotation Form (Wired to /api/quotations) */}
      <section id="quote-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 scroll-mt-24">
        <div className="rounded-3xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 p-6 sm:p-10 shadow-md">
          
          <div className="max-w-2xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'आधिकारिक कोटेशन अनुरोध' : 'Official Project Quotation'}</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {language === 'hi' ? 'वेबसाइट कोटेशन के लिए अनुरोध करें' : 'Request a Website Development Quotation'}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {language === 'hi'
                ? 'अपने प्रोजेक्ट की रूपरेखा साझा करें। टीम मिस्टरटेक केयर आवश्यकतानुसार समीक्षा कर 24 घंटे में विस्तृत कोटेशन भेजेगी।'
                : 'Share your project scope. Team MrTech Care will evaluate your technical specifications and respond within 24 hours.'}
            </p>
          </div>

          {/* Submission Success Banner */}
          {submissionSuccess && (
            <div className="max-w-2xl mx-auto mb-8 p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-500/40 animate-fadeIn">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
                    {language === 'hi' ? 'कोटेशन अनुरोध सफलतापूर्वक दर्ज!' : 'Quotation Request Recorded Successfully!'}
                  </h4>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300">
                    {submissionSuccess.message}
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700">
                      Ref: {submissionSuccess.quoteNumber}
                    </span>
                    <a
                      href={createWhatsAppLink(`Hi MrTech Care, I just submitted website quote request ${submissionSuccess.quoteNumber}. Can you please review it?`)}
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
                    placeholder="e.g. Apex Enterprises Pvt Ltd"
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
                  placeholder="e.g. Vikram Sharma"
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
                    placeholder="9876543210"
                    maxLength={10}
                    required
                    className="w-full pl-11 pr-3 py-2.5 rounded-lg bg-white dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs font-mono focus:ring-2 focus:ring-flame-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Email & Website Category */}
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
                  placeholder="vikram@example.com"
                  required
                  className="w-full px-3 py-2.5 rounded-lg bg-white dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs focus:ring-2 focus:ring-flame-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {language === 'hi' ? 'वेबसाइट का प्रकार *' : 'Website Type *'}
                </label>
                <select
                  name="websiteType"
                  value={formData.websiteType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 rounded-lg bg-white dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs focus:ring-2 focus:ring-flame-500 focus:outline-none"
                >
                  {websiteTypes.map(type => (
                    <option key={type.id} value={type.label}>{type.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Estimated Pages / Scope */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {language === 'hi' ? 'अनुमानित पेज / कार्यक्षेत्र' : 'Estimated Scope & Pages'}
              </label>
              <select
                name="pagesEstimate"
                value={formData.pagesEstimate}
                onChange={handleInputChange}
                className="w-full px-3 py-2.5 rounded-lg bg-white dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs focus:ring-2 focus:ring-flame-500 focus:outline-none"
              >
                <option value="Single Landing Page (Starting Baseline)">Single Landing Page (Starting Baseline - ₹4,999 onwards)</option>
                <option value="Multi-Page Website (3-5 Pages)">Multi-Page Website (3–5 Pages - Quotation-based)</option>
                <option value="Comprehensive Business Portal (6-12 Pages)">Comprehensive Business Portal (6–12 Pages - Quotation-based)</option>
                <option value="Custom Web App / Portal with Database">Custom Web App / Portal with Database (Quotation-based)</option>
                <option value="E-Commerce Catalog with Payment Gateway">E-Commerce Catalog with Payment Gateway (Quotation-based)</option>
              </select>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {language === 'hi' ? 'परियोजना का विवरण एवं आवश्यकताएं' : 'Project Scope & Specific Requirements'}
              </label>
              <textarea
                name="details"
                rows={3}
                value={formData.details}
                onChange={handleInputChange}
                placeholder={language === 'hi' 
                  ? 'अपनी वेबसाइट की मुख्य विशेषताएं बताएं (उदा. WhatsApp चैट, पेमेंट फॉर्म, विशिष्ट डिजाइन)...' 
                  : 'Describe your website goals, essential features (e.g., booking form, WhatsApp chat, payment integration)...'}
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
                    <span>{language === 'hi' ? 'कोटेशन अनुरोध सबमिट करें' : 'Submit Website Quotation Request'}</span>
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

      {/* 8. Cross-Link Banner to App Development */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="p-6 rounded-2xl bg-slate-900 text-white dark:bg-midnight-900 border border-slate-800 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-flame-500/20 text-flame-400 flex items-center justify-center shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold">
                {language === 'hi' ? 'क्या आपको मोबाइल ऐप की भी आवश्यकता है?' : 'Looking for a Companion Mobile Application?'}
              </h4>
              <p className="text-xs text-slate-400">
                {language === 'hi' 
                  ? 'Android और iOS दोनों के लिए क्रॉस-प्लेटफॉर्म मोबाइल ऐप डेवलपमेंट (₹9,999 से शुरू)।' 
                  : 'Cross-platform Android & iOS applications starting from ₹9,999 onwards.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate && onNavigate('app-dev')}
            type="button"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-flame-500 hover:bg-flame-600 transition-colors shrink-0"
          >
            <span>{language === 'hi' ? 'ऐप डेवलपमेंट देखें' : 'Explore App Development'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
};
