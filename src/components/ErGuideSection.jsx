import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, AlertCircle, PhoneCall, CheckCircle2 } from 'lucide-react';

export default function ErGuideSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const cards = [
    {
      title: "응급실은 접수순이 아닙니다",
      summary: "환자의 중증도(KTAS) 분류에 따라 생명이 위급한 환자가 우선 진료받습니다.",
      detail: "응급실은 일반 외래와 달리 도착한 순서가 아닌 한국형 응급환자 분류도구(KTAS)에 따른 중증도 순서로 진료합니다. 생명이 위급한 중증응급환자가 발생할 경우 경증 환자의 순서가 뒤로 밀릴 수 있습니다."
    },
    {
      title: "가장 큰 병원이 항상 가장 빠른 선택은 아닙니다",
      summary: "환자 상태에 알맞은 지역 응급의료기관을 찾는 것이 더 빠른 처치로 이어집니다.",
      detail: "상급종합병원은 대기 환자가 집중되어 중증 응급이 아닌 경우 대기 시간이 매우 길어집니다. 환자 증상에 적합한 인근 2차 응급의료기관이나 지역 응급실을 방문하는 것이 훨씬 빠르게 치료받는 방법입니다."
    },
    {
      title: "위급할수록 가까운 응급처치가 먼저일 수 있습니다",
      summary: "이동 중 상태 악화를 막기 위해 인근 응급실의 초기 기적 생명 유지가 필수적입니다.",
      detail: "먼 거리의 대형병원으로 이동하다가 기도 폐쇄나 심정지 등 골든타임을 놓칠 수 있습니다. 가까운 응급실에서 응급처치와 생명 유지 조치를 받은 후 전문 병원으로 이송하는 것이 안전합니다."
    },
    {
      title: "병상이 있어도 환자를 받기 어려울 수 있습니다",
      summary: "전문의 부재, 수술실 가동 여부 등 최종 치료 가능 역량이 종합적으로 고려됩니다.",
      detail: "응급실 빈 침대가 있더라도 담당 전문의 부재, 수술실 및 중환자실 만석인 경우 해당 환자를 적절히 수용할 수 없습니다. 수용 판단은 병상 수뿐만 아니라 최종 치료 수술 역량에 따라 결정됩니다."
    },
    {
      title: "경증환자의 적정 이용이 중증환자의 치료기회를 보호합니다",
      summary: "올바른 응급실 이용 문화가 초를 다투는 응급환자의 생명을 살립니다.",
      detail: "경증 질환으로 응급실을 이용하면 응급실 혼잡도가 가중되어 정작 초를 다투는 중증환자의 진료가 지연될 수 있습니다. 단순 감기나 경증 질환은 동네 병의원이나 달빛어린이병원 등을 이용하는 시민의식이 필요합니다."
    }
  ];

  const toggleCard = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="er-guide" className="py-20 bg-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>올바른 응급실 이용 원칙</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-4">
            응급실 바로 알기
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            시민 여러분의 작은 인식 전환이 중증응급환자의 소중한 생명과 골든타임을 지킵니다.
          </p>
        </div>

        {/* Prominent Callout Banner (눈에 잘 띄게) */}
        <div className="bg-gradient-to-r from-navy-900 via-brand-blue to-navy-800 rounded-2xl p-6 sm:p-8 text-white shadow-xl mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 border border-blue-400/30">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-brand-red flex items-center justify-center shrink-0 shadow-lg animate-pulse">
              <PhoneCall className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-xs font-bold text-brand-lightblue uppercase tracking-wider block mb-1">
                IMPORTANT PRINCIPLE
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white leading-snug">
                “응급상황에서는 직접 병원을 찾기보다 119의 안내를 따르세요”
              </h3>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 text-xs sm:text-sm font-medium text-slate-200 shrink-0 text-center">
            119 구급대원은 실시간 병상 및 의료 역량을 종합 판단합니다
          </div>
        </div>

        {/* Cards Accordion */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {cards.map((card, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div 
                key={idx}
                className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  isExpanded ? 'border-brand-blue shadow-md ring-1 ring-blue-200' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleCard(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 ${
                      isExpanded ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-1">
                        {card.title}
                      </h3>
                      <p className="text-slate-500 text-sm font-normal">
                        {card.summary}
                      </p>
                    </div>
                  </div>
                  <div className="text-slate-400 shrink-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-brand-blue" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 text-slate-700 text-sm leading-relaxed animate-fadeIn">
                    <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                      <p className="font-medium text-slate-800">
                        {card.detail}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
