// Suggestions de questions prédéfinies, partagées par le ChatBot et la console du Hero
export const suggestedQuestions = [
  "Quels sont tes principaux projets ?",
  "Quelles technologies maîtrises-tu ?",
  "Parle-moi de ton expérience avec les LLM",
  "Comment puis-je te contacter ?",
];

// Événement qui ouvre juniXbot depuis n'importe où, avec une question pré-remplie optionnelle
export const OPEN_CHATBOT_EVENT = 'junixbot:open';

export function openChatBot(question?: string) {
  window.dispatchEvent(new CustomEvent<{ question?: string }>(OPEN_CHATBOT_EVENT, { detail: { question } }));
}
