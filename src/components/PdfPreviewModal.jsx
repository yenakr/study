import React from 'react';
import { X, Download, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PROJECT_CONFIG } from '../config';
import { generatePolicyPDF } from '../utils/pdfGenerator';

export default function PdfPreviewModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const proposals = [
    {
      code: "과제 01",
      title: "실제 치료역량을 반영한 수용정보 체계 구축",
      issue: "단순 빈 병상 수만 표기되어 당직 전문의 부재나 수술실 대기 상황이 반영되지 않아 2차 재이송(핑퐁 이송)이 발생하는 실정입니다.",
      proposal: "응급실 병상 수뿐만 아니라 실시간 당직 전문의 진료 과목 및 응급 수술실·중환자실 가동 현황을 종합 연동합니다.",
      effect: "119 구급대의 수용 요청 탐색 시간을 단축하고 중증응급환자의 최종 치료 병원 도착 시간을 대폭 개선합니다."
    },
    {
      code: "과제 02",
      title: "수용정보의 갱신 시각과 불가 사유 표시 의무화",
      issue: "수용 정보의 갱신 지연 및 불명확한 수용 불가 통보로 인해 현장 구급대원의 이송 판단에 혼선이 생깁니다.",
      proposal: "수용 정보의 갱신 시각 타임스탬프를 의무화하고 수용 불가능 시 당직 수술 중 등 객관적 사유를 명시하도록 합니다.",
      effect: "수용 정보의 실시간 신뢰도를 확보하고 불필요한 문의로 인한 행정 지연을 방지합니다."
    },
    {
      code: "과제 03",
      title: "119와 의료기관 간 표준화된 이송 인계체계(SBAR) 도입",
      issue: "구급대원과 응급실 간 구두 인계 방식의 차이로 핵심 환자 상태 정보 및 처치 내역이 누락될 위험이 있습니다.",
      proposal: "국제 표준 SBAR 기반의 디지털 이송 인계 서식을 제정하고 119와 응급실 간 실시간 공유합니다.",
      effect: "환자 도착 즉시 연속성 있는 전문 응급 처치 및 수술 준비가 가능해집니다."
    },
    {
      code: "과제 04",
      title: "중증도와 최종 치료 가능성을 고려한 이송 원칙",
      issue: "대형병원 선호 현상으로 상급종합병원 응급실 과밀화가 가중되어 정작 중증환자의 수용력이 저하됩니다.",
      proposal: "KTAS 중증도에 맞춘 이송 가이드라인을 강화하고 권역 내 최종 치료 가능 병원으로 우선 분산 이송합니다.",
      effect: "권역 응급의료센터의 중증환자 전담 역량을 보호하고 지역 응급의료 자원을 효율화합니다."
    },
    {
      code: "과제 05",
      title: "지역 의료기관의 초기 처치 및 전원 역량 강화",
      issue: "장거리 이송 도중 환자 상태 악화 위험이 높으나 지역 1차 응급실의 초기 기적 처치가 미흡합니다.",
      proposal: "지역 1차 응급실의 초기 생명 유지 및 처치 역량을 지원하고 안전한 전원 시스템을 확립합니다.",
      effect: "장거리 이동에 따른 위험을 최소화하고 1차 안정화 후 최적 상급 병원 전원을 보장합니다."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Document Header Bar */}
        <div className="bg-navy-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-navy-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-brand-blue flex items-center justify-center font-bold text-white text-sm">
              PDF
            </div>
            <div>
              <h3 className="font-bold text-base text-white">공식 정책제안서 전문 미리보기</h3>
              <p className="text-xs text-slate-300">2026 한양학술타운 LION 프로젝트 학술 제안서</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Paper Document Layout */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-100 text-slate-900 font-sans">
          
          {/* Formal Official Report Paper */}
          <div className="bg-white p-8 sm:p-12 rounded-xl border border-slate-300 shadow-md max-w-3xl mx-auto space-y-8">
            
            {/* Header Official Seal */}
            <div className="border-b-2 border-navy-900 pb-6 text-center space-y-2">
              <span className="text-xs font-bold text-brand-blue tracking-widest uppercase block">
                POLICY PROPOSAL REPORT • 2026 HANYANG LION
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-navy-900 leading-tight">
                중증응급환자 이송 지연 문제 개선을 위한 5대 정책 제안서
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 font-medium pt-1">
                응급의료체계의 정보 신뢰성, 현장 인계 체계, 그리고 지역 의료 자원 효율화 방안
              </p>
            </div>

            {/* Document Metadata Table */}
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-slate-700">
              <div>
                <span className="text-slate-400 block font-semibold">연구 팀명</span>
                <span className="font-bold text-navy-900">{PROJECT_CONFIG.teamName}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">참여 전공</span>
                <span className="font-bold text-navy-900">{PROJECT_CONFIG.majors}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">연구진</span>
                <span className="font-bold text-navy-900">김다은, 김예나, 임채윤, 노재은</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">발행 기관</span>
                <span className="font-bold text-navy-900">한양학술타운 LION</span>
              </div>
            </div>

            {/* Report Content */}
            <div className="space-y-8 text-sm leading-relaxed">
              
              <div className="space-y-2">
                <h3 className="text-base font-extrabold text-navy-900 flex items-center gap-2 border-l-4 border-navy-900 pl-3">
                  1. 서론 및 제안 배경
                </h3>
                <p className="text-slate-700 leading-relaxed text-justify pl-4">
                  중증응급환자의 이송 지연 문제는 단순한 수용 병상 부족에 그치지 않고, 수용 가능 전문의 및 수술실 정보의 불일치, 구급대와 응급실 간 인계 방식의 비표준화, 지역 응급 의료 자원의 불균형이 복합적으로 작용한 결과입니다. 이에 본 CODE BLUE 연구팀은 간호학적 현장 관리 관점과 정책학적 제도 설계 관점을 결합하여 5대 정책 과제를 제시합니다.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-base font-extrabold text-navy-900 flex items-center gap-2 border-l-4 border-navy-900 pl-3">
                  2. 5대 핵심 정책 제안 과제
                </h3>

                {proposals.map((item, idx) => (
                  <div key={idx} className="bg-slate-50/80 p-5 rounded-lg border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2 font-bold text-navy-900">
                      <span className="px-2 py-0.5 rounded bg-navy-900 text-white text-xs">
                        {item.code}
                      </span>
                      <h4 className="text-base">{item.title}</h4>
                    </div>

                    <div className="space-y-1.5 text-xs sm:text-sm pl-2">
                      <p><strong className="text-red-700">현황 및 문제점:</strong> {item.issue}</p>
                      <p><strong className="text-brand-blue">정책 개선 방안:</strong> {item.proposal}</p>
                      <p><strong className="text-emerald-700">기대 효과:</strong> {item.effect}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-200">
                <h3 className="text-base font-extrabold text-navy-900 flex items-center gap-2 border-l-4 border-navy-900 pl-3">
                  3. 결론 및 결언
                </h3>
                <p className="text-slate-700 leading-relaxed text-justify pl-4">
                  본 정책 제안서의 대안들은 초를 다투는 중증응급환자가 적절한 시간 내 적절한 의료기관에 도착할 수 있는 골든타임 수호 체계를 목표로 합니다. 시민의 성숙한 응급실 이용 인식과 정책적 제도의 뒷받침이 융합될 때 실효성 있는 응급의료 네트워크가 완성될 것입니다.
                </p>
              </div>

            </div>

            {/* Official Signature Footer */}
            <div className="pt-8 border-t-2 border-slate-200 text-center text-xs text-slate-500 space-y-1">
              <p className="font-bold text-navy-900 text-sm">CODE BLUE 학술 연구팀 일동</p>
              <p>2026 한양학술타운 LION 프로젝트 결과보고서</p>
            </div>

          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-slate-500 font-medium">
            공식 PDF 보고서 문서로 다운로드하실 수 있습니다.
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors"
            >
              닫기
            </button>
            <button
              onClick={generatePolicyPDF}
              className="px-5 py-2 rounded-lg bg-brand-blue hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>PDF 다운로드</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
