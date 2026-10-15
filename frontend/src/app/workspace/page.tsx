import React from 'react';
import Link from 'next/link';
import { User, ShieldAlert, Cpu, FileText, ArrowRight, LogOut, CheckCircle2 } from 'lucide-react';

export default function CustomerWorkspacePage() {
  return (
    <div className="min-h-screen bg-[#07111F] text-white flex flex-col font-sans">
      
      {/* Workspace Header */}
      <header className="sticky top-0 z-50 bg-[#07111F]/90 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#00D4FF] to-blue-600 flex items-center justify-center font-bold text-slate-950 text-lg">
              C
            </div>
            <div>
              <h1 className="font-extrabold text-sm text-white">CRISISGRAPH WORKSPACE</h1>
              <p className="text-[10px] text-[#00D4FF]">Authenticated Customer Intelligence Tier</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-xs">
            <span className="px-3 py-1 rounded-full bg-cyan-950 text-[#00D4FF] border border-[#00D4FF]/30 font-mono">
              Role: Customer / Client
            </span>
            <Link href="/" className="flex items-center gap-1 text-slate-400 hover:text-red-400 transition">
              <LogOut size={14} /> Sign Out
            </Link>
          </div>
        </div>
      </header>

      {/* Main Customer Dashboard Workspace */}
      <main className="max-w-7xl mx-auto px-6 py-10 flex-1 space-y-8 w-full">
        
        {/* Welcome Section */}
        <div className="p-6 rounded-2xl bg-[#0B192B] border border-slate-800 space-y-2">
          <div className="flex items-center gap-2">
            <User size={20} className="text-[#00D4FF]" />
            <h2 className="text-xl font-bold text-white">Welcome to Your Customer Workspace</h2>
          </div>
          <p className="text-xs text-slate-400">
            Manage your service project inquiries, explore product documentation, and interact with public simulation sandboxes.
          </p>
        </div>

        {/* Security Boundary Alert Box */}
        <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800 text-xs text-amber-300 flex items-start gap-3">
          <ShieldAlert size={18} className="shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Access Boundary Enforcement:</span> Standard customer accounts do not have administrative or founder authority. All sensitive operations remain restricted to the CEO Command Center.
          </div>
        </div>

        {/* Customer Workspace Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-[#0B192B] border border-slate-800 space-y-4 hover:border-[#00D4FF]/40 transition">
            <div className="w-10 h-10 rounded-lg bg-[#07111F] border border-slate-700 flex items-center justify-center text-[#00D4FF]">
              <Cpu size={20} />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Interactive Demo Sandbox</h3>
              <p className="text-xs text-slate-400 mt-1">Explore live cascade failure graph simulations on mock infrastructure datasets.</p>
            </div>
            <Link href="/demo" className="inline-flex items-center gap-1 text-xs text-[#00D4FF] font-semibold hover:underline">
              Launch Sandbox <ArrowRight size={14} />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B192B] border border-slate-800 space-y-4 hover:border-[#00D4FF]/40 transition">
            <div className="w-10 h-10 rounded-lg bg-[#07111F] border border-slate-700 flex items-center justify-center text-[#00D4FF]">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Service Requests</h3>
              <p className="text-xs text-slate-400 mt-1">Submit custom web development, AI automation, or Python graph development requests.</p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-1 text-xs text-[#00D4FF] font-semibold hover:underline">
              Submit Project Inquiry <ArrowRight size={14} />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B192B] border border-slate-800 space-y-4 hover:border-[#00D4FF]/40 transition">
            <div className="w-10 h-10 rounded-lg bg-[#07111F] border border-slate-700 flex items-center justify-center text-[#00D4FF]">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Research Products</h3>
              <p className="text-xs text-slate-400 mt-1">View specifications for all 7 integrated CRISISGRAPH research products.</p>
            </div>
            <Link href="/products" className="inline-flex items-center gap-1 text-xs text-[#00D4FF] font-semibold hover:underline">
              Browse Research Catalog <ArrowRight size={14} />
            </Link>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © CRISISGRAPH TECHNOLOGY. All Rights Reserved. Founded by Khuda Bux Mahar.
      </footer>
    </div>
  );
}