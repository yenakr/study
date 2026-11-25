import React, { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw, ArrowRight, HeartHandshake } from 'lucide-react';

export default function QuizSection() {
  const questions = [
    {
      id: 1,
      question: "응급실은 먼저 도착한 순서대로 진료한다.",
      answer: false,
      explanation: "응급실은 도착 순서가 아니라 환자의 중증도(KTAS)에 따라 생명이 위급한 환자부터 우선 진료합니다. 이에 따라 경증 환자는 진료 대기가 길어질 수 있습니다."
    },
    {
      id: 2,
      question: "규모가 큰 병원이 항상 가장 빠른 선택이다.",
      answer: false,
      explanation: "상급종합병원에 환자가 집중되면 대기시간이 길어져 오히려 빠른 처치가 어려울 수 있습니다. 환자의 상태와 질환에 적합한 인근 응급의료기관을 찾는 것이 더 빠른 치료로 이어집니다."
    },
    {
      id: 3,
      question: "병상이 있어도 필요한 전문의나 수술실이 없으면 수용이 어려울 수 있다.",
      answer: true,
      explanation: "응급실 침대가 남아 있어도 해당 질환의 담당 전문의 부재나 수술실·중환자실이 만석이면 최종 치료가 불가능합니다. 수용 여부는 병상 유무뿐 아니라 실제 수술과 진료 역량에 따라 결정됩니다."
    },
    {
      id: 4,
      question: "응급상황에서는 개인이 병원을 찾기보다 119의 안내를 따르는 것이 중요하다.",
      answer: true,
      explanation: "119 구급대는 환자의 중증도와 지역 병원의 실시간 치료 역량을 종합적으로 판단해 최적의 병원으로 이송합니다. 개별 방문 시 진료 불가로 재이송될 위험을 줄일 수 있습니다."
    },
    {
      id: 5,
      question: "경증환자의 적정 의료기관 이용은 중증환자의 진료 여력을 보호할 수 있다.",
      answer: true,
      explanation: "비응급 경증환자가 동네 병의원이나 야간·휴일 진료기관을 이용하면 응급실 과밀화가 완화됩니다. 이를 통해 한시가 급한 중증응급환자의 신속한 진료 여력과 골든타임을 지킬 수 있습니다."
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

  return (
    <section className="py-16 bg-white border-t border-b border-slate-200 font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
            응급실 바로 알기 O/X 퀴즈
          </h2>
          <p className="text-slate-600 text-sm">
            5문항의 퀴즈로 올바른 응급실 이용 원칙을 확인해보세요.
          </p>
        </div>

        {!showResult ? (
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            
            {/* Progress */}
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
              <span>문항 {currentStep + 1} / {questions.length}</span>
              <span className="text-brand-blue font-bold">{Math.round(((currentStep + 1) / questions.length) * 100)}% 진행</span>
            </div>

            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-brand-blue h-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 min-h-[90px] flex items-center">
              <h3 className="text-base sm:text-lg font-bold text-navy-900 leading-snug">
                Q{currentStep + 1}. {questions[currentStep].question}
              </h3>
            </div>

            {/* Choice Buttons O / X */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleSelectAnswer(currentStep, true)}
                disabled={userAnswers[currentStep] !== undefined}
                className={`py-8 rounded-xl font-black text-4xl flex items-center justify-center border-2 transition-all focus:outline-none ${
                  userAnswers[currentStep] === true
                    ? questions[currentStep].answer === true
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                      : 'bg-red-50 border-red-500 text-red-700'
                    : 'bg-white border-slate-200 hover:border-brand-blue hover:text-brand-blue text-navy-900'
                }`}
                aria-label="O 선택"
              >
                <span>O</span>
              </button>

              <button
                onClick={() => handleSelectAnswer(currentStep, false)}
                disabled={userAnswers[currentStep] !== undefined}
                className={`py-8 rounded-xl font-black text-4xl flex items-center justify-center border-2 transition-all focus:outline-none ${
                  userAnswers[currentStep] === false
                    ? questions[currentStep].answer === false
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                      : 'bg-red-50 border-red-500 text-red-700'
                    : 'bg-white border-slate-200 hover:border-brand-blue hover:text-brand-blue text-navy-900'
                }`}
                aria-label="X 선택"
              >
                <span>X</span>
              </button>
            </div>

            {/* Explanation box after answer (Max 2 sentences) */}
            {userAnswers[currentStep] !== undefined && (
              <div className="space-y-4 animate-fadeIn">
                <div className={`p-4 rounded-xl border flex items-start gap-3 ${
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
                      {userAnswers[currentStep] === questions[currentStep].answer ? '정답입니다.' : '해설'}
                    </span>
                    <p className="text-xs sm:text-sm font-normal leading-relaxed">
                      {questions[currentStep].explanation}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={nextQuestion}
                    className="inline-flex items-center px-6 py-2.5 rounded-xl bg-navy-900 text-white font-bold text-sm hover:bg-navy-800 transition-colors"
                  >
                    <span>{currentStep < questions.length - 1 ? '다음 문항' : '확인 완료'}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            )}

          </div>
        ) : (
          <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-200 text-center space-y-6 shadow-sm animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center mx-auto">
              <HeartHandshake className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-navy-900">
                올바른 응급실 이용이 중증환자의 골든타임을 지킵니다
              </h3>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200 max-w-lg mx-auto text-left text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
              <p>
                • 중증응급환자가 지체 없이 전문의의 치료를 받을 수 있도록 응급실 이용 원칙을 준수하는 것이 중요합니다.
              </p>
              <p>
                • 응급상황 발생 시 개별적으로 병원을 직접 찾기보다 <strong>119의 상태 분류와 수용병원 안내</strong>를 따라주세요.
              </p>
            </div>

            <div>
              <button
                onClick={resetQuiz}
                className="inline-flex items-center px-5 py-2.5 rounded-xl bg-brand-blue text-white font-bold text-xs sm:text-sm hover:bg-blue-600 transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                <span>퀴즈 다시 풀기</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
