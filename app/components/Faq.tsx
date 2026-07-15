'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItemProps {
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-card rounded-2xl border border-white/5 overflow-hidden">
      <button
        className="w-full px-8 py-6 flex items-center justify-between text-left group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-headline-md text-lg text-on-surface">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="material-symbols-outlined text-primary"
        >
          add
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-6 text-on-surface-variant font-body-md leading-relaxed opacity-85">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const faqs = [
    {
      question: 'How is my data used?',
      answer:
        'We take privacy seriously. Your data is never used to train our base global models. All data is isolated within your private enterprise instance and is encrypted at rest and in transit.',
    },
    {
      question: 'Can it handle real-time coding?',
      answer:
        'Yes, AetherAI features a specialized coding engine that supports 40+ languages, providing real-time debugging, refactoring suggestions, and unit test generation.',
    },
    {
      question: 'What about custom integrations?',
      answer:
        'Our RESTful API and Webhooks allow you to connect AetherAI to any proprietary software. We also provide native SDKs for Python, JavaScript, and Rust.',
    },
  ];

  return (
    <section id="faq" className="py-stack-lg">
      <div className="max-w-3xl mx-auto px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Frequently Asked</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
