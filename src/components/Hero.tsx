import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Code2 } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <div className="mb-6">
          <span className="text-muted-foreground text-sm tracking-widest uppercase">
            AI/ML Developer & Researcher
          </span>
        </div>
        
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          Mogankumar
          <br />
          <span className="gradient-text">Narsozhan</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Computer Science graduate student at SUNY Buffalo, specializing in artificial intelligence, 
          machine learning, and innovative software solutions that blend creativity with impact.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect px-8 py-6 text-lg"
          >
            View My Work
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg"
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-6">
          <a 
            href="https://www.linkedin.com/in/mogankumar-narsozhan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:mogankum@buffalo.edu"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://leetcode.com/u/Mogankumar/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Code2 className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
