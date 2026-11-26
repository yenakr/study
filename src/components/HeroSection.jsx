import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ setActiveTab }) {
  const flowSteps = [
    { num: "01", stage: "119 구급대 현장", desc: "중증도(KTAS) 1차 판정 및 응급처치 시행" },
    { num: "02", stage: "수용 병원 유선 탐색", desc: "응급실 가용 병상 확인 및 구급활동 통보" },
    { num: "03", stage: "전문의·수술 역량 확인", desc: "배후 진료과 당직 전문의, 응급수술실 실제 가동 여부 확인 (핵심 병목)", highlight: true },
    { num: "04", stage: "최종 치료 및 입원", desc: "응급 뇌혈관·개두술, 심혈관 중재시술, 중환자실 집중 치료" }
  ];

  return (
    <section className="bg-[#FAF9F5] text-zinc-900 pt-16 pb-20 md:pt-20 md:pb-24 border-b border-zinc-200 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header Meta */}
        <div className="border-b border-zinc-300 pb-3 mb-8 flex flex-wrap items-baseline justify-between gap-2 text-xs text-zinc-500">
          <div>
            <span className="font-semibold text-zinc-900">2026 한양학술타운 LION</span>
            <span className="mx-2">|</span>
            <span>간호학과 × 정책학과 융합 연구 브리프</span>
          </div>
          <div>발행: 2026년 11월 • 팀 CODE BLUE</div>
        </div>

        {/* Asymmetrical 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column (Headline + Lead Prose, ~65 chars wide max) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-zinc-950 tracking-tight leading-[1.35] text-left">
              응급환자가 헤매지 않도록,<br />
              받을 수 있는 병원에 필요한 전문의가 있어야 합니다.
            </h1>

            <p className="text-zinc-700 text-sm sm:text-base leading-relaxed text-left max-w-prose">
              CODE BLUE는 중증응급환자 이송 지연을 병상, 전문인력, 전원체계와 법적 부담의 문제로 살펴보고, 필수의료 전문인력 확보를 중심으로 개선방안을 제안합니다.
            </p>

            {/* 3 Text Action Links */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => { setActiveTab('issues'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-4 py-2 bg-zinc-900 text-white text-xs sm:text-sm font-semibold rounded hover:bg-zinc-800 transition-colors"
              >
                2026년 주요 이슈 보기
              </button>
              <button
                onClick={() => { setActiveTab('policy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-4 py-2 bg-white text-zinc-900 border border-zinc-300 text-xs sm:text-sm font-semibold rounded hover:bg-zinc-50 transition-colors"
              >
                CODE BLUE 3대 정책 보기
              </button>
              <button
                onClick={() => { setActiveTab('research'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-4 py-2 bg-white text-zinc-700 border border-zinc-200 text-xs sm:text-sm font-medium rounded hover:bg-zinc-50 transition-colors"
              >
                연구 과정 보기
              </button>
            </div>
          </div>

          {/* Right Column (Editorial Quote & Dilemma Box, Asymmetrical) */}
          <div className="lg:col-span-5 border border-zinc-300 bg-white p-6 text-left space-y-3.5 shadow-xs">
            <div className="border-b border-zinc-200 pb-2">
              <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wide block">
                현장 딜레마
              </span>
              <h2 className="font-serif font-bold text-lg text-zinc-950 mt-0.5">
                받아도 책임, 받지 않아도 책임.
              </h2>
            </div>

            <div className="text-xs sm:text-sm text-zinc-700 leading-relaxed space-y-2">
              <p>
                응급의료진은 환자를 수용해 치료한 뒤 결과가 좋지 않으면 업무상과실과 관련된 수사·재판에 노출될 수 있고, 환자를 수용하지 않으면 정당한 사유 없는 진료 거부로 판단될 수 있습니다.
              </p>
              <p className="text-zinc-600 text-xs pt-1 border-t border-zinc-100">
                CODE BLUE는 이 문제를 의료진 개인의 태도로 설명하지 않습니다. 실제로 환자를 받을 수 있는 전문인력과 병원을 확보하고, 수용 판단을 기록하며, 불가피한 결과에 대응할 제도가 함께 필요하다고 봅니다.
              </p>
            </div>
          </div>

        </div>

        {/* 4-Step Process: Editorial Linear Table (Not 4 identical bubble cards) */}
        <div className="mt-14 pt-8 border-t border-zinc-300 text-left space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="font-serif font-bold text-base text-zinc-900">
              중증응급환자 이송·수용 4단계 전달 체계
            </h3>
            <p className="text-xs font-semibold text-zinc-600">
              * 핵심 판단 지점: 병상이 있어도 필요한 전문의가 없으면 최종 치료가 어렵습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 border border-zinc-200 bg-white divide-y md:divide-y-0 md:divide-x divide-zinc-200">
            {flowSteps.map((s) => (
              <div 
                key={s.num} 
                className={`p-4 text-left ${s.highlight ? 'bg-amber-50/50' : 'bg-white'}`}
              >
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-xs font-mono font-bold text-zinc-400">{s.num}</span>
                  {s.highlight && (
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.2 rounded">
                      병목 지점
                    </span>
                  )}
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-zinc-900 mb-1">
                  {s.stage}
                </h4>
                <p className="text-xs text-zinc-600 leading-normal">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Reader Guide */}
          <div className="pt-2 flex justify-end">
            <button
              onClick={() => { setActiveTab('problem'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center text-xs font-bold text-zinc-900 hover:underline"
            >
              <span>1. 문제 분석 살펴보기</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
