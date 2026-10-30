'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMessageCircle,
  FiX,
  FiSend,
  FiUser,
  FiCpu
} from 'react-icons/fi';
import { EASE_SOFT } from './ui/motion';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Suggestions de questions prédéfinies
  const suggestedQuestions = [
    "What are your main projects?",
    "What technologies do you master?",
    "Tell me about your LLM experience",
    "How can I contact you?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la requête');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error('Pas de lecteur disponible');
      }

      let assistantMessage = '';
      const assistantId = (Date.now() + 1).toString();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        assistantMessage += chunk;

        setMessages((prev) => {
          const existing = prev.find((m) => m.id === assistantId);
          if (existing) {
            return prev.map((m) =>
              m.id === assistantId ? { ...m, content: assistantMessage } : m
            );
          } else {
            return [
              ...prev,
              { id: assistantId, role: 'assistant', content: assistantMessage },
            ];
          }
        });
      }
    } catch (error) {
      console.error('Erreur:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, an error occurred. Please try again.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <>
      {/* Bouton flottant avec label */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="size-14 inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white rounded-full shadow-[0_8px_30px_-6px_rgb(99_102_241/0.55)] ring-1 ring-white/10 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.3, ease: EASE_SOFT }}
          aria-label="Ouvrir le chat"
        >
          {isOpen ? <FiX size={22} /> : <FiMessageCircle size={22} />}
        </motion.button>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE_SOFT }}
            className="bg-surface/90 backdrop-blur-md border border-line px-2.5 h-6 inline-flex items-center rounded-full"
          >
            <p className="text-muted font-mono text-[0.6875rem] font-medium whitespace-nowrap">
              juniXbot
            </p>
          </motion.div>
        )}
      </div>

      {/* Fenêtre de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: EASE_SOFT }}
            className="fixed inset-0 md:inset-auto md:bottom-24 md:right-6 z-50 md:w-[400px] md:h-[650px] md:max-h-[calc(100svh-8rem)] w-full h-full bg-surface border-0 md:border border-line md:shadow-[0_30px_80px_-20px_rgb(0_0_0/0.75)] flex flex-col md:rounded-2xl overflow-hidden origin-bottom-right"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-line bg-surface-raised/40">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-lg border border-line bg-surface-raised flex items-center justify-center">
                    <FiCpu className="text-accent-hover" size={17} />
                  </div>
                  <div>
                    <h3 className="text-foreground text-sm font-semibold tracking-tight">juniXbot</h3>
                    <p className="flex items-center gap-1.5 text-subtle text-[0.6875rem] font-mono mt-0.5">
                      <span aria-hidden className="size-1.5 rounded-full bg-success" />
                      AI Assistant • Online
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="md:hidden p-2 -mr-2 text-muted hover:text-foreground transition-colors"
                  aria-label="Fermer le chat"
                >
                  <FiX size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
              {/* Message de bienvenue */}
              {messages.length === 0 && (
                <>
                  <div className="flex gap-3">
                    <div className="size-7 rounded-md border border-line bg-surface-raised flex items-center justify-center flex-shrink-0">
                      <FiCpu className="text-accent-hover" size={14} />
                    </div>
                    <div className="bg-surface-raised border border-line px-3.5 py-3 rounded-xl rounded-tl-sm max-w-[85%]">
                      <p className="text-foreground/90 text-sm leading-relaxed">
                        👋 Hi! I&apos;m <span className="text-accent-hover font-semibold">juniXbot</span>, Steeve&apos;s virtual assistant. Ask me anything about his background, projects, or skills!
                      </p>
                    </div>
                  </div>

                  {/* Suggestions de questions */}
                  <div className="space-y-2 ml-10">
                    <p className="text-subtle text-[0.6875rem] font-mono uppercase tracking-wider mb-3">Suggested questions:</p>
                    {suggestedQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => setInput(question)}
                        className="block w-full text-left px-3.5 py-2.5 text-sm text-muted hover:text-foreground border border-line hover:border-line-strong hover:bg-surface-raised rounded-lg transition-colors duration-200"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Liste des messages */}
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  {/* Avatar */}
                  <div className={`size-7 rounded-md border flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user'
                      ? 'border-accent/25 bg-accent-soft'
                      : 'border-line bg-surface-raised'
                  }`}>
                    {message.role === 'user' ? (
                      <FiUser className="text-accent-hover" size={14} />
                    ) : (
                      <FiCpu className="text-accent-hover" size={14} />
                    )}
                  </div>

                  {/* Message */}
                  <div
                    className={`px-3.5 py-3 rounded-xl max-w-[85%] ${
                      message.role === 'user'
                        ? 'bg-accent-soft border border-accent/25 rounded-tr-sm'
                        : 'bg-surface-raised border border-line rounded-tl-sm'
                    }`}
                  >
                    <p className="text-foreground/90 text-sm leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>
                </div>
              ))}

              {/* Indicateur de chargement */}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="size-7 rounded-md border border-line bg-surface-raised flex items-center justify-center flex-shrink-0">
                    <FiCpu className="text-accent-hover" size={14} />
                  </div>
                  <div className="bg-surface-raised border border-line px-3.5 py-3.5 rounded-xl rounded-tl-sm">
                    <div className="flex gap-1">
                      <div className="size-1.5 bg-muted rounded-full animate-typing" style={{ animationDelay: '0ms' }} />
                      <div className="size-1.5 bg-muted rounded-full animate-typing" style={{ animationDelay: '150ms' }} />
                      <div className="size-1.5 bg-muted rounded-full animate-typing" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-line bg-surface-raised/40"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 min-w-0 h-10 px-3.5 bg-canvas/70 border border-line hover:border-line-strong focus:border-accent/70 text-foreground placeholder:text-subtle text-sm outline-none rounded-lg transition-colors duration-200"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="size-10 shrink-0 inline-flex items-center justify-center bg-accent hover:bg-accent-hover disabled:opacity-40 disabled:hover:bg-accent text-white rounded-lg transition-colors duration-200"
                >
                  <FiSend size={15} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
