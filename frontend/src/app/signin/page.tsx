'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Lock } from 'lucide-react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to customer workspace
    window.location.href = '/workspace';
  };

  return (
    <div className="min-h-screen bg-[#07111F] text-white flex flex-col justify-center items-center px-6 py-12 bg-graph-mesh font-sans">
      
      {/* Top Header Link */}
      <div className="w-full max-w-md flex items-center justify-between mb-8">
        <Link href="/" className="flex items-center gap-2 text-xs text-slate-400 hover:text-[#00D4FF] transition">
          <ArrowLeft size={16} /> Back to Homepage
        </Link>
        <span className="text-[11px] font-mono text-[#00D4FF] bg-cyan-950 px-2.5 py-1 rounded border border-[#00D4FF]/30">
          SIGN IN
        </span>
      </div>

      {/* Sign In Form Box */}
      <div className="w-full max-w-md rounded-2xl bg-[#0B192B] border border-slate-800 p-8 shadow-2xl space-y-6">
        
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#00D4FF] to-blue-600 flex items-center justify-center font-bold text-slate-950 text-2xl mx-auto shadow-[0_0_20px_rgba(0,212,255,0.4)]">
            C
          </div>
          <h1 className="text-xl font-extrabold text-white tracking-wide">Sign In to CrisisGraph</h1>
          <p className="text-xs text-slate-400">Access your customer workspace and service requests</p>
        </div>

        <form onSubmit={handleSignIn} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-semibold mb-1.5">Email Address</label>
            <div className="relative">
              <Mail size={14} className="absolute left-3 top-3 text-slate-500" />
              <input 
                type="email" 
                required
                placeholder="name@company.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-[#07111F] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4FF]"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1.5">Password</label>
            <div className="relative">
              <Lock size={14} className="absolute left-3 top-3 text-slate-500" />
              <input 
                type="password" 
                required
                placeholder="••••••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-[#07111F] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4FF]"
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full py-3 rounded-xl bg-[#00D4FF] text-slate-950 font-bold hover:bg-cyan-300 transition shadow-[0_0_20px_rgba(0,212,255,0.3)] mt-2"
          >
            Sign In to Workspace
          </button>
        </form>

        <div className="border-t border-slate-800 pt-4 text-center text-xs text-slate-400">
          Don't have an account yet? <Link href="/signup" className="text-[#00D4FF] hover:underline font-semibold">Sign Up</Link>
        </div>

      </div>
    </div>
  );
}