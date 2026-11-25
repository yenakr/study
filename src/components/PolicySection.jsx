import React, { useState } from 'react';
import { CORE_3_POLICIES, INITIAL_5_PROPOSALS } from '../data/policyData';
import { generatePolicyPDF } from '../utils/pdfGenerator';
import PdfPreviewModal from './PdfPreviewModal';
import { 
  CheckCircle2, ChevronDown, ChevronUp, Lightbulb, 
  TrendingUp, HelpCircle, FileText, Download 
} from 'lucide-react';

export default function PolicySection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [expandedPolicyId, setExpandedPolicyId] = useState(1);
  const [isInitialTasksOpen, setIsInitialTasksOpen] = useState(false);

  const togglePolicy = (id) => {
    setExpandedPolicyId(expandedPolicyId === id ? null : id);
  };

  return (
    <section id="policy" className="py-16 md:py-20 bg-slate-50 text-slate-900 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-black text-navy-900 tracking-tight">
            중증응급환자 이송 지연 개선을 위한 3대 핵심 정책
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            CODE BLUE는 이송 절차와 정보망의 정비를 넘어, 환자를 맡을 필수진료과 전문의가 상주하도록 하는 <strong>인력 중심 3대 정책</strong>을 제안합니다.
          </p>
        </div>

        {/* 3 Core Policies Container */}
        <div className="space-y-6">
          {CORE_3_POLICIES.map((policy) => {
            const isExpanded = expandedPolicyId === policy.id;
            return (
              <article 
                key={policy.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all hover:border-slate-300"
              >
                {/* Header Row */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-navy-900 text-white font-bold text-xs flex items-center justify-center">
                        0{policy.id}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-navy-900">
                        {policy.title}
                      </h3>
                    </div>
                    <span className="text-xs font-bold bg-blue-50 text-brand-blue px-2.5 py-1 rounded w-max">
                      {policy.badge}
                    </span>
                  </div>

                  {/* Target Goal */}
                  <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-100 flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-brand-blue block mb-0.5">목표</span>
                      <p className="text-sm sm:text-base font-bold text-navy-900 leading-snug">
                        {policy.target}
                      </p>
                    </div>
                  </div>

                  {/* Problem & Proposal Summary */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                      <span className="font-bold text-red-600 block text-xs">현황 및 문제점</span>
                      <p className="text-slate-700 leading-relaxed font-normal">
                        {policy.issue}
                      </p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                      <span className="font-bold text-brand-blue block text-xs">핵심 제안</span>
                      <p className="text-slate-700 leading-relaxed font-normal">
                        {policy.proposal}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expand Toggle Button */}
                <div className="px-6 sm:px-8 pb-6">
                  <button
                    onClick={() => togglePolicy(policy.id)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-between transition-colors focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? '상세 내용 접기' : '상세 운영방안 및 기대효과 보기'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-brand-blue" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                  </button>
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 space-y-5 text-xs sm:text-sm text-slate-800 bg-slate-50/60 border-t border-slate-100 animate-fadeIn">
                    
                    {/* Operations */}
                    <div className="space-y-2">
                      <h4 className="font-bold text-navy-900 text-sm flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                        <span>운영방안</span>
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-slate-700">
                        {policy.operations.map((op, i) => (
                          <li key={i} className="leading-relaxed">{op}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Policy 1 Distinction */}
                    {policy.distinction && (
                      <div className="bg-white p-4 rounded-xl border border-blue-200 space-y-1">
                        <span className="text-brand-blue block font-bold text-xs">차별점</span>
                        <p className="text-slate-700 leading-relaxed font-medium">
                          {policy.distinction}
                        </p>
                      </div>
                    )}

                    {/* Policy 2 Duration Review */}
                    {policy.durationReview && (
                      <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                        <span className="text-navy-900 block font-bold text-xs">복무기간 검토</span>
                        <p className="text-slate-700 leading-relaxed">
                          {policy.durationReview}
                        </p>
                      </div>
                    )}

                    {/* Policy 2 Distinction from Local Doctor */}
                    {policy.distinctionFromLocalDoctor && (
                      <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                        <span className="text-brand-blue block font-bold text-xs">지역의사제와의 차이</span>
                        <p className="text-slate-700 leading-relaxed">
                          {policy.distinctionFromLocalDoctor}
                        </p>
                      </div>
                    )}

                    {/* Legal Notice */}
                    {policy.legalNotice && (
                      <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-amber-900 space-y-1">
                        <span className="block font-bold text-xs">법적 보호 범위 및 환자안전</span>
                        <p className="leading-relaxed">{policy.legalNotice}</p>
                      </div>
                    )}

                    {/* Expected Effects */}
                    <div className="space-y-2">
                      <h4 className="font-bold text-emerald-800 text-sm flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                        <span>기대효과</span>
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-slate-700">
                        {policy.effects.map((ef, i) => (
                          <li key={i} className="leading-relaxed">{ef}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Considerations */}
                    <div className="space-y-2 bg-white p-4 rounded-xl border border-slate-200">
                      <h4 className="font-bold text-navy-900 text-sm flex items-center gap-1.5">
                        <HelpCircle className="w-4 h-4 text-slate-500" />
                        <span>검토 사항 및 주의 문구</span>
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-slate-600">
                        {policy.considerations.map((cs, i) => (
                          <li key={i} className="leading-relaxed">{cs}</li>
                        ))}
                      </ul>
                    </div>

                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Initial 5 Proposals (Collapsed Accordion Section) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-lg font-black text-navy-900">
                초기 검토 과제
              </h3>
            </div>
            <button
              onClick={() => setIsInitialTasksOpen(!isInitialTasksOpen)}
              className="inline-flex items-center text-xs sm:text-sm font-bold text-brand-blue hover:text-blue-700 transition-colors focus:outline-none"
            >
              <span>{isInitialTasksOpen ? '접기' : '초기 5대 과제 펼쳐보기'}</span>
              {isInitialTasksOpen ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
            </button>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            {INITIAL_5_PROPOSALS.notice}
          </div>

          {isInitialTasksOpen && (
            <div className="space-y-3 pt-2 animate-fadeIn">
              {INITIAL_5_PROPOSALS.items.map((item, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm space-y-1">
                  <strong className="text-navy-900 font-bold block">{idx + 1}. {item.title}</strong>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Document Bar */}
        <div className="bg-navy-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="font-bold text-base text-white">학술 보고서 전문</h4>
            <p className="text-slate-400 text-xs">
              2026 한양학술타운 LION 공식 제안서 전문 열람 및 PDF 다운로드
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors"
            >
              <FileText className="w-3.5 h-3.5 mr-1.5 inline" />
              <span>보고서 미리보기</span>
            </button>
            <button
              onClick={generatePolicyPDF}
              className="px-4 py-2.5 rounded-lg bg-brand-blue hover:bg-blue-600 text-white font-bold text-xs transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5 mr-1.5 inline" />
              <span>PDF 내려받기</span>
            </button>
          </div>
        </div>

      </div>

      <PdfPreviewModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
    </section>
  );
}
