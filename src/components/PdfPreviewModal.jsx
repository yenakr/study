import React from 'react';
import { X, Download } from 'lucide-react';
import { PROJECT_CONFIG } from '../config';
import { generatePolicyPDF } from '../utils/pdfGenerator';
import { CORE_3_POLICIES } from '../data/policyData';

export default function PdfPreviewModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs font-sans text-left"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdf-modal-title"
    >
      <div className="bg-white max-w-4xl w-full max-h-[90vh] flex flex-col border border-zinc-300 shadow-xl overflow-hidden">
        
        {/* Document Header Bar */}
        <div className="bg-zinc-50 p-5 sm:p-6 flex items-center justify-between border-b border-zinc-200 shrink-0">
          <div>
            <h3 id="pdf-modal-title" className="font-serif font-bold text-[20px] text-zinc-950">
              정책제안서 요약문
            </h3>
            <p className="text-[13px] text-zinc-500 mt-0.5">
              한양대학교 정책학과 간호학과 CODE BLUE
            </p>
          </div>
          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center text-zinc-600 hover:text-zinc-950 border border-zinc-300 rounded-[2px] focus:outline-none"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Paper Document Layout */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-zinc-900">
          
          <div className="bg-white p-6 sm:p-10 border border-zinc-200 max-w-3xl mx-auto space-y-8">
            
            {/* Header Document Masthead */}
            <div className="border-b-2 border-zinc-950 pb-6 space-y-2">
              <h1 className="font-serif text-[24px] sm:text-[28px] font-black text-zinc-950 leading-snug">
                중증응급환자 이송 지연 개선을 위한 3대 핵심 정책 제안서
              </h1>
              <p className="text-[15px] text-zinc-600 font-medium">
                필수의료 전문인력 확보와 배후 진료체계 안정을 중심으로
              </p>
            </div>

            {/* Document Metadata Table */}
            <div className="border border-zinc-200 bg-zinc-50 p-4 grid grid-cols-2 gap-4 text-[13px]">
              <div>
                <span className="text-zinc-500 block font-mono">연구팀</span>
                <span className="font-bold text-zinc-950 text-[15px]">CODE BLUE</span>
              </div>
              <div>
                <span className="text-zinc-500 block font-mono">소속</span>
                <span className="font-bold text-zinc-950 text-[15px]">한양대학교 정책학과 간호학과</span>
              </div>
            </div>

            {/* Report Content */}
            <div className="space-y-8 text-[15px] leading-relaxed">
              
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-[18px] text-zinc-950 border-b border-zinc-200 pb-1.5">
                  1. 연구 배경 및 정책 전환의 필요성
                </h3>
                <p className="text-zinc-700 leading-relaxed pt-1 break-keep">
                  중증응급환자의 이송 지연은 단순히 응급실 병상 부족의 문제가 아니라, 해당 질환을 최종 수술하고 중환자실을 관리할 배후 전문의의 부재에서 기인합니다. 정보 전달 체계를 개선하더라도 최종 치료를 전담할 전문인력이 부족하면 수용 지연은 반복됩니다. 이에 본 연구팀은 필수의료 인력 확보와 배후 진료체계 구축을 중심축으로 하는 3대 핵심 정책을 제안합니다.
                </p>
              </div>

              {/* 3 Core Policies */}
              <div className="space-y-6">
                <h3 className="font-serif font-bold text-[18px] text-zinc-950 border-b border-zinc-200 pb-1.5">
                  2. 3대 핵심 정책 과제
                </h3>

                {CORE_3_POLICIES.map((p, idx) => (
                  <div key={idx} className="border border-zinc-200 p-5 space-y-3 bg-zinc-50">
                    <div className="flex items-baseline gap-2 font-bold text-zinc-950">
                      <span className="font-mono text-[13px] text-zinc-500">[{p.code}]</span>
                      <h4 className="text-[17px]">{p.title}</h4>
                    </div>

                    <div className="space-y-2 text-[15px] text-zinc-700">
                      <p className="break-keep"><strong className="text-zinc-950">목표:</strong> {p.target}</p>
                      <p className="break-keep"><strong className="text-zinc-950">문제:</strong> {p.issue}</p>
                      <p className="break-keep"><strong className="text-zinc-950">운영방안:</strong> {p.operations.join(" / ")}</p>
                      <p className="break-keep"><strong className="text-zinc-950">기대효과:</strong> {p.effects.join(" ")}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Conclusion */}
              <div className="space-y-2 pt-2 border-t border-zinc-200">
                <h3 className="font-serif font-bold text-[18px] text-zinc-950">
                  3. 결론
                </h3>
                <p className="text-zinc-700 leading-relaxed text-[15px] break-keep">
                  응급환자가 길에서 헤매지 않도록 하기 위해서는 병상 수만 세는 관리에서 벗어나, 받을 수 있는 병원에 필요한 필수진료 전문의가 상주하도록 하는 제도적 전환이 선행되어야 합니다.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-5 bg-zinc-50 border-t border-zinc-200 flex items-center justify-end gap-3 shrink-0">
          <button
            onClick={onClose}
            className="min-h-[44px] px-5 py-2.5 border border-zinc-300 text-zinc-800 font-semibold text-[15px] rounded-[2px] hover:bg-white transition-colors"
          >
            닫기
          </button>
          <button
            onClick={generatePolicyPDF}
            className="min-h-[44px] px-5 py-2.5 bg-[#0052FF] hover:bg-blue-700 text-white font-semibold text-[15px] rounded-[2px] transition-colors inline-flex items-center gap-2 shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>PDF 받기</span>
          </button>
        </div>

      </div>
    </div>
  );
}
