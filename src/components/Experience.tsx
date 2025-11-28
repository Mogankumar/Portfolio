import { Building2, Shield, BrainCircuit, Sparkles } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Sparkles,
      company: "Kubby",
      role: "AI/ML Engineer",
      period: "May 2025 - Present",
      location: "Dover, Delaware, United States · Remote",
      description: [
        "Developing AI-powered shopping assistant and product intelligence platform",
        "Building ML models to help users and businesses understand, organize, and act on product data",
        "Working with Machine Learning algorithms and AWS Lambda for scalable serverless solutions",
      ],
    },
    {
      icon: Building2,
      company: "Hewlett Packard Enterprise",
      role: "Developer",
      period: "Aug 2023 - May 2024",
      location: "Bangalore, India",
      description: [
        "Created RedHat Package Managers using NFVD, HP Service Activator, and Workflow Designer",
        "Migrated Samsung EnterpriseDB to PostgresDB",
        "Experienced in Linux servers, OpenStack (cloud), Docker, and Networking (TCP/IP)",
      ],
    },
    {
      icon: Shield,
      company: "Hewlett Packard Enterprise",
      role: "Cybersecurity and Digital Risk Management",
      period: "Jan 2023 - Jul 2023",
      location: "Bangalore, India",
      description: [
        "Conducted Breach and Attack Simulations (BAS) to evaluate and enhance security postures",
        "Monitored and resolved issues using NAGIOS XI across project services and databases",
        "Leveraged hypervisors, Docker, and Ubuntu for robust system operations",
      ],
    },
    {
      icon: BrainCircuit,
      company: "Zebo.ai",
      role: "Machine Learning Intern",
      period: "Oct 2022 - Nov 2022",
      location: "Bangalore, India",
      description: [
        "Applied Python for training, testing, and cross-validation of datasets",
        "Performed feature scaling, pickling, and evaluation using error metrics",
        "Utilized ML algorithms and data structures for preprocessing tasks",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-16 text-center">
          Work <span className="gradient-text">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-heading text-2xl font-semibold mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <p>{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
