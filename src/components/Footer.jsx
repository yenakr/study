import React from 'react';
import { PROJECT_CONFIG } from '../config';

export default function Footer() {
  return (
    <footer className="bg-[#FAF9F5] text-zinc-600 py-10 border-t border-zinc-200 font-sans text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 text-[13px] text-zinc-600">
          <div className="break-keep">
            <span className="font-bold text-zinc-950">{PROJECT_CONFIG.teamName}</span>
            <span className="mx-2 text-zinc-400">|</span>
            <span>{PROJECT_CONFIG.fullAcademicTitle}</span>
            <span className="mx-2 text-zinc-400">|</span>
            <span>{PROJECT_CONFIG.academicTitle}</span>
          </div>
          <div className="shrink-0">
            © 2026 CODE BLUE. Hanyang Academic Town LION.
          </div>
        </div>
      </div>
    </footer>
  );
}
