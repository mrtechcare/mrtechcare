import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, Home, Wrench } from 'lucide-react';

export const NotFound = ({ onGoHome }) => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-midnight-950 flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-electric-500/10 border border-electric-500/30 flex items-center justify-center mx-auto text-electric-400">
          <Wrench className="w-8 h-8" />
        </div>

        <div>
          <span className="font-mono text-5xl font-black text-electric-500">404</span>
          <h1 className="mt-2 text-2xl font-bold text-white">
            {language === 'hi' ? 'पेज नहीं मिला' : 'Page Not Found'}
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            {language === 'hi'
              ? 'क्षमा करें, आप जिस पेज की तलाश कर रहे हैं वह मौजूद नहीं है या हटा दिया गया है।'
              : 'The page you are looking for does not exist or has been moved.'}
          </p>
        </div>

        <div>
          <button
            onClick={onGoHome}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-semibold text-sm shadow-glow-sm transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            <span>{language === 'hi' ? 'मुख्य पृष्ठ पर वापस जाएं' : 'Return to Home'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
