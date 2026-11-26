import React from 'react';
import { ArrowRight, Activity, PhoneCall, Stethoscope, Building2, AlertTriangle, ShieldAlert, ArrowDown } from 'lucide-react';

export default function HeroSection({ setActiveTab }) {
  const flowSteps = [
    { 
      num: "01", 
      stage: "119 구급대 현장", 
      icon: Activity,
      desc: "중증도(KTAS) 판정 및 기본 응급처치 시행" 
    },
    { 
      num: "02", 
      stage: "수용 병원 유선 확인", 
      icon: PhoneCall,
      desc: "단순 가용 병상 전산 조회 및 수용 가능 여부 타진" 
    },
    { 
      num: "03", 
      stage: "전문의·수술실 가동 확인", 
      icon: Stethoscope,
      desc: "배후 당직의 집도 가능 여부 및 중환자실 집중치료 확인", 
      highlight: true 
    },
    { 
      num: "04", 
      stage: "최종 치료 및 입원", 
      icon: Building2,
      desc: "응급 수술 및 중환자실 최종 입원 치료 개시" 
    }
  ];

  return (
    <section className="bg-white text-zinc-900 py-20 md:py-28 border-b border-zinc-200 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Masthead Meta */}
        <div className="border-b border-zinc-200 pb-3 mb-10 flex flex-wrap items-baseline justify-between gap-2 text-[13px] text-zinc-600">
          <div>
            <span className="font-bold text-[#0B3CFF]">2026 한양학술타운 LION</span>
            <span className="mx-2 text-zinc-300">|</span>
            <span>한양대학교 정책학과 간호학과 융합 연구 브리프</span>
          </div>
          <div>발행 2026년 11월 • 팀 <strong className="font-bold text-[#0B3CFF]">CODE BLUE</strong></div>
        </div>

        {/* Asymmetrical 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          {/* Left Column (Headline + Lead Prose, Max 640px) */}
          <div className="lg:col-span-7 space-y-6 text-left max-w-[640px]">
            <h1 className="font-serif font-bold text-[36px] sm:text-[42px] text-zinc-950 tracking-tight leading-[1.3] text-left break-keep">
              응급환자가 헤매지 않도록,<br />
              받을 수 있는 병원에 필요한 전문의가 있어야 합니다.
            </h1>

            <p className="text-[17px] md:text-[18px] text-zinc-800 leading-[1.75] font-normal text-left break-keep">
              CODE BLUE는 중증응급환자 이송 지연을 병상, 전문인력, 전원체계와 법적 부담의 문제로 살펴보고, <strong className="font-bold text-[#0B3CFF]">필수의료 전문인력 확보</strong>를 중심으로 실행 가능한 3대 정책대안을 제안합니다.
            </p>

            {/* 3 Main Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => { setActiveTab('issues'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="min-h-[44px] px-5 py-2.5 bg-[#0B3CFF] hover:bg-blue-700 text-white text-[15px] font-semibold rounded-[2px] transition-colors inline-flex items-center shadow-xs"
              >
                2026 현안
              </button>
              <button
                onClick={() => { setActiveTab('policy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="min-h-[44px] px-5 py-2.5 bg-white text-zinc-950 border border-zinc-300 text-[15px] font-semibold rounded-[2px] hover:bg-zinc-50 transition-colors inline-flex items-center"
              >
                3대 정책
              </button>
              <button
                onClick={() => { setActiveTab('research'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="min-h-[44px] px-5 py-2.5 bg-white text-zinc-700 border border-zinc-200 text-[15px] font-medium rounded-[2px] hover:bg-zinc-50 transition-colors inline-flex items-center"
              >
                연구 과정
              </button>
            </div>
          </div>

          {/* Right Column: Visual Decision Fork Infographic */}
          <div className="lg:col-span-5 border border-zinc-200 bg-zinc-50/50 p-6 sm:p-7 text-left space-y-5 rounded-[4px]">
            <div className="border-b border-zinc-200 pb-3">
              <span className="text-[12px] font-mono font-bold text-[#0B3CFF] block uppercase tracking-wider">
                LEGAL CONFLICT MAP
              </span>
              <h2 className="text-[20px] font-bold text-zinc-950 mt-1 leading-snug break-keep">
                응급실 수용 결정을 둘러싼 법적 상충 구조
              </h2>
            </div>

            {/* Visual Process Fork Schematic */}
            <div className="space-y-3 pt-1">
              
              {/* Root Node: Inbound Emergency Request */}
              <div className="bg-white border-2 border-zinc-900 p-3.5 text-center shadow-xs">
                <span className="text-[11px] font-mono font-bold text-zinc-500 uppercase block">트리거</span>
                <span className="text-[15px] font-bold text-zinc-950">119 중증응급환자 이송·수용 요청</span>
              </div>

              {/* Forking Connector Lines */}
              <div className="flex items-center justify-center my-1 relative">
                <div className="w-1/2 h-4 border-l-2 border-t-2 border-r-2 border-zinc-400"></div>
              </div>

              {/* Dual Branches */}
              <div className="grid grid-cols-2 gap-3">
                
                {/* Branch A: Accepted */}
                <div className="bg-white border border-zinc-300 p-3.5 space-y-2 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="inline-block px-2 py-0.5 text-[11px] font-bold bg-[#0B3CFF] text-white rounded-[2px]">
                      경로 A. 수용
                    </span>
                    <p className="text-[13px] text-zinc-700 font-medium leading-snug break-keep">
                      당직 전문의 부재 상태에서 일단 수용
                    </p>
                  </div>
                  <div className="pt-2 border-t border-zinc-100 space-y-1">
                    <span className="text-[11px] font-mono font-bold text-red-600 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 shrink-0" />
                      형사 리스크
                    </span>
                    <p className="text-[12px] font-bold text-zinc-950 leading-tight break-keep">
                      결과 악화 시 업무상과실치사상 입건
                    </p>
                  </div>
                </div>

                {/* Branch B: Rejected */}
                <div className="bg-white border border-zinc-300 p-3.5 space-y-2 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="inline-block px-2 py-0.5 text-[11px] font-bold bg-zinc-800 text-white rounded-[2px]">
                      경로 B. 수용 거부
                    </span>
                    <p className="text-[13px] text-zinc-700 font-medium leading-snug break-keep">
                      치료 역량 결손으로 수용 불가 통보
                    </p>
                  </div>
                  <div className="pt-2 border-t border-zinc-100 space-y-1">
                    <span className="text-[11px] font-mono font-bold text-red-600 flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3 shrink-0" />
                      사법 리스크
                    </span>
                    <p className="text-[12px] font-bold text-zinc-950 leading-tight break-keep">
                      응급의료법 위반 (진료거부죄 처벌)
                    </p>
                  </div>
                </div>

              </div>

              {/* Convergence Bottom Banner */}
              <div className="bg-zinc-900 text-white p-3 text-center space-y-1 rounded-[2px] mt-2">
                <span className="text-[11px] font-mono font-bold text-[#0B3CFF] uppercase tracking-wide block">
                  STRUCTURAL BOTTLENECK
                </span>
                <p className="text-[13px] font-semibold text-zinc-100 break-keep leading-snug">
                  "받아도 형사 책임 위험 ↔ 안 받아도 처벌 위험"
                </p>
                <p className="text-[11px] text-zinc-400 break-keep">
                  의료진 개인의 태도가 아닌 배후 전문의 결손에 기인한 제도적 딜레마
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Step Process: Visual Pipeline Map with Connecting Arrows */}
        <div className="pt-10 border-t border-zinc-200 text-left space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h3 className="text-[20px] font-bold text-zinc-950 leading-snug break-keep">
                중증응급환자 4단계 이송·수용 프로세스 맵
              </h3>
              <p className="text-[14px] text-zinc-600 mt-0.5">
                현장 접촉부터 최종 수술까지 이어지는 병목 검증 파이프라인
              </p>
            </div>
            <span className="text-[12px] font-mono font-bold text-[#0B3CFF]">
              STAGE 01 → 04
            </span>
          </div>

          {/* Visual Step Pipeline with Connectors */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {flowSteps.map((s, idx) => {
              const IconComponent = s.icon;
              return (
                <div key={s.num} className="relative flex flex-col">
                  {/* Step Card */}
                  <div 
                    className={`p-5 text-left h-full flex flex-col justify-between border relative rounded-[2px] transition-all ${
                      s.highlight 
                        ? 'border-[#0B3CFF] bg-blue-50/20 shadow-xs ring-1 ring-[#0B3CFF]/30' 
                        : 'border-zinc-300 bg-white hover:border-zinc-400'
                    }`}
                  >
                    <div>
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className={`w-7 h-7 rounded-[2px] font-mono text-[13px] font-bold flex items-center justify-center ${
                            s.highlight ? 'bg-[#0B3CFF] text-white' : 'bg-zinc-950 text-white'
                          }`}>
                            {s.num}
                          </span>
                          <IconComponent className={`w-4 h-4 ${s.highlight ? 'text-[#0B3CFF]' : 'text-zinc-700'}`} />
                        </div>
                        {s.highlight ? (
                          <span className="text-[11px] font-bold text-white bg-[#0B3CFF] px-2 py-0.5 rounded-[2px]">
                            주요 병목
                          </span>
                        ) : (
                          <span className="text-[11px] font-mono text-zinc-400">
                            STEP {s.num}
                          </span>
                        )}
                      </div>

                      <h4 className="text-[16px] font-bold text-zinc-950 mb-1.5 leading-snug break-keep">
                        {s.stage}
                      </h4>
                    </div>

                    <p className="text-[14px] text-zinc-700 leading-relaxed break-keep pt-2 border-t border-zinc-100 mt-2">
                      {s.desc}
                    </p>
                  </div>

                  {/* Horizontal Connector Arrow (Desktop only, between items) */}
                  {idx < flowSteps.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-zinc-300 items-center justify-center text-zinc-500 shadow-xs">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                  {/* Vertical Connector Arrow (Mobile only, between items) */}
                  {idx < flowSteps.length - 1 && (
                    <div className="md:hidden flex justify-center py-1 text-zinc-400">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Reader Guide */}
          <div className="pt-3 flex justify-end">
            <button
              onClick={() => { setActiveTab('problem'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="min-h-[44px] inline-flex items-center text-[15px] font-bold text-zinc-950 hover:text-[#0B3CFF] transition-colors"
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
