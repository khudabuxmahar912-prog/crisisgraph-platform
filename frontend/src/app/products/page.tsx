import React from 'react';
import Link from 'next/link';
import { 
  Network, 
  Cpu, 
  FlaskConical, 
  Radio, 
  Droplets, 
  ShieldAlert, 
  HelpCircle, 
  ArrowRight,
  ArrowLeft 
} from 'lucide-react';

export const metadata = {
  title: 'Research Products | CRISISGRAPH TECHNOLOGY',
  description: 'Explore the 7 core research modules for infrastructure intelligence, predictive maintenance, and risk simulation.',
};

export const productsData = [
  {
    id: 'core',
    name: 'CRISISGRAPH CORE',
    tagline: 'Infrastructure Dependency & Cascade Failure Engine',
    icon: Network,
    status: 'Active Prototype',
    badgeColor: 'bg-[#00D4FF]/10 text-[#00D4FF] border-[#00D4FF]/30',
    description: 'Models complex physical and digital interdependencies across power grids, SCADA networks, and urban systems to simulate failure propagation.',
  },
  {
    id: 'predict',
    name: 'CRISISGRAPH PREDICT',
    tagline: 'AI-Based Equipment Fault Prediction',
    icon: Cpu,
    status: 'Experimental ML',
    badgeColor: 'bg-emerald-950 text-emerald-400 border-emerald-800',
    description: 'Processes baseline telemetry datasets using anomaly detection to forecast equipment breakdown risks prior to catastrophic physical collapse.',
  },
  {
    id: 'scenario-lab',
    name: 'CRISISGRAPH SCENARIO LAB',
    tagline: 'What-If Simulation & Decision Support',
    icon: FlaskConical,
    status: 'Active Prototype',
    badgeColor: 'bg-[#00D4FF]/10 text-[#00D4FF] border-[#00D4FF]/30',
    description: 'Enables engineers and risk analysts to configure hypothesis scenarios, compare mitigation policies, and generate reproducible simulation reports.',
  },
  {
    id: 'sensor-bridge',
    name: 'CRISISGRAPH SENSOR BRIDGE',
    tagline: 'IoT & Telemetry Integration',
    icon: Radio,
    status: 'Simulated Ingestion',
    badgeColor: 'bg-amber-950 text-amber-400 border-amber-800',
    description: 'Provides simulated MQTT telemetry ingestion to model real-time physical sensor updates across edge infrastructure nodes.',
  },
  {
    id: 'water',
    name: 'CRISISGRAPH WATER',
    tagline: 'Water Infrastructure Intelligence',
    icon: Droplets,
    status: 'Research Modeling',
    badgeColor: 'bg-blue-950 text-blue-400 border-blue-800',
    description: 'Specialized hydraulic network dependencies, pump-station failures, and water supply interruption risk analysis.',
  },
  {
    id: 'cyber-physical',
    name: 'CRISISGRAPH CYBER-PHYSICAL',
    tagline: 'Industrial Control System Risk Analysis',
    icon: ShieldAlert,
    status: 'Isolated Research',
    badgeColor: 'bg-red-950 text-red-400 border-red-800',
    description: 'Simulates cyber attack vectors on physical control systems in isolated test environments without touching live operational technology.',
  },
  {
    id: 'explain',
    name: 'CRISISGRAPH EXPLAIN',
    tagline: 'Explainable AI & Uncertainty Reporting',
    icon: HelpCircle,
    status: 'Active Framework',
    badgeColor: 'bg-purple-950 text-purple-400 border-purple-800',
    description: 'Translates graph neural network outputs into human-understandable evidence logs with explicit confidence and uncertainty indicators.',
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#07111F] text-white bg-graph-mesh">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#07111F]/90 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition">
              <ArrowLeft size={18} />
            </Link>
            <div>
              <h1 className="font-extrabold text-lg tracking-wider text-white">CRISISGRAPH PRODUCTS</h1>
              <p className="text-xs text-[#00D4FF]">Seven Deep-Tech Research Engines</p>
            </div>
          </div>
          <Link href="/demo" className="px-4 py-2 rounded-lg bg-[#00D4FF] text-slate-950 text-xs font-bold hover:bg-cyan-300 transition">
            Launch Sandbox Demo
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3 py-1 rounded-full bg-cyan-950 border border-[#00D4FF]/30 text-[#00D4FF] text-xs font-semibold uppercase tracking-wider">
            Research & Product Dossier
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white">
            Integrated Modular Infrastructure Intelligence
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            All seven products operate on a unified graph schema, allowing seamless correlation between IoT sensors, AI prediction models, and cascade failure simulations.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((product) => {
            const IconComponent = product.icon;
            return (
              <div 
                key={product.id}
                className="rounded-2xl bg-[#0B192B] border border-slate-800 p-6 flex flex-col justify-between hover:border-[#00D4FF]/50 transition-all group relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl bg-[#07111F] border border-slate-700 flex items-center justify-center text-[#00D4FF] group-hover:scale-110 transition-transform">
                      <IconComponent size={24} />
                    </div>
                    <span className={`text-[10px] px-2.5 py-1 rounded-full border font-mono font-semibold ${product.badgeColor}`}>
                      {product.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-lg text-white group-hover:text-[#00D4FF] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-400 mt-0.5">{product.tagline}</p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono">Module #{product.id.toUpperCase()}</span>
                  <Link 
                    href={`/products/${product.id}`}
                    className="flex items-center gap-1 text-[#00D4FF] font-semibold hover:underline"
                  >
                    View Specs <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-16 py-8 text-center text-xs text-slate-500 space-y-1">
        <p>© CRISISGRAPH TECHNOLOGY. All Rights Reserved.</p>
        <p>Founded by Khuda Bux Mahar.</p>
      </footer>
    </div>
  );
}