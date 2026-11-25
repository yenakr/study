import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { PROJECT_CONFIG } from '../config';

export default function Navbar({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'problem', label: '문제 알아보기' },
    { id: 'issues', label: '2026 주요 이슈' },
    { id: 'research', label: '연구 과정' },
    { id: 'policy', label: '정책 제안' },
    { id: 'er-guide', label: '응급실 바로 알기' },
    { id: 'survey', label: '시민 의견' },
    { id: 'about', label: '프로젝트 소개' },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-navy-900 text-white shadow-md border-b border-navy-800 py-3 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Home Navigation */}
          <button 
            onClick={() => handleTabClick('home')}
            className="flex items-center gap-2.5 text-left focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-md px-1 group"
            aria-label="CODE BLUE 메인으로 이동"
          >
            <span className="font-black text-xl tracking-tight text-white group-hover:text-brand-lightblue transition-colors">
              {PROJECT_CONFIG.teamName}
            </span>
            <span className="hidden sm:inline-block text-xs text-slate-400 font-medium pl-2.5 border-l border-slate-700">
              2026 한양학술타운 LION
            </span>
          </button>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="주요 메뉴">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                    isActive 
                      ? 'bg-brand-blue text-white shadow-sm' 
                      : 'text-slate-300 hover:text-white hover:bg-navy-800'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-navy-900 border-b border-navy-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-left text-sm font-bold transition-colors ${
                    isActive 
                      ? 'bg-brand-blue text-white' 
                      : 'text-slate-300 hover:bg-navy-800'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
