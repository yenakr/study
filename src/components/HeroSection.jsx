import React from 'react';
import { ArrowRight, BookOpen, AlertCircle, Scale, ChevronRight } from 'lucide-react';

export default function HeroSection({ setActiveTab }) {
  const flowSteps = [
    { title: "119 현장", desc: "중증도 평가 및 응급처치" },
    { title: "수용 병원 탐색", desc: "병상 확인 및 이송 문의" },
    { title: "전문의·수술 역량 확인", desc: "실제 당직의 및 수술실 가동" },
    { title: "최종 치료", desc: "응급수술 및 중환자 입원" }
  ];

  return (
    <section className="bg-slate-900 text-white pt-24 pb-16 md:pt-32 md:pb-24 border-b border-slate-800 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        {/* Project Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold">
          <span>2026 한양학술타운 LION</span>
          <span className="text-slate-500">•</span>
          <span>간호학과 × 정책학과 융합 연구</span>
        </div>

        {/* Main Title & Subtitle */}
        <div className="space-y-5 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight sm:leading-tight">
            응급환자가 헤매지 않도록,<br className="hidden sm:inline" />
            받을 수 있는 병원에 필요한 전문의가 있어야 합니다.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            CODE BLUE는 중증응급환자 이송 지연을 병상, 전문인력, 전원체계와 법적 부담의 문제로 살펴보고, 필수의료 전문인력 확보를 중심으로 개선방안을 제안합니다.
          </p>
        </div>

        {/* Dilemma Callout: 받아도 책임, 받지 않아도 책임 */}
        <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700/80 text-left max-w-3xl mx-auto shadow-lg space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-800/60 text-red-300 flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5 text-red-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
              받아도 책임, 받지 않아도 책임.
            </h2>
          </div>

          <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-700/60 pt-4">
            <p>
              응급의료진은 환자를 수용해 치료한 뒤 결과가 좋지 않으면 업무상과실과 관련된 수사·재판에 노출될 수 있고, 환자를 수용하지 않으면 정당한 사유 없는 진료 거부로 판단될 수 있습니다.
            </p>
            <p className="text-slate-400">
              CODE BLUE는 이 문제를 의료진 개인의 태도로 설명하지 않습니다. 실제로 환자를 받을 수 있는 전문인력과 병원을 확보하고, 수용 판단을 기록하며, 불가피한 결과에 대응할 제도가 함께 필요하다고 봅니다.
            </p>
          </div>
        </div>

        {/* 3 Main Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto pt-2">
          <button
            onClick={() => { setActiveTab('issues'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm transition-colors shadow-sm"
          >
            <AlertCircle className="w-4 h-4 mr-2" />
            <span>2026년 주요 이슈 보기</span>
          </button>

          <button
            onClick={() => { setActiveTab('policy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors shadow-sm"
          >
            <span>CODE BLUE 3대 정책 보기</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>

          <button
            onClick={() => { setActiveTab('research'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm transition-colors"
          >
            <BookOpen className="w-4 h-4 mr-2 text-blue-300" />
            <span>연구 과정 보기</span>
          </button>
        </div>

        {/* 4-Step Linear Flowchart with Center Insight */}
        <div className="pt-4 max-w-4xl mx-auto space-y-4">
          <p className="text-sm sm:text-base font-bold text-blue-200">
            “병상이 있어도 필요한 전문의가 없으면 최종 치료가 어렵습니다.”
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
            {flowSteps.map((step, idx) => (
              <div 
                key={idx} 
                className={`p-4 rounded-xl border transition-all ${
                  idx === 2 
                    ? 'bg-blue-950/80 border-blue-500/80' 
                    : 'bg-slate-800/80 border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-400">0{idx + 1}</span>
                  {idx === 2 && (
                    <span className="text-[10px] font-bold bg-blue-600 text-white px-2 py-0.5 rounded">
                      핵심 병목
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-bold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
