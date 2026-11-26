import React, { useState } from 'react';
import { CORE_3_POLICIES, INITIAL_5_PROPOSALS } from '../data/policyData';
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
    <section id="policy" className="py-24 sm:py-28 bg-white text-zinc-900 min-h-screen font-sans border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header (Left-aligned) */}
        <div className="space-y-4 text-left border-b border-zinc-200 pb-8">
          <div className="text-[13px] font-mono font-bold text-[#0B3CFF] uppercase tracking-widest">
            SECTION 04 • 정책 제안
          </div>

          {/* 핵심 한 문장 (20px bold) */}
          <p className="text-[20px] font-bold text-zinc-950 leading-snug break-keep">
            환자를 맡아 치료할 전문의가 병원에 상주할 수 있는 인력 중심 3대 정책을 제안합니다.
          </p>

          <h2 className="text-[36px] sm:text-[40px] font-serif font-bold text-zinc-950 tracking-tight leading-tight break-keep">
            중증응급환자 이송 지연 개선을 위한 3대 핵심 정책
          </h2>

          <p className="text-[17px] md:text-[18px] text-zinc-800 leading-[1.75] font-normal break-keep max-w-[640px]">
            단순한 전산 정보망 개선을 넘어, 환자를 실제로 맡아 수술할 필수진료과 전문의를 안정적으로 확보하고 유지하기 위한 인력 중심 정책 과제입니다.
          </p>
        </div>

        {/* 3 Core Policy Briefs */}
        <div className="space-y-8 text-left">
          {CORE_3_POLICIES.map((policy) => {
            const isExpanded = expandedPolicyId === policy.id;
            return (
              <article 
                key={policy.id}
                className="bg-white border border-zinc-300"
              >
                {/* Header Strip */}
                <div className="p-6 sm:p-8 border-b border-zinc-200 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[13px] font-bold text-[#0B3CFF]">POLICY 0{policy.id}</span>
                      <h3 className="text-[22px] font-serif font-bold text-zinc-950 break-keep">
                        {policy.title}
                      </h3>
                    </div>
                    <span className="text-[13px] font-medium text-zinc-700 bg-zinc-100 px-3 py-1 border border-zinc-200 w-max shrink-0">
                      {policy.badge}
                    </span>
                  </div>

                  {/* Goal Definition */}
                  <div className="bg-blue-50/15 border-l-4 border-[#0B3CFF] p-4 space-y-1">
                    <span className="font-bold text-zinc-950 block text-[15px]">정책 목표</span>
                    <p className="text-zinc-800 font-medium text-[15px] leading-relaxed break-keep">
                      {policy.target}
                    </p>
                  </div>

                  {/* Problem & Core Proposal 2-Col Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-1.5">
                      <span className="font-bold text-zinc-950 text-[15px] block">현황 및 문제점</span>
                      <p className="text-[15px] text-zinc-700 leading-relaxed break-keep">
                        {policy.issue}
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      <span className="font-bold text-zinc-950 text-[15px] block">핵심 제안</span>
                      <p className="text-[15px] text-zinc-800 leading-relaxed font-medium break-keep">
                        {policy.proposal}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expand / Collapse Control */}
                <div className="px-6 sm:px-8 py-3 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between">
                  <button
                    onClick={() => togglePolicy(policy.id)}
                    className="min-h-[44px] text-[15px] font-semibold text-zinc-800 hover:text-zinc-950 flex items-center gap-2 focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? '상세 운영방안 및 법적 검토 접기' : '세부 운영방안, 차별점 및 기대효과 펼치기'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Expanded Editorial Body */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 bg-white space-y-6 text-[15px] text-zinc-800 border-t border-zinc-100 animate-fadeIn">
                    
                    {/* Operations */}
                    <div className="space-y-2">
                      <h4 className="font-bold text-zinc-950 text-[15px] uppercase tracking-wide">
                        세부 운영방안
                      </h4>
                      <ul className="border border-zinc-200 divide-y divide-zinc-200 bg-zinc-50">
                        {policy.operations.map((op, i) => (
                          <li key={i} className="py-3 px-4 text-zinc-700 leading-relaxed flex items-start gap-3">
                            <span className="font-mono text-zinc-950 font-bold shrink-0">{i + 1}.</span>
                            <span className="break-keep">{op}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Policy Visual Schematic Diagrams */}
                    {policy.id === 1 && (
                      <div className="border border-zinc-300 p-5 bg-zinc-50 space-y-3">
                        <span className="text-[13px] font-mono font-bold text-zinc-600 block uppercase">
                          운영 모형 체계도: 권역 내 전문의 순환 당직 네트워크
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                          <div className="bg-white border border-zinc-300 p-3 space-y-1">
                            <span className="text-[11px] font-mono text-zinc-500 block">거점병원 A</span>
                            <span className="font-bold text-[15px] text-zinc-950 block">외과/중증외상 당직</span>
                            <span className="text-[13px] text-zinc-600 block">월·목 책임 가동</span>
                          </div>
                          <div className="bg-white border border-zinc-300 p-3 space-y-1">
                            <span className="text-[11px] font-mono text-zinc-500 block">거점병원 B</span>
                            <span className="font-bold text-[15px] text-zinc-950 block">뇌혈관/신경외과 당직</span>
                            <span className="text-[13px] text-zinc-600 block">화·금 책임 가동</span>
                          </div>
                          <div className="bg-white border border-zinc-300 p-3 space-y-1">
                            <span className="text-[11px] font-mono text-zinc-500 block">거점병원 C</span>
                            <span className="font-bold text-[15px] text-zinc-950 block">흉부심혈관외과 당직</span>
                            <span className="text-[13px] text-zinc-600 block">수·주말 책임 가동</span>
                          </div>
                        </div>
                        <div className="text-center pt-1 text-[13px] font-mono text-zinc-700 flex items-center justify-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#0B3CFF]"></span>
                          <span>119 상황실 및 광역응급의료상황실 24시간 실시간 연계</span>
                        </div>
                      </div>
                    )}

                    {policy.id === 2 && (
                      <div className="border border-zinc-300 p-5 bg-zinc-50 space-y-3">
                        <span className="text-[13px] font-mono font-bold text-zinc-600 block uppercase">
                          인력 양성 파이프라인 구조도
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center">
                          <div className="bg-white border border-zinc-300 p-3 space-y-1">
                            <span className="text-[11px] font-mono font-bold text-zinc-500 block">단계 01</span>
                            <span className="font-bold text-[15px] text-zinc-950 block">특기 선발</span>
                            <span className="text-[13px] text-zinc-600 block">정원 외 의무선발</span>
                          </div>
                          <div className="bg-white border border-zinc-300 p-3 space-y-1">
                            <span className="text-[11px] font-mono font-bold text-zinc-500 block">단계 02</span>
                            <span className="font-bold text-[15px] text-zinc-950 block">필수과 수련</span>
                            <span className="text-[13px] text-zinc-600 block">외과/응급 집중</span>
                          </div>
                          <div className="bg-white border border-zinc-300 p-3 space-y-1">
                            <span className="text-[11px] font-mono font-bold text-zinc-500 block">단계 03</span>
                            <span className="font-bold text-[15px] text-zinc-950 block">10~15년 복무</span>
                            <span className="text-[13px] text-zinc-600 block">권역 거점병원 상주</span>
                          </div>
                          <div className="bg-white border border-zinc-300 p-3 space-y-1">
                            <span className="text-[11px] font-mono font-bold text-zinc-500 block">단계 04</span>
                            <span className="font-bold text-[15px] text-zinc-950 block">영구 정착</span>
                            <span className="text-[13px] text-zinc-600 block">지역 필수의료 유지</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {policy.id === 3 && (
                      <div className="border border-zinc-300 p-5 bg-zinc-50 space-y-3">
                        <span className="text-[13px] font-mono font-bold text-zinc-600 block uppercase">
                          사법 안전망 및 공적 분쟁지원 절차도
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                          <div className="bg-white border border-zinc-300 p-3 space-y-1">
                            <span className="text-[11px] font-mono font-bold text-zinc-500 block">01. 현장 기록화</span>
                            <span className="font-bold text-[15px] text-zinc-950 block">사유 자동 연계</span>
                            <span className="text-[13px] text-zinc-600 block">EMR 객관 증빙 보존</span>
                          </div>
                          <div className="bg-white border border-zinc-300 p-3 space-y-1">
                            <span className="text-[11px] font-mono font-bold text-zinc-500 block">02. 분쟁 심의</span>
                            <span className="font-bold text-[15px] text-zinc-950 block">중재원 우선 감정</span>
                            <span className="text-[13px] text-zinc-600 block">불가항력성 공적 판단</span>
                          </div>
                          <div className="bg-white border border-zinc-300 p-3 space-y-1">
                            <span className="text-[11px] font-mono font-bold text-zinc-500 block">03. 사법 보호</span>
                            <span className="font-bold text-[15px] text-zinc-950 block">공적 변호 연계</span>
                            <span className="text-[13px] text-zinc-600 block">개인 배상 및 소송 분담</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Policy 1 Distinction */}
                    {policy.distinction && (
                      <div className="p-4 border border-zinc-300 bg-white space-y-1.5">
                        <span className="font-bold text-zinc-950 text-[15px] block">기존 법정 제도와의 차별점</span>
                        <p className="text-zinc-700 leading-relaxed text-[15px] break-keep">
                          {policy.distinction}
                        </p>
                      </div>
                    )}

                    {/* Policy 2 Duration Review */}
                    {policy.durationReview && (
                      <div className="p-4 border border-zinc-300 bg-white space-y-1.5">
                        <span className="font-bold text-zinc-950 text-[15px] block">의무 복무기간 비교 검토</span>
                        <p className="text-zinc-700 leading-relaxed text-[15px] break-keep">
                          {policy.durationReview}
                        </p>
                      </div>
                    )}

                    {/* Policy 2 Distinction from Local Doctor */}
                    {policy.distinctionFromLocalDoctor && (
                      <div className="p-4 border border-zinc-300 bg-white space-y-1.5">
                        <span className="font-bold text-zinc-950 text-[15px] block">지역의사제와의 차이점</span>
                        <p className="text-zinc-700 leading-relaxed text-[15px] break-keep">
                          {policy.distinctionFromLocalDoctor}
                        </p>
                      </div>
                    )}

                    {/* Legal Notice */}
                    {policy.legalNotice && (
                      <div className="p-4 border-l-4 border-zinc-950 bg-zinc-50 text-zinc-900 space-y-1.5">
                        <span className="font-bold text-[15px] block text-zinc-950">법적 보호 범위 및 환자안전 원칙</span>
                        <p className="leading-relaxed text-[15px] text-zinc-700 break-keep">
                          {policy.legalNotice}
                        </p>
                      </div>
                    )}

                    {/* Expected Effects & Considerations 2-Col Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      <div className="space-y-2">
                        <span className="font-bold text-zinc-950 text-[15px] block">기대 효과</span>
                        <ul className="space-y-2 text-[15px] text-zinc-700">
                          {policy.effects.map((ef, i) => (
                            <li key={i} className="flex items-start gap-2 leading-relaxed break-keep">
                              <span className="text-zinc-950 font-bold shrink-0">•</span>
                              <span>{ef}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <span className="font-bold text-zinc-950 text-[15px] block">추진 시 고려사항</span>
                        <ul className="space-y-2 text-[15px] text-zinc-700">
                          {policy.considerations.map((cs, i) => (
                            <li key={i} className="flex items-start gap-2 leading-relaxed break-keep">
                              <span className="text-zinc-950 font-bold shrink-0">•</span>
                              <span>{cs}</span>
                            </li>
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

        {/* Initial Tasks Collapsed Appendix (No brackets in title) */}
        <div className="border border-zinc-300 bg-white p-6 sm:p-8 text-left space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
            <h4 className="text-[20px] font-semibold text-zinc-950">
              초기 검토 과제: 5대 제도 개선안
            </h4>
            <button
              onClick={() => setIsInitialTasksOpen(!isInitialTasksOpen)}
              className="min-h-[44px] text-[15px] font-semibold text-zinc-800 hover:text-zinc-950 flex items-center gap-1 focus:outline-none"
            >
              <span>{isInitialTasksOpen ? '내용 접기' : '내용 펼치기'}</span>
              {isInitialTasksOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          <p className="text-[15px] text-zinc-700 leading-relaxed break-keep">
            {INITIAL_5_PROPOSALS.notice}
          </p>

          {isInitialTasksOpen && (
            <div className="space-y-3 pt-3 border-t border-zinc-200">
              {INITIAL_5_PROPOSALS.items.map((item, idx) => (
                <div key={idx} className="p-4 bg-zinc-50 border border-zinc-200 text-[15px] space-y-1">
                  <span className="font-bold text-zinc-950 block">{idx + 1}. {item.title}</span>
                  <span className="text-zinc-700 leading-relaxed block break-keep">{item.desc}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Document Action Strip */}
        <div className="border border-zinc-300 bg-white p-6 sm:p-8 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-[20px] font-semibold text-zinc-950">공식 연구 산출물 열람</h4>
            <p className="text-[15px] text-zinc-600">2026 한양학술타운 LION 정책제안서 및 학술 포스터</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="min-h-[44px] px-5 py-2.5 bg-[#0B3CFF] hover:bg-blue-700 text-white text-[15px] font-semibold rounded-[2px] transition-colors inline-flex items-center gap-2 shadow-xs"
            >
              <FileText className="w-4 h-4" />
              <span>정책제안서</span>
            </button>
            <button
              onClick={onOpenPoster}
              className="min-h-[44px] px-5 py-2.5 border border-zinc-300 bg-white hover:bg-zinc-50 text-zinc-900 text-[15px] font-semibold rounded-[2px] transition-colors inline-flex items-center gap-2"
            >
              <Image className="w-4 h-4" />
              <span>학술 포스터</span>
            </button>
          </div>
        </div>

        {/* Next Section Navigation Link */}
        <div className="pt-8 border-t border-zinc-200 flex justify-end">
          <button
            onClick={() => { setActiveTab('er-guide'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center min-h-[44px] px-6 py-3 bg-[#0B3CFF] hover:bg-blue-700 text-white text-[15px] font-semibold rounded-[2px] transition-colors shadow-xs gap-2"
          >
            <span>응급실 가이드</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      <PdfPreviewModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
    </section>
  );
}
