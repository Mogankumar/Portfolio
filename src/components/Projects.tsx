import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Code, Brain, Users, Hand, Stethoscope } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Trophy,
      title: "AI Hackathon 2024",
      description: "Developed a machine learning model recommending optimal health insurance plans for senior citizens based on previous patients' data. Presented solution to Lighthouse Clinic, Buffalo NY.",
      tags: ["Machine Learning", "Healthcare", "Python"],
      color: "primary",
    },
    {
      icon: Code,
      title: "Sketch to HTML Code",
      description: "Converted hand-drawn UI sketches into functional HTML code using deep learning and computer vision. Implemented pipeline for sketch recognition, element detection, and real-time rendering.",
      tags: ["Deep Learning", "Computer Vision", "HTML"],
      color: "accent",
    },
    {
      icon: Brain,
      title: "Neural Networks",
      description: "Designed and optimized CNN, RNN, VAE's, and LSTM's for various tasks. Achieved significant accuracy improvements through hyperparameter tuning and advanced optimization techniques.",
      tags: ["Neural Networks", "Deep Learning", "Optimization"],
      color: "primary",
    },
    {
      icon: Users,
      title: "Facial Recognition",
      description: "Utilized SVM learning algorithm to accurately identify individuals in photos. Implemented image classification techniques to predict names by analyzing facial features.",
      tags: ["SVM", "Computer Vision", "Classification"],
      color: "accent",
    },
    {
      icon: Hand,
      title: "Virtual Mouse",
      description: "Implemented hand gesture detection to control computer mouse cursor, perform clicking and scrolling actions, and capture screenshots using only hand gestures.",
      tags: ["Computer Vision", "Gesture Detection", "Python"],
      color: "primary",
    },
    {
      icon: Stethoscope,
      title: "COVID Classification",
      description: "Built two-layer classification model: first classifies images as normal/abnormal, second further classifies abnormal images into COVID and viral pneumonia.",
      tags: ["Medical AI", "Image Classification", "Deep Learning"],
      color: "accent",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-16 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary"
                        className="bg-secondary hover:bg-primary/10 border border-border"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
