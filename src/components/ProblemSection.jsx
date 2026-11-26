import React from 'react';
import { THREE_CORE_PROBLEMS, PROBLEM_SECTION_HEADER, ACCEPTANCE_DISTINCTION_NOTE } from '../data/policyData';
import { ArrowRight } from 'lucide-react';

export default function ProblemSection({ setActiveTab }) {
  return (
    <section id="problem" className="py-24 md:py-28 bg-white text-zinc-900 min-h-screen font-sans border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 text-left border-b border-zinc-200 pb-8">
          <div className="text-[13px] font-mono font-bold text-zinc-600">SECTION 01 • 현황 분석</div>
          
          {/* Core Sentence First (20px bold) */}
          <div className="text-[20px] font-bold text-zinc-950 leading-snug break-keep">
            “{PROBLEM_SECTION_HEADER.corePhrase}”
          </div>

          {/* Section Title (36~40px) */}
          <h2 className="font-serif font-bold text-[36px] sm:text-[40px] text-zinc-950 tracking-tight leading-[1.3] break-keep">
            {PROBLEM_SECTION_HEADER.title}
          </h2>
        </div>

        {/* Asymmetrical 2-Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 text-left">
          
          {/* Left Column: Marginalia Context (Max 2 marginalia per section) */}
          <div className="lg:col-span-4 space-y-4 border-l-2 border-zinc-950 pl-5 text-[15px] leading-[1.75] text-zinc-700 break-keep">
            <span className="font-bold text-zinc-950 block text-[17px]">진료 역량과 병상의 차이</span>
            <p>
              현행 「응급의료에 관한 법률」 제15조는 정보통신망 구축을 규정하고 있으나, 현장 구급대원이 조회하는 정보는 대부분 '단순 가용 병상 수'입니다.
            </p>
            <p>
              중증응급환자는 병상이 있어도 담당 수술 전문의나 중환자실 집중 치료 역량이 없으면 진료를 시작할 수 없습니다. 이로 인해 구급대원이 여러 병원에 전화를 반복하는 지연이 발생합니다.
            </p>
          </div>

          {/* Right Column: 3 Core Problems (Rows with Text >= 15px) */}
          <div className="lg:col-span-8 divide-y divide-zinc-200 border-y border-zinc-200">
            {THREE_CORE_PROBLEMS.map((problem) => (
              <div key={problem.id} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-baseline">
                <div className="md:col-span-4">
                  <span className="text-[13px] font-mono font-bold text-zinc-600 block mb-1">원인 0{problem.id}</span>
                  <h3 className="font-bold text-[17px] text-zinc-950 leading-snug break-keep">
                    {problem.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-[17px] text-zinc-800 leading-[1.75] font-normal break-keep">
                    {problem.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 2-Column Comparison Table (Max 1 Table per section) */}
        <div className="pt-4 text-left space-y-4">
          <div className="space-y-1.5 max-w-[640px]">
            <h3 className="text-[22px] font-semibold text-zinc-950 leading-snug break-keep">
              정당한 수용 불가와 부당한 수용 거부의 판단 기준
            </h3>
            <p className="text-[15px] text-zinc-700 leading-relaxed break-keep">
              {ACCEPTANCE_DISTINCTION_NOTE}
            </p>
          </div>

          {/* Mobile Scroll Hint */}
          <div className="sm:hidden text-[13px] text-zinc-600 font-medium">
            → 표를 가로로 넘겨서 전체 내용을 확인할 수 있습니다.
          </div>

          {/* Table (Min row height 56px, cells >= 15px) */}
          <div className="border border-zinc-300 overflow-x-auto">
            <table className="w-full text-left text-[15px] divide-y divide-zinc-200 min-w-[600px]">
              <thead className="bg-[#FAF9F5] text-zinc-800 font-semibold border-b border-zinc-300">
                <tr className="min-h-[56px]">
                  <th className="py-4 px-5 w-1/4 border-r border-zinc-200">구분</th>
                  <th className="py-4 px-5 w-3/8 border-r border-zinc-200">법적·상황적 정의</th>
                  <th className="py-4 px-5 w-3/8">현장 판단 기준</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 bg-white text-zinc-800">
                <tr className="min-h-[56px]">
                  <td className="py-4 px-5 font-bold border-r border-zinc-200 text-zinc-950 align-top">
                    정당한 수용 불가
                    <span className="block font-normal text-[13px] text-zinc-600 mt-0.5">응급의료법 제6조 단서</span>
                  </td>
                  <td className="py-4 px-5 border-r border-zinc-200 leading-[1.75] align-top text-zinc-800 break-keep">
                    의료기관이 가용 자원의 한계로 인해 해당 환자에게 적절한 응급의료를 제공할 수 없는 불가피한 상황
                  </td>
                  <td className="py-4 px-5 leading-[1.75] align-top text-zinc-700 break-keep">
                    해당 필수진료과 당직 전문의가 다른 응급수술 중이거나, 중환자실 및 필수 장비가 물리적으로 만석·고장인 경우
                  </td>
                </tr>
                <tr className="min-h-[56px]">
                  <td className="py-4 px-5 font-bold border-r border-zinc-200 text-zinc-950 align-top">
                    부당한 수용 거부
                    <span className="block font-normal text-[13px] text-zinc-600 mt-0.5">진료 거부 금지 위반</span>
                  </td>
                  <td className="py-4 px-5 border-r border-zinc-200 leading-[1.75] align-top text-zinc-800 break-keep">
                    환자를 수용해 진료할 수 있는 인력과 시설을 갖추고 있음에도 객관적 사유 없이 기피하는 행위
                  </td>
                  <td className="py-4 px-5 leading-[1.75] align-top text-zinc-700 break-keep">
                    진료 여력이 있으나 사후 분쟁이나 번거로움을 이유로 사유 기록 없이 구두로 수용을 거부하는 행위
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Next Section Navigation Link (Min height 44px) */}
        <div className="pt-8 border-t border-zinc-200 flex justify-end">
          <button
            onClick={() => { setActiveTab('issues'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="min-h-[44px] inline-flex items-center px-5 py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white text-[15px] font-semibold rounded transition-colors"
          >
            <span>2026 현안 보기</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

      </div>
    </section>
  );
}
