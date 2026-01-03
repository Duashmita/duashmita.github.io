import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Github, FileText, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import wovenPoster from "@/assets/woven-poster.png";
import wovenUi from "@/assets/woven-ui.png";
import pewter1 from "@/assets/pewter-1.jpg";
import pewter2 from "@/assets/pewter-2.jpg";
import aslScreenshot from "@/assets/asl-screenshot.png";

interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  techStack: string[];
  date: string;
  images: string[];
  pdfUrl?: string;
  link: string;
  github: string;
}

const projectsData: ProjectData[] = [
  {
    title: "Pewter Platformer",
    description: "Diagnosed and fixed LLM failure modes, reducing loop-rate from 78.7% to 46.3%",
    tags: ["Prompt Engineering", "LLMs", "Prompt Flow"],
    techStack: ["Python", "LangChain", "OpenAI API", "Prompt Flow"],
    date: "Sep 2025 - Present",
    images: [pewter1, pewter2],
    link: "https://pewterplatformer.wessel.xyz/",
    github: "#"
  },
  {
    title: "SlugQuest - Academic Advising LLM",
    description: "Academic advisor chatbot processing transcripts for personalized course recommendations",
    tags: ["LLMs", "AI", "Python"],
    techStack: ["Python", "Gemini API", "Streamlit", "Pandas"],
    date: "Apr 2025 - Present",
    images: ["https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop"],
    link: "#",
    github: "https://github.com/Brightonca/SlugQuest"
  },
  {
    title: "Woven - Interactive Story Builder",
    description: "Interactive storytelling app using Streamlit and GPT-3.5 with mood-driven prompts",
    tags: ["LLMs", "AI", "Python"],
    techStack: ["Python", "Streamlit", "OpenAI GPT-3.5", "Session State"],
    date: "Mar 2025 - Present",
    images: [wovenPoster, wovenUi],
    link: "https://duashmita.github.io/woven/",
    github: "https://github.com/Duashmita/LLMStoryBuilderWoven"
  },
  {
    title: "PySigns - ASL Decoder",
    description: "CNN-based system for real-time American Sign Language recognition using live video",
    tags: ["AI", "Machine Learning", "Computer Vision"],
    techStack: ["Python", "PyTorch", "MediaPipe", "OpenCV", "CNN"],
    date: "Feb 2025 - Mar 2025",
    images: [aslScreenshot],
    pdfUrl: "/PySigns.pdf",
    link: "https://duashmita.github.io/sign-language-vision/",
    github: "https://github.com/natanielj/ASLDecoder-ML"
  },
  {
    title: "Influenza Mutation Prediction",
    description: "End-to-end pipeline using codon-based Graph Neural Networks for virus mutation prediction",
    tags: ["GNNs", "Bioinformatics", "Python"],
    techStack: ["Python", "PyTorch Geometric", "BioPython", "NetworkX"],
    date: "2024",
    images: ["https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop"],
    link: "#",
    github: "https://github.com/patilDevansh/BioInformatics.git"
  }
];

const ImageCarousel = ({ 
  images, 
  alt, 
  pdfUrl, 
  onPdfClick 
}: { 
  images: string[]; 
  alt: string; 
  pdfUrl?: string;
  onPdfClick?: () => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = images.length + (pdfUrl ? 1 : 0);

  useEffect(() => {
    if (totalSlides <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const isPdfSlide = pdfUrl && currentIndex === images.length;

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
      {pdfUrl && (
        <div
          className={`absolute inset-0 w-full h-full flex items-center justify-center bg-muted transition-opacity duration-700 cursor-pointer ${
            isPdfSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={onPdfClick}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <FileText size={48} />
            <span className="text-sm font-medium">View Project PDF</span>
          </div>
        </div>
      )}
      {totalSlides > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {Array.from({ length: totalSlides }).map((_, index) => (
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

const PdfModal = ({ pdfUrl, onClose }: { pdfUrl: string; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-4xl h-[80vh] bg-card border border-border rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-10"
          onClick={onClose}
        >
          <X size={20} />
        </Button>
        <iframe
          src={pdfUrl}
          className="w-full h-full"
          title="Project PDF"
        />
      </div>
    </div>
  );
};

const ProjectsGrid = () => {
  const [pdfModal, setPdfModal] = useState<string | null>(null);

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
                  <ImageCarousel 
                    images={project.images} 
                    alt={project.title}
                    pdfUrl={project.pdfUrl}
                    onPdfClick={() => project.pdfUrl && setPdfModal(project.pdfUrl)}
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
                  <div className="pt-2 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-1.5 font-medium">Tech Stack</p>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
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
                    {project.pdfUrl && (
                      <button
                        onClick={() => setPdfModal(project.pdfUrl!)}
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <FileText size={16} />
                        PDF
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      {pdfModal && <PdfModal pdfUrl={pdfModal} onClose={() => setPdfModal(null)} />}
    </div>
  );
};

export default ProjectsGrid;
