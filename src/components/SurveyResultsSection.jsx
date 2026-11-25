import React, { useState, useEffect } from 'react';
import { BarChart2, ShieldCheck, CheckCircle2 } from 'lucide-react';

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
        // Fallback silently if offline or API not present
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
          <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
            CITIZEN OPINION ANALYSIS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
            시민 의견 수집 및 집계 현황
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            시민 여러분의 의견은 개인식별정보 없이 학술 연구 분석에 활용되며, 임의의 가공이나 가짜 통계 없이 실제 응답 데이터만 집계됩니다.
          </p>
        </div>

        {/* Live Data or Pending Status */}
        {dbStats && dbStats.total > 0 ? (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center justify-between text-xs sm:text-sm text-brand-blue font-bold">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>시민 응답 누적 집계</span>
              </span>
              <span>총 {dbStats.total}건</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Chart 1: Delay Causes */}
              {dbStats.causes && dbStats.causes.length > 0 && (
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
                  <h3 className="text-sm font-bold text-navy-900 border-b border-slate-200 pb-2">
                    주요 이송 지연 원인에 대한 인식
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
                    가장 시급한 정책적 개선방안
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
          <div className="bg-slate-50 rounded-2xl p-8 sm:p-12 border border-slate-200 text-center max-w-2xl mx-auto space-y-3">
            <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center mx-auto">
              <BarChart2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-navy-900">
              학술 의견 수집 진행 중
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              본 프로젝트는 가공된 임의 수치나 가짜 통계를 제공하지 않습니다. 시민 설문 응답이 제출되면 실시간 집계되어 통계 그래프로 즉시 반영됩니다.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
