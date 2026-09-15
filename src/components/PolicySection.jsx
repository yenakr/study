import React, { useState } from 'react';
import { 
  FileText, Download, Eye, Search, Layers, ChevronDown, ChevronUp, 
  AlertCircle, Lightbulb, TrendingUp, Scale, Clock, ShieldCheck, ExternalLink, Activity
} from 'lucide-react';
import { generatePolicyPDF } from '../utils/pdfGenerator';
import PdfPreviewModal from './PdfPreviewModal';
import ResearchProcessModal from './ResearchProcessModal';

export default function PolicySection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isProcessOpen, setIsProcessOpen] = useState(false);
  const [expandedPolicyId, setExpandedPolicyId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedPolicyId(expandedPolicyId === id ? null : id);
  };

  const legalGaps = [
    {
      law: "「응급의료에 관한 법률」 제6조",
      content: "정당한 사유 없는 응급의료 거부·기피 금지",
      gap: "정당한 수용 불가 사유의 기록·검토 기준",
      link: "https://www.law.go.kr/LSW/lsLawLinkInfo.do?chrClsCd=010202&lsJoLnkSeq=1000818167"
    },
    {
      law: "같은 법 제11조",
      content: "자체 역량으로 치료가 어렵다면 적절한 의료기관으로 이송",
      gap: "수용병원 탐색과 전원 조정 책임의 구체화",
      link: "https://www.law.go.kr/LSW/lsLawLinkInfo.do?chrClsCd=010202&lsJoLnkSeq=1000818031"
    },
    {
      law: "같은 법 제15조",
      content: "응급의료정보통신망 구축·운영",
      gap: "제공 정보와 갱신 기준의 표준화",
      link: "https://www.law.go.kr/LSW/lsLawLinkInfo.do?chrClsCd=010202&lsJoLnkSeq=900350989"
    },
    {
      law: "같은 법 제48조의2",
      content: "이송 전 환자 상태 통보 및 수용능력 확인",
      gap: "회신 항목·시간·불가 사유의 표준화",
      link: "https://www.law.go.kr/LSW/lsInfoP.do?lsId=000218"
    },
    {
      law: "「119구조·구급에 관한 법률 시행규칙」 제18조",
      content: "구급활동일지 작성 및 의료진 인계",
      gap: "도착 전 사전 인계와 구두 인계 순서 표준화",
      link: "https://www.law.go.kr/lsLinkProc.do?chrClsCd=010202&datClsCd=010102&gubun=admRul&joNo=001700000%5E001800000&lsId=41882&lsNm=119%EA%B5%AC%EC%A1%B0%C2%B7%EA%B5%AC%EA%B8%89%EC%97%90%EA%B4%80%ED%95%9C%EB%B2%95%EB%A5%A0%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99&mode=10"
    }
  ];

  const imistAmboItems = [
    { code: 'I', title: 'Identification', desc: '환자의 연령·성별 등 기본정보' },
    { code: 'M', title: 'Mechanism / Medical complaint', desc: '사고기전 또는 주요 증상' },
    { code: 'I', title: 'Injuries / Information', desc: '확인된 손상과 주요 임상정보' },
    { code: 'S', title: 'Signs', desc: '의식 수준, 활력징후 및 변화' },
    { code: 'T', title: 'Treatment', desc: '시행한 처치와 환자 반응' },
    { code: 'A', title: 'Allergies', desc: '알레르기 유무' },
    { code: 'M', title: 'Medications', desc: '주요 복용약과 현장 투여약물' },
    { code: 'B', title: 'Background', desc: '주요 기저질환 및 과거력' },
    { code: 'O', title: 'Other information', desc: '증상 발생 시각, 보호자 정보, 추가 요청' }
  ];

  const connectionFramework = [
    { stage: "현장 평가", problem: "중증도와 필요한 치료 판단의 차이", proposal: "병원전 중증도·시간 민감성 기준 정교화" },
    { stage: "병원 탐색", problem: "실제 치료 가능 여부 확인 어려움", proposal: "질환별 최종 치료역량 정보 제공" },
    { stage: "수용 확인", problem: "오래된 정보, 불명확한 불가 사유", proposal: "갱신 시각·불가 사유 표준화" },
    { stage: "병원 인계", problem: "정보 누락과 반복 질문", proposal: "IMIST-AMBO 기반 표준 인계" },
    { stage: "병원 간 전원", problem: "반복 문의와 조정 주체 부족", proposal: "지역 책임형 전원조정 허브" }
  ];

  return (
    <section id="policy" className="py-16 bg-slate-50 text-slate-900 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Block */}
        <div className="bg-navy-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg border border-navy-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-navy-700 pb-6 mb-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded bg-brand-blue font-bold text-xs text-white uppercase tracking-wider">
                POLICY BRIEF 2026
              </span>
              <span className="text-slate-300 text-xs font-semibold">
                CODE BLUE 학술 정책 보고서
              </span>
            </div>
            <span className="text-xs text-slate-400 font-medium">
              2026 한양학술타운 LION 프로젝트
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight mb-4">
            중증응급환자 이송 지연 개선을 위한 5대 정책 제안
          </h1>

          <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-3 font-normal max-w-4xl">
            <p>
              중증응급환자의 이송 지연은 단순히 응급실 병상이 부족해서 발생하는 문제가 아닙니다. 환자에게 필요한 전문의·수술실·중환자실·시술 장비의 가동 여부, 119와 의료기관 사이의 정보 전달, 병원 간 전원 조정, 지역별 치료역량이 복합적으로 작용합니다.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">
              현행 「응급의료에 관한 법률」은 응급의료정보통신망 구축, 이송 전 수용능력 확인, 정당한 사유 없는 응급의료 거부 금지 등을 규정하고 있으나, 현장에서는 정보의 정확성, 갱신 주기, 수용 불가 사유, 인계 항목 및 전원 조정 절차가 충분히 표준화되지 않았습니다. CODE BLUE는 새로운 플랫폼을 중복 구축하기보다, <strong>이미 존재하는 법과 정보체계가 현장에서 실질적으로 작동하도록 운영기준을 구체화하는 데 초점</strong>을 두었습니다.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-navy-800">
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-colors"
            >
              <Eye className="w-4 h-4 mr-2" />
              <span>정책제안서 미리보기</span>
            </button>
            <button
              onClick={generatePolicyPDF}
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-colors"
            >
              <Download className="w-4 h-4 mr-2 text-slate-300" />
              <span>PDF 내려받기</span>
            </button>
            <button
              onClick={() => setIsProcessOpen(true)}
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-300 font-medium text-sm transition-colors"
            >
              <Search className="w-4 h-4 mr-2 text-slate-400" />
              <span>조사 과정 보기</span>
            </button>
          </div>
        </div>

        {/* Overall 5 Policies Summary Bar */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <h3 className="text-sm font-bold text-navy-900 mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4 text-brand-blue" />
            <span>5대 핵심 정책 개요</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {[
              { num: "POLICY 01", title: "질환별 최종 치료역량을 반영한 수용정보 제공" },
              { num: "POLICY 02", title: "수용정보 갱신 시각과 수용 불가 사유 표준화" },
              { num: "POLICY 03", title: "IMIST-AMBO 기반 119-응급실 표준 인계" },
              { num: "POLICY 04", title: "중증도와 최종 치료 가능성을 고려한 이송" },
              { num: "POLICY 05", title: "지역 책임형 초기 처치·전원조정 네트워크" },
            ].map((p, idx) => (
              <div key={idx} className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-center">
                <span className="text-[11px] font-black text-brand-blue block mb-1">{p.num}</span>
                <h4 className="text-xs font-bold text-navy-900 leading-snug">{p.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Basis & Gaps Table */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2">
            <Scale className="w-5 h-5 text-brand-blue" />
            <span>현행 법·제도와 정책 공백 분석</span>
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-navy-900 text-white font-bold">
                  <th className="p-3.5 rounded-tl-lg">현행 근거 법령</th>
                  <th className="p-3.5">주요 현행 내용</th>
                  <th className="p-3.5 rounded-tr-lg">보완이 필요한 정책 공백 지점</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {legalGaps.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 font-bold text-navy-900 whitespace-nowrap">
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline text-brand-blue flex items-center gap-1">
                        <span>{item.law}</span>
                        <ExternalLink className="w-3 h-3 shrink-0 opacity-60" />
                      </a>
                    </td>
                    <td className="p-3.5 text-slate-700">{item.content}</td>
                    <td className="p-3.5 font-semibold text-slate-900 bg-blue-50/30">{item.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
            <p className="font-semibold text-navy-900">
              ※ 「응급의료에 관한 법률」 제6조는 모든 수용 불가를 불법으로 보는 조항이 아닙니다.
            </p>
            <p>
              보건복지부는 통신·전력 마비, 인력·시설·장비 미비 등으로 적절한 응급의료를 제공할 수 없는 경우를 정당한 사유의 예로 안내하고 있습니다. 따라서 정책의 핵심은 병원에 무조건적인 수용을 요구하는 것이 아니라, <strong>수용 여부를 객관적인 기준에 따라 신속하고 투명하게 판단하고 필요한 경우 다른 의료기관으로 연결</strong>하는 것입니다.
            </p>
          </div>
        </div>

        {/* 5 POLICIES CARDS (Default Core View + Expandable Drawer) */}
        <div className="space-y-8">
          
          {/* POLICY 01 */}
          <article className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-900 text-white font-black text-xs flex items-center justify-center">
                  01
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-navy-900">
                  질환별 최종 치료역량을 반영한 수용정보 체계 구축
                </h3>
              </div>
              <span className="text-xs font-extrabold text-brand-blue bg-blue-50 px-2.5 py-1 rounded w-max">
                POLICY 01
              </span>
            </div>

            {/* Core Default View */}
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <span className="text-xs font-bold text-brand-blue uppercase block mb-1">핵심 제안</span>
                <p className="text-base font-bold text-navy-900 leading-snug">
                  단순한 응급실 병상 정보가 아니라 환자에게 필요한 전문의·수술실·중환자실·시술실의 실제 가동 여부를 질환별로 제공한다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-red-600 block">현황 및 문제점</span>
                  <p className="text-slate-700 leading-relaxed">
                    응급실에 공간이 있어도 환자에게 필요한 당직 전문의, 응급수술실, 혈관조영실, 중환자실 또는 특수장비를 즉시 사용할 수 없다면 최종 치료가 어려울 수 있습니다. 병원 전체를 하나의 ‘가능·불가능’ 상태로 표시하기보다, 질환과 처치에 따른 치료 가능 범위를 구분해야 합니다.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-emerald-700 block">기대효과</span>
                  <p className="text-slate-700 leading-relaxed">
                    구급대의 반복적인 병원 문의를 줄이고, 환자를 단순히 가까운 병원이 아니라 필요한 최종 치료를 제공할 수 있는 적정 의료기관으로 지체 없이 이송할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Expandable Detail Toggle */}
            <div>
              <button
                onClick={() => toggleExpand(1)}
                className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-between transition-colors"
              >
                <span>{expandedPolicyId === 1 ? '세부 실행계획 및 법·제도 개편 닫기' : 'POLICY 01 세부 실행계획 및 법·제도 개편 보기'}</span>
                {expandedPolicyId === 1 ? <ChevronUp className="w-4 h-4 text-brand-blue" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
              </button>

              {expandedPolicyId === 1 && (
                <div className="mt-4 p-6 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-6 animate-fadeIn">
                  <div>
                    <h5 className="font-bold text-navy-900 mb-1">■ 현행 제도</h5>
                    <p className="text-slate-600 leading-relaxed">
                      「응급의료에 관한 법률」 제15조(정보통신망 구축) 및 제48조의2(수용능력 확인)에 따라 정보망과 수용능력 확인의 법적 기반은 마련되어 있으나, 실제 이송에 필요한 세부 역량 정보는 표기되지 않는 한계가 있습니다.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-navy-900 mb-2">■ 정책 개선 방안 (질환·처치 단위 세분화)</h5>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                      {["중증외상", "급성 뇌졸중", "급성 심근경색", "응급수술", "소아응급", "산과응급", "중증화상", "중환자 치료"].map((item, i) => (
                        <div key={i} className="bg-white p-2 text-center rounded border border-slate-200 font-semibold text-slate-800">
                          {item}
                        </div>
                      ))}
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      각 항목별로 당직 전문의 진료 가능 여부, 응급수술실/시술실 가동 상태, 중환자실 수용 가능 여부, 마지막 정보 갱신 시각을 함께 제공합니다.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-navy-900 mb-2">■ 수용 상태 3단계 단순화</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="bg-emerald-50 p-3 rounded border border-emerald-200">
                        <strong className="text-emerald-800 block mb-1">수용 가능</strong>
                        <span>현재 해당 질환의 평가와 치료 가능</span>
                      </div>
                      <div className="bg-amber-50 p-3 rounded border border-amber-200">
                        <strong className="text-amber-800 block mb-1">조건부 가능</strong>
                        <span>전문의 협의 또는 초기 처치 범위 확인 필요</span>
                      </div>
                      <div className="bg-red-50 p-3 rounded border border-red-200">
                        <strong className="text-red-800 block mb-1">일시 불가</strong>
                        <span>필요한 인력·시설·장비를 현재 이용하기 어려움</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold text-navy-900 mb-1">■ 추진 주체</h5>
                    <p className="text-slate-700">
                      보건복지부(표준 마련), 중앙응급의료센터(정보망 운영), 소방청(구급대 연계), 시·도(참여 조정), 응급의료기관(입력·갱신)
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-navy-900 mb-1">■ 평가 지표</h5>
                    <p className="text-slate-700">
                      병원 선정 소요시간, 환자 1명당 문의 횟수, 정보 일치율, 병원 도착 후 재전원율, 최종 치료기관 도착 소요시간
                    </p>
                  </div>
                </div>
              )}
            </div>
          </article>

          {/* POLICY 02 */}
          <article className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-900 text-white font-black text-xs flex items-center justify-center">
                  02
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-navy-900">
                  수용정보 갱신 시각과 수용 불가 사유 표시 의무화
                </h3>
              </div>
              <span className="text-xs font-extrabold text-brand-blue bg-blue-50 px-2.5 py-1 rounded w-max">
                POLICY 02
              </span>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <span className="text-xs font-bold text-brand-blue uppercase block mb-1">핵심 제안</span>
                <p className="text-base font-bold text-navy-900 leading-snug">
                  병원의 수용 여부뿐 아니라 정보가 언제 갱신되었는지, 현재 수용이 어려운 구체적인 이유가 무엇인지 함께 제공한다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-red-600 block">현황 및 문제점</span>
                  <p className="text-slate-700 leading-relaxed">
                    “수용 불가” 또는 “전문의 부재”라는 짧은 회신만으로는 구급대가 다음 병원을 신속하게 결정하기 어렵습니다. 어떤 자원이 부족한지, 언제 다시 수용 가능한지 구체적 사유가 표기되어야 합니다.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-emerald-700 block">기대효과</span>
                  <p className="text-slate-700 leading-relaxed">
                    구급대에는 신속한 이송 판단 근거를 제공하고, 의료기관에는 당시 수용이 어려웠던 이유를 객관적으로 기록하여 지역별 자원 지원의 정책자료로 활용합니다.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => toggleExpand(2)}
                className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-between transition-colors"
              >
                <span>{expandedPolicyId === 2 ? '세부 실행계획 및 법·제도 개편 닫기' : 'POLICY 02 세부 실행계획 및 법·제도 개편 보기'}</span>
                {expandedPolicyId === 2 ? <ChevronUp className="w-4 h-4 text-brand-blue" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
              </button>

              {expandedPolicyId === 2 && (
                <div className="mt-4 p-6 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-6 animate-fadeIn">
                  <div>
                    <h5 className="font-bold text-navy-900 mb-2">■ 표준 수용 불가 사유 항목</h5>
                    <div className="flex flex-wrap gap-2">
                      {["해당 진료과 전문의 부재", "전문의 수술/시술 중", "응급수술실 가동 불가", "중환자실 병상 부족", "감염 격리병상 부족", "의료장비 사용 불가", "동시 중증환자 진료 중", "최종 치료 불가"].map((s, i) => (
                        <span key={i} className="bg-white px-3 py-1.5 rounded border border-slate-200 font-medium text-slate-800">
                          • {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold text-navy-900 mb-1">■ 회신 기록 항목</h5>
                    <p className="text-slate-700 leading-relaxed">
                      회신 시각, 담당 부서, 수용 불가 예상 종료시각, 초기 평가·안정화 가능 여부, 전문의 재협의 가능 여부, 다음 재확인 시각 기록
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-navy-900 mb-1">■ 평가 지표</h5>
                    <p className="text-slate-700">
                      수용 요청 평균 회신시간, 정보 갱신 기준 준수율, 사유 없는 수용 불가 응답 비율, 동일 환자 반복 문의 횟수
                    </p>
                  </div>
                </div>
              )}
            </div>
          </article>

          {/* POLICY 03 */}
          <article className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-900 text-white font-black text-xs flex items-center justify-center">
                  03
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-navy-900">
                  IMIST-AMBO 기반 119-응급실 표준 인계체계 도입
                </h3>
              </div>
              <span className="text-xs font-extrabold text-brand-blue bg-blue-50 px-2.5 py-1 rounded w-max">
                POLICY 03
              </span>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <span className="text-xs font-bold text-brand-blue uppercase block mb-1">핵심 제안</span>
                <p className="text-base font-bold text-navy-900 leading-snug">
                  환자의 핵심정보를 IMIST-AMBO 순서로 병원 도착 전에 전달하고, 도착 후 동일한 순서로 30~60초 이내에 짧게 구두 인계한다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-red-600 block">현황 및 문제점</span>
                  <p className="text-slate-700 leading-relaxed">
                    구급대원과 의료기관에 따라 인계 순서와 표현이 달라지면 증상 발생 시각, 활력징후, 현장 처치 내역 등의 주요 정보가 누락되거나 도착 후 같은 내용을 중복 확인하느라 치료 준비가 늦어질 수 있습니다.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-emerald-700 block">기대효과</span>
                  <p className="text-slate-700 leading-relaxed">
                    환자 정보를 일정한 순서로 전달하여 생명 직결 정보의 누락과 반복 질문을 방지하고, 응급실 의료진이 도착 전 미리 수술실 및 검사 공간을 준비할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => toggleExpand(3)}
                className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-between transition-colors"
              >
                <span>{expandedPolicyId === 3 ? 'IMIST-AMBO 9단계 항목 및 세부 실행계획 닫기' : 'IMIST-AMBO 9단계 항목 및 세부 실행계획 보기'}</span>
                {expandedPolicyId === 3 ? <ChevronUp className="w-4 h-4 text-brand-blue" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
              </button>

              {expandedPolicyId === 3 && (
                <div className="mt-4 p-6 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-6 animate-fadeIn">
                  <div>
                    <h5 className="font-bold text-navy-900 mb-3">■ IMIST-AMBO 표준 인계 항목</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {imistAmboItems.map((item, i) => (
                        <div key={i} className="bg-white p-3 rounded-lg border border-slate-200">
                          <span className="font-black text-brand-blue text-sm block mb-0.5">[{item.code}] {item.title}</span>
                          <span className="text-xs text-slate-600 font-medium">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold text-navy-900 mb-1">■ 4단계 적용 절차</h5>
                    <p className="text-slate-700 leading-relaxed">
                      1단계: 병원 도착 전 사전 전송 ➔ 2단계: 의료기관 수신 확인 및 검사실 준비 ➔ 3단계: 도착 후 30~60초 구두 인계 ➔ 4단계: 인수 확인 및 기록
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-navy-900 mb-2">■ 질환별 추가 필수 전달 항목</h5>
                    <div className="space-y-1.5 text-xs text-slate-700">
                      <p><strong>• 급성 뇌졸중:</strong> 증상 발생 또는 마지막 정상 확인 시각, 편측마비, 언어장애, 항응고제 복용 여부</p>
                      <p><strong>• 급성 심근경색:</strong> 흉통 발생 시각, 심전도 결과, 현장 투여약물</p>
                      <p><strong>• 중증외상:</strong> 사고기전, 주요 출혈, 경추·골반 고정 여부</p>
                      <p><strong>• 심정지:</strong> 목격 여부, 최초 리듬, 제세동 횟수, 자발순환 회복 여부</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </article>

          {/* POLICY 04 */}
          <article className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-900 text-white font-black text-xs flex items-center justify-center">
                  04
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-navy-900">
                  병원전 중증도와 최종 치료 가능성을 고려한 이송 원칙 확립
                </h3>
              </div>
              <span className="text-xs font-extrabold text-brand-blue bg-blue-50 px-2.5 py-1 rounded w-max">
                POLICY 04
              </span>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <span className="text-xs font-bold text-brand-blue uppercase block mb-1">핵심 제안</span>
                <p className="text-base font-bold text-navy-900 leading-snug">
                  단순 거리만을 기준으로 병원을 정하지 않고, 환자의 중증도·시간 민감성·최종 치료 가능성을 함께 고려하여 적정 병원으로 이송한다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-red-600 block">현황 및 문제점</span>
                  <p className="text-slate-700 leading-relaxed">
                    가장 가까운 병원만 선택하면 최종 수술이 불가능해 다시 전원해야 하고, 무조건 대형병원만 찾으면 권역센터 과밀화로 정작 중증환자가 치료받지 못하게 됩니다.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-emerald-700 block">기대효과</span>
                  <p className="text-slate-700 leading-relaxed">
                    중증환자는 최종 치료 가능 센터로 직접 이송하고, 지역 치료 가능 환자는 적정 의료기관으로 분산하여 권역 응급센터의 수용력을 지킵니다.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => toggleExpand(4)}
                className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-between transition-colors"
              >
                <span>{expandedPolicyId === 4 ? '환자 유형별 이송 원칙 및 시민 수칙 닫기' : '환자 유형별 이송 원칙 및 시민 수칙 보기'}</span>
                {expandedPolicyId === 4 ? <ChevronUp className="w-4 h-4 text-brand-blue" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
              </button>

              {expandedPolicyId === 4 && (
                <div className="mt-4 p-6 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-6 animate-fadeIn">
                  <div>
                    <h5 className="font-bold text-navy-900 mb-2">■ 환자 유형별 이송 원칙</h5>
                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded border border-slate-200">
                        <strong className="text-red-700 block mb-0.5">1. 즉시 안정화 필요 환자</strong>
                        <span>가장 가까운 적정 의료기관에서 기도·호흡·순환 초기 안정화 선행</span>
                      </div>
                      <div className="bg-white p-3 rounded border border-slate-200">
                        <strong className="text-brand-blue block mb-0.5">2. 시간 민감 중증질환 환자</strong>
                        <span>해당 질환의 최종 치료가 가능한 전문센터로 직접 이송</span>
                      </div>
                      <div className="bg-white p-3 rounded border border-slate-200">
                        <strong className="text-slate-700 block mb-0.5">3. 경증 및 비응급 가능 환자</strong>
                        <span>지역 응급의료기관 또는 야간·휴일 진료기관 이용 안내</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold text-navy-900 mb-2">■ 연계 시민 수칙 6가지</h5>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700 text-xs">
                      <li>응급실은 도착 순서가 아니라 중증도에 따라 진료합니다.</li>
                      <li>가장 큰 병원이 항상 가장 빠르거나 적절한 선택은 아닙니다.</li>
                      <li>병상이 있어도 전문의·수술실·장비가 부족하면 수용이 어려울 수 있습니다.</li>
                      <li>위급한 환자는 장거리 이동보다 가까운 병원의 초기 처치가 먼저일 수 있습니다.</li>
                      <li>응급상황에서는 직접 병원을 찾기보다 119의 안내를 따르는 것이 중요합니다.</li>
                      <li>경증환자의 적정 이용이 중증환자의 치료기회를 보호합니다.</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </article>

          {/* POLICY 05 */}
          <article className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-900 text-white font-black text-xs flex items-center justify-center">
                  05
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-navy-900">
                  지역 책임형 초기 처치 및 전원조정 네트워크 구축
                </h3>
              </div>
              <span className="text-xs font-extrabold text-brand-blue bg-blue-50 px-2.5 py-1 rounded w-max">
                POLICY 05
              </span>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <span className="text-xs font-bold text-brand-blue uppercase block mb-1">핵심 제안</span>
                <p className="text-base font-bold text-navy-900 leading-snug">
                  지역 의료기관이 중증환자를 우선 안정화하고, 24시간 전담 조정기관을 통해 최종 치료기관으로 안전하게 전원하도록 지원한다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-red-600 block">현황 및 문제점</span>
                  <p className="text-slate-700 leading-relaxed">
                    지역 의료기관이 중증환자를 수용했으나 최종 수술이 불가능한 경우, 의료진이 직접 여러 병원에 개별 연락하느라 전원이 지연되고 법적 부담을 떠안게 됩니다.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-emerald-700 block">기대효과</span>
                  <p className="text-slate-700 leading-relaxed">
                    지역 의료진이 부담 없이 1차 초기 처치에 전념하고, 전원조정 허브가 최종 치료기관 연결을 전담하여 안전한 2차 이송을 보장합니다.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => toggleExpand(5)}
                className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-between transition-colors"
              >
                <span>{expandedPolicyId === 5 ? '전원조정 허브 역할 및 법적 부담 완화 기준 닫기' : '전원조정 허브 역할 및 법적 부담 완화 기준 보기'}</span>
                {expandedPolicyId === 5 ? <ChevronUp className="w-4 h-4 text-brand-blue" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
              </button>

              {expandedPolicyId === 5 && (
                <div className="mt-4 p-6 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-6 animate-fadeIn">
                  <div>
                    <h5 className="font-bold text-navy-900 mb-2">■ 24시간 중증응급환자 전원조정 허브의 핵심 역할</h5>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700 text-xs">
                      <li>환자의 중증도와 필요 치료 확인 및 권역 내 최종 치료기관 조율</li>
                      <li>보내는 병원과 받는 병원 간 전문의 상호 협의 연결 지원</li>
                      <li>의무기록·영상·검사 결과 사전 디지털 표준 전송 지원</li>
                      <li>구급차 및 이송수단 조정, 장거리 이송 시 의료지도 제공</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-navy-900 mb-2">■ 의료진 법적 부담 완화 요건</h5>
                    <p className="text-slate-700 leading-relaxed text-xs">
                      당시 가용한 인력·시설 기록, 표준지침에 따른 초기 응급처치, 신속한 전원조정 요청 및 환자 정보 전달 요건을 충족한 의료진에 대해 당시 제한된 의료환경을 객관적으로 고려합니다. (고의적 거부나 중과실은 제외)
                    </p>
                  </div>
                </div>
              )}
            </div>
          </article>

        </div>

        {/* 5 Policies Connection Framework Table */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-navy-900">
            5대 정책의 이송 단계별 연결 구조
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-navy-900 text-white font-bold">
                  <th className="p-3.5 rounded-tl-lg">이송 단계</th>
                  <th className="p-3.5">현재 발생 가능한 주요 문제</th>
                  <th className="p-3.5 rounded-tr-lg">CODE BLUE 정책 제안 대안</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {connectionFramework.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-navy-900 whitespace-nowrap">{row.stage}</td>
                    <td className="p-3.5 text-red-700">{row.problem}</td>
                    <td className="p-3.5 font-bold text-brand-blue bg-blue-50/30">{row.proposal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Phased Roadmap & Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Roadmap */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-3">
            <h3 className="text-base font-bold text-navy-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-blue" />
              <span>단계별 추진계획</span>
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 bg-slate-50 rounded border border-slate-200">
                <strong className="text-brand-blue block font-bold mb-0.5">1단계: 기준 설계 및 시범운영 (1년)</strong>
                <p className="text-slate-600">2~3개 권역 시범사업, 수용정보 항목 표준화, IMIST-AMBO 지침 개발</p>
              </div>
              <div className="p-3 bg-slate-50 rounded border border-slate-200">
                <strong className="text-brand-blue block font-bold mb-0.5">2단계: 정보체계 연계 (2~3년)</strong>
                <p className="text-slate-600">응급의료정보통신망-119 이동단말기 연계, 사전 정보 전송 및 수용 회신 적용</p>
              </div>
              <div className="p-3 bg-slate-50 rounded border border-slate-200">
                <strong className="text-brand-blue block font-bold mb-0.5">3단계: 전국 확대 및 지속 평가 (3년 이후)</strong>
                <p className="text-slate-600">권역별 운영모델 전국 확대, 질환별 성과 비교 및 제도 개선</p>
              </div>
            </div>
          </div>

          {/* Principles */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-3">
            <h3 className="text-base font-bold text-navy-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
              <span>정책 추진 원칙</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="p-2.5 bg-slate-50 rounded border border-slate-200">
                <strong>1. 기존 체계 활용:</strong> 새로운 시스템 중복 구축 대신 기존 통신망 및 119 단말기 연계
              </li>
              <li className="p-2.5 bg-slate-50 rounded border border-slate-200">
                <strong>2. 현장 입력 부담 최소화:</strong> 기존 입력자료 자동 변환 및 공유
              </li>
              <li className="p-2.5 bg-slate-50 rounded border border-slate-200">
                <strong>3. 정당한 수용 불가 구분:</strong> 자원 부족 상황과 정당 사유 없는 거부를 명확히 구분
              </li>
              <li className="p-2.5 bg-slate-50 rounded border border-slate-200">
                <strong>4. 처벌보다 원인 개선:</strong> 수용 불가 기록을 지자체 자원 지원의 정책자료로 활용
              </li>
              <li className="p-2.5 bg-slate-50 rounded border border-slate-200">
                <strong>5. 환자안전 최우선:</strong> 단순 거리나 규모가 아닌 환자 상태와 최종 치료 가능성 기준
              </li>
            </ul>
          </div>
        </div>

        {/* CODE BLUE Conclusion Block */}
        <div className="bg-navy-900 text-white rounded-2xl p-8 sm:p-10 shadow-md text-center space-y-4">
          <span className="text-xs font-bold text-brand-lightblue uppercase tracking-wider block">
            CODE BLUE CONCLUSION
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
            “환자가 헤매지 않게 하려면 병원의 실제 치료역량, 신뢰할 수 있는 수용정보, 표준화된 인계, 책임 있는 전원조정이 하나의 흐름으로 연결되어야 합니다.”
          </h3>
          <p className="text-slate-300 text-sm max-w-3xl mx-auto leading-relaxed">
            CODE BLUE는 새로운 기술 하나가 모든 문제를 해결한다고 보지 않습니다. 이미 존재하는 응급의료체계가 정확한 정보와 명확한 역할분담을 바탕으로 연결될 때, 중증응급환자의 불필요한 이송 지연을 줄일 수 있다고 제안합니다.
          </p>
        </div>

        {/* Statutory References & External Links */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-navy-900">
            참고 법령 및 정책 공식 자료
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <a href="https://www.law.go.kr/LSW/lsInfoP.do?lsId=000218" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 rounded border border-slate-200 hover:border-brand-blue font-semibold text-slate-800 flex items-center justify-between">
              <span>「응급의료에 관한 법률」 현행 본문</span>
              <ExternalLink className="w-3.5 h-3.5 text-brand-blue shrink-0" />
            </a>
            <a href="https://www.law.go.kr/LSW/lsLawLinkInfo.do?chrClsCd=010202&lsJoLnkSeq=1000818167" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 rounded border border-slate-200 hover:border-brand-blue font-semibold text-slate-800 flex items-center justify-between">
              <span>응급의료법 제6조 (거부금지)</span>
              <ExternalLink className="w-3.5 h-3.5 text-brand-blue shrink-0" />
            </a>
            <a href="https://www.law.go.kr/LSW/lsLawLinkInfo.do?chrClsCd=010202&lsJoLnkSeq=1000818031" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 rounded border border-slate-200 hover:border-brand-blue font-semibold text-slate-800 flex items-center justify-between">
              <span>응급의료법 제11조 (이송)</span>
              <ExternalLink className="w-3.5 h-3.5 text-brand-blue shrink-0" />
            </a>
            <a href="https://www.law.go.kr/LSW/lsLawLinkInfo.do?chrClsCd=010202&lsJoLnkSeq=900350989" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 rounded border border-slate-200 hover:border-brand-blue font-semibold text-slate-800 flex items-center justify-between">
              <span>응급의료법 제15조 (정보통신망)</span>
              <ExternalLink className="w-3.5 h-3.5 text-brand-blue shrink-0" />
            </a>
            <a href="https://www.law.go.kr/lsLinkProc.do?chrClsCd=010202&datClsCd=010102&gubun=admRul&joNo=001700000%5E001800000&lsId=41882&lsNm=119%EA%B5%AC%EC%A1%B0%C2%B7%EA%B5%AC%EA%B8%89%EC%97%90%EA%B4%80%ED%95%9C%EB%B2%95%EB%A5%A0%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99&mode=10" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 rounded border border-slate-200 hover:border-brand-blue font-semibold text-slate-800 flex items-center justify-between">
              <span>119구조·구급법 시행규칙 제18조</span>
              <ExternalLink className="w-3.5 h-3.5 text-brand-blue shrink-0" />
            </a>
            <a href="https://www.mohw.go.kr/board.es?act=view&bid=0027&cg_code=&list_no=1483126&mid=a10503010100&tag=" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 rounded border border-slate-200 hover:border-brand-blue font-semibold text-slate-800 flex items-center justify-between">
              <span>복지부 진료거부 사유 지침</span>
              <ExternalLink className="w-3.5 h-3.5 text-brand-blue shrink-0" />
            </a>
          </div>
        </div>

      </div>

      {/* Modals */}
      <PdfPreviewModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
      <ResearchProcessModal isOpen={isProcessOpen} onClose={() => setIsProcessOpen(false)} />

    </section>
  );
}
