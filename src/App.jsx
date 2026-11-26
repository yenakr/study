import React, { useState } from 'react';
import Navbar from './components/Navbar';
import InvestigativeReport from './components/InvestigativeReport';
import SurveySection from './components/SurveySection';
import SurveyResultsSection from './components/SurveyResultsSection';
import Footer from './components/Footer';
import PdfPreviewModal from './components/PdfPreviewModal';

export default function App() {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [surveyRefreshTrigger, setSurveyRefreshTrigger] = useState(0);

  const handleOpenPdf = () => {
    setIsPdfModalOpen(true);
  };

  const handleSurveySubmitted = () => {
    setSurveyRefreshTrigger(prev => prev + 1);
  };

  const handleScrollToSurvey = () => {
    const el = document.getElementById('survey');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 font-sans selection:bg-[#0052FF] selection:text-white">
      
      {/* Editorial Navigation Header */}
      <Navbar 
        onOpenPdf={handleOpenPdf}
      />
      
      {/* Main Investigative Documentary Feature */}
      <main className="flex-grow pt-14">
        
        {/* Core Investigative Feature */}
        <InvestigativeReport 
          onOpenPdf={handleOpenPdf}
          onScrollToSurvey={handleScrollToSurvey}
        />

        {/* Civic Survey Section */}
        <section id="survey" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-zinc-200 text-left">
          <div className="space-y-3 mb-10">
            <span className="text-[13px] font-mono font-bold tracking-widest text-[#0052FF] uppercase block">
              시민 참여
            </span>
            <h2 className="font-serif font-bold text-[32px] sm:text-[40px] text-zinc-950 tracking-tight leading-snug break-keep">
              응급의료체계 개선에 관한 시민 의견 수렴
            </h2>
            <p className="text-[17px] sm:text-[18px] text-zinc-700 leading-[1.8] break-keep max-w-[640px]">
              응급실 이송 지연에 관한 여러분의 실제 경험과 제도 개선에 대한 생각을 들려주세요. 수집된 의견은 한양학술타운 연구팀의 정책 제안서에 반영됩니다.
            </p>
          </div>

          <SurveySection onSubmitted={handleSurveySubmitted} />
          
          <SurveyResultsSection refreshTrigger={surveyRefreshTrigger} />
        </section>

      </main>

      {/* Official Proposal Modal */}
      <PdfPreviewModal 
        isOpen={isPdfModalOpen} 
        onClose={() => setIsPdfModalOpen(false)} 
      />

      {/* Clean Attribution Footer */}
      <Footer />

    </div>
  );
}
