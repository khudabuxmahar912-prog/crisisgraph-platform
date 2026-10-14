'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import cytoscape from 'cytoscape';
import { RotateCcw, AlertTriangle, ShieldCheck, Info, ArrowLeft } from 'lucide-react';

interface NodeData {
  id: string;
  label: string;
  type: string;
  status: string;
  load: string;
}

const initialElements = [
  // Nodes
  { data: { id: 'substation1', label: 'Main Substation A', type: 'Power Grid', status: 'Healthy', load: '64%' } },
  { data: { id: 'transformer1', label: 'Step-Down Transformer 01', type: 'Transformer', status: 'Healthy', load: '72%' } },
  { data: { id: 'pump1', label: 'Water Pump Station Alpha', type: 'Water Supply', status: 'Healthy', load: '88%' } },
  { data: { id: 'datacenter1', label: 'Control Center Data Hub', type: 'IT Infrastructure', status: 'Healthy', load: '45%' } },
  { data: { id: 'hospital1', label: 'Regional Medical Center', type: 'Critical Facility', status: 'Healthy', load: '55%' } },

  // Edges (Dependencies)
  { data: { id: 'e1', source: 'substation1', target: 'transformer1', label: 'High Voltage Line' } },
  { data: { id: 'e2', source: 'transformer1', target: 'pump1', label: 'Power Feeder' } },
  { data: { id: 'e3', source: 'substation1', target: 'datacenter1', label: 'Dedicated Line' } },
  { data: { id: 'e4', source: 'pump1', target: 'hospital1', label: 'Water Pipeline' } },
  { data: { id: 'e5', source: 'datacenter1', target: 'pump1', label: 'SCADA Telemetry' } },
];

export default function PublicDemoPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cyRef = useRef<cytoscape.Core | null>(null);
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [failedNodeId, setFailedNodeId] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cy = cytoscape({
      container: containerRef.current,
      elements: initialElements,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#00D4FF',
            'label': 'data(label)',
            'color': '#FFFFFF',
            'font-size': '11px',
            'text-valign': 'bottom',
            'text-margin-y': 6,
            'width': '36px',
            'height': '36px',
            'border-width': '2px',
            'border-color': '#07111F',
          },
        },
        {
          selector: 'node[status = "Failed"]',
          style: {
            'background-color': '#EF4444',
          },
        },
        {
          selector: 'node[status = "At-Risk"]',
          style: {
            'background-color': '#F59E0B',
          },
        },
        {
          selector: 'edge',
          style: {
            'width': 2,
            'line-color': '#334155',
            'target-arrow-color': '#334155',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
          },
        },
        {
          selector: 'edge[status = "Critical"]',
          style: {
            'line-color': '#EF4444',
            'target-arrow-color': '#EF4444',
            'width': 3,
          },
        },
      ],
      layout: {
        name: 'breadthfirst',
        directed: true,
        padding: 40,
      },
    });

    cy.on('tap', 'node', (evt) => {
      const node = evt.target;
      setSelectedNode(node.data() as NodeData);
    });

    cyRef.current = cy;

    return () => {
      cy.destroy();
    };
  }, []);

  const handleRunSimulation = () => {
    if (!cyRef.current || isSimulating) return;

    setIsSimulating(true);
    setFailedNodeId('substation1');

    const cy = cyRef.current;

    const sub = cy.$('#substation1');
    sub.data('status', 'Failed');
    sub.data('load', '0% (OFFLINE)');

    setTimeout(() => {
      cy.$('#e1').data('status', 'Critical');
      const tr = cy.$('#transformer1');
      tr.data('status', 'Failed');
      tr.data('load', '0% (POWER LOSS)');

      setTimeout(() => {
        cy.$('#e2').data('status', 'Critical');
        const pump = cy.$('#pump1');
        pump.data('status', 'At-Risk');
        pump.data('load', 'PRESSURE DROP 32%');

        setIsSimulating(false);
      }, 1200);
    }, 1000);
  };

  const handleReset = () => {
    if (!cyRef.current) return;
    const cy = cyRef.current;

    initialElements.forEach((el) => {
      if (el.data.id) {
        const item = cy.$(`#${el.data.id}`);
        item.data('status', el.data.status);
        item.data('load', el.data.load);
      }
    });

    cy.edges().data('status', 'Normal');
    setFailedNodeId(null);
    setSelectedNode(null);
  };

  return (
    <div className="min-h-screen bg-[#07111F] text-white flex flex-col font-sans">
      
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-[#07111F]/90 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition">
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="text-lg font-extrabold tracking-wide text-white flex items-center gap-2">
              CRISISGRAPH CORE <span className="text-xs px-2 py-0.5 rounded bg-cyan-950 text-[#00D4FF] border border-[#00D4FF]/30 font-mono">PUBLIC DEMO</span>
            </h1>
            <p className="text-xs text-slate-400">Interactive Infrastructure Cascade Failure Sandbox (Read-Only Dataset)</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-3">
          <button
            onClick={handleRunSimulation}
            disabled={isSimulating}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#EF4444] text-white text-xs font-bold hover:bg-red-600 transition shadow-[0_0_15px_rgba(239,68,68,0.4)] disabled:opacity-50"
          >
            <AlertTriangle size={14} /> Inject Substation Fault
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition"
          >
            <RotateCcw size={14} /> Reset Network
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        
        {/* Interactive Graph Canvas */}
        <div className="lg:col-span-8 bg-[#050D18] relative border-r border-slate-800 min-h-[500px]">
          <div ref={containerRef} className="w-full h-full min-h-[600px]" />

          {/* Graph Watermark */}
          <div className="absolute bottom-4 left-4 bg-slate-900/80 border border-slate-800 p-3 rounded-lg text-[11px] text-slate-400 font-mono space-y-1 backdrop-blur-md">
            <p className="text-[#00D4FF] font-semibold">Graph Sandbox Status: Online</p>
            <p>Pan: Click + Drag | Zoom: Scroll Wheel</p>
          </div>
        </div>

        {/* Node Details Panel */}
        <div className="lg:col-span-4 bg-[#0B192B] p-6 space-y-6 overflow-y-auto">
          <div>
            <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <Info size={16} className="text-[#00D4FF]" /> Component Inspector
            </h2>
            <p className="text-xs text-slate-400 mt-1">Select any graph node to inspect live telemetry and dependency status.</p>
          </div>

          {selectedNode ? (
            <div className="rounded-xl bg-[#07111F] border border-slate-800 p-5 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-base text-white">{selectedNode.label}</h3>
                  <p className="text-xs text-slate-400 font-mono">ID: {selectedNode.id}</p>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                  selectedNode.status === 'Failed' ? 'bg-red-950 text-red-400 border border-red-800' :
                  selectedNode.status === 'At-Risk' ? 'bg-amber-950 text-amber-400 border border-amber-800' :
                  'bg-emerald-950 text-emerald-400 border border-emerald-800'
                }`}>
                  {selectedNode.status || 'Healthy'}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Category:</span>
                  <span className="text-slate-200 font-medium">{selectedNode.type}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Load Capacity:</span>
                  <span className="text-[#00D4FF] font-mono font-bold">{selectedNode.load}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-xl bg-[#07111F]/50 border border-slate-800/80 p-8 text-center text-xs text-slate-500 space-y-2">
              <ShieldCheck size={32} className="mx-auto text-slate-600" />
              <p>No node selected.</p>
              <p className="text-[11px] text-slate-600">Click on any network element in the canvas to view detailed metrics.</p>
            </div>
          )}

          {/* Event Log */}
          <div className="rounded-xl bg-[#07111F] border border-slate-800 p-5 space-y-3">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wide">Simulation Event Log</h3>
            <div className="text-xs font-mono space-y-2 text-slate-400">
              {failedNodeId ? (
                <>
                  <p className="text-red-400">🔴 [FAULT INJECTED] Substation 01 offline.</p>
                  <p className="text-amber-400">⚠️ [CASCADE] Step-Down Transformer failed.</p>
                  <p className="text-amber-300">⚠️ [RISK] Pump Station Alpha operating under severe voltage drop.</p>
                </>
              ) : (
                <p className="text-emerald-400">🟢 System nominal. All 5 nodes reporting normal telemetry.</p>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}