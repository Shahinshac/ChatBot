'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
}

export default function ChatPreview() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Hello! I've analyzed your project architecture. I noticed a potential bottleneck in the database indexing strategy. Would you like me to propose an optimized schema?",
    },
    {
      id: '2',
      sender: 'user',
      text: 'Yes, please. Focus on reducing latency for the read-heavy workloads.',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const feedEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto Scroll to bottom
  useEffect(() => {
    feedEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Auto Focus on load
  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const handleSend = async () => {
    if (!inputText.trim() || isTyping) return;

    const userMsg = inputText;
    const userMsgId = Date.now().toString();
    const updatedMessages = [...messages, { id: userMsgId, sender: 'user' as const, text: userMsg }];

    setMessages(updatedMessages);
    setInputText('');
    setIsTyping(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to get response from Groq API.');
      }

      const data = await response.json();
      const aiMsgId = Date.now().toString();
      setMessages((prev) => [
        ...prev,
        {
          id: aiMsgId,
          sender: 'ai',
          text: data.reply,
        },
      ]);
    } catch (err: any) {
      console.error('Chat error:', err);
      setError(err?.message || 'Something went wrong. Please check your connection or try again.');
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="chat" className="py-stack-lg bg-surface-container-lowest/50">
      <div className="max-w-4xl mx-auto px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">A Closer Look</h2>
          <p className="font-body-md text-on-surface-variant">The interface designed for cognitive flow.</p>
        </div>
        
        <div className="rounded-3xl glass-card overflow-hidden border border-white/10 shadow-2xl">
          {/* Preview Top Bar */}
          <div className="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="font-label-mono text-xs text-on-surface-variant uppercase tracking-widest">
              Aether AI Studio
            </div>
            <div className="w-6" />
          </div>

          {/* Preview Chat Content */}
          <div className="p-8 h-[400px] overflow-y-auto flex flex-col gap-6 scrollbar-thin scrollbar-thumb-white/10">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-4 max-w-[80%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center ${
                      msg.sender === 'ai' ? 'bg-primary-container text-white' : 'bg-surface-container-high text-primary'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">
                      {msg.sender === 'ai' ? 'auto_awesome' : 'person'}
                    </span>
                  </div>
                  <div
                    className={`p-5 rounded-2xl border ${
                      msg.sender === 'ai'
                        ? 'bg-white/5 rounded-tl-none border-l-2 border-primary border-t-white/10 border-r-white/10 border-b-white/10'
                        : 'bg-primary/10 rounded-tr-none border-primary/20'
                    }`}
                  >
                    <p className="text-on-surface font-body-md whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4 items-center"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-container flex-shrink-0 flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-sm">auto_awesome</span>
                </div>
                <div className="flex gap-1.5 px-4 py-3 bg-white/5 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-on-surface-variant/40 animate-bounce" />
                  <div className="w-1.5 h-1.5 rounded-full bg-on-surface-variant/40 animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-on-surface-variant/40 animate-bounce [animation-delay:0.4s]" />
                </div>
              </motion.div>
            )}
            <div ref={feedEndRef} />
          </div>

          {/* Preview Input Bar */}
          <div className="p-6 bg-white/5 border-t border-white/5">
            {error && (
              <div className="mb-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">error</span>
                  <span>{error}</span>
                </div>
                <button 
                  onClick={() => setError(null)} 
                  className="text-red-400/70 hover:text-red-400 cursor-pointer flex items-center justify-center"
                >
                  <span className="material-symbols-outlined text-base">close</span>
                </button>
              </div>
            )}
            <div className="flex items-start gap-4 bg-surface-container px-6 py-4 rounded-2xl border border-white/5 glow-primary transition-all group focus-within:border-primary/50">
              <span className="material-symbols-outlined text-on-surface-variant/50 mt-1 cursor-pointer hover:text-on-surface transition-colors" data-icon="attachment" aria-label="Attach File">
                attachment
              </span>
              <textarea
                ref={textareaRef}
                rows={1}
                disabled={isTyping}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none focus:ring-0 focus:outline-none w-full text-on-surface placeholder:text-on-surface-variant/30 font-body-md resize-none mt-0.5 max-h-24 overflow-y-auto"
                placeholder={isTyping ? "AetherAI is generating response..." : "Type your instruction... (Enter to send, Shift+Enter for new line)"}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                aria-label="Chat input field"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping || !inputText.trim()}
                aria-label="Send message"
                className="w-10 h-10 rounded-xl ai-accent-gradient flex items-center justify-center flex-shrink-0 active:scale-95 transition-transform cursor-pointer hover:brightness-110 disabled:opacity-55 disabled:cursor-not-allowed disabled:active:scale-100"
              >
                <span className="material-symbols-outlined text-white" data-icon="send">
                  send
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
