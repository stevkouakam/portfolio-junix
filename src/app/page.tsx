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

      {/* Ambient glow — top left */}
      <div className="absolute top-[-200px] left-[-150px] w-[700px] h-[700px] bg-indigo-600/[0.07] rounded-full blur-[120px]" />
      {/* Ambient glow — bottom right */}
      <div className="absolute bottom-[-200px] right-[-150px] w-[600px] h-[600px] bg-cyan-600/[0.05] rounded-full blur-[120px]" />

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
