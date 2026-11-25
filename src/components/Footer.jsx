import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { PROJECT_CONFIG } from '../config';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-400 py-12 border-t border-navy-800 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Mandatory Academic Disclaimer Banner */}
        <div className="bg-navy-800/80 rounded-xl p-5 border border-navy-700/60 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-9 h-9 rounded-lg bg-brand-blue/20 text-brand-lightblue flex items-center justify-center shrink-0">
            <ShieldAlert className="w-5 h-5 text-brand-lightblue" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-300 block">학술 프로젝트 면책 조항 (Disclaimer)</span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {PROJECT_CONFIG.footerDisclaimer}
            </p>
          </div>
        </div>

        {/* Footer Bottom Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-navy-800/60 text-xs">
          <div className="flex flex-wrap items-center gap-2 text-slate-400">
            <span className="font-extrabold text-white text-sm">
              {PROJECT_CONFIG.teamName}
            </span>
            <span>|</span>
            <span className="text-slate-300">
              {PROJECT_CONFIG.fullAcademicTitle}
            </span>
            <span>|</span>
            <span className="text-slate-400">
              {PROJECT_CONFIG.academicTitle}
            </span>
          </div>

          <div className="text-slate-500 font-medium">
            © 2026 CODE BLUE (한양학술타운 LION). All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
