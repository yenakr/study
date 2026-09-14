import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function SurveyResultsSection() {
  const [showPreviewData, setShowPreviewData] = useState(false);
  const [dbStats, setDbStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/survey');
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.total > 0) {
            setDbStats(data);
          }
        }
      } catch (e) {
        console.log('Stats fetch fallback');
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  const keywords = [
    "수용 병상 정보", "119 이송 안내", "전문의 당직 체계", "응급실 대기시간",
    "중증도 분류", "재이송 개선", "지역 의료 인프라", "시민 인식 홍보"
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-3">
            시민 의견 결과
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            시민 여러분의 응답은 개인정보 없이 통계 형태로 집계하여 공개됩니다.
          </p>
        </div>

        {/* Status Notice */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="text-slate-700">
            <span className="font-bold text-navy-900">Neon DB 연동 상태: </span>
            {dbStats && dbStats.total > 0 ? (
              <span className="text-emerald-700 font-bold">
                실시간 {dbStats.total}건의 시민 의견 집계 중
              </span>
            ) : (
              <span>의견수집 후 공개 예정 (Neon DB 대기 중)</span>
            )}
          </div>

          <button
            onClick={() => setShowPreviewData(!showPreviewData)}
            className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:text-navy-900 text-xs font-bold transition-colors"
          >
            {showPreviewData ? (
              <>
                <EyeOff className="w-4 h-4 mr-1.5" />
                <span>예시 그래프 닫기</span>
              </>
            ) : (
              <>
                <Eye className="w-4 h-4 mr-1.5 text-brand-blue" />
                <span>그래프 예시 형태 보기</span>
              </>
            )}
          </button>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          {/* Chart Card 1 */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h3 className="text-base font-bold text-navy-900 mb-6">
              주요 이송 지연 원인
            </h3>

            {dbStats && dbStats.causes && dbStats.causes.length > 0 ? (
              <div className="space-y-4">
                <p className="text-xs text-emerald-700 font-semibold">Neon DB 실시간 집계</p>
                <div className="space-y-3">
                  {dbStats.causes.map((item, idx) => {
                    const pct = Math.round((item.count / dbStats.total) * 100);
                    return (
                      <div key={idx}>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span>{item.q3_cause}</span>
                          <span className="text-brand-blue">{pct}% ({item.count}명)</span>
                        </div>
                        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-brand-blue h-full" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : !showPreviewData ? (
              <div className="py-14 text-center">
                <p className="text-sm font-bold text-slate-500 mb-1">의견수집 후 공개 예정</p>
                <p className="text-xs text-slate-400">
                  시민 의견 제출 시 Neon DB에 자동 집계되어 표시됩니다.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-xs text-slate-500 font-semibold">예시 데이터입니다</p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>수용가능 전문의 및 수술실 부족</span>
                      <span className="text-brand-blue">42%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-brand-blue h-full w-[42%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>구급대-병원 간 실시간 정보 공유 한계</span>
                      <span className="text-brand-blue">31%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-brand-lightblue h-full w-[31%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>경증환자의 응급실 이용 쏠림</span>
                      <span className="text-brand-blue">18%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-slate-400 h-full w-[18%]" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chart Card 2 */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h3 className="text-base font-bold text-navy-900 mb-6">
              필요하다고 생각하는 개선방안
            </h3>

            {dbStats && dbStats.improvements && dbStats.improvements.length > 0 ? (
              <div className="space-y-4">
                <p className="text-xs text-emerald-700 font-semibold">Neon DB 실시간 집계</p>
                <div className="space-y-3">
                  {dbStats.improvements.map((item, idx) => {
                    const pct = Math.round((item.count / dbStats.total) * 100);
                    return (
                      <div key={idx}>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span>{item.q5_improvement}</span>
                          <span className="text-navy-900">{pct}% ({item.count}명)</span>
                        </div>
                        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-navy-900 h-full" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : !showPreviewData ? (
              <div className="py-14 text-center">
                <p className="text-sm font-bold text-slate-500 mb-1">의견수집 후 공개 예정</p>
                <p className="text-xs text-slate-400">
                  시민 의견 제출 시 Neon DB에 자동 집계되어 표시됩니다.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-xs text-slate-500 font-semibold">예시 데이터입니다</p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>실시간 치료역량 수용정보 체계 구축</span>
                      <span className="text-navy-900">48%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-navy-900 h-full w-[48%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>구급대-병원 간 표준 인계 체계 마련</span>
                      <span className="text-navy-900">27%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-brand-blue h-full w-[27%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>응급실 이용 수칙 시민 인식 홍보</span>
                      <span className="text-navy-900">15%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-slate-400 h-full w-[15%]" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Free-form Opinion Keywords */}
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
          <h3 className="text-base font-bold text-navy-900 mb-2">
            자유 의견 주요 키워드
          </h3>
          <p className="text-xs text-slate-500 mb-4">
            개인정보 제거 후 핵심 단어만 표시됩니다.
          </p>

          <div className="flex flex-wrap gap-2">
            {keywords.map((kw, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded bg-white border border-slate-200 text-xs font-medium text-slate-700"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
