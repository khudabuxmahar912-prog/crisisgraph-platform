import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, AlertOctagon, Terminal, ShieldCheck } from 'lucide-react';

interface ProductDetail {
  title: string;
  subtitle: string;
  problem: string;
  approach: string;
  capabilities: string[];
  intendedUsers: string[];
  techStack: string[];
  status: string;
  limitations: string;
}

const detailsMap: Record<string, ProductDetail> = {
  core: {
    title: 'CRISISGRAPH CORE',
    subtitle: 'Infrastructure Dependency & Failure Simulation Engine',
    problem: 'Critical infrastructures (power grids, water supply, telecommunications) are interconnected. A localized fault in a transformer can trigger cascading blackout waves across multiple downstream systems without prior warning.',
    approach: 'Constructs directed dependency graph models using NetworkX and Cytoscape algorithms to execute manual failure injection and map cascading impact vectors.',
    capabilities: [
      'Interactive node & dependency graph modeling',
      'Manual fault injection & propagation tracing',
      'Affected component bottleneck identification',
      'Real-time risk scoring across physical nodes',
    ],
    intendedUsers: ['Infrastructure Reliability Engineers', 'Urban Planners', 'Defense Analysts'],
    techStack: ['Python', 'NetworkX', 'Next.js', 'Cytoscape.js', 'FastAPI'],
    status: 'Active Six-Month Prototype Phase',
    limitations: 'Calculations run on deterministic simulated topology graphs rather than real-time hardware telemetry feeds.',
  },
  predict: {
    title: 'CRISISGRAPH PREDICT',
    subtitle: 'AI-Based Equipment Failure Prediction',
    problem: 'Industrial equipment experiences subtle mechanical degradation before physical failure, leading to unplanned operational downtime.',
    approach: 'Applies baseline machine learning algorithms (scikit-learn anomaly detection) to vibration, thermal, and electrical telemetry datasets.',
    capabilities: [
      'Time-series sensor telemetry processing',
      'Baseline failure threshold probability scoring',
      'Anomaly detection experiments',
      'Model prediction confidence reports',
    ],
    intendedUsers: ['Maintenance Operations Leads', 'Industrial IoT Managers'],
    techStack: ['Python', 'scikit-learn', 'pandas', 'NumPy', 'FastAPI'],
    status: 'Experimental ML Sandbox',
    limitations: 'Experimental models require baseline training datasets and do not guarantee zero false positives in uncalibrated physical environments.',
  },
  'scenario-lab': {
    title: 'CRISISGRAPH SCENARIO LAB',
    subtitle: 'What-If Simulation and Decision Support',
    problem: 'Policy makers lack sandboxed environments to test "what-if" disaster responses without risking physical infrastructure disruption.',
    approach: 'Provides scenario management controls to execute parallel hypothesis tests and evaluate mitigation strategies side-by-side.',
    capabilities: [
      'Multi-scenario comparison sandbox',
      'Hypothesis failure injection parameters',
      'Mitigation strategy efficacy scoring',
      'Exportable simulation reports',
    ],
    intendedUsers: ['Emergency Response Teams', 'Risk & Continuity Officers'],
    techStack: ['Next.js', 'TypeScript', 'FastAPI', 'SQLite'],
    status: 'Active Prototype',
    limitations: 'Scenarios rely on configured parameters and do not account for unmodeled atmospheric anomalies.',
  },
  'sensor-bridge': {
    title: 'CRISISGRAPH SENSOR BRIDGE',
    subtitle: 'IoT and Telemetry Integration',
    problem: 'Integrating raw edge IoT sensor streams directly into high-level graph engines without validation causes system overhead.',
    approach: 'Simulates telemetry data ingestion layers that translate edge sensor data into graph node status updates.',
    capabilities: [
      'Simulated sensor telemetry stream ingestion',
      'Node state synchronization',
      'Threshold breach event firing',
      'Edge status monitoring dashboard',
    ],
    intendedUsers: ['IoT Systems Engineers', 'SCADA Integrators'],
    techStack: ['Python', 'MQTT (Simulated)', 'FastAPI', 'Pydantic'],
    status: 'Simulated Ingestion Module',
    limitations: 'Utilizes generated mock telemetry streams prior to authorized physical edge gateway deployments.',
  },
  water: {
    title: 'CRISISGRAPH WATER',
    subtitle: 'Water Infrastructure Intelligence',
    problem: 'Water networks depend heavily on power grids for pumps and tanks; power losses quickly collapse pressure levels across urban zones.',
    approach: 'Models hydraulic pump, tank, and pressure node dependencies in relation to parent electric grid nodes.',
    capabilities: [
      'Water-network topological graph rendering',
      'Pump station dependency mapping',
      'Pressure loss propagation analysis',
      'Supply outage risk forecasting',
    ],
    intendedUsers: ['Municipal Water Authorities', 'Environmental Engineers'],
    techStack: ['Python', 'NetworkX', 'Cytoscape.js', 'Next.js'],
    status: 'Research Modeling',
    limitations: 'Simplifies fluid dynamics calculations to focus strictly on topological graph dependencies.',
  },
  'cyber-physical': {
    title: 'CRISISGRAPH CYBER-PHYSICAL',
    subtitle: 'Cyber-Physical Risk Analysis',
    problem: 'Cyber vulnerabilities in industrial control systems (ICS) can cause physical structural damage to critical hardware.',
    approach: 'Simulates hypothetical cyber incident vectors against isolated OT graph nodes to assess physical disruption footprints.',
    capabilities: [
      'ICS controller dependency modeling',
      'Hypothetical cyber breach impact tracing',
      'Defensive resilience assessment',
      'Isolated vulnerability reporting',
    ],
    intendedUsers: ['Cybersecurity Researchers', 'OT Defense Teams'],
    techStack: ['Python', 'FastAPI', 'Next.js', 'Tailwind CSS'],
    status: 'Isolated Research Sandbox',
    limitations: 'Restricted strictly to authorized, isolated test environments. Never connected to real industrial control hardware.',
  },
  explain: {
    title: 'CRISISGRAPH EXPLAIN',
    subtitle: 'Explainable AI and Risk Interpretation',
    problem: 'Black-box AI prediction models fail to provide actionable reasoning during critical infrastructure emergencies.',
    approach: 'Extracts node feature importance and graph dependency paths to present clear, evidence-based simulation explanations.',
    capabilities: [
      'Explainable cascade simulation logs',
      'Assumption and constraint tracking',
      'Uncertainty and confidence indicators',
      'Evidence-based decision audits',
    ],
    intendedUsers: ['Executive Leadership', 'Regulatory Auditors', 'AI Researchers'],
    techStack: ['Python', 'FastAPI', 'Next.js', 'TypeScript'],
    status: 'Active Framework',
    limitations: 'Explanations reflect configured graph logic and model weights; human review remains required for final operational decisions.',
  },
};

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = detailsMap[resolvedParams.id];

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#07111F] text-white bg-graph-mesh">
      
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#07111F]/90 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/products" className="flex items-center gap-2 text-xs text-slate-300 hover:text-[#00D4FF] transition">
            <ArrowLeft size={16} /> Back to Products Catalog
          </Link>
          <span className="text-xs font-mono text-[#00D4FF] bg-cyan-950 px-3 py-1 rounded-full border border-[#00D4FF]/30">
            {product.status}
          </span>
        </div>
      </header>

      {/* Product Specification Detail */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        
        {/* Title Header */}
        <div className="space-y-3 border-b border-slate-800 pb-8">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white">{product.title}</h1>
          <p className="text-lg text-[#00D4FF] font-medium">{product.subtitle}</p>
        </div>

        {/* Problem & Approach Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-[#0B192B] border border-slate-800 p-6 space-y-3">
            <h2 className="text-sm font-bold text-red-400 uppercase tracking-wide flex items-center gap-2">
              <AlertOctagon size={18} /> Investigated Problem
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">{product.problem}</p>
          </div>

          <div className="rounded-2xl bg-[#0B192B] border border-slate-800 p-6 space-y-3">
            <h2 className="text-sm font-bold text-[#00D4FF] uppercase tracking-wide flex items-center gap-2">
              <Terminal size={18} /> Proposed Technical Approach
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">{product.approach}</p>
          </div>
        </div>

        {/* Capabilities & Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          <div className="md:col-span-7 rounded-2xl bg-[#0B192B] border border-slate-800 p-6 space-y-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#00D4FF]" /> Core Capabilities
            </h2>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {product.capabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#00D4FF] mt-0.5">▪</span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5 rounded-2xl bg-[#0B192B] border border-slate-800 p-6 space-y-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wide">Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {product.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-[#07111F] border border-slate-700 text-xs text-slate-200 font-mono">
                  {tech}
                </span>
              ))}
            </div>

            <h2 className="text-sm font-bold text-white uppercase tracking-wide pt-2">Intended Users</h2>
            <ul className="space-y-1 text-xs text-slate-400">
              {product.intendedUsers.map((user, i) => (
                <li key={i}>• {user}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Limitations & Verification Notice */}
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 space-y-2 backdrop-blur-md">
          <h2 className="text-xs font-bold text-amber-400 uppercase tracking-wide flex items-center gap-2">
            <ShieldCheck size={16} /> Known Research Limitations
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">{product.limitations}</p>
        </div>

        {/* Action Link */}
        <div className="pt-4 flex justify-between items-center">
          <Link 
            href="/demo" 
            className="px-6 py-3 rounded-xl bg-[#00D4FF] text-slate-950 font-bold hover:bg-cyan-300 transition"
          >
            Test in Public Demo Sandbox
          </Link>
          <Link 
            href="/services" 
            className="text-xs text-slate-400 hover:text-[#00D4FF] transition"
          >
            Request Custom Development for this Module ➔
          </Link>
        </div>

      </main>

    </div>
  );
}