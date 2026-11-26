import React from 'react';
import { X, Download } from 'lucide-react';
import { PROJECT_CONFIG } from '../config';
import { generatePolicyPDF } from '../utils/pdfGenerator';
import { CORE_3_POLICIES, INITIAL_5_PROPOSALS } from '../data/policyData';

export default function PdfPreviewModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-xs font-sans text-left"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdf-modal-title"
    >
      <div className="bg-white max-w-4xl w-full max-h-[90vh] flex flex-col border border-zinc-300 shadow-xl overflow-hidden">
        
        {/* Document Header Bar */}
        <div className="bg-[#FAF9F5] p-4 sm:p-5 flex items-center justify-between border-b border-zinc-200 shrink-0">
          <div>
            <span className="font-mono text-xs text-zinc-500 block">학술 정책 제안서 전문</span>
            <h3 id="pdf-modal-title" className="font-serif font-bold text-base text-zinc-950">
              2026 한양학술타운 LION 최종 정책제안서
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-zinc-500 hover:text-zinc-900 border border-zinc-300 rounded focus:outline-none"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Paper Document Layout */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#FAF9F5] text-zinc-900">
          
          {/* Formal Official Report Paper */}
          <div className="bg-white p-6 sm:p-10 border border-zinc-300 max-w-3xl mx-auto space-y-8">
            
            {/* Header Document Masthead */}
            <div className="border-b-2 border-zinc-900 pb-5 space-y-2">
              <span className="font-mono text-xs font-bold text-zinc-500 block">
                POLICY PROPOSAL REPORT • 2026 HANYANG LION
              </span>
              <h1 className="font-serif text-xl sm:text-2xl font-black text-zinc-950 leading-snug">
                중증응급환자 이송 지연 개선을 위한 3대 핵심 정책 제안서
              </h1>
              <p className="text-xs text-zinc-600">
                필수의료 전문인력 확보와 배후 진료체계 안정을 중심으로
              </p>
            </div>

            {/* Document Metadata Table */}
            <div className="border border-zinc-200 bg-[#FAF9F5] p-3.5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div>
                <span className="text-zinc-400 block font-mono">연구팀</span>
                <span className="font-bold text-zinc-900">{PROJECT_CONFIG.teamName}</span>
              </div>
              <div>
                <span className="text-zinc-400 block font-mono">참여 전공</span>
                <span className="font-bold text-zinc-900">간호학과 × 정책학과</span>
              </div>
              <div>
                <span className="text-zinc-400 block font-mono">연구진</span>
                <span className="font-bold text-zinc-900">김다은, 김예나, 임채윤, 노재은</span>
              </div>
              <div>
                <span className="text-zinc-400 block font-mono">발행 기관</span>
                <span className="font-bold text-zinc-900">한양학술타운 LION</span>
              </div>
            </div>

            {/* Report Content */}
            <div className="space-y-6 text-xs sm:text-sm leading-relaxed">
              
              <div className="space-y-1.5">
                <h3 className="font-serif font-bold text-sm text-zinc-900 border-b border-zinc-200 pb-1">
                  1. 연구 배경 및 정책 전환의 필요성
                </h3>
                <p className="text-zinc-700 leading-relaxed pt-1">
                  중증응급환자의 이송 지연은 단순히 응급실 병상 부족의 문제가 아니라, 해당 질환을 최종 수술하고 중환자실을 관리할 배후 전문의의 부재에서 기인합니다. 정보 전달 체계를 개선하더라도 최종 치료를 전담할 전문인력이 부족하면 수용 지연은 반복됩니다. 이에 본 연구팀은 필수의료 인력 확보와 배후 진료체계 구축을 중심축으로 하는 3대 핵심 정책을 제안합니다.
                </p>
              </div>

              {/* 3 Core Policies */}
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-sm text-zinc-900 border-b border-zinc-200 pb-1">
                  2. 3대 핵심 정책 과제
                </h3>

                {CORE_3_POLICIES.map((p, idx) => (
                  <div key={idx} className="border border-zinc-200 p-4 space-y-2 bg-[#FAF9F5]">
                    <div className="flex items-baseline gap-2 font-bold text-zinc-950">
                      <span className="font-mono text-xs text-zinc-500">[{p.code}]</span>
                      <h4 className="text-sm">{p.title}</h4>
                    </div>

                    <div className="space-y-1 text-xs text-zinc-700">
                      <p><strong>목표:</strong> {p.target}</p>
                      <p><strong>문제:</strong> {p.issue}</p>
                      <p><strong>운영방안:</strong> {p.operations.join(" / ")}</p>
                      {p.distinctionFromLocalDoctor && (
                        <p className="p-2 border border-zinc-200 bg-white text-zinc-600">{p.distinctionFromLocalDoctor}</p>
                      )}
                      <p><strong>기대효과:</strong> {p.effects.join(" ")}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Initial 5 Tasks Context */}
              <div className="space-y-1.5 pt-2">
                <h3 className="font-serif font-bold text-sm text-zinc-900 border-b border-zinc-200 pb-1">
                  3. 초기 검토 과제와 발전 과정
                </h3>
                <p className="text-zinc-600 text-xs leading-relaxed pt-1">
                  {INITIAL_5_PROPOSALS.notice}
                </p>
                <div className="space-y-1 text-xs text-zinc-600 pt-1">
                  {INITIAL_5_PROPOSALS.items.map((item, idx) => (
                    <div key={idx}>• <strong>{item.title}:</strong> {item.desc}</div>
                  ))}
                </div>
              </div>

              {/* Conclusion */}
              <div className="space-y-1.5 pt-2 border-t border-zinc-200">
                <h3 className="font-serif font-bold text-sm text-zinc-900">
                  4. 결론
                </h3>
                <p className="text-zinc-700 leading-relaxed text-xs">
                  응급환자가 길에서 헤매지 않도록 하기 위해서는 병상 수만 세는 관리에서 벗어나, 받을 수 있는 병원에 필요한 필수진료 전문의가 상주하도록 하는 제도적 전환이 선행되어야 합니다.
                </p>
              </div>

            </div>

            {/* Signature Footer */}
            <div className="pt-6 border-t-2 border-zinc-900 text-xs text-zinc-500 space-y-0.5">
              <p className="font-bold text-zinc-900">CODE BLUE 학술 연구팀 일동</p>
              <p>2026 한양학술타운 LION 프로젝트 최종 결과보고서</p>
            </div>

          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 bg-white border-t border-zinc-200 flex items-center justify-end gap-2.5 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-1.5 border border-zinc-300 text-zinc-700 font-semibold text-xs rounded hover:bg-zinc-50 transition-colors"
          >
            닫기
          </button>
          <button
            onClick={generatePolicyPDF}
            className="px-4 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs rounded transition-colors inline-flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>PDF 다운로드</span>
          </button>
        </div>

      </div>
    </div>
  );
}
