import React from 'react';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
import { PROJECT_CONFIG } from '../config';
import { generatePolicyPDF } from '../utils/pdfGenerator';

export default function PdfPreviewModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const proposals = [
    {
      code: "과제 01",
      title: "질환별 최종 치료역량을 반영한 수용정보 체계 구축",
      issue: "단순 응급실 병상 수만 표기되어 당직 전문의, 응급수술실, 중환자실 이용 가능 여부가 미반영되어 재이송이 발생하는 실정입니다.",
      proposal: "응급의료정보통신망의 수용정보를 중증외상, 급성 뇌졸중, 심근경색 등 질환·처치 단위로 세분화하고 3단계 수용 상태로 제공합니다.",
      effect: "구급대의 불필요한 병원 문의를 줄이고 환자를 적정 최종 치료 가능 병원으로 골든타임 내 이송합니다."
    },
    {
      code: "과제 02",
      title: "수용정보 갱신 시각과 수용 불가 사유 표시 의무화",
      issue: "정보 업데이트 지연과 불명확한 수용 불가 회신으로 인해 구급대의 다음 병원 결정에 혼선이 초래됩니다.",
      proposal: "정보 갱신 타임스탬프를 의무화하고, 전문의 수술 중, 중환자실 부족 등 표준화된 수용 불가 사유 입력을 제도화합니다.",
      effect: "수용 정보의 신뢰도를 확보하고 객관적 수용 불가 기록을 지자체 인력·시설 지원의 정책자료로 활용합니다."
    },
    {
      code: "과제 03",
      title: "IMIST-AMBO 기반 119-응급실 표준 인계체계 도입",
      issue: "구급대원과 응급실 간 인계 순서와 표현 방식 차이로 주요 증상 시각이나 현장 처치 내역이 누락될 위험이 있습니다.",
      proposal: "국제 표준 IMIST-AMBO(신원-사고기전-손상-활력징후-처치-알레르기-약물-과거력-기타) 서식을 공유하여 도착 전 사전 전달 및 30~60초 구두 인계를 시행합니다.",
      effect: "핵심 생명 정보의 누락과 중복 질문을 방지하여 응급실 도착 즉시 연속성 있는 전문 응급 처치가 가능해집니다."
    },
    {
      code: "과제 04",
      title: "중증도와 최종 치료 가능성을 고려한 이송 원칙 확립",
      issue: "가장 가까운 병원만 선택 시 재전원이 발생하고, 대형병원 선호 시 권역응급센터 과밀화가 가중됩니다.",
      proposal: "거리뿐 아니라 환자의 중증도·시간 민감성을 고려하여 즉시 안정화 환자, 시간 민감 중증환자, 경증환자의 이송원칙을 구체화합니다.",
      effect: "중증환자는 최종 치료기관으로 직접 이송하고 경증환자는 적정 지역 병원으로 분산하여 응급실 과밀화를 완화합니다."
    },
    {
      code: "과제 05",
      title: "지역 책임형 초기 처치 및 전원조정 네트워크 구축",
      issue: "지역 의료기관이 중증환자 수용 후 최종 수술이 불가능할 경우, 의료진이 직접 수용 병원을 찾느라 지연 및 부담이 발생합니다.",
      proposal: "24시간 전원조정 허브를 지정하여 수용 병원 조율 및 기록 전송을 전담하고 초기 처치 의료진의 법적 부담 완화 기준을 마련합니다.",
      effect: "지역 의료진이 초기 소생 처치에 전념할 수 있도록 지원하고 상급 치료기관으로의 안전한 2차 전원을 보장합니다."
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
                중증응급환자 이송 지연 개선을 위한 5대 정책 제안서
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 font-medium pt-1">
                정보 신뢰성, IMIST-AMBO 인계 체계, 지역 전원 네트워크 강화를 중심으로
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
                <span className="font-bold text-navy-900">{PROJECT_CONFIG.fullAcademicTitle}</span>
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
                  중증응급환자의 이송 지연은 단순히 병상 부족에 그치지 않고 전문의·수술실 가동 여부, 정보 전달, 전원 조정이 복합적으로 작동합니다. 본 보고서는 현행 법제도(응급의료법 제6조, 제11조, 제15조, 제48조의2)를 구체화하고 현장에서 실질적으로 작동하도록 5대 정책 과제를 제시합니다.
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
                  3. 결론
                </h3>
                <p className="text-slate-700 leading-relaxed text-justify pl-4">
                  병원의 실제 치료역량, 신뢰할 수 있는 수용정보, IMIST-AMBO 표준 인계, 책임 있는 전원조정이 하나의 흐름으로 연결될 때 중증응급환자의 불필요한 이송 지연을 방지할 수 있습니다.
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
