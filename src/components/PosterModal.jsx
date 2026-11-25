import React from 'react';
import { X, Image, Award, CheckCircle2, FileText, Info } from 'lucide-react';
import { PROJECT_CONFIG } from '../config';

export default function PosterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-sm animate-fadeIn font-sans"
      role="dialog"
      aria-modal="true"
      aria-labelledby="poster-modal-title"
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-navy-900 text-white p-5 flex items-center justify-between border-b border-navy-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-brand-blue flex items-center justify-center font-bold text-white text-sm">
              A0
            </div>
            <div>
              <h3 id="poster-modal-title" className="font-bold text-base text-white">
                2026 한양학술타운 LION 최종 학술 포스터
              </h3>
              <p className="text-xs text-slate-300">CODE BLUE 프로젝트 연구 발표 자료</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 transition-colors focus:outline-none"
            aria-label="닫기"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-900 text-sm leading-relaxed bg-slate-50">
          
          <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-3">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
              FINAL ACADEMIC POSTER
            </span>
            <h4 className="text-lg font-black text-navy-900">
              중증응급환자 이송 지연 문제 개선을 위한 응급의료체계 분석과 정책 제안
            </h4>
            <p className="text-xs text-slate-500 font-medium">
              간호학과(김다은·김예나) × 정책학과(임채윤·노재은)
            </p>
          </div>

          {/* Poster Preview Card */}
          <div className="bg-white p-6 rounded-xl border-2 border-dashed border-slate-300 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center mx-auto">
              <Image className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300 mb-1">
                최종 인쇄본 파일 연결 예정
              </div>
              <h5 className="font-bold text-base text-navy-900">
                A0 규격 학술 발표 포스터 (인쇄 및 최종 검수 단계)
              </h5>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                본 포스터는 2026 한양학술타운 LION 현장 발표를 위해 제작된 고해상도 학술 인쇄물입니다.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg text-left text-xs space-y-2 border border-slate-200">
              <div className="flex items-center gap-2 font-bold text-navy-900">
                <Info className="w-4 h-4 text-brand-blue shrink-0" />
                <span>포스터 주요 수록 항목</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li>연구 배경: 왜 병상을 찾고도 이송이 지연되는가? (병상과 치료역량의 차이)</li>
                <li>연구 방법: 서울아산병원 응급실 전문간호사 인터뷰 및 법령·지역사례 분석</li>
                <li>최종 3대 핵심 정책: 1. 권역별 순환 당직병원 지정제 / 2. 필수의료 의무복무 선발전형 / 3. 개정 응급의료법의 현장 정착 지원</li>
                <li>정책 전환 고찰: 정보통신망에서 배후 필수의료 전문인력 확보 중심 전환</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs transition-colors"
          >
            확인 및 닫기
          </button>
        </div>

      </div>
    </div>
  );
}
