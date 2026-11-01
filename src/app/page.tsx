import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import MotionProvider from './components/ui/MotionProvider';

export default function Home() {
  return (
    <MotionProvider>
      <main className="min-h-screen bg-canvas relative overflow-hidden">
        {/* Grille fine (carreaux de 72px) sur toute la hauteur de la page */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30"
        />

        {/* Halo unique et discret en haut de page */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[420px] left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full bg-accent/[0.10] blur-[160px]"
        />

        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>

        <ChatBot />
      </main>
    </MotionProvider>
  );
}
