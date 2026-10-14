'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  BarChart3, 
  DollarSign, 
  Users, 
  FileText, 
  Briefcase, 
  Cpu, 
  FlaskConical, 
  UserCheck, 
  GraduationCap, 
  Bot, 
  CheckSquare, 
  FileSpreadsheet, 
  Activity, 
  ShieldAlert, 
  Settings, 
  User, 
  Lock, 
  LogOut,
  Bell,
  Search,
  ChevronRight
} from 'lucide-react';

export default function CEOCommandCenter() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-[#07111F] text-white flex font-sans">
      
      {/* 1. LEFT SIDEBAR */}
      <aside className="w-64 bg-[#0B192B] border-r border-slate-800 flex flex-col justify-between shrink-0">
        <div>
          {/* Brand & CEO Header */}
          <div className="p-5 border-b border-slate-800 flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#00D4FF] to-blue-600 flex items-center justify-center font-bold text-slate-950 text-lg shadow-[0_0_12px_rgba(0,212,255,0.4)]">
              C
            </div>
            <div>
              <h1 className="font-extrabold text-sm tracking-wider text-white">CRISISGRAPH</h1>
              <p className="text-[10px] text-[#00D4FF] font-mono tracking-widest uppercase">CEO COMMAND CENTER</p>
            </div>
          </div>

          {/* Founder Identity Card */}
          <div className="mx-3 my-4 p-3 rounded-xl bg-[#07111F] border border-slate-800 flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#00D4FF]/20 border border-[#00D4FF] flex items-center justify-center font-bold text-xs text-[#00D4FF]">
              KM
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-white truncate">Khuda Bux Mahar</p>
              <p className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> CEO & Founder
              </p>
            </div>
          </div>

          {/* Navigation Items (18 Mandatory Modules) */}
          <nav className="px-3 space-y-1 text-xs max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
            {[
              { id: 'overview', label: '1. Executive Overview', icon: LayoutDashboard },
              { id: 'analytics', label: '2. Company Analytics', icon: BarChart3 },
              { id: 'finance', label: '3. Revenue & Expenses', icon: DollarSign },
              { id: 'leads', label: '4. Clients & Leads', icon: Users },
              { id: 'service-requests', label: '5. Service Requests', icon: FileText },
              { id: 'projects', label: '6. Client Projects', icon: Briefcase },
              { id: 'research-products', label: '7. Seven Research Products', icon: Cpu },
              { id: 'rnd', label: '8. Research & Development', icon: FlaskConical },
              { id: 'customers', label: '9. Customer Management', icon: UserCheck },
              { id: 'internships', label: '10. Internship Applications', icon: GraduationCap },
              { id: 'team', label: '11. Team Management', icon: Users },
              { id: 'ai-agents', label: '12. AI Agents', icon: Bot },
              { id: 'approvals', label: '13. Human Approvals', icon: CheckSquare },
              { id: 'reports', label: '14. Reports', icon: FileSpreadsheet },
              { id: 'monitoring', label: '15. System Monitoring', icon: Activity },
              { id: 'security', label: '16. Security & Audit Logs', icon: ShieldAlert },
              { id: 'settings', label: '17. Company Settings', icon: Settings },
              { id: 'profile', label: '18. Founder Profile', icon: User },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-all ${
                    isActive 
                      ? 'bg-[#00D4FF]/10 text-[#00D4FF] font-semibold border border-[#00D4FF]/30' 
                      : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center space-x-2.5 truncate">
                    <Icon size={15} />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {isActive && <ChevronRight size={12} />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Logout */}
        <div className="p-3 border-t border-slate-800">
          <Link 
            href="/" 
            className="flex items-center justify-center space-x-2 w-full py-2 rounded-lg bg-slate-800/80 hover:bg-red-950/50 hover:text-red-400 text-xs font-medium text-slate-300 transition"
          >
            <LogOut size={14} />
            <span>Exit Command Center</span>
          </Link>
        </div>
      </aside>

      {/* 2. MAIN CONTENT WORKSPACE */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-[#07111F]/90 backdrop-blur-md border-b border-slate-800 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-1.5 rounded-lg bg-amber-950/60 border border-amber-800 text-amber-400">
              <Lock size={16} />
            </div>
            <div>
              <h2 className="text-sm font-extrabold text-white">RESTRICTED FOUNDER ACCESS</h2>
              <p className="text-[11px] text-slate-400">Authorized Personnel: Khuda Bux Mahar (CEO ID: #001)</p>
            </div>
          </div>

          {/* Search & Quick Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-2.5 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search metrics, leads, products..." 
                className="pl-9 pr-4 py-1.5 text-xs rounded-lg bg-[#0B192B] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00D4FF]"
              />
            </div>
            <button className="p-2 rounded-lg bg-[#0B192B] border border-slate-700 text-slate-300 hover:text-white relative">
              <Bell size={16} />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#00D4FF]"></span>
            </button>
          </div>
        </header>

        {/* Dashboard Workspace */}
        <main className="p-8 space-y-8">
          
          {/* Executive Welcome Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0B192B] via-[#0B192B] to-cyan-950/40 border border-slate-800 flex justify-between items-center">
            <div className="space-y-1">
              <h3 className="text-xl font-extrabold text-white">Welcome, CEO Khuda Bux Mahar</h3>
              <p className="text-xs text-slate-400">CRISISGRAPH TECHNOLOGY Operational Overview & High-Level System Status</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-mono font-semibold">
              System Health: 100% Operational
            </span>
          </div>

          {/* Key Metric Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-[#0B192B] border border-slate-800 space-y-2">
              <p className="text-xs text-slate-400 font-medium">Research Products Active</p>
              <h4 className="text-2xl font-extrabold text-[#00D4FF]">7 / 7</h4>
              <p className="text-[11px] text-slate-500">Integrated Core & Sub-modules</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B192B] border border-slate-800 space-y-2">
              <p className="text-xs text-slate-400 font-medium">Inbound Service Requests</p>
              <h4 className="text-2xl font-extrabold text-white">0 New</h4>
              <p className="text-[11px] text-slate-500">Real-time database ready</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B192B] border border-slate-800 space-y-2">
              <p className="text-xs text-slate-400 font-medium">Internship Applications</p>
              <h4 className="text-2xl font-extrabold text-white">0 Applications</h4>
              <p className="text-[11px] text-slate-500">Secure application portal</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B192B] border border-slate-800 space-y-2">
              <p className="text-xs text-slate-400 font-medium">Financial Records</p>
              <h4 className="text-2xl font-extrabold text-emerald-400">$0.00 USD</h4>
              <p className="text-[11px] text-slate-500">No fabricated data displayed</p>
            </div>
          </div>

          {/* Active Tab View Details */}
          <div className="rounded-2xl bg-[#0B192B] border border-slate-800 p-6 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Activity size={16} className="text-[#00D4FF]" /> Module View: {activeTab.toUpperCase()}
            </h4>

            {activeTab === 'overview' && (
              <div className="space-y-4 text-xs text-slate-300">
                <p>Welcome to your personal command platform. From here, you can manage all business inquiries, client leads, research product iterations, and AI agent permissions.</p>
                <div className="p-4 rounded-xl bg-[#07111F] border border-slate-800 space-y-2">
                  <p className="font-semibold text-[#00D4FF]">System Verification Log:</p>
                  <p>• Single unified architecture initialized.</p>
                  <p>• Customer & Public access restricted from Founder route.</p>
                  <p>• Real-time graph simulation sandbox operational.</p>
                </div>
              </div>
            )}

            {activeTab !== 'overview' && (
              <div className="p-8 text-center text-xs text-slate-500 space-y-2">
                <p className="text-slate-400 font-semibold">Module "{activeTab.toUpperCase()}" initialized.</p>
                <p>Waiting for database integration in Month 2 / Month 3 backend phase.</p>
              </div>
            )}
          </div>

        </main>

      </div>
    </div>
  );
}