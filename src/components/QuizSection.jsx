import React, { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function QuizSection() {
  const questions = [
    {
      id: 1,
      question: "응급실은 먼저 온 순서대로 진료받는다.",
      answer: false,
      explanation: "응급실은 도착 순서가 아닌 중증도(KTAS) 분류에 따라 생명이 위급한 중증환자를 우선 진료합니다. 이에 따라 경증 환자는 진료 대기가 길어질 수 있습니다."
    },
    {
      id: 2,
      question: "중증응급환자라면 무조건 가장 큰 병원으로 가는 것이 항상 최선이다.",
      answer: false,
      explanation: "대형 상급종합병원에 환자가 집중되면 대기시간이 길어져 오히려 처치가 늦어질 수 있습니다. 환자 질환과 상태에 적합한 인근 응급의료기관을 찾는 것이 더 빠른 치료로 이어집니다."
    },
    {
      id: 3,
      question: "병원 응급실에 빈 침대가 있다면 환자를 무조건 수용할 수 있다.",
      answer: false,
      explanation: "응급실 침대가 비어 있어도 해당 질환의 당직 전문의, 응급수술실, 중환자실이 가동되지 않으면 최종 치료가 불가능합니다. 수용 여부는 병상 유무가 아닌 실제 수술·치료 역량에 따라 판단됩니다."
    },
    {
      id: 4,
      question: "상태가 위급할수록 이동시간이 길더라도 최종 치료 병원으로 바로 가는 것이 언제나 안전하다.",
      answer: false,
      explanation: "이동시간이 길어지면 이송 도중 기도가 막히거나 상태가 급격히 악화될 위험이 있습니다. 가까운 응급실에서 기도 확보 등 초기 생명유지 처치를 먼저 받는 것이 더 안전합니다."
    },
    {
      id: 5,
      question: "경증환자가 야간·휴일 진료기관이나 동네 병의원을 이용하면 중증환자의 이송 지연을 줄이는 데 도움이 된다.",
      answer: true,
      explanation: "비응급 경증환자가 동네 병의원이나 야간·휴일 진료기관을 이용하면 응급실 과밀화가 완화됩니다. 이를 통해 한시가 급한 중증응급환자의 신속한 진료와 골든타임을 지킬 수 있습니다."
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
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
            CITIZEN AWARENESS QUIZ
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
            응급실 바로 알기 O/X 퀴즈
          </h2>
          <p className="text-slate-600 text-sm">
            5문항의 퀴즈를 통해 응급실 이용 원칙과 골든타임 보호 방법을 확인해보세요.
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
                className={`py-8 rounded-xl font-black text-4xl flex items-center justify-center border-2 transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue ${
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
                className={`py-8 rounded-xl font-black text-4xl flex items-center justify-center border-2 transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue ${
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
                      {userAnswers[currentStep] === questions[currentStep].answer ? '정답입니다.' : '설명을 확인해보세요.'}
                    </span>
                    <p className="text-xs sm:text-sm font-normal leading-relaxed">
                      {questions[currentStep].explanation}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={nextQuestion}
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-navy-900 text-white font-bold text-sm hover:bg-navy-800 transition-colors shadow-sm"
                  >
                    <span>{currentStep < questions.length - 1 ? '다음 문항' : '확인 완료'}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            )}

          </div>
        ) : (
          /* Completion View: 점수를 매기거나 시민을 탓하지 않고, '올바른 응급실 이용이 중증환자의 골든타임을 지킨다'는 취지로 마무리 */
          <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-200 text-center space-y-6 shadow-sm animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center mx-auto">
              <HeartHandshake className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-navy-900">
                올바른 응급실 이용이 중증환자의 골든타임을 지킵니다
              </h3>
              <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
                응급의료에 대한 시민 여러분의 깊은 관심과 참여에 감사드립니다.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200 max-w-lg mx-auto text-left text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2.5">
              <p className="font-semibold text-navy-900">
                • 생명이 위급한 중증응급환자가 지체 없이 전문의의 치료를 받을 수 있도록 응급실 이용 원칙을 준수하는 것이 중요합니다.
              </p>
              <p className="text-slate-600">
                • 응급상황 발생 시 개별적으로 병원을 직접 찾기보다 <strong>119의 전문적인 상태 분류와 수용병원 안내</strong>를 따라주세요.
              </p>
            </div>

            <div>
              <button
                onClick={resetQuiz}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-brand-blue text-white font-bold text-xs sm:text-sm hover:bg-blue-600 transition-colors shadow-sm"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                <span>퀴즈 다시 확인하기</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
