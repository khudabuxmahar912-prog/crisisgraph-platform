'use client';

import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import TopBar from '@/components/dashboard/Topbar';
import HeroSection from '@/components/dashboard/HeroSection';
import KpiCards from '@/components/dashboard/KpiCards';
import CriticalAlerts from '@/components/dashboard/CriticalAlerts';
import CascadeSimulationPanel from '@/components/dashboard/CascadeSimulationPanel';
import ReliabilityAndActivity from '@/components/dashboard/ReliabilityAndActivity';

export default function CEOCommandCenter() {
  return (
    <div className="h-screen w-screen bg-[#07111F] text-white flex overflow-hidden font-sans relative">
      
      {/* 1. Stationary Left Sidebar */}
      <Sidebar />

      {/* 2. Main Right Workspace Area */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto relative">
        
        {/* FIXED IMAGE WATERMARK: Sidebar ke right side poore canvas ke peeche centered fix rahega */}
        <div className="fixed inset-0 left-72 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
          <img 
            src="/images/my-watermark.png" 
            alt="CrisisGraph Watermark"
            className="w-[850px] max-w-none h-auto opacity-[0.12] object-contain select-none"
          />
        </div>

        {/* Stationary Top Navigation Bar */}
        <TopBar />

        {/* Dynamic Content Stream Layer */}
        <main className="p-6 md:p-8 space-y-6 flex-1 w-full max-w-7xl mx-auto relative z-10">
          <HeroSection />
          <KpiCards />
          
          {/* Full Width Cascade Simulation */}
          <CascadeSimulationPanel />

          {/* Full Width Critical Alerts */}
          <CriticalAlerts />

          {/* System Reliability Chart & Recent Activity Log */}
          <ReliabilityAndActivity />
        </main>

      </div>

    </div>
  );
}