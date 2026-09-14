import React, { useState } from 'react';
import { MessageSquare, ShieldCheck, Send, CheckCircle2, ExternalLink, AlertCircle } from 'lucide-react';
import { PROJECT_CONFIG } from '../config';

export default function SurveySection() {
  const [formData, setFormData] = useState({
    q1_experience: '',
    q2_inconvenience: '',
    q3_cause: '',
    q4_awareness: '',
    q5_improvement: '',
    q6_comment: '',
    agreed: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("개인정보 비수집 및 익명 활용 동의에 체크해주세요.");
      return;
    }
    // Simulation submit
    setSubmitted(true);
  };

  return (
    <section id="survey" className="py-20 bg-slate-50 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>시민 참여 의견수집</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-3">
            시민 의견 수집
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            “응급의료체계에 대한 여러분의 경험과 생각을 들려주세요.”
          </p>
        </div>

        {/* Demo Notice Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-700">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-blue shrink-0" />
            <span>
              본 설문은 학술 조사용 데모 폼이며, 개인정보는 절대 수집되지 않습니다.
            </span>
          </div>
          {PROJECT_CONFIG.enableExternalGoogleForms && (
            <a
              href={PROJECT_CONFIG.googleFormsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-brand-blue font-bold hover:underline shrink-0"
            >
              <span>Google Forms로 응답하기</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          )}
        </div>

        {submitted ? (
          /* Submission Success State */
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-md text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-3">
              설문 제출 완료
            </h3>
            <p className="text-slate-700 text-base max-w-md mx-auto leading-relaxed mb-8 font-medium">
              소중한 의견 감사합니다.<br />
              여러분의 응답은 더 나은 응급의료체계를 제안하는 데 활용됩니다.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
            >
              다른 의견 추가 제출하기
            </button>
          </div>
        ) : (
          /* Survey Form */
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
            
            {/* Q1 */}
            <div className="space-y-3">
              <label className="block text-base font-bold text-navy-900">
                1. 응급실을 이용하거나 보호자로 방문한 경험이 있습니까? <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["예 (환자 또는 보호자)", "아니오 (방문 경험 없음)"].map((opt, idx) => (
                  <label key={idx} className={`flex items-center p-3.5 rounded-xl border cursor-pointer transition-colors ${
                    formData.q1_experience === opt ? 'border-brand-blue bg-blue-50/60 font-semibold' : 'border-slate-200 hover:bg-slate-50'
                  }`}>
                    <input
                      type="radio"
                      name="q1_experience"
                      value={opt}
                      checked={formData.q1_experience === opt}
                      onChange={handleChange}
                      required
                      className="w-4 h-4 text-brand-blue focus:ring-brand-blue"
                    />
                    <span className="ml-3 text-sm text-slate-800">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q2 */}
            <div className="space-y-3">
              <label className="block text-base font-bold text-navy-900">
                2. 응급실 이용 과정에서 가장 불편했던 점은 무엇입니까? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {[
                  "치료 시작까지의 장시간 대기",
                  "다른 병원으로의 수용 거부 및 재이송 경험",
                  "현재 상태 및 치료 계획에 대한 설명 부족",
                  "응급실 이용 순서 및 시스템 정보 안내 부재",
                  "기타 / 경험 없음"
                ].map((opt, idx) => (
                  <label key={idx} className={`flex items-center p-3.5 rounded-xl border cursor-pointer transition-colors ${
                    formData.q2_inconvenience === opt ? 'border-brand-blue bg-blue-50/60 font-semibold' : 'border-slate-200 hover:bg-slate-50'
                  }`}>
                    <input
                      type="radio"
                      name="q2_inconvenience"
                      value={opt}
                      checked={formData.q2_inconvenience === opt}
                      onChange={handleChange}
                      required
                      className="w-4 h-4 text-brand-blue focus:ring-brand-blue"
                    />
                    <span className="ml-3 text-sm text-slate-800">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q3 */}
            <div className="space-y-3">
              <label className="block text-base font-bold text-navy-900">
                3. 응급환자 이송 지연의 가장 큰 원인은 무엇이라고 생각합니까? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {[
                  "수용 가능한 수술실 및 전문의 인프라 부족",
                  "119 구급대와 응급실 간 실시간 정보 공유 한계",
                  "비응급 경증환자의 응급실 이용 쏠림",
                  "지역 간 응급 의료 자원 및 권역 센터 불균형"
                ].map((opt, idx) => (
                  <label key={idx} className={`flex items-center p-3.5 rounded-xl border cursor-pointer transition-colors ${
                    formData.q3_cause === opt ? 'border-brand-blue bg-blue-50/60 font-semibold' : 'border-slate-200 hover:bg-slate-50'
                  }`}>
                    <input
                      type="radio"
                      name="q3_cause"
                      value={opt}
                      checked={formData.q3_cause === opt}
                      onChange={handleChange}
                      required
                      className="w-4 h-4 text-brand-blue focus:ring-brand-blue"
                    />
                    <span className="ml-3 text-sm text-slate-800">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q4 */}
            <div className="space-y-3">
              <label className="block text-base font-bold text-navy-900">
                4. 응급실 이용 원칙(중증도 순 진료, 119 안내 등)에 대해 어느 정도 알고 있었습니까? <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["잘 알고 있었다", "들어보았지만 잘 몰랐다", "거의 몰랐다"].map((opt, idx) => (
                  <label key={idx} className={`flex items-center p-3.5 rounded-xl border cursor-pointer transition-colors ${
                    formData.q4_awareness === opt ? 'border-brand-blue bg-blue-50/60 font-semibold' : 'border-slate-200 hover:bg-slate-50'
                  }`}>
                    <input
                      type="radio"
                      name="q4_awareness"
                      value={opt}
                      checked={formData.q4_awareness === opt}
                      onChange={handleChange}
                      required
                      className="w-4 h-4 text-brand-blue focus:ring-brand-blue"
                    />
                    <span className="ml-3 text-sm text-slate-800">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q5 */}
            <div className="space-y-3">
              <label className="block text-base font-bold text-navy-900">
                5. 가장 필요하다고 생각하는 개선방안은 무엇입니까? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {[
                  "실시간 종합 치료역량 반영 수용정보 체계 구축",
                  "119 구급대-병원 간 표준화된 사전 인계 체계 마련",
                  "중증도 기반 올바른 응급실 이용 시민 인식 개선 홍보",
                  "지역 의료기관 초기 처치 및 전원 역량 강화"
                ].map((opt, idx) => (
                  <label key={idx} className={`flex items-center p-3.5 rounded-xl border cursor-pointer transition-colors ${
                    formData.q5_improvement === opt ? 'border-brand-blue bg-blue-50/60 font-semibold' : 'border-slate-200 hover:bg-slate-50'
                  }`}>
                    <input
                      type="radio"
                      name="q5_improvement"
                      value={opt}
                      checked={formData.q5_improvement === opt}
                      onChange={handleChange}
                      required
                      className="w-4 h-4 text-brand-blue focus:ring-brand-blue"
                    />
                    <span className="ml-3 text-sm text-slate-800">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q6 Free Text */}
            <div className="space-y-3">
              <label className="block text-base font-bold text-navy-900">
                6. 추가로 전하고 싶은 의견 (선택)
              </label>
              <textarea
                name="q6_comment"
                rows={3}
                value={formData.q6_comment}
                onChange={handleChange}
                placeholder="응급의료체계 개선을 위해 자유롭게 의견을 적어주세요 (개인 식별 정보 작성 금지)."
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent text-sm text-slate-800 placeholder-slate-400 resize-none"
              />
            </div>

            {/* PII Warning Box */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
              <div className="flex items-center gap-1.5 font-bold">
                <AlertCircle className="w-4 h-4 text-amber-700" />
                <span>개인정보 보호 안내</span>
              </div>
              <p>
                이름, 연락처, 주민등록번호, 병명, 특정 병원명 등 개인을 식별할 수 있는 정보는 작성하지 말아 주시기 바랍니다.
              </p>
            </div>

            {/* Consent Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  required
                  className="w-5 h-5 text-brand-blue rounded border-slate-300 focus:ring-brand-blue mt-0.5"
                />
                <span className="text-sm font-semibold text-slate-800 leading-snug">
                  제출한 응답이 익명으로 프로젝트 분석 및 결과물에 활용되는 것에 동의합니다. <span className="text-red-500">*</span>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span>의견 제출하기</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
}
