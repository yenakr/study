import React from 'react';
import { X, Download, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';
import { PROJECT_CONFIG } from '../config';
import { generatePolicyPDF } from '../utils/pdfGenerator';

export default function PdfPreviewModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const proposals = [
    {
      id: 1,
      title: "실제 치료역량을 반영한 수용정보 체계",
      issue: "단순 빈 병상 표기 방식으로 인해 당직 전문의나 수술실 가동 여부가 반영되지 않아 2차 재이송이 발생하는 실정입니다.",
      proposal: "응급실 병상 수뿐만 아니라 당직 전문의 진료 분야 및 응급 수술실·중환자실 실시간 가동 현황을 연동합니다.",
      effect: "119 구급대의 허위 수용 요청 시간을 단축하고 중증응급환자의 최종 치료 도착 시간을 획기적으로 개선합니다."
    },
    {
      title: "수용정보의 갱신 시각과 불가 사유 표시",
      issue: "수용정보 업데이트 지연 및 불명확한 수용 불가 통보로 구급대원 현장 판단에 혼선이 초래됩니다.",
      proposal: "수용정보 입력 갱신 타임스탬프를 의무화하고 수용 불가능 시 객관적 사유(전문의 수술 중 등)를 명시하도록 합니다.",
      effect: "정보 신뢰도를 확보하고 불필요한 이송 시도를 방지하여 현장 구급대원의 신속한 의사결정을 지원합니다."
    },
    {
      id: 3,
      title: "119와 의료기관 간 표준화된 인계체계",
      issue: "구급대원과 응급실 의료진 간 구두 전달 방식의 차이로 핵심 환자 상태 정보 누락 가능성이 존재합니다.",
      proposal: "국제 표준 SBAR(상황-배경-평가-제안) 기반의 디지털 이송 인계 서식을 제정하고 사전 연동합니다.",
      effect: "환자 도착 즉시 연속성 있는 전문 응급처치를 시작할 수 있는 의료 안전망을 형성합니다."
    },
    {
      id: 4,
      title: "중증도와 최종 치료 가능성을 고려한 이송 원칙",
      issue: "대형병원 선호 현상으로 상급종합병원 응급실 과밀화가 발생하고 중증환자 수용력이 저하됩니다.",
      proposal: "KTAS 중증도 및 권역 내 최종 치료 가능 병원 우선 이송 원칙을 가이드라인으로 수립하고 이행을 평가합니다.",
      effect: "권역 응급의료센터의 중증환자 전담 기능을 수호하고 지역 의료 자원의 효율적 배분을 달성합니다."
    },
    {
      id: 5,
      title: "지역 의료기관의 초기 처치 및 전원 역량 강화",
      issue: "장거리 이송 도중 환자 상태 악화 위험이 높으나 지역 1차 응급실의 초기 기적 소생 역량이 부족합니다.",
      proposal: "지역 응급실의 기도 확보 및 기적 소생 역량에 대한 지원을 강화하고 원스톱 전원 지원 네트워크를 구축합니다.",
      effect: "장거리 이송 위험을 최소화하고 1차 처치 후 안전한 상급 병원 전원을 보장합니다."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-navy-900 text-white p-5 flex items-center justify-between border-b border-navy-700">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-brand-blue flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">CODE BLUE 정책제안서 미리보기</h3>
              <p className="text-xs text-slate-300">2026 한양학술타운 LION 프로젝트 공식 보고서</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Document Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800 bg-slate-50">
          
          {/* Document Title Header */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block mb-1">
              POLICY RECOMMENDATIONS 2026
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 mb-2">
              중증응급환자 이송 지연 문제 개선을 위한 5대 정책 제안서
            </h2>
            <div className="flex items-center justify-center gap-4 text-xs text-slate-500 font-medium border-t border-slate-100 pt-3 mt-3">
              <span>팀명: {PROJECT_CONFIG.teamName}</span>
              <span>•</span>
              <span>전공: {PROJECT_CONFIG.majors}</span>
              <span>•</span>
              <span>연구진: 김다은, 김예나, 임채윤, 노재은</span>
            </div>
          </div>

          {/* Policy Cards list */}
          <div className="space-y-4">
            {proposals.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-md bg-brand-blue text-white font-bold text-xs flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <h4 className="font-bold text-base text-navy-900">{item.title}</h4>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <div>
                    <span className="font-bold text-red-600">▪ 현재 문제: </span>
                    <span>{item.issue}</span>
                  </div>
                  <div>
                    <span className="font-bold text-brand-blue">▪ 제안 내용: </span>
                    <span>{item.proposal}</span>
                  </div>
                  <div>
                    <span className="font-bold text-emerald-600">▪ 기대 효과: </span>
                    <span>{item.effect}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500 font-medium">
            공식 PDF 문서로 원본을 다운로드하실 수 있습니다.
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors"
            >
              닫기
            </button>
            <button
              onClick={generatePolicyPDF}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>PDF 내려받기</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
