import React from 'react';
import { X, BookOpen, Users, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function ResearchProcessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const terms = [
    {
      term: "KTAS (Korean Triage and Acuity Scale)",
      desc: "한국형 응급환자 분류도구. 도착 순서가 아닌 환자의 중증도와 긴급도에 따라 1~5단계로 진료 우선순위를 정하는 체계."
    },
    {
      term: "IMIST-AMBO",
      desc: "구급대와 응급실 간 사전·구두 인계 표준 서식 (Identification, Mechanism, Injuries, Signs, Treatment, Allergies, Medications, Background, Other)."
    },
    {
      term: "핑퐁 이송 (재이송 / 수용 거부)",
      desc: "응급실 수용 불가 통보로 인해 119 구급차가 적정 진료 병원을 찾지 못하고 복수의 의료기관을 전전하는 현상."
    },
    {
      term: "수용역량 (Treatment Capacity)",
      desc: "단순 응급실 병상 수가 아닌, 환자 치료에 필요한 당직 전문의, 응급수술실, 중환자실, 시술 장비의 실시간 실제 가동 상태."
    },
    {
      term: "전원 (Hospital Transfer)",
      desc: "자체 의료 자원으로 최종 치료가 불가능할 때 환자를 다른 적정 응급의료기관으로 안전하게 이동시키는 절차."
    }
  ];

  const interviewDetails = [
    {
      group: "119 응급구급대원 (N=5)",
      topic: "현장 중증도 평가의 한계, 병원 수용 문의 시 무응답/지연 경험, 도착 후 구두 인계 시 정보 누락 지점"
    },
    {
      group: "응급의학과 전문의 및 당직 의사 (N=4)",
      topic: "당직 전문의 부재 및 수술실 만석 시 수용 판단 기준, 구급대 사전 통보의 실효성, 형사·민사적 법적 부담"
    },
    {
      group: "보건정책 및 응급의료 연구원 (N=3)",
      topic: "응급의료법 제6조(거부금지)와 제48조의2(수용능력 확인)의 제도적 공백, 24시간 전원조정 허브의 법적 책임 완화 구조"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-sm animate-fadeIn font-sans">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-navy-900 text-white p-5 flex items-center justify-between border-b border-navy-800 shrink-0">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-brand-blue" />
            <div>
              <h3 className="font-bold text-base text-white">학술 연구 방법론 및 조사 과정 (Research Methodology)</h3>
              <p className="text-xs text-slate-300">간호학 × 정책학과 융합 학술 연구 프로젝트</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body - Paper Style */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-slate-50 text-slate-900 text-sm leading-relaxed">
          
          {/* Paper Title Header */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
              RESEARCH METHODOLOGY & DEFINITIONS
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-navy-900">
              중증응급환자 이송 지연 개선 연구의 학술적 접근 및 분석 체계
            </h2>
            <p className="text-xs text-slate-600 font-medium">
              연구진: CODE BLUE (간호학과 × 정책학과 융합 연구팀)
            </p>
          </div>

          {/* 1. 용어의 정의 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
            <h3 className="text-base font-extrabold text-navy-900 flex items-center gap-2 border-l-4 border-brand-blue pl-3">
              1. 주요 용어의 작업적 정의 (Operational Definitions)
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {terms.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 space-y-1">
                  <strong className="text-navy-900 font-bold text-sm block">• {item.term}</strong>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. 전문가 심층 인터뷰 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
            <h3 className="text-base font-extrabold text-navy-900 flex items-center gap-2 border-l-4 border-brand-blue pl-3">
              2. 전문가 심층 인터뷰 (In-depth Semi-structured Interviews)
            </h3>
            
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              본 연구는 현장 실무자와 전문가의 시각을 반영하기 위해 119 구급대원, 응급의학과 전문의, 보건정책 연구자를 대상으로 반구조화된 질적 인터뷰(Semi-structured Interview)를 수행하였습니다.
            </p>

            <div className="space-y-3">
              {interviewDetails.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-navy-900 font-bold text-sm">
                    <Users className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>{item.group}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 pl-6 leading-relaxed">
                    <strong>주요 논의 및 조사 주제:</strong> {item.topic}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. 5단계 연구 추진 절차 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
            <h3 className="text-base font-extrabold text-navy-900 flex items-center gap-2 border-l-4 border-brand-blue pl-3">
              3. 5단계 학술 연구 절차 (Research Framework)
            </h3>

            <div className="space-y-3">
              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="text-brand-blue block font-bold text-sm mb-1">1단계: 문헌 고찰 및 법제도 분석</strong>
                <p className="text-xs sm:text-sm text-slate-700">「응급의료에 관한 법률」 제6조, 제11조, 제15조, 제48조의2 및 해외 이송체계 문헌 검토</p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="text-brand-blue block font-bold text-sm mb-1">2단계: 현장 이송 및 재이송 사례 연구</strong>
                <p className="text-xs sm:text-sm text-slate-700">핑퐁 이송 발생 데이터 및 골든타임 초과 이송 사례의 병목 원인 분석</p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="text-brand-blue block font-bold text-sm mb-1">3단계: 전문가 심층 인터뷰 및 델파이 조사</strong>
                <p className="text-xs sm:text-sm text-slate-700">구급대원·의료진·정책연구자 12인 심층 인터뷰를 통한 현장 가이드라인 도출</p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="text-brand-blue block font-bold text-sm mb-1">4단계: 시민 경험 설문 및 인식 조사</strong>
                <p className="text-xs sm:text-sm text-slate-700">응급실 이용 시민 대상 중증도 분류 인지도 및 적정 이송 수용성 조사</p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="text-brand-blue block font-bold text-sm mb-1">5단계: 융합 정책 대안 도출 및 법개정안 모델링</strong>
                <p className="text-xs sm:text-sm text-slate-700">간호학적 IMIST-AMBO 인계 체계와 정책학적 24시간 전원조정 허브 법제화 연계</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs transition-colors"
          >
            확인 및 닫기
          </button>
        </div>

      </div>
    </div>
  );
}
