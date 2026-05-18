# Portfolio — Steeve JuniX

Portfolio personnel de **Steeve JuniX**, développeur logiciel spécialisé en IA.
---

## Stack technique

### Framework & Runtime

| Technologie | Version | Rôle |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.0.10 | Framework React — App Router, Edge Functions, SSR/SSG |
| [React](https://react.dev) | 19.2.1 | Bibliothèque UI — composants, hooks, état local |
| [TypeScript](https://www.typescriptlang.org) | ^5 | Typage statique sur l'ensemble du projet |
| Node.js | ≥ 18 | Runtime serveur (requis par Next.js) |

---

### Intelligence Artificielle

| Technologie | Version | Rôle |
|---|---|---|
| [Vercel AI SDK](https://sdk.vercel.ai) | ^5.0 | SDK unifié pour les appels LLM (streaming, tools, prompts) |
| [@ai-sdk/openai](https://sdk.vercel.ai/providers/openai) | ^2.0 | Adaptateur OpenAI — modèle `gpt-4o-mini` pour le chatbot |
| [@ai-sdk/anthropic](https://sdk.vercel.ai/providers/anthropic) | ^2.0 | Adaptateur Anthropic Claude (intégration disponible) |
| OpenAI API | — | Backend LLM — réponses en streaming via Edge Function |

**Flux chatbot :** `ChatBot.tsx` (client) → `POST /api/chat` (Edge, streaming) → Vercel AI SDK → OpenAI `gpt-4o-mini`

---

### Styling & UI

| Technologie | Version | Rôle |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com) | ^4 | Styles utilitaires — configuration inline (pas de `tailwind.config.js`) |
| [@tailwindcss/postcss](https://tailwindcss.com/docs/installation/using-postcss) | ^4 | Plugin PostCSS pour le traitement Tailwind v4 |
| [Framer Motion](https://www.framer.com/motion) | ^12 | Animations — fade-in, slide, transitions de sections |
| [react-icons](https://react-icons.github.io/react-icons) | ^5.5 | Icônes SVG — Feather Icons (`fi`) + Simple Icons (`si`) |

---

### Email & Communication

| Technologie | Version | Rôle |
|---|---|---|
| [Resend](https://resend.com) | ^6.6 | Service d'envoi d'emails transactionnels (intégration prête, activable) |

> Le formulaire de contact poste sur `POST /api/contact`. L'intégration Resend est commentée — elle s'active en décommentant le code dans `src/app/api/contact/route.ts` et en ajoutant `RESEND_API_KEY`.

---

### Outillage & Qualité

| Outil | Version | Rôle |
|---|---|---|
| ESLint | ^9 | Linting TypeScript/React — config `eslint-config-next` |
| TypeScript | ^5 | Vérification de types à la compilation |
| Babel React Compiler | 1.0.0 | Plugin Babel (désactivé dans `next.config.ts`) |

---

## Architecture du projet

```
src/
├── app/
│   ├── layout.tsx              # Root layout — SEO, Open Graph, Twitter Card
│   ├── page.tsx                # Page principale (Hero → About → Projects → Skills → Contact)
│   ├── globals.css             # Variables CSS, animations personnalisées, scrollbar
│   ├── api/
│   │   ├── chat/route.ts       # Edge Function — streaming OpenAI via Vercel AI SDK
│   │   └── contact/route.ts    # Handler formulaire contact (Resend désactivé)
│   └── components/
│       ├── Navbar.tsx          # Navigation fixe avec menu mobile
│       ├── Hero.tsx            # Section hero — headline, badges, CTA
│       ├── About.tsx           # Présentation — bio, expertises, stats
│       ├── Projects.tsx        # Grille de projets avec tags technos
│       ├── Skills.tsx          # Stack technique par catégorie (IA en premier)
│       ├── Contact.tsx         # Formulaire de contact + infos
│       ├── Footer.tsx          # Pied de page minimal
│       └── ChatBot.tsx         # Widget chatbot IA flottant
└── lib/
    └── chatbot-context.ts      # PORTFOLIO_CONTEXT + SYSTEM_PROMPT pour le chatbot
```

---

## Variables d'environnement

Créer un fichier `.env.local` à la racine :

```env
OPENAI_API_KEY=sk-...       # Obligatoire — alimente le chatbot
RESEND_API_KEY=re_...       # Optionnel — active l'envoi d'emails du formulaire
```

Sur **Vercel** : Project Settings → Environment Variables → ajouter les deux clés.

---

## Commandes

```bash
npm run dev      # Serveur de développement → http://localhost:3000
npm run build    # Build de production
npm run start    # Lancer le build de production en local
npm run lint     # Vérification ESLint
```

---

## Déploiement

Le projet est déployé en continu sur **Vercel**.
Chaque push sur la branche `main` déclenche automatiquement un nouveau build et déploiement.

```
git push origin main  →  Vercel build  →  steeve-junix.vercel.app
```
