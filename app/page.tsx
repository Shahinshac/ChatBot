import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ChatPreview from './components/ChatPreview';
import HowItWorks from './components/HowItWorks';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-container-lowest text-on-surface">
      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <ChatPreview />
        <HowItWorks />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
