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
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-grow">
        <HeroSection scrollToSection={scrollToSection} />
        <ProblemSection />
        <ErGuideSection />
        <QuizSection />
        <SurveySection />
        <SurveyResultsSection />
        <PolicySection />
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}
