'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Network, 
  Activity, 
  ShieldAlert, 
  Database, 
  FileText, 
  Code2, 
  Settings, 
  ChevronRight 
} from 'lucide-react';
import CrisisGraphLogo from '@/components/CrisisGraphLogo';

const navigationItems = [
  { name: 'Dashboard', href: '/founder', icon: LayoutDashboard },
  { name: 'Infrastructure Graph', href: '/demo', icon: Network },
  { name: 'Simulations', href: '/demo', icon: Activity },
  { name: 'Anomaly Detection', href: '/products/predict', icon: ShieldAlert },
  { name: 'Assets & Systems', href: '/products', icon: Database },
  { name: 'Reports', href: '/products/explain', icon: FileText },
  { name: 'API & Integrations', href: '/services', icon: Code2 },
  { name: 'Settings', href: '/founder', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-[#07111F] border-r border-slate-800/80 flex flex-col justify-between shrink-0 h-screen sticky top-0 z-40 select-none">
      
      {/* Top Brand Section */}
      <div>
        <div className="p-6 border-b border-slate-800/80 flex items-center">
          <CrisisGraphLogo variant="full" size={36} />
        </div>

        {/* Navigation Links with Larger Text */}
        <nav className="p-4 space-y-2 mt-3">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-950/90 to-blue-950/50 text-[#00D4FF] border border-[#00D4FF]/40 shadow-[0_0_15px_rgba(0,212,255,0.2)]'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-3.5">
                  <Icon size={18} className={isActive ? 'text-[#00D4FF]' : 'text-slate-400'} />
                  <span>{item.name}</span>
                </div>
                {isActive && <ChevronRight size={14} className="text-[#00D4FF]" />}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Brand Panel */}
      <div className="p-4 m-4 rounded-xl bg-[#0B192B] border border-slate-800 space-y-1.5 shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00D4FF] animate-pulse"></div>
          <span className="text-xs font-bold text-white tracking-wide">CRISISGRAPH TECHNOLOGY</span>
        </div>
        <p className="text-[11px] text-slate-400 leading-snug">
          AI-Powered Graph Intelligence<br />
          For a More Resilient World.
        </p>
      </div>

    </aside>
  );
}