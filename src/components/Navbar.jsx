import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';

export default function Navbar({ onOpenPdf }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { target: 'part1', label: '1부. 현상' },
    { target: 'part2', label: '2부. 구조' },
    { target: 'part3', label: '3부. 대안' },
    { target: 'part4', label: '4부. 행동' },
    { target: 'survey', label: '시민 의견' },
  ];

  const handleLinkClick = (targetId) => {
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[58px]">
          
          {/* Logo / Emergency Masthead */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 text-left focus:outline-none min-h-[44px] py-2 group"
            aria-label="CODE BLUE 상단으로 이동"
          >
            {/* Pulsing Emergency Beacon */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0052FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0052FF]"></span>
            </span>
            <span className="font-serif font-black text-[20px] sm:text-[22px] tracking-tight text-zinc-950">
              CODE <span className="text-[#0052FF]">BLUE</span>
            </span>
            <span className="hidden sm:inline-block text-[13px] text-zinc-500 pl-3 border-l border-zinc-300 font-normal">
              2026 한양학술타운 LION
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="주요 목차">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleLinkClick(link.target)}
                className="px-3 py-2 text-[15px] min-h-[44px] flex items-center text-zinc-600 hover:text-zinc-950 transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}

            <div className="h-4 w-px bg-zinc-200 mx-2"></div>

            {/* Academic Policy Proposal Action */}
            <button
              onClick={onOpenPdf}
              className="px-3.5 py-1.5 text-[14px] min-h-[44px] flex items-center gap-1.5 text-zinc-800 hover:text-zinc-950 transition-colors border border-zinc-300 rounded-[2px] bg-white hover:bg-zinc-50 font-medium"
            >
              <FileText className="w-3.5 h-3.5 text-[#0052FF]" />
              <span>정책제안서</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-zinc-800 border border-zinc-300 rounded focus:outline-none"
              aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-4 pt-3 pb-5 space-y-2 text-left">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleLinkClick(link.target)}
              className="w-full text-left px-3 py-3 min-h-[44px] text-[15px] font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 flex items-center border-b border-zinc-100"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => { setIsOpen(false); onOpenPdf(); }}
              className="w-full py-2.5 px-3 min-h-[44px] text-[14px] font-semibold text-zinc-900 bg-white border border-zinc-300 rounded-[2px] flex items-center justify-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-[#0052FF]" />
              <span>정책제안서</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
