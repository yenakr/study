import React from 'react';
import { ArrowRight, Activity, PhoneCall, Stethoscope, Building2, CheckCircle2, AlertOctagon } from 'lucide-react';

export default function HeroSection({ setActiveTab }) {
  const flowSteps = [
    { 
      num: "01", 
      stage: "119 구급대 현장", 
      icon: Activity,
      desc: "중증도(KTAS) 판정 및 기본 처치 시행" 
    },
    { 
      num: "02", 
      stage: "수용 병원 유선 확인", 
      icon: PhoneCall,
      desc: "응급실 가용 병상 확인 및 사전 통보" 
    },
    { 
      num: "03", 
      stage: "전문의·수술실 가동 확인", 
      icon: Stethoscope,
      desc: "배후 당직의 수술 및 중환자 치료 가능성 확인", 
      highlight: true 
    },
    { 
      num: "04", 
      stage: "최종 치료 및 입원", 
      icon: Building2,
      desc: "응급 수술 및 중환자실 집중 치료 연계" 
    }
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
                2026 현안
              </button>
              <button
                onClick={() => { setActiveTab('policy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="min-h-[44px] px-5 py-2.5 bg-white text-zinc-950 border border-zinc-300 text-[15px] font-semibold rounded hover:bg-zinc-50 transition-colors inline-flex items-center"
              >
                3대 정책
              </button>
              <button
                onClick={() => { setActiveTab('research'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="min-h-[44px] px-5 py-2.5 bg-white text-zinc-700 border border-zinc-200 text-[15px] font-medium rounded hover:bg-zinc-50 transition-colors inline-flex items-center"
              >
                연구 과정
              </button>
            </div>
          </div>

          {/* Right Column: Legal Responsibility Structure Diagram */}
          <div className="lg:col-span-5 border border-zinc-300 bg-white p-7 text-left space-y-5">
            <div className="border-b border-zinc-200 pb-3">
              <span className="text-[13px] font-mono font-bold text-zinc-600 block uppercase tracking-wide">
                응급의료법상 책임 구조 분석
              </span>
              <h2 className="text-[22px] font-semibold text-zinc-950 mt-1 leading-snug break-keep">
                수용 여부에 따른 법적 상충 구조
              </h2>
            </div>

            {/* Geometric Dual-Pathway Diagram */}
            <div className="space-y-4 pt-1">
              
              {/* Branch A: Patient Accepted */}
              <div className="border border-zinc-300 bg-zinc-50 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[15px] text-zinc-950 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-zinc-900 inline-block"></span>
                    경로 A. 환자 수용 시
                  </span>
                  <span className="text-[13px] font-mono text-zinc-600 border border-zinc-200 bg-white px-2 py-0.5">형법 제268조</span>
                </div>
                <div className="text-[15px] text-zinc-700 leading-relaxed space-y-1">
                  <div className="flex items-center gap-2 text-zinc-800 text-[13px]">
                    <span className="bg-white border border-zinc-300 px-2 py-0.5">당직의 부재 속 처치</span>
                    <span>→</span>
                    <span className="bg-white border border-zinc-300 px-2 py-0.5">치료 결과 악화</span>
                  </div>
                  <p className="pt-1 text-zinc-800 font-medium">
                    결과 악화 시 업무상과실치사상 혐의로 형사 수사 및 재판 노출
                  </p>
                </div>
              </div>

              {/* Branch B: Admission Rejected */}
              <div className="border border-zinc-300 bg-zinc-50 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[15px] text-zinc-950 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-zinc-900 inline-block"></span>
                    경로 B. 수용 불가 통보 시
                  </span>
                  <span className="text-[13px] font-mono text-zinc-600 border border-zinc-200 bg-white px-2 py-0.5">응급의료법 제6조</span>
                </div>
                <div className="text-[15px] text-zinc-700 leading-relaxed space-y-1">
                  <div className="flex items-center gap-2 text-zinc-800 text-[13px]">
                    <span className="bg-white border border-zinc-300 px-2 py-0.5">치료 역량 한계</span>
                    <span>→</span>
                    <span className="bg-white border border-zinc-300 px-2 py-0.5">사유 입증 한계</span>
                  </div>
                  <p className="pt-1 text-zinc-800 font-medium">
                    객관적 사유 미인정 시 정당한 사유 없는 진료 거부로 형벌 적용
                  </p>
                </div>
              </div>

              {/* Core Synthesis Conclusion */}
              <p className="text-[13px] text-zinc-600 leading-relaxed border-t border-zinc-200 pt-3 break-keep">
                의료진 개인의 태도 문제가 아닌, 배후 필수인력 결손과 입법적 공백이 겹친 구조적 딜레마로 규명됩니다.
              </p>
            </div>
          </div>

        </div>

        {/* 4-Step Process: Visual Pipeline Diagram */}
        <div className="pt-10 border-t border-zinc-300 text-left space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h3 className="text-[20px] font-bold text-zinc-950 leading-snug break-keep">
              중증응급환자 4단계 이송·수용 프로세스
            </h3>
            <span className="text-[13px] font-mono text-zinc-600">
              이송 단계별 가동성 점검 구조
            </span>
          </div>

          {/* Visual Step Pipeline with Connectors */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
            {flowSteps.map((s, idx) => {
              const IconComponent = s.icon;
              return (
                <div 
                  key={s.num} 
                  className={`p-6 text-left min-h-[170px] flex flex-col justify-between border relative ${
                    s.highlight 
                      ? 'border-[#0B3CFF] bg-blue-50/20' 
                      : 'border-zinc-300 bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-[2px] bg-zinc-950 text-white font-mono text-[13px] font-bold flex items-center justify-center">
                          {s.num}
                        </span>
                        <IconComponent className={`w-4 h-4 ${s.highlight ? 'text-[#0B3CFF]' : 'text-zinc-700'}`} />
                      </div>
                      {s.highlight && (
                        <span className="text-[13px] font-bold text-[#0B3CFF] border border-[#0B3CFF] bg-white px-2 py-0.5 rounded-[2px]">
                          주요 병목
                        </span>
                      )}
                    </div>
                    <h4 className="text-[17px] font-bold text-zinc-950 mb-2 leading-snug break-keep">
                      {s.stage}
                    </h4>
                  </div>
                  <p className="text-[15px] text-zinc-700 leading-relaxed break-keep">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Reader Guide */}
          <div className="pt-3 flex justify-end">
            <button
              onClick={() => { setActiveTab('problem'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="min-h-[44px] inline-flex items-center text-[15px] font-bold text-zinc-950 hover:underline"
            >
              <span>문제 분석</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
