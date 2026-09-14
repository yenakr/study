import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ErGuideSection from './components/ErGuideSection';
import QuizSection from './components/QuizSection';
import SurveySection from './components/SurveySection';
import SurveyResultsSection from './components/SurveyResultsSection';
import PolicySection from './components/PolicySection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow pt-16">
        {activeTab === 'home' && (
          <HeroSection setActiveTab={setActiveTab} />
        )}

        {activeTab === 'problem' && (
          <div className="animate-fadeIn">
            <ProblemSection />
          </div>
        )}

        {activeTab === 'er-guide' && (
          <div className="animate-fadeIn">
            <ErGuideSection />
            <QuizSection />
          </div>
        )}

        {activeTab === 'survey' && (
          <div className="animate-fadeIn">
            <SurveySection />
            <SurveyResultsSection />
          </div>
        )}

        {activeTab === 'policy' && (
          <div className="animate-fadeIn">
            <PolicySection />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="animate-fadeIn">
            <AboutSection />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
