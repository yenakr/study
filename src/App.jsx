import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import IssuesSection from './components/IssuesSection';
import ResearchSection from './components/ResearchSection';
import PolicySection from './components/PolicySection';
import ErGuideSection from './components/ErGuideSection';
import SurveySection from './components/SurveySection';
import SurveyResultsSection from './components/SurveyResultsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import PdfPreviewModal from './components/PdfPreviewModal';
import PosterModal from './components/PosterModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);
  const [surveyRefreshTrigger, setSurveyRefreshTrigger] = useState(0);

  const handleOpenPdf = () => {
    setIsPdfModalOpen(true);
  };

  const handleOpenPoster = () => {
    setIsPosterModalOpen(true);
  };

  const handleSurveySubmitted = () => {
    setSurveyRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-zinc-900 font-sans selection:bg-zinc-800 selection:text-white">
      {/* Editorial Navigation Header */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      
      {/* Main Content Area */}
      <main className="flex-grow pt-14">
        {/* Home Overview View */}
        {activeTab === 'home' && (
          <div className="animate-fadeIn">
            <HeroSection setActiveTab={setActiveTab} />
          </div>
        )}

        {/* 1) 문제 분석 */}
        {activeTab === 'problem' && (
          <div className="animate-fadeIn">
            <ProblemSection setActiveTab={setActiveTab} />
          </div>
        )}

        {/* 2) 2026 주요 이슈 */}
        {activeTab === 'issues' && (
          <div className="animate-fadeIn">
            <IssuesSection setActiveTab={setActiveTab} />
          </div>
        )}

        {/* 3) 연구 과정 */}
        {activeTab === 'research' && (
          <div className="animate-fadeIn">
            <ResearchSection setActiveTab={setActiveTab} />
          </div>
        )}

        {/* 4) 정책 제안 */}
        {activeTab === 'policy' && (
          <div className="animate-fadeIn">
            <PolicySection 
              onOpenPoster={handleOpenPoster} 
              setActiveTab={setActiveTab} 
            />
          </div>
        )}

        {/* 5) 응급실 바로 알기 (통합 퀴즈 및 수칙 표) */}
        {activeTab === 'er-guide' && (
          <div className="animate-fadeIn">
            <ErGuideSection setActiveTab={setActiveTab} />
          </div>
        )}

        {/* 6) 시민 의견 */}
        {activeTab === 'survey' && (
          <div className="animate-fadeIn py-24 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="space-y-4 text-left border-b border-zinc-200 pb-8">
              <div className="text-[13px] font-mono font-bold text-zinc-600 uppercase tracking-widest">
                SECTION 06 • 시민 참여 및 의견 수렴
              </div>

              {/* 핵심 한 문장 (20px bold) */}
              <p className="text-[20px] font-bold text-zinc-950 leading-snug break-keep">
                중증응급환자 이송체계 개선을 위해 시민 여러분의 소중한 경험과 고견을 모읍니다.
              </p>

              <h2 className="text-[36px] sm:text-[40px] font-serif font-bold text-zinc-950 tracking-tight leading-tight break-keep">
                응급의료체계에 관한 시민 의견 수렴
              </h2>

              <p className="text-[17px] md:text-[18px] text-zinc-800 leading-[1.75] font-normal break-keep max-w-[640px]">
                중증응급환자 이송 지연 개선방안에 관한 시민 여러분의 경험과 의견을 익명으로 경청하여 학술 연구 분석에 반영합니다.
              </p>
            </div>

            <SurveySection onSubmitted={handleSurveySubmitted} />
            <SurveyResultsSection 
              refreshTrigger={surveyRefreshTrigger} 
              setActiveTab={setActiveTab} 
            />
          </div>
        )}

        {/* 7) 프로젝트 소개 */}
        {activeTab === 'about' && (
          <div className="animate-fadeIn">
            <AboutSection 
              onOpenPdf={handleOpenPdf}
              onOpenPoster={handleOpenPoster}
              setActiveTab={setActiveTab} 
            />
          </div>
        )}
      </main>

      {/* Global Modals for Academic Artifacts */}
      <PdfPreviewModal 
        isOpen={isPdfModalOpen} 
        onClose={() => setIsPdfModalOpen(false)} 
      />
      
      <PosterModal 
        isOpen={isPosterModalOpen} 
        onClose={() => setIsPosterModalOpen(false)} 
      />

      {/* Mandatory Disclaimer Footer */}
      <Footer />
    </div>
  );
}
