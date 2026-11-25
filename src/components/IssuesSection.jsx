import React from 'react';
import { MAJOR_ISSUES_2026 } from '../data/policyData';
import { 
  AlertTriangle, Scale, ExternalLink, CheckCircle2, ChevronRight, ArrowRight 
} from 'lucide-react';

export default function IssuesSection({ setActiveTab }) {
  const { title, subtitle, cases, lawRevision, flow } = MAJOR_ISSUES_2026;

  return (
    <section id="issues" className="py-16 md:py-24 bg-slate-900 text-white font-sans border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-snug">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium">
            {subtitle}
          </p>
        </div>

        {/* 2 Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div 
              key={c.id}
              className="bg-slate-800/90 rounded-2xl p-6 sm:p-7 border border-slate-700 shadow-md flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-slate-700 text-slate-200 text-xs font-bold">
                    {c.date}
                  </span>
                  <span className="text-[11px] font-semibold text-amber-400 bg-amber-950/70 border border-amber-800/50 px-2 py-0.5 rounded">
                    {c.stageNote}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {c.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {c.summary}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-700/60">
                  {c.detail}
                </p>
              </div>

              {/* Source attribution */}
              <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>출처: {c.source}</span>
                <a
                  href={c.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>관련 보도</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 2026-10-20 Law Revision Card */}
        <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-lg space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-400 block">{lawRevision.date}</span>
                <h3 className="text-lg sm:text-xl font-bold text-white">{lawRevision.title}</h3>
              </div>
            </div>
            <span className="self-start sm:self-auto text-xs font-bold px-3 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-800">
              {lawRevision.effectiveDate}
            </span>
          </div>

          {/* Key Revision Points */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              개정법 주요 내용
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {lawRevision.highlights.map((item, idx) => (
                <div key={idx} className="bg-slate-900/60 rounded-lg p-3 border border-slate-700/60 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Emphasized Takeaway */}
          <div className="bg-blue-950/70 border border-blue-800/80 rounded-xl p-5 text-center space-y-1.5">
            <p className="text-sm sm:text-base font-bold text-blue-200 leading-snug">
              “{lawRevision.highlightNote.lead}”
            </p>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              {lawRevision.highlightNote.followup}
            </p>
          </div>

          <div className="text-[11px] text-slate-400 flex items-center justify-between pt-2">
            <span>출처: {lawRevision.source}</span>
            <a
              href={lawRevision.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>법령정보 원문</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>

        {/* Step-by-Step Flow: 사건·법 개정·CODE BLUE 정책의 연결 */}
        <div className="bg-slate-800/60 rounded-2xl p-6 sm:p-8 border border-slate-700/70 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h3 className="text-lg font-bold text-white">
              사건과 법 개정에서 정책 제안으로 이어지는 배경
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {flow.map((item, idx) => (
              <div 
                key={item.step}
                className="bg-slate-900 rounded-xl p-4 border border-slate-700/80 flex flex-col justify-between space-y-2"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-900">
                      단계 0{item.step}
                    </span>
                    {idx < flow.length - 1 && (
                      <ChevronRight className="hidden lg:block w-4 h-4 text-slate-600" />
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => { setActiveTab('policy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors shadow-sm"
            >
              <span>3대 정책 제안 보기</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
