'use client';

import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#07111F]/90 backdrop-blur-md border-b border-slate-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00D4FF] to-blue-600 flex items-center justify-center font-bold text-slate-950 text-base shadow-[0_0_12px_rgba(0,212,255,0.4)] group-hover:scale-105 transition-transform">
            C
          </div>
          <div>
            <h1 className="font-extrabold text-sm tracking-wider text-white group-hover:text-[#00D4FF] transition-colors">CRISISGRAPH</h1>
            <p className="text-[10px] text-[#00D4FF] font-mono tracking-widest uppercase">TECHNOLOGY</p>
          </div>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center space-x-6 text-xs text-slate-300 font-medium">
          <Link href="/about" className="hover:text-[#00D4FF] transition">About</Link>
          <Link href="/products" className="hover:text-[#00D4FF] transition">Products</Link>
          <Link href="/services" className="hover:text-[#00D4FF] transition">Services</Link>
          <Link href="/careers" className="hover:text-[#00D4FF] transition">Careers & Internships</Link>
          <Link href="/demo" className="text-[#00D4FF] hover:underline font-bold">Live Demo</Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3 text-xs">
          <Link href="/signin" className="px-3.5 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition">
            Sign In
          </Link>
          <Link href="/signup" className="px-3.5 py-1.5 rounded-lg bg-[#00D4FF] text-slate-950 font-bold hover:bg-cyan-300 transition shadow-[0_0_12px_rgba(0,212,255,0.3)]">
            Get Started
          </Link>
        </div>

      </div>
    </header>
  );
}