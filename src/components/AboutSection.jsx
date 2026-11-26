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
      desc: "구급대와 응급실 간 사전·구두 인계 표준 서식 (환자정보, 사고기전, 손상부위, 생체징후, 처치내용, 알레르기, 약물, 과거력 등)."
    },
    {
      term: "재이송 (소위 핑퐁 이송)",
      desc: "수용 불가 통보 등으로 119 구급차가 치료 가능한 의료기관을 찾지 못하고 여러 병원을 전전하는 현상."
    },
    {
      term: "수용역량",
      desc: "단순 병상 수가 아니라, 환자 치료에 필요한 당직 전문의, 응급수술실, 중환자실의 실제 가동 여부."
    }
  ];

  return (
    <section id="about" className="py-14 md:py-20 bg-white text-zinc-900 min-h-screen font-sans border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header (Left-aligned) */}
        <div className="space-y-3 text-left border-b border-zinc-200 pb-6">
          <div className="text-xs font-mono font-bold text-zinc-500">SECTION 07 • 연구진 및 프로젝트 소개</div>
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-zinc-950 tracking-tight leading-snug">
            {PROJECT_CONFIG.fullAcademicTitle}
          </h2>
          <p className="text-sm sm:text-base text-zinc-700 font-medium">
            2026 한양학술타운 LION 프로젝트 • 팀 CODE BLUE
          </p>
        </div>

        {/* Project Meta Sheet (Editorial 2-Col Table) */}
        <div className="border border-zinc-300 bg-[#FAF9F5] p-6 text-left space-y-4">
          <div className="border-b border-zinc-200 pb-3">
            <span className="text-xs font-mono text-zinc-500 block mb-0.5">연구 과제 개요</span>
            <h3 className="font-serif font-bold text-base sm:text-lg text-zinc-950">
              {PROJECT_CONFIG.projectTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div>
              <span className="font-bold text-zinc-900 block mb-1">연구 목적</span>
              <p className="text-zinc-600 leading-relaxed">
                중증응급환자 이송 지연 원인을 의료진 사법 리스크와 배후 진료과 결손 관점에서 규명하고, 필수의료 전문인력 확보를 중심으로 한 실행 가능한 대안을 도출함.
              </p>
            </div>
            <div>
              <span className="font-bold text-zinc-900 block mb-1">연구 성격</span>
              <p className="text-zinc-600 leading-relaxed">
                간호학과의 응급실 임상 현장 분석과 정책학과의 보건의료 법·제도 설계를 결합한 학제 간 융합 정책 연구.
              </p>
            </div>
          </div>
        </div>

        {/* Team Members Table */}
        <div className="text-left space-y-3">
          <h3 className="font-serif font-bold text-base text-zinc-900">
            연구진 구성 및 세부 역할
          </h3>

          <div className="border border-zinc-200 overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm divide-y divide-zinc-200">
              <thead className="bg-[#FAF9F5] text-zinc-700 font-semibold">
                <tr>
                  <th className="py-2.5 px-4 w-1/4 border-r border-zinc-200">구분 / 성명</th>
                  <th className="py-2.5 px-4 w-1/4 border-r border-zinc-200">소속 학과</th>
                  <th className="py-2.5 px-4">담당 연구 역할</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 bg-white text-zinc-800">
                <tr>
                  <td className="py-3 px-4 font-bold border-r border-zinc-200 text-zinc-900">
                    김다은 · 김예나
                  </td>
                  <td className="py-3 px-4 border-r border-zinc-200">간호학과</td>
                  <td className="py-3 px-4 text-zinc-700 leading-relaxed">
                    응급의료 현장 관점 조사, 전문가 인터뷰 정리, 시민 안내 내용 검토
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold border-r border-zinc-200 text-zinc-900">
                    임채윤 · 노재은
                  </td>
                  <td className="py-3 px-4 border-r border-zinc-200">정책학과</td>
                  <td className="py-3 px-4 text-zinc-700 leading-relaxed">
                    법·제도 검토, 정책 구조와 실행방안 정리
                  </td>
                </tr>
                <tr className="bg-zinc-50/60 font-medium">
                  <td className="py-3 px-4 font-bold border-r border-zinc-200 text-zinc-900">
                    공동 역할
                  </td>
                  <td className="py-3 px-4 border-r border-zinc-200 text-zinc-500">연구팀 전체</td>
                  <td className="py-3 px-4 text-zinc-700 leading-relaxed">
                    {PROJECT_CONFIG.jointRole}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Deliverables with Direct Modal Trigger Links */}
        <div className="border border-zinc-300 bg-white p-6 text-left space-y-4">
          <div className="border-b border-zinc-200 pb-2">
            <h3 className="font-serif font-bold text-base text-zinc-900">
              최종 연구 산출물 (심사 자료)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="border border-zinc-200 p-3.5 space-y-2 bg-[#FAF9F5]">
              <span className="font-bold text-xs text-zinc-900 block">01. 학술 정책제안서</span>
              <p className="text-[11px] text-zinc-600">3대 핵심 정책과 초기 검토 과제를 포함한 전문 제안서</p>
              <button
                onClick={onOpenPdf}
                className="inline-flex items-center gap-1 text-xs font-bold text-zinc-900 hover:underline pt-1"
              >
                <FileText className="w-3 h-3" />
                <span>전문 열람 (PDF)</span>
              </button>
            </div>

            <div className="border border-zinc-200 p-3.5 space-y-2 bg-[#FAF9F5]">
              <span className="font-bold text-xs text-zinc-900 block">02. A0 학술 포스터</span>
              <p className="text-[11px] text-zinc-600">한양학술타운 LION 현장 발표용 고해상도 학술 인쇄물</p>
              <button
                onClick={onOpenPoster}
                className="inline-flex items-center gap-1 text-xs font-bold text-zinc-900 hover:underline pt-1"
              >
                <Image className="w-3 h-3" />
                <span>포스터 내용 보기</span>
              </button>
            </div>

            <div className="border border-zinc-200 p-3.5 space-y-2 bg-white">
              <span className="font-bold text-xs text-zinc-900 block">03. 최종 연구 보고서</span>
              <p className="text-[11px] text-zinc-600">이송 지연 원인 분석 및 법제도 개선 종합 연구서</p>
              <span className="text-[11px] text-zinc-500">인쇄본 제출 완료</span>
            </div>

            <div className="border border-zinc-200 p-3.5 space-y-2 bg-white">
              <span className="font-bold text-xs text-zinc-900 block">04. 웹 정책 브리프</span>
              <p className="text-[11px] text-zinc-600">시민 의견 수렴 및 심사용 반응형 인터랙티브 웹사이트</p>
              <span className="text-[11px] text-emerald-800 font-mono">study-eta-kohl.vercel.app</span>
            </div>
          </div>
        </div>

        {/* Glossary of Operational Terms */}
        <div className="text-left space-y-3 pt-2">
          <h3 className="font-serif font-bold text-base text-zinc-900">
            주요 용어의 작업적 정의
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {terms.map((t, idx) => (
              <div key={idx} className="border border-zinc-200 p-4 space-y-1 bg-[#FAF9F5]">
                <strong className="text-xs font-bold text-zinc-900 block">• {t.term}</strong>
                <p className="text-xs text-zinc-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Top Link */}
        <div className="pt-8 border-t border-zinc-200 flex justify-end">
          <button
            onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold rounded transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>처음으로 돌아가기</span>
          </button>
        </div>

      </div>
    </section>
  );
}
