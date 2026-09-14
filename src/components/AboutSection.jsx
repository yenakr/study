import React from 'react';
import { PROJECT_CONFIG } from '../config';

export default function AboutSection() {
  const activities = [
    "문헌조사",
    "사례분석",
    "전문가 인터뷰",
    "시민 의견수집",
    "정책 대안 도출"
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-2">
            프로젝트 소개
          </h2>
          <p className="text-slate-600 text-sm font-semibold">
            {PROJECT_CONFIG.fullAcademicTitle}
          </p>
        </div>

        {/* Project Card */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 space-y-8">
          
          {/* Team Name & Majors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-semibold text-slate-400 block mb-1">
                팀명
              </span>
              <h3 className="text-xl font-extrabold text-navy-900">
                {PROJECT_CONFIG.teamName}
              </h3>
            </div>

            <div>
              <span className="text-xs font-semibold text-slate-400 block mb-1">
                참여 전공
              </span>
              <div className="text-lg font-bold text-brand-blue">
                {PROJECT_CONFIG.fullAcademicTitle}
              </div>
            </div>
          </div>

          {/* Key Question Callout */}
          <div className="bg-navy-900 text-white rounded-lg p-6 text-center">
            <p className="text-base sm:text-lg font-bold leading-relaxed">
              “중증응급환자가 적절한 시간 내 적절한 의료기관에 도착하려면 무엇이 달라져야 하는가?”
            </p>
          </div>

          {/* Activities */}
          <div>
            <span className="text-xs font-semibold text-slate-400 block mb-3">
              주요 활동
            </span>
            <div className="flex flex-wrap gap-2">
              {activities.map((act, idx) => (
                <span 
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200"
                >
                  {act}
                </span>
              ))}
            </div>
          </div>

          {/* Team Members List */}
          <div className="pt-4 border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-400 block mb-3">
              팀원
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PROJECT_CONFIG.teamMembers.map((member, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center font-bold text-navy-900 text-sm"
                >
                  {member.name}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
