import React from 'react';
import { X } from 'lucide-react';
import { PROJECT_CONFIG } from '../config';

export default function PosterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs font-sans"
      role="dialog"
      aria-modal="true"
      aria-labelledby="poster-modal-title"
    >
      <div className="bg-white max-w-2xl w-full max-h-[90vh] flex flex-col border border-zinc-300 shadow-xl overflow-hidden text-left">
        
        {/* Header */}
        <div className="bg-zinc-50 p-5 sm:p-6 flex items-center justify-between border-b border-zinc-200 shrink-0">
          <div>
            <span className="font-mono text-[13px] font-bold text-zinc-600 block">발표 인쇄물</span>
            <h3 id="poster-modal-title" className="font-serif font-bold text-[20px] text-zinc-950">
              2026 한양학술타운 LION 최종 포스터 요약
            </h3>
          </div>
          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center text-zinc-600 hover:text-zinc-950 border border-zinc-300 rounded-[2px] focus:outline-none"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-zinc-900 text-[15px] leading-relaxed bg-zinc-100/60">
          
          <div className="bg-white p-6 border border-zinc-300 space-y-2">
            <span className="font-mono text-[13px] font-bold text-zinc-600 block">연구 과제명</span>
            <h4 className="font-serif font-bold text-[20px] text-zinc-950 break-keep">
              {PROJECT_CONFIG.projectTitle}
            </h4>
            <p className="text-[15px] text-zinc-700">
              소속 및 연구진: 한양대학교 정책학과 간호학과 (김다은·김예나·임채윤·노재은)
            </p>
          </div>

          {/* Poster Content Summary */}
          <div className="bg-white p-6 border border-zinc-300 space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
              <span className="font-bold text-zinc-950 text-[16px]">포스터 패널 구성 및 수록 내용</span>
              <span className="font-mono text-[13px] text-zinc-600">A0 인쇄 규격</span>
            </div>

            <div className="space-y-4 divide-y divide-zinc-200 text-[15px]">
              <div className="pt-3 space-y-1.5">
                <span className="font-bold text-zinc-950 block text-[16px]">1. 연구 배경 및 문제 정의</span>
                <p className="text-zinc-700 leading-relaxed break-keep">
                  단순 병상 유무와 실제 전문의 수술 역량의 괴리, 2026년 5월 의사 1심 집행유예 판결 및 6월 대구 중증환자 사망 송치 사건에서 드러난 의료진 이중 사법 리스크 구조 분석.
                </p>
              </div>

              <div className="pt-3 space-y-1.5">
                <span className="font-bold text-zinc-950 block text-[16px]">2. 융합 연구 방법론</span>
                <p className="text-zinc-700 leading-relaxed break-keep">
                  서울아산병원 응급실 전문간호사 심층 인터뷰 질적 분석 및 「응급의료에 관한 법률」 제6조(거부금지)와 제48조의2(수용능력 확인)의 입법 공백 검토.
                </p>
              </div>

              <div className="pt-3 space-y-1.5">
                <span className="font-bold text-zinc-950 block text-[16px]">3. 3대 핵심 정책 대안</span>
                <p className="text-zinc-700 leading-relaxed break-keep">
                  ① 권역별 순환 당직병원 지정제: 응급의료진료권 단위 순환 분담<br />
                  ② 필수의료 의무복무 선발전형: 10년 기본안 및 15년 강화안 비교 검토<br />
                  ③ 개정 응급의료법의 현장 정착 지원: 수용 판단 기록 연계 및 공적 분쟁지원
                </p>
              </div>

              <div className="pt-3 space-y-1.5">
                <span className="font-bold text-zinc-950 block text-[16px]">4. 정책 전환의 의의</span>
                <p className="text-zinc-700 leading-relaxed break-keep">
                  초기 전산 정보망 중심 과제에서 출발하여, 배후 필수진료과 전문의 인력 확보와 사법 안전망 구축이 선행되어야 함을 증명한 연구 궤적 제시.
                </p>
              </div>
            </div>

            <div className="p-4 bg-zinc-50 border border-zinc-200 text-zinc-700 text-[13px] break-keep">
              * 본 포스터는 2026 한양학술타운 LION 최종 심사 현장에 인쇄물로 게시·발표됩니다.
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-zinc-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="min-h-[44px] px-6 py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-[15px] rounded-[2px] transition-colors"
          >
            닫기
          </button>
        </div>

      </div>
    </div>
  );
}
