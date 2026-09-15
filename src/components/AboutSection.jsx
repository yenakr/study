import React from 'react';
import { PROJECT_CONFIG } from '../config';
import { BookOpen, Users, FileText, Award } from 'lucide-react';

export default function AboutSection() {
  const terms = [
    {
      term: "KTAS (Korean Triage and Acuity Scale)",
      desc: "한국형 응급환자 분류도구. 환자의 도착 순서가 아닌 중증도 및 긴급도에 따라 1~5단계로 진료 우선순위를 평가하는 시스템."
    },
    {
      term: "IMIST-AMBO",
      desc: "구급대와 응급실 간 사전·구두 인계 표준 서식 (Identification, Mechanism, Injuries, Signs, Treatment, Allergies, Medications, Background, Other)."
    },
    {
      term: "핑퐁 이송 (재이송 / 수용 거부)",
      desc: "응급실 수용 불가 통보로 인해 119 구급차가 적정 진료 병원을 찾지 못하고 복수의 의료기관을 전전하는 이송 지연 현상."
    },
    {
      term: "수용역량 (Treatment Capacity)",
      desc: "단순 응급실 병상 수가 아닌, 환자 치료에 필요한 당직 전문의, 응급수술실, 중환자실, 시술 장비의 실시간 실제 가동 상태."
    }
  ];

  const interviews = [
    {
      group: "119 응급구급대원 (N=5)",
      topic: "현장 중증도 평가의 한계, 병원 수용 문의 시 무응답 및 지연 경험, 도착 후 구두 인계 시 정보 누락 지점 조사"
    },
    {
      group: "응급의학과 전문의 및 당직 의사 (N=4)",
      topic: "당직 전문의 부재 및 수술실 만석 시 수용 판단 기준, 구급대 사전 통보의 실효성, 형사·민사적 법적 부담 조망"
    },
    {
      group: "보건정책 및 응급의료 연구원 (N=3)",
      topic: "응급의료법 제6조(거부금지)와 제48조의2(수용능력 확인)의 제도적 공백 및 24시간 전원조정 허브 법제화 구조 검토"
    }
  ];

  return (
    <section id="about" className="py-16 bg-slate-50 text-slate-900 border-t border-slate-200 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
            RESEARCH OVERVIEW & METHODOLOGY
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
            프로젝트 소개 및 학술 연구 방법론
          </h2>
          <p className="text-slate-600 text-sm font-semibold">
            {PROJECT_CONFIG.fullAcademicTitle}
          </p>
        </div>

        {/* Overview Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-semibold text-slate-400 block mb-1">팀명</span>
              <h3 className="text-xl font-extrabold text-navy-900">{PROJECT_CONFIG.teamName}</h3>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 block mb-1">연구 구분</span>
              <div className="text-base font-bold text-brand-blue">{PROJECT_CONFIG.fullAcademicTitle}</div>
            </div>
          </div>

          <div className="bg-navy-900 text-white rounded-xl p-6 text-center">
            <p className="text-base sm:text-lg font-extrabold leading-relaxed">
              “중증응급환자가 적절한 시간 내 적절한 의료기관에 도착하려면 무엇이 달라져야 하는가?”
            </p>
          </div>

          {/* Members */}
          <div className="pt-2">
            <span className="text-xs font-semibold text-slate-400 block mb-3">연구진 구성</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PROJECT_CONFIG.teamMembers.map((member, idx) => (
                <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center font-bold text-navy-900 text-sm">
                  {member.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Definition of Terms Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2 border-l-4 border-brand-blue pl-3">
            <BookOpen className="w-5 h-5 text-brand-blue" />
            <span>주요 용어의 작업적 정의 (Definition of Operational Terms)</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {terms.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <strong className="text-navy-900 font-bold text-sm block">• {item.term}</strong>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expert Interview Methodology */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2 border-l-4 border-brand-blue pl-3">
            <Users className="w-5 h-5 text-brand-blue" />
            <span>전문가 심층 인터뷰 조사 방법 (In-depth Expert Interviews)</span>
          </h3>

          <p className="text-slate-700 text-sm leading-relaxed">
            간호 현장과 보건 정책의 실질적 문제를 파악하기 위해 구급대원, 전문의, 정책 연구자 대상 반구조화된 인터뷰(Semi-structured Interview)를 실시하였습니다.
          </p>

          <div className="space-y-3 pt-2">
            {interviews.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-navy-900 text-sm block">{item.group}</span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong>조사 및 질적 분석 내용:</strong> {item.topic}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
