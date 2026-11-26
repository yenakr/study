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
      
      {/* Notice Box */}
      <div className="border border-zinc-200 bg-zinc-50 p-6 space-y-2 rounded-[4px]">
        <div className="flex items-center gap-2 font-bold text-zinc-950 text-[16px]">
          <AlertCircle className="w-5 h-5 text-[#0052FF] shrink-0" />
          <span>시민 참여 안내 및 익명성 보장 원칙</span>
        </div>
        <p className="font-normal text-zinc-700 text-[15px] break-keep leading-relaxed">
          본 조사는 학술 연구 목적의 익명 의견 수렴입니다. 이름, 연락처 등 일체의 개인 식별 정보는 수집하지 않습니다.
        </p>
      </div>

      {/* Already Submitted State */}
      {alreadySubmitted && !submitted ? (
        <div className="border border-zinc-200 bg-white p-6 sm:p-8 space-y-4 rounded-[4px]">
          <div className="flex items-center gap-2 font-bold text-zinc-950 text-[18px]">
            <ShieldCheck className="w-5 h-5 text-[#0052FF]" />
            <span>이미 설문 응답 제출이 완료되었습니다</span>
          </div>
          <p className="text-[15px] text-zinc-700 leading-relaxed break-keep">
            1인 1회 응답 원칙에 따라 무기명 등록되었습니다. 아래 실시간 통계에서 결과를 확인하실 수 있습니다.
          </p>
          <button
            onClick={resetDuplicateLock}
            className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-300 bg-white text-zinc-900 text-[14px] font-semibold rounded-[2px] hover:bg-zinc-50 transition-colors"
          >
            <RefreshCw className="w-4 h-4 text-[#0052FF]" />
            <span>새 응답 작성하기</span>
          </button>
        </div>
      ) : submitted ? (
        <div className="border border-zinc-200 bg-white p-6 sm:p-8 space-y-3 rounded-[4px] animate-fadeIn">
          <div className="flex items-center gap-2 font-bold text-zinc-950 text-[18px]">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>소중한 의견이 등록되었습니다</span>
          </div>
          <p className="text-[15px] text-zinc-700 leading-relaxed break-keep">
            응답 내용은 필수의료 전문인력 확보와 응급의료체계 개선 학술 분석에 소중히 활용됩니다.
          </p>
        </div>
      ) : (
        /* Academic Questionnaire Form */
        <form onSubmit={handleSubmit} className="border border-zinc-200 bg-white p-6 sm:p-8 space-y-8 rounded-[4px]">
          
          {/* Q1 */}
          <div className="space-y-3">
            <label className="block text-[17px] font-bold text-zinc-950 break-keep">
              1. 최근 응급실을 이용하거나 보호자로 방문한 경험이 있습니까? <span className="text-[#0052FF]">*</span>
            </label>
            <div className="space-y-2">
              {['최근 1년 이내 방문 경험이 있다', '1년 이전에 방문한 경험이 있다', '응급실 방문 경험이 없다'].map((opt) => (
                <label key={opt} className="flex items-center gap-3 text-[15px] text-zinc-800 cursor-pointer min-h-[36px]">
                  <input
                    type="radio"
                    name="q1_experience"
                    value={opt}
                    checked={formData.q1_experience === opt}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 text-[#0052FF] focus:ring-[#0052FF] bg-white border-zinc-300"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q2 */}
          <div className="space-y-3 border-t border-zinc-200 pt-6">
            <label className="block text-[17px] font-bold text-zinc-950 break-keep">
              2. 응급실 이용 시 가장 불편했거나 불안했던 점은 무엇입니까? <span className="text-[#0052FF]">*</span>
            </label>
            <div className="space-y-2">
              {[
                '긴 대기시간 및 우선순위 안내 부족',
                '수술 또는 전문의 부재로 인한 전원 불안',
                '응급실 의료진의 불친절 또는 설명 부족',
                '경증/중증 구분 없는 혼잡함',
                '기타'
              ].map((opt) => (
                <label key={opt} className="flex items-center gap-3 text-[15px] text-zinc-800 cursor-pointer min-h-[36px]">
                  <input
                    type="radio"
                    name="q2_inconvenience"
                    value={opt}
                    checked={formData.q2_inconvenience === opt}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 text-[#0052FF] focus:ring-[#0052FF] bg-white border-zinc-300"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
            {formData.q2_inconvenience === '기타' && (
              <input
                type="text"
                placeholder="직접 입력해주세요"
                value={formData.q2_other_text}
                onChange={(e) => setFormData(prev => ({ ...prev, q2_other_text: e.target.value }))}
                className="w-full mt-2 p-3 bg-zinc-50 border border-zinc-300 text-zinc-950 rounded-[2px] text-[15px] focus:outline-none focus:border-[#0052FF]"
              />
            )}
          </div>

          {/* Q3 */}
          <div className="space-y-3 border-t border-zinc-200 pt-6">
            <label className="block text-[17px] font-bold text-zinc-950 break-keep">
              3. 중증응급환자가 여러 병원을 전전하는 가장 큰 원인은 무엇이라고 생각하십니까? <span className="text-[#0052FF]">*</span>
            </label>
            <div className="space-y-2">
              {[
                '수술 집도 전문의 및 중환자실 집중치료 인력 부족',
                '응급실 병상 부족 및 단순 시설 한계',
                '의료진의 사법 리스크 기피 및 방어진료',
                '경증환자의 대형병원 응급실 과밀 이용'
              ].map((opt) => (
                <label key={opt} className="flex items-center gap-3 text-[15px] text-zinc-800 cursor-pointer min-h-[36px]">
                  <input
                    type="radio"
                    name="q3_cause"
                    value={opt}
                    checked={formData.q3_cause === opt}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 text-[#0052FF] focus:ring-[#0052FF] bg-white border-zinc-300"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q4 */}
          <div className="space-y-3 border-t border-zinc-200 pt-6">
            <label className="block text-[17px] font-bold text-zinc-950 break-keep">
              4. 병상이 남아있어도 수술할 전문의가 없으면 수용이 어려울 수 있다는 점을 알고 계셨습니까? <span className="text-[#0052FF]">*</span>
            </label>
            <div className="space-y-2">
              {['잘 알고 있었다', '들어본 적은 있으나 자세히는 몰랐다', '전혀 몰랐다 (침대만 있으면 치료 가능한 줄 알았다)'].map((opt) => (
                <label key={opt} className="flex items-center gap-3 text-[15px] text-zinc-800 cursor-pointer min-h-[36px]">
                  <input
                    type="radio"
                    name="q4_awareness"
                    value={opt}
                    checked={formData.q4_awareness === opt}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 text-[#0052FF] focus:ring-[#0052FF] bg-white border-zinc-300"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q5 */}
          <div className="space-y-3 border-t border-zinc-200 pt-6">
            <label className="block text-[17px] font-bold text-zinc-950 break-keep">
              5. 응급환자 이송 지연을 줄이기 위해 가장 시급한 대책은 무엇이라고 보십니까? <span className="text-[#0052FF]">*</span>
            </label>
            <div className="space-y-2">
              {[
                '권역별 전문의 순환 당직제 도입 (야간·휴일 당직 공조)',
                '10~15년 의무복무 필수의료 전문의 양성 (지역 거점 상주)',
                '의료사고 사법 리스크 완화 및 공적 분쟁지원 안전망',
                '119 이송지침 준수 및 경증환자 분산 이용 유도'
              ].map((opt) => (
                <label key={opt} className="flex items-center gap-3 text-[15px] text-zinc-800 cursor-pointer min-h-[36px]">
                  <input
                    type="radio"
                    name="q5_improvement"
                    value={opt}
                    checked={formData.q5_improvement === opt}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 text-[#0052FF] focus:ring-[#0052FF] bg-white border-zinc-300"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q6 Comment */}
          <div className="space-y-3 border-t border-zinc-200 pt-6">
            <label className="block text-[17px] font-bold text-zinc-950 break-keep">
              6. 응급의료체계 개선이나 연구팀에 전하고 싶은 의견이 있다면 자유롭게 적어주세요.
            </label>
            <textarea
              name="q6_comment"
              rows={4}
              value={formData.q6_comment}
              onChange={handleChange}
              placeholder="자유롭게 고견을 남겨주세요."
              className="w-full p-4 bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-[2px] text-[15px] focus:outline-none focus:border-[#0052FF] leading-relaxed"
            />
          </div>

          {/* Agreement */}
          <div className="border-t border-zinc-200 pt-6 space-y-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                required
                className="w-5 h-5 mt-0.5 text-[#0052FF] focus:ring-[#0052FF] bg-white border-zinc-300 shrink-0"
              />
              <span className="text-[14px] text-zinc-700 leading-snug break-keep">
                (필수) 본 응답 내용은 연구 목적 외로 사용되지 않으며, 개인 식별 정보가 수집되지 않음에 동의합니다.
              </span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full min-h-[50px] py-3.5 bg-[#0052FF] hover:bg-blue-700 text-white font-bold text-[16px] rounded-[2px] transition-all flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? '등록 중...' : '시민 의견 제출하기'}</span>
            </button>
          </div>

        </form>
      )}

    </div>
  );
}
