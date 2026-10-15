'use client';

import React from 'react';
import { Search, Bell } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="h-16 bg-[#07111F]/95 backdrop-blur-md border-b border-slate-800/80 px-8 flex items-center justify-between sticky top-0 z-30 shrink-0">
      
      {/* Global Search Input */}
      <div className="flex items-center space-x-4 w-96">
        <div className="relative w-full">
          <Search size={16} className="absolute left-3.5 top-3 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search infrastructure, assets, nodes, or simulations..."
            className="w-full pl-10 pr-16 py-2 rounded-xl bg-[#0B192B] border border-slate-700/80 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition"
          />
          <span className="absolute right-3 top-2.5 px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-400 border border-slate-700">
            Ctrl + K
          </span>
        </div>
      </div>

      {/* System Status & User Profile */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/80 text-emerald-400 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>System Online</span>
        </div>

        <button className="p-2.5 rounded-xl bg-[#0B192B] border border-slate-800 text-slate-300 hover:text-white relative transition">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse"></span>
        </button>

        <div className="flex items-center space-x-3 pl-3 border-l border-slate-800">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00D4FF] to-blue-600 flex items-center justify-center font-extrabold text-slate-950 text-xs shadow-[0_0_12px_rgba(0,212,255,0.4)]">
            KM
          </div>
          <div className="leading-tight">
            <p className="text-xs font-bold text-white">Khuda Bux Mahar</p>
            <p className="text-[10px] text-[#00D4FF] font-mono font-semibold">Founder & CEO</p>
          </div>
        </div>
      </div>

    </header>
  );
}