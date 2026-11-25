import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, ShieldCheck, RefreshCw, AlertCircle } from 'lucide-react';
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
    <section id="survey" className="py-16 md:py-20 bg-slate-50 text-slate-900 min-h-screen font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
            시민 의견 수집
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            중증응급환자 이송 지연 개선 연구를 위한 익명 설문조사입니다.
          </p>
        </div>

        {/* Clean Disclaimers Banner */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 text-xs sm:text-sm text-slate-800 space-y-2.5 shadow-sm">
          <div className="flex items-center gap-2 font-bold text-navy-900">
            <AlertCircle className="w-4 h-4 text-brand-blue shrink-0" />
            <span>설문 참여 안내</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            본 의견수집은 학술 프로젝트를 위한 익명 의견수집입니다. 의료상담 또는 민원 접수 창구가 아닙니다.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
            <li><strong>개인정보 보호:</strong> 이름, 연락처, 주민등록번호, 구체적인 병명, 병원명 등 개인을 식별할 수 있는 정보는 일체 수집하지 않습니다.</li>
            <li><strong>수집 목적:</strong> 중증응급환자 이송체계 개선방안에 관한 시민 의견 수렴</li>
            <li><strong>보관 기간:</strong> 2026 한양학술타운 LION 프로젝트 종료 시까지 익명 보관</li>
          </ul>
        </div>

        {/* Already Submitted State */}
        {alreadySubmitted && !submitted ? (
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 text-center space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy-900">
              설문 응답이 제출되었습니다.
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
              소중한 의견에 감사드립니다. 제출해주신 내용은 학술 통계 분석에 반영됩니다.
            </p>
            <div className="pt-2">
              <button
                onClick={resetDuplicateLock}
                className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
                <span>새 응답 작성하기</span>
              </button>
            </div>
          </div>
        ) : submitted ? (
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
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 space-y-8 shadow-sm">
            
            {/* Q1 */}
            <div className="space-y-3">
              <label className="block text-sm sm:text-base font-bold text-navy-900">
                1. 응급실을 이용하거나 보호자로 방문한 경험이 있습니까? <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['최근 1년 이내 있다', '1년 이전 경험 있다', '경험 없다'].map((opt) => (
                  <label 
                    key={opt}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer text-xs sm:text-sm font-medium transition-all ${
                      formData.q1_experience === opt 
                        ? 'bg-blue-50 border-brand-blue text-brand-blue' 
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    <input
                      type="radio"
                      name="q1_experience"
                      value={opt}
                      checked={formData.q1_experience === opt}
                      onChange={handleChange}
                      required
                      className="text-brand-blue focus:ring-brand-blue"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q2 */}
            <div className="space-y-3">
              <label className="block text-sm sm:text-base font-bold text-navy-900">
                2. 응급실 이용 시 가장 크게 느꼈던 불편이나 우려는 무엇입니까? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {[
                  '긴 대기시간과 진료 지연',
                  '당장 치료 가능한 전문의나 수술실 부재',
                  '환자 상태에 대한 충분한 설명 및 안내 부족',
                  '다른 병원으로의 재이송(전원) 불안',
                  '기타'
                ].map((opt) => (
                  <div key={opt}>
                    <label 
                      className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer text-xs sm:text-sm font-medium transition-all ${
                        formData.q2_inconvenience === opt 
                          ? 'bg-blue-50 border-brand-blue text-brand-blue' 
                          : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                      }`}
                    >
                      <input
                        type="radio"
                        name="q2_inconvenience"
                        value={opt}
                        checked={formData.q2_inconvenience === opt}
                        onChange={handleChange}
                        required
                        className="text-brand-blue focus:ring-brand-blue"
                      />
                      <span>{opt}</span>
                    </label>

                    {opt === '기타' && formData.q2_inconvenience === '기타' && (
                      <div className="mt-2 pl-2">
                        <input
                          type="text"
                          name="q2_other_text"
                          value={formData.q2_other_text}
                          onChange={handleChange}
                          placeholder="기타 불편사항을 직접 입력해주세요"
                          className="w-full p-3 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                          required
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Q3 */}
            <div className="space-y-3">
              <label className="block text-sm sm:text-base font-bold text-navy-900">
                3. 중증응급환자 이송 지연(소위 응급실 뺑뺑이)의 가장 주된 원인은 무엇이라고 생각하십니까? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {[
                  '수술과 중환자 진료를 맡을 필수진료과 전문의 부족',
                  '119와 병원 간의 실시간 치료역량 정보 공유 부족',
                  '경증 환자의 대형병원 응급실 과밀 이용',
                  '병원 간 전원 조정 및 컨트롤타워 부재',
                  '의료사고 발생 시 의료진에게 가해지는 과도한 법적 책임'
                ].map((opt) => (
                  <label 
                    key={opt}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer text-xs sm:text-sm font-medium transition-all ${
                      formData.q3_cause === opt 
                        ? 'bg-blue-50 border-brand-blue text-brand-blue' 
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    <input
                      type="radio"
                      name="q3_cause"
                      value={opt}
                      checked={formData.q3_cause === opt}
                      onChange={handleChange}
                      required
                      className="text-brand-blue focus:ring-brand-blue"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q4 */}
            <div className="space-y-3">
              <label className="block text-sm sm:text-base font-bold text-navy-900">
                4. 응급실에 빈 병상이 있더라도 수술할 전문의가 없으면 환자를 수용하기 어렵다는 사실을 알고 계셨습니까? <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['잘 알고 있었다', '이번 연구/안내를 통해 처음 알게 되었다'].map((opt) => (
                  <label 
                    key={opt}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer text-xs sm:text-sm font-medium transition-all ${
                      formData.q4_awareness === opt 
                        ? 'bg-blue-50 border-brand-blue text-brand-blue' 
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    <input
                      type="radio"
                      name="q4_awareness"
                      value={opt}
                      checked={formData.q4_awareness === opt}
                      onChange={handleChange}
                      required
                      className="text-brand-blue focus:ring-brand-blue"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q5 */}
            <div className="space-y-3">
              <label className="block text-sm sm:text-base font-bold text-navy-900">
                5. 중증응급환자 이송 지연을 줄이기 위해 가장 시급한 대책은 무엇이라고 보십니까? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {[
                  '권역별 순환 당직병원 지정을 통한 야간·휴일 당직 분담',
                  '필수의료 의무복무 선발전형을 통한 중증외상·응급의사 양성',
                  '개정 응급의료법 안착과 불가항력 의료사고 법적 지원',
                  '119와 응급실 간 실시간 수술역량 정보망 고도화'
                ].map((opt) => (
                  <label 
                    key={opt}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer text-xs sm:text-sm font-medium transition-all ${
                      formData.q5_improvement === opt 
                        ? 'bg-blue-50 border-brand-blue text-brand-blue' 
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    <input
                      type="radio"
                      name="q5_improvement"
                      value={opt}
                      checked={formData.q5_improvement === opt}
                      onChange={handleChange}
                      required
                      className="text-brand-blue focus:ring-brand-blue"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q6 Free comment */}
            <div className="space-y-2">
              <label className="block text-sm sm:text-base font-bold text-navy-900">
                6. 응급의료체계 개선에 대해 제안하고 싶은 의견이 있다면 자유롭게 적어주세요. (선택)
              </label>
              <textarea
                name="q6_comment"
                value={formData.q6_comment}
                onChange={handleChange}
                rows={3}
                placeholder="개인정보(이름, 연락처, 특정 병원명)를 제외한 정책적 제안을 남겨주세요."
                className="w-full p-3.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none"
              />
            </div>

            {/* Agreement Checkbox */}
            <div className="pt-2 border-t border-slate-100">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  required
                  className="mt-1 rounded text-brand-blue focus:ring-brand-blue"
                />
                <span className="text-xs text-slate-700 leading-relaxed">
                  본 설문은 학술 목적의 무기명 조사이며, 개인식별정보를 일절 수집하지 않음에 동의합니다. <span className="text-red-500 font-bold">*</span>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm sm:text-base transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>제출 중...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>의견 제출하기</span>
                </>
              )}
            </button>

          </form>
        )}

      </div>
    </section>
  );
}
