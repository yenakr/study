import React from 'react';
import { RESEARCH_TIMELINE, SHIFT_REASON } from '../data/policyData';
import { ArrowRight } from 'lucide-react';

export default function ResearchSection({ setActiveTab }) {
  return (
    <section id="research" className="py-14 md:py-20 bg-white text-zinc-900 min-h-screen font-sans border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header (Left-aligned) */}
        <div className="space-y-3 text-left border-b border-zinc-200 pb-6">
          <div className="text-xs font-mono font-bold text-zinc-500">SECTION 03 • 연구 방법 및 타임라인</div>
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-zinc-950 tracking-tight leading-snug">
            연구 추진 과정 및 방법론
          </h2>
          <p className="text-sm sm:text-base text-zinc-700 font-medium">
            2026년 5월부터 11월까지 진행된 문헌 고찰, 현장 실무자 심층 인터뷰, 법제도 분석 타임라인입니다.
          </p>
        </div>

        {/* Timeline as a Clean Academic Table */}
        <div className="text-left space-y-3">
          <h3 className="font-serif font-bold text-base text-zinc-900">
            월별 연구 진행 기록 (2026. 05. ~ 2026. 11.)
          </h3>

          <div className="border border-zinc-200 overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm divide-y divide-zinc-200">
              <thead className="bg-[#FAF9F5] text-zinc-700 font-semibold">
                <tr>
                  <th className="py-2.5 px-4 w-20 border-r border-zinc-200 font-mono">시기</th>
                  <th className="py-2.5 px-4 w-1/3 border-r border-zinc-200">연구 단계 및 주요 과업</th>
                  <th className="py-2.5 px-4">세부 분석 내용 및 연구 산출물</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 bg-white text-zinc-800">
                {RESEARCH_TIMELINE.map((item, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50/60 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold border-r border-zinc-200 text-zinc-900">
                      {item.month}
                    </td>
                    <td className="py-3 px-4 font-bold border-r border-zinc-200 text-zinc-900 leading-snug">
                      {item.title}
                    </td>
                    <td className="py-3 px-4 text-zinc-700 leading-relaxed">
                      {item.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2-Column Editorial Box: Shift Reason & Interview Focus */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-left">
          
          {/* Shift Reason Memo (7 cols) */}
          <div className="md:col-span-7 border border-zinc-300 bg-[#FAF9F5] p-6 space-y-3">
            <div className="border-b border-zinc-200 pb-2">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wide block">
                연구 범위 조정 배경
              </span>
              <h4 className="font-serif font-bold text-base text-zinc-950 mt-0.5">
                {SHIFT_REASON.title}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
              {SHIFT_REASON.content}
            </p>
          </div>

          {/* Expert Interview Methodology (5 cols) */}
          <div className="md:col-span-5 border border-zinc-200 bg-white p-6 space-y-3">
            <div className="border-b border-zinc-100 pb-2">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wide block">
                현장 전문가 심층 인터뷰
              </span>
              <h4 className="font-serif font-bold text-base text-zinc-950 mt-0.5">
                서울아산병원 응급실 전문간호사 자문
              </h4>
            </div>
            <ul className="text-xs text-zinc-600 space-y-2 leading-relaxed">
              <li>• 119 구급대의 도착 전 사전 통보 정보가 응급실 진료 준비에 실제로 미치는 영향 분석</li>
              <li>• 중증환자 수용 여부를 결정하는 외과·신경외과 등 배후 진료과 당직 인력의 한계 파악</li>
              <li>• 정보 공유 시스템 고도화보다 '수술할 의사 상주'가 더 본질적인 병목임을 실증적으로 확인</li>
            </ul>
          </div>

        </div>

        {/* Next Section Navigation Link */}
        <div className="pt-6 border-t border-zinc-200 flex justify-end">
          <button
            onClick={() => { setActiveTab('policy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold rounded transition-colors"
          >
            <span>다음: 4. CODE BLUE 3대 정책 보기</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
