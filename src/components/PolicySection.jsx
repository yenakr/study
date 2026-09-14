import React, { useState } from 'react';
import { Eye, Download, Search, FileText, CheckCircle2, AlertTriangle, Lightbulb, TrendingUp } from 'lucide-react';
import { generatePolicyPDF } from '../utils/pdfGenerator';
import PdfPreviewModal from './PdfPreviewModal';
import ResearchProcessModal from './ResearchProcessModal';

export default function PolicySection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isProcessOpen, setIsProcessOpen] = useState(false);

  const proposals = [
    {
      num: "01",
      title: "실제 치료역량을 반영한 수용정보 체계 구축",
      issue: "단순 빈 병상 수만 표기되어 당직 전문의 부재나 수술실 대기 상황이 반영되지 않아 2차 이송(핑퐁 이송)이 발생하는 실정입니다.",
      proposal: "응급실 병상 수뿐만 아니라 실시간 당직 전문의 진료 과목 및 응급 수술실·중환자실 가동 현황을 종합 연동합니다.",
      effect: "119 구급대의 수용 요청 탐색 시간을 단축하고 중증응급환자의 최종 치료 병원 도착 시간을 대폭 개선합니다."
    },
    {
      num: "02",
      title: "수용정보의 갱신 시각과 불가 사유 표시 의무화",
      issue: "수용 정보의 갱신 지연 및 불명확한 수용 불가 통보로 인해 현장 구급대원의 이송 판단에 혼선이 생깁니다.",
      proposal: "수용 정보의 갱신 시각 타임스탬프를 의무화하고 수용 불가능 시 당직 수술 중 등 객관적 사유를 명시하도록 합니다.",
      effect: "수용 정보의 실시간 신뢰도를 확보하고 불필요한 문의로 인한 행정 지연을 방지합니다."
    },
    {
      num: "03",
      title: "119와 의료기관 간 표준화된 이송 인계체계 마련",
      issue: "구급대원과 응급실 간 구두 인계 방식의 차이로 핵심 환자 상태 정보 및 처치 내역이 누락될 위험이 있습니다.",
      proposal: "국제 표준 SBAR 기반의 디지털 이송 인계 서식을 제정하고 119와 응급실 간 실시간 공유합니다.",
      effect: "환자 도착 즉시 연속성 있는 전문 응급 처치 및 수술 준비가 가능해집니다."
    },
    {
      num: "04",
      title: "중증도와 최종 치료 가능성을 고려한 이송 원칙",
      issue: "대형병원 선호 현상으로 상급종합병원 응급실 과밀화가 가중되어 정작 중증환자의 수용력이 저하됩니다.",
      proposal: "KTAS 중증도에 맞춘 이송 가이드라인을 강화하고 권역 내 최종 치료 가능 병원으로 우선 분산 이송합니다.",
      effect: "권역 응급의료센터의 중증환자 전담 역량을 보호하고 지역 응급의료 자원을 효율화합니다."
    },
    {
      num: "05",
      title: "지역 의료기관의 초기 처치 및 전원 역량 강화",
      issue: "장거리 이송 도중 환자 상태 악화 위험이 높으나 지역 1차 응급실의 초기 기적 소생 역량이 부족합니다.",
      proposal: "지역 1차 응급실의 초기 기적 생명 유지 처치 역량을 지원하고 안전한 원스톱 전원 네트워크를 확립합니다.",
      effect: "장거리 이동에 따른 위험을 최소화하고 1차 안정화 후 최적 상급 병원 전원을 보장합니다."
    }
  ];

  return (
    <section id="policy" className="py-20 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block mb-2">
            CODE BLUE POLICY PROPOSALS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            응급의료체계 개선을 위한 5대 정책 제안
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            간호학적 현장 이송 인계 관점과 정책학적 제도 실현 가능성을 종합하여 도출한 대안입니다.
          </p>
        </div>

        {/* Top Summary Roadmap */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-12">
          <h3 className="text-sm font-bold text-navy-900 mb-4 text-center">
            5대 정책 제안 요약 한눈에 보기
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {proposals.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center hover:border-brand-blue transition-all"
              >
                <span className="text-xs font-black text-brand-blue block mb-1">
                  정책 0{item.num}
                </span>
                <h4 className="text-xs font-bold text-navy-900 leading-snug">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Policy Proposal Cards - High Readability Layout */}
        <div className="space-y-8 mb-14">
          {proposals.map((card, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Policy Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <span className="w-10 h-10 rounded-xl bg-brand-blue text-white font-black text-lg flex items-center justify-center shrink-0">
                  {card.num}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900">
                  {card.title}
                </h3>
              </div>

              {/* Structured 3 Rows: Problem, Proposal, Effect */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                
                {/* 1. Problem */}
                <div className="bg-red-50/50 p-5 rounded-xl border border-red-100 space-y-2">
                  <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span>현재 발생 문제</span>
                  </div>
                  <p className="text-slate-800 text-sm leading-relaxed font-normal">
                    {card.issue}
                  </p>
                </div>

                {/* 2. Proposal */}
                <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100 space-y-2">
                  <div className="flex items-center gap-2 text-brand-blue font-bold text-sm">
                    <Lightbulb className="w-4 h-4 text-brand-blue" />
                    <span>CODE BLUE 제안 내용</span>
                  </div>
                  <p className="text-slate-900 text-sm leading-relaxed font-semibold">
                    {card.proposal}
                  </p>
                </div>

                {/* 3. Expected Effect */}
                <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span>기대되는 제도적 효과</span>
                  </div>
                  <p className="text-slate-800 text-sm leading-relaxed font-normal">
                    {card.effect}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <button
            onClick={() => setIsPreviewOpen(true)}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center px-6 py-4 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-bold text-base shadow-md transition-all"
          >
            <Eye className="w-5 h-5 mr-2" />
            <span>정책제안서 미리보기</span>
          </button>

          <button
            onClick={generatePolicyPDF}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center px-6 py-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-base shadow-md transition-all"
          >
            <Download className="w-5 h-5 mr-2" />
            <span>PDF 내려받기</span>
          </button>

          <button
            onClick={() => setIsProcessOpen(true)}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center px-6 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-base shadow-sm transition-all"
          >
            <Search className="w-5 h-5 mr-2 text-slate-500" />
            <span>조사 과정 보기</span>
          </button>
        </div>

      </div>

      {/* Modals */}
      <PdfPreviewModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
      <ResearchProcessModal isOpen={isProcessOpen} onClose={() => setIsProcessOpen(false)} />

    </section>
  );
}
