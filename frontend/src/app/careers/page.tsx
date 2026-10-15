'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, GraduationCap, CheckCircle2, Briefcase, FileCode, Building2, Calendar } from 'lucide-react';

const internshipDomains = [
  'Fundamentals of Generative AI',
  'Web Development',
  'Full Stack Development',
  'Frontend Development',
  'Backend Development',
  'AI Security',
  'AI Automation',
  'Python Development',
  'C++ Development',
];

export default function CareersPage() {
  const [selectedDomain, setSelectedDomain] = useState('Fundamentals of Generative AI');
  const [applicantName, setApplicantName] = useState('');
  const [email, setEmail] = useState('');
  const [university, setUniversity] = useState('');
  const [currentYear, setCurrentYear] = useState('1st Year');
  const [currentSemester, setCurrentSemester] = useState('1st Semester');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [coverNote, setCoverNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#07111F] text-white bg-graph-mesh font-sans">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#07111F]/90 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xs text-slate-300 hover:text-[#00D4FF] transition">
            <ArrowLeft size={16} /> Back to Homepage
          </Link>
          <span className="text-xs font-mono text-[#00D4FF] bg-cyan-950 px-3 py-1 rounded-full border border-[#00D4FF]/30">
            CAREERS & INTERNSHIPS
          </span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        
        {/* Banner */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <GraduationCap size={40} className="text-[#00D4FF] mx-auto" />
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white">Research & Engineering Internships</h1>
          <p className="text-slate-400 text-sm">
            Join CRISISGRAPH TECHNOLOGY. Learn deep-tech software architecture, graph engines, and AI security directly under research mentorship.
          </p>
        </div>

        {/* 9 Internship Track Cards */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Briefcase size={18} className="text-[#00D4FF]" /> Available Internship Tracks (9 Domains)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {internshipDomains.map((domain, i) => (
              <div 
                key={i}
                onClick={() => setSelectedDomain(domain)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedDomain === domain
                    ? 'bg-cyan-950/60 border-[#00D4FF] shadow-[0_0_15px_rgba(0,212,255,0.2)]'
                    : 'bg-[#0B192B] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#00D4FF]">Track #0{i + 1}</span>
                  {selectedDomain === domain && <CheckCircle2 size={16} className="text-[#00D4FF]" />}
                </div>
                <h3 className="font-bold text-sm text-white mt-2">{domain}</h3>
                <p className="text-[11px] text-slate-400 mt-1">Remote / Research Mentorship</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="rounded-2xl bg-[#0B192B] border border-slate-800 p-8 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <FileCode size={18} className="text-[#00D4FF]" /> Submit Application for: <span className="text-[#00D4FF]">{selectedDomain}</span>
            </h2>
          </div>

          {submitted ? (
            <div className="p-8 text-center space-y-4">
              <CheckCircle2 size={48} className="text-[#00D4FF] mx-auto" />
              <h3 className="text-xl font-bold text-white">Application Successfully Submitted!</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Thank you <span className="text-[#00D4FF] font-semibold">{applicantName}</span> ({university}). Your application for <span className="text-[#00D4FF]">{selectedDomain}</span> ({currentYear}, {currentSemester}) has been logged in the CEO Command Center for review.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-slate-800 text-xs text-slate-200 font-semibold hover:bg-slate-700 transition"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleApply} className="space-y-4 text-xs">
              
              {/* Full Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Khuda Bux Mahar"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-slate-700 text-white focus:outline-none focus:border-[#00D4FF]"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1.5">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="applicant@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-slate-700 text-white focus:outline-none focus:border-[#00D4FF]"
                  />
                </div>
              </div>

              {/* University Name */}
              <div>
                <label className="block text-slate-300 font-semibold mb-1.5">University / Institute Name</label>
                <div className="relative">
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Quaid-e-Awam University (QUEST) Nawabshah"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-slate-700 text-white focus:outline-none focus:border-[#00D4FF]"
                  />
                </div>
              </div>

              {/* Current Year & Current Semester Dropdowns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1.5">Current Academic Year</label>
                  <select 
                    value={currentYear}
                    onChange={(e) => setCurrentYear(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-slate-700 text-white focus:outline-none focus:border-[#00D4FF]"
                  >
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year / Final Year">4th Year / Final Year</option>
                    <option value="Graduated / Alumni">Graduated / Alumni</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1.5">Current Semester</label>
                  <select 
                    value={currentSemester}
                    onChange={(e) => setCurrentSemester(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-slate-700 text-white focus:outline-none focus:border-[#00D4FF]"
                  >
                    <option value="1st Semester">1st Semester</option>
                    <option value="2nd Semester">2nd Semester</option>
                    <option value="3rd Semester">3rd Semester</option>
                    <option value="4th Semester">4th Semester</option>
                    <option value="5th Semester">5th Semester</option>
                    <option value="6th Semester">6th Semester</option>
                    <option value="7th Semester">7th Semester</option>
                    <option value="8th Semester">8th Semester</option>
                  </select>
                </div>
              </div>

              {/* GitHub / LinkedIn Link (Optional) */}
              <div>
                <label className="block text-slate-300 font-semibold mb-1.5">
                  GitHub / LinkedIn / Portfolio Profile Link <span className="text-slate-500 font-normal">(Optional)</span>
                </label>
                <input 
                  type="url" 
                  placeholder="https://github.com/your-username (Optional)"
                  value={portfolioUrl}
                  onChange={(e) => setPortfolioUrl(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-slate-700 text-white focus:outline-none focus:border-[#00D4FF]"
                />
              </div>

              {/* Interest / Cover Note */}
              <div>
                <label className="block text-slate-300 font-semibold mb-1.5">Why are you interested in this track?</label>
                <textarea 
                  rows={3}
                  required
                  placeholder="Share your technical background, current skills, and goals for this internship..."
                  value={coverNote}
                  onChange={(e) => setCoverNote(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-slate-700 text-white focus:outline-none focus:border-[#00D4FF]"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button 
                type="submit" 
                className="w-full py-3.5 rounded-xl bg-[#00D4FF] text-slate-950 font-bold hover:bg-cyan-300 transition shadow-[0_0_20px_rgba(0,212,255,0.3)]"
              >
                Submit Internship Application
              </button>
            </form>
          )}
        </div>

      </main>
    </div>
  );
}