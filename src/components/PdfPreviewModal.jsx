import React from 'react';
import { X, Download, FileText } from 'lucide-react';
import { PROJECT_CONFIG } from '../config';
import { generatePolicyPDF } from '../utils/pdfGenerator';

export default function PdfPreviewModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const proposals = [
    {
      id: 1,
      title: "실제 치료역량을 반영한 수용정보 체계",
      issue: "단순 빈 병상 수만 표기되어 당직 전문의나 수술실 가능 여부가 미반영되어 재이송이 발생합니다.",
      proposal: "응급실 병상뿐 아니라 실시간 당직 전문의 진료 과목 및 응급 수술실·중환자실 가동 현황을 연동합니다.",
      effect: "119 구급대의 허위 수용 요청 시간을 줄이고 최종 치료 병원 도착 시간을 대폭 단축합니다."
    },
    {
      id: 2,
      title: "수용정보의 갱신 시각과 불가 사유 표시",
      issue: "정보 업데이트 지연과 불명확한 수용 불가 통보로 구급대원 현장 이송 판단에 혼선이 생깁니다.",
      proposal: "수용 정보의 갱신 시각 표시를 의무화하고 수용 불가능 시 당직 수술 중 등 명확한 사유를 기록합니다.",
      effect: "수용 정보의 실시간 신뢰도를 향상시키고 무분별한 문의로 인한 행정 지연을 방지합니다."
    },
    {
      id: 3,
      title: "119와 의료기관 간 표준화된 인계체계",
      issue: "구급대원과 응급실 간 구두 인계 방식의 차이로 핵심 환자 상태 정보가 누락될 수 있습니다.",
      proposal: "표준 이송 인계 서식을 제정하고 구급대와 응급실 간 실시간 공유합니다.",
      effect: "환자 이송 도착 즉시 연속성 있는 전문 응급 처치 및 수술 준비가 가능해집니다."
    },
    {
      id: 4,
      title: "중증도와 최종 치료 가능성을 고려한 이송 원칙",
      issue: "대형병원 쏠림 현상으로 상급종합병원 응급실 과밀화와 중증환자 수용력 저하가 발생합니다.",
      proposal: "중증도에 맞춘 이송 가이드라인을 강화하고 권역 내 최종 치료 가능 병원으로 우선 분산 이송합니다.",
      effect: "권역 응급의료센터의 중증환자 전담 역량을 보호하고 지역 응급의료 자원을 효율화합니다."
    },
    {
      id: 5,
      title: "지역 의료기관의 초기 처치 및 전원 역량 강화",
      issue: "장거리 이송 도중 환자 상태 악화 위험이 높으나 지역 1차 응급실의 초기 기적 처치가 미흡합니다.",
      proposal: "지역 1차 응급실의 초기 생명 유지 및 처치 역량을 지원하고 안전한 전원 시스템을 확립합니다.",
      effect: "장거리 이동에 따른 위험을 최소화하고 1차 안정화 후 최적 상급 병원 전원을 보장합니다."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-sm">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-navy-900 text-white p-4 flex items-center justify-between border-b border-navy-700">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-brand-lightblue" />
            <h3 className="font-bold text-base text-white">CODE BLUE 정책제안서 미리보기</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-300 hover:text-white hover:bg-navy-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Document Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800 bg-slate-50">
          
          <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
            <h2 className="text-xl font-extrabold text-navy-900 mb-2">
              중증응급환자 이송 지연 문제 개선을 위한 5대 정책 제안서
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              팀명: {PROJECT_CONFIG.teamName} | 전공: {PROJECT_CONFIG.majors} | 팀원: 김다은, 김예나, 임채윤, 노재은
            </p>
          </div>

          <div className="space-y-4">
            {proposals.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-lg border border-slate-200 space-y-2 text-xs sm:text-sm">
                <h4 className="font-bold text-base text-navy-900 mb-2">
                  {idx + 1}. {item.title}
                </h4>

                <div>
                  <strong className="text-slate-500">현재 문제: </strong>
                  <span>{item.issue}</span>
                </div>
                <div>
                  <strong className="text-brand-blue">제안 내용: </strong>
                  <span>{item.proposal}</span>
                </div>
                <div>
                  <strong className="text-emerald-600">기대 효과: </strong>
                  <span>{item.effect}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 bg-white border-t border-slate-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100"
          >
            닫기
          </button>
          <button
            onClick={generatePolicyPDF}
            className="px-5 py-2 rounded-lg bg-brand-blue hover:bg-blue-600 text-white font-bold text-sm flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>PDF 내려받기</span>
          </button>
        </div>

      </div>
    </div>
  );
}
