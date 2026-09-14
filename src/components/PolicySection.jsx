import React, { useState } from 'react';
import { FileText, Eye, Download, Search, CheckCircle2, ArrowRight, ShieldAlert, Layers } from 'lucide-react';
import { generatePolicyPDF } from '../utils/pdfGenerator';
import PdfPreviewModal from './PdfPreviewModal';
import ResearchProcessModal from './ResearchProcessModal';

export default function PolicySection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isProcessOpen, setIsProcessOpen] = useState(false);

  const proposals = [
    {
      num: "01",
      title: "실제 치료역량을 반영한 수용정보 체계",
      issue: "단순 빈 병상 수만 표기되어 당직 전문의나 수술실 가능 여부가 미반영되어 재이송이 발생합니다.",
      proposal: "응급실 병상뿐 아니라 실시간 당직 전문의 진료 과목 및 응급 수술실·중환자실 가동 현황을 연동합니다.",
      effect: "119 구급대의 허위 수용 요청 시간을 줄이고 최종 치료 병원 도착 시간을 대폭 단축합니다."
    },
    {
      num: "02",
      title: "수용정보의 갱신 시각과 불가 사유 표시",
      issue: "정보 업데이트 지연과 불명확한 수용 불가 통보로 구급대원 현장 이송 판단에 혼선이 생깁니다.",
      proposal: "수용 정보의 갱신 시각 표시를 의무화하고 수용 불가능 시 당직 수술 중 등 명확한 사유를 기록합니다.",
      effect: "수용 정보의 실시간 신뢰도를 향상시키고 무분별한 문의로 인한 행정 지연을 방지합니다."
    },
    {
      num: "03",
      title: "119와 의료기관 간 표준화된 인계체계",
      issue: "구급대원과 응급실 간 구두 인계 방식의 차이로 핵심 환자 상태 정보가 누락될 수 있습니다.",
      proposal: "국제 표준 SBAR 기반의 디지털 이송 인계 서식을 제정하고 구급대-응급실 간 실시간 공유합니다.",
      effect: "환자 이송 도착 즉시 연속성 있는 전문 응급 처치 및 수술 준비가 가능해집니다."
    },
    {
      num: "04",
      title: "중증도와 최종 치료 가능성을 고려한 이송 원칙",
      issue: "대형병원 쏠림 현상으로 상급종합병원 응급실 과밀화와 중증환자 수용력 저하가 발생합니다.",
      proposal: "KTAS 중증도에 맞춘 이송 가이드라인을 강화하고 권역 내 최종 치료 가능 병원으로 우선 분산 이송합니다.",
      effect: "권역 응급의료센터의 중증환자 전담 역량을 보호하고 지역 응급의료 자원을 효율화합니다."
    },
    {
      num: "05",
      title: "지역 의료기관의 초기 처치 및 전원 역량 강화",
      issue: "장거리 이송 도중 환자 상태 악화 위험이 높으나 지역 1차 응급실의 초기 기적 처치가 미흡합니다.",
      proposal: "지역 1차 응급실의 기적 생명 유지 및 초기 소생 역량을 지원하고 안전한 전원 시스템을 확립합니다.",
      effect: "장거리 이동에 따른 위험을 최소화하고 1차 안정화 후 최적 상급 병원 전원을 보장합니다."
    }
  ];

  return (
    <section id="policy" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-brand-lightblue text-xs font-semibold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>CODE BLUE 정책 대안 패키지</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
            응급의료체계 개선을 위한 5대 정책 제안
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            간호학적 현장 이송 인계 관점과 정책학적 제도 실현 가능성을 종합한 CODE BLUE의 핵심 정책 제안입니다.
          </p>
        </div>

        {/* Top Summary Diagram: Overall Policy Pillars */}
        <div className="bg-navy-800/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-2xl mb-12">
          <div className="flex items-center gap-2 mb-4 text-brand-lightblue font-bold text-sm">
            <Layers className="w-4 h-4" />
            <span>정책 제안 핵심 프레임워크 한눈에 보기</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {proposals.map((item, idx) => (
              <div 
                key={idx}
                className="bg-navy-900/90 p-4 rounded-xl border border-slate-700 hover:border-brand-blue/60 transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2 py-0.5 rounded bg-brand-blue/20 text-brand-lightblue text-xs font-bold mb-2">
                    제안 0{item.num}
                  </span>
                  <h4 className="text-xs font-bold text-slate-100 leading-snug">
                    {item.title}
                  </h4>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                  {idx === 0 && "정보 신뢰성"}
                  {idx === 1 && "타임스탬프 의무화"}
                  {idx === 2 && "SBAR 표준 인계"}
                  {idx === 3 && "중증도 기반 이송"}
                  {idx === 4 && "초기 처치 강화"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Policy Proposal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {proposals.map((card, idx) => (
            <div 
              key={idx}
              className={`bg-navy-800/80 backdrop-blur-md rounded-2xl p-6 border border-slate-700/80 shadow-lg hover:border-blue-400/50 transition-all duration-300 flex flex-col justify-between ${
                idx === 0 ? 'lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-brand-lightblue">
                    {card.num}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 bg-navy-900 px-2.5 py-1 rounded-md border border-slate-700">
                    POLICY CARD
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-4 leading-snug">
                  {card.title}
                </h3>

                <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-slate-300">
                  <div className="bg-navy-900/60 p-3 rounded-lg border border-slate-800">
                    <span className="text-brand-red font-bold block mb-0.5">▪ 현재 문제</span>
                    <p className="text-slate-300">{card.issue}</p>
                  </div>

                  <div className="bg-navy-900/60 p-3 rounded-lg border border-slate-800">
                    <span className="text-brand-lightblue font-bold block mb-0.5">▪ 제안 내용</span>
                    <p className="text-slate-200">{card.proposal}</p>
                  </div>

                  <div className="bg-navy-900/60 p-3 rounded-lg border border-slate-800">
                    <span className="text-emerald-400 font-bold block mb-0.5">▪ 기대 효과</span>
                    <p className="text-slate-300">{card.effect}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <button
            onClick={() => setIsPreviewOpen(true)}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-bold text-sm shadow-lg transition-all"
          >
            <Eye className="w-4 h-4 mr-2" />
            <span>정책제안서 미리보기</span>
          </button>

          <button
            onClick={generatePolicyPDF}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm transition-all"
          >
            <Download className="w-4 h-4 mr-2 text-brand-lightblue" />
            <span>PDF 내려받기</span>
          </button>

          <button
            onClick={() => setIsProcessOpen(true)}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-all"
          >
            <Search className="w-4 h-4 mr-2 text-slate-400" />
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
