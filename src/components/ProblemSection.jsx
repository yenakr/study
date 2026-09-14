import React, { useState } from 'react';
import { PhoneCall, Activity, Hospital, Truck, UserCheck, Stethoscope } from 'lucide-react';

export default function ProblemSection() {
  const [activeStep, setActiveStep] = useState(2);

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
      problem: "구급대원이 현장에서 중증도를 신속히 평가하나, 기본 장비 및 현장 환경의 한계가 존재합니다."
    },
    {
      id: 2,
      title: "이송병원 확인",
      icon: Hospital,
      problem: "병상뿐 아니라 당직 전문의, 수술실, 중환자실 등 여러 조건을 함께 확인해야 합니다."
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
      problem: "전달 내용과 순서가 다르면 증상 발생 시각이나 처치 내용이 누락될 수 있습니다."
    },
    {
      id: 5,
      title: "최종 치료",
      icon: Stethoscope,
      problem: "가까운 병원이라도 환자에게 필요한 최종 치료가 어려울 수 있습니다."
    }
  ];

  const cases = [
    {
      title: "사례 1: 수술실 및 전문의 부재로 인한 재이송",
      problem: "응급실 수용 가능 병상이 표기되어 있었으나, 당일 해당 질환 담당 전문의 부재 및 응급 수술실 대기로 인해 2차 이송이 발생했습니다.",
      lesson: "단순 빈 병상 수가 아닌 실시간 수술실과 전문의 가동 역량 정보의 일치성이 필수적입니다."
    },
    {
      title: "사례 2: 구급대와 병원 간 정보 전달 미흡",
      problem: "현장 평가 중증도 정보와 병원 수용 요청 시 전달된 정보의 서식 부재로 수용 준비가 지연되었습니다.",
      lesson: "구급대원과 응급실 간 통일된 표준 인계 체계를 통한 사전 정보 공유 강화가 필요합니다."
    }
  ];

  return (
    <section id="problem" className="py-20 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-4">
            중증응급환자가 병원에 도착하기까지의 과정
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            각 단계를 클릭하면 해당 단계에서 발생할 수 있는 주요 문제를 확인할 수 있습니다.
          </p>
        </div>

        {/* Interactive Flowchart */}
        <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200 mb-12">
          
          {/* Step Nodes Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {steps.map((step) => {
              const Icon = step.icon;
              const isSelected = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex flex-col items-center p-4 rounded-lg text-center transition-all focus:outline-none ${
                    isSelected 
                      ? 'bg-navy-900 text-white shadow-sm' 
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-md flex items-center justify-center mb-2 ${
                    isSelected ? 'bg-brand-blue text-white' : 'bg-slate-100 text-brand-blue'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-xs font-semibold mb-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                    단계 {step.id + 1}
                  </span>
                  <span className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Problem Detail Banner */}
          <div className="bg-white rounded-lg p-6 border-l-4 border-brand-blue border-t border-r border-b border-slate-200">
            <h4 className="text-base font-bold text-navy-900 mb-2">
              {steps[activeStep].title} 단계의 문제점
            </h4>
            <p className="text-base text-slate-700 leading-relaxed">
              {steps[activeStep].problem}
            </p>
          </div>

        </div>

        {/* Case Studies Section */}
        <div className="mt-16">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-navy-900 mb-2">
              현장 주요 문제 사례
            </h3>
            <p className="text-slate-600 text-sm">
              사건을 자극적으로 표현하지 않고, 핵심 문제와 도출된 교훈을 보여줍니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cases.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 space-y-4">
                <h4 className="text-base font-bold text-navy-900 pb-3 border-b border-slate-100">
                  {item.title}
                </h4>
                
                <div>
                  <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    핵심 문제
                  </h5>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                <div>
                  <h5 className="text-xs font-bold text-brand-blue uppercase tracking-wider mb-1">
                    도출된 교훈
                  </h5>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {item.lesson}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
