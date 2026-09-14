import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { PROJECT_CONFIG } from '../config';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-400 py-10 border-t border-navy-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <span className="font-extrabold text-white text-base">
                {PROJECT_CONFIG.teamName}
              </span>
              <span className="mx-2 text-slate-600">|</span>
              <span className="text-sm font-medium text-slate-300">
                {PROJECT_CONFIG.academicTitle}
              </span>
            </div>
          </div>

          <div className="text-slate-500 text-xs font-medium">
            © 2026 CODE BLUE. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
