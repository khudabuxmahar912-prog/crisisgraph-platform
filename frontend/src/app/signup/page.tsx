'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, User, Mail, Lock, Building, Globe, ShieldCheck } from 'lucide-react';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    accountType: 'Individual Customer',
    organization: '',
    country: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate user account creation
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#07111F] text-white flex flex-col justify-center items-center px-6 py-12 bg-graph-mesh font-sans">
      
      {/* Top Header Link */}
      <div className="w-full max-w-md flex items-center justify-between mb-8">
        <Link href="/" className="flex items-center gap-2 text-xs text-slate-400 hover:text-[#00D4FF] transition">
          <ArrowLeft size={16} /> Back to Homepage
        </Link>
        <span className="text-[11px] font-mono text-[#00D4FF] bg-cyan-950 px-2.5 py-1 rounded border border-[#00D4FF]/30">
          CUSTOMER PORTAL
        </span>
      </div>

      {/* Registration Form Card */}
      <div className="w-full max-w-md rounded-2xl bg-[#0B192B] border border-slate-800 p-8 shadow-2xl space-y-6">
        
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#00D4FF] to-blue-600 flex items-center justify-center font-bold text-slate-950 text-2xl mx-auto shadow-[0_0_20px_rgba(0,212,255,0.4)]">
            C
          </div>
          <h1 className="text-xl font-extrabold text-white tracking-wide">Create CrisisGraph Account</h1>
          <p className="text-xs text-slate-400">Join the Infrastructure Intelligence & Research Network</p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-xl bg-cyan-950/60 border border-[#00D4FF]/40 text-center space-y-3">
            <ShieldCheck size={36} className="text-[#00D4FF] mx-auto" />
            <h3 className="text-sm font-bold text-white">Registration Request Recorded</h3>
            <p className="text-xs text-slate-300">
              Welcome, <span className="text-[#00D4FF] font-semibold">{formData.fullName}</span>! Your customer workspace is ready.
            </p>
            <Link 
              href="/workspace" 
              className="inline-block px-5 py-2.5 rounded-lg bg-[#00D4FF] text-slate-950 text-xs font-bold hover:bg-cyan-300 transition"
            >
              Enter Customer Workspace ➔
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            {/* Account Type Selection */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1.5">Account Purpose / Role</label>
              <select 
                value={formData.accountType}
                onChange={(e) => setFormData({ ...formData, accountType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#07111F] border border-slate-700 text-white focus:outline-none focus:border-[#00D4FF]"
              >
                <option value="Individual Customer">Individual Customer / Researcher</option>
                <option value="Business Enterprise">Business / Organization Client</option>
                <option value="Research Collaborator">Research Collaborator</option>
                <option value="Internship Applicant">Internship Applicant</option>
              </select>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1.5">Full Name</label>
              <div className="relative">
                <User size={14} className="absolute left-3 top-3 text-slate-500" />
                <input 
                  type="text" 
                  required
                  placeholder="Khuda Bux Mahar" 
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-[#07111F] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4FF]"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1.5">Email Address</label>
              <div className="relative">
                <Mail size={14} className="absolute left-3 top-3 text-slate-500" />
                <input 
                  type="email" 
                  required
                  placeholder="name@company.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-[#07111F] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4FF]"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1.5">Password</label>
              <div className="relative">
                <Lock size={14} className="absolute left-3 top-3 text-slate-500" />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••••••" 
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-[#07111F] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4FF]"
                />
              </div>
            </div>

            {/* Organization (Optional) */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1.5">Organization / University (Optional)</label>
              <div className="relative">
                <Building size={14} className="absolute left-3 top-3 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="QUEST Nawabshah" 
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-[#07111F] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4FF]"
                />
              </div>
            </div>

            {/* Country */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1.5">Country</label>
              <div className="relative">
                <Globe size={14} className="absolute left-3 top-3 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Pakistan" 
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-[#07111F] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4FF]"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <button 
              type="submit" 
              className="w-full py-3 rounded-xl bg-[#00D4FF] text-slate-950 font-bold hover:bg-cyan-300 transition shadow-[0_0_20px_rgba(0,212,255,0.3)] mt-2"
            >
              Complete Account Registration
            </button>
          </form>
        )}

        <div className="border-t border-slate-800 pt-4 text-center text-xs text-slate-400">
          Already have an account? <Link href="/signin" className="text-[#00D4FF] hover:underline font-semibold">Sign In</Link>
        </div>

      </div>
    </div>
  );
}