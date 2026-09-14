import React, { useState } from 'react';
import { PhoneCall, Activity, Hospital, Truck, UserCheck, Stethoscope, ChevronRight, Info, AlertTriangle, Lightbulb } from 'lucide-react';

export default function ProblemSection() {
  const [activeStep, setActiveStep] = useState(2); // Default to '이송병원 확인'

  const steps = [
    {
      id: 0,
      title: "119 신고",
      icon: PhoneCall,
      problem: "신고 시 환자 상태 및 위치 정보 파악의 정확성이 전체 이송 골든타임을 좌우합니다."
    },
    {
      id: 1,
      title: "현장 평가",
      icon: Activity,
      problem: "구급대원이 현장에서 중증도를 신속히 분류하나, 육안 및 기본 장비 한계가 존재합니다."
    },
    {
      id: 2,
      title: "이송병원 확인",
      icon: Hospital,
      problem: "병상뿐 아니라 당직 전문의, 수술실, 중환자실 등 여러 조건을 함께 확인해야 합니다.",
      highlight: true
    },
    {
      id: 3,
      title: "환자 이송",
      icon: Truck,
      problem: "이송 중 환자 상태 변동 위험과 적정 치료가 가능한 병원으로의 이동 거리 부담이 수반됩니다."
    },
    {
      id: 4,
      title: "응급실 인계",
      icon: UserCheck,
      problem: "구급대와 의료진 간 전달 내용과 순서가 다르면 증상 발생 시각이나 처치 내역이 누락될 수 있습니다.",
      highlight: true
    },
    {
      id: 5,
      title: "최종 치료",
      icon: Stethoscope,
      problem: "가까운 병원에 도착하더라도 환자에게 필요한 최종 응급 수술이나 시술이 어려울 수 있습니다.",
      highlight: true
    }
  ];

  const cases = [
    {
      title: "사례 1: 수술실/전문의 부재로 인한 재이송 (핑퐁 이송)",
      problem: "응급실에 수용 가능한 병상이 표기되어 있었으나, 당일 해당 질환 담당 전문의 부재 및 응급 수술실 대기로 인해 2차 이송 발생",
      lesson: "단순 '빈 병상 수'가 아닌 실시간 최종 치료 가능 역량(전문의/수술실) 정보의 일치성이 필수적입니다."
    },
    {
      title: "사례 2: 구급대-병원 간 정보 전달 미흡",
      problem: "현장에서 평가된 중증도 정보와 병원 수용 요청 시 전달된 중증도 정보의 표준화 부재로 사전 준비 지연",
      lesson: "구급대원과 응급실 간 통일된 표준 인계 서식(SBAR 등)을 통한 사전 정보 공유체계 강화가 요구됩니다."
    }
  ];

  return (
    <section id="problem" className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-3">
            <Info className="w-3.5 h-3.5" />
            <span>이송 프로세스 분석</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-4">
            중증응급환자가 병원에 도착하기까지의 과정
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            119 신고부터 최종 치료까지의 각 단계를 클릭하시면 발생 가능한 문제점과 병목 원인을 확인할 수 있습니다.
          </p>
        </div>

        {/* Interactive Flowchart */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12">
          
          {/* Step Nodes Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {steps.map((step) => {
              const Icon = step.icon;
              const isSelected = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex flex-col items-center p-4 rounded-xl text-center transition-all duration-200 focus:outline-none ${
                    isSelected 
                      ? 'bg-navy-900 text-white shadow-md ring-2 ring-brand-blue' 
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2.5 ${
                    isSelected ? 'bg-brand-blue text-white' : 'bg-slate-100 text-brand-blue'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-slate-400 font-semibold mb-0.5">Step 0{step.id + 1}</span>
                  <span className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Problem Detail Banner */}
          <div className="bg-white rounded-xl p-6 border-l-4 border-brand-blue shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-50 text-brand-blue shrink-0">
                <AlertTriangle className="w-6 h-6 text-brand-blue" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-brand-blue uppercase">Step 0{activeStep + 1} 이슈</span>
                  <span className="text-slate-400">•</span>
                  <h4 className="text-base font-bold text-navy-900">{steps[activeStep].title} 단계의 문제점</h4>
                </div>
                <p className="text-base font-medium text-slate-700 leading-relaxed">
                  {steps[activeStep].problem}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Case Studies Section */}
        <div className="mt-16">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-navy-900 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              <span>실제 현장 주요 문제 사례</span>
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              사건을 자극적으로 다루지 않고, 핵심 문제와 도출된 학술적 교훈에 집중합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cases.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
                <h4 className="text-base font-bold text-navy-900 mb-4 pb-3 border-b border-slate-100 flex items-center justify-between">
                  <span>{item.title}</span>
                </h4>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded inline-block mb-1">
                      핵심 문제
                    </span>
                    <p className="text-slate-700 leading-relaxed font-normal">
                      {item.problem}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-brand-blue bg-blue-50 px-2 py-0.5 rounded inline-block mb-1">
                      도출된 교훈
                    </span>
                    <p className="text-slate-700 leading-relaxed font-normal">
                      {item.lesson}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
