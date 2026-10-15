'use client';

import React from 'react';
import { LineChart, Clock, CheckCircle2, ArrowUpRight } from 'lucide-react';

const activityLogs = [
  { text: 'Simulation completed — Energy Plant Failure', time: '14:21', color: 'bg-red-500' },
  { text: 'Node restored — Cache Cluster', time: '13:47', color: 'bg-emerald-500' },
  { text: 'Anomaly detected — Database Latency', time: '13:56', color: 'bg-amber-500' },
  { text: 'New connection — External API (Stripe)', time: '12:32', color: 'bg-blue-500' },
  { text: 'Risk level changed — CDN Region', time: '11:18', color: 'bg-purple-500' },
];

export default function ReliabilityAndActivity() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      
      {/* Left: System Reliability Chart Simulation Box */}
      <div className="p-5 rounded-2xl bg-[#0B192B]/90 border border-slate-800/80 backdrop-blur-md shadow-xl flex flex-col justify-between">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <LineChart size={18} className="text-[#00D4FF]" />
            <h3 className="text-sm font-extrabold text-white">System Reliability</h3>
          </div>
          <span className="text-[10px] px-2.5 py-1 rounded bg-[#07111F] text-slate-300 border border-slate-700 font-mono">
            Last 24 Hours ▾
          </span>
        </div>

        {/* Mock Chart Graphic Container */}
        <div className="py-6 space-y-2">
          <div className="h-28 flex items-end justify-between gap-1 px-2 border-b border-slate-800/80 pb-2">
            {[95, 92, 96, 94, 98, 93, 97, 95, 99, 94, 96, 98].map((val, idx) => (
              <div key={idx} className="flex-1 bg-gradient-to-t from-[#00D4FF]/20 to-[#00D4FF] rounded-t hover:bg-cyan-300 transition-all" style={{ height: `${val}%` }}></div>
            ))}
          </div>
          <div className="flex justify-between text-[9px] font-mono text-slate-400 px-2">
            <span>00:00</span>
            <span>04:00</span>
            <span>08:00</span>
            <span>12:00</span>
            <span>16:00</span>
            <span>20:00</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-4 text-[10px] text-slate-400 font-mono pt-2 border-t border-slate-800/80">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#00D4FF]"></span> Overall</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-400"></span> Web Services</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> Database</span>
        </div>
      </div>

      {/* Right: Recent Activity Log Feed */}
      <div className="p-5 rounded-2xl bg-[#0B192B]/90 border border-slate-800/80 backdrop-blur-md shadow-xl flex flex-col justify-between">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-[#00D4FF]" />
            <h3 className="text-sm font-extrabold text-white">Recent Activity</h3>
          </div>
          <button className="text-[11px] font-semibold text-[#00D4FF] hover:underline flex items-center gap-0.5">
            View All <ArrowUpRight size={12} />
          </button>
        </div>

        <div className="space-y-3 my-3">
          {activityLogs.map((log, index) => (
            <div key={index} className="flex items-center justify-between text-xs p-2 rounded-lg hover:bg-slate-800/40 transition">
              <div className="flex items-center space-x-2.5 truncate">
                <span className={`w-2 h-2 rounded-full ${log.color} shrink-0`}></span>
                <span className="text-slate-300 truncate">{log.text}</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 shrink-0 ml-2">{log.time}</span>
            </div>
          ))}
        </div>

        <div className="text-[10px] text-slate-400 text-center font-mono pt-2 border-t border-slate-800/80 flex justify-between">
          <span>From Data to Decisions</span>
          <span>From Insights to Resilience</span>
        </div>
      </div>

    </div>
  );
}