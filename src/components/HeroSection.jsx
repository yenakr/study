import React from 'react';
import { ArrowRight, BookOpen, AlertCircle, Ambulance, Search, Stethoscope, CheckCircle2 } from 'lucide-react';

export default function HeroSection({ setActiveTab }) {
  const flowSteps = [
    { title: "119 현장", desc: "중증도 평가 및 응급처치" },
    { title: "수용 병원 탐색", desc: "병상 확인 및 이송 문의" },
    { title: "전문의·수술 역량 확인", desc: "실제 당직의 및 수술실 가동" },
    { title: "최종 치료", desc: "응급수술 및 중환자 입원" }
  ];

  return (
    <section className="bg-slate-900 text-white pt-24 pb-16 md:pt-32 md:pb-24 border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        
        {/* Top Academic Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950 border border-blue-800 text-blue-300 text-xs font-semibold">
          <span>2026 한양학술타운 LION 프로젝트</span>
          <span className="text-slate-500">•</span>
          <span>간호학과 × 정책학과 융합 연구</span>
        </div>

        {/* Main Headings */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight sm:leading-tight">
            응급환자가 헤매지 않도록,<br className="hidden sm:inline" />
            받을 수 있는 병원에 필요한 전문의가 있어야 합니다.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            CODE BLUE는 중증응급환자 이송 지연을 병상, 인력, 전원체계의 문제로 살펴보고 필수의료 전문인력 확보를 중심으로 개선방안을 제안합니다.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <button
            onClick={() => { setActiveTab('policy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-bold text-sm transition-all shadow-md active:scale-98"
          >
            <span>3대 정책 보기</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
          <button
            onClick={() => { setActiveTab('research'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm transition-all active:scale-98"
          >
            <BookOpen className="w-4 h-4 mr-2 text-brand-lightblue" />
            <span>연구 과정 보기</span>
          </button>
        </div>

        {/* Transport Flow & Core Insight Visualizer */}
        <div className="pt-8 max-w-4xl mx-auto">
          
          {/* Central Critical Insight Banner */}
          <div className="bg-red-950/80 border border-red-800/80 rounded-xl p-4 sm:p-5 mb-8 text-center text-red-200 max-w-2xl mx-auto flex items-center justify-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
            <p className="text-sm sm:text-base font-bold leading-snug">
              “병상이 있어도 필요한 전문의가 없으면 최종 치료가 어렵습니다.”
            </p>
          </div>

          {/* 4-Step Linear Flowchart */}
          <div className="bg-slate-800/60 rounded-2xl p-6 sm:p-8 border border-slate-700/60 text-left">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-5 text-center sm:text-left">
              중증응급환자 이송 및 진료 연계 흐름
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {flowSteps.map((step, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 rounded-xl border text-left transition-all ${
                    idx === 2 
                      ? 'bg-blue-950/90 border-blue-500/80 ring-1 ring-blue-500' 
                      : 'bg-slate-900/80 border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-400">Step 0{idx + 1}</span>
                    {idx === 2 && (
                      <span className="text-[10px] font-bold bg-brand-blue text-white px-2 py-0.5 rounded">
                        핵심 병목
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
