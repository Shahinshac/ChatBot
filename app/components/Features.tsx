'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      // Execute any click or interaction
      alert(`Selected Feature: ${title}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="glass-card p-10 rounded-3xl transition-all duration-500 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
      aria-label={`${title} Feature: ${description}`}
    >
      <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#4F46E5] group-hover:to-[#7C3AED] transition-all duration-500">
        <span className="material-symbols-outlined text-primary group-hover:text-white text-2xl" data-icon={icon}>
          {icon}
        </span>
      </div>
      <h3 className="font-headline-md text-2xl text-on-surface mb-4">{title}</h3>
      <p className="font-body-md text-on-surface-variant opacity-70">{description}</p>
    </motion.div>
  );
}

export default function Features() {
  const featuresList = [
    {
      title: 'Neural Engine',
      description: 'Proprietary architecture designed for deep contextual understanding and reasoning.',
      icon: 'neurology',
    },
    {
      title: 'Hyper Speed',
      description: 'Sub-millisecond token generation that keeps up with the pace of your thoughts.',
      icon: 'speed',
    },
    {
      title: 'Enterprise Grade',
      description: 'End-to-end encryption and SOC2 compliance out of the box for total privacy.',
      icon: 'shield',
    },
    {
      title: 'Deep Integration',
      description: 'Connects seamlessly with GitHub, Slack, Notion, and your existing tech stack.',
      icon: 'hub',
    },
    {
      title: 'Global Scale',
      description: 'Infrastructure that scales from a single seat to 100,000+ users instantly.',
      icon: 'trending_up',
    },
    {
      title: 'Actionable Insight',
      description: 'Not just data—clear, summarized, and prioritised actions for your business.',
      icon: 'insights',
    },
  ];

  return (
    <section id="features" className="py-stack-lg relative">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-headline-lg text-headline-lg text-on-surface mb-4"
          >
            Precision-Engineered
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body-md text-body-md text-on-surface-variant"
          >
            Engineered for teams that demand excellence.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {featuresList.map((feat, index) => (
            <FeatureCard
              key={index}
              title={feat.title}
              description={feat.description}
              icon={feat.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
