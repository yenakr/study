import React, { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw, ArrowRight } from 'lucide-react';

export default function QuizSection() {
  const questions = [
    {
      id: 1,
      question: "응급실은 먼저 도착한 순서대로 진료한다.",
      answer: false,
      explanation: "응급실은 도착 순서가 아닌 환자의 중증도 분류에 따라 생명이 위급한 환자부터 먼저 진료합니다."
    },
    {
      id: 2,
      question: "가장 규모가 큰 병원으로 가는 것이 언제나 가장 빠르다.",
      answer: false,
      explanation: "상급종합병원은 대기가 길어질 수 있으므로, 환자 상태에 적합한 지역 응급의료기관을 찾는 것이 더 빠를 수 있습니다."
    },
    {
      id: 3,
      question: "병상이 있어도 필요한 전문의나 수술실이 없으면 환자 수용이 어려울 수 있다.",
      answer: true,
      explanation: "응급실 빈 침대가 있더라도 담당 전문의 부재나 수술실 대기로 인해 최종 치료 수용이 어려울 수 있습니다."
    },
    {
      id: 4,
      question: "경증환자의 적정 의료기관 이용은 중증환자의 치료기회를 보호할 수 있다.",
      answer: true,
      explanation: "경증환자가 동네 병의원이나 야간·휴일 진료기관을 이용하면 응급실 혼잡이 줄어 중증환자의 이송 지연을 막을 수 있습니다."
    },
    {
      id: 5,
      question: "119 구급대는 보호자나 환자가 지정하는 병원으로 무조건 이송해야 한다.",
      answer: false,
      explanation: "119 구급대는 환자 상태와 지역 병원의 실시간 수용 가능 여부를 다각도로 종합 판단하여 이송합니다."
    }
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSelectAnswer = (index, choice) => {
    if (userAnswers[index] !== undefined) return;
    setUserAnswers(prev => ({ ...prev, [index]: choice }));
  };

  const nextQuestion = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setUserAnswers({});
    setCurrentStep(0);
    setShowResult(false);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.answer) correct++;
    });
    return correct;
  };

  return (
    <section className="py-16 bg-white border-t border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
            응급의료 인식 확인 O/X 퀴즈
          </h2>
        </div>

        {!showResult ? (
          <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200">
            
            {/* Progress */}
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-4">
              <span>문제 {currentStep + 1} / {questions.length}</span>
              <span className="text-brand-blue">{Math.round(((currentStep + 1) / questions.length) * 100)}% 완료</span>
            </div>

            <div className="w-full bg-slate-200 h-2 rounded-full mb-8 overflow-hidden">
              <div 
                className="bg-brand-blue h-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <div className="bg-white rounded-lg p-6 border border-slate-200 mb-8 min-h-[90px] flex items-center">
              <h3 className="text-lg font-bold text-navy-900 leading-snug">
                Q{currentStep + 1}. {questions[currentStep].question}
              </h3>
            </div>

            {/* Choice Buttons O / X without (그렇다) / (아니다) */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => handleSelectAnswer(currentStep, true)}
                disabled={userAnswers[currentStep] !== undefined}
                className={`py-8 rounded-xl font-black text-4xl flex items-center justify-center border-2 transition-all ${
                  userAnswers[currentStep] === true
                    ? questions[currentStep].answer === true
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                      : 'bg-red-50 border-red-500 text-red-700'
                    : 'bg-white border-slate-200 hover:border-brand-blue hover:text-brand-blue text-navy-900'
                }`}
              >
                <span>O</span>
              </button>

              <button
                onClick={() => handleSelectAnswer(currentStep, false)}
                disabled={userAnswers[currentStep] !== undefined}
                className={`py-8 rounded-xl font-black text-4xl flex items-center justify-center border-2 transition-all ${
                  userAnswers[currentStep] === false
                    ? questions[currentStep].answer === false
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                      : 'bg-red-50 border-red-500 text-red-700'
                    : 'bg-white border-slate-200 hover:border-brand-blue hover:text-brand-blue text-navy-900'
                }`}
              >
                <span>X</span>
              </button>
            </div>

            {/* Explanation box after answer */}
            {userAnswers[currentStep] !== undefined && (
              <div className="space-y-4">
                <div className={`p-4 rounded-lg border flex items-start gap-3 ${
                  userAnswers[currentStep] === questions[currentStep].answer
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-amber-50 border-amber-200 text-amber-900'
                }`}>
                  {userAnswers[currentStep] === questions[currentStep].answer ? (
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <span className="font-bold text-sm block mb-1">
                      {userAnswers[currentStep] === questions[currentStep].answer ? '정답입니다.' : '설명을 확인해보세요.'}
                    </span>
                    <p className="text-sm font-normal leading-relaxed">
                      {questions[currentStep].explanation}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={nextQuestion}
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-navy-900 text-white font-bold text-sm hover:bg-navy-800 transition-colors"
                  >
                    <span>{currentStep < questions.length - 1 ? '다음 문제' : '결과 보기'}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            )}

          </div>
        ) : (
          /* Result View */
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 text-center">
            <h3 className="text-2xl font-bold text-navy-900 mb-2">
              나는 얼마나 알고 있었을까요?
            </h3>
            <p className="text-slate-700 text-base mb-6">
              총 {questions.length}문항 중 <span className="font-bold text-brand-blue">{calculateScore()}문항</span> 정답
            </p>

            <div className="bg-white rounded-lg p-5 border border-slate-200 max-w-md mx-auto text-left mb-8">
              <p className="text-sm text-slate-700 leading-relaxed">
                응급의료체계는 구급대원, 의료진, 그리고 시민 모두의 올바른 인식과 협력으로 더욱 탄탄해집니다.
              </p>
            </div>

            <button
              onClick={resetQuiz}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-brand-blue text-white font-semibold text-sm hover:bg-blue-600 transition-colors"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              <span>퀴즈 다시 풀기</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
