import React from 'react';
import { ArrowRight, MessageSquareText, FileText, Clock, Radio, MapPin } from 'lucide-react';

export default function HeroSection({ setActiveTab }) {
  const problemCards = [
    {
      tabId: 'problem',
      icon: Clock,
      title: "치료 가능 병원 탐색 시간",
      description: "필요한 치료가 가능한 병원을 찾는 데 걸리는 시간이 이송 지연의 주요 원인입니다."
    },
    {
      tabId: 'problem',
      icon: Radio,
      title: "구급대와 병원 간 정보 전달 한계",
      description: "병원과 구급대 사이의 실시간 현장 정보 및 병상 수용 가능 여부 공유에 한계가 존재합니다."
    },
    {
      tabId: 'problem',
      icon: MapPin,
      title: "지역별 응급의료자원의 차이",
      description: "지역마다 중증응급환자를 최종 치료할 수 있는 전문의 및 응급 의료 자원 인프라의 편차가 큽니다."
    }
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-navy-900 via-navy-800 to-slate-900 text-white overflow-hidden min-h-[calc(100vh-80px)] flex flex-col justify-between">
      
      {/* Abstract Background Graphic */}
      <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 150H1200M0 300H1200M0 450H1200" stroke="#3B82F6" strokeWidth="1" strokeDasharray="6 6" />
          <path d="M100 450 C 300 150, 500 500, 800 200 C 950 50, 1100 300, 1150 250" stroke="#60A5FA" strokeWidth="3" fill="none" />
          <path d="M100 450 C 300 150, 500 500, 800 200" stroke="#EF4444" strokeWidth="2" strokeDasharray="8 8" fill="none" />
          
          <circle cx="100" cy="450" r="8" fill="#3B82F6" />
          <circle cx="420" cy="360" r="7" fill="#60A5FA" />
          <circle cx="800" cy="200" r="10" fill="#EF4444" />
          <circle cx="1150" cy="250" r="8" fill="#3B82F6" />
          
          <text x="100" y="485" fill="#94A3B8" fontSize="13" textAnchor="middle">119 현장</text>
          <text x="420" y="395" fill="#94A3B8" fontSize="13" textAnchor="middle">1차 의료기관</text>
          <text x="800" y="235" fill="#F87171" fontSize="13" textAnchor="middle" fontWeight="600">권역응급센터 지연</text>
          <text x="1150" y="285" fill="#94A3B8" fontSize="13" textAnchor="middle">최종 치료 병원</text>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto text-center">
        
        <p className="text-sm font-semibold text-brand-lightblue tracking-wide uppercase mb-4">
          2026 한양학술타운 LION 프로젝트
        </p>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight sm:leading-tight mb-6">
          응급환자가 헤매지 않도록,<br className="hidden sm:block" />
          우리가 바꿔야 할 것은 무엇일까요?
        </h1>

        {/* Sub Title */}
        <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal mb-10 max-w-2xl mx-auto">
          중증응급환자 이송 지연 문제를 시민과 함께 살펴보고 개선 방향을 제안합니다.
        </p>

        {/* CTAs -> Tab Switch */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-16">
          <button
            onClick={() => setActiveTab('problem')}
            className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-bold text-base transition-all shadow-lg hover:shadow-blue-500/20 active:scale-98"
          >
            <span>1분 만에 알아보기</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>

          <button
            onClick={() => setActiveTab('survey')}
            className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-navy-800 hover:bg-navy-700 border border-slate-700 text-white font-bold text-base transition-all active:scale-98"
          >
            <MessageSquareText className="w-4 h-4 mr-2 text-brand-lightblue" />
            <span>내 의견 남기기</span>
          </button>

          <button
            onClick={() => setActiveTab('policy')}
            className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-base transition-all backdrop-blur-sm active:scale-98"
          >
            <FileText className="w-4 h-4 mr-2 text-slate-300" />
            <span>정책제안서 보기</span>
          </button>
        </div>

        {/* Bottom 3 Core Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          {problemCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab('problem')}
                className="bg-navy-800/90 hover:bg-navy-800 rounded-xl p-6 border border-slate-700/80 shadow-md text-left transition-all hover:border-brand-blue/50 group focus:outline-none"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-blue/20 flex items-center justify-center mb-4 text-brand-lightblue group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-brand-lightblue transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {card.description}
                </p>
              </button>
            );
          })}
        </div>

      </div>

    </section>
  );
}
