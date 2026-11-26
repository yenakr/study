import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function SurveyResultsSection({ refreshTrigger, setActiveTab }) {
  const [dbStats, setDbStats] = useState(null);
  const [loading, setLoading] = useState(true);

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
      // Fallback
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchStats();
  }, [refreshTrigger]);

  return (
    <div className="text-left space-y-6 pt-6 border-t border-zinc-200">
      <div className="space-y-1">
        <h3 className="font-serif font-bold text-base text-zinc-900">
          시민 의견 실시간 집계 현황
        </h3>
        <p className="text-xs text-zinc-500">
          익명으로 수집된 실제 응답 통계입니다.
        </p>
      </div>

      {dbStats && dbStats.total > 0 ? (
        <div className="space-y-6 animate-fadeIn">
          <div className="text-xs font-mono text-zinc-700 bg-zinc-100 p-2.5 border border-zinc-200 flex justify-between">
            <span>집계 기준: 2026 한양학술타운 LION 설문 DB</span>
            <span className="font-bold text-zinc-900">누적 응답: {dbStats.total}건</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chart 1: Delay Causes */}
            {dbStats.causes && dbStats.causes.length > 0 && (
              <div className="border border-zinc-200 bg-white p-5 space-y-3">
                <h4 className="text-xs font-bold text-zinc-900 border-b border-zinc-100 pb-1.5">
                  이송 지연 원인에 대한 인식
                </h4>
                <div className="space-y-2.5">
                  {dbStats.causes.map((item, idx) => {
                    const pct = Math.round((item.count / dbStats.total) * 100);
                    return (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-xs text-zinc-700">
                          <span className="truncate pr-2">{item.q3_cause}</span>
                          <span className="font-mono font-bold text-zinc-900 shrink-0">{pct}% ({item.count}명)</span>
                        </div>
                        <div className="w-full bg-zinc-100 h-1.5 overflow-hidden">
                          <div className="bg-zinc-800 h-full" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Chart 2: Improvements */}
            {dbStats.improvements && dbStats.improvements.length > 0 && (
              <div className="border border-zinc-200 bg-white p-5 space-y-3">
                <h4 className="text-xs font-bold text-zinc-900 border-b border-zinc-100 pb-1.5">
                  가장 시급한 대책 선호도
                </h4>
                <div className="space-y-2.5">
                  {dbStats.improvements.map((item, idx) => {
                    const pct = Math.round((item.count / dbStats.total) * 100);
                    return (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-xs text-zinc-700">
                          <span className="truncate pr-2">{item.q5_improvement}</span>
                          <span className="font-mono font-bold text-zinc-900 shrink-0">{pct}% ({item.count}명)</span>
                        </div>
                        <div className="w-full bg-zinc-100 h-1.5 overflow-hidden">
                          <div className="bg-zinc-800 h-full" style={{ width: `${pct}%` }} />
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
        <div className="border border-zinc-200 bg-white p-8 text-center text-xs text-zinc-500">
          설문 응답이 제출되면 실시간 집계 통계가 표시됩니다.
        </div>
      )}

      {/* Next Section Navigation Link */}
      <div className="pt-6 border-t border-zinc-200 flex justify-end">
        <button
          onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="inline-flex items-center px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold rounded transition-colors"
        >
          <span>다음: 7. 프로젝트 및 연구진 소개</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
        </button>
      </div>

    </div>
  );
}
