import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ setActiveTab }) {
  const flowSteps = [
    { num: "01", stage: "119 구급대 현장", desc: "중증도(KTAS) 1차 판정 및 기본 응급처치 시행" },
    { num: "02", stage: "수용 병원 유선 확인", desc: "응급실 가용 병상 확인 및 구급활동 사전 통보" },
    { num: "03", stage: "전문의·수술실 가동 확인", desc: "배후 진료과 당직 전문의와 수술실 실제 치료 가능 여부 확인", highlight: true },
    { num: "04", stage: "최종 치료 및 입원", desc: "응급 수술, 심혈관 중재시술, 중환자실 집중 치료 연계" }
  ];

  return (
    <section className="bg-white text-zinc-900 py-24 md:py-28 border-b border-zinc-200 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Masthead Meta */}
        <div className="border-b border-zinc-300 pb-3 mb-10 flex flex-wrap items-baseline justify-between gap-2 text-[13px] text-zinc-600">
          <div>
            <span className="font-semibold text-zinc-950">2026 한양학술타운 LION</span>
            <span className="mx-2">|</span>
            <span>간호학과 × 정책학과 융합 연구 브리프</span>
          </div>
          <div>발행 2026년 11월 • 팀 CODE BLUE</div>
        </div>

        {/* Asymmetrical 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          {/* Left Column (Headline + Lead Prose, Max 640px) */}
          <div className="lg:col-span-7 space-y-6 text-left max-w-[640px]">
            <h1 className="font-serif font-bold text-[36px] sm:text-[40px] text-zinc-950 tracking-tight leading-[1.3] text-left break-keep">
              응급환자가 헤매지 않도록,<br />
              받을 수 있는 병원에 필요한 전문의가 있어야 합니다.
            </h1>

            <p className="text-[17px] md:text-[18px] text-zinc-800 leading-[1.75] font-normal text-left break-keep">
              CODE BLUE는 중증응급환자 이송 지연을 병상, 전문인력, 전원체계와 법적 부담의 문제로 살펴보고, <strong className="font-bold text-[#0B3CFF]">필수의료 전문인력 확보</strong>를 중심으로 개선방안을 제안합니다.
            </p>

            {/* 3 Main Action Buttons (Min height 44px) */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => { setActiveTab('issues'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="min-h-[44px] px-5 py-2.5 bg-zinc-950 text-white text-[15px] font-semibold rounded hover:bg-zinc-800 transition-colors inline-flex items-center"
              >
                2026 현안 보기
              </button>
              <button
                onClick={() => { setActiveTab('policy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="min-h-[44px] px-5 py-2.5 bg-white text-zinc-950 border border-zinc-300 text-[15px] font-semibold rounded hover:bg-zinc-50 transition-colors inline-flex items-center"
              >
                3대 정책 보기
              </button>
              <button
                onClick={() => { setActiveTab('research'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="min-h-[44px] px-5 py-2.5 bg-white text-zinc-700 border border-zinc-200 text-[15px] font-medium rounded hover:bg-zinc-50 transition-colors inline-flex items-center"
              >
                연구 과정 보기
              </button>
            </div>
          </div>

          {/* Right Column: Dilemma Box */}
          <div className="lg:col-span-5 border border-zinc-300 bg-white p-7 text-left space-y-4">
            <div className="border-b border-zinc-200 pb-3">
              <span className="text-[15px] font-bold text-zinc-600 block">
                현장 딜레마
              </span>
              <h2 className="text-[22px] font-semibold text-zinc-950 mt-1 leading-snug">
                받아도 책임, 받지 않아도 책임.
              </h2>
            </div>

            <div className="space-y-3 text-[15px] text-zinc-700 leading-relaxed break-keep">
              <p>
                응급의료진은 환자를 수용해 치료한 뒤 결과가 좋지 않으면 업무상과실과 관련된 수사·재판에 노출될 수 있고, 환자를 수용하지 않으면 정당한 사유 없는 진료 거부로 판단될 수 있습니다.
              </p>
              <p className="pt-2 border-t border-zinc-100">
                CODE BLUE는 이 문제를 의료진 개인의 태도로 설명하지 않습니다. 실제로 환자를 받을 수 있는 전문인력과 병원을 확보하고, 수용 판단을 기록하며, 불가피한 결과에 대응할 제도가 함께 필요하다고 봅니다.
              </p>
            </div>
          </div>

        </div>

        {/* 4-Step Process: Row Height & Font Sizes */}
        <div className="pt-10 border-t border-zinc-300 text-left space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h3 className="text-[20px] font-bold text-zinc-950 leading-snug break-keep">
              병상이 있어도 필요한 전문의가 없으면 최종 치료가 어렵습니다.
            </h3>
            <span className="text-[13px] text-zinc-600 shrink-0">
              중증응급환자 4단계 이송·수용 체계
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 border border-zinc-300 bg-white divide-y md:divide-y-0 md:divide-x divide-zinc-200">
            {flowSteps.map((s) => (
              <div 
                key={s.num} 
                className={`p-5 text-left min-h-[140px] flex flex-col justify-between ${s.highlight ? 'bg-zinc-50' : 'bg-white'}`}
              >
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-mono text-[15px] font-bold text-zinc-600">{s.num}</span>
                    {s.highlight && (
                      <span className="text-[13px] font-bold text-[#0B3CFF] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                        핵심 병목
                      </span>
                    )}
                  </div>
                  <h4 className="text-[17px] font-bold text-zinc-950 mb-1.5 leading-snug">
                    {s.stage}
                  </h4>
                </div>
                <p className="text-[15px] text-zinc-700 leading-relaxed break-keep">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Reader Guide */}
          <div className="pt-3 flex justify-end">
            <button
              onClick={() => { setActiveTab('problem'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="min-h-[44px] inline-flex items-center text-[15px] font-bold text-zinc-950 hover:underline"
            >
              <span>문제 분석 보기</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
