import { createGroq } from '@ai-sdk/groq';
import { streamText } from 'ai';
import { SYSTEM_PROMPT } from '@/lib/chatbot-context';

// Initialiser le client Groq (offre gratuite)
const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

// Configurer la route pour autoriser le streaming
export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    // Extraire les messages de la requête
    const { messages } = await req.json();

    // Créer le stream de réponse avec GPT-OSS 120B via Groq
    const result = streamText({
      model: groq('openai/gpt-oss-120b'), // Rapide, gratuit et bon en français
      system: SYSTEM_PROMPT,
      messages,
      temperature: 0.7, // Un peu de créativité
      onError: ({ error }) => console.error('Erreur API Chat (stream):', error),
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
