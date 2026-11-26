import React from 'react';
import { PROJECT_CONFIG } from '../config';

export default function Footer() {
  return (
    <footer className="bg-[#FAF9F5] text-zinc-600 py-10 border-t border-zinc-200 font-sans text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        
        {/* Mandatory Academic Disclaimer */}
        <div className="p-4 border border-zinc-300 bg-white text-xs text-zinc-700 leading-relaxed space-y-1">
          <span className="font-bold text-zinc-900 block">[학술 프로젝트 면책 공고]</span>
          <p>
            {PROJECT_CONFIG.footerDisclaimer}
          </p>
        </div>

        {/* Footer Meta */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-xs text-zinc-500">
          <div>
            <span className="font-bold text-zinc-800">{PROJECT_CONFIG.teamName}</span>
            <span className="mx-2">|</span>
            <span>{PROJECT_CONFIG.fullAcademicTitle}</span>
            <span className="mx-2">|</span>
            <span>{PROJECT_CONFIG.academicTitle}</span>
          </div>
          <div>
            © 2026 CODE BLUE. Hanyang Academic Town LION.
          </div>
        </div>

      </div>
    </footer>
  );
}
