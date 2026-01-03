import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projectsData = [
  {
    title: "Pewter Platformer",
    description: "Diagnosed and fixed LLM failure modes, reducing loop-rate from 78.7% to 46.3%",
    tags: ["Prompt Engineering", "LLMs", "Prompt Flow"],
    date: "Sep 2025 - Present",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    link: "https://pewterplatformer.wessel.xyz/",
    github: "#"
  },
  {
    title: "SlugQuest - Academic Advising LLM",
    description: "Academic advisor chatbot processing transcripts for personalized course recommendations",
    tags: ["LLMs", "AI", "Python"],
    date: "Apr 2025 - Present",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
    link: "#",
    github: "https://github.com/Brightonca/SlugQuest"
  },
  {
    title: "Woven - Interactive Story Builder",
    description: "Interactive storytelling app using Streamlit and GPT-3.5 with mood-driven prompts",
    tags: ["LLMs", "AI", "Python"],
    date: "Mar 2025 - Present",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=600&h=400&fit=crop",
    link: "https://duashmita.github.io/woven/",
    github: "https://github.com/Duashmita/LLMStoryBuilderWoven"
  },
  {
    title: "ASL Decoder CNN Model",
    description: "CNN-based system for real-time American Sign Language recognition using live video",
    tags: ["AI", "Machine Learning", "Python"],
    date: "Feb 2025 - Mar 2025",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=600&h=400&fit=crop",
    link: "https://duashmita.github.io/sign-language-vision/",
    github: "https://github.com/natanielj/ASLDecoder-ML"
  },
  {
    title: "Influenza Mutation Prediction",
    description: "End-to-end pipeline using codon-based Graph Neural Networks for virus mutation prediction",
    tags: ["GNNs", "Bioinformatics", "Python"],
    date: "2024",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop",
    link: "#",
    github: "https://github.com/patilDevansh/BioInformatics.git"
  }
];

const ProjectsGrid = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 px-4 pb-16">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">All Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground font-mono">{project.date}</p>
                  <div className="flex gap-3 pt-2">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium bg-primary text-primary-foreground px-3 py-1.5 rounded-md hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsGrid;
