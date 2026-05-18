import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060b18] relative overflow-hidden">
      {/* Fine grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d1f3c_1px,transparent_1px),linear-gradient(to_bottom,#0d1f3c_1px,transparent_1px)] bg-[size:60px_60px] opacity-60" />

      {/* Ambient glow — top left (indigo) */}
      <div className="absolute top-[-300px] left-[-200px] w-[800px] h-[800px] bg-indigo-600/[0.08] rounded-full blur-[140px]" />
      {/* Ambient glow — bottom right (cyan) */}
      <div className="absolute bottom-[-300px] right-[-200px] w-[700px] h-[700px] bg-cyan-600/[0.06] rounded-full blur-[140px]" />
      {/* Ambient glow — center (violet, très subtil) */}
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] bg-violet-700/[0.04] rounded-full blur-[100px]" />
      {/* Ambient glow — top right (blue) */}
      <div className="absolute top-[10%] right-[-100px] w-[400px] h-[400px] bg-blue-600/[0.05] rounded-full blur-[100px]" />

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
  );
}
