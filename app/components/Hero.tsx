'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const handleLaunchChat = (e: React.MouseEvent) => {
    e.preventDefault();
    const chatEl = document.getElementById('chat');
    if (chatEl) {
      window.scrollTo({ top: chatEl.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-40 pb-stack-lg overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop text-center">
        {/* Animated Release Tag */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border border-white/5"
        >
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
          <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider text-xs">
            New: Multimodal 4.0 Release
          </span>
        </motion.div>
        
        {/* Animated Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-[80px] leading-tight text-gradient mb-stack-sm tracking-tighter"
        >
          Intelligence, Refined.
        </motion.h1>
        
        {/* Animated Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10"
        >
          The next generation of conversational AI for modern teams. Secure, hyper-intelligent, and built for complex professional workflows.
        </motion.p>
        
        {/* Animated CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          <button 
            onClick={handleLaunchChat}
            className="ai-accent-gradient text-white font-label-caps px-8 py-4 rounded-full text-lg glow-primary active:scale-95 transition-all cursor-pointer hover:brightness-110"
          >
            Launch Chat
          </button>
          <button className="bg-white/5 border border-white/10 text-on-surface font-label-caps px-8 py-4 rounded-full text-lg backdrop-blur hover:bg-white/10 transition-all active:scale-95 cursor-pointer">
            View Docs
          </button>
        </motion.div>

        {/* Hero Image & Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main Dashboard Frame */}
          <div className="rounded-3xl border border-white/10 overflow-hidden glass-card p-2 shadow-2xl">
            <div className="aspect-video relative rounded-2xl overflow-hidden bg-surface-lowest">
              <img 
                className="w-full h-full object-cover grayscale-[0.2] brightness-90" 
                src="https://lh3.googleusercontent.com/aida/AP1WRLv62LQBmkQZb-C0OvhE7gfht3slUDrOho-ys1DgTtm6CMWB4wrkfarsMpQP4b7Mp6Po0O2jnXfq5uhYL7ZkNsWDKh9aGGljpGbXqyJ_VboolPjs4ePfuvldthCOzSAG79OD7BMa8QVUlUOMFa0dZbDBFkQSoCg9n8KdZW3xGb72HHVAk_2yb1P-nM0-RpSBoTEK8KH8m9o3Jwz4EBPtcGl9ho1BUSfroOAxT9NTD3uzeSaZqDaTgII1Rtbo"
                alt="AetherAI Premium Chatbot Platform Interface"
              />
            </div>
          </div>

          {/* Floating Badge 1 - Accuracy */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-4 md:-right-8 glass-card px-6 py-4 rounded-2xl border border-white/20 shadow-lg"
          >
            <div className="flex flex-col items-start gap-1">
              <span className="text-tertiary font-display text-2xl font-bold">99.9%</span>
              <span className="text-on-surface-variant font-label-caps text-[10px] uppercase tracking-widest">Accuracy</span>
            </div>
          </motion.div>

          {/* Floating Badge 2 - Latency */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 -left-4 md:-left-12 glass-card px-6 py-4 rounded-2xl border border-white/20 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full ai-accent-gradient flex items-center justify-center">
                <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
                  bolt
                </span>
              </div>
              <div className="text-left">
                <div className="text-on-surface font-bold">&lt; 150ms</div>
                <div className="text-on-surface-variant font-label-caps text-[10px] uppercase">Response Time</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
