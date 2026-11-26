import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROJECT_CONFIG } from '../config';

export default function Navbar({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'problem', label: '1. 문제 분석' },
    { id: 'issues', label: '2. 2026 주요 이슈' },
    { id: 'research', label: '3. 연구 과정' },
    { id: 'policy', label: '4. 정책 제안' },
    { id: 'er-guide', label: '5. 응급실 바로 알기' },
    { id: 'survey', label: '6. 시민 의견' },
    { id: 'about', label: '7. 프로젝트 소개' },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-xs border-b border-zinc-200 py-3 font-sans transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Editorial Masthead */}
          <button 
            onClick={() => handleTabClick('home')}
            className="flex items-baseline gap-3 text-left focus:outline-none focus:ring-1 focus:ring-zinc-900 group"
            aria-label="CODE BLUE 메인으로 이동"
          >
            <span className="font-serif font-black text-xl tracking-tight text-zinc-900 group-hover:text-accent transition-colors">
              {PROJECT_CONFIG.teamName}
            </span>
            <span className="hidden sm:inline-block text-xs text-zinc-500 font-normal pl-3 border-l border-zinc-300">
              2026 한양학술타운 LION 정책 브리프
            </span>
          </button>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="주요 목차">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`px-2.5 py-1 text-xs md:text-sm font-medium transition-colors border-b-2 ${
                    isActive 
                      ? 'border-zinc-900 text-zinc-950 font-bold' 
                      : 'border-transparent text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
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
              className="p-1.5 text-zinc-700 hover:text-zinc-950 border border-zinc-300 rounded focus:outline-none"
              aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#FAF9F5] border-b border-zinc-200 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full text-left px-3 py-2 text-sm font-medium border-l-2 ${
                  isActive 
                    ? 'border-zinc-900 bg-zinc-100 text-zinc-950 font-bold' 
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
