import React, { useState } from 'react';
import { ArrowRight, RefreshCw, Activity, Building2, Stethoscope, PhoneCall, Clock, Check, X } from 'lucide-react';

export default function ErGuideSection({ setActiveTab }) {
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

  const guidePrinciples = [
    {
      num: "01",
      topic: "진료 순서의 원칙",
      rule: "도착 순서가 아닌 중증도(KTAS) 분류 순 진료",
      icon: Activity,
      wrongAction: "먼저 도착한 순서대로 접수·진료 요구",
      rightAction: "생체징후 위급 환자(KTAS 1·2단계) 우선 진료",
      desc: "생체징후가 불안정한 중증외상 및 뇌·심혈관 환자가 먼저 처치실로 이동하며, 비응급 환자는 대기시간이 발생할 수 있습니다."
    },
    {
      num: "02",
      topic: "의료기관 선택",
      rule: "무조건 대형병원보다 질환 적합 병원 우선",
      icon: Building2,
      wrongAction: "상급종합병원 응급실 무조건 방문",
      rightAction: "증상별(골절·화상·소아) 치료 가능 지역기관 선택",
      desc: "대형병원으로의 무조건 이동은 긴 대기로 빠른 처치를 방해합니다. 환자의 증상에 맞는 인근 지역 응급의료기관이 골든타임을 지킵니다."
    },
    {
      num: "03",
      topic: "수용 가능의 기준",
      rule: "단순 빈 침대가 아닌 전문의·수술실 가동성 확인",
      icon: Stethoscope,
      wrongAction: "남은 빈 병상 수만 보고 병원 이동",
      rightAction: "배후 당직 전문의 상주 및 수술실 가동 확인",
      desc: "침대가 남아 있어도 응급 수술을 집도할 전문의가 없거나 중환자실이 만석이면 수용이 불가합니다. 실제 수술 가능 여부가 기준입니다."
    },
    {
      num: "04",
      topic: "이송 시 행동 요령",
      rule: "개별 이동보다 119 구급대의 지정 안내 준수",
      icon: PhoneCall,
      wrongAction: "사전 확인 없이 자차로 개별 병원 탐색",
      rightAction: "119 구급대의 실시간 치료역량 조회 및 이송 준수",
      desc: "자가용 등으로 개별 방문하다 수용 불가 통보를 받는 위험을 방지하고, 119의 전문적인 사전 수용 확인 이송을 따르는 것이 안전합니다."
    },
    {
      num: "05",
      topic: "골든타임 보호",
      rule: "경증 질환 분산 이용으로 중증환자 진료 공간 유지",
      icon: Clock,
      wrongAction: "경증 감기·단순 장염으로 대형 응급실 이용",
      rightAction: "달빛어린이병원 및 동네 야간·휴일 진료기관 이용",
      desc: "비응급 환자가 지역 1·2차 병의원을 분산 이용할 때, 분초를 다투는 심정지·중증외상 초응급환자의 응급실 진료 역량이 확보됩니다."
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
    <section id="er-guide" className="py-24 sm:py-28 bg-white text-zinc-900 min-h-screen font-sans border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header (Left-aligned) */}
        <div className="space-y-4 text-left border-b border-zinc-200 pb-8">
          <div className="text-[13px] font-mono font-bold text-[#0B3CFF] uppercase tracking-widest">
            SECTION 05 • 시민 안내 및 이용 수칙
          </div>

          {/* 핵심 한 문장 (20px bold) */}
          <p className="text-[20px] font-bold text-zinc-950 leading-snug break-keep">
            응급상황에서는 직접 병원을 찾기보다 119의 안내를 따르는 것이 가장 안전합니다.
          </p>

          <h2 className="text-[36px] sm:text-[40px] font-serif font-bold text-zinc-950 tracking-tight leading-tight break-keep">
            응급실 바로 알기: 인식 점검과 이용 수칙
          </h2>

          <p className="text-[17px] md:text-[18px] text-zinc-800 leading-[1.75] font-normal break-keep max-w-[640px]">
            응급의료체계의 병목 현상을 줄이고 중증환자의 골든타임을 지키기 위해 시민이 숙지해야 할 핵심 상식과 이용 수칙을 도식화하여 안내합니다.
          </p>
        </div>

        {/* Part 1: Interactive O/X Quiz */}
        <div className="text-left space-y-4">
          <div className="flex items-baseline justify-between border-b border-zinc-200 pb-3">
            <h3 className="text-[22px] font-semibold text-zinc-950">
              응급의료 상식 점검
            </h3>
            {!showResult && (
              <span className="text-[13px] font-mono font-bold text-zinc-600">
                문항 {currentStep + 1} / {questions.length}
              </span>
            )}
          </div>

          {!showResult ? (
            <div className="border border-zinc-300 bg-white p-6 sm:p-8 space-y-6">
              
              <div className="bg-zinc-50 border border-zinc-200 p-5 space-y-2">
                <span className="text-[13px] font-mono font-bold text-zinc-600 block">질문 0{currentStep + 1}</span>
                <p className="font-bold text-[18px] sm:text-[20px] text-zinc-950 leading-snug break-keep">
                  {questions[currentStep].question}
                </p>
              </div>

              {/* O / X Selection Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => handleSelectAnswer(currentStep, true)}
                  disabled={userAnswers[currentStep] !== undefined}
                  className={`min-h-[56px] py-4 font-bold text-2xl border transition-colors ${
                    userAnswers[currentStep] === true
                      ? questions[currentStep].answer === true
                        ? 'border-emerald-700 bg-emerald-50 text-emerald-950'
                        : 'border-red-700 bg-red-50 text-red-950'
                      : 'border-zinc-300 bg-white text-zinc-900 hover:border-zinc-950'
                  }`}
                >
                  O
                </button>

                <button
                  onClick={() => handleSelectAnswer(currentStep, false)}
                  disabled={userAnswers[currentStep] !== undefined}
                  className={`min-h-[56px] py-4 font-bold text-2xl border transition-colors ${
                    userAnswers[currentStep] === false
                      ? questions[currentStep].answer === false
                        ? 'border-emerald-700 bg-emerald-50 text-emerald-950'
                        : 'border-red-700 bg-red-50 text-red-950'
                      : 'border-zinc-300 bg-white text-zinc-900 hover:border-zinc-950'
                  }`}
                >
                  X
                </button>
              </div>

              {/* Answer Explanation Box */}
              {userAnswers[currentStep] !== undefined && (
                <div className="p-6 bg-zinc-50 border border-zinc-300 space-y-4 animate-fadeIn">
                  <div className="flex items-baseline gap-3">
                    <span className="font-bold text-[16px] text-zinc-950">
                      {userAnswers[currentStep] === questions[currentStep].answer ? '정답입니다' : '해설'}
                    </span>
                    <span className="text-[13px] text-zinc-600 font-mono">
                      (정답: {questions[currentStep].answer ? 'O' : 'X'})
                    </span>
                  </div>
                  <p className="text-[15px] text-zinc-800 leading-relaxed break-keep">
                    {questions[currentStep].explanation}
                  </p>

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={nextQuestion}
                      className="min-h-[44px] px-6 py-2.5 bg-[#0B3CFF] text-white text-[15px] font-semibold rounded-[2px] hover:bg-blue-700 transition-colors shadow-xs"
                    >
                      {currentStep < questions.length - 1 ? '다음 문항' : '결과 확인'}
                    </button>
                  </div>
                </div>
              )}

            </div>
          ) : (
            <div className="border border-zinc-300 bg-white p-6 sm:p-8 text-left space-y-4 animate-fadeIn">
              <h4 className="text-[22px] font-semibold text-zinc-950">
                올바른 응급실 이용이 중증환자의 골든타임을 지킵니다
              </h4>
              <p className="text-[17px] text-zinc-800 leading-[1.75] font-normal break-keep max-w-[640px]">
                응급의료체계는 119 구급대원과 병원 의료진의 대응뿐 아니라 시민 여러분의 협력으로 유지됩니다. 위급 상황에서는 개별적인 병원 탐색보다 119의 중증도 분류와 이송 안내를 따라주시기 바랍니다.
              </p>
              <div className="pt-2">
                <button
                  onClick={resetQuiz}
                  className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-300 bg-white text-zinc-900 text-[15px] font-semibold rounded-[2px] hover:bg-zinc-50"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>다시 풀기</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Part 2: Visual Infographic Guide (Replacing Stiff Table) */}
        <div className="text-left space-y-6 pt-4 border-t border-zinc-200">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-200 pb-3">
            <div>
              <h3 className="text-[22px] font-semibold text-zinc-950">
                응급의료 5대 핵심 이용 수칙
              </h3>
              <p className="text-[15px] text-zinc-600 mt-1">
                중증환자의 골든타임을 보호하기 위한 5가지 행동 지침 도식도
              </p>
            </div>
            <span className="text-[13px] font-mono font-bold text-[#0B3CFF]">
              ACTION GUIDELINE
            </span>
          </div>

          {/* 5 Visual Cards with Comparison Chips */}
          <div className="space-y-4">
            {guidePrinciples.map((p) => {
              const IconComponent = p.icon;
              return (
                <div 
                  key={p.num}
                  className="border border-zinc-300 bg-white p-6 sm:p-7 space-y-4 transition-all hover:border-[#0B3CFF]/60"
                >
                  {/* Top Metadata Strip */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-200">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-[2px] bg-[#0B3CFF] text-white font-mono font-bold text-[14px] flex items-center justify-center shrink-0">
                        {p.num}
                      </span>
                      <span className="text-[13px] font-bold font-mono text-zinc-600 uppercase tracking-wide">
                        {p.topic}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[#0B3CFF]">
                      <IconComponent className="w-4 h-4" />
                      <span className="text-[13px] font-bold font-mono">CODE BLUE 수칙</span>
                    </div>
                  </div>

                  {/* Core Rule Title */}
                  <h4 className="text-[18px] sm:text-[20px] font-bold text-zinc-950 leading-snug break-keep">
                    {p.rule}
                  </h4>

                  {/* Visual Diagram: Contrast Comparison Pathway */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    {/* Wrong Practice */}
                    <div className="p-3.5 bg-zinc-50 border border-zinc-200 flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-zinc-200 text-zinc-700 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[11px] font-bold text-zinc-500 uppercase block">지양해야 할 행동</span>
                        <span className="text-[14px] font-medium text-zinc-800 break-keep">{p.wrongAction}</span>
                      </div>
                    </div>

                    {/* Right Practice */}
                    <div className="p-3.5 bg-blue-50/20 border border-[#0B3CFF]/40 flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#0B3CFF] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[11px] font-bold text-[#0B3CFF] uppercase block">올바른 이용 수칙</span>
                        <span className="text-[14px] font-bold text-zinc-950 break-keep">{p.rightAction}</span>
                      </div>
                    </div>
                  </div>

                  {/* Context Description */}
                  <p className="text-[15px] text-zinc-700 leading-relaxed break-keep pt-1">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Next Section Navigation Link */}
        <div className="pt-8 border-t border-zinc-200 flex justify-end">
          <button
            onClick={() => { setActiveTab('survey'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center min-h-[44px] px-6 py-3 bg-[#0B3CFF] hover:bg-blue-700 text-white text-[15px] font-semibold rounded-[2px] transition-colors shadow-xs gap-2"
          >
            <span>시민 의견</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
