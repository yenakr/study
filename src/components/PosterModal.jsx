import React from 'react';
import { X } from 'lucide-react';
import { PROJECT_CONFIG } from '../config';

export default function PosterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs font-sans text-left"
      role="dialog"
      aria-modal="true"
      aria-labelledby="poster-modal-title"
    >
      <div className="bg-white max-w-2xl w-full max-h-[90vh] flex flex-col border border-zinc-300 shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-zinc-50 p-5 sm:p-6 flex items-center justify-between border-b border-zinc-200 shrink-0">
          <div>
            <h3 id="poster-modal-title" className="font-serif font-bold text-[20px] text-zinc-950">
              연구 요약 포스터
            </h3>
            <p className="text-[13px] text-zinc-500 mt-0.5">
              한양대학교 정책학과 간호학과 융합 연구
            </p>
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
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-zinc-900 text-[15px] leading-relaxed">
          
          <div className="border-b border-zinc-200 pb-4">
            <span className="text-[12px] font-mono font-bold text-[#0052FF] uppercase block mb-1">
              핵심 명제
            </span>
            <h4 className="font-serif font-bold text-[22px] text-zinc-950 leading-snug break-keep">
              "병상은 있는데, 수술할 전문의가 없다"
            </h4>
            <p className="text-[15px] text-zinc-700 mt-2 break-keep">
              중증응급환자 이송 지연은 단순 병상 부족이 아닌, 배후 응급수술 전문의 결손과 의료진의 사법 리스크에서 비롯됩니다.
            </p>
          </div>

          {/* 3 Core Points */}
          <div className="space-y-5">
            <div className="space-y-1">
              <h5 className="font-bold text-zinc-950 text-[16px]">
                1. 현상과 원인
              </h5>
              <p className="text-zinc-700 leading-relaxed break-keep">
                전국 119 구급대 재이송 사유 1위는 전문의 부재입니다. 현행 정보망이 단순 병상 유무만 조회하여, 실제 수술 가능 여부를 파악하지 못해 지연이 반복됩니다.
              </p>
            </div>

            <div className="space-y-1">
              <h5 className="font-bold text-zinc-950 text-[16px]">
                2. 현장의 법적 상충
              </h5>
              <p className="text-zinc-700 leading-relaxed break-keep">
                수술할 전문의가 없는 상태에서 환자를 받으면 결과 악화 시 업무상과실치사죄로 입건되고, 수용을 거부하면 진료거부죄로 처벌받는 구조적 모순이 존재합니다.
              </p>
            </div>

            <div className="space-y-1">
              <h5 className="font-bold text-zinc-950 text-[16px]">
                3. 3대 정책 대안
              </h5>
              <ul className="text-zinc-700 space-y-1.5 pl-4 list-disc leading-relaxed break-keep">
                <li><strong>요일별 전문의 순환 당직제:</strong> 권역 내 거점병원이 요일별로 수술 당직을 분담</li>
                <li><strong>10~15년 의무복무 선발제:</strong> 권역 거점병원에 장기 상주할 필수의료 전문의 양성</li>
                <li><strong>의료사고 사법 안전망:</strong> EMR 기반 중재원 감정 및 공적 분쟁지원</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-zinc-50 border-t border-zinc-200 flex justify-end shrink-0">
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
