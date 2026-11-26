import React, { useState } from 'react';
import { Menu, X, FileText, Image, Activity } from 'lucide-react';

export default function Navbar({ onOpenPdf, onOpenPoster, onScrollTo }) {
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
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#030712]/90 backdrop-blur-md border-b border-zinc-800/80 font-sans">
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
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00E5FF]"></span>
            </span>
            <span className="font-serif font-black text-[20px] sm:text-[22px] tracking-tight text-white group-hover:text-[#00E5FF] transition-colors">
              CODE <span className="text-[#00E5FF] glow-electric-blue">BLUE</span>
            </span>
            <span className="hidden sm:inline-block text-[13px] text-zinc-400 pl-3 border-l border-zinc-800 font-normal">
              2026 한양학술타운 LION
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="주요 목차">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleLinkClick(link.target)}
                className="px-3 py-2 text-[15px] min-h-[44px] flex items-center text-zinc-300 hover:text-[#00E5FF] transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}

            <div className="h-4 w-px bg-zinc-800 mx-2"></div>

            {/* Academic Artifact Actions */}
            <button
              onClick={onOpenPdf}
              className="px-3 py-1.5 text-[14px] min-h-[44px] flex items-center gap-1.5 text-zinc-200 hover:text-white transition-colors border border-zinc-700/80 rounded-[2px] bg-zinc-900/60"
            >
              <FileText className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>정책제안서</span>
            </button>
            <button
              onClick={onOpenPoster}
              className="px-3 py-1.5 text-[14px] min-h-[44px] flex items-center gap-1.5 text-zinc-200 hover:text-white transition-colors border border-zinc-700/80 rounded-[2px] bg-zinc-900/60"
            >
              <Image className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>포스터</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-zinc-300 border border-zinc-800 rounded focus:outline-none"
              aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#030712] border-b border-zinc-800 px-4 pt-3 pb-5 space-y-2 text-left">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleLinkClick(link.target)}
              className="w-full text-left px-3 py-3 min-h-[44px] text-[15px] font-medium text-zinc-300 hover:text-[#00E5FF] hover:bg-zinc-900/50 flex items-center border-b border-zinc-900"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 grid grid-cols-2 gap-2">
            <button
              onClick={() => { setIsOpen(false); onOpenPdf(); }}
              className="w-full py-2.5 px-3 min-h-[44px] text-[14px] font-semibold text-white bg-zinc-900 border border-zinc-700 rounded-[2px] flex items-center justify-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-[#00E5FF]" />
              <span>정책제안서</span>
            </button>
            <button
              onClick={() => { setIsOpen(false); onOpenPoster(); }}
              className="w-full py-2.5 px-3 min-h-[44px] text-[14px] font-semibold text-white bg-zinc-900 border border-zinc-700 rounded-[2px] flex items-center justify-center gap-1.5"
            >
              <Image className="w-4 h-4 text-[#00E5FF]" />
              <span>포스터</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
