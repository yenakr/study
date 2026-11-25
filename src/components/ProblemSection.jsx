import React from 'react';
import { THREE_CORE_PROBLEMS, PROBLEM_SECTION_HEADER, ACCEPTANCE_DISTINCTION_NOTE } from '../data/policyData';
import { Building2, Repeat, Users, Scale } from 'lucide-react';

export default function ProblemSection() {
  const icons = [Building2, Repeat, Users];

  return (
    <section id="problem" className="py-16 md:py-20 bg-white text-slate-900 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-black text-navy-900 tracking-tight">
            {PROBLEM_SECTION_HEADER.title}
          </h2>
          <div className="pt-1">
            <span className="inline-block bg-blue-50 border border-blue-200 text-brand-blue px-4 py-2 rounded-xl text-base sm:text-lg font-bold">
              “{PROBLEM_SECTION_HEADER.corePhrase}”
            </span>
          </div>
        </div>

        {/* 3 Core Problems (Clean Single-Card Layout, No Double Nesting) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {THREE_CORE_PROBLEMS.map((problem, idx) => {
            const Icon = icons[idx];
            return (
              <div 
                key={problem.id}
                className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-brand-blue flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-xs font-bold text-slate-400 block">
                    0{problem.id}
                  </span>

                  <h3 className="text-lg font-bold text-navy-900 leading-snug">
                    {problem.title}
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {problem.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legal & Medical Distinction Note */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-navy-900 font-bold text-base">
            <Scale className="w-5 h-5 text-brand-blue shrink-0" />
            <span>'정당한 수용 불가'와 '부당한 수용 거부'의 구분</span>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed">
            {ACCEPTANCE_DISTINCTION_NOTE}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 block font-bold">정당한 수용 불가</strong>
              <p className="text-slate-600 leading-relaxed">당직 전문의 수술 중, 중환자실 만석, 필수 장비 고장 등으로 적절한 응급처치를 제공할 수 없는 객관적 상황</p>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 block font-bold">부당한 수용 거부</strong>
              <p className="text-slate-600 leading-relaxed">치료 역량이 갖추어져 있음에도 정당한 사유의 기록이나 전원 조정 절차 없이 환자를 기피하는 상황</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
