import React from 'react';
import { X, Download, FileText } from 'lucide-react';
import { PROJECT_CONFIG } from '../config';
import { generatePolicyPDF } from '../utils/pdfGenerator';
import { CORE_3_POLICIES, INITIAL_5_PROPOSALS } from '../data/policyData';

export default function PdfPreviewModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-sm animate-fadeIn font-sans"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdf-modal-title"
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Document Header Bar */}
        <div className="bg-navy-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-navy-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-brand-blue flex items-center justify-center font-bold text-white text-sm">
              PDF
            </div>
            <div>
              <h3 id="pdf-modal-title" className="font-bold text-base text-white">
                최종 정책제안서 전문 미리보기
              </h3>
              <p className="text-xs text-slate-300">2026 한양학술타운 LION 프로젝트 학술 제안서</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 transition-colors focus:outline-none"
            aria-label="닫기"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Paper Document Layout */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-100 text-slate-900 font-sans">
          
          {/* Formal Official Report Paper */}
          <div className="bg-white p-8 sm:p-12 rounded-xl border border-slate-300 shadow-md max-w-3xl mx-auto space-y-8">
            
            {/* Header Official Seal */}
            <div className="border-b-2 border-navy-900 pb-6 text-center space-y-2">
              <span className="text-xs font-bold text-brand-blue tracking-widest uppercase block">
                POLICY PROPOSAL REPORT • 2026 HANYANG LION
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-navy-900 leading-tight">
                중증응급환자 이송 지연 개선을 위한 3대 핵심 정책 제안서
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 font-medium pt-1">
                필수의료 전문인력 확보와 배후 진료체계 안정을 중심으로
              </p>
            </div>

            {/* Document Metadata Table */}
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-slate-700">
              <div>
                <span className="text-slate-400 block font-semibold">연구 팀명</span>
                <span className="font-bold text-navy-900">{PROJECT_CONFIG.teamName}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">참여 전공</span>
                <span className="font-bold text-navy-900">{PROJECT_CONFIG.fullAcademicTitle}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">연구진</span>
                <span className="font-bold text-navy-900">김다은, 김예나, 임채윤, 노재은</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">발행 기관</span>
                <span className="font-bold text-navy-900">한양학술타운 LION</span>
              </div>
            </div>

            {/* Report Content */}
            <div className="space-y-8 text-sm leading-relaxed">
              
              <div className="space-y-2">
                <h3 className="text-base font-extrabold text-navy-900 flex items-center gap-2 border-l-4 border-navy-900 pl-3">
                  1. 연구 배경 및 정책 전환의 필요성
                </h3>
                <p className="text-slate-700 leading-relaxed text-justify pl-4">
                  중증응급환자의 이송 지연은 단순히 응급실 병상 부족의 문제가 아니라, 해당 질환을 최종 수술하고 중환자실을 관리할 전문의의 부재에서 기인합니다. 119와 병원 간 정보 전달을 개선하더라도 최종 치료를 전담할 필수진료과 전문인력이 부족하면 지연은 반복됩니다. 이에 본 연구팀은 필수의료 인력 확보와 배후 진료체계 구축을 중심축으로 하는 3대 핵심 정책을 제안합니다.
                </p>
              </div>

              {/* 3 Core Policies */}
              <div className="space-y-6">
                <h3 className="text-base font-extrabold text-navy-900 flex items-center gap-2 border-l-4 border-navy-900 pl-3">
                  2. 3대 핵심 정책 과제
                </h3>

                {CORE_3_POLICIES.map((p, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2 font-bold text-navy-900">
                      <span className="px-2 py-0.5 rounded bg-navy-900 text-white text-xs">
                        {p.code}
                      </span>
                      <h4 className="text-base">{p.title}</h4>
                    </div>

                    <div className="space-y-1.5 text-xs sm:text-sm pl-2">
                      <p><strong className="text-brand-blue">정책 목표:</strong> {p.target}</p>
                      <p><strong className="text-red-700">현행 문제:</strong> {p.issue}</p>
                      <p><strong className="text-slate-900">주요 운영 방안:</strong> {p.operations.join(" / ")}</p>
                      {p.distinctionFromLocalDoctor && (
                        <p className="text-slate-600 bg-white p-2 rounded border border-slate-200">{p.distinctionFromLocalDoctor}</p>
                      )}
                      <p><strong className="text-emerald-700">기대 효과:</strong> {p.effects.join(" ")}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Initial 5 Tasks Context */}
              <div className="space-y-2 pt-2">
                <h3 className="text-base font-extrabold text-navy-900 flex items-center gap-2 border-l-4 border-slate-400 pl-3">
                  3. 초기 검토 과제와 발전 과정
                </h3>
                <p className="text-slate-700 leading-relaxed text-justify pl-4 text-xs sm:text-sm">
                  {INITIAL_5_PROPOSALS.notice}
                </p>
                <div className="pl-4 space-y-1 text-xs text-slate-600">
                  {INITIAL_5_PROPOSALS.items.map((item, idx) => (
                    <div key={idx}>• <strong>{item.title}:</strong> {item.desc}</div>
                  ))}
                </div>
              </div>

              {/* Conclusion */}
              <div className="space-y-2 pt-4 border-t border-slate-200">
                <h3 className="text-base font-extrabold text-navy-900 flex items-center gap-2 border-l-4 border-navy-900 pl-3">
                  4. 결론
                </h3>
                <p className="text-slate-700 leading-relaxed text-justify pl-4">
                  응급환자가 길에서 헤매지 않도록 하기 위해서는 병상 수만 세는 관리에서 벗어나, 받을 수 있는 병원에 필요한 필수진료 전문의가 상주하도록 하는 제도적 전환이 선행되어야 합니다.
                </p>
              </div>

            </div>

            {/* Official Signature Footer */}
            <div className="pt-8 border-t-2 border-slate-200 text-center text-xs text-slate-500 space-y-1">
              <p className="font-bold text-navy-900 text-sm">CODE BLUE 학술 연구팀 일동</p>
              <p>2026 한양학술타운 LION 프로젝트 최종 결과보고서</p>
            </div>

          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-end gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors"
          >
            닫기
          </button>
          <button
            onClick={generatePolicyPDF}
            className="px-5 py-2 rounded-lg bg-brand-blue hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>PDF 다운로드</span>
          </button>
        </div>

      </div>
    </div>
  );
}
