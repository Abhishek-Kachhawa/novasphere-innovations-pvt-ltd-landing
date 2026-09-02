import React from 'react';

export default function Logo({ className = "h-12", variant = "dark", showTagline = true }) {
  const textColor = variant === "light" ? "text-white" : "text-slate-900";
  const subtitleColor = variant === "light" ? "text-sky-300" : "text-blue-900";
  const iconColor = variant === "light" ? "#ffffff" : "#0f172a";
  const dotColor = "#38bdf8"; // Ice Sky Blue Accent

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Executive Monogram Vector */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg 
          viewBox="0 0 100 100" 
          className="w-10 h-10 transition-transform duration-300 hover:scale-105"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* N serif element */}
          <path 
            d="M25 78V22H32L55 64V22H65V78H58L35 36V78H25Z" 
            fill={iconColor} 
          />
          {/* S swoosh intertwining */}
          <path 
            d="M48 25C40 25 34 30 34 37C34 50 64 45 64 61C64 69 56 74 46 74C38 74 30 70 25 64L31 57C35 62 40 66 47 66C52 66 56 63 56 59C56 48 26 51 26 35C26 27 34 20 47 20C54 20 61 23 66 28L60 35C56 30 52 25 48 25Z" 
            fill={iconColor} 
            opacity="0.9"
          />
          {/* Accent ice blue dot */}
          <circle cx="70" cy="22" r="3.5" fill={dotColor} />
        </svg>
      </div>

      {/* Brand Text Stack */}
      <div className="flex flex-col justify-center">
        <span className={`font-serif tracking-[0.25em] font-extrabold leading-none text-lg md:text-xl uppercase ${textColor}`}>
          NOVASPHERE
        </span>
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="h-[1px] w-3 bg-sky-400 opacity-80 inline-block"></span>
            <span className={`text-[9px] md:text-[10px] font-semibold tracking-[0.2em] uppercase leading-none ${subtitleColor}`}>
              INNOVATIONS PVT LTD
            </span>
            <span className="h-[1px] w-3 bg-sky-400 opacity-80 inline-block"></span>
          </div>
        )}
      </div>
    </div>
  );
}
