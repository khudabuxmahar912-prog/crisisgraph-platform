'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Send, 
  Network, 
  Layers, 
  Bot, 
  ShieldAlert, 
  Terminal,
  Sparkles 
} from 'lucide-react';

const servicesList = [
  {
    id: 'Graph Infrastructure Development',
    title: 'Graph Infrastructure & Failure Simulation',
    icon: Network,
    badge: 'Core Specialty',
    description: 'Custom directed graph modeling, Cytoscape/NetworkX dependency visualization, and real-time cascade failure wave simulation for power, water, and SCADA networks.',
  },
  {
    id: 'Full Stack Next.js & FastAPI Architecture',
    title: 'Full Stack Next.js 15 & FastAPI Systems',
    icon: Layers,
    badge: 'High Performance',
    description: 'Enterprise monorepo architectures, async Python backends, reactive UI/UX components, and secure REST/WebSocket API integrations.',
  },
  {
    id: 'AI Agent & Automation Systems',
    title: 'AI Agent & Orchestration Workflows',
    icon: Bot,
    badge: 'Autonomous AI',
    description: 'Custom multi-agent tools, structured LLM function calling, decision planning engines, and automated business/telemetry pipeline integrations.',
  },
  {
    id: 'AI Security & Prompt Hardening Audit',
    title: 'AI Security & Prompt Hardening Audit',
    icon: ShieldAlert,
    badge: 'OWASP Compliant',
    description: 'Defense-in-depth security assessments for AI agents, prompt injection testing, tool abuse protection, and secure LLM orchestration standards.',
  },
  {
    id: 'Custom Python & C++ Engineering',
    title: 'Custom Python & C++ High-Speed Algorithms',
    icon: Terminal,
    badge: 'Core Algorithmic',
    description: 'Low-latency backend algorithms, complex data structures, hardware/telemetry data processors, and high-throughput computational engines.',
  },
];

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    serviceType: 'Graph Infrastructure Development',
    budget: '$200 - $2,000',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Auto-select service when clicking a card
  const handleSelectService = (serviceId: string) => {
    setFormData((prev) => ({ ...prev, serviceType: serviceId }));
    // Smooth scroll down to inquiry form
    const formElement = document.getElementById('inquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            ENGINEERING SERVICES & CONSULTING
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        
        {/* Page Title & Hero */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-cyan-950 border border-[#00D4FF]/30 text-[#00D4FF] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 justify-center w-fit mx-auto">
            <Sparkles size={14} /> Production Engineering
          </span>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white">Our Engineering Services</h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            Direct specialized software engineering, graph simulation engines, AI agent security, and full-stack enterprise systems delivered by CRISISGRAPH TECHNOLOGY.
          </p>
        </div>

        {/* SECTION 1: SERVICES HIGHLIGHT CARDS GRID */}
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-4 flex justify-between items-end">
            <div>
              <h2 className="text-xl font-extrabold text-white">1. Specialized Services We Offer</h2>
              <p className="text-xs text-slate-400 mt-1">Select any service to auto-fill your project inquiry form below.</p>
            </div>
            <span className="text-xs font-mono text-[#00D4FF]">5 Capabilities Available</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, index) => {
              const IconComponent = service.icon;
              const isSelected = formData.serviceType === service.id;

              return (
                <div
                  key={index}
                  onClick={() => handleSelectService(service.id)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden ${
                    isSelected
                      ? 'bg-cyan-950/60 border-[#00D4FF] shadow-[0_0_20px_rgba(0,212,255,0.25)]'
                      : 'bg-[#0B192B] border-slate-800 hover:border-[#00D4FF]/50'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 rounded-xl bg-[#07111F] border border-slate-700 flex items-center justify-center text-[#00D4FF] group-hover:scale-110 transition-transform">
                        <IconComponent size={24} />
                      </div>
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/30 font-mono font-semibold">
                        {service.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-base text-white group-hover:text-[#00D4FF] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed mt-2">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold">
                    <span className={isSelected ? 'text-[#00D4FF]' : 'text-slate-400'}>
                      {isSelected ? '✓ Service Selected' : 'Click to Request'}
                    </span>
                    <span className="text-[#00D4FF] group-hover:translate-x-1 transition-transform">➔</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: PROJECT INQUIRY FORM */}
        <div id="inquiry-form" className="space-y-6 pt-6">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-xl font-extrabold text-white">2. Submit Project Inquiry Form</h2>
            <p className="text-xs text-slate-400 mt-1">Specify your requirements to route your project details directly to CEO Khuda Bux Mahar.</p>
          </div>

          <div className="rounded-2xl bg-[#0B192B] border border-slate-800 p-8 shadow-2xl">
            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <CheckCircle2 size={48} className="text-[#00D4FF] mx-auto" />
                <h3 className="text-xl font-bold text-white">Service Inquiry Received</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you <span className="text-[#00D4FF] font-semibold">{formData.clientName}</span>. Your inquiry for <span className="text-[#00D4FF] font-semibold">{formData.serviceType}</span> has been routed to the CEO Command Center. Khuda Bux Mahar will review your technical requirements.
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
                
                {/* Client Name & Email */}
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

                {/* Target Service & Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-2">Selected Technical Service</label>
                    <select 
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-slate-700 text-white focus:outline-none focus:border-[#00D4FF]"
                    >
                      <option value="Graph Infrastructure Development">Graph Infrastructure & Failure Simulation</option>
                      <option value="Full Stack Next.js & FastAPI Architecture">Full Stack Next.js 15 & FastAPI Systems</option>
                      <option value="AI Agent & Automation Systems">AI Agent & Orchestration Workflows</option>
                      <option value="AI Security & Prompt Hardening Audit">AI Security & Prompt Hardening Audit</option>
                      <option value="Custom Python & C++ Engineering">Custom Python & C++ High-Speed Algorithms</option>
                    </select>
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
                </div>

                {/* Details */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-2">Project Details & Technical Requirements</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Describe your technical requirements, deliverables, system specs, and timelines..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-slate-700 text-white focus:outline-none focus:border-[#00D4FF]"
                  ></textarea>
                </div>

                {/* Submit */}
                <button 
                  type="submit" 
                  className="w-full py-3.5 rounded-xl bg-[#00D4FF] text-slate-950 font-bold hover:bg-cyan-300 transition shadow-[0_0_20px_rgba(0,212,255,0.3)] flex items-center justify-center gap-2 text-sm"
                >
                  <Send size={16} /> Submit Project Inquiry
                </button>
              </form>
            )}
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