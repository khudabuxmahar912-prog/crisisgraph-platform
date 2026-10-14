import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07111F] text-white bg-graph-mesh relative overflow-hidden font-sans">
      
      {/* 1. STICKY NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#07111F]/90 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#00D4FF] to-blue-600 flex items-center justify-center font-bold text-slate-950 text-xl shadow-[0_0_15px_rgba(0,212,255,0.4)]">
              C
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-wider text-white block leading-tight">
                CRISISGRAPH
              </span>
              <span className="text-[#00D4FF] font-medium text-[10px] tracking-widest uppercase block">
                TECHNOLOGY
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-[#00D4FF] transition-colors">Home</Link>
            <Link href="/about" className="hover:text-[#00D4FF] transition-colors">About</Link>
            <Link href="/products" className="hover:text-[#00D4FF] transition-colors">Products</Link>
            <Link href="/demo" className="hover:text-[#00D4FF] transition-colors">Public Demo</Link>
            <Link href="/services" className="hover:text-[#00D4FF] transition-colors">Services</Link>
            <Link href="/careers" className="hover:text-[#00D4FF] transition-colors">Careers</Link>
          </nav>

          {/* Authentication Actions */}
          <div className="flex items-center space-x-3">
            <Link 
              href="/signin" 
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/signup" 
              className="px-5 py-2 text-sm font-semibold rounded-lg bg-[#00D4FF] text-slate-950 hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)] inline-block"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION WITH GRAPH AI SIMULATION WIDGET */}
      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Headlines & Value Proposition */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-[#00D4FF]/40 text-[#00D4FF] text-xs font-semibold uppercase tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse"></span>
            <span>Infrastructure Graph & Failure Simulation Platform</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Understand Connections. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-cyan-300 to-emerald-400">
              Predict Critical Risks.
            </span> <br />
            Build Resilience.
          </h1>

          <p className="text-slate-300 text-base lg:text-lg max-w-2xl leading-relaxed">
            Simulate cascade failure dynamics, predict industrial equipment faults, and analyze cyber-physical dependencies in real-time with explainable AI graphs.
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            <span className="px-3 py-1.5 rounded-lg bg-[#0B192B] border border-slate-800 text-xs font-medium text-slate-200">
              ⚡ CrisisGraph CORE
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#0B192B] border border-slate-800 text-xs font-medium text-slate-200">
              🤖 Predictive Anomaly Models
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#0B192B] border border-slate-800 text-xs font-medium text-slate-200">
              💧 Water Systems Intelligence
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="/demo" 
              className="px-6 py-3.5 rounded-xl bg-[#00D4FF] text-slate-950 font-bold hover:bg-cyan-300 transition-all shadow-[0_0_25px_rgba(0,212,255,0.35)] inline-block"
            >
              Explore Interactive Demo
            </Link>
            <Link 
              href="/products" 
              className="px-6 py-3.5 rounded-xl bg-[#0B192B] border border-slate-700 text-slate-200 font-semibold hover:border-[#00D4FF] transition-all inline-block"
            >
              Research Dossier
            </Link>
          </div>
        </div>

        {/* Right Column: AI Graph Simulation Interactive Widget */}
        <div className="lg:col-span-5 relative">
          
          {/* Subtle Glow backdrop */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00D4FF] to-emerald-500 rounded-2xl blur-xl opacity-25"></div>

          {/* Widget Surface */}
          <div className="relative rounded-2xl bg-[#0B192B] border border-slate-800 p-6 shadow-2xl space-y-5">
            
            {/* Widget Top Header */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping"></div>
                <div>
                  <h3 className="font-semibold text-sm text-white">CrisisGraph AI Simulation Assistant</h3>
                  <p className="text-xs text-slate-400">Node Status: Active | Real-Time Telemetry</p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono">
                ONLINE
              </span>
            </div>

            {/* Live Graph Canvas Box */}
            <div className="h-44 rounded-xl bg-[#07111F] border border-slate-800 p-4 relative overflow-hidden flex flex-col justify-between">
              <div className="text-xs text-slate-400 font-mono flex justify-between">
                <span>[Substation_01] ➔ [Pump_Station_04]</span>
                <span className="text-[#00D4FF]">Graph Topology: Verified</span>
              </div>

              {/* Node Visual Pipeline */}
              <div className="flex items-center justify-around py-2">
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-[#10B981] flex items-center justify-center text-xs text-[#10B981] font-mono font-bold shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                    N1
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1">Grid Power</span>
                </div>

                <div className="h-[2px] w-10 bg-gradient-to-r from-[#10B981] to-[#F59E0B]"></div>

                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-[#F59E0B] flex items-center justify-center text-xs text-[#F59E0B] font-mono font-bold shadow-[0_0_10px_rgba(245,158,11,0.3)]">
                    N2
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1">Transformer</span>
                </div>

                <div className="h-[2px] w-10 bg-gradient-to-r from-[#F59E0B] to-[#EF4444]"></div>

                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-red-500/20 border border-[#EF4444] flex items-center justify-center text-xs text-[#EF4444] font-mono font-bold shadow-[0_0_10px_rgba(239,68,68,0.3)]">
                    N3
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1">Pump Alpha</span>
                </div>
              </div>

              <div className="text-[11px] text-amber-300 bg-amber-950/50 px-2.5 py-1 rounded border border-amber-800/60 flex justify-between items-center">
                <span>⚠️ Cascade Risk Identified: Overload Probability 78.4%</span>
              </div>
            </div>

            {/* Quick Simulation Options */}
            <div className="space-y-2">
              <span className="text-xs text-slate-400">Run Rapid Simulations:</span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button className="p-2.5 rounded-lg bg-[#07111F] border border-slate-800 text-left hover:border-[#00D4FF] text-slate-300 transition-colors">
                  🔍 Inject Power Failure
                </button>
                <button className="p-2.5 rounded-lg bg-[#07111F] border border-slate-800 text-left hover:border-[#00D4FF] text-slate-300 transition-colors">
                  📊 Run Predict Model
                </button>
              </div>
            </div>

            {/* Simulated Prompt Box */}
            <div className="flex items-center space-x-2 pt-1">
              <input 
                type="text" 
                placeholder="Ask CrisisGraph AI (e.g. Simulate Substation N1 fault)..." 
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#07111F] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4FF]"
                readOnly
              />
              <button className="px-3.5 py-2.5 rounded-lg bg-[#00D4FF] text-slate-950 hover:bg-cyan-300 font-bold transition-colors">
                ➔
              </button>
            </div>

          </div>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 mt-12 py-8 bg-[#07111F]">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs text-slate-500 space-y-1">
          <p>© CRISISGRAPH TECHNOLOGY. All Rights Reserved.</p>
          <p>Founded by Khuda Bux Mahar.</p>
        </div>
      </footer>
    </div>
  );
}