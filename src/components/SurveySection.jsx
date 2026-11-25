import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, ShieldCheck, RefreshCw, AlertCircle, Info } from 'lucide-react';
import { PROJECT_CONFIG } from '../config';

export default function SurveySection() {
  const [formData, setFormData] = useState({
    q1_experience: '',
    q2_inconvenience: '',
    q2_other_text: '',
    q3_cause: '',
    q4_awareness: '',
    q5_improvement: '',
    q6_comment: '',
    agreed: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);

  useEffect(() => {
    const hasSubmitted = localStorage.getItem('code_blue_survey_submitted');
    if (hasSubmitted === 'true') {
      setAlreadySubmitted(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("개인정보 미수집 및 연구 목적 활용 동의 항목에 체크해주세요.");
      return;
    }

    const finalInconvenience = formData.q2_inconvenience === '기타'
      ? `기타: ${formData.q2_other_text || '직접 입력'}`
      : formData.q2_inconvenience;

    const payload = {
      ...formData,
      q2_inconvenience: finalInconvenience
    };

    setIsSubmitting(true);

    try {
      await fetch('/api/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      localStorage.setItem('code_blue_survey_submitted', 'true');
      setSubmitted(true);
      setAlreadySubmitted(true);
    } catch (err) {
      localStorage.setItem('code_blue_survey_submitted', 'true');
      setSubmitted(true);
      setAlreadySubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetDuplicateLock = () => {
    localStorage.removeItem('code_blue_survey_submitted');
    setAlreadySubmitted(false);
    setSubmitted(false);
  };

  return (
    <section id="survey" className="py-16 bg-slate-50 text-slate-900 min-h-screen font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
            CITIZEN OPINION SURVEY
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
            응급의료체계에 관한 시민 의견 수집
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            중증응급환자 이송 지연 개선 연구를 위해 시민 여러분의 경험과 고견을 경청합니다.
          </p>
        </div>

        {/* Essential Disclaimers Banner (요구사항 필수 반영) */}
        <div className="bg-amber-50/90 border border-amber-200 rounded-2xl p-5 text-xs sm:text-sm text-amber-950 space-y-2 shadow-sm">
          <div className="flex items-center gap-2 font-bold text-amber-900">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0" />
            <span>설문 참여 전 유의사항 안내</span>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-slate-800 text-xs">
            <li><strong>안내:</strong> 본 창구는 <strong>의료상담 또는 민원 접수 창구가 아닙니다.</strong> 응급상황에서는 즉시 119로 신고하시기 바랍니다.</li>
            <li><strong>개인정보 보호:</strong> 이름, 연락처, 주민등록번호, 병명, 방문 병원명 등 개인을 식별할 수 있는 정보는 일체 수집하지 않습니다.</li>
            <li><strong>수집 목적 및 이용 범위:</strong> 수집된 의견은 2026 한양학술타운 LION 프로젝트 학술 연구 및 정책제안서 분석에만 익명으로 활용됩니다.</li>
          </ul>
        </div>

        {/* Already Submitted State */}
        {alreadySubmitted && !submitted ? (
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 text-center space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy-900">
              이미 설문 응답 제출이 완료되었습니다.
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
              중복 응답 방지 정책(1인 1회 응답)에 따라 응답이 무기명으로 등록되었습니다. 소중한 의견에 감사드립니다.
            </p>
            <div className="pt-2">
              <button
                onClick={resetDuplicateLock}
                className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
                <span>새 응답 작성하기 (테스트용)</span>
              </button>
            </div>
          </div>
        ) : submitted ? (
          /* Submission Success State */
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 text-center space-y-4 shadow-sm animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy-900">
              소중한 의견이 등록되었습니다.
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed max-w-md mx-auto">
              응답해주신 내용은 필수의료 전문인력 확보와 응급의료체계 개선 방안 제안에 귀중한 기초자료로 활용됩니다.
            </p>
          </div>
        ) : (
          /* Survey Form */
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 space-y-8 shadow-sm">
            
            {/* Q1 */}
            <div className="space-y-3">
              <label className="block text-sm sm:text-base font-bold text-navy-900">
                1. 응급실을 이용하거나 보호자로 방문한 경험이 있습니까? <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {["예", "아니오"].map((opt, idx) => (
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
                      className="w-4 h-4 text-brand-blue"
                    />
                    <span className="ml-3 text-sm text-slate-800">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q2 */}
            <div className="space-y-3">
              <label className="block text-sm sm:text-base font-bold text-navy-900">
                2. 응급실 이용 과정에서 가장 불편했던 점은 무엇입니까? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {[
                  "치료 시작까지의 긴 대기시간",
                  "다른 병원으로의 이송 및 수용 거부",
                  "현재 상태 및 치료 과정 설명 부족",
                  "응급실 이용 순서 및 시스템 안내 부족",
                  "기타"
                ].map((opt, idx) => (
                  <div key={idx} className="space-y-2">
                    <label className={`flex items-center p-3.5 rounded-xl border cursor-pointer transition-colors ${
                      formData.q2_inconvenience === opt ? 'border-brand-blue bg-blue-50/60 font-semibold' : 'border-slate-200 hover:bg-slate-50'
                    }`}>
                      <input
                        type="radio"
                        name="q2_inconvenience"
                        value={opt}
                        checked={formData.q2_inconvenience === opt}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 text-brand-blue"
                      />
                      <span className="ml-3 text-sm text-slate-800">{opt}</span>
                    </label>

                    {/* Write-in field for '기타' */}
                    {opt === '기타' && formData.q2_inconvenience === '기타' && (
                      <input
                        type="text"
                        name="q2_other_text"
                        value={formData.q2_other_text}
                        onChange={handleChange}
                        placeholder="기타 불편했던 점을 구체적으로 입력해주세요."
                        required
                        className="w-full p-3 rounded-lg border border-brand-blue text-sm text-slate-800 placeholder-slate-400 bg-blue-50/20 ml-1 animate-fadeIn focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Q3 */}
            <div className="space-y-3">
              <label className="block text-sm sm:text-base font-bold text-navy-900">
                3. 응급환자 이송 지연의 가장 큰 원인은 무엇이라고 생각합니까? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {[
                  "수용 가능한 수술실 및 전문의 부족",
                  "119 구급대와 병원 간 정보 공유 한계",
                  "경증환자의 응급실 이용 쏠림",
                  "지역 간 응급 의료 자원 불균형"
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
                      className="w-4 h-4 text-brand-blue"
                    />
                    <span className="ml-3 text-sm text-slate-800">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q4 */}
            <div className="space-y-3">
              <label className="block text-sm sm:text-base font-bold text-navy-900">
                4. 응급실 이용 원칙에 대해 어느 정도 알고 있었습니까? <span className="text-red-500">*</span>
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
                      className="w-4 h-4 text-brand-blue"
                    />
                    <span className="ml-3 text-sm text-slate-800">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q5 */}
            <div className="space-y-3">
              <label className="block text-sm sm:text-base font-bold text-navy-900">
                5. 가장 필요하다고 생각하는 개선방안은 무엇입니까? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {[
                  "응급 및 배후 필수진료과 전문의 인력 확보",
                  "권역별 순환 당직병원 지정 및 실시간 가동체계",
                  "중증응급의료 의료진에 대한 법적·분쟁 지원",
                  "올바른 응급실 이용 인식 개선 홍보"
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
                      className="w-4 h-4 text-brand-blue"
                    />
                    <span className="ml-3 text-sm text-slate-800">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q6 */}
            <div className="space-y-3">
              <label className="block text-sm sm:text-base font-bold text-navy-900">
                6. 추가로 전하고 싶은 의견 (선택)
              </label>
              <textarea
                name="q6_comment"
                rows={3}
                value={formData.q6_comment}
                onChange={handleChange}
                placeholder="응급의료체계 개선에 관한 자유로운 의견을 남겨주세요."
                className="w-full p-3.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 text-brand-blue rounded border-slate-300 mt-0.5"
                />
                <span className="text-xs sm:text-sm font-semibold text-slate-900">
                  본 응답이 개인식별정보 없이 익명으로 2026 한양학술타운 LION 학술 분석에 활용되는 것에 동의합니다. <span className="text-red-500">*</span>
                </span>
              </label>
              <p className="text-[11px] text-slate-500 pl-7 leading-relaxed">
                (이름, 전화번호, 주민번호 등 개인을 특정할 수 있는 정보는 수집 및 저장되지 않습니다.)
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-bold text-base shadow-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "제출 처리 중..." : "의견 제출하기"}</span>
            </button>

          </form>
        )}

      </div>
    </section>
  );
}
