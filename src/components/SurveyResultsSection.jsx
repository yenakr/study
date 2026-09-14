import React, { useState } from 'react';
import { BarChart2, PieChart, Tag, Lock, Eye, AlertCircle } from 'lucide-react';

export default function SurveyResultsSection() {
  const [showPreviewData, setShowPreviewData] = useState(false);

  const keywords = [
    "수용 병상 정보", "119 이송 안내", "전문의 당직 체계", "응급실 대기시간",
    "중증도 분류(KTAS)", "재이송 개선", "지역 의료 인프라", "시민 인식 홍보"
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <BarChart2 className="w-3.5 h-3.5 text-brand-blue" />
            <span>수집 의견 결과 시각화</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-3">
            시민 의견 분석 통계
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            시민 여러분의 소중한 무기명 응답을 시각적 그래프로 집계하여 공유합니다.
          </p>
        </div>

        {/* Status Banner */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-slate-700">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-navy-900">현재 데이터 상태:</span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                  조사 진행 중 (의견수집 후 최종 공개 예정)
                </span>
              </div>
              <p className="text-slate-500 text-xs mt-0.5">
                학술 윤리에 따라 실제 데이터 수집 전 가상 수치를 사실처럼 게시하지 않습니다.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowPreviewData(!showPreviewData)}
            className="inline-flex items-center px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-navy-900 text-xs font-bold shadow-sm transition-colors shrink-0"
          >
            <Eye className="w-4 h-4 mr-1.5 text-brand-blue" />
            <span>{showPreviewData ? '공개 예정 레이아웃 보기' : '통계 그래프 틀 미리보기'}</span>
          </button>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Chart Card 1: ER Experience & Inconvenience */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-bold text-navy-900 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-brand-blue" />
                <span>주요 이송 지연 원인 집계</span>
              </h3>
              <span className="text-xs text-slate-400 font-semibold">도넛 그래프</span>
            </div>

            {!showPreviewData ? (
              <div className="py-16 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-slate-200/70 border-4 border-dashed border-slate-300 flex items-center justify-center mb-3 text-slate-400">
                  <Lock className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-600 mb-1">조사 완료 후 공개 예정</h4>
                <p className="text-xs text-slate-400 max-w-xs">
                  시민 의견 수집이 완료되면 응답 비율이 실시간 도넛 차트로 표시됩니다.
                </p>
              </div>
            ) : (
              <div className="space-y-4 animate-fadeIn">
                <p className="text-xs text-brand-blue font-bold">※ 통계 레이아웃 예시입니다</p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>수용가능 전문의/수술실 부족</span>
                      <span className="text-brand-blue">42%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-brand-blue h-full w-[42%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>구급대-병원 간 실시간 정보 공유 한계</span>
                      <span className="text-brand-blue">31%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-brand-lightblue h-full w-[31%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>경증환자의 응급실 이용 쏠림</span>
                      <span className="text-brand-blue">18%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-slate-400 h-full w-[18%]" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chart Card 2: Preferred Improvements */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-bold text-navy-900 flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-brand-blue" />
                <span>시민이 가장 희망하는 개선방안</span>
              </h3>
              <span className="text-xs text-slate-400 font-semibold">막대 그래프</span>
            </div>

            {!showPreviewData ? (
              <div className="py-16 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-slate-200/70 border-4 border-dashed border-slate-300 flex items-center justify-center mb-3 text-slate-400">
                  <Lock className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-600 mb-1">조사 완료 후 공개 예정</h4>
                <p className="text-xs text-slate-400 max-w-xs">
                  시민들이 가장 필요하다고 꼽은 정책 대안 우선순위가 집계됩니다.
                </p>
              </div>
            ) : (
              <div className="space-y-4 animate-fadeIn">
                <p className="text-xs text-brand-blue font-bold">※ 통계 레이아웃 예시입니다</p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>실시간 치료역량 수용정보 체계 구축</span>
                      <span className="text-navy-900">48%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-navy-900 h-full w-[48%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>119-병원 간 표준 인계 체계 마련</span>
                      <span className="text-navy-900">27%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-brand-blue h-full w-[27%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>응급실 이용 수칙 시민 인식 홍보</span>
                      <span className="text-navy-900">15%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-slate-400 h-full w-[15%]" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Free-form Opinion Anonymized Keyword Cloud */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-5 h-5 text-brand-blue" />
            <h3 className="text-base font-bold text-navy-900">
              시민 자유 의견 주요 키워드
            </h3>
          </div>
          <p className="text-xs text-slate-500 mb-6">
            개인정보 및 서술문 원문 대신 정제된 핵심 키워드만을 안전하게 추출하여 보여줍니다.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {keywords.map((kw, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-sm hover:border-brand-blue hover:text-brand-blue transition-colors cursor-default"
              >
                #{kw}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
