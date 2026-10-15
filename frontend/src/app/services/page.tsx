'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Code, ShieldCheck, Send } from 'lucide-react';

export default function ServicesPage() {
  const [formData, setFormData] = useState({
  clientName: '',
  email: '',
  serviceType: 'Graph Infrastructure Development',
  budget: '$200 - $2,000',
  description: '',
});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#07111F] text-white bg-graph-mesh font-sans">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#07111F]/90 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xs text-slate-300 hover:text-[#00D4FF] transition">
            <ArrowLeft size={16} /> Back to Homepage
          </Link>
          <span className="text-xs font-mono text-[#00D4FF] bg-cyan-950 px-3 py-1 rounded-full border border-[#00D4FF]/30">
            SERVICES & CONSULTING
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        
        <div className="text-center space-y-3">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white">Custom Engineering Services</h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Direct access to specialized software engineering, AI graph development, and cyber-physical security simulation architectures.
          </p>
        </div>

        {/* Request Form */}
        <div className="rounded-2xl bg-[#0B192B] border border-slate-800 p-8 shadow-2xl">
          {submitted ? (
            <div className="p-8 text-center space-y-4">
              <CheckCircle2 size={48} className="text-[#00D4FF] mx-auto" />
              <h3 className="text-xl font-bold text-white">Service Inquiry Received</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Thank you <span className="text-[#00D4FF] font-semibold">{formData.clientName}</span>. Your request has been routed to the CEO Command Center. Khuda Bux Mahar will review your technical requirements.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-slate-800 text-xs text-slate-200 font-semibold hover:bg-slate-700 transition"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 font-semibold mb-2">Your Name / Business Representative</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-slate-700 text-white focus:outline-none focus:border-[#00D4FF]"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-2">Work Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-slate-700 text-white focus:outline-none focus:border-[#00D4FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 font-semibold mb-2">Target Technical Service</label>
                  <select 
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-slate-700 text-white focus:outline-none focus:border-[#00D4FF]"
                  >
                    <option value="Graph Infrastructure Development">Graph Infrastructure Development</option>
                    <option value="Full Stack Next.js & FastAPI Architecture">Full Stack Next.js & FastAPI Architecture</option>
                    <option value="AI Agent & Automation Systems">AI Agent & Automation Systems</option>
                    <option value="AI Security & Prompt Hardening Audit">AI Security & Prompt Hardening Audit</option>
                    <option value="Custom Python & C++ Engineering">Custom Python & C++ Engineering</option>
                  </select>
                </div>
                </div>

                <div>
                    <label className="block text-slate-300 font-semibold mb-2">Estimated Project Budget</label>
                     <select 
                          value={formData.budget}
                     onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-slate-700 text-white focus:outline-none focus:border-[#00D4FF]"
                >
       <option value="$200 - $2,000">$200 - $2,000 USD</option>
         <option value="$2,000 - $5,000">$2,000 - $5,000 USD</option>
         <option value="$5,000+">$5,000+ USD</option>
             </select>
         </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-2">Project Details & Requirements</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Describe your technical requirements, deliverables, and timelines..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-slate-700 text-white focus:outline-none focus:border-[#00D4FF]"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-3.5 rounded-xl bg-[#00D4FF] text-slate-950 font-bold hover:bg-cyan-300 transition shadow-[0_0_20px_rgba(0,212,255,0.3)] flex items-center justify-center gap-2"
              >
                <Send size={16} /> Submit Project Inquiry
              </button>
            </form>
          )}
        </div>

      </main>
    </div>
  );
}