import React from 'react';
import { PROJECT_CONFIG } from '../config';
import { BookOpen, Users, FileText, CheckCircle2, Award } from 'lucide-react';

export default function AboutSection() {
  const terms = [
    {
      term: "KTAS (Korean Triage and Acuity Scale)",
      desc: "한국형 응급환자 분류도구. 도착 순서가 아닌 중증도와 긴급도에 따라 1~5단계로 진료 우선순위를 정하는 분류체계."
    },
    {
      term: "IMIST-AMBO",
      desc: "구급대와 응급실 간 사전·구두 인계 표준 서식 (환자정보, 사고기전, 손상부위, 생체징후, 처치내용, 알레르기, 약물, 과거력 등)."
    },
    {
      term: "재이송 (소위 핑퐁 이송)",
      desc: "수용 불가 통보 등으로 119 구급차가 치료 가능한 의료기관을 찾지 못하고 여러 병원을 전전하는 현상."
    },
    {
      term: "수용역량",
      desc: "단순 병상 수가 아니라, 환자 치료에 필요한 당직 전문의, 수술실, 중환자실의 실제 가동 여부."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-slate-50 text-slate-900 border-t border-slate-200 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
            프로젝트 소개
          </h2>
          <p className="text-slate-600 text-sm font-semibold">
            {PROJECT_CONFIG.fullAcademicTitle} • 2026 한양학술타운 LION
          </p>
        </div>

        {/* Project Overview Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-semibold text-slate-400 block mb-1">팀명</span>
              <h3 className="text-xl font-extrabold text-navy-900">{PROJECT_CONFIG.teamName}</h3>
              <p className="text-xs text-brand-blue font-bold mt-0.5">간호학과 × 정책학과</p>
            </div>
            <div className="md:col-span-2">
              <span className="text-xs font-semibold text-slate-400 block mb-1">연구 과제명</span>
              <div className="text-base font-bold text-navy-900 leading-snug">
                {PROJECT_CONFIG.projectTitle}
              </div>
            </div>
          </div>

          {/* Team Roles */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-navy-900 flex items-center gap-2">
              <Users className="w-4 h-4 text-brand-blue" />
              <span>연구진 및 역할</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nursing Team */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-navy-900 text-base">간호학과</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-brand-blue">
                    김다은 · 김예나
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  응급의료 현장 관점 조사, 전문가 인터뷰 정리, 시민 안내 내용 검토
                </p>
              </div>

              {/* Policy Team */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-navy-900 text-base">정책학과</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                    임채윤 · 노재은
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  법·제도 검토, 정책 구조와 실행방안 정리
                </p>
              </div>
            </div>

            {/* Joint Role */}
            <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-800">
                <span className="font-bold text-brand-blue">공동 역할: </span>
                <span>{PROJECT_CONFIG.jointRole}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology & Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Methodology */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-navy-900 flex items-center gap-2 border-l-4 border-brand-blue pl-3">
              <BookOpen className="w-4 h-4 text-brand-blue" />
              <span>연구 방법</span>
            </h3>

            <div className="space-y-2 pt-1">
              {PROJECT_CONFIG.methodology.map((m, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="font-medium">{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-navy-900 flex items-center gap-2 border-l-4 border-brand-blue pl-3">
              <Award className="w-4 h-4 text-brand-blue" />
              <span>최종 결과물</span>
            </h3>

            <div className="space-y-2 pt-1">
              {PROJECT_CONFIG.deliverables.map((d, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-navy-900 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <FileText className="w-4 h-4 text-brand-blue shrink-0" />
                  <span className="font-bold">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Operational Terms Definition */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-navy-900 flex items-center gap-2 border-l-4 border-brand-blue pl-3">
            <BookOpen className="w-4 h-4 text-brand-blue" />
            <span>주요 용어 정리</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {terms.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <strong className="text-navy-900 font-bold text-xs sm:text-sm block">{item.term}</strong>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
