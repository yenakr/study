import React from 'react';
import { RESEARCH_TIMELINE, SHIFT_REASON } from '../data/policyData';
import { ArrowRight } from 'lucide-react';

export default function ResearchSection({ setActiveTab }) {
  return (
    <section id="research" className="py-24 sm:py-28 bg-white text-zinc-900 min-h-screen font-sans border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header (Left-aligned) */}
        <div className="space-y-4 text-left border-b border-zinc-200 pb-8">
          <div className="text-[13px] font-mono font-bold text-zinc-600 uppercase tracking-widest">
            SECTION 03 • 연구 방법 및 타임라인
          </div>
          
          {/* 핵심 한 문장 (20px bold) */}
          <p className="text-[20px] font-bold text-zinc-950 leading-snug break-keep">
            정보 전달 체계 정비에서 배후 필수진료과 전문의 인력 확보로 연구 방향을 전환했습니다.
          </p>

          <h2 className="text-[36px] sm:text-[40px] font-serif font-bold text-zinc-950 tracking-tight leading-tight break-keep">
            연구 추진 과정 및 방법론
          </h2>

          <p className="text-[17px] md:text-[18px] text-zinc-800 leading-[1.75] font-normal break-keep max-w-[640px]">
            2026년 5월부터 11월까지 진행된 문헌 고찰, 현장 실무자 심층 인터뷰, 법제도 분석을 거쳐 현장 중심의 정책 대안을 도출했습니다.
          </p>
        </div>

        {/* Timeline Table (1 Table per section rule) */}
        <div className="text-left space-y-4">
          <h3 className="text-[22px] font-semibold text-zinc-950 break-keep">
            월별 연구 진행 기록
          </h3>

          <p className="text-[13px] text-zinc-600 block md:hidden">
            → 표를 가로로 넘겨서 전체 내용을 확인할 수 있습니다
          </p>

          <div className="border border-zinc-200 bg-white overflow-x-auto">
            <table className="w-full text-left text-[15px] divide-y divide-zinc-200">
              <thead className="bg-zinc-50 text-zinc-900 font-semibold border-b border-zinc-200">
                <tr>
                  <th className="py-4 px-4 sm:px-6 w-28 border-r border-zinc-200 font-mono">시기</th>
                  <th className="py-4 px-4 sm:px-6 w-1/3 border-r border-zinc-200">연구 단계 및 주요 과업</th>
                  <th className="py-4 px-4 sm:px-6">세부 분석 내용 및 연구 산출물</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 text-zinc-800">
                {RESEARCH_TIMELINE.map((item, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-mono font-bold border-r border-zinc-200 text-zinc-950 whitespace-nowrap align-top">
                      {item.month}
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-bold border-r border-zinc-200 text-zinc-950 leading-relaxed align-top">
                      {item.title}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-zinc-700 leading-relaxed align-top">
                      {item.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2-Column Editorial Box: Shift Reason & Interview Focus */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          
          {/* Shift Reason Memo (7 cols) */}
          <div className="md:col-span-7 border border-zinc-300 bg-white p-6 sm:p-8 space-y-4">
            <div className="border-b border-zinc-200 pb-3">
              <span className="text-[13px] font-bold text-zinc-600 uppercase tracking-wide block">
                연구 범위 조정 배경
              </span>
              <h4 className="text-[20px] font-semibold text-zinc-950 mt-1">
                {SHIFT_REASON.title}
              </h4>
            </div>
            <p className="text-[15px] text-zinc-700 leading-relaxed break-keep">
              {SHIFT_REASON.content}
            </p>
          </div>

          {/* Expert Interview Methodology (5 cols) */}
          <div className="md:col-span-5 border border-zinc-300 bg-white p-6 sm:p-8 space-y-4">
            <div className="border-b border-zinc-200 pb-3">
              <span className="text-[13px] font-bold text-zinc-600 uppercase tracking-wide block">
                현장 전문가 심층 인터뷰
              </span>
              <h4 className="text-[20px] font-semibold text-zinc-950 mt-1">
                서울아산병원 응급실 전문간호사 자문
              </h4>
            </div>
            <ul className="text-[15px] text-zinc-700 space-y-3 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-zinc-950 font-bold shrink-0">•</span>
                <span>119 구급대의 도착 전 사전 통보 정보가 응급실 진료 준비에 실제로 미치는 영향 분석</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-zinc-950 font-bold shrink-0">•</span>
                <span>중증환자 수용 여부를 결정하는 외과·신경외과 등 배후 진료과 당직 인력의 한계 파악</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-zinc-950 font-bold shrink-0">•</span>
                <span>정보 공유 시스템 고도화보다 '수술할 의사 상주'가 더 본질적인 병목임을 실증적으로 확인</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Next Section Navigation Link */}
        <div className="pt-8 border-t border-zinc-200 flex justify-end">
          <button
            onClick={() => { setActiveTab('policy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center min-h-[44px] px-6 py-3 bg-zinc-950 hover:bg-zinc-800 text-white text-[15px] font-semibold rounded-[2px] transition-colors gap-2"
          >
            <span>3대 정책 보기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
