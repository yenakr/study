import React, { useState } from 'react';
import { ChevronDown, ChevronUp, PhoneCall, CheckCircle2 } from 'lucide-react';

export default function ErGuideSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const cards = [
    {
      title: "응급실은 접수순이 아닙니다",
      summary: "환자의 중증도 분류에 따라 생명이 위급한 환자가 우선 진료받습니다.",
      detail: "응급실은 도착한 순서가 아니라 한국형 응급환자 분류도구에 따른 중증도 순서로 진료합니다. 생명이 위급한 중증응급환자가 발생할 경우 경증 환자의 순서가 뒤로 밀릴 수 있습니다."
    },
    {
      title: "가장 큰 병원이 항상 가장 빠른 선택은 아닙니다",
      summary: "환자 상태에 알맞은 지역 응급의료기관을 찾는 것이 더 빠른 처치로 이어집니다.",
      detail: "상급종합병원은 대기 환자가 집중되어 중증 응급이 아닌 경우 대기 시간이 매우 길어질 수 있습니다. 환자 증상에 적합한 인근 응급의료기관을 방문하는 것이 더 빠르게 적절한 치료를 받는 길입니다."
    },
    {
      title: "위급할수록 가까운 응급처치가 먼저일 수 있습니다",
      summary: "이동 중 상태 악화를 막기 위해 인근 응급실의 초기 기적 생명 유지가 필수적입니다.",
      detail: "먼 거리의 대형병원으로 이동하는 동안 기도가 막히거나 상태가 악화될 수 있습니다. 가까운 응급실에서 기적 생명 유지 처치를 받은 후 필요 시 전원하는 것이 안전합니다."
    },
    {
      title: "병상이 있어도 환자를 받기 어려울 수 있습니다",
      summary: "전문의 부재, 수술실 가동 여부 등 최종 치료 가능 역량이 종합적으로 고려됩니다.",
      detail: "응급실 빈 침대가 있더라도 담당 전문의 부재, 수술실 및 중환자실 만석인 경우 해당 환자를 적절히 수용할 수 없습니다. 수용 판단은 병상 수뿐만 아니라 최종 치료 수술 역량에 따라 결정됩니다."
    },
    {
      title: "경증환자의 적정 이용이 중증환자의 치료기회를 보호합니다",
      summary: "올바른 응급실 이용 문화가 초를 다투는 응급환자의 생명을 살립니다.",
      detail: "비응급 경증환자가 응급실을 이용하면 응급실 혼잡도가 높아져 정작 초를 다투는 중증응급환자의 진료가 지연될 수 있습니다. 경증 질환은 동네 병의원이나 야간·휴일 진료기관을 이용하는 성숙한 인식이 필요합니다."
    }
  ];

  const toggleCard = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="er-guide" className="py-20 bg-slate-100 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-4">
            응급실 바로 알기
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            시민 여러분의 작은 인식 전환이 중증응급환자의 소중한 생명과 골든타임을 지킵니다.
          </p>
        </div>

        {/* Callout Banner (눈에 잘 띄게) */}
        <div className="bg-navy-900 rounded-xl p-6 sm:p-8 text-white shadow-md mb-12 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center shrink-0">
            <PhoneCall className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
              “응급상황에서는 직접 병원을 찾기보다 119의 안내를 따르세요”
            </h3>
            <p className="text-slate-300 text-sm mt-1">
              119 구급대는 환자 상태와 지역 병원의 실시간 수용 가능 여부를 종합 판단하여 가장 적절한 병원으로 이송합니다.
            </p>
          </div>
        </div>

        {/* Cards Accordion */}
        <div className="space-y-3 max-w-4xl mx-auto">
          {cards.map((card, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div 
                key={idx}
                className={`bg-white rounded-lg border transition-colors overflow-hidden ${
                  isExpanded ? 'border-brand-blue shadow-sm' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleCard(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-sm font-bold text-brand-blue shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-navy-900 mb-1">
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
                  <div className="px-5 pb-5 pt-1 border-t border-slate-100 bg-slate-50 text-slate-700 text-sm leading-relaxed">
                    <p className="p-4 bg-white rounded border border-slate-200 font-medium text-slate-800">
                      {card.detail}
                    </p>
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
