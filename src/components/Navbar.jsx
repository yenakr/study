import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROJECT_CONFIG } from '../config';

export default function Navbar({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'problem', label: '문제 분석' },
    { id: 'issues', label: '2026 현안' },
    { id: 'research', label: '연구 과정' },
    { id: 'policy', label: '3대 정책' },
    { id: 'er-guide', label: '응급실 가이드' },
    { id: 'survey', label: '시민 의견' },
    { id: 'about', label: '프로젝트 소개' },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xs border-b border-zinc-200 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[56px]">
          
          {/* Logo / Masthead */}
          <button 
            onClick={() => handleTabClick('home')}
            className="flex items-baseline gap-3 text-left focus:outline-none min-h-[44px] py-2"
            aria-label="CODE BLUE 메인으로 이동"
          >
            <span className="font-serif font-black text-[22px] tracking-tight text-zinc-950">
              CODE <span className="text-[#0B3CFF]">BLUE</span>
            </span>
            <span className="hidden sm:inline-block text-[15px] text-zinc-600 font-normal pl-3 border-l border-zinc-300">
              2026 한양학술타운 LION
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="주요 목차">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`px-3 py-2 text-[15px] min-h-[44px] flex items-center transition-colors border-b-2 font-medium ${
                    isActive 
                      ? 'border-[#0B3CFF] text-[#0B3CFF] font-bold' 
                      : 'border-transparent text-zinc-600 hover:text-zinc-950 hover:border-zinc-300'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
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
        <div className="lg:hidden bg-white border-b border-zinc-200 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full text-left px-3 py-3 min-h-[44px] text-[15px] font-medium border-l-2 flex items-center ${
                  isActive 
                    ? 'border-[#0B3CFF] bg-blue-50/40 text-[#0B3CFF] font-bold' 
                    : 'border-transparent text-zinc-600 hover:bg-zinc-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
