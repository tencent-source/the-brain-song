import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FeaturedIn from './components/FeaturedIn';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ExitIntentPopup from './components/ExitIntentPopup';
import LiveChatWidget from './components/LiveChatWidget';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100 overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProblemSolution />
        <Benefits />
        <Testimonials />
        <FeaturedIn />
        <Guarantee />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
      <ExitIntentPopup />
      <LiveChatWidget />
    </div>
  );
};

export default App;