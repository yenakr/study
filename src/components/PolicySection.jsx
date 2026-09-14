import React, { useState } from 'react';
import { FileText, Download, Eye, Search, Layers, CheckCircle2, ChevronRight } from 'lucide-react';
import { generatePolicyPDF } from '../utils/pdfGenerator';
import PdfPreviewModal from './PdfPreviewModal';
import ResearchProcessModal from './ResearchProcessModal';

export default function PolicySection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isProcessOpen, setIsProcessOpen] = useState(false);
  const [selectedPillar, setSelectedPillar] = useState('all');

  const pillars = [
    { id: 'all', name: '전체 정책 요약' },
    { id: 'info', name: '1. 수용 정보 신뢰성 강화' },
    { id: 'handover', name: '2. 현장 인계 체계 표준화' },
    { id: 'network', name: '3. 중증도 기반 이송 및 역량 강화' },
  ];

  const policyData = [
    {
      id: 1,
      pillarId: 'info',
      code: 'POLICY 01',
      title: '실제 치료역량을 반영한 수용정보 체계 구축',
      summary: '단순 빈 병상 수 조회를 넘어 당직 전문의 수술 가동 현황 및 중환자실 수용 가능 여부를 연동하는 지능형 수용 정보 체계',
      issueText: '현재 시스템은 단순 빈 침대 수만 표기되어 해당 응급 질환을 치료할 당직 전문의 부재나 수술실 대기 상황이 반영되지 않습니다. 이로 인해 119 구급대가 병원 도착 후 다시 다른 병원으로 재이송(핑퐁 이송)하는 현상이 반복됩니다.',
      proposalText: '응급실 병상 가동률뿐만 아니라 질환별 실시간 당직 전문의 진료 가능 여부, 응급 수술실 및 중환자실 수용 가능 현황을 다각도로 통합 연동합니다.',
      effectText: '구급대의 허위 수용 요청 탐색 시간을 획기적으로 줄이고 중증응급환자가 최종 치료를 받을 수 있는 병원에 골든타임 내 도착하도록 지원합니다.'
    },
    {
      id: 2,
      pillarId: 'info',
      code: 'POLICY 02',
      title: '수용정보의 갱신 시각 및 불가 사유 표시 의무화',
      issueText: '수용 정보의 업데이트 지연으로 과거 정보가 표기되거나, 불명확한 이유로 수용이 거절되어 현장 구급대원의 신속한 이송 판단에 혼선이 초래됩니다.',
      proposalText: '의료기관별 수용 정보 입력 갱신 타임스탬프 표시를 의무화하고, 수용 불가능 시 당직 전문의 응급 수술 중 등 객관적 사유를 명시하도록 제도를 개선합니다.',
      effectText: '수용 정보의 실시간 신뢰도를 향상시켜 불필요한 유선 확인 과정을 줄이고 현장 응급 이송의 행정 지연을 방지합니다.'
    },
    {
      id: 3,
      pillarId: 'handover',
      code: 'POLICY 03',
      title: '119와 의료기관 간 표준화된 이송 인계체계(SBAR) 도입',
      issueText: '구급대원과 응급실 의료진 간 인계 방식이 일관되지 않고 구두 전달에 의존하여 증상 발생 시각이나 초기 처치 내역 등 핵심 환자 정보가 누락될 위험이 있습니다.',
      proposalText: '국제 표준 인계 방식인 SBAR(상황-배경-평가-제안) 구조에 기반한 표준 디지털 이송 인계 서식을 제정하고 구급대와 응급실 간 실시간으로 연동 공유합니다.',
      effect: '환자 도착 즉시 연속성 있는 전문 응급처치와 수술 준비가 가능해져 응급실 내 진료 대기시간을 최소화합니다.'
    },
    {
      id: 4,
      pillarId: 'network',
      code: 'POLICY 04',
      title: '중증도 및 최종 치료 가능성을 고려한 이송 가이드라인 확립',
      issueText: '대형병원 선호 현상으로 상급종합병원 응급실로 경증·중등증 환자가 쏠려 권역응급센터의 중증환자 전담 수용 역량이 저하됩니다.',
      proposalText: 'KTAS 중증도에 맞춘 이송 가이드라인을 강화하여 권역 내 최종 치료가 가능한 적정 응급의료기관으로 환자를 효율적으로 분산 이송합니다.',
      effect: '권역 응급의료센터의 중증응급환자 전담 기능을 수호하고 지역 내 응급의료 자원을 효율적으로 배분합니다.'
    },
    {
      id: 5,
      pillarId: 'network',
      code: 'POLICY 05',
      title: '지역 의료기관의 초기 처치 및 전원 역량 강화 지원',
      issueText: '장거리 이송 도중 환자 상태 악화 위험이 높으나 지역 1차 응급실의 초기 기적 생명 유지 처치 및 전원 역량이 부족합니다.',
      proposalText: '지역 1차 응급실의 초기 기적 소생 및 생명 유지 역량 지원을 강화하고 원스톱 전원 지원 네트워크를 구축합니다.',
      effect: '장거리 이동에 따른 위험을 최소화하고 1차 안정화 후 최적의 상급 병원으로 안전하게 전원할 수 있는 시스템을 구축합니다.'
    }
  ];

  const filteredData = selectedPillar === 'all' 
    ? policyData 
    : policyData.filter(item => item.pillarId === selectedPillar);

  return (
    <section id="policy" className="py-20 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Official Report Header */}
        <div className="bg-navy-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg mb-10 border border-navy-800 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-navy-700 pb-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-blue flex items-center justify-center font-black text-white text-lg">
                PB
              </div>
              <div>
                <span className="text-xs font-bold text-brand-lightblue uppercase tracking-wider block">
                  POLICY BRIEF 2026
                </span>
                <h1 className="text-lg font-bold text-white">
                  CODE BLUE 학술 정책 보고서
                </h1>
              </div>
            </div>
            <div className="text-xs text-slate-300 bg-navy-800 px-3 py-1.5 rounded-md border border-navy-700 font-medium">
              2026 한양학술타운 LION 프로젝트
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
            중증응급환자 이송 지연 문제 개선을 위한 5대 정책 제안서
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            본 보고서는 간호학적 현장 인계 관점과 정책학적 제도 실현 가능성을 융합하여, 응급환자 이송 지연을 해소하기 위한 5대 핵심 정책 과제를 제안합니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-navy-800">
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-brand-blue hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-colors"
            >
              <FileText className="w-4 h-4 mr-2" />
              <span>공식 보고서 전문 미리보기</span>
            </button>
            <button
              onClick={generatePolicyPDF}
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-colors"
            >
              <Download className="w-4 h-4 mr-2 text-slate-300" />
              <span>PDF 다운로드</span>
            </button>
            <button
              onClick={() => setIsProcessOpen(true)}
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-300 font-medium text-sm transition-colors"
            >
              <Search className="w-4 h-4 mr-2 text-slate-400" />
              <span>연구 과정 보기</span>
            </button>
          </div>
        </div>

        {/* Pillar Section Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-200 pb-4">
          {pillars.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedPillar(p.id)}
              className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${
                selectedPillar === p.id 
                  ? 'bg-navy-900 text-white shadow-sm' 
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Policy Report Document Cards */}
        <div className="space-y-6 mb-12">
          {filteredData.map((item) => (
            <article 
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 hover:border-slate-300 transition-all space-y-6"
            >
              {/* Document Subheader */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="text-xs font-extrabold text-brand-blue tracking-wider uppercase bg-blue-50 px-3 py-1 rounded">
                  {item.code}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  CODE BLUE 학술 제안 과제
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 leading-snug">
                {item.title}
              </h3>

              {/* Executive Summary */}
              <p className="text-slate-700 text-base font-semibold leading-relaxed bg-slate-50 p-4 rounded-lg border-l-4 border-navy-900">
                {item.summary}
              </p>

              {/* Official Policy Details */}
              <div className="space-y-4 pt-2 text-sm">
                <div>
                  <h4 className="font-bold text-navy-900 text-sm mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>현황 및 문제점</span>
                  </h4>
                  <p className="text-slate-700 leading-relaxed pl-3.5 border-l border-slate-200">
                    {item.issueText}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-navy-900 text-sm mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    <span>정책 개선 방안</span>
                  </h4>
                  <p className="text-slate-800 leading-relaxed font-medium pl-3.5 border-l border-brand-blue">
                    {item.proposalText}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-navy-900 text-sm mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>기대되는 제도적 효과</span>
                  </h4>
                  <p className="text-slate-700 leading-relaxed pl-3.5 border-l border-emerald-500">
                    {item.effectText}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Report Control */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left text-sm">
            <h4 className="font-bold text-navy-900">정책제안서 전체 원본 문서가 필요하신가요?</h4>
            <p className="text-slate-500 text-xs mt-0.5">
              공식 제안서 전문 미리보기 및 PDF 다운로드가 가능합니다.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="px-5 py-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm transition-colors flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              <span>미리보기</span>
            </button>
            <button
              onClick={generatePolicyPDF}
              className="px-5 py-2.5 rounded-lg bg-brand-blue hover:bg-blue-600 text-white font-bold text-sm transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>PDF 다운로드</span>
            </button>
          </div>
        </div>

      </div>

      {/* Modals */}
      <PdfPreviewModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
      <ResearchProcessModal isOpen={isProcessOpen} onClose={() => setIsProcessOpen(false)} />

    </section>
  );
}
