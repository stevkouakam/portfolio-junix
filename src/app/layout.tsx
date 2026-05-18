import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Steeve JuniX - AI Software Developer | Portfolio",
  description: "Portfolio of Steeve JuniX, software developer specialized in Artificial Intelligence and LLM Engineering. Expertise in Python, Java, React, and LLM integration.",
  keywords: ["Steeve JuniX", "AI Developer", "Machine Learning", "LLM", "Python", "Java", "React", "LLM Engineer", "Portfolio", "Software Engineer"],
  authors: [{ name: "Steeve JuniX", url: "https://github.com/stevkouakam" }],
  creator: "Steeve JuniX",
  publisher: "Steeve JuniX",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://steeve-junix.vercel.app",
    title: "Steeve JuniX - AI Software Developer",
    description: "Professional portfolio of Steeve JuniX, software developer specialized in Artificial Intelligence and innovative software solutions.",
    siteName: "Steeve JuniX Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Steeve JuniX - AI Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steeve JuniX - AI Software Developer",
    description: "Software developer specialized in AI and LLM Engineering",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
