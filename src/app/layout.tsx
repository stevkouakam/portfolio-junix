import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

// Police du texte courant
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

// Police du code (console juniXbot, tags mono) — non variable : graisses explicites
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Police des titres : grotesque à l'allure « startup »
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Steeve JuniX - Développeur logiciel IA | Portfolio",
  description: "Portfolio de Steeve JuniX, développeur logiciel spécialisé en intelligence artificielle et en ingénierie LLM. Expertise en Python, Java, React et intégration de LLM.",
  keywords: ["Steeve JuniX", "Développeur IA", "Apprentissage automatique", "LLM", "Python", "Java", "React", "Ingénieur LLM", "Portfolio", "Développeur logiciel"],
  authors: [{ name: "Steeve JuniX", url: "https://github.com/stevkouakam" }],
  creator: "Steeve JuniX",
  publisher: "Steeve JuniX",
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: "https://steeve-junix.vercel.app",
    title: "Steeve JuniX - Développeur logiciel IA",
    description: "Portfolio professionnel de Steeve JuniX, développeur logiciel spécialisé en intelligence artificielle et en solutions logicielles innovantes.",
    siteName: "Portfolio de Steeve JuniX",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Steeve JuniX - Développeur logiciel IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steeve JuniX - Développeur logiciel IA",
    description: "Développeur logiciel spécialisé en IA et en ingénierie LLM",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${dmSans.variable} ${spaceMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
