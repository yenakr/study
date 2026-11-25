import React, { useState, useEffect } from 'react';
import { BarChart2, CheckCircle2 } from 'lucide-react';

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
        // Fallback silently
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  return (
    <section className="py-16 bg-white border-t border-slate-200 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
            시민 의견 집계 현황
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            시민 여러분이 제출해주신 의견의 익명 집계 통계입니다.
          </p>
        </div>

        {/* Live Data or Pending Status */}
        {dbStats && dbStats.total > 0 ? (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center justify-between text-xs sm:text-sm text-brand-blue font-bold">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>누적 응답</span>
              </span>
              <span>총 {dbStats.total}건</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Chart 1: Delay Causes */}
              {dbStats.causes && dbStats.causes.length > 0 && (
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
                  <h3 className="text-sm font-bold text-navy-900 border-b border-slate-200 pb-2">
                    주요 이송 지연 원인
                  </h3>
                  <div className="space-y-3">
                    {dbStats.causes.map((item, idx) => {
                      const pct = Math.round((item.count / dbStats.total) * 100);
                      return (
                        <div key={idx} className="space-y-1">
                          <div className="flex justify-between text-xs font-medium">
                            <span className="text-slate-800">{item.q3_cause}</span>
                            <span className="text-brand-blue font-bold">{pct}% ({item.count}명)</span>
                          </div>
                          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                            <div className="bg-brand-blue h-full rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Chart 2: Improvements */}
              {dbStats.improvements && dbStats.improvements.length > 0 && (
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
                  <h3 className="text-sm font-bold text-navy-900 border-b border-slate-200 pb-2">
                    가장 시급한 개선방안
                  </h3>
                  <div className="space-y-3">
                    {dbStats.improvements.map((item, idx) => {
                      const pct = Math.round((item.count / dbStats.total) * 100);
                      return (
                        <div key={idx} className="space-y-1">
                          <div className="flex justify-between text-xs font-medium">
                            <span className="text-slate-800">{item.q5_improvement}</span>
                            <span className="text-navy-900 font-bold">{pct}% ({item.count}명)</span>
                          </div>
                          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                            <div className="bg-navy-900 h-full rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 rounded-2xl p-8 sm:p-12 border border-slate-200 text-center max-w-xl mx-auto space-y-3">
            <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center mx-auto">
              <BarChart2 className="w-6 h-6" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-navy-900">
              응답 집계 준비 중
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
              설문 응답이 제출되면 실시간 통계로 자동 반영됩니다.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
