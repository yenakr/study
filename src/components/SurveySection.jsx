import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, ShieldCheck, RefreshCw, AlertCircle } from 'lucide-react';

export default function SurveySection({ onSubmitted }) {
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
      if (onSubmitted) onSubmitted();
    } catch (err) {
      localStorage.setItem('code_blue_survey_submitted', 'true');
      setSubmitted(true);
      setAlreadySubmitted(true);
      if (onSubmitted) onSubmitted();
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
    <div className="text-left space-y-6">
      
      {/* Editorial Notice Box */}
      <div className="border border-zinc-300 bg-[#FAF9F5] p-5 space-y-2 text-xs text-zinc-700">
        <div className="flex items-center gap-1.5 font-bold text-zinc-900 text-sm">
          <AlertCircle className="w-4 h-4 text-zinc-800 shrink-0" />
          <span>설문 참여 안내 및 개인정보 처리 원칙</span>
        </div>
        <p className="font-semibold text-zinc-900">
          본 의견수집은 학술 프로젝트를 위한 익명 의견수집입니다. 의료상담 또는 민원 접수 창구가 아닙니다.
        </p>
        <ul className="list-disc pl-4 space-y-0.5 text-zinc-600">
          <li><strong>수집 금지 항목:</strong> 이름, 연락처, 주민등록번호, 구체적인 병명, 병원명은 일절 수집하지 않습니다.</li>
          <li><strong>수집 목적:</strong> 중증응급환자 이송체계 개선방안에 관한 시민 의견 수렴 및 통계 분석</li>
          <li><strong>보관 기간:</strong> 2026 한양학술타운 LION 프로젝트 종료 시까지 익명 보관</li>
        </ul>
      </div>

      {/* Already Submitted State */}
      {alreadySubmitted && !submitted ? (
        <div className="border border-zinc-300 bg-white p-6 space-y-3">
          <div className="flex items-center gap-2 font-bold text-zinc-900 text-sm">
            <ShieldCheck className="w-4 h-4 text-zinc-800" />
            <span>이미 설문 응답 제출이 완료되었습니다.</span>
          </div>
          <p className="text-xs text-zinc-600 leading-relaxed">
            1인 1회 응답 원칙에 따라 무기명 등록되었습니다. 아래 실시간 통계에서 결과를 확인하실 수 있습니다.
          </p>
          <button
            onClick={resetDuplicateLock}
            className="inline-flex items-center gap-1 px-3 py-1.5 border border-zinc-300 bg-zinc-50 text-zinc-700 text-xs font-medium rounded hover:bg-zinc-100"
          >
            <RefreshCw className="w-3 h-3" />
            <span>새 응답 작성하기</span>
          </button>
        </div>
      ) : submitted ? (
        <div className="border border-zinc-300 bg-white p-6 space-y-2 animate-fadeIn">
          <div className="flex items-center gap-2 font-bold text-zinc-900 text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>소중한 의견이 등록되었습니다.</span>
          </div>
          <p className="text-xs text-zinc-600 leading-relaxed">
            응답 내용은 필수의료 전문인력 확보와 응급의료체계 개선 학술 분석에 활용됩니다.
          </p>
        </div>
      ) : (
        /* Academic Questionnaire Form */
        <form onSubmit={handleSubmit} className="border border-zinc-300 bg-white p-6 space-y-6">
          
          {/* Q1 */}
          <div className="space-y-2">
            <label className="block text-xs sm:text-sm font-bold text-zinc-900">
              1. 최근 응급실을 이용하거나 보호자로 방문한 경험이 있습니까? <span className="text-red-700">*</span>
            </label>
            <div className="space-y-1.5">
              {['최근 1년 이내 방문 경험이 있다', '1년 이전에 방문한 경험이 있다', '응급실 방문 경험이 없다'].map((opt) => (
                <label key={opt} className="flex items-baseline gap-2.5 text-xs text-zinc-700 cursor-pointer">
                  <input
                    type="radio"
                    name="q1_experience"
                    value={opt}
                    checked={formData.q1_experience === opt}
                    onChange={handleChange}
                    required
                    className="mt-0.5 text-zinc-900 focus:ring-zinc-900"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q2 */}
          <div className="space-y-2">
            <label className="block text-xs sm:text-sm font-bold text-zinc-900">
              2. 응급실 이용 시 가장 크게 우려되었거나 겪었던 문제는 무엇입니까? <span className="text-red-700">*</span>
            </label>
            <div className="space-y-1.5">
              {[
                '긴 대기시간과 처치 지연',
                '당장 수술이나 처치를 담당할 전문의 부재',
                '환자 상태에 대한 설명과 진료 진행 안내 부족',
                '수용 불가 통보로 인한 타 병원 재이송 불안',
                '기타'
              ].map((opt) => (
                <div key={opt}>
                  <label className="flex items-baseline gap-2.5 text-xs text-zinc-700 cursor-pointer">
                    <input
                      type="radio"
                      name="q2_inconvenience"
                      value={opt}
                      checked={formData.q2_inconvenience === opt}
                      onChange={handleChange}
                      required
                      className="mt-0.5 text-zinc-900 focus:ring-zinc-900"
                    />
                    <span>{opt}</span>
                  </label>
                  {opt === '기타' && formData.q2_inconvenience === '기타' && (
                    <input
                      type="text"
                      name="q2_other_text"
                      value={formData.q2_other_text}
                      onChange={handleChange}
                      placeholder="기타 내용을 간략히 입력해주세요"
                      className="mt-1.5 ml-5 w-full max-w-md p-2 border border-zinc-300 text-xs rounded focus:outline-none focus:ring-1 focus:ring-zinc-900"
                      required
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Q3 */}
          <div className="space-y-2">
            <label className="block text-xs sm:text-sm font-bold text-zinc-900">
              3. 중증응급환자 이송 지연(재이송)의 가장 주된 원인은 무엇이라고 보십니까? <span className="text-red-700">*</span>
            </label>
            <div className="space-y-1.5">
              {[
                '수술과 중환자 진료를 담당할 필수진료과 전문의 부족',
                '119와 병원 간의 실시간 치료역량 정보 공유 부족',
                '경증 환자의 대형병원 응급실 과밀 이용',
                '의료사고 발생 시 의료진 개인에게 가해지는 과도한 법적 책임'
              ].map((opt) => (
                <label key={opt} className="flex items-baseline gap-2.5 text-xs text-zinc-700 cursor-pointer">
                  <input
                    type="radio"
                    name="q3_cause"
                    value={opt}
                    checked={formData.q3_cause === opt}
                    onChange={handleChange}
                    required
                    className="mt-0.5 text-zinc-900 focus:ring-zinc-900"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q4 */}
          <div className="space-y-2">
            <label className="block text-xs sm:text-sm font-bold text-zinc-900">
              4. 빈 침대가 있어도 수술할 전문의가 없으면 환자 수용이 어렵다는 사실을 알고 계셨습니까? <span className="text-red-700">*</span>
            </label>
            <div className="space-y-1.5">
              {['알고 있었다', '이번 안내/연구를 통해 처음 알게 되었다'].map((opt) => (
                <label key={opt} className="flex items-baseline gap-2.5 text-xs text-zinc-700 cursor-pointer">
                  <input
                    type="radio"
                    name="q4_awareness"
                    value={opt}
                    checked={formData.q4_awareness === opt}
                    onChange={handleChange}
                    required
                    className="mt-0.5 text-zinc-900 focus:ring-zinc-900"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q5 */}
          <div className="space-y-2">
            <label className="block text-xs sm:text-sm font-bold text-zinc-900">
              5. 중증응급환자 이송 지연 해소를 위해 가장 시급한 대책은 무엇이라고 생각하십니까? <span className="text-red-700">*</span>
            </label>
            <div className="space-y-1.5">
              {[
                '권역별 순환 당직병원 지정을 통한 야간·휴일 당직 분담',
                '필수의료 의무복무 선발전형을 통한 중증외상·응급 전문의 양성',
                '개정 응급의료법 안착과 불가항력 의료사고 법적 지원',
                '119와 응급실 간 실시간 수술역량 정보망 고도화'
              ].map((opt) => (
                <label key={opt} className="flex items-baseline gap-2.5 text-xs text-zinc-700 cursor-pointer">
                  <input
                    type="radio"
                    name="q5_improvement"
                    value={opt}
                    checked={formData.q5_improvement === opt}
                    onChange={handleChange}
                    required
                    className="mt-0.5 text-zinc-900 focus:ring-zinc-900"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q6 Comment */}
          <div className="space-y-1.5">
            <label className="block text-xs sm:text-sm font-bold text-zinc-900">
              6. 응급의료체계 개선에 관한 자유 의견 (선택)
            </label>
            <textarea
              name="q6_comment"
              value={formData.q6_comment}
              onChange={handleChange}
              rows={2}
              placeholder="개인정보(이름, 연락처, 특정 병원명)를 제외한 정책적 의견을 남겨주세요."
              className="w-full p-2.5 border border-zinc-300 text-xs rounded focus:outline-none focus:ring-1 focus:ring-zinc-900 resize-none"
            />
          </div>

          {/* Agreement Checkbox */}
          <div className="pt-2 border-t border-zinc-200">
            <label className="flex items-baseline gap-2 cursor-pointer text-xs text-zinc-700">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                required
                className="mt-0.5 rounded text-zinc-900 focus:ring-zinc-900"
              />
              <span>
                본 조사는 학술 연구 목적의 익명 설문이며, 개인식별정보를 일체 수집하지 않음에 동의합니다. <span className="text-red-700 font-bold">*</span>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs sm:text-sm rounded transition-colors inline-flex items-center gap-1.5"
          >
            {isSubmitting ? (
              <span>제출 처리 중...</span>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>설문 응답 제출하기</span>
              </>
            )}
          </button>

        </form>
      )}

    </div>
  );
}
