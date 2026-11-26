import React, { useState } from 'react';
import { CORE_3_POLICIES, INITIAL_5_PROPOSALS } from '../data/policyData';
import { generatePolicyPDF } from '../utils/pdfGenerator';
import PdfPreviewModal from './PdfPreviewModal';
import { ChevronDown, ChevronUp, ArrowRight, FileText, Image } from 'lucide-react';

export default function PolicySection({ onOpenPoster, setActiveTab }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [expandedPolicyId, setExpandedPolicyId] = useState(1);
  const [isInitialTasksOpen, setIsInitialTasksOpen] = useState(false);

  const togglePolicy = (id) => {
    setExpandedPolicyId(expandedPolicyId === id ? null : id);
  };

  return (
    <section id="policy" className="py-14 md:py-20 bg-[#FAF9F5] text-zinc-900 min-h-screen font-sans border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header (Left-aligned) */}
        <div className="space-y-3 text-left border-b border-zinc-300 pb-6">
          <div className="text-xs font-mono font-bold text-zinc-500">SECTION 04 • 정책 제안</div>
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-zinc-950 tracking-tight leading-snug">
            중증응급환자 이송 지연 개선을 위한 3대 핵심 정책
          </h2>
          <p className="text-sm sm:text-base text-zinc-700 font-medium">
            이송 정보망 정비를 넘어, 환자를 실제로 맡아 수술할 필수진료과 전문의를 안정적으로 확보·유지하기 위한 인력 중심 3대 과제입니다.
          </p>
        </div>

        {/* 3 Core Policy Briefs: Formal Paper Document Layout */}
        <div className="space-y-6 text-left">
          {CORE_3_POLICIES.map((policy) => {
            const isExpanded = expandedPolicyId === policy.id;
            return (
              <article 
                key={policy.id}
                className="bg-white border border-zinc-300 shadow-xs"
              >
                {/* Header Strip */}
                <div className="p-6 border-b border-zinc-200 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-mono text-xs font-bold text-zinc-500">POLICY 0{policy.id}</span>
                      <h3 className="font-serif font-black text-lg sm:text-xl text-zinc-950">
                        {policy.title}
                      </h3>
                    </div>
                    <span className="text-xs font-medium text-zinc-600 bg-zinc-100 px-2 py-0.5 border border-zinc-200 w-max">
                      {policy.badge}
                    </span>
                  </div>

                  {/* Goal Definition */}
                  <div className="bg-[#FAF9F5] border-l-2 border-zinc-900 p-3 text-xs sm:text-sm">
                    <span className="font-bold text-zinc-900 block text-xs mb-0.5">정책 목표</span>
                    <p className="text-zinc-800 font-medium leading-relaxed">
                      {policy.target}
                    </p>
                  </div>

                  {/* Problem & Core Proposal 2-Col Table */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm pt-2">
                    <div className="space-y-1">
                      <span className="font-bold text-zinc-900 text-xs block">현황 및 문제점</span>
                      <p className="text-zinc-600 leading-relaxed">
                        {policy.issue}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-bold text-zinc-900 text-xs block">핵심 제안</span>
                      <p className="text-zinc-700 leading-relaxed font-medium">
                        {policy.proposal}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expand / Collapse Control */}
                <div className="px-6 py-2.5 bg-zinc-50/70 border-b border-zinc-200 flex items-center justify-between text-xs">
                  <button
                    onClick={() => togglePolicy(policy.id)}
                    className="font-semibold text-zinc-800 hover:text-zinc-950 flex items-center gap-1 focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? '상세 운영방안 및 법적 검토 접기' : '세부 운영방안, 차별점 및 기대효과 펼치기'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Expanded Editorial Body */}
                {isExpanded && (
                  <div className="p-6 bg-white space-y-5 text-xs sm:text-sm text-zinc-800 border-t border-zinc-100 animate-fadeIn">
                    
                    {/* Operations */}
                    <div className="space-y-1.5">
                      <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wide">
                        세부 운영방안
                      </h4>
                      <ul className="border border-zinc-200 divide-y divide-zinc-100 bg-[#FAF9F5]">
                        {policy.operations.map((op, i) => (
                          <li key={i} className="py-2 px-3 text-zinc-700 leading-relaxed flex items-baseline gap-2">
                            <span className="font-mono text-zinc-400 text-xs shrink-0">{i + 1}.</span>
                            <span>{op}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Policy 1 Distinction */}
                    {policy.distinction && (
                      <div className="p-3.5 border border-zinc-200 bg-zinc-50 space-y-1">
                        <span className="font-bold text-zinc-900 text-xs block">기존 법정 제도와의 차별점</span>
                        <p className="text-zinc-700 leading-relaxed text-xs">
                          {policy.distinction}
                        </p>
                      </div>
                    )}

                    {/* Policy 2 Duration Review */}
                    {policy.durationReview && (
                      <div className="p-3.5 border border-zinc-200 bg-zinc-50 space-y-1">
                        <span className="font-bold text-zinc-900 text-xs block">의무 복무기간 비교 검토</span>
                        <p className="text-zinc-700 leading-relaxed text-xs">
                          {policy.durationReview}
                        </p>
                      </div>
                    )}

                    {/* Policy 2 Distinction from Local Doctor */}
                    {policy.distinctionFromLocalDoctor && (
                      <div className="p-3.5 border border-zinc-200 bg-zinc-50 space-y-1">
                        <span className="font-bold text-zinc-900 text-xs block">지역의사제와의 차이점</span>
                        <p className="text-zinc-700 leading-relaxed text-xs">
                          {policy.distinctionFromLocalDoctor}
                        </p>
                      </div>
                    )}

                    {/* Legal Notice */}
                    {policy.legalNotice && (
                      <div className="p-3.5 border border-amber-300 bg-amber-50/70 text-amber-950 space-y-1">
                        <span className="font-bold text-xs block">법적 보호 범위 및 환자안전 원칙</span>
                        <p className="leading-relaxed text-xs">
                          {policy.legalNotice}
                        </p>
                      </div>
                    )}

                    {/* Expected Effects & Considerations 2-Col Table */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                      <div className="space-y-1">
                        <span className="font-bold text-zinc-900 text-xs block">기대 효과</span>
                        <ul className="list-disc pl-4 space-y-1 text-xs text-zinc-600">
                          {policy.effects.map((ef, i) => (
                            <li key={i} className="leading-relaxed">{ef}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-1">
                        <span className="font-bold text-zinc-900 text-xs block">추진 시 고려사항</span>
                        <ul className="list-disc pl-4 space-y-1 text-xs text-zinc-600">
                          {policy.considerations.map((cs, i) => (
                            <li key={i} className="leading-relaxed">{cs}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Initial 5 Tasks in Collapsed Academic Appendix */}
        <div className="border border-zinc-300 bg-white p-5 text-left space-y-3">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
            <h4 className="font-serif font-bold text-sm text-zinc-900">
              초기 검토 과제 (이전 5대 제도 개선안)
            </h4>
            <button
              onClick={() => setIsInitialTasksOpen(!isInitialTasksOpen)}
              className="text-xs font-semibold text-zinc-700 hover:underline flex items-center gap-0.5"
            >
              <span>{isInitialTasksOpen ? '접기' : '내용 보기'}</span>
              {isInitialTasksOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          <p className="text-xs text-zinc-600 leading-relaxed">
            {INITIAL_5_PROPOSALS.notice}
          </p>

          {isInitialTasksOpen && (
            <div className="space-y-2 pt-2 border-t border-zinc-100">
              {INITIAL_5_PROPOSALS.items.map((item, idx) => (
                <div key={idx} className="p-2.5 bg-zinc-50 border border-zinc-200 text-xs">
                  <span className="font-bold text-zinc-900 block mb-0.5">{idx + 1}. {item.title}</span>
                  <span className="text-zinc-600 leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Document Action Strip: Modal Previews */}
        <div className="border border-zinc-300 bg-white p-5 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-serif font-bold text-sm text-zinc-950">공식 연구 산출물 열람</h4>
            <p className="text-xs text-zinc-500 mt-0.5">2026 한양학술타운 LION 심사용 정책제안서 및 학술 포스터</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="px-3.5 py-1.5 border border-zinc-900 bg-zinc-900 text-white text-xs font-semibold rounded hover:bg-zinc-800 transition-colors inline-flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>보고서 전문 열람 (PDF)</span>
            </button>
            <button
              onClick={onOpenPoster}
              className="px-3.5 py-1.5 border border-zinc-300 bg-white text-zinc-800 text-xs font-semibold rounded hover:bg-zinc-50 transition-colors inline-flex items-center gap-1.5"
            >
              <Image className="w-3.5 h-3.5" />
              <span>A0 학술 포스터 열람</span>
            </button>
          </div>
        </div>

        {/* Next Section Navigation Link */}
        <div className="pt-6 border-t border-zinc-200 flex justify-end">
          <button
            onClick={() => { setActiveTab('er-guide'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold rounded transition-colors"
          >
            <span>다음: 5. 응급실 바로 알기</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </button>
        </div>

      </div>

      <PdfPreviewModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
    </section>
  );
}
