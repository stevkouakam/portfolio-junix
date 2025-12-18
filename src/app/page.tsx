import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Fond avec effet de grille subtil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

      {/* Effet de lumière radiale subtil */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />

      {/* Contenu */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}