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
    <div className="text-left space-y-8 pt-8 border-t border-zinc-200">
      <div className="space-y-1.5">
        <h3 className="text-[22px] font-semibold text-zinc-950">
          시민 의견 실시간 집계 현황
        </h3>
        <p className="text-[15px] text-zinc-600">
          익명으로 수집된 실제 시민 응답 통계입니다.
        </p>
      </div>

      {dbStats && dbStats.total > 0 ? (
        <div className="space-y-6 animate-fadeIn">
          <div className="text-[13px] font-mono text-zinc-700 bg-zinc-50 p-3 border border-zinc-200 flex justify-between">
            <span>집계 기준: 2026 한양학술타운 LION 설문 데이터베이스</span>
            <span className="font-bold text-zinc-950">누적 응답: {dbStats.total}건</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Chart 1: Delay Causes */}
            {dbStats.causes && dbStats.causes.length > 0 && (
              <div className="border border-zinc-300 bg-white p-6 sm:p-8 space-y-4">
                <h4 className="text-[17px] font-bold text-zinc-950 border-b border-zinc-200 pb-2">
                  이송 지연 원인에 대한 인식
                </h4>
                <div className="space-y-3">
                  {dbStats.causes.map((item, idx) => {
                    const pct = Math.round((item.count / dbStats.total) * 100);
                    return (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex justify-between text-[15px] text-zinc-800">
                          <span className="truncate pr-2">{item.q3_cause}</span>
                          <span className="font-mono font-bold text-zinc-950 shrink-0">{pct}% ({item.count}명)</span>
                        </div>
                        <div className="w-full bg-zinc-100 h-2 overflow-hidden">
                          <div className="bg-zinc-950 h-full" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Chart 2: Improvements */}
            {dbStats.improvements && dbStats.improvements.length > 0 && (
              <div className="border border-zinc-300 bg-white p-6 sm:p-8 space-y-4">
                <h4 className="text-[17px] font-bold text-zinc-950 border-b border-zinc-200 pb-2">
                  가장 시급한 대책 선호도
                </h4>
                <div className="space-y-3">
                  {dbStats.improvements.map((item, idx) => {
                    const pct = Math.round((item.count / dbStats.total) * 100);
                    return (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex justify-between text-[15px] text-zinc-800">
                          <span className="truncate pr-2">{item.q5_improvement}</span>
                          <span className="font-mono font-bold text-zinc-950 shrink-0">{pct}% ({item.count}명)</span>
                        </div>
                        <div className="w-full bg-zinc-100 h-2 overflow-hidden">
                          <div className="bg-zinc-950 h-full" style={{ width: `${pct}%` }} />
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
        <div className="border border-zinc-200 bg-white p-8 text-center text-[15px] text-zinc-600">
          설문 응답이 제출되면 실시간 집계 통계가 표시됩니다.
        </div>
      )}

      {/* Next Section Navigation Link */}
      <div className="pt-8 border-t border-zinc-200 flex justify-end">
        <button
          onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="inline-flex items-center min-h-[44px] px-6 py-3 bg-zinc-950 hover:bg-zinc-800 text-white text-[15px] font-semibold rounded-[2px] transition-colors gap-2"
        >
          <span>프로젝트 소개 보기</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
