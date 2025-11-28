import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import InteractiveCursor from "@/components/InteractiveCursor";
import ParticleBackground from "@/components/ParticleBackground";
import MouseGradient from "@/components/MouseGradient";
import FloatingShapes from "@/components/FloatingShapes";

const Index = () => {
  return (
    <main className="min-h-screen relative" style={{ cursor: 'none' }}>
      <FloatingShapes />
      <ParticleBackground />
      <MouseGradient />
      <InteractiveCursor />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

export default Index;
