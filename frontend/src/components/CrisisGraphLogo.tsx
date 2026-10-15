'use client';

import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'compact';
  size?: number;
  className?: string;
}

export default function CrisisGraphLogo({ variant = 'full', size = 32, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Hexagonal Connected Node SVG Symbol */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_12px_rgba(0,212,255,0.6)]"
        >
          {/* Hexagon Outer Frame */}
          <path 
            d="M20 2L35.5885 11V29L20 38L4.41154 29V11L20 2Z" 
            stroke="#00D4FF" 
            strokeWidth="2" 
            strokeOpacity="0.8"
            fill="url(#logo-grad-bg)"
          />
          {/* Inner Connection Lines */}
          <line x1="20" y1="10" x2="11" y2="25" stroke="#00D4FF" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="20" y1="10" x2="29" y2="25" stroke="#00D4FF" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="11" y1="25" x2="29" y2="25" stroke="#00D4FF" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="20" y1="10" x2="20" y2="30" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="2 2" />

          {/* Connected Nodes */}
          <circle cx="20" cy="10" r="3.5" fill="#00D4FF" />
          <circle cx="11" cy="25" r="3.5" fill="#00D4FF" />
          <circle cx="29" cy="25" r="3.5" fill="#00D4FF" />
          <circle cx="20" cy="20" r="4.5" fill="#38BDF8" />
          <circle cx="20" cy="20" r="2" fill="#07111F" />
          <circle cx="20" cy="30" r="2.5" fill="#EF4444" />

          {/* Gradients */}
          <defs>
            <linearGradient id="logo-grad-bg" x1="4" y1="2" x2="35.5" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00D4FF" stopOpacity="0.15" />
              <stop offset="1" stopColor="#07111F" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography Wordmark */}
      {variant !== 'icon' && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1">
            <span className="font-extrabold text-white tracking-wider text-base font-sans">
              CRISISGRAPH
            </span>
          </div>
          <span className="text-[9px] font-mono tracking-[0.25em] text-[#00D4FF] font-bold uppercase mt-0.5">
            TECHNOLOGY
          </span>
          {variant === 'full' && (
            <span className="text-[8px] text-slate-400 font-sans tracking-tight mt-0.5">
              Smarter Insights. Stronger Systems.
            </span>
          )}
        </div>
      )}
    </div>
  );
}