import React from 'react';
import { X, Search, FileText, Users, MessageSquareText, Lightbulb } from 'lucide-react';

export default function ResearchProcessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const processSteps = [
    {
      step: "01",
      title: "문헌 및 법제도 조사",
      icon: Search,
      desc: "국내 응급의료에 관한 법률, 응급의료 기본계획 및 해외 이송체계(미국, 일본 등) 관련 학술 문헌 검토"
    },
    {
      step: "02",
      title: "현장 이송 사례 분석",
      icon: FileText,
      desc: "중증응급환자 재이송(핑퐁 이송) 및 골든타임 초과 사례를 객관적 통계 자료 중심으로 분석"
    },
    {
      step: "03",
      title: "전문가 심층 인터뷰",
      icon: Users,
      desc: "현직 119 응급구급대원, 응급의학과 전문의 및 보건정책 전문가 대상 구조적 문제점 자문 수렴"
    },
    {
      step: "04",
      title: "시민 인식 및 경험 수집",
      icon: MessageSquareText,
      desc: "응급실 이용 경험 시민 대상 인식 자가 점검 및 적정 의료기관 이용에 대한 수용도 설문 수행"
    },
    {
      step: "05",
      title: "융합 정책 대안 도출",
      icon: Lightbulb,
      desc: "간호학적 현장 이송 인계 관점과 정책학적 제도 실현 가능성을 종합한 5대 정책 패키지 확정"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        <div className="bg-navy-900 text-white p-5 flex items-center justify-between border-b border-navy-700">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-brand-blue flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">CODE BLUE 연구 및 조사 과정</h3>
              <p className="text-xs text-slate-300">간호학 × 정책학 융합 연구 방법론</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 bg-slate-50">
          {processSteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 font-extrabold text-sm border border-blue-100">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-bold text-base text-navy-900 mb-1 flex items-center gap-2">
                    <Icon className="w-4 h-4 text-brand-blue" />
                    <span>{item.title}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 bg-white border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm transition-colors"
          >
            확인 및 닫기
          </button>
        </div>

      </div>
    </div>
  );
}
