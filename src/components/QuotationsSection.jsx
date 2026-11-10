import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { createWhatsAppLink, DISPLAY_PHONE } from '../utils/whatsapp';
import { 
  Building2, 
  User, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles, 
  Briefcase, 
  Laptop, 
  Monitor, 
  Server, 
  Send,
  AlertCircle,
  Clock,
  Phone,
  Lock,
  Wrench
} from 'lucide-react';

export const QuotationsSection = () => {
  const { language } = useLanguage();
  const [quoteType, setQuoteType] = useState('corporate'); // 'corporate' | 'individual'

  // Corporate Form State
  const [corpForm, setCorpForm] = useState({
    companyName: '',
    gstNumber: '',
    contactPerson: '',
    phone: '',
    email: '',
    workstationCount: '10 - 25 Systems',
    fleetScope: 'Desktops, Laptops & Network Printers',
    serviceRequired: 'Corporate AMC (Hardware + Software)',
    preferredSla: 'Standard Scheduled Preventative Maintenance',
    projectDetails: ''
  });

  // Individual Form State
  const [indForm, setIndForm] = useState({
    name: '',
    phone: '',
    email: '',
    device: 'Laptop (Windows / Mac)',
    serviceRequired: 'On-site Doorstep Repair',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCorpSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSubmissionSuccess(null);

    const cleanPhone = corpForm.phone.trim().replace(/\s+/g, '').replace(/^(\+91)/, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setErrorMessage(language === 'hi' ? 'कृपया सही 10-अंकीय मोबाइल नंबर दर्ज करें' : 'Please provide a valid 10-digit mobile number.');
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch('/api/quotations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quote_type: 'corporate',
          company_name: corpForm.companyName,
          gst_number: corpForm.gstNumber,
          contact_person: corpForm.contactPerson,
          phone: cleanPhone,
          email: corpForm.email,
          workstation_count: parseInt(corpForm.workstationCount, 10) || 15,
          fleet_scope: corpForm.fleetScope,
          services_required: corpForm.serviceRequired,
          preferred_sla: corpForm.preferredSla,
          project_details: corpForm.projectDetails
        })
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmissionSuccess(data);
      } else {
        setErrorMessage(data.error || 'Failed to submit quotation request.');
      }
    } catch (err) {
      setErrorMessage('Network error submitting quotation. Please try WhatsApp directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleIndSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSubmissionSuccess(null);

    const cleanPhone = indForm.phone.trim().replace(/\s+/g, '').replace(/^(\+91)/, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setErrorMessage(language === 'hi' ? 'कृपया सही 10-अंकीय मोबाइल नंबर दर्ज करें' : 'Please provide a valid 10-digit mobile number.');
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch('/api/quotations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quote_type: 'individual',
          contact_person: indForm.name,
          phone: cleanPhone,
          email: indForm.email,
          services_required: `${indForm.device} - ${indForm.serviceRequired}`,
          project_details: indForm.details
        })
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmissionSuccess(data);
      } else {
        setErrorMessage(data.error || 'Failed to register quotation request.');
      }
    } catch (err) {
      setErrorMessage('Network error submitting quotation.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quotations" className="py-16 lg:py-20 relative bg-slate-50 dark:bg-midnight-950 border-t border-slate-200 dark:border-white/5 transition-colors duration-200">
      
      {/* Background radial accent */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-flame-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-electric-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-flame-100 dark:bg-flame-500/15 border border-flame-200 dark:border-flame-500/30 text-flame-700 dark:text-flame-400 text-xs font-bold uppercase tracking-wider mb-2.5">
            <FileText className="w-3.5 h-3.5 text-flame-600 dark:text-flame-400" />
            <span>{language === 'hi' ? 'कोटेशन एवं प्रस्ताव प्रणाली' : 'Official Quotation System'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {language === 'hi' ? 'व्यक्तिगत व कॉर्पोरेट कोटेशन' : 'Individual & Corporate Service Quotations'}
          </h2>

          <p className="mt-2 text-base text-slate-700 dark:text-slate-300">
            {language === 'hi'
              ? 'व्यक्तिगत उपयोगकर्ताओं के लिए पारदर्शी शुरुआती दरें, तथा कार्यालयों व संस्थानों के लिए कस्टमाइज्ड कॉर्पोरेट एस्टीमेट्स।'
              : 'Transparent baseline rates for individuals, and tailored enterprise RFQ proposals for businesses, startups, and offices.'}
          </p>
        </div>

        {/* Segmented Switcher: Individual vs Corporate */}
        <div className="flex items-center justify-center mb-10">
          <div className="p-1 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 shadow-sm flex items-center gap-1">
            <button
              onClick={() => { setQuoteType('individual'); setSubmissionSuccess(null); }}
              type="button"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                quoteType === 'individual'
                  ? 'bg-gradient-to-r from-flame-500 to-crimson-600 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <User className="w-4 h-4" />
              <span>{language === 'hi' ? 'व्यक्तिगत ग्राहक कोटेशन' : 'Individual Customer Quote'}</span>
            </button>

            <button
              onClick={() => { setQuoteType('corporate'); setSubmissionSuccess(null); }}
              type="button"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                quoteType === 'corporate'
                  ? 'bg-gradient-to-r from-flame-500 to-crimson-600 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>{language === 'hi' ? 'कॉर्पोरेट व ऑफिस RFP' : 'Corporate & Enterprise RFP'}</span>
            </button>
          </div>
        </div>

        {/* 1. CORPORATE QUOTATION WORKFLOW */}
        {quoteType === 'corporate' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
            
            {/* Left Corporate Brief Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-flame-50 dark:bg-flame-500/10 border border-flame-200 dark:border-flame-500/30 flex items-center justify-center text-flame-600 dark:text-flame-400">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      B2B IT Solutions & AMC
                    </h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400">For Companies, Clinics & Startups</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {language === 'hi'
                    ? 'कार्यालयों के लिए वार्षिक रखरखाव अनुबंध (AMC), नेटवर्क इंफ्रास्ट्रक्चर, कस्टम सॉफ्टवेयर और ऑटोमेशन सिस्टम का औपचारिक प्रस्ताव प्राप्त करें।'
                    : 'Submit your workplace infrastructure requirements to receive a formal commercial proposal, customized SLA tiers, and GST-compliant invoicing.'}
                </p>

                <div className="space-y-2.5 pt-3 border-t border-slate-100 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>GST-compliant commercial invoicing</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Flexible scheduled preventative maintenance visits</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Dedicated account technicians & priority ticketing</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Workstations, local storage, printers & Wi-Fi coverage</span>
                  </div>
                </div>
              </div>

              {/* Direct Corporate Desk & SLA Commitments */}
              <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 shadow-sm space-y-3.5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/5">
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      {language === 'hi' ? 'कॉर्पोरेट डेस्क' : 'Direct Corporate Desk'}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">{DISPLAY_PHONE}</span>
                  </div>
                  <a
                    href={createWhatsAppLink("Hello Team MrTech Care, I need a corporate quotation for our office IT infrastructure.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp RFP</span>
                  </a>
                </div>

                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2 font-medium">
                    <Clock className="w-3.5 h-3.5 text-flame-500 shrink-0" />
                    <span>{language === 'hi' ? '4 व्यावसायिक घंटों में कस्टम वाणिज्यिक प्रस्ताव' : 'Formal proposal within 4 business hours'}</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{language === 'hi' ? 'गैर-प्रकटीकरण (NDA) व संपूर्ण डेटा गोपनीयता' : 'Strict Non-Disclosure & Enterprise Data Privacy'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Corporate Form Column */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 shadow-md">
                
                {submissionSuccess ? (
                  <div className="py-8 text-center space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      RFP Registered Successfully
                    </h3>
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-midnight-950 font-mono text-sm text-flame-600 dark:text-flame-400 font-bold inline-block">
                      Reference: {submissionSuccess.quoteNumber}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                      {submissionSuccess.message}
                    </p>
                    <button
                      onClick={() => setSubmissionSuccess(null)}
                      type="button"
                      className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white/10 text-white text-xs font-bold"
                    >
                      Submit Another RFP
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleCorpSubmit} className="space-y-4">
                    <div className="pb-3 border-b border-slate-100 dark:border-white/10">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {language === 'hi' ? 'कॉर्पोरेट कोटेशन एवं RFP अनुरोध' : 'Request a Custom Corporate Quotation'}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {language === 'hi' ? 'अपने कार्यालय IT इंफ्रास्ट्रक्चर व AMC के लिए औपचारिक प्रस्ताव प्राप्त करें' : 'Tailored AMC agreements, workstation maintenance, and enterprise IT support'}
                      </p>
                    </div>

                    {/* Row 1: Company Name & GSTIN */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Company / Organization Name <span className="text-flame-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={corpForm.companyName}
                          onChange={(e) => setCorpForm({ ...corpForm, companyName: e.target.value })}
                          placeholder="Acme Technologies Pvt Ltd"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-flame-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          GSTIN (Optional)
                        </label>
                        <input
                          type="text"
                          maxLength={15}
                          value={corpForm.gstNumber}
                          onChange={(e) => setCorpForm({ ...corpForm, gstNumber: e.target.value })}
                          placeholder="07AAAAA0000A1Z5"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white uppercase font-mono focus:outline-none focus:ring-2 focus:ring-flame-500"
                        />
                      </div>
                    </div>

                    {/* Row 2: Contact Person & Official Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Contact Person <span className="text-flame-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={corpForm.contactPerson}
                          onChange={(e) => setCorpForm({ ...corpForm, contactPerson: e.target.value })}
                          placeholder="John Doe"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-flame-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Official Email <span className="text-flame-600">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={corpForm.email}
                          onChange={(e) => setCorpForm({ ...corpForm, email: e.target.value })}
                          placeholder="it@acme.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-flame-500"
                        />
                      </div>
                    </div>

                    {/* Row 3: Mobile Phone & Fleet Size */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Mobile / WhatsApp <span className="text-flame-600">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={corpForm.phone}
                          onChange={(e) => setCorpForm({ ...corpForm, phone: e.target.value.replace(/\D/g, '') })}
                          placeholder="9990946044"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white font-mono focus:outline-none focus:ring-2 focus:ring-flame-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Fleet Size / Workstation Count
                        </label>
                        <select
                          value={corpForm.workstationCount}
                          onChange={(e) => setCorpForm({ ...corpForm, workstationCount: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-flame-500"
                        >
                          <option value="5 - 10 Systems">5 - 10 Systems (Small Office)</option>
                          <option value="10 - 25 Systems">10 - 25 Systems (Mid Team)</option>
                          <option value="25 - 50 Systems">25 - 50 Systems (Full Office)</option>
                          <option value="50+ Systems">50+ Systems (Enterprise)</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Primary Service Scope & Preferred SLA */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Primary Service Scope
                        </label>
                        <select
                          value={corpForm.serviceRequired}
                          onChange={(e) => setCorpForm({ ...corpForm, serviceRequired: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-flame-500"
                        >
                          <option value="Corporate AMC (Hardware + Software)">Corporate AMC (Hardware + Software)</option>
                          <option value="Office Network & Local Server Setup">Office Network & Local Server Setup</option>
                          <option value="Custom Business Software / CRM">Custom Business Software / CRM</option>
                          <option value="Workflow Automation & AI Integration">Workflow Automation & AI Integration</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Preferred Maintenance SLA
                        </label>
                        <select
                          value={corpForm.preferredSla}
                          onChange={(e) => setCorpForm({ ...corpForm, preferredSla: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-flame-500"
                        >
                          <option value="Standard Scheduled Preventative Maintenance">Standard Scheduled Preventative Visits</option>
                          <option value="Priority On-Call SLA (Under 4 Hours)">Priority On-Call SLA (Under 4 Hours)</option>
                          <option value="Comprehensive Hardware & Standby Unit Cover">Comprehensive Hardware + Standby Units</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 5: Infrastructure & Requirement Details */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Infrastructure & Requirement Details
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={corpForm.projectDetails}
                        onChange={(e) => setCorpForm({ ...corpForm, projectDetails: e.target.value })}
                        placeholder="Please describe your office location, current issues, or specific software/hardware requirements..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-flame-500 resize-none"
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 text-rose-700 dark:text-rose-400 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-flame-500 via-flame-600 to-crimson-600 hover:from-flame-600 hover:to-crimson-700 text-white font-bold text-sm shadow-md transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Registering RFP...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Corporate RFP for Custom Quotation</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        )}

        {/* 2. INDIVIDUAL CONSUMER QUOTATION */}
        {quoteType === 'individual' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
            
            {/* Left Baseline Rate Highlights & Service Commitments */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-3xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 shadow-sm space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-flame-50 dark:bg-flame-500/10 flex items-center justify-center text-flame-600 dark:text-flame-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {language === 'hi' ? 'पारदर्शी बेसलाइन दरें' : 'Transparent Baseline Pricing'}
                    </h3>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">No diagnostic fee if repair is not feasible</span>
                  </div>
                </div>

                <div className="space-y-2 pt-1 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-200 dark:border-white/5 font-mono">
                    <span className="text-slate-700 dark:text-slate-300">Remote Single Support</span>
                    <span className="font-bold text-flame-600 dark:text-flame-400">Starts ₹199</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-200 dark:border-white/5 font-mono">
                    <span className="text-slate-700 dark:text-slate-300">Doorstep On-Site Diagnostic</span>
                    <span className="font-bold text-flame-600 dark:text-flame-400">Starts ₹399</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-200 dark:border-white/5 font-mono">
                    <span className="text-slate-700 dark:text-slate-300">Windows Full OS Setup</span>
                    <span className="font-bold text-flame-600 dark:text-flame-400">Standard ₹499</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-200 dark:border-white/5 font-mono">
                    <span className="text-slate-700 dark:text-slate-300">Android Software Fixes</span>
                    <span className="font-bold text-flame-600 dark:text-flame-400">Starts ₹499</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-200 dark:border-white/5 font-mono">
                    <span className="text-slate-700 dark:text-slate-300">iPhone Software Fixes</span>
                    <span className="font-bold text-flame-600 dark:text-flame-400">Starts ₹699</span>
                  </div>
                </div>
              </div>

              {/* Direct Helpdesk & Verified Assurances */}
              <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 shadow-sm space-y-3.5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/5">
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      {language === 'hi' ? 'ग्राहक हेल्पलाइन' : 'Direct Support Desk'}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">{DISPLAY_PHONE}</span>
                  </div>
                  <a
                    href={createWhatsAppLink("Hello Team MrTech Care, I need an estimate for my device repair.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp Quote</span>
                  </a>
                </div>

                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2 font-medium">
                    <Lock className="w-3.5 h-3.5 text-flame-500 shrink-0" />
                    <span>{language === 'hi' ? '100% डेटा सुरक्षा — बिना अनुमति डेटा डिलीट नहीं' : '100% Data Privacy (No wipe without consent)'}</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <Wrench className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{language === 'hi' ? 'ओरिजिनल OEM स्पेयर पार्ट्स व सर्विस वारंटी' : 'Genuine OEM parts with verified warranty'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Individual Form Column */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 shadow-md">
                
                {submissionSuccess ? (
                  <div className="py-8 text-center space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Quote Request Received
                    </h3>
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-midnight-950 font-mono text-sm text-flame-600 dark:text-flame-400 font-bold inline-block">
                      Reference: {submissionSuccess.quoteNumber}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                      {submissionSuccess.message}
                    </p>
                    <button
                      onClick={() => setSubmissionSuccess(null)}
                      type="button"
                      className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white/10 text-white text-xs font-bold"
                    >
                      Request Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleIndSubmit} className="space-y-4">
                    <div className="pb-3 border-b border-slate-100 dark:border-white/10">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {language === 'hi' ? 'व्यक्तिगत सेवा कोटेशन अनुरोध' : 'Request Individual Service Quote'}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {language === 'hi' ? 'अपने डिवाइस के लिए पारदर्शी एस्टीमेट व सर्विस स्लॉट प्राप्त करें' : 'Get an upfront estimate and scheduled diagnostic visit for your device'}
                      </p>
                    </div>

                    {/* Row 1: Name & Mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Your Name <span className="text-flame-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={indForm.name}
                          onChange={(e) => setIndForm({ ...indForm, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-flame-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Mobile / WhatsApp <span className="text-flame-600">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={indForm.phone}
                          onChange={(e) => setIndForm({ ...indForm, phone: e.target.value.replace(/\D/g, '') })}
                          placeholder="9990946044"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white font-mono focus:outline-none focus:ring-2 focus:ring-flame-500"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Device Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          value={indForm.email}
                          onChange={(e) => setIndForm({ ...indForm, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-flame-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Device Category
                        </label>
                        <select
                          value={indForm.device}
                          onChange={(e) => setIndForm({ ...indForm, device: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-flame-500"
                        >
                          <option value="Laptop (Windows / Mac)">Laptop (Windows / Mac)</option>
                          <option value="Desktop PC / Custom Rig">Desktop PC / Custom Rig</option>
                          <option value="Android Smartphone">Android Smartphone</option>
                          <option value="Apple iPhone / iPad">Apple iPhone / iPad</option>
                          <option value="Wi-Fi Router / Printer">Wi-Fi Router / Printer</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Service Needed & Preferred Mode */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Primary Service Needed
                        </label>
                        <select
                          value={indForm.serviceRequired}
                          onChange={(e) => setIndForm({ ...indForm, serviceRequired: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-flame-500"
                        >
                          <option value="On-site Doorstep Repair">On-site Doorstep Repair</option>
                          <option value="Remote Online Support">Remote Online Support</option>
                          <option value="SSD & RAM Speed Upgrade">SSD & RAM Speed Upgrade</option>
                          <option value="Operating System / Firmware Fix">Operating System / Firmware Fix</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Preferred Diagnostic Mode
                        </label>
                        <select
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-flame-500"
                          defaultValue="Doorstep On-Site Visit (Delhi NCR)"
                        >
                          <option value="Doorstep On-Site Visit (Delhi NCR)">Doorstep On-Site Visit (Delhi NCR)</option>
                          <option value="Instant Remote Screen Share (Pan-India)">Instant Remote Screen Share (Pan-India)</option>
                          <option value="Workshop Drop-off & In-depth Lab">Workshop Drop-off & In-depth Lab</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Problem Symptoms */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Problem Symptoms & Details <span className="text-flame-600">*</span>
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={indForm.details}
                        onChange={(e) => setIndForm({ ...indForm, details: e.target.value })}
                        placeholder="Briefly describe what is happening with the device (e.g. heating up, blue screen, bootloop, broken hinge, slow speed)..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-flame-500 resize-none"
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 text-rose-700 dark:text-rose-400 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-flame-500 to-crimson-600 hover:from-flame-600 hover:to-crimson-700 text-white font-bold text-sm shadow-md transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Get Instant Service Quote</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
