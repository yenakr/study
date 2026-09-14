import React from 'react';
import { Users, GraduationCap, Compass, HelpCircle, CheckCircle2 } from 'lucide-react';
import { PROJECT_CONFIG } from '../config';

export default function AboutSection() {
  const activities = [
    "문헌조사 및 제도 분석",
    "이송 지연 사례 분석",
    "전문가 심층 인터뷰",
    "시민 의견수집 및 설문",
    "정책 대안 도출"
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>학술 프로젝트 소개</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-2">
            프로젝트 소개
          </h2>
          <p className="text-slate-600 text-sm">
            {PROJECT_CONFIG.academicTitle}
          </p>
        </div>

        {/* Project Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
          
          {/* Team Name & Majors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                TEAM NAME
              </span>
              <h3 className="text-2xl font-black text-navy-900 flex items-center gap-2">
                <span>{PROJECT_CONFIG.teamName}</span>
              </h3>
            </div>

            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                DISCIPLINE / MAJORS
              </span>
              <div className="text-lg font-bold text-brand-blue flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-brand-blue" />
                <span>{PROJECT_CONFIG.majors}</span>
              </div>
            </div>
          </div>

          {/* Key Question Highlight Banner */}
          <div className="bg-navy-900 text-white rounded-xl p-6 text-center shadow-md">
            <span className="text-xs font-bold text-brand-lightblue uppercase tracking-wider block mb-2">
              CORE QUESTION
            </span>
            <blockquote className="text-lg sm:text-xl font-extrabold leading-snug">
              “중증응급환자가 적절한 시간 내 적절한 의료기관에 도착하려면<br className="hidden sm:block" />
              무엇이 달라져야 하는가?”
            </blockquote>
          </div>

          {/* Activities Badges */}
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
              RESEARCH ACTIVITIES
            </span>
            <div className="flex flex-wrap gap-2.5">
              {activities.map((act, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
                  <span>{act}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team Members List */}
          <div className="pt-4 border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
              TEAM MEMBERS
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PROJECT_CONFIG.teamMembers.map((member, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-center font-bold text-navy-900 text-sm"
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
