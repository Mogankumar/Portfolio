const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a curious Computer Science graduate student at <span className="text-foreground font-semibold">SUNY Buffalo</span> with 
              a strong foundation in AI, machine learning, and software development. With hands-on experience across 
              industry and research projects, I've contributed to real-world solutions in areas like cybersecurity, 
              cloud systems, and computer vision.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm skilled in Python, ML frameworks like <span className="text-primary font-semibold">PyTorch</span> and 
              <span className="text-primary font-semibold"> TensorFlow</span>, and enjoy taking on challenges that blend 
              innovation with impact. Whether it's improving backend systems or building intelligent models, I bring a 
              problem-solving mindset, adaptability, and a passion for continuous learning to every project I work on.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-secondary/50 rounded-xl border border-border">
                <div className="text-3xl font-bold gradient-text mb-2">3.58</div>
                <div className="text-sm text-muted-foreground">GPA</div>
              </div>
              <div className="text-center p-6 bg-secondary/50 rounded-xl border border-border">
                <div className="text-3xl font-bold gradient-text mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-secondary/50 rounded-xl border border-border">
                <div className="text-3xl font-bold gradient-text mb-2">8+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
