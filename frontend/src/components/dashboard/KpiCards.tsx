'use client';

import React from 'react';
import { ShieldCheck, Network, AlertTriangle, Activity, TrendingUp, TrendingDown } from 'lucide-react';

const kpiData = [
  {
    id: 1,
    title: 'System Health',
    value: '94.8%',
    change: '+2.3%',
    subtext: 'vs. last 24h',
    isPositive: true,
    icon: ShieldCheck,
    color: '#00D4FF',
    badgeBg: 'bg-cyan-950/60 border-cyan-800/80 text-cyan-400',
    sparkline: [88, 90, 89, 92, 91, 94, 94.8],
  },
  {
    id: 2,
    title: 'Connected Nodes',
    value: '1,284',
    change: '+12',
    subtext: 'vs. last 24h',
    isPositive: true,
    icon: Network,
    color: '#38BDF8',
    badgeBg: 'bg-blue-950/60 border-blue-800/80 text-blue-400',
    sparkline: [1260, 1265, 1270, 1272, 1278, 1280, 1284],
  },
  {
    id: 3,
    title: 'Active Risks',
    value: '07',
    change: '-3',
    subtext: 'vs. last 24h',
    isPositive: true,
    icon: AlertTriangle,
    color: '#F59E0B',
    badgeBg: 'bg-amber-950/60 border-amber-800/80 text-amber-400',
    sparkline: [14, 12, 11, 10, 9, 8, 7],
  },
  {
    id: 4,
    title: 'Simulations Today',
    value: '32',
    change: '+8',
    subtext: 'vs. yesterday',
    isPositive: true,
    icon: Activity,
    color: '#A855F7',
    badgeBg: 'bg-purple-950/60 border-purple-800/80 text-purple-400',
    sparkline: [18, 20, 22, 25, 28, 30, 32],
  },
];

export default function KpiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpiData.map((card) => {
        const IconComponent = card.icon;
        const TrendIcon = card.isPositive ? TrendingUp : TrendingDown;

        return (
          <div 
            key={card.id}
            className="p-5 rounded-2xl bg-[#0B192B]/90 border border-slate-800/80 backdrop-blur-md shadow-xl flex flex-col justify-between hover:border-[#00D4FF]/40 transition-all group"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-xs text-slate-400 font-medium">{card.title}</p>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">{card.value}</h3>
              </div>
              <div className={`p-2.5 rounded-xl border ${card.badgeBg} group-hover:scale-110 transition-transform`}>
                <IconComponent size={20} />
              </div>
            </div>

            {/* Sparkline Visual & Trend */}
            <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-800/60 text-[11px]">
              <div className="flex items-center gap-1 font-semibold text-emerald-400">
                <TrendIcon size={13} />
                <span>{card.change}</span>
                <span className="text-slate-400 font-normal ml-0.5">{card.subtext}</span>
              </div>

              {/* Simple Mini SVG Sparkline */}
              <svg width="60" height="20" className="overflow-visible">
                <polyline
                  fill="none"
                  stroke={card.color}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="0,15 10,12 20,14 30,8 40,10 50,4 60,2"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}