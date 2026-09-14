import React, { useState, useEffect } from 'react';
import { BarChart2 } from 'lucide-react';

export default function SurveyResultsSection() {
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

        {/* Live Data or Published After Survey Card */}
        {dbStats && dbStats.total > 0 ? (
          /* Live DB Stats View */
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center text-sm font-bold text-brand-blue">
              Neon DB 실시간 {dbStats.total}건의 시민 응답 집계 중
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Chart 1: Delay Causes */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-base font-bold text-navy-900 mb-6">
                  주요 이송 지연 원인
                </h3>
                <div className="space-y-4">
                  {dbStats.causes && dbStats.causes.map((item, idx) => {
                    const pct = Math.round((item.count / dbStats.total) * 100);
                    return (
                      <div key={idx}>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-800">{item.q3_cause}</span>
                          <span className="text-brand-blue font-bold">{pct}% ({item.count}명)</span>
                        </div>
                        <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                          <div className="bg-brand-blue h-full" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Chart 2: Improvements */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-base font-bold text-navy-900 mb-6">
                  가장 필요하다고 생각하는 개선방안
                </h3>
                <div className="space-y-4">
                  {dbStats.improvements && dbStats.improvements.map((item, idx) => {
                    const pct = Math.round((item.count / dbStats.total) * 100);
                    return (
                      <div key={idx}>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-800">{item.q5_improvement}</span>
                          <span className="text-navy-900 font-bold">{pct}% ({item.count}명)</span>
                        </div>
                        <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                          <div className="bg-navy-900 h-full" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Clean 0-response / Pending Survey Card */
          <div className="bg-slate-50 rounded-2xl p-10 sm:p-16 border border-slate-200 text-center max-w-3xl mx-auto mb-10">
            <div className="w-14 h-14 rounded-full bg-slate-200/70 text-slate-500 flex items-center justify-center mx-auto mb-4">
              <BarChart2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-2">
              조사 후 공개 예정
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              시민 여러분이 설문을 제출하시면 데이터베이스에 자동 집계되어 시각화 그래프로 공개됩니다.
            </p>
          </div>
        )}

        {/* Free-form Opinion Keywords */}
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 max-w-3xl mx-auto">
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
