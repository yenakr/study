import React from 'react';
import { PROJECT_CONFIG } from '../config';
import { ArrowUp, FileText, Image } from 'lucide-react';

export default function AboutSection({ onOpenPdf, onOpenPoster, setActiveTab }) {
  const terms = [
    {
      term: "KTAS (Korean Triage and Acuity Scale)",
      desc: "한국형 응급환자 분류도구. 도착 순서가 아니라 환자의 중증도와 긴급도에 따라 1~5단계로 진료 우선순위를 정하는 분류체계."
    },
    {
      term: "IMIST-AMBO",
      desc: "구급대와 응급실 간 사전 통보 및 구두 인계 표준 서식으로 환자정보, 사고기전, 손상부위, 생체징후, 처치내용, 알레르기, 약물, 과거력 등을 포함함."
    },
    {
      term: "응급환자 재이송 (Re-triage)",
      desc: "수용 불가 통보 등으로 119 구급차가 치료 가능한 의료기관을 즉시 찾지 못하고 여러 병원을 연속 탐색·이송하는 현상."
    },
    {
      term: "수용역량",
      desc: "단순 병상 수가 아니라, 환자 질환 치료에 필요한 당직 전문의, 응급수술실, 중환자실의 실질적 가동 여부."
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-28 bg-white text-zinc-900 min-h-screen font-sans border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header (Left-aligned) */}
        <div className="space-y-4 text-left border-b border-zinc-200 pb-8">
          <div className="text-[13px] font-mono font-bold text-[#0B3CFF] uppercase tracking-widest">
            SECTION 07 • 연구진 및 프로젝트 소개
          </div>

          {/* 핵심 한 문장 (20px bold) */}
          <p className="text-[20px] font-bold text-zinc-950 leading-snug break-keep">
            간호학의 임상 현장 분석과 정책학의 법·제도 설계를 결합한 학제 간 융합 연구입니다.
          </p>

          <h2 className="text-[36px] sm:text-[40px] font-serif font-bold text-zinc-950 tracking-tight leading-tight break-keep">
            {PROJECT_CONFIG.fullAcademicTitle}
          </h2>

          <p className="text-[17px] md:text-[18px] text-zinc-800 leading-[1.75] font-normal break-keep max-w-[640px]">
            2026 한양학술타운 LION 프로젝트 • 팀 CODE BLUE
          </p>
        </div>

        {/* Project Meta Sheet */}
        <div className="border border-zinc-300 bg-white p-6 sm:p-8 text-left space-y-6">
          <div className="border-b border-zinc-200 pb-4">
            <span className="text-[13px] font-mono font-bold text-zinc-600 uppercase tracking-wide block mb-1">연구 과제 개요</span>
            <h3 className="text-[22px] font-semibold text-zinc-950 break-keep">
              {PROJECT_CONFIG.projectTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[15px]">
            <div className="space-y-1.5">
              <span className="font-bold text-zinc-950 block">연구 목적</span>
              <p className="text-zinc-700 leading-relaxed break-keep">
                중증응급환자 이송 지연 원인을 의료진 사법 리스크와 배후 진료과 결손 관점에서 규명하고, 필수의료 전문인력 확보를 중심으로 한 실행 가능한 대안을 도출함.
              </p>
            </div>
            <div className="space-y-1.5">
              <span className="font-bold text-zinc-950 block">연구 성격</span>
              <p className="text-zinc-700 leading-relaxed break-keep">
                간호학과의 응급실 임상 현장 분석과 정책학과의 보건의료 법·제도 설계를 결합한 학제 간 융합 정책 연구.
              </p>
            </div>
          </div>
        </div>

        {/* Team Members Table (1 Table per section) */}
        <div className="text-left space-y-4">
          <h3 className="text-[22px] font-semibold text-zinc-950">
            연구진 구성 및 세부 역할
          </h3>

          <p className="text-[13px] text-zinc-600 block md:hidden">
            → 표를 가로로 넘겨서 전체 내용을 확인할 수 있습니다
          </p>

          <div className="border border-zinc-200 bg-white overflow-x-auto">
            <table className="w-full text-left text-[15px] divide-y divide-zinc-200">
              <thead className="bg-zinc-50 text-zinc-900 font-semibold border-b border-zinc-200">
                <tr>
                  <th className="py-4 px-4 sm:px-6 w-1/4 border-r border-zinc-200">구분 / 성명</th>
                  <th className="py-4 px-4 sm:px-6 w-1/4 border-r border-zinc-200">소속 학과</th>
                  <th className="py-4 px-4 sm:px-6">담당 연구 역할</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 text-zinc-800">
                <tr className="hover:bg-zinc-50 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-bold border-r border-zinc-200 text-zinc-950 align-top">
                    김다은 · 김예나
                  </td>
                  <td className="py-4 px-4 sm:px-6 border-r border-zinc-200 text-zinc-900 align-top">
                    간호학과
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-zinc-700 leading-relaxed align-top break-keep">
                    응급의료 현장 관점 조사, 전문가 인터뷰 정리, 시민 안내 내용 검토
                  </td>
                </tr>
                <tr className="hover:bg-zinc-50 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-bold border-r border-zinc-200 text-zinc-950 align-top">
                    임채윤 · 노재은
                  </td>
                  <td className="py-4 px-4 sm:px-6 border-r border-zinc-200 text-zinc-900 align-top">
                    정책학과
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-zinc-700 leading-relaxed align-top break-keep">
                    보건의료 법·제도 검토, 정책 구조와 실행방안 정리
                  </td>
                </tr>
                <tr className="hover:bg-zinc-50 transition-colors bg-zinc-50">
                  <td className="py-4 px-4 sm:px-6 font-bold border-r border-zinc-200 text-zinc-950 align-top">
                    공동 역할
                  </td>
                  <td className="py-4 px-4 sm:px-6 border-r border-zinc-200 text-zinc-700 align-top">
                    연구팀 전체
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-zinc-700 leading-relaxed align-top break-keep">
                    {PROJECT_CONFIG.jointRole}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Deliverables (No bracket in header) */}
        <div className="border border-zinc-300 bg-white p-6 sm:p-8 text-left space-y-6">
          <div className="border-b border-zinc-200 pb-3">
            <h3 className="text-[22px] font-semibold text-zinc-950">
              최종 연구 산출물
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-zinc-300 p-5 space-y-3 bg-zinc-50 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="font-bold text-[17px] text-zinc-950 block">01. 학술 정책제안서</span>
                <p className="text-[15px] text-zinc-700 leading-relaxed">3대 핵심 정책과 제도 분석을 포함한 공식 제안서</p>
              </div>
              <button
                onClick={onOpenPdf}
                className="min-h-[44px] inline-flex items-center gap-2 text-[15px] font-bold text-[#0B3CFF] hover:underline pt-2"
              >
                <FileText className="w-4 h-4" />
                <span>정책제안서</span>
              </button>
            </div>

            <div className="border border-zinc-300 p-5 space-y-3 bg-zinc-50 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="font-bold text-[17px] text-zinc-950 block">02. 포스터</span>
                <p className="text-[15px] text-zinc-700 leading-relaxed">한양학술타운 LION 발표용 고해상도 인쇄물</p>
              </div>
              <button
                onClick={onOpenPoster}
                className="min-h-[44px] inline-flex items-center gap-2 text-[15px] font-bold text-[#0B3CFF] hover:underline pt-2"
              >
                <Image className="w-4 h-4" />
                <span>포스터</span>
              </button>
            </div>

            <div className="border border-zinc-300 p-5 space-y-3 bg-white flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="font-bold text-[17px] text-zinc-950 block">03. 최종 연구 보고서</span>
                <p className="text-[15px] text-zinc-700 leading-relaxed">이송 지연 원인 분석 및 법제도 개선 종합 연구서</p>
              </div>
              <span className="text-[15px] text-zinc-600 font-medium pt-2 block min-h-[44px] flex items-center">
                인쇄본 제출 완료
              </span>
            </div>

            <div className="border border-zinc-300 p-5 space-y-3 bg-white flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="font-bold text-[17px] text-zinc-950 block">04. 웹 정책 브리프</span>
                <p className="text-[15px] text-zinc-700 leading-relaxed">시민 의견 수렴 및 심사용 반응형 공식 웹사이트</p>
              </div>
              <span className="text-[15px] text-zinc-950 font-mono font-medium pt-2 block min-h-[44px] flex items-center">
                study-eta-kohl.vercel.app
              </span>
            </div>
          </div>
        </div>

        {/* Glossary of Operational Terms */}
        <div className="text-left space-y-4 pt-2">
          <h3 className="text-[22px] font-semibold text-zinc-950">
            주요 용어의 작업적 정의
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {terms.map((t, idx) => (
              <div key={idx} className="border border-zinc-300 p-6 space-y-2 bg-white">
                <strong className="text-[17px] font-bold text-zinc-950 block">• {t.term}</strong>
                <p className="text-[15px] text-zinc-700 leading-relaxed break-keep">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Top Link */}
        <div className="pt-8 border-t border-zinc-200 flex justify-end">
          <button
            onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center min-h-[44px] px-6 py-3 bg-[#0B3CFF] hover:bg-blue-700 text-white text-[15px] font-semibold rounded-[2px] transition-colors shadow-xs gap-2"
          >
            <ArrowUp className="w-4 h-4" />
            <span>처음으로 이동</span>
          </button>
        </div>

      </div>
    </section>
  );
}
