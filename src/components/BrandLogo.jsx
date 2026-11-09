import React from 'react';

export const BrandLogo = ({ size = "md", showText = true }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 group select-none">
      {/* MTC Monogram Icon */}
      <div className={`relative flex items-center justify-center ${sizeClasses[size] || sizeClasses.md} rounded-xl bg-gradient-to-br from-flame-500 via-crimson-500 to-electric-600 p-[1.5px] shadow-md group-hover:scale-105 transition-all duration-300`}>
        <div className="w-full h-full bg-slate-900 dark:bg-midnight-950 rounded-[10px] flex items-center justify-center p-1">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Tech Circuit Lines */}
            <path d="M6 32L14 32M26 32L34 32" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
            <circle cx="6" cy="32" r="1.5" fill="#F97316" />
            <circle cx="34" cy="32" r="1.5" fill="#1677FF" />
            
            {/* Letter M */}
            <path d="M8 26V14L14 21L20 14V26" stroke="url(#logo-grad-m)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Letter T */}
            <path d="M18 14H28M23 14V26" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Letter C */}
            <path d="M34 16C32.5 14.5 30 14 28 15C25.5 16.5 25.5 23.5 28 25C30 26 32.5 25.5 34 24" stroke="url(#logo-grad-c)" strokeWidth="2.4" strokeLinecap="round" />
            
            {/* Circuit Glow Dot */}
            <circle cx="31" cy="11" r="2" fill="#00F0FF" />

            <defs>
              <linearGradient id="logo-grad-m" x1="8" y1="14" x2="20" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F97316" />
                <stop offset="1" stopColor="#EF4444" />
              </linearGradient>
              <linearGradient id="logo-grad-c" x1="25" y1="14" x2="34" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1677FF" />
                <stop offset="1" stopColor="#00F0FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          {/* Handwritten / Cooljazz Style Brand Name with guaranteed color fill */}
          <span className="font-script text-2xl sm:text-[28px] font-bold tracking-wide leading-none text-flame-600 dark:text-flame-400 bg-gradient-to-r from-flame-600 via-crimson-600 to-electric-600 dark:from-flame-400 dark:via-crimson-400 dark:to-electric-400 bg-clip-text text-transparent">
            MrTech Care
          </span>
          <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 tracking-wider">
            Your Tech. Our Care.
          </span>
        </div>
      )}
    </div>
  );
};
