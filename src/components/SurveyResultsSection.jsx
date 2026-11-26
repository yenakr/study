import React, { useState, useEffect } from 'react';

export default function SurveyResultsSection({ refreshTrigger }) {
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
    <div className="text-left space-y-6 pt-10 border-t border-zinc-800">
      <div className="space-y-1">
        <h3 className="text-[20px] font-bold text-white">
          시민 의견 실시간 집계 현황
        </h3>
        <p className="text-[14px] text-zinc-400">
          익명으로 수집된 실제 시민 응답 데이터베이스 통계입니다.
        </p>
      </div>

      {dbStats && dbStats.total > 0 ? (
        <div className="space-y-6 animate-fadeIn">
          <div className="text-[13px] font-mono text-zinc-300 bg-[#050B18] p-3 border border-zinc-800 flex justify-between rounded-[2px]">
            <span>집계 기준: 2026 한양학술타운 LION 설문 데이터베이스</span>
            <span className="font-bold text-[#00E5FF]">누적 응답: {dbStats.total}건</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chart 1: Delay Causes */}
            {dbStats.causes && dbStats.causes.length > 0 && (
              <div className="border border-zinc-800 bg-[#050B18] p-6 space-y-4 rounded-[4px]">
                <h4 className="text-[16px] font-bold text-white border-b border-zinc-800 pb-2">
                  이송 지연 원인에 대한 시민 인식
                </h4>
                <div className="space-y-3">
                  {dbStats.causes.map((item, idx) => {
                    const pct = Math.round((item.count / dbStats.total) * 100);
                    return (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex justify-between text-[14px] text-zinc-300">
                          <span className="truncate pr-2">{item.q3_cause}</span>
                          <span className="font-mono font-bold text-[#00E5FF] shrink-0">{pct}% ({item.count}명)</span>
                        </div>
                        <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#00E5FF] rounded-full transition-all duration-500"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Chart 2: Priority Proposals */}
            {dbStats.improvements && dbStats.improvements.length > 0 && (
              <div className="border border-zinc-800 bg-[#050B18] p-6 space-y-4 rounded-[4px]">
                <h4 className="text-[16px] font-bold text-white border-b border-zinc-800 pb-2">
                  가장 시급한 정책 대안
                </h4>
                <div className="space-y-3">
                  {dbStats.improvements.map((item, idx) => {
                    const pct = Math.round((item.count / dbStats.total) * 100);
                    return (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex justify-between text-[14px] text-zinc-300">
                          <span className="truncate pr-2">{item.q5_improvement}</span>
                          <span className="font-mono font-bold text-[#00E5FF] shrink-0">{pct}% ({item.count}명)</span>
                        </div>
                        <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#00E5FF] rounded-full transition-all duration-500"
                            style={{ width: `${pct}%` }}
                          />
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
        <div className="p-6 border border-zinc-800 bg-[#050B18] text-center text-[14px] text-zinc-400 rounded-[4px]">
          첫 번째 시민 의견을 등록해 주세요. 실시간 집계 차트가 이곳에 표시됩니다.
        </div>
      )}
    </div>
  );
}
