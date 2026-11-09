import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { GOOGLE_BUSINESS_REVIEW_URL, TEAM_NAME, DISPLAY_PHONE } from '../utils/whatsapp';
import { 
  Star, 
  MessageSquare, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Send, 
  Filter,
  User,
  Phone,
  Clock,
  ThumbsUp,
  Layers
} from 'lucide-react';

const SERVICE_CATEGORIES = [
  'Computer Hardware & Repair',
  'Mobile, Firmware & OS',
  'Web, App & Cloud Development',
  'Business Automation & AI',
  'Trading Automation Systems',
  'Corporate AMC Maintenance',
  'Other Technical Support'
];

export const FeedbackSection = () => {
  const { language } = useLanguage();
  const { user, isAuthenticated } = useAuth();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('ALL');

  // Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    rating: 5,
    category: SERVICE_CATEGORIES[0],
    comment: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Pre-fill phone if user is authenticated
  useEffect(() => {
    if (isAuthenticated && user?.phone) {
      const clean = user.phone.replace('+91', '');
      setForm(prev => ({ ...prev, phone: clean }));
    }
  }, [isAuthenticated, user]);

  // Load approved reviews
  const loadReviews = async () => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/reviews');
      const data = await res.json().catch(() => ({}));
      if (data.success && Array.isArray(data.reviews)) {
        setReviews(data.reviews);
      } else {
        setReviews([]);
      }
    } catch (err) {
      console.warn("Could not load reviews:", err);
      setReviews([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSubmissionSuccess(null);

    const cleanPhone = form.phone.trim().replace(/\s+/g, '').replace(/^(\+91)/, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setErrorMessage(
        language === 'hi'
          ? 'कृपया सत्यापन हेतु सही 10-अंकीय भारतीय मोबाइल नंबर दर्ज करें'
          : 'Please provide a valid 10-digit Indian mobile number for service verification.'
      );
      return;
    }

    if (!form.name.trim() || form.name.trim().length < 2) {
      setErrorMessage(
        language === 'hi' ? 'कृपया अपना पूरा नाम दर्ज करें' : 'Please enter your name.'
      );
      return;
    }

    if (!form.comment.trim() || form.comment.trim().length < 10) {
      setErrorMessage(
        language === 'hi' 
          ? 'कृपया कम से कम 10 अक्षरों में अपना अनुभव साझा करें' 
          : 'Please write at least 10 characters describing your service experience.'
      );
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: form.name.trim(),
          phone: cleanPhone,
          rating: form.rating,
          service_category: form.category,
          comment: form.comment.trim()
        })
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setSubmissionSuccess(
          data.message || 
          (language === 'hi' 
            ? 'आपकी प्रतिक्रिया सफलतापूर्वक दर्ज हो गई है! सत्यापन के बाद यह सार्वजनिक रूप से प्रकाशित होगी।' 
            : 'Thank you! Your feedback has been received and will appear on the platform once routinely verified.')
        );
        setForm(prev => ({ ...prev, comment: '', rating: 5 }));
      } else {
        setErrorMessage(data.error || 'Failed to submit feedback.');
      }
    } catch (err) {
      setErrorMessage('Network error while submitting feedback. Please try again or reach out on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredReviews = activeCategoryFilter === 'ALL'
    ? reviews
    : reviews.filter(r => r.service_category === activeCategoryFilter);

  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-midnight-950 transition-colors duration-200" id="feedback">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-flame-500/10 text-flame-600 dark:text-flame-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'ग्राहक समीक्षा एवं फीडबैक' : 'Customer Feedback & Reviews'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {language === 'hi' ? 'सच्ची प्रतिक्रिया, पारदर्शी सेवा' : 'Transparent Feedback from Real Customers'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {language === 'hi'
              ? 'हम वास्तविक सेवा अनुभवों को महत्व देते हैं। सभी सार्वजनिक समीक्षाएं प्रामाणिकता जांच के बाद ही प्रकाशित की जाती हैं।'
              : 'We value honest, verifiable service feedback. To maintain 100% authenticity, all reviews are validated against service records before public publication.'}
          </p>
        </div>

        {/* Highlight Banner: Google Business Review Card */}
        <div className="mb-12 rounded-3xl bg-gradient-to-br from-slate-900 via-midnight-900 to-slate-950 text-white p-6 sm:p-8 border border-white/10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-flame-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-500/30">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Business Profile</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                {language === 'hi' ? 'Google पर हमें रिव्यू दें' : 'Rate Us on Google Business'}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {language === 'hi'
                  ? 'यदि आपने MrTech Care से हार्डवेयर, सॉफ्टवेयर या ऑटोमेशन सेवा ली है, तो आपका एक मिनट का Google Review हमें और हमारे अन्य ग्राहकों को बहुत लाभ पहुंचाता है।'
                  : 'If you have experienced our doorstep repair, software resolution, or enterprise automation, please consider sharing your feedback directly on our official Google Business page.'}
              </p>
              
              <div className="flex items-center gap-3 mt-4 text-xs font-medium text-slate-300">
                <div className="flex items-center text-amber-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span>• Official Google Verified Profile</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={GOOGLE_BUSINESS_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group"
              >
                <span>{language === 'hi' ? 'Google Review लिखें' : 'Write a Google Review'}</span>
                <ExternalLink className="w-4 h-4 text-flame-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Two Column Layout: Write Review Form & Verified Reviews Stream */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 Cols): Review Submission Form */}
          <div className="lg:col-span-5 bg-slate-50 dark:bg-midnight-900/70 p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-5 h-5 text-flame-500" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {language === 'hi' ? 'अपनी सेवा का अनुभव साझा करें' : 'Submit Service Feedback'}
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
              {language === 'hi'
                ? 'प्रमाणित समीक्षा प्रणाली: स्पैम रोकने के लिए प्रत्येक समीक्षा का मिलान सेवा रिकॉर्ड से किया जाता है।'
                : 'All submissions are screened against verified service tickets to maintain genuine trust and prevent fake reviews.'}
            </p>

            {submissionSuccess ? (
              <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm mb-1">{language === 'hi' ? 'प्रतिक्रिया दर्ज हुई!' : 'Feedback Recorded!'}</h4>
                    <p className="text-xs leading-relaxed">{submissionSuccess}</p>
                    <button
                      type="button"
                      onClick={() => setSubmissionSuccess(null)}
                      className="mt-4 px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-midnight-900 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/40 hover:bg-emerald-50 transition-colors"
                    >
                      {language === 'hi' ? 'एक और रिव्यू लिखें' : 'Submit Another Review'}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-crimson-500/10 border border-crimson-500/30 text-crimson-600 dark:text-crimson-400 text-xs flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Rating Stars Input */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    {language === 'hi' ? 'आपकी रेटिंग (1 से 5 स्टार)' : 'Your Overall Rating'}
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, rating: star }))}
                        className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500"
                        aria-label={`Rate ${star} star`}
                      >
                        <Star
                          className={`w-7 h-7 transition-colors ${
                            star <= form.rating
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-slate-300 dark:text-slate-600'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-2">
                      {form.rating} / 5 Stars
                    </span>
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {language === 'hi' ? 'आपका पूरा नाम' : 'Your Full Name'} *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={form.name}
                      onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white dark:bg-midnight-950 border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500"
                    />
                  </div>
                </div>

                {/* Mobile Number for verification */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {language === 'hi' ? 'मोबाइल नंबर (सत्यापन हेतु)' : 'Mobile Number (For Verification)'} *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs font-mono font-bold text-slate-400 pointer-events-none">+91</span>
                    <input
                      type="tel"
                      required
                      placeholder="98XXXXXXXX"
                      maxLength={10}
                      value={form.phone}
                      onChange={(e) => setForm(prev => ({ ...prev, phone: e.target.value.replace(/\D/g, '') }))}
                      className="w-full pl-11 pr-3.5 py-2.5 rounded-xl bg-white dark:bg-midnight-950 border border-slate-200 dark:border-white/10 text-xs sm:text-sm font-mono text-slate-900 dark:text-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500"
                    />
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 block">
                    {language === 'hi' ? 'आपका नंबर कभी भी सार्वजनिक रूप से नहीं दिखाया जाएगा।' : 'Your mobile number is strictly confidential and never displayed publicly.'}
                  </span>
                </div>

                {/* Service Category */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {language === 'hi' ? 'सर्विस श्रेणी' : 'Service Category'}
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-midnight-950 border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500"
                  >
                    {SERVICE_CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Review Description */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {language === 'hi' ? 'विस्तृत अनुभव / फीडबैक' : 'Detailed Feedback'} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={language === 'hi' ? 'सेवा की गति, तकनीकी समाधान और व्यवहार के बारे में बताएं...' : 'Describe the service quality, technical expertise, and timeliness...'}
                    value={form.comment}
                    onChange={(e) => setForm(prev => ({ ...prev, comment: e.target.value }))}
                    className="w-full p-3 rounded-xl bg-white dark:bg-midnight-950 border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500 resize-none"
                  />
                </div>

                <div className="p-3 rounded-xl bg-slate-100 dark:bg-midnight-950 border border-slate-200 dark:border-white/10 text-[11px] text-slate-600 dark:text-slate-400 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    {language === 'hi'
                      ? 'पारदर्शिता गारंटी: सबमिशन के बाद टीम विवरण सत्यापित करेगी और फिर यह वेबसाइट पर दिखाई देगा।'
                      : 'Authenticity Guarantee: Reviews undergo backend validation against completed service tickets prior to appearing publicly.'}
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-flame-500 to-crimson-600 hover:from-flame-600 hover:to-crimson-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? (language === 'hi' ? 'दर्ज हो रहा है...' : 'Submitting Review...') : (language === 'hi' ? 'समीक्षा सबमिट करें' : 'Submit Review')}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column (7 Cols): Approved Customer Reviews Feed */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Filter Pills */}
            <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                <Filter className="w-3.5 h-3.5 text-flame-500" />
                <span>{language === 'hi' ? 'सत्यापित समीक्षाएं' : 'Verified Customer Reviews'}</span>
                <span className="px-2 py-0.5 rounded-full bg-slate-200 dark:bg-midnight-800 text-[10px] text-slate-700 dark:text-slate-300">
                  {filteredReviews.length}
                </span>
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
                <button
                  type="button"
                  onClick={() => setActiveCategoryFilter('ALL')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                    activeCategoryFilter === 'ALL'
                      ? 'bg-flame-500 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-midnight-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  All
                </button>
                {SERVICE_CATEGORIES.slice(0, 3).map(cat => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategoryFilter(cat)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all ${
                      activeCategoryFilter === cat
                        ? 'bg-flame-500 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-midnight-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {cat.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Reviews Stream */}
            {isLoading ? (
              <div className="p-12 text-center text-slate-500 dark:text-slate-400 text-xs animate-pulse">
                Loading authentic customer reviews...
              </div>
            ) : filteredReviews.length === 0 ? (
              /* Honest empty state - strictly no fake reviews! */
              <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-midnight-900/50 border border-dashed border-slate-300 dark:border-white/10 text-center">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1">
                  {language === 'hi' ? 'अभी तक कोई सार्वजनिक समीक्षा प्रकाशित नहीं हुई है' : 'No Public Reviews Published Yet'}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed mb-4">
                  {language === 'hi'
                    ? 'हम बिना सत्यापन के फर्जी समीक्षाएं नहीं दिखाते। यदि आपने हमारी सेवा ली है, तो बाईं ओर से अपनी समीक्षा दर्ज करें या Google पर हमें रिव्यू दें!'
                    : 'We uphold strict review integrity and do not manufacture fake testimonials. Completed a service recently? Share your honest review or rate us on Google Business.'}
                </p>
                <a
                  href={GOOGLE_BUSINESS_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-flame-600 dark:text-flame-400 bg-flame-50 dark:bg-flame-500/10 border border-flame-200 dark:border-flame-500/30 hover:bg-flame-100 transition-colors"
                >
                  <span>{language === 'hi' ? 'Google Business पर समीक्षा देखें' : 'Visit Google Business Profile'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ) : (
              <div className="space-y-3.5">
                {filteredReviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-5 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 shadow-xs hover:border-slate-300 dark:hover:border-white/20 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-slate-900 dark:text-white">
                            {rev.customer_name}
                          </span>
                          {rev.is_verified_customer ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                              <ShieldCheck className="w-3 h-3" />
                              <span>Verified Customer</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-midnight-800 text-slate-500 dark:text-slate-400 text-[10px] font-bold">
                              Verified Feedback
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                          {rev.service_category}
                        </span>
                      </div>

                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      "{rev.comment}"
                    </p>

                    {rev.created_at && (
                      <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{new Date(rev.created_at).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        </span>
                        <span>Service provided by {TEAM_NAME}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
