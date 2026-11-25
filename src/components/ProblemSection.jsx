import React from 'react';
import { THREE_CORE_PROBLEMS, PROBLEM_SECTION_HEADER, ACCEPTANCE_DISTINCTION_NOTE } from '../data/policyData';
import { AlertCircle, Scale, Building2, Repeat, Users, CheckCircle2 } from 'lucide-react';

export default function ProblemSection() {
  const icons = [Building2, Repeat, Users];

  return (
    <section id="problem" className="py-16 bg-white text-slate-900 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
            PROBLEM ANALYSIS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-navy-900 tracking-tight">
            {PROBLEM_SECTION_HEADER.title}
          </h2>
          <div className="pt-2">
            <span className="inline-block bg-blue-50 border border-blue-200 text-brand-blue px-4 py-2 rounded-xl text-base sm:text-lg font-extrabold shadow-xs">
              “{PROBLEM_SECTION_HEADER.corePhrase}”
            </span>
          </div>
        </div>

        {/* 3 Core Problems (3-Card Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {THREE_CORE_PROBLEMS.map((problem, idx) => {
            const Icon = icons[idx];
            return (
              <div 
                key={problem.id}
                className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center font-black">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-bold text-slate-400 block uppercase">
                    핵심 원인 0{problem.id}
                  </span>

                  <h3 className="text-lg font-black text-navy-900 leading-snug">
                    {problem.title}
                  </h3>

                  <p className="text-sm font-semibold text-slate-800 leading-relaxed bg-white p-3.5 rounded-xl border border-slate-200">
                    {problem.desc}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {problem.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legal & Medical Distinction Callout Banner */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2 text-navy-900 font-bold text-base">
            <Scale className="w-5 h-5 text-brand-blue shrink-0" />
            <span>'정당한 수용 불가'와 '부당한 수용 거부'의 구분이 필요한 이유</span>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed">
            {ACCEPTANCE_DISTINCTION_NOTE}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
            <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1">
              <strong className="text-slate-900 block font-bold">정당한 수용 불가</strong>
              <p className="text-slate-600">당직 전문의 수술 중, 중환자실 만석, 필수 장비 고장 등으로 적절한 응급처치를 제공할 수 없는 객관적 상황</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1">
              <strong className="text-slate-900 block font-bold">부당한 수용 거부</strong>
              <p className="text-slate-600">치료 역량이 갖추어져 있음에도 정당한 사유의 기록이나 전원 조정 절차 없이 환자를 기피하는 상황</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
