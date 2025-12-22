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
    "Quels sont tes projets principaux ?",
    "Quelles technologies maîtrises-tu ?",
    "Parle-moi de ton expérience avec les LLM",
    "Comment te contacter ?",
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
        content: 'Désolé, une erreur est survenue. Veuillez réessayer.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Ouvrir le chat"
      >
        {isOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
      </motion.button>

      {/* Fenêtre de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 md:inset-auto md:bottom-24 md:right-6 z-50 md:w-[400px] md:h-[650px] w-full h-full bg-slate-900 border-0 md:border border-purple-600/30 md:shadow-2xl flex flex-col md:rounded-lg"
          >
            {/* Header */}
            <div className="p-4 border-b border-purple-600/30 bg-slate-800/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
                  <FiCpu className="text-purple-400" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-mono font-bold">Assistant Steeve</h3>
                  <p className="text-gray-400 text-xs font-mono">En ligne</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Message de bienvenue */}
              {messages.length === 0 && (
                <>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                      <FiCpu className="text-purple-400" size={16} />
                    </div>
                    <div className="bg-slate-800/50 border border-purple-600/20 p-3 rounded-lg max-w-[80%]">
                      <p className="text-gray-300 text-sm">
                        👋 Bonjour ! Je suis l&apos;assistant virtuel de Steeve. Posez-moi des questions sur son parcours, ses projets ou ses compétences !
                      </p>
                    </div>
                  </div>

                  {/* Suggestions de questions */}
                  <div className="space-y-2 ml-10">
                    <p className="text-gray-500 text-xs font-mono mb-2">Questions suggérées :</p>
                    {suggestedQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => setInput(question)}
                        className="block w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-white bg-slate-800/30 hover:bg-slate-800/60 border border-purple-600/20 hover:border-purple-600/50 rounded transition-all"
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
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user'
                      ? 'bg-blue-600/20'
                      : 'bg-purple-600/20'
                  }`}>
                    {message.role === 'user' ? (
                      <FiUser className="text-blue-400" size={16} />
                    ) : (
                      <FiCpu className="text-purple-400" size={16} />
                    )}
                  </div>

                  {/* Message */}
                  <div
                    className={`p-3 rounded-lg max-w-[80%] ${
                      message.role === 'user'
                        ? 'bg-blue-600/20 border border-blue-600/30'
                        : 'bg-slate-800/50 border border-purple-600/20'
                    }`}
                  >
                    <p className="text-gray-300 text-sm whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>
                </div>
              ))}

              {/* Indicateur de chargement */}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                    <FiCpu className="text-purple-400" size={16} />
                  </div>
                  <div className="bg-slate-800/50 border border-purple-600/20 p-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-purple-600/30 bg-slate-800/50"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Posez votre question..."
                  className="flex-1 px-4 py-2 bg-slate-900 border border-purple-600/30 focus:border-purple-600 text-white text-sm font-mono outline-none rounded"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-600/50 text-white rounded transition-colors"
                >
                  <FiSend size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
