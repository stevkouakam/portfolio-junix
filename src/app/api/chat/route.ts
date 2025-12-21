
import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { SYSTEM_PROMPT } from '@/lib/chatbot-context';




// Initialiser le client OpenAI
const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Configurer la route pour autoriser le streaming
export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    // Extraire les messages de la requête
    const { messages } = await req.json();

    // Créer le stream de réponse avec GPT
    const result = await streamText({
      model: openai('gpt-4o-mini'), // Modèle rapide et économique
      system: SYSTEM_PROMPT,
      messages,
      temperature: 0.7, // Un peu de créativité
    });

    // Retourner la réponse en streaming
    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Erreur API Chat:', error);
    return new Response(
      JSON.stringify({ error: 'Erreur lors de la génération de la réponse' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}