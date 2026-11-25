import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import IssuesSection from './components/IssuesSection';
import ResearchSection from './components/ResearchSection';
import PolicySection from './components/PolicySection';
import ErGuideSection from './components/ErGuideSection';
import QuizSection from './components/QuizSection';
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

  const handleOpenPdf = () => {
    setIsPdfModalOpen(true);
  };

  const handleOpenPoster = () => {
    setIsPosterModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-brand-blue selection:text-white">
      {/* Global Navigation Header (7 items in exact specified order) */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenPdf={handleOpenPdf}
        onOpenPoster={handleOpenPoster}
      />
      
      {/* Main Content Area */}
      <main className="flex-grow pt-16">
        {/* Home Landing View */}
        {activeTab === 'home' && (
          <div className="animate-fadeIn">
            <HeroSection setActiveTab={setActiveTab} />
          </div>
        )}

        {/* 1) 문제 알아보기 */}
        {activeTab === 'problem' && (
          <div className="animate-fadeIn">
            <ProblemSection />
          </div>
        )}

        {/* 2) 2026 주요 이슈 (신설) */}
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
            <PolicySection onOpenPoster={handleOpenPoster} />
          </div>
        )}

        {/* 5) 응급실 바로 알기 */}
        {activeTab === 'er-guide' && (
          <div className="animate-fadeIn">
            <ErGuideSection />
            <QuizSection />
          </div>
        )}

        {/* 6) 시민 의견 */}
        {activeTab === 'survey' && (
          <div className="animate-fadeIn">
            <SurveySection />
            <SurveyResultsSection />
          </div>
        )}

        {/* 7) 프로젝트 소개 */}
        {activeTab === 'about' && (
          <div className="animate-fadeIn">
            <AboutSection />
          </div>
        )}
      </main>

      {/* Global Modals for Right Action Buttons */}
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
