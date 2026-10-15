import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Cpu, Network, Award, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'About | CRISISGRAPH TECHNOLOGY',
  description: 'Deep-tech research platform for critical infrastructure resilience and graph intelligence.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#07111F] text-white bg-graph-mesh font-sans">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#07111F]/90 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xs text-slate-300 hover:text-[#00D4FF] transition">
            <ArrowLeft size={16} /> Back to Homepage
          </Link>
          <span className="text-xs font-mono text-[#00D4FF] bg-cyan-950 px-3 py-1 rounded-full border border-[#00D4FF]/30">
            COMPANY & RESEARCH MISSION
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-cyan-950 border border-[#00D4FF]/30 text-[#00D4FF] text-xs font-semibold uppercase tracking-wider">
            Deep-Tech Infrastructure Intelligence
          </span>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white">
            Engineering Resilience for Critical Systems
          </h1>
          
          {/* Detailed 10-Line Mission Description */}
          <div className="text-slate-300 text-xs sm:text-sm leading-relaxed text-justify space-y-3 bg-[#0B192B]/80 border border-slate-800 p-6 rounded-2xl shadow-xl">
            <p>
              CRISISGRAPH TECHNOLOGY is an advanced deep-tech research initiative and software platform built to solve the growing vulnerability of interconnected modern infrastructure. As global power grids, SCADA networks, municipal water distribution systems, telecommunications, and industrial logistics become increasingly digitalized, a single localized fault can trigger rapid, catastrophic cascade failure waves across critical regions.
            </p>
            <p>
              Our core objective is to model, predict, and eliminate systemic risk through high-precision dependency graph neural networks, real-time telemetry analytics, and deterministic failure propagation simulations. By analyzing cross-domain physical and digital interdependencies, the platform empowers infrastructure operators, municipal defense engineers, and enterprise security leaders to identify hidden bottlenecks before operational breakdown occurs.
            </p>
            <p>
              Operating under strict zero-assumption security principles, CRISISGRAPH combines hardened AI agent orchestration, explainable risk interpretation logs, and isolated simulation sandboxes. Under the executive vision of Founder Khuda Bux Mahar, the platform bridges cutting-edge theoretical graph research with production-ready software architectures to guarantee operational continuity for vital civilian and defense assets.
            </p>
          </div>
        </div>

        {/* Founder & Leadership Card */}
        <div className="rounded-2xl bg-[#0B192B] border border-slate-800 p-8 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#00D4FF] to-blue-600 flex items-center justify-center font-bold text-slate-950 text-3xl shrink-0 shadow-[0_0_25px_rgba(0,212,255,0.4)]">
            KM
          </div>
          <div className="space-y-3 text-center md:text-left">
            <div>
              <h2 className="text-xl font-extrabold text-white">Khuda Bux Mahar</h2>
              <p className="text-xs font-mono text-[#00D4FF]">CEO & Founder, CRISISGRAPH TECHNOLOGY</p>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Directing system architecture, graph algorithm engineering, AI security orchestration, and full-stack enterprise platform development to model complex physical-digital infrastructure interdependencies.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1 text-[11px] font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded bg-[#07111F] border border-slate-700">Deep-Tech Platform Architecture</span>
              <span className="px-2.5 py-1 rounded bg-[#07111F] border border-slate-700">AI Security & Graph Machine Learning</span>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#0B192B] border border-slate-800 space-y-3">
            <Network size={28} className="text-[#00D4FF]" />
            <h3 className="font-bold text-base text-white">Graph Interdependence</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Mapping multi-layered topological dependencies across electric power networks, telecommunication feeds, and SCADA control points.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B192B] border border-slate-800 space-y-3">
            <Cpu size={28} className="text-[#00D4FF]" />
            <h3 className="font-bold text-base text-white">Cascade Simulation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Executing real-time failure wave propagation models to identify single points of failure before physical infrastructure breakdown.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B192B] border border-slate-800 space-y-3">
            <Shield size={28} className="text-[#00D4FF]" />
            <h3 className="font-bold text-base text-white">Hardened AI Security</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Enforcing OWASP LLM security standards, tool abuse defense, and prompt injection hardening across all automated agent workflows.
            </p>
          </div>
        </div>

        {/* Action Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-950/60 to-[#0B192B] border border-[#00D4FF]/40 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">Experience Our Graph Engine in Action</h3>
          <p className="text-xs text-slate-300 max-w-lg mx-auto">
            Test live cascade failure propagation, inspect graph node metrics, or submit specialized engineering inquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-bold pt-2">
            <Link href="/demo" className="px-6 py-3 rounded-xl bg-[#00D4FF] text-slate-950 hover:bg-cyan-300 transition shadow-[0_0_15px_rgba(0,212,255,0.3)]">
              Launch Public Sandbox Demo
            </Link>
            <Link href="/services" className="px-6 py-3 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 transition">
              Request Engineering Inquiry
            </Link>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500 space-y-1">
        <p>© CRISISGRAPH TECHNOLOGY. All Rights Reserved.</p>
        <p>Founded by Khuda Bux Mahar.</p>
      </footer>
    </div>
  );
}