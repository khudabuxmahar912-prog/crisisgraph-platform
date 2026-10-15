'use client';

import React from 'react';
import { Play, ArrowRight, Zap, Clock, ShieldCheck } from 'lucide-react';

export default function CascadeSimulationPanel() {
  return (
    <div className="p-5 rounded-2xl bg-[#0B192B]/90 border border-slate-800/80 backdrop-blur-md shadow-xl space-y-5">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2">
            <Zap size={18} className="text-[#00D4FF]" />
            <h3 className="text-sm font-extrabold text-white">Cascade Simulation</h3>
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5">Run what-if scenarios to understand potential impact and prepare response plans.</p>
        </div>

        <button className="px-3.5 py-1.5 rounded-xl bg-[#00D4FF] text-slate-950 font-bold text-xs hover:bg-cyan-300 transition shadow-[0_0_12px_rgba(0,212,255,0.3)] flex items-center gap-1.5 shrink-0">
          <Play size={12} fill="#07111F" /> + New Simulation
        </button>
      </div>

      {/* 3-Stage Visual Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        
        {/* Stage 1 */}
        <div className="p-3.5 rounded-xl bg-[#07111F]/90 border border-red-900/60 space-y-2">
          <div className="flex justify-between items-center">
            <span className="w-5 h-5 rounded-full bg-red-500 text-slate-950 text-[10px] font-bold flex items-center justify-center">1</span>
            <span className="text-[9px] px-2 py-0.5 rounded bg-red-950 text-red-400 font-mono font-bold border border-red-800">CRITICAL</span>
          </div>
          <div>
            <p className="text-[10px] text-slate-400 uppercase font-mono">Initial Failure</p>
            <p className="text-xs font-bold text-white mt-0.5">Energy Plant</p>
          </div>
        </div>

        {/* Stage 2 */}
        <div className="p-3.5 rounded-xl bg-[#07111F]/90 border border-amber-900/60 space-y-2">
          <div className="flex justify-between items-center">
            <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-bold flex items-center justify-center">2</span>
            <span className="text-[9px] px-2 py-0.5 rounded bg-amber-950 text-amber-400 font-mono font-bold border border-amber-800">HIGH IMPACT</span>
          </div>
          <div>
            <p className="text-[10px] text-slate-400 uppercase font-mono">Propagation</p>
            <p className="text-xs font-bold text-white mt-0.5">3 systems affected</p>
          </div>
        </div>

        {/* Stage 3 */}
        <div className="p-3.5 rounded-xl bg-[#07111F]/90 border border-purple-900/60 space-y-2">
          <div className="flex justify-between items-center">
            <span className="w-5 h-5 rounded-full bg-purple-500 text-slate-950 text-[10px] font-bold flex items-center justify-center">3</span>
            <span className="text-[9px] px-2 py-0.5 rounded bg-purple-950 text-purple-400 font-mono font-bold border border-purple-800">WIDESPREAD</span>
          </div>
          <div>
            <p className="text-[10px] text-slate-400 uppercase font-mono">Final Impact</p>
            <p className="text-xs font-bold text-white mt-0.5">5 additional systems</p>
          </div>
        </div>

      </div>

      {/* Metrics Summary Footer */}
      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800/80 text-[11px]">
        <div>
          <p className="text-slate-400 text-[10px]">Estimated Impact</p>
          <p className="font-bold text-white text-xs mt-0.5">5 systems</p>
        </div>
        <div>
          <p className="text-slate-400 text-[10px]">Total Downtime</p>
          <p className="font-bold text-amber-400 text-xs mt-0.5">2.4 hours (est.)</p>
        </div>
        <div>
          <p className="text-slate-400 text-[10px]">Recovery Time</p>
          <p className="font-bold text-[#00D4FF] text-xs mt-0.5">6.8 hours (est.)</p>
        </div>
      </div>

    </div>
  );
}