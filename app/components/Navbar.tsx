'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Chat Preview', href: '#chat' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const item of NAV_ITEMS) {
        const targetId = item.href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(targetId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initially

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Offset for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-3xl border-b border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.1)]">
        <div className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-headline-md tracking-tighter text-on-surface">AetherAI</span>
            <span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-caps text-[10px] uppercase tracking-widest border border-primary/20">
              Beta
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-stack-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className={`font-label-caps text-label-caps transition-colors cursor-pointer pb-1 relative ${
                    isActive ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                  href={item.href}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action Button & Menu Icon */}
          <div className="flex items-center gap-4">
            <button 
              onClick={(e) => {
                e.preventDefault();
                const chatEl = document.getElementById('chat');
                if (chatEl) {
                  window.scrollTo({ top: chatEl.offsetTop - 80, behavior: 'smooth' });
                }
              }}
              className="bg-primary-container text-on-primary-container font-label-caps px-6 py-2.5 rounded-full active:scale-95 transition-all duration-300 glow-primary hover:brightness-110 cursor-pointer text-sm"
            >
              Launch Chat
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-on-surface p-1 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black md:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-72 z-50 bg-[#0c1c2d] border-l border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl"
            >
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="font-display text-headline-md tracking-tighter text-on-surface">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-on-surface cursor-pointer p-1"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={item.label}
                      onClick={(e) => handleScrollToSection(e, item.href)}
                      className={`font-label-caps text-lg py-2 transition-colors border-b border-white/5 ${
                        isActive ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
