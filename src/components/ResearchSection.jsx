import React from 'react';
import { RESEARCH_TIMELINE, SHIFT_REASON } from '../data/policyData';
import { Calendar, Lightbulb, Users, ArrowRight } from 'lucide-react';

export default function ResearchSection({ setActiveTab }) {
  return (
    <section id="research" className="py-16 md:py-20 bg-white text-slate-900 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-black text-navy-900 tracking-tight">
            연구 추진 과정
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            문헌 고찰, 서울아산병원 응급실 전문간호사 인터뷰, 법제도 분석을 거쳐 정리한 연구 과정입니다.
          </p>
        </div>

        {/* Monthly Timeline */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2 font-bold text-navy-900 text-base sm:text-lg border-b border-slate-200 pb-4">
            <Calendar className="w-5 h-5 text-brand-blue" />
            <span>월별 진행 과정 (2026년 5월 ~ 11월)</span>
          </div>

          <div className="relative border-l-2 border-brand-blue/30 ml-3 sm:ml-4 space-y-7 pl-6 sm:pl-8 py-2">
            {RESEARCH_TIMELINE.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-brand-blue" />
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-navy-900 text-white font-bold text-xs">
                      {item.month}
                    </span>
                    <h3 className="text-base font-bold text-navy-900">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Policy Shifted Callout */}
        <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-brand-blue font-bold text-base">
            <Lightbulb className="w-5 h-5 text-brand-blue shrink-0" />
            <span>{SHIFT_REASON.title}</span>
          </div>

          <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
            {SHIFT_REASON.content}
          </p>
        </div>

        {/* Interview Methodology Note */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2 font-bold text-navy-900 text-base">
            <Users className="w-5 h-5 text-brand-blue shrink-0" />
            <span>전문가 인터뷰 내용</span>
          </div>

          <div className="space-y-2 text-xs sm:text-sm text-slate-700">
            <p className="leading-relaxed">
              <strong>• 대상:</strong> 서울아산병원 응급실 전문간호사
            </p>
            <p className="leading-relaxed">
              <strong>• 내용:</strong> 119 구급대 도착 전 통보 정보의 활용도, 중증환자 수용 여부를 결정하는 배후 진료과 전문의 당직 현황, 병원 간 전원 의뢰 시 겪는 구조적 한계와 법적 부담 조사
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
