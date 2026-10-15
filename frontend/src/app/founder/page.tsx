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
    <div className="h-screen w-screen bg-[#07111F] text-white flex overflow-hidden font-sans">
      
      {/* 1. Stationary Left Sidebar */}
      <Sidebar />

      {/* 2. Scrollable Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        
        {/* Stationary Top Bar */}
        <TopBar />

        {/* Dynamic Content Stream */}
        <main className="p-6 md:p-8 space-y-6 flex-1 w-full max-w-7xl mx-auto">
          <HeroSection />
          <KpiCards />
          
          {/* Full Width Cascade Simulation */}
          <CascadeSimulationPanel />

          {/* Full Width Critical Alerts Directly Below Simulation */}
          <CriticalAlerts />

          {/* System Reliability Chart & Recent Activity Log */}
          <ReliabilityAndActivity />
        </main>

      </div>

    </div>
  );
}