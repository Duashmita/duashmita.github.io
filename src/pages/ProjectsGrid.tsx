import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import wovenPoster from "@/assets/woven-poster.png";
import wovenUi from "@/assets/woven-ui.png";

const projectsData = [
  {
    title: "Pewter Platformer",
    description: "Diagnosed and fixed LLM failure modes, reducing loop-rate from 78.7% to 46.3%",
    tags: ["Prompt Engineering", "LLMs", "Prompt Flow"],
    date: "Sep 2025 - Present",
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"],
    link: "https://pewterplatformer.wessel.xyz/",
    github: "#"
  },
  {
    title: "SlugQuest - Academic Advising LLM",
    description: "Academic advisor chatbot processing transcripts for personalized course recommendations",
    tags: ["LLMs", "AI", "Python"],
    date: "Apr 2025 - Present",
    images: ["https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop"],
    link: "#",
    github: "https://github.com/Brightonca/SlugQuest"
  },
  {
    title: "Woven - Interactive Story Builder",
    description: "Interactive storytelling app using Streamlit and GPT-3.5 with mood-driven prompts",
    tags: ["LLMs", "AI", "Python"],
    date: "Mar 2025 - Present",
    images: [wovenPoster, wovenUi],
    link: "https://duashmita.github.io/woven/",
    github: "https://github.com/Duashmita/LLMStoryBuilderWoven"
  },
  {
    title: "ASL Decoder CNN Model",
    description: "CNN-based system for real-time American Sign Language recognition using live video",
    tags: ["AI", "Machine Learning", "Python"],
    date: "Feb 2025 - Mar 2025",
    images: ["https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=600&h=400&fit=crop"],
    link: "https://duashmita.github.io/sign-language-vision/",
    github: "https://github.com/natanielj/ASLDecoder-ML"
  },
  {
    title: "Influenza Mutation Prediction",
    description: "End-to-end pipeline using codon-based Graph Neural Networks for virus mutation prediction",
    tags: ["GNNs", "Bioinformatics", "Python"],
    date: "2024",
    images: ["https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop"],
    link: "#",
    github: "https://github.com/patilDevansh/BioInformatics.git"
  }
];

const ImageCarousel = ({ images, alt }: { images: string[]; alt: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${alt} ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-primary/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

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
                  <ImageCarousel images={project.images} alt={project.title} />
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
