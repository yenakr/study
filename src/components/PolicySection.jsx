import React, { useState } from 'react';
import { Eye, Download, Search } from 'lucide-react';
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
      proposal: "표준 이송 인계 서식을 제정하고 구급대와 응급실 간 실시간 공유합니다.",
      effect: "환자 이송 도착 즉시 연속성 있는 전문 응급 처치 및 수술 준비가 가능해집니다."
    },
    {
      num: "04",
      title: "중증도와 최종 치료 가능성을 고려한 이송 원칙",
      issue: "대형병원 쏠림 현상으로 상급종합병원 응급실 과밀화와 중증환자 수용력 저하가 발생합니다.",
      proposal: "중증도에 맞춘 이송 가이드라인을 강화하고 권역 내 최종 치료 가능 병원으로 우선 분산 이송합니다.",
      effect: "권역 응급의료센터의 중증환자 전담 역량을 보호하고 지역 응급의료 자원을 효율화합니다."
    },
    {
      num: "05",
      title: "지역 의료기관의 초기 처치 및 전원 역량 강화",
      issue: "장거리 이송 도중 환자 상태 악화 위험이 높으나 지역 1차 응급실의 초기 기적 처치가 미흡합니다.",
      proposal: "지역 1차 응급실의 초기 생명 유지 및 처치 역량을 지원하고 안전한 전원 시스템을 확립합니다.",
      effect: "장거리 이동에 따른 위험을 최소화하고 1차 안정화 후 최적 상급 병원 전원을 보장합니다."
    }
  ];

  return (
    <section id="policy" className="py-20 bg-slate-900 text-white relative">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
            정책 제안
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            CODE BLUE가 도출한 중증응급환자 이송 지연 문제 개선을 위한 5대 정책 대안입니다.
          </p>
        </div>

        {/* Top Summary Diagram */}
        <div className="bg-navy-800 rounded-xl p-6 border border-slate-700 mb-12">
          <h3 className="text-sm font-bold text-slate-300 mb-4 text-center">
            정책 제안 한눈에 보기
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {proposals.map((item, idx) => (
              <div 
                key={idx}
                className="bg-navy-900 p-4 rounded-lg border border-slate-700 text-center"
              >
                <span className="text-xs font-bold text-brand-lightblue block mb-1">
                  제안 {item.num}
                </span>
                <h4 className="text-xs font-bold text-slate-100 leading-snug">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Policy Proposal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {proposals.map((card, idx) => (
            <div 
              key={idx}
              className="bg-navy-800 rounded-xl p-6 border border-slate-700 text-left space-y-4 flex flex-col justify-between"
            >
              <div>
                <span className="text-xl font-extrabold text-brand-lightblue block mb-2">
                  {card.num}
                </span>

                <h3 className="text-base font-bold text-white mb-4 leading-snug">
                  {card.title}
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div>
                    <strong className="text-slate-400 block mb-0.5">현재 문제</strong>
                    <p className="text-slate-300 leading-relaxed">{card.issue}</p>
                  </div>

                  <div>
                    <strong className="text-brand-lightblue block mb-0.5">제안 내용</strong>
                    <p className="text-slate-200 leading-relaxed">{card.proposal}</p>
                  </div>

                  <div>
                    <strong className="text-emerald-400 block mb-0.5">기대효과</strong>
                    <p className="text-slate-300 leading-relaxed">{card.effect}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
          <button
            onClick={() => setIsPreviewOpen(true)}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-brand-blue hover:bg-blue-600 text-white font-bold text-sm transition-colors"
          >
            <Eye className="w-4 h-4 mr-2" />
            <span>정책제안서 미리보기</span>
          </button>

          <button
            onClick={generatePolicyPDF}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm transition-colors"
          >
            <Download className="w-4 h-4 mr-2 text-slate-300" />
            <span>PDF 내려받기</span>
          </button>

          <button
            onClick={() => setIsProcessOpen(true)}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-colors"
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
