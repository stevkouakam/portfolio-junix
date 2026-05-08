# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Production build
npm run start     # Run production server
npm run lint      # Run ESLint
```

No test framework is configured.

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `OPENAI_API_KEY` | Required — powers the ChatBot via OpenAI gpt-4o-mini |
| `RESEND_API_KEY` | Optional — email delivery for the contact form (currently disabled) |

Copy `.env.local` and fill in real values. On Vercel, add these under Project Settings → Environment Variables.

## Architecture

**Next.js App Router** portfolio with an AI chatbot overlay.

```
src/app/
├── layout.tsx              # Root layout — SEO metadata, Open Graph, Twitter Card
├── page.tsx                # Single page: Hero → About → Projects → Skills → Contact → Footer + ChatBot
├── globals.css             # Theme variables, custom animations (spin-slow, fadeIn, float)
├── api/
│   ├── chat/route.ts       # Edge function — streams OpenAI responses (gpt-4o-mini, temp 0.7)
│   └── contact/route.ts    # Contact form handler — Resend integration commented out
└── components/             # One file per section + ChatBot + Navbar
src/lib/
└── chatbot-context.ts      # PORTFOLIO_CONTEXT + SYSTEM_PROMPT fed to /api/chat
```

**ChatBot flow:** `ChatBot.tsx` (client, floating widget) → `POST /api/chat` (edge, streaming) → `chatbot-context.ts` (system prompt with Steeve's portfolio context) → OpenAI via Vercel AI SDK.

**Contact form flow:** `Contact.tsx` → `POST /api/contact` → currently logs to console (Resend code is commented out and can be re-enabled by restoring the import and send call once `RESEND_API_KEY` is available).

**Styling:** Tailwind CSS v4 with PostCSS — no `tailwind.config.js`, configuration is inline. Framer Motion handles animations in components.

**Path alias:** `@/*` resolves to `./src/*`.

## Key Design Decisions

- Site language is French (`lang="fr"` in layout).
- ChatBot renders fullscreen on mobile, as a floating window on desktop.
- Resend was deliberately disabled before initial deployment; uncommenting the integration in `src/app/api/contact/route.ts` re-enables it.
- `reactCompiler` is explicitly disabled in `next.config.ts`.
