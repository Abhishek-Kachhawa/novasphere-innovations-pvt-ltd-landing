import React from 'react';
import appLogo from '../../assets/app_logo.png';

export default function Logo({ className = "", variant = "dark", showTagline = true, iconOnly = false }) {
  const textColor = variant === "light" ? "text-white" : "text-slate-900";
  const subtitleColor = variant === "light" ? "text-sky-300" : "text-blue-900";
  const logoFilter = variant === "light" ? "brightness-0 invert" : "";

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-3 select-none group max-w-full ${className}`}>
      {/* Executive Brand Monogram Image */}
      <div className="relative flex items-center justify-center shrink-0">
        <img 
          src={appLogo} 
          alt="Novasphere Innovations" 
          className={`h-8 xs:h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${logoFilter}`}
        />
      </div>

      {!iconOnly && (
        <div className="flex flex-col justify-center min-w-0">
          <span className={`font-serif tracking-[0.14em] xs:tracking-[0.18em] sm:tracking-[0.24em] font-extrabold leading-none text-base xs:text-lg sm:text-xl md:text-2xl uppercase whitespace-nowrap transition-colors ${textColor}`}>
            NOVASPHERE
          </span>
          {showTagline && (
            <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 sm:mt-1 whitespace-nowrap">
              <span className="h-[1px] w-2 sm:w-3 bg-sky-400 opacity-80 inline-block shrink-0"></span>
              <span className={`text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] font-bold tracking-[0.12em] xs:tracking-[0.16em] sm:tracking-[0.2em] uppercase leading-none ${subtitleColor}`}>
                INNOVATIONS PVT LTD
              </span>
              <span className="h-[1px] w-2 sm:w-3 bg-sky-400 opacity-80 inline-block shrink-0"></span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
