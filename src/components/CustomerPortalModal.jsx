import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { 
  UserCheck, 
  X, 
  Phone, 
  KeyRound, 
  CheckCircle2, 
  AlertCircle, 
  LogOut, 
  Clock, 
  Wrench, 
  FileText, 
  ShieldCheck, 
  ArrowRight,
  RefreshCw,
  Sparkles
} from 'lucide-react';

export const CustomerPortalModal = ({ isOpen, onClose, onNavigateToServices }) => {
  const { language } = useLanguage();
  const { user, isAuthenticated, sendOtp, verifyOtp, logout, fetchOrders } = useAuth();

  const [step, setStep] = useState('phone'); // 'phone' | 'otp' | 'dashboard'
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [infoMessage, setInfoMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(0);
  const [orders, setOrders] = useState([]);
  const [isLoadingOrders, setIsLoadingOrders] = useState(false);

  // Synchronize step with authentication state
  useEffect(() => {
    if (isAuthenticated && user) {
      setStep('dashboard');
      loadCustomerOrders();
    } else {
      setStep('phone');
      setOtp('');
      setError('');
    }
  }, [isAuthenticated, user, isOpen]);

  // Countdown timer for OTP expiry
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => setTimer(t => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const loadCustomerOrders = async () => {
    try {
      setIsLoadingOrders(true);
      const data = await fetchOrders();
      setOrders(data || []);
    } catch (err) {
      console.warn("Failed to load orders:", err);
    } finally {
      setIsLoadingOrders(false);
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError('');
    setInfoMessage('');

    const cleanPhone = phone.trim().replace(/\s+/g, '').replace(/^(\+91)/, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setError(language === 'hi' ? 'कृपया सही 10-अंकीय भारतीय मोबाइल नंबर दर्ज करें' : 'Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    try {
      setIsLoading(true);
      const res = await sendOtp(cleanPhone);
      setStep('otp');
      setTimer(300); // 5 minutes
      if (res.sandboxOtp) {
        setInfoMessage(`Development Mode OTP: ${res.sandboxOtp}`);
      } else {
        setInfoMessage(language === 'hi' ? 'ओटीपी आपके नंबर पर भेज दिया गया है।' : 'Verification code dispatched to your phone.');
      }
    } catch (err) {
      setError(err.message || 'Failed to dispatch verification code.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError('');

    if (!/^\d{6}$/.test(otp.trim())) {
      setError(language === 'hi' ? 'कृपया 6-अंकों का ओटीपी दर्ज करें' : 'Please enter the 6-digit verification code.');
      return;
    }

    try {
      setIsLoading(true);
      await verifyOtp(phone, otp.trim());
      setStep('dashboard');
      loadCustomerOrders();
    } catch (err) {
      setError(err.message || 'Verification failed. Please check the code.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    setStep('phone');
    setPhone('');
    setOtp('');
    setOrders([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-white/10 shadow-2xl p-6 sm:p-8"
        role="dialog" 
        aria-modal="true"
        aria-labelledby="customer-portal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 transition-colors"
          aria-label="Close portal modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-white/10">
          <div className="w-10 h-10 rounded-xl bg-flame-50 dark:bg-flame-500/10 border border-flame-200 dark:border-flame-500/30 flex items-center justify-center text-flame-600 dark:text-flame-400">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 id="customer-portal-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {language === 'hi' ? 'ग्राहक सेवा पोर्टल' : 'Client Service Portal'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'hi' ? 'सुरक्षित मोबाइल ओटीपी सत्यापन एवं सेवा इतिहास' : 'Secure OTP verification & real-time service tracking'}
            </p>
          </div>
        </div>

        {/* STEP 1: Enter Phone Number */}
        {step === 'phone' && (
          <div className="space-y-5 animate-fadeIn">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-midnight-950/60 border border-slate-200 dark:border-white/5 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'hi'
                  ? 'अपने सक्रिय रिपेयर टिकट, डायग्नोस्टिक रिपोर्ट और बिलिंग रसीदें देखने के लिए अपना पंजीकृत मोबाइल नंबर दर्ज करें। हम कोई पासवर्ड नहीं मांगते।'
                  : 'Enter your 10-digit mobile number to view your active repair tickets, diagnostic findings, and completed service history. Authentication is secured via one-time SMS verification.'}
              </p>
            </div>

            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label htmlFor="customer-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  {language === 'hi' ? 'मोबाइल नंबर (+91)' : 'Mobile Number (+91)'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 font-mono text-sm">
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    id="customer-phone"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    placeholder="9990946044"
                    className="w-full pl-14 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-base font-mono focus:outline-none focus:ring-2 focus:ring-flame-500"
                    autoFocus
                  />
                </div>
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 text-rose-700 dark:text-rose-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || phone.length < 10}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-flame-500 to-crimson-600 hover:from-flame-600 hover:to-crimson-700 text-white font-bold text-sm shadow-md transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <span>{language === 'hi' ? 'ओटीपी (OTP) कोड भेजें' : 'Send Verification OTP'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <p className="text-[11px] text-slate-400 text-center">
              🔒 Session validated through secure, HTTP-only server authorization. Zero local credentials stored.
            </p>
          </div>
        )}

        {/* STEP 2: Enter OTP */}
        {step === 'otp' && (
          <div className="space-y-5 animate-fadeIn">
            <div className="text-center">
              <span className="inline-block text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 mb-2">
                OTP Sent to +91 {phone}
              </span>
              <p className="text-xs text-slate-500">
                {language === 'hi' ? '6-अंकों का सत्यापन कोड दर्ज करें:' : 'Please enter the 6-digit numeric verification code:'}
              </p>
            </div>

            {infoMessage && (
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-electric-500/10 border border-blue-200 dark:border-electric-500/30 text-electric-700 dark:text-electric-300 text-xs font-mono text-center">
                {infoMessage}
              </div>
            )}

            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div>
                <input
                  type="text"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  placeholder="• • • • • •"
                  className="w-full text-center tracking-[0.5em] py-3.5 rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-2xl font-mono focus:outline-none focus:ring-2 focus:ring-flame-500"
                  autoFocus
                />
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 text-rose-700 dark:text-rose-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || otp.length < 6}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-flame-500 to-crimson-600 hover:from-flame-600 hover:to-crimson-700 text-white font-bold text-sm shadow-md transition-all disabled:opacity-50"
              >
                {isLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <span>Verify & Access Dashboard</span>}
              </button>

              <div className="flex items-center justify-between text-xs pt-1">
                <button
                  type="button"
                  onClick={() => { setStep('phone'); setOtp(''); setError(''); }}
                  className="text-slate-500 hover:underline"
                >
                  Change Number
                </button>
                <span className="text-slate-400 font-mono">
                  {timer > 0 ? `Expires in ${Math.floor(timer / 60)}:${(timer % 60).toString().padStart(2, '0')}` : 'Expired'}
                </span>
              </div>
            </form>
          </div>
        )}

        {/* STEP 3: Authenticated Dashboard */}
        {step === 'dashboard' && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* User Credentials & Logout Bar */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-midnight-950 border border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
                <div>
                  <span className="block text-xs text-slate-500 dark:text-slate-400 font-semibold">Verified Client Account</span>
                  <span className="font-mono text-sm font-bold text-slate-900 dark:text-white">
                    {user?.phone || `+91 ${phone}`}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={loadCustomerOrders}
                  type="button"
                  className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10 text-xs font-semibold flex items-center gap-1 transition-colors"
                  title="Refresh service status"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoadingOrders ? 'animate-spin' : ''}`} />
                  <span className="hidden sm:inline">Refresh</span>
                </button>

                <button
                  onClick={handleLogout}
                  type="button"
                  className="px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 hover:bg-rose-100 border border-rose-200 dark:border-rose-500/20 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>

            {/* Service Orders / Tickets List */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  {language === 'hi' ? 'आपकी सेवा एवं रिपेयर हिस्ट्री' : 'Your Service Orders & Repair Tickets'}
                </h3>
                <span className="text-xs font-mono text-slate-500">
                  {orders.length} Records Found
                </span>
              </div>

              {isLoadingOrders ? (
                <div className="py-12 text-center text-slate-500 flex flex-col items-center gap-2">
                  <RefreshCw className="w-6 h-6 animate-spin text-flame-500" />
                  <span className="text-xs">Accessing your verified records...</span>
                </div>
              ) : orders.length > 0 ? (
                <div className="space-y-3">
                  {orders.map((order) => (
                    <div 
                      key={order.id} 
                      className="p-4 rounded-2xl bg-white dark:bg-midnight-950 border border-slate-200 dark:border-white/10 shadow-xs space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-flame-600 dark:text-flame-400">
                          {order.order_number}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-400 font-bold uppercase">
                          {order.status || 'Completed'}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {order.service_title}
                      </h4>
                      <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 font-mono pt-1 border-t border-slate-100 dark:border-white/5">
                        <span>Device: {order.device_type} ({order.device_model || 'Standard'})</span>
                        <span className="text-slate-900 dark:text-white font-bold">₹{order.final_amount || order.estimated_amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Honest Empty State - strictly no fake orders as instructed */
                <div className="py-10 px-6 rounded-2xl bg-slate-50 dark:bg-midnight-950/40 border border-dashed border-slate-200 dark:border-white/10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-flame-50 dark:bg-flame-500/10 text-flame-500 flex items-center justify-center mx-auto">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {language === 'hi' ? 'कोई सक्रिय टिकट या पिछला इतिहास नहीं मिला' : 'No Service Tickets Found for This Number'}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                      {language === 'hi'
                        ? 'इस मोबाइल नंबर पर अभी कोई सेवा रिकॉर्ड पंजीकृत नहीं है। जब भी आप डोरस्टेप या रिमोट सेवा बुक करते हैं, आपके लाइव डायग्नोसिस नोट्स, जॉब कार्ड और इनवॉइस यहां प्रदर्शित होंगे।'
                        : 'There are currently no active or archived service records registered under this mobile number. When you initiate an on-site or remote repair, your job tickets, live diagnosis logs, and digital invoices will appear here automatically.'}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      if (onNavigateToServices) onNavigateToServices();
                    }}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-flame-500 to-crimson-600 text-white text-xs font-bold shadow-xs hover:shadow-md transition-all"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{language === 'hi' ? 'नई सेवा बुक करें' : 'Explore Services & Book'}</span>
                  </button>
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
