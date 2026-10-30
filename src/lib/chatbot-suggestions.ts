// Suggestions de questions prédéfinies, partagées par le ChatBot et la console du Hero
export const suggestedQuestions = [
  "What are your main projects?",
  "What technologies do you master?",
  "Tell me about your LLM experience",
  "How can I contact you?",
];

// Événement qui ouvre juniXbot depuis n'importe où, avec une question pré-remplie optionnelle
export const OPEN_CHATBOT_EVENT = 'junixbot:open';

export function openChatBot(question?: string) {
  window.dispatchEvent(new CustomEvent<{ question?: string }>(OPEN_CHATBOT_EVENT, { detail: { question } }));
}
