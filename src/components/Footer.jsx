import React from 'react';
import { PROJECT_CONFIG } from '../config';

export default function Footer() {
  return (
    <footer className="bg-[#030712] text-zinc-400 py-10 border-t border-zinc-900 font-sans text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 text-[13px]">
          <div className="break-keep text-zinc-400">
            <strong className="font-bold text-white">{PROJECT_CONFIG.teamName}</strong>
            <span className="mx-2 text-zinc-700">|</span>
            <span>{PROJECT_CONFIG.academicTitle}</span>
            <span className="mx-2 text-zinc-700">|</span>
            <span>한양대학교 정책학과 간호학과 융합 연구</span>
          </div>
          <div className="shrink-0 text-zinc-500 font-mono text-[12px]">
            © 2026 CODE BLUE • 2026 한양학술타운 LION
          </div>
        </div>
      </div>
    </footer>
  );
}
