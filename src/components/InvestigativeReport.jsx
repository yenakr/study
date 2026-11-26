import React from 'react';
import { ArrowRight, AlertTriangle, ArrowDown, FileText, Image, MessageSquare } from 'lucide-react';

export default function InvestigativeReport({ onOpenPdf, onOpenPoster, onScrollToSurvey }) {
  return (
    <div className="bg-[#030712] text-zinc-100 font-sans selection:bg-[#00E5FF] selection:text-black">
      
      {/* =========================================================================
          [프롤로그 / 도입]
          대형 세리프 헤드라인: "응급실 침대는 비어 있었지만, 환자는 구급차 안에서 숨졌습니다."
          ========================================================================= */}
      <section className="min-h-[85vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-24 sm:py-32 text-left">
        
        {/* 응급 경보 신호 비콘 */}
        <div className="flex items-center gap-3 mb-8">
          <span className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-80"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#00E5FF]"></span>
          </span>
          <span className="text-[14px] font-mono font-bold tracking-widest text-[#00E5FF] glow-electric-blue">
            코드블루 • 심정지 응급 호출
          </span>
        </div>

        {/* 대형 세리프 헤드라인 */}
        <h1 className="font-serif font-black text-[38px] sm:text-[52px] lg:text-[58px] text-white tracking-tight leading-[1.25] break-keep mb-8">
          응급실 침대는 비어 있었지만,<br />
          환자는 구급차 안에서 숨졌습니다.
        </h1>

        {/* 본문 (18px 이상, 줄간격 1.8, 40자 이내) */}
        <div className="space-y-6 text-[18px] sm:text-[20px] text-zinc-300 leading-[1.8] font-normal break-keep max-w-[640px]">
          <p>
            2026년 대한민국 응급의료 현장의 민낯입니다. 119 구급차는 사이렌을 울리며 도심을 질주하지만, 환자를 태운 채 1시간 넘게 도로 위를 전전합니다.
          </p>
          <p>
            병원에 침대가 없어서가 아닙니다. 장비가 낡아서도 아닙니다. 막상 도착한 병원에는 환자의 배를 열고 뇌혈관을 이어 붙일 수술 의사가 단 한 명도 남아있지 않았습니다.
          </p>
        </div>

        {/* 발행 메타 정보 */}
        <div className="mt-12 pt-6 border-t border-zinc-800/80 text-[14px] text-zinc-400 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-white font-medium">2026 한양학술타운 LION</span>
          <span className="text-zinc-600">|</span>
          <span>한양대학교 정책학과 간호학과 융합 연구팀 CODE BLUE</span>
        </div>

        {/* 스크롤 유도 힌트 */}
        <div className="mt-16 flex items-center gap-2 text-zinc-400 text-[14px]">
          <span>아래로 스크롤하여 진실 확인하기</span>
          <ArrowDown className="w-4 h-4 text-[#00E5FF] animate-bounce" />
        </div>
      </section>

      {/* =========================================================================
          [풀스크린 압도적 블루 씬: 한 줄 결론]
          화면 전체를 지배하는 딥 블루와 네온 광채
          "병상은 있는데, 수술할 전문의가 없다."
          ========================================================================= */}
      <section className="min-h-screen bg-[#00103A] border-y border-[#00E5FF]/30 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden text-center">
        
        {/* 심전도(ECG) 펄스 배경 라인 */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
          <svg className="w-full h-48" viewBox="0 0 1200 200" fill="none" stroke="#00E5FF" strokeWidth="2">
            <path d="M0,100 L300,100 L340,100 L360,30 L380,180 L400,80 L420,110 L440,100 L700,100 L740,100 L760,20 L780,190 L800,70 L820,110 L840,100 L1200,100" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          
          <span className="inline-block px-3 py-1 text-[13px] font-mono font-bold tracking-widest text-[#00E5FF] border border-[#00E5FF]/40 rounded-[2px] bg-[#00E5FF]/10 uppercase">
            핵심 한 줄 결론
          </span>

          <h2 className="font-serif font-black text-[42px] sm:text-[62px] lg:text-[72px] text-white tracking-tight leading-[1.2] break-keep glow-electric-blue">
            "병상은 있는데,<br />
            수술할 전문의가 없다."
          </h2>

          <p className="text-[19px] sm:text-[22px] text-blue-100/90 leading-[1.8] font-normal break-keep max-w-[640px] mx-auto">
            침대와 모니터가 아무리 남아돌아도, 그날 밤 환자를 수술할 전문의가 당직을 서지 않으면 응급실은 문을 열 수 없습니다. 이것이 이송 지연의 본질입니다.
          </p>

        </div>
      </section>

      {/* =========================================================================
          [1부. 환자는 왜 길 위에서 시간을 잃었는가?]
          질문 → 한 문장 답 → 근거 숫자 (화면을 지배하는 큰 숫자 1위 / 33%)
          + 유일한 레드 포인트 (골든타임 소실)
          ========================================================================= */}
      <section id="part1" className="min-h-[85vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-28 sm:py-36 text-left border-b border-zinc-900">
        
        {/* 질문 */}
        <span className="text-[15px] font-mono font-bold text-[#00E5FF] tracking-wider block mb-3">
          질문 01
        </span>
        <h2 className="font-serif font-bold text-[32px] sm:text-[42px] text-white tracking-tight leading-snug break-keep mb-6">
          구급차는 왜 병원 문앞에서 번번이 돌아섰는가?
        </h2>

        {/* 한 문장 답 */}
        <p className="text-[20px] sm:text-[22px] text-[#00E5FF] font-semibold leading-relaxed break-keep max-w-[640px] mb-12">
          119 화면에는 '빈 침대'가 떴지만, 막상 도착한 병원에는 수술할 의사가 그날 당직에 없었습니다.
        </p>

        {/* 화면을 지배하는 거대한 근거 숫자 */}
        <div className="py-8 border-y border-zinc-800/80 my-4 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
            <span className="font-serif font-black text-[72px] sm:text-[96px] text-white tracking-tighter leading-none">
              1위
            </span>
            <div className="space-y-1">
              <span className="text-[20px] sm:text-[24px] font-bold text-zinc-100 block break-keep">
                전국 119 구급대 재이송 사유 1위: 전문의 부재
              </span>
              <span className="text-[15px] text-zinc-400 block font-mono">
                전체 수용 거부 및 지연 원인의 약 33% 차지 [2024 소방청 구급활동 통계자료]
              </span>
            </div>
          </div>
          <p className="text-[17px] text-zinc-300 leading-[1.8] break-keep max-w-[640px]">
            단순히 침대 개수만 보여주는 전산망을 믿고 달려갔던 구급차는 응급실 앞에서 "의사가 없어 치료할 수 없다"는 통보를 받고 다른 병원을 찾아 다시 시동을 걸어야 했습니다.
          </p>
        </div>

        {/* 유일한 레드 포인트: 골든타임 소실 경고 스트립 */}
        <div className="mt-8 p-5 sm:p-6 bg-red-950/30 border-l-4 border-red-500 rounded-[2px] space-y-2">
          <div className="flex items-center gap-2 text-red-400 font-bold text-[15px]">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span className="tracking-wide uppercase font-mono">골든타임 소실 경고</span>
          </div>
          <p className="text-[18px] sm:text-[19px] font-bold text-white break-keep leading-snug">
            적정 수술 시간인 90분을 도로 위에서 넘기며, 환자의 생체징후는 멈췄습니다.
          </p>
          <p className="text-[15px] text-red-200/80 leading-relaxed break-keep">
            다발성 중증외상과 뇌출혈 환자는 분초가 곧 생명입니다. 전화로 병원을 찾아 헤매는 동안 뇌세포가 괴사하고 과다출혈로 회생 불가능한 상태에 빠졌습니다.
          </p>
        </div>

      </section>

      {/* =========================================================================
          [2부. 의사는 왜 환자를 받지 못했는가?]
          질문 → 한 문장 답 → 근거 사례 + 도식 1 (의사의 외통수 구조도)
          ========================================================================= */}
      <section id="part2" className="min-h-[85vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-28 sm:py-36 text-left border-b border-zinc-900">
        
        {/* 질문 */}
        <span className="text-[15px] font-mono font-bold text-[#00E5FF] tracking-wider block mb-3">
          질문 02
        </span>
        <h2 className="font-serif font-bold text-[32px] sm:text-[42px] text-white tracking-tight leading-snug break-keep mb-6">
          응급실 의사는 왜 환자를 거부할 수밖에 없었는가?
        </h2>

        {/* 한 문장 답 */}
        <p className="text-[20px] sm:text-[22px] text-[#00E5FF] font-semibold leading-relaxed break-keep max-w-[640px] mb-10">
          환자를 받으면 수술할 의사가 없어 결과 악화로 감옥에 가고, 환자를 돌려보내면 진료거부죄로 전과자가 되는 외통수에 갇혀 있었습니다.
        </p>

        {/* 근거 판결/수사 사례 */}
        <div className="space-y-4 text-[18px] text-zinc-300 leading-[1.8] break-keep max-w-[640px]">
          <p>
            2023년 대구 10대 외상환자 사망 사건 당시, 응급실 의료진은 당직 수술 인력이 없어 정당하게 수용 불가 통보를 했습니다. 그러나 경찰은 해당 의사를 업무상과실치사 및 응급의료법 위반 혐의로 피의자 입건해 장기간 강도 높은 수사를 벌였습니다.
          </p>
          <p>
            의료진에게 남겨진 선택지는 두 가지뿐이었습니다. 살릴 수 없는 환자를 억지로 받아 수사 대상이 되거나, 환자를 받지 못한다고 말했다가 고발당하는 것입니다.
          </p>
        </div>

        {/* [도식 1: 의사의 외통수 다이어그램 (전체 도식 2개 중 1번째)] */}
        <div className="mt-12 p-6 sm:p-8 bg-[#050B18] border border-zinc-800 rounded-[4px] space-y-6">
          
          <div className="border-b border-zinc-800 pb-3 flex items-center justify-between">
            <span className="text-[13px] font-mono font-bold text-[#00E5FF] tracking-widest uppercase">
              도식 1 • 응급실 의료진의 법적 외통수 구조
            </span>
          </div>

          {/* 인바운드 트리거 */}
          <div className="bg-zinc-900 border border-zinc-700 p-4 text-center">
            <span className="text-[13px] font-mono text-zinc-400 block mb-1">상황 발생</span>
            <span className="text-[17px] font-bold text-white">119 중증응급환자 수용 요청 접수</span>
          </div>

          {/* 분기선 시각화 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* 좌측 분기: 수용 시 */}
            <div className="bg-zinc-950/80 border border-zinc-800 p-5 space-y-3">
              <span className="inline-block px-2.5 py-1 text-[12px] font-bold bg-[#00E5FF]/20 text-[#00E5FF] rounded-[2px]">
                선택 1. 환자를 일단 수용할 경우
              </span>
              <p className="text-[15px] text-zinc-300 leading-relaxed break-keep">
                수술할 당직 전문의가 없어 골든타임 내 치료 실패 ➔ <strong>업무상과실치사상죄 형사 입건 및 재판 회부</strong>
              </p>
            </div>

            {/* 우측 분기: 거부 시 */}
            <div className="bg-zinc-950/80 border border-zinc-800 p-5 space-y-3">
              <span className="inline-block px-2.5 py-1 text-[12px] font-bold bg-zinc-800 text-zinc-300 rounded-[2px]">
                선택 2. 수용 불가 통보를 할 경우
              </span>
              <p className="text-[15px] text-zinc-300 leading-relaxed break-keep">
                인력 부족의 정당한 사유를 객관 입증하지 못할 시 ➔ <strong>응급의료법 제6조 진료거부죄 처벌 (징역·벌금형)</strong>
              </p>
            </div>

          </div>

          {/* 모순 요약 결론 */}
          <div className="p-4 bg-zinc-900/90 border-l-2 border-[#00E5FF] text-left">
            <p className="text-[15px] text-zinc-200 font-medium break-keep">
              "받아도 형사 처벌 위험, 안 받아도 전과자 위험" — 의사 개인의 부도덕함이 아니라 배후 전문의 결손을 방치한 입법 공백의 결과입니다.
            </p>
          </div>

        </div>

      </section>

      {/* =========================================================================
          [3부. 어떻게 해야 환자와 의사를 모두 살릴 수 있는가?]
          질문 → 한 문장 답 → 서술형 3대 대안
          (카드 3개 나열 금지, 깊이 있는 저널리즘 단락)
          ========================================================================= */}
      <section id="part3" className="min-h-[85vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-28 sm:py-36 text-left border-b border-zinc-900">
        
        {/* 질문 */}
        <span className="text-[15px] font-mono font-bold text-[#00E5FF] tracking-wider block mb-3">
          질문 03
        </span>
        <h2 className="font-serif font-bold text-[32px] sm:text-[42px] text-white tracking-tight leading-snug break-keep mb-6">
          다음 환자를 살리려면 무엇을 뜯어고쳐야 하는가?
        </h2>

        {/* 한 문장 답 */}
        <p className="text-[20px] sm:text-[22px] text-[#00E5FF] font-semibold leading-relaxed break-keep max-w-[640px] mb-12">
          한 병원에 365일 독박 당직을 강요하지 말고 권역별로 수술 당직을 나누며, 10년 이상 지역에 남을 의사를 기르고, 최선을 다한 의사는 법이 지켜줘야 합니다.
        </p>

        {/* 서술형 3대 근거 (박스 3개 그리드 나열 없이 단락별 서술) */}
        <div className="space-y-12 border-l border-zinc-800 pl-6 sm:pl-8">
          
          {/* 대안 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[14px] font-bold text-[#00E5FF]">대안 01</span>
              <h3 className="text-[22px] sm:text-[24px] font-bold text-white">
                요일별 전문의 순환 당직 네트워크
              </h3>
            </div>
            <p className="text-[18px] text-zinc-300 leading-[1.8] break-keep max-w-[640px]">
              단일 병원의 전문의가 365일 24시간 내내 깨어 있을 수는 없습니다. 권역 내 거점병원들이 협약을 맺고 월·목은 A병원이 외과를, 화·금은 B병원이 뇌혈관을 책임지는 방식으로 순환 당직을 편성해야 합니다. 119는 당직 요일에 맞춰 환자를 지체 없이 직송함으로써 의사의 과로사와 야간 진료 공백을 동시에 해결합니다.
            </p>
          </div>

          {/* 대안 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[14px] font-bold text-[#00E5FF]">대안 02</span>
              <h3 className="text-[22px] sm:text-[24px] font-bold text-white">
                10~15년 의무복무 필수의료 전문의 양성
              </h3>
            </div>
            <p className="text-[18px] text-zinc-300 leading-[1.8] break-keep max-w-[640px]">
              3년 만에 떠나는 공중보건의사나 단기 지원금 땜질로는 지역 중증외상센터를 지탱할 수 없습니다. 의대 입학 단계부터 특기 선발을 통해 정원 외로 선발하고, 학비와 주거를 전액 국비 지원하는 대신 권역 거점병원에서 10년에서 15년 동안 필수진료과 전문의로 근무하도록 의무화하여 지역에 영구 정착하도록 유도해야 합니다.
            </p>
          </div>

          {/* 대안 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[14px] font-bold text-[#00E5FF]">대안 03</span>
              <h3 className="text-[22px] sm:text-[24px] font-bold text-white">
                의료사고 사법 안전망과 공적 분쟁지원
              </h3>
            </div>
            <p className="text-[18px] text-zinc-300 leading-[1.8] break-keep max-w-[640px]">
              환자의 상태가 워낙 위독해 최선의 응급처치를 다했음에도 불가피하게 사망했을 때, 의사 개인을 과실치사범으로 몰아가면 필수의료는 붕괴합니다. 수용 당시의 EMR 기록을 바탕으로 의료분쟁조정원이 불가항력성을 우선 감정하도록 법을 개정하고, 국가가 공적 변호와 손해배상을 분담하여 의료진을 법적 사각지대에서 보호해야 합니다.
            </p>
          </div>

        </div>

      </section>

      {/* =========================================================================
          [4부. 시민은 위급할 때 무엇을 해야 하는가?]
          질문 → 한 문장 답 → 도식 2 (시민의 행동 전환 대비)
          ========================================================================= */}
      <section id="part4" className="min-h-[85vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-28 sm:py-36 text-left border-b border-zinc-900">
        
        {/* 질문 */}
        <span className="text-[15px] font-mono font-bold text-[#00E5FF] tracking-wider block mb-3">
          질문 04
        </span>
        <h2 className="font-serif font-bold text-[32px] sm:text-[42px] text-white tracking-tight leading-snug break-keep mb-6">
          가족이 쓰러졌을 때 우리는 어디로 가야 하는가?
        </h2>

        {/* 한 문장 답 */}
        <p className="text-[20px] sm:text-[22px] text-[#00E5FF] font-semibold leading-relaxed break-keep max-w-[640px] mb-10">
          직접 차를 몰고 큰 병원 응급실로 달리지 말고, 119가 실시간 수술 가능 병원을 찾을 때까지 구급대의 지시를 따라야 합니다.
        </p>

        <p className="text-[18px] text-zinc-300 leading-[1.8] break-keep max-w-[640px] mb-12">
          많은 시민들이 무조건 이름난 대형병원이 가장 빠를 것이라 믿고 자가용으로 환자를 옮깁니다. 하지만 도착한 대형병원 응급실에 당장 수술할 의사가 없으면 또다시 다른 병원으로 재이송되며 환자는 길 위에서 골든타임을 허비하게 됩니다.
        </p>

        {/* [도식 2: 시민의 행동 전환 (전체 도식 2개 중 2번째)] */}
        <div className="p-6 sm:p-8 bg-[#050B18] border border-zinc-800 rounded-[4px] space-y-6">
          
          <div className="border-b border-zinc-800 pb-3">
            <span className="text-[13px] font-mono font-bold text-[#00E5FF] tracking-widest uppercase">
              도식 2 • 골든타임을 지키는 시민 행동 전환
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* 하지 말 것 */}
            <div className="p-5 bg-zinc-950 border border-zinc-800 space-y-2">
              <span className="text-[12px] font-mono font-bold text-zinc-400 block uppercase">
                ❌ 지양해야 할 행동
              </span>
              <h4 className="text-[18px] font-bold text-zinc-300">
                빈 침대 숫자만 믿고 대형병원으로 자차 이동
              </h4>
              <p className="text-[15px] text-zinc-400 leading-relaxed break-keep pt-1">
                상급병원 도착 후 수술 전문의 부재로 수용 거부를 당하거나 긴 대기로 처치가 지연될 위험이 큽니다.
              </p>
            </div>

            {/* 올바른 수칙 */}
            <div className="p-5 bg-blue-950/20 border-2 border-[#00E5FF] space-y-2">
              <span className="text-[12px] font-mono font-bold text-[#00E5FF] block uppercase glow-electric-blue">
                ✔️ 올바른 행동 수칙
              </span>
              <h4 className="text-[18px] font-bold text-white">
                119의 실시간 수술 역량 조회와 이송 지정 준수
              </h4>
              <p className="text-[15px] text-zinc-200 leading-relaxed break-keep pt-1">
                구급대가 환자의 중증도(KTAS)와 인근 병원의 배후 수술 가능 여부를 사전 확인하고 최적 병원으로 직송합니다.
              </p>
            </div>

          </div>

          <p className="text-[14px] text-zinc-400 pt-1 break-keep text-center">
            응급실은 도착한 순서가 아니라 환자의 위급함과 실질적인 수술 가동 능력에 따라 이용해야 모두가 삽니다.
          </p>

        </div>

      </section>

      {/* =========================================================================
          [에필로그 / 연구진 소개 / 액션]
          화면을 지배하는 한 문장:
          "언제 아파도 나를 수술해 줄 의사가 있는 사회, 지금 제도를 바꾸지 않으면 다음 차례는 우리입니다."
          ========================================================================= */}
      <section className="min-h-[80vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-28 sm:py-36 text-left">
        
        <span className="text-[14px] font-mono font-bold tracking-widest text-[#00E5FF] block mb-4 uppercase">
          에필로그 • 연구의 결론
        </span>

        {/* 화면을 지배하는 거대한 결론 문장 */}
        <h2 className="font-serif font-black text-[34px] sm:text-[46px] lg:text-[52px] text-white tracking-tight leading-[1.3] break-keep mb-8">
          언제 아파도 나를 수술해 줄 의사가 있는 사회,<br />
          지금 제도를 바꾸지 않으면<br />
          다음 차례는 우리입니다.
        </h2>

        <div className="space-y-4 text-[18px] text-zinc-300 leading-[1.8] break-keep max-w-[640px] mb-12">
          <p>
            본 연구는 한양대학교 간호학과의 응급실 현장 임상 분석과 정책학과의 보건의료 법·제도 설계를 결합한 학제 간 융합 정책 프로젝트입니다.
          </p>
          <p>
            우리는 더 이상 구급차 안에서 억울하게 생명을 잃는 환자가 없도록, 그리고 사명감으로 응급실을 지키는 의사가 억울하게 죄인이 되지 않도록 실질적인 법 개정을 촉구합니다.
          </p>
        </div>

        {/* 3대 핵심 학술 자료 액션 */}
        <div className="pt-8 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          <button
            onClick={onOpenPdf}
            className="p-5 text-left bg-zinc-900 border border-zinc-800 hover:border-[#00E5FF] transition-all rounded-[2px] group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] font-mono font-bold text-zinc-400 group-hover:text-[#00E5FF]">자료 01</span>
              <FileText className="w-4 h-4 text-[#00E5FF]" />
            </div>
            <span className="text-[16px] font-bold text-white block mb-1">정책제안서 전문</span>
            <span className="text-[13px] text-zinc-400 block">3대 대안과 법 조문 개정안</span>
          </button>

          <button
            onClick={onOpenPoster}
            className="p-5 text-left bg-zinc-900 border border-zinc-800 hover:border-[#00E5FF] transition-all rounded-[2px] group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] font-mono font-bold text-zinc-400 group-hover:text-[#00E5FF]">자료 02</span>
              <Image className="w-4 h-4 text-[#00E5FF]" />
            </div>
            <span className="text-[16px] font-bold text-white block mb-1">학술 포스터</span>
            <span className="text-[13px] text-zinc-400 block">한양학술타운 LION 최종 인쇄본</span>
          </button>

          <button
            onClick={onScrollToSurvey}
            className="p-5 text-left bg-zinc-900 border border-zinc-800 hover:border-[#00E5FF] transition-all rounded-[2px] group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] font-mono font-bold text-zinc-400 group-hover:text-[#00E5FF]">참여 03</span>
              <MessageSquare className="w-4 h-4 text-[#00E5FF]" />
            </div>
            <span className="text-[16px] font-bold text-white block mb-1">시민 의견 수렴</span>
            <span className="text-[13px] text-zinc-400 block">경험 및 정책 제언 익명 참여</span>
          </button>

        </div>

      </section>

    </div>
  );
}
