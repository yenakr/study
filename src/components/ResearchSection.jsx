import React from 'react';
import { RESEARCH_TIMELINE, SHIFT_REASON } from '../data/policyData';
import { Calendar, Compass, Lightbulb, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ResearchSection({ setActiveTab }) {
  return (
    <section id="research" className="py-16 bg-white text-slate-900 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
            RESEARCH TIMELINE & METHODOLOGY
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-navy-900 tracking-tight">
            연구 추진 과정 및 분석 타임라인
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            2026년 5월부터 11월까지 문헌 고찰, 서울아산병원 응급실 전문간호사 인터뷰, 법제도 분석을 거쳐 최종 3대 핵심 정책으로 발전시킨 연구 궤적입니다.
          </p>
        </div>

        {/* Monthly Timeline */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2 font-bold text-navy-900 text-lg border-b border-slate-200 pb-4">
            <Calendar className="w-5 h-5 text-brand-blue" />
            <span>월별 연구 진행 타임라인 (2026년 5월 ~ 11월)</span>
          </div>

          <div className="relative border-l-2 border-brand-blue/30 ml-3 sm:ml-4 space-y-8 pl-6 sm:pl-8 py-2">
            {RESEARCH_TIMELINE.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Node Bullet */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-brand-blue" />
                
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-navy-900 text-white font-black text-xs">
                      {item.month}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-navy-900">
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

        {/* Why Policy Shifted Callout (중요 요구사항) */}
        <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-2.5 text-brand-blue font-extrabold text-lg">
            <Lightbulb className="w-6 h-6 text-brand-blue shrink-0" />
            <span>{SHIFT_REASON.title}</span>
          </div>

          <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
            {SHIFT_REASON.content}
          </p>

          <div className="pt-2 flex justify-end">
            <button
              onClick={() => { setActiveTab('policy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center text-xs sm:text-sm font-bold text-brand-blue hover:text-blue-700 transition-colors"
            >
              <span>최종 3대 정책 과제 확인하기</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Interview Methodology Note */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 font-bold text-navy-900 text-base">
            <Users className="w-5 h-5 text-brand-blue shrink-0" />
            <span>현장 전문가 심층 인터뷰 개요</span>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-slate-700">
            <p className="leading-relaxed">
              <strong>• 주요 인터뷰 대상:</strong> 서울아산병원 응급실 전문간호사 및 응급의료 현장 실무진
            </p>
            <p className="leading-relaxed">
              <strong>• 주요 확인 내용:</strong> 119 구급대 도착 전 통보 정보의 실제 진료 준비 활용도, 중증환자 수용 여부를 결정하는 배후 진료과(외과, 신경외과, 흉부외과 등) 전문의 당직 현황, 병원 간 전원 의뢰 시 겪는 구조적 한계와 법적 부담
            </p>
            <p className="leading-relaxed">
              <strong>• 연구 기여:</strong> 정보망을 아무리 전산화해도 실제 메스를 잡을 전문의가 없으면 환자를 받을 수 없다는 현장 피드백을 수용하여, 정책의 무게중심을 '정보통신망'에서 '필수의료 인력 확보'로 전환하는 핵심 근거가 되었습니다.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
