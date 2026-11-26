import React from 'react';
import { MAJOR_ISSUES_2026 } from '../data/policyData';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function IssuesSection({ setActiveTab }) {
  const { title, subtitle, cases, lawRevision, flow } = MAJOR_ISSUES_2026;

  return (
    <section id="issues" className="py-24 md:py-28 bg-white text-zinc-900 min-h-screen font-sans border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 text-left border-b border-zinc-300 pb-8">
          <div className="text-[13px] font-mono font-bold text-zinc-600">SECTION 02 • 2026년 현안 및 법 개정</div>
          
          {/* Core Sentence First (20px bold) */}
          <div className="text-[20px] font-bold text-zinc-950 leading-snug break-keep">
            “{subtitle}”
          </div>

          {/* Section Title (36~40px) */}
          <h2 className="font-serif font-bold text-[36px] sm:text-[40px] text-zinc-950 tracking-tight leading-[1.3] break-keep">
            {title}
          </h2>
        </div>

        {/* 2 Case Studies */}
        <div className="text-left space-y-5">
          <h3 className="text-[22px] font-semibold text-zinc-950 leading-snug break-keep">
            사법 리스크와 수용 기피의 양면 사례
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cases.map((c) => (
              <div 
                key={c.id}
                className="bg-white border border-zinc-300 p-7 space-y-4 text-left"
              >
                <div className="flex items-baseline justify-between border-b border-zinc-200 pb-3">
                  <span className="font-mono text-[15px] font-bold text-zinc-900">{c.date}</span>
                  <span className="text-[13px] font-semibold text-zinc-900 bg-zinc-100 px-2.5 py-0.5 border border-zinc-300 rounded">
                    {c.stageNote}
                  </span>
                </div>

                <h4 className="font-bold text-[18px] text-zinc-950 leading-snug break-keep">
                  {c.title}
                </h4>

                <p className="text-[17px] text-zinc-800 leading-[1.75] font-normal break-keep">
                  {c.summary}
                </p>

                <p className="text-[15px] text-zinc-700 leading-relaxed pt-3 border-t border-zinc-100 break-keep">
                  {c.detail}
                </p>

                <div className="pt-3 text-[13px] text-zinc-600 flex items-center justify-between border-t border-zinc-100">
                  <span>출처: {c.source}</span>
                  <a
                    href={c.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] inline-flex items-center text-zinc-900 hover:underline font-semibold"
                  >
                    <span>관련 보도</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2026-10-20 Statutory Amendment Review Sheet */}
        <div className="bg-white border border-zinc-300 p-7 sm:p-9 text-left space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-200 pb-4">
            <div>
              <span className="font-mono text-[13px] text-zinc-600 block mb-1">{lawRevision.date} 공포</span>
              <h3 className="text-[22px] font-semibold text-zinc-950 leading-snug">{lawRevision.title}</h3>
            </div>
            <span className="text-[13px] font-bold font-mono text-zinc-800 bg-zinc-100 px-3 py-1 border border-zinc-300 rounded">
              {lawRevision.effectiveDate}
            </span>
          </div>

          {/* Structured Points Table */}
          <div className="space-y-3">
            <span className="text-[15px] font-bold text-zinc-900 block">개정법 주요 내용</span>
            <div className="border border-zinc-300 divide-y divide-zinc-200 text-[15px]">
              {lawRevision.highlights.map((h, i) => (
                <div key={i} className="py-3 px-4 flex items-baseline gap-3.5 bg-white">
                  <span className="font-mono text-[13px] font-bold text-zinc-600 shrink-0">0{i + 1}</span>
                  <span className="text-zinc-800 leading-[1.75] break-keep">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Assessment Callout */}
          <div className="border-l-2 border-zinc-950 bg-zinc-50 p-5 space-y-1.5">
            <p className="text-[17px] font-bold text-zinc-950 leading-snug break-keep">
              “{lawRevision.highlightNote.lead}”
            </p>
            <p className="text-[15px] text-zinc-700 leading-relaxed break-keep">
              {lawRevision.highlightNote.followup}
            </p>
          </div>

          <div className="text-[13px] text-zinc-600 flex items-center justify-between pt-2">
            <span>출처: {lawRevision.source}</span>
            <a
              href={lawRevision.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center text-zinc-900 hover:underline font-semibold"
            >
              <span>국가법령정보센터 원문</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>

        {/* 4-Step Structural Process Flow */}
        <div className="border border-zinc-300 bg-white p-7 text-left space-y-5">
          <h3 className="text-[22px] font-semibold text-zinc-950 leading-snug break-keep">
            사건·법 개정에서 정책 제안으로 이어지는 인과 구조
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 border border-zinc-300 divide-y md:divide-y-0 md:divide-x divide-zinc-200 text-left">
            {flow.map((item) => (
              <div key={item.step} className="p-5 space-y-2 bg-zinc-50 flex flex-col justify-between">
                <div>
                  <div className="text-[13px] font-mono font-bold text-zinc-600 mb-1">
                    단계 0{item.step}
                  </div>
                  <h4 className="text-[17px] font-bold text-zinc-950 leading-snug break-keep">
                    {item.title}
                  </h4>
                </div>
                <p className="text-[15px] text-zinc-700 leading-relaxed break-keep">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Section Navigation Link */}
        <div className="pt-8 border-t border-zinc-200 flex justify-end">
          <button
            onClick={() => { setActiveTab('research'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="min-h-[44px] inline-flex items-center px-5 py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white text-[15px] font-semibold rounded transition-colors"
          >
            <span>연구 과정 보기</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

      </div>
    </section>
  );
}
