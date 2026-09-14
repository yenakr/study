import React, { useState } from 'react';
import { Eye, Download, Search, FileText, ChevronRight, AlertCircle, Lightbulb, TrendingUp } from 'lucide-react';
import { generatePolicyPDF } from '../utils/pdfGenerator';
import PdfPreviewModal from './PdfPreviewModal';
import ResearchProcessModal from './ResearchProcessModal';

export default function PolicySection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isProcessOpen, setIsProcessOpen] = useState(false);
  const [activePolicyIndex, setActivePolicyIndex] = useState(0);

  const policyData = [
    {
      num: "01",
      code: "POLICY 01",
      title: "실제 치료역량을 반영한 수용정보 체계 구축",
      summary: "단순 빈 병상 수 조회를 넘어 당직 전문의 수술 가동 현황 및 중환자실 수용 가능 여부를 연동하는 지능형 수용 정보 체계",
      issueText: "현재 응급실 수용 정보 시스템은 단순 빈 병상 수만 표기되어 해당 질환을 수술·시술할 당직 전문의의 부재나 수술실 대기 상황이 반영되지 않습니다. 이로 인해 119 구급대가 환자를 이송하고도 수용이 불가능해 다시 다른 병원으로 재이송(핑퐁 이송)하는 현상이 계속 발생하고 있습니다.",
      proposalText: "응급실 침대 가동률뿐만 아니라 질환별 실시간 당직 전문의 진료 가능 여부, 응급 수술실 및 중환자실 수용 가능 현황을 종합적으로 연동하는 실시간 통합 관리 체계를 구축합니다.",
      effectText: "119 구급대의 허위 수용 요청 및 병원 탐색 시간을 획기적으로 줄여 중증응급환자가 최적의 최종 치료 병원에 골든타임 내 도착하도록 지원합니다."
    },
    {
      num: "02",
      code: "POLICY 02",
      title: "수용정보의 갱신 시각 및 불가 사유 표시 의무화",
      summary: "수용 가능 정보의 갱신 시각 타임스탬프를 표기하고 수용 불가능 시 객관적 사유 입력을 의무화하는 신뢰도 강화 정책",
      issueText: "수용 정보의 업데이트가 제때 이루어지지 않아 과거 지연된 정보가 표기되거나, 병원에서 불명확한 이유로 수용을 거절하여 현장 구급대원의 신속한 이송 판단에 커다란 혼선이 생깁니다.",
      proposalText: "의료기관별 수용 정보 입력 갱신 타임스탬프 표시를 의무화하고, 수용 불가능 처리 시 '당직 전문의 응급 수술 중' 등 객관적인 사유를 시스템에 즉시 등록하도록 제도를 개선합니다.",
      effectText: "수용 정보의 실시간 신뢰도를 향상시켜 유선으로 일일이 재확인하는 행정 지연을 방지하고 구급대의 현장 이송 판단을 신속하게 만듭니다."
    },
    {
      num: "03",
      code: "POLICY 03",
      title: "119와 의료기관 간 표준화된 이송 인계체계(SBAR) 도입",
      summary: "구급대원과 응급실 간 구두 인계 방식에서 벗어나 국제 표준 SBAR 기반 디지털 사전 인계 서식을 공유하는 표준화 정책",
      issueText: "구급대원과 응급실 의료진 간의 인계 방식이 병원마다 다르고 주로 구두 전달에 의존하여, 증상 발생 시각이나 현장 처치 내역 등 핵심 환자 생명 정보가 누락될 위험이 높습니다.",
      proposalText: "국제 표준 인계 방식인 SBAR(상황-배경-평가-제안) 구조에 기반한 표준 디지털 이송 인계 서식을 확립하고 119 구급차와 응급실 간에 실시간으로 공유합니다.",
      effectText: "환자가 응급실에 도착하는 즉시 연속성 있는 전문 응급처치와 수술 준비가 가능해져 응급실 내 불필요한 대기시간을 최소화합니다."
    },
    {
      num: "04",
      code: "POLICY 04",
      title: "중증도 및 최종 치료 가능성을 고려한 이송 가이드라인 확립",
      issueText: "대형병원 선호 현상으로 상급종합병원 응급실로 경증 및 중등증 환자가 쏠리게 되어, 정작 초를 다투는 중증응급환자의 전담 수용 역량이 크게 저하됩니다.",
      proposalText: "KTAS 중증도 분류 기준에 맞춘 이송 가이드라인을 강화하여 권역 내 최종 치료가 가능한 적정 응급의료기관으로 환자를 효율적으로 분산 이송합니다.",
      effectText: "권역 응급의료센터의 중증응급환자 전담 수용 기능을 수호하고 지역 내 응급의료 자원을 효율적으로 배분합니다."
    },
    {
      num: "05",
      code: "POLICY 05",
      title: "지역 의료기관의 초기 처치 및 전원 역량 강화 지원",
      summary: "지역 1차 응급실의 기적 생명 유지 소생 역량을 지원하여 장거리 이송 위험을 낮추는 전원 네트워크 강화 정책",
      issueText: "원거리 대형병원으로 이동하는 도중 환자 상태가 급격히 악화될 위험이 높으나, 지역 1차 응급실의 초기 기적 생명 유지 및 전원 역량이 부족한 실정입니다.",
      proposalText: "지역 1차 응급실의 초기 기도 확보 및 기적 소생 역량 지원을 강화하고, 상급 병원으로 안전하게 전원할 수 있는 원스톱 네트워크를 구축합니다.",
      effectText: "장거리 이동에 따른 위험을 최소화하고 1차 응급실에서 상태를 안정화한 후 최적의 상급 병원으로 안전하게 전원할 수 있는 의료 안전망을 형성합니다."
    }
  ];

  const currentPolicy = policyData[activePolicyIndex];

  return (
    <section id="policy" className="py-16 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-left border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold text-brand-blue uppercase tracking-wider block mb-1">
              POLICY REPORT BRIEF
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
              중증응급환자 이송 지연 개선 5대 정책 제안
            </h2>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="inline-flex items-center px-4 py-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4 mr-1.5" />
              <span>보고서 전문 미리보기</span>
            </button>
            <button
              onClick={generatePolicyPDF}
              className="inline-flex items-center px-4 py-2.5 rounded-lg bg-brand-blue hover:bg-blue-600 text-white font-bold text-xs transition-colors shadow-sm"
            >
              <Download className="w-4 h-4 mr-1.5" />
              <span>PDF 다운로드</span>
            </button>
          </div>
        </div>

        {/* Clean Interactive Policy Brief Reader (Side-by-side or Tab List) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: Policy List Navigation (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block px-1 mb-2">
              정책 제안 목차 (클릭 시 세부 내용 전환)
            </span>

            {policyData.map((item, idx) => {
              const isActive = activePolicyIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePolicyIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all border flex items-center justify-between group focus:outline-none ${
                    isActive
                      ? 'bg-navy-900 text-white border-navy-900 shadow-md'
                      : 'bg-white text-slate-800 hover:bg-slate-100 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.num}
                    </span>
                    <span className={`text-sm font-bold leading-snug ${
                      isActive ? 'text-white' : 'text-navy-900 group-hover:text-brand-blue'
                    }`}>
                      {item.title}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isActive ? 'text-brand-lightblue translate-x-1' : 'text-slate-400 opacity-50'
                  }`} />
                </button>
              );
            })}

            <div className="pt-4">
              <button
                onClick={() => setIsProcessOpen(true)}
                className="w-full py-3 px-4 rounded-xl bg-slate-200/70 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Search className="w-3.5 h-3.5" />
                <span>연구 및 도출 과정 보기</span>
              </button>
            </div>
          </div>

          {/* Right: Focused Active Policy Document Panel (8 cols) - Large readable text */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 border border-slate-300 shadow-md space-y-8 animate-fadeIn">
            
            {/* Header of Active Policy */}
            <div className="border-b border-slate-200 pb-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-brand-blue uppercase bg-blue-50 px-3 py-1 rounded">
                  {currentPolicy.code}
                </span>
                <span className="text-xs text-slate-400 font-semibold">
                  CODE BLUE 학술 정책 과제 {activePolicyIndex + 1} / {policyData.length}
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-navy-900 leading-tight pt-2">
                {currentPolicy.title}
              </h3>
            </div>

            {/* Summary Box */}
            {currentPolicy.summary && (
              <div className="bg-slate-50 p-5 rounded-xl border-l-4 border-brand-blue text-slate-800 text-base font-semibold leading-relaxed">
                {currentPolicy.summary}
              </div>
            )}

            {/* Detailed Policy Text Sections with Large Readable Typography */}
            <div className="space-y-8 text-base text-slate-800 leading-relaxed font-normal">
              
              {/* Issue */}
              <div className="space-y-2">
                <h4 className="text-base font-extrabold text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                  <span>현황 및 기존의 문제점</span>
                </h4>
                <p className="text-slate-800 text-base sm:text-lg leading-relaxed text-justify pl-7">
                  {currentPolicy.issueText}
                </p>
              </div>

              {/* Proposal */}
              <div className="space-y-2 pt-2">
                <h4 className="text-base font-extrabold text-brand-blue flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-brand-blue shrink-0" />
                  <span>CODE BLUE 정책 개선 방안</span>
                </h4>
                <p className="text-slate-900 text-base sm:text-lg leading-relaxed font-semibold text-justify pl-7 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                  {currentPolicy.proposalText}
                </p>
              </div>

              {/* Effect */}
              <div className="space-y-2 pt-2">
                <h4 className="text-base font-extrabold text-emerald-700 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>기대되는 제도적 효과</span>
                </h4>
                <p className="text-slate-800 text-base sm:text-lg leading-relaxed text-justify pl-7">
                  {currentPolicy.effectText}
                </p>
              </div>

            </div>

            {/* Navigation inside panel */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-600">
              <button
                disabled={activePolicyIndex === 0}
                onClick={() => setActivePolicyIndex(prev => Math.max(0, prev - 1))}
                className="hover:text-navy-900 disabled:opacity-30 disabled:hover:text-slate-600"
              >
                ← 이전 정책 보기
              </button>
              <span className="text-slate-400">
                {activePolicyIndex + 1} / {policyData.length}
              </span>
              <button
                disabled={activePolicyIndex === policyData.length - 1}
                onClick={() => setActivePolicyIndex(prev => Math.min(policyData.length - 1, prev + 1))}
                className="hover:text-navy-900 disabled:opacity-30 disabled:hover:text-slate-600 text-brand-blue"
              >
                다음 정책 보기 →
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Modals */}
      <PdfPreviewModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
      <ResearchProcessModal isOpen={isProcessOpen} onClose={() => setIsProcessOpen(false)} />

    </section>
  );
}
