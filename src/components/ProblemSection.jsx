import React from 'react';
import { THREE_CORE_PROBLEMS, PROBLEM_SECTION_HEADER, ACCEPTANCE_DISTINCTION_NOTE } from '../data/policyData';
import { ArrowRight } from 'lucide-react';

export default function ProblemSection({ setActiveTab }) {
  return (
    <section id="problem" className="py-14 md:py-20 bg-white text-zinc-900 min-h-screen font-sans border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Editorial Section Header (Left-aligned) */}
        <div className="space-y-3 text-left border-b border-zinc-200 pb-6">
          <div className="text-xs font-mono font-bold text-zinc-500">SECTION 01 • 현황 분석</div>
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-zinc-950 tracking-tight leading-snug">
            {PROBLEM_SECTION_HEADER.title}
          </h2>
          <p className="text-base font-bold text-zinc-800">
            “{PROBLEM_SECTION_HEADER.corePhrase}”
          </p>
        </div>

        {/* Asymmetrical 2-Column: Marginalia / Core Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 text-left">
          
          {/* Left Column: Context & Legal Basis Note (4 cols) */}
          <div className="lg:col-span-4 space-y-4 border-l-2 border-zinc-900 pl-4 text-xs leading-relaxed text-zinc-600">
            <span className="font-bold text-zinc-900 block text-sm">진료 역량과 병상의 괴리</span>
            <p>
              현행 「응급의료에 관한 법률」 제15조는 응급의료정보통신망 구축을 규정하고 있으나, 현장 구급대원이 전산망에서 확인하는 숫자는 대부분 '단순 가용 병상 수'입니다.
            </p>
            <p>
              중증응급환자(KTAS 1~2단계)는 병상이 있어도 담당 수술 전문의나 중환자실 집중 치료 역량이 없으면 진료를 개시할 수 없습니다. 이로 인해 119 구급대원이 복수의 병원에 유선 확인을 반복하는 구조적 지연이 발생합니다.
            </p>
          </div>

          {/* Right Column: 3 Core Problems (8 cols, Structured Editorial Rows) */}
          <div className="lg:col-span-8 divide-y divide-zinc-200 border-y border-zinc-200">
            {THREE_CORE_PROBLEMS.map((problem) => (
              <div key={problem.id} className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-baseline">
                <div className="md:col-span-4">
                  <span className="text-xs font-mono font-bold text-zinc-400 block mb-0.5">원인 0{problem.id}</span>
                  <h3 className="font-bold text-sm sm:text-base text-zinc-900">
                    {problem.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    {problem.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 2-Column Comparison Table: '정당한 수용 불가' vs '부당한 수용 거부' */}
        <div className="pt-4 text-left space-y-4">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-base text-zinc-900">
              판단 기준의 명확화: 정당한 수용 불가와 부당한 수용 거부
            </h3>
            <p className="text-xs text-zinc-600">
              {ACCEPTANCE_DISTINCTION_NOTE}
            </p>
          </div>

          <div className="border border-zinc-200 overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm divide-y divide-zinc-200">
              <thead className="bg-[#FAF9F5] text-zinc-700 font-semibold">
                <tr>
                  <th className="py-3 px-4 w-1/4 border-r border-zinc-200">구분</th>
                  <th className="py-3 px-4 w-3/8 border-r border-zinc-200">법적·상황적 정의</th>
                  <th className="py-3 px-4 w-3/8">현장 발생 사례 및 판단 기준</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 bg-white text-zinc-800">
                <tr>
                  <td className="py-3.5 px-4 font-bold border-r border-zinc-200 text-zinc-900">
                    정당한 수용 불가
                    <span className="block font-normal text-[11px] text-zinc-500">응급의료법 제6조 단서</span>
                  </td>
                  <td className="py-3.5 px-4 border-r border-zinc-200 leading-relaxed">
                    의료기관이 가용 자원의 한계로 인해 해당 환자에게 적절한 응급의료를 제공할 수 없는 불가피한 상황
                  </td>
                  <td className="py-3.5 px-4 leading-relaxed text-zinc-600">
                    해당 필수진료과 당직 전문의가 다른 응급수술 집도 중이거나, 중환자실 병상 및 필수 장비(혈관조영기 등)가 물리적으로 고장·만석인 경우
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold border-r border-zinc-200 text-zinc-900">
                    부당한 수용 거부
                    <span className="block font-normal text-[11px] text-zinc-500">진료 거부 금지 위반</span>
                  </td>
                  <td className="py-3.5 px-4 border-r border-zinc-200 leading-relaxed">
                    환자를 수용해 진료할 수 있는 인력과 시설을 갖추고 있음에도 객관적 사유 없이 환자를 기피하는 행위
                  </td>
                  <td className="py-3.5 px-4 leading-relaxed text-zinc-600">
                    진료 여력이 있으나 사후 분쟁이나 까다로운 처치를 이유로 사유 기록 없이 구두로 수용을 거부하는 행위
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Next Section Navigation Link */}
        <div className="pt-6 border-t border-zinc-200 flex justify-end">
          <button
            onClick={() => { setActiveTab('issues'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold rounded transition-colors"
          >
            <span>다음: 2. 2026 주요 이슈 보기</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
