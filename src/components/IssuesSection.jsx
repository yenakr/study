import React from 'react';
import { MAJOR_ISSUES_2026 } from '../data/policyData';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function IssuesSection({ setActiveTab }) {
  const { title, subtitle, cases, lawRevision, flow } = MAJOR_ISSUES_2026;

  return (
    <section id="issues" className="py-14 md:py-20 bg-[#FAF9F5] text-zinc-900 min-h-screen font-sans border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header (Left-aligned) */}
        <div className="space-y-3 text-left border-b border-zinc-300 pb-6">
          <div className="text-xs font-mono font-bold text-zinc-500">SECTION 02 • 2026년 현안 및 법 개정</div>
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-zinc-950 tracking-tight leading-snug">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-700 font-medium">
            {subtitle}
          </p>
        </div>

        {/* 2 Case Studies: Editorial Asymmetrical Document Review */}
        <div className="text-left space-y-4">
          <h3 className="font-serif font-bold text-base text-zinc-900">
            사법 리스크와 수용 기피의 양면 사례
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cases.map((c) => (
              <div 
                key={c.id}
                className="bg-white border border-zinc-300 p-6 space-y-3.5 shadow-xs"
              >
                <div className="flex items-baseline justify-between border-b border-zinc-100 pb-2">
                  <span className="font-mono text-xs font-bold text-zinc-900">{c.date}</span>
                  <span className="text-[11px] font-semibold text-amber-900 bg-amber-50 px-2 py-0.5 border border-amber-200">
                    {c.stageNote}
                  </span>
                </div>

                <h4 className="font-bold text-base text-zinc-950 leading-snug">
                  {c.title}
                </h4>

                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  {c.summary}
                </p>

                <p className="text-xs text-zinc-600 leading-relaxed pt-2 border-t border-zinc-100">
                  {c.detail}
                </p>

                <div className="pt-2 text-[11px] text-zinc-500 flex items-center justify-between border-t border-zinc-100">
                  <span>출처: {c.source}</span>
                  <a
                    href={c.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-zinc-700 hover:text-zinc-950 underline"
                  >
                    <span>관련 보도</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2026-10-20 Statutory Amendment Review Sheet */}
        <div className="bg-white border border-zinc-300 p-6 sm:p-8 text-left space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-200 pb-3">
            <div>
              <span className="font-mono text-xs text-zinc-500 block mb-0.5">{lawRevision.date} 공포</span>
              <h3 className="font-serif font-black text-lg sm:text-xl text-zinc-950">{lawRevision.title}</h3>
            </div>
            <span className="text-xs font-bold font-mono text-zinc-700 bg-zinc-100 px-2.5 py-1 border border-zinc-200">
              {lawRevision.effectiveDate}
            </span>
          </div>

          {/* Structured Points Table */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-zinc-500 block">개정법 주요 골자</span>
            <div className="border border-zinc-200 divide-y divide-zinc-200 text-xs sm:text-sm">
              {lawRevision.highlights.map((h, i) => (
                <div key={i} className="py-2.5 px-4 flex items-baseline gap-3 bg-white">
                  <span className="font-mono text-xs font-bold text-zinc-400 shrink-0">0{i + 1}</span>
                  <span className="text-zinc-800 leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Academic Assessment Callout */}
          <div className="border-l-2 border-zinc-900 bg-zinc-50 p-4 space-y-1">
            <p className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug">
              “{lawRevision.highlightNote.lead}”
            </p>
            <p className="text-xs text-zinc-600">
              {lawRevision.highlightNote.followup}
            </p>
          </div>

          <div className="text-[11px] text-zinc-500 flex items-center justify-between pt-1">
            <span>출처: {lawRevision.source}</span>
            <a
              href={lawRevision.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-zinc-700 hover:text-zinc-950 underline"
            >
              <span>국가법령정보센터 원문</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>

        {/* 4-Step Structural Process Flow */}
        <div className="border border-zinc-200 bg-white p-6 sm:p-7 text-left space-y-4">
          <h3 className="font-serif font-bold text-base text-zinc-900">
            사건·법 개정에서 정책 제안으로 이어지는 인과 구조
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 border border-zinc-200 divide-y md:divide-y-0 md:divide-x divide-zinc-200 text-left">
            {flow.map((item) => (
              <div key={item.step} className="p-4 space-y-1.5 bg-[#FAF9F5]">
                <div className="text-[11px] font-mono font-bold text-zinc-400">
                  단계 0{item.step}
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Section Navigation Link */}
        <div className="pt-6 border-t border-zinc-200 flex justify-end">
          <button
            onClick={() => { setActiveTab('research'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold rounded transition-colors"
          >
            <span>다음: 3. 연구 과정 보기</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
