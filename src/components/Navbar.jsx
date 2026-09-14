import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldAlert, ChevronRight } from 'lucide-react';
import { PROJECT_CONFIG } from '../config';

export default function Navbar({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'CODE BLUE', isLogo: true },
    { id: 'problem', label: '문제 알아보기' },
    { id: 'er-guide', label: '응급실 바로 알기' },
    { id: 'survey', label: '시민 의견' },
    { id: 'policy', label: '정책 제안' },
    { id: 'about', label: '프로젝트 소개' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg border-b border-navy-700/50 text-white py-3.5' : 'bg-navy-900 text-white py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => scrollTo('home')}
            className="flex items-center space-x-3 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-brand-blue flex items-center justify-center text-white shadow-md group-hover:bg-brand-lightblue transition-colors">
              <ShieldAlert className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                {PROJECT_CONFIG.teamName}
                <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded bg-blue-500/20 text-brand-lightblue border border-blue-400/30">
                  LION 2026
                </span>
              </span>
              <span className="text-[11px] text-slate-300 font-medium">
                한양학술타운 응급의료체계 프로젝트
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.filter(item => !item.isLogo).map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-brand-blue text-white shadow-sm font-semibold' 
                      : 'text-slate-200 hover:text-white hover:bg-navy-800'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-navy-800 focus:outline-none"
              aria-label="메뉴 열기"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-navy-900 border-b border-navy-700 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn">
          {navItems.filter(item => !item.isLogo).map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left text-base font-medium transition-colors ${
                  isActive 
                    ? 'bg-brand-blue text-white font-semibold' 
                    : 'text-slate-200 hover:bg-navy-800'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
