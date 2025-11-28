import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-16 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <p className="text-lg text-muted-foreground text-center mb-12">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
              Feel free to reach out!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <a 
                href="mailto:mogankum@buffalo.edu"
                className="flex items-center gap-4 p-6 bg-secondary/50 rounded-xl border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email</div>
                  <div className="font-medium">mogankum@buffalo.edu</div>
                </div>
              </a>
              
              <a 
                href="tel:+17167871955"
                className="flex items-center gap-4 p-6 bg-secondary/50 rounded-xl border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Phone</div>
                  <div className="font-medium">+1-716-787-1955</div>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/mogankumar-narsozhan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-secondary/50 rounded-xl border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">LinkedIn</div>
                  <div className="font-medium">Connect with me</div>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-6 bg-secondary/50 rounded-xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Location</div>
                  <div className="font-medium">Buffalo, NY</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect px-8 py-6 text-lg"
              >
                <a href="mailto:mogankum@buffalo.edu">
                  Send me an email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-24 text-center text-muted-foreground text-sm">
        <p>© 2024 Mogankumar Narsozhan. Built with passion and curiosity.</p>
      </footer>
    </section>
  );
};

export default Contact;
