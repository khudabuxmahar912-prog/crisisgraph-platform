'use client';

import React from 'react';
import { AlertOctagon, ArrowUpRight } from 'lucide-react';

const alertsData = [
  {
    id: 1,
    title: 'Energy Plant — High Failure Risk',
    details: 'Cascade failure probability: 92%',
    time: 'Detected 14:21',
    confidence: 'Confidence 92%',
    severity: 'CRITICAL',
    badgeClass: 'bg-red-950/80 text-red-400 border-red-800/80',
    iconBg: 'bg-red-900/40 text-red-400 border-red-700/60',
  },
  {
    id: 2,
    title: 'Logistics Hub — Performance Degradation',
    details: 'Shipment delays detected in 3 regions.',
    time: 'Detected 13:56',
    confidence: 'Confidence 78%',
    severity: 'HIGH',
    badgeClass: 'bg-amber-950/80 text-amber-400 border-amber-800/80',
    iconBg: 'bg-amber-900/40 text-amber-400 border-amber-700/60',
  },
  {
    id: 3,
    title: 'Data Center — Anomaly Detected',
    details: 'Unusual traffic pattern and load spike.',
    time: 'Detected 12:43',
    confidence: 'Confidence 61%',
    severity: 'MEDIUM',
    badgeClass: 'bg-yellow-950/80 text-yellow-400 border-yellow-800/80',
    iconBg: 'bg-yellow-900/40 text-yellow-400 border-yellow-700/60',
  },
  {
    id: 4,
    title: 'Water Supply — External Impact',
    details: 'Weather-related risk (heavy rainfall).',
    time: 'Detected 11:18',
    confidence: 'Confidence 48%',
    severity: 'LOW',
    badgeClass: 'bg-blue-950/80 text-blue-400 border-blue-800/80',
    iconBg: 'bg-blue-900/40 text-blue-400 border-blue-700/60',
  },
];

export default function CriticalAlerts() {
  return (
    <div className="p-5 rounded-2xl bg-[#0B192B]/90 border border-slate-800/80 backdrop-blur-md shadow-xl space-y-4 w-full">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <AlertOctagon size={18} className="text-red-400" />
          <h3 className="text-sm font-extrabold text-white">Critical Alerts</h3>
        </div>
        <button className="text-[11px] font-semibold text-[#00D4FF] hover:underline flex items-center gap-0.5">
          View All <ArrowUpRight size={12} />
        </button>
      </div>

      {/* Full Width 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {alertsData.map((alert) => (
          <div 
            key={alert.id}
            className="p-3.5 rounded-xl bg-[#07111F]/80 border border-slate-800/80 hover:border-slate-700 transition flex items-start gap-3"
          >
            <div className={`w-7 h-7 rounded-lg border flex items-center justify-center font-bold text-xs shrink-0 ${alert.iconBg}`}>
              {alert.id}
            </div>

            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-xs font-bold text-white truncate">{alert.title}</h4>
                <span className={`text-[9px] px-2 py-0.5 rounded-md font-mono font-bold border shrink-0 ${alert.badgeClass}`}>
                  {alert.severity}
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-tight truncate">{alert.details}</p>
              <div className="flex items-center gap-3 text-[10px] text-slate-400 pt-0.5">
                <span>{alert.time}</span>
                <span>•</span>
                <span>{alert.confidence}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Tag */}
      <div className="text-[10px] text-slate-400 text-center font-mono pt-2 border-t border-slate-800/80">
        Simulated threat telemetry feed
      </div>

    </div>
  );
}