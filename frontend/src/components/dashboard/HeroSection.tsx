'use client';

import React from 'react';
import { Activity, Cpu, Network, Sparkles, Calendar } from 'lucide-react';

export default function HeroSection() {
  return (
    <div 
      className="relative overflow-hidden rounded-2xl border border-slate-800/80 p-6 md:p-8 bg-[#0B192B] shadow-2xl transition-all"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(7, 17, 31, 0.90) 20%, rgba(7, 17, 31, 0.70) 60%, rgba(7, 17, 31, 0.85) 100%), url('/images/my-watermark.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Subtle Grid Overlay Layer */}
      <div className="absolute inset-0 bg-graph-mesh opacity-20 pointer-events-none"></div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        {/* Left Side: Welcome Banner & Title */}
        <div className="space-y-3 max-w-2xl">
          
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/30 text-[10px] font-mono font-bold tracking-widest uppercase flex items-center gap-1.5">
              <Sparkles size={12} /> WELCOME BACK, KHUDA BUX MAHAR
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
            Infrastructure Command Center
          </h1>

          <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal max-w-xl">
            Monitor, simulate, and analyze cascade failures with AI-powered graph intelligence.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#07111F]/80 border border-emerald-500/30 text-emerald-400 text-xs font-medium backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Live Systems</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#07111F]/80 border border-slate-700/80 text-slate-300 text-xs font-medium backdrop-blur-md">
              <Cpu size={13} className="text-[#00D4FF]" />
              <span>7 Domains</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#07111F]/80 border border-slate-700/80 text-slate-300 text-xs font-medium backdrop-blur-md">
              <Network size={13} className="text-[#00D4FF]" />
              <span className="font-mono text-[#00D4FF] font-bold">12,480</span> Nodes
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#07111F]/80 border border-slate-700/80 text-slate-300 text-xs font-medium backdrop-blur-md">
              <Activity size={13} className="text-[#00D4FF]" />
              <span>Real-time Analysis</span>
            </div>
          </div>

        </div>

        {/* Right Side: Timestamp & Quote Badge */}
        <div className="flex flex-col items-start lg:items-end justify-between space-y-4 shrink-0">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#07111F]/90 border border-slate-800 text-xs text-slate-300 backdrop-blur-md">
            <Calendar size={14} className="text-[#00D4FF]" />
            <div>
              <p className="font-mono font-bold text-white text-xs">Oct 17, 2026 • 16:25</p>
              <p className="text-[10px] text-slate-400">Pakistan Standard Time</p>
            </div>
          </div>

          <div className="hidden md:block text-right">
            <p className="text-xs font-serif italic text-slate-300">
              "Smarter decisions.<br />Stronger infrastructure."
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}