import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Github, FileText, X, Users, Building } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import wovenPoster from "@/assets/woven-poster.png";
import wovenUi from "@/assets/woven-ui.png";
import wovenScreenshot from "@/assets/woven-screenshot.png";
import pewter1 from "@/assets/pewter-1.jpg";
import pewterMain from "@/assets/pewter-main.png";
import pewterDiagram from "@/assets/pewter-diagram.png";
import aslScreenshot from "@/assets/asl-screenshot.png";
import pysignsScreenshot from "@/assets/pysigns-screenshot.png";
import pysignsMethod from "@/assets/pysigns-method.png";
import pysignsAccuracy from "@/assets/pysigns-accuracy.png";
import pysignsIntro from "@/assets/pysigns-intro.png";
import slugquestThumbnail from "@/assets/slugquest-thumbnail.jpg";

interface ProjectData {
  title: string;
  description: string;
  bulletPoints: string[];
  tags: string[];
  techStack: string[];
  contributors: string[];
  association?: string;
  date: string;
  images: string[];
  pdfUrl?: string;
  link: string;
  github: string;
}

const projectsData: ProjectData[] = [
  {
    title: "PySigns - ASL Decoder",
    description: "CNN-based system for real-time American Sign Language recognition using live video",
    bulletPoints: [
      "Designed a CNN-based system for real-time American Sign Language (ASL) recognition using live video inputs",
      "Applied data augmentation and optimized CNN architecture to enhance accuracy",
      "Implemented MediaPipe hand tracking for real-time gesture detection",
      "Built comparison system between real-time tracking and CNN model predictions",
      "Achieved high confidence predictions with optimized model architecture"
    ],
    tags: ["AI", "Machine Learning", "Computer Vision"],
    techStack: ["Python", "PyTorch", "MediaPipe", "OpenCV", "CNN"],
    contributors: ["Ashmita Dua", "Nataniel Jayaseelan"],
    date: "Feb 2025 - Mar 2025",
    images: [pysignsScreenshot, pysignsIntro, pysignsMethod, pysignsAccuracy],
    pdfUrl: "/PySigns.pdf",
    link: "https://duashmita.github.io/sign-language-vision/",
    github: "https://github.com/natanielj/ASLDecoder-ML"
  },
  {
    title: "Woven - Interactive Story Builder",
    description: "Interactive storytelling app using Streamlit and GPT-3.5 with mood-driven prompts",
    bulletPoints: [
      "Built Woven, an interactive storytelling app using Streamlit and OpenAI's GPT-3.5",
      "Developed a turn-based story loop with mood-driven prompts and emotion-based story arcs",
      "Handled GPT memory, rate limits, and user input with session state and custom summarization",
      "Implemented emotional validation logic to ensure story coherence",
      "Created personality-based story customization system"
    ],
    tags: ["LLMs", "AI", "Python"],
    techStack: ["Python", "Streamlit", "OpenAI GPT-3.5", "Session State"],
    contributors: ["Ashmita Dua"],
    date: "Mar 2025 - Present",
    images: [wovenScreenshot],
    pdfUrl: "/Woven.pdf",
    link: "https://duashmita.github.io/woven/",
    github: "https://github.com/Duashmita/LLMStoryBuilderWoven"
  },
  {
    title: "Pewter Platformer",
    description: "Diagnosed and fixed LLM failure modes, reducing loop-rate from 78.7% to 46.3%",
    bulletPoints: [
      "Diagnosed an LLM failure mode where the agent entered repetitive validation loops during level creation",
      "Iterated the system prompt + interaction flow to enforce 'action-first' behavior and structured tool use",
      "Implemented a lightweight conversation-state guardrail to limit repeated follow-up questions",
      "Benchmarked over 30 test prompts: loop-rate reduced from 78.7% to 46.3%",
      "Significantly improved the agent's reliability and user experience"
    ],
    tags: ["Prompt Engineering", "LLMs", "Prompt Flow"],
    techStack: ["Python", "LangChain", "OpenAI API", "Prompt Flow"],
    contributors: ["Ashmita Dua"],
    association: "Augmented Design Lab",
    date: "Sep 2025 - Present",
    images: [pewterMain, pewter1, pewterDiagram],
    pdfUrl: "/Pewter.pdf",
    link: "https://pewterplatformer.wessel.xyz/",
    github: "#"
  },
  {
    title: "SlugQuest - Academic Advising LLM",
    description: "Academic advisor chatbot processing transcripts for personalized course recommendations",
    bulletPoints: [
      "Developed academic advisor chatbot 'Samuel the Advisor' processing transcripts for personalized course recommendations",
      "Integrated data from course catalogs and RMP ratings for prerequisite and scheduling analysis",
      "Implemented Gemini API calls with large context handling to generate personalized academic guidance",
      "Built transcript parsing and course requirement matching algorithms"
    ],
    tags: ["LLMs", "AI", "Python"],
    techStack: ["Python", "Gemini API", "Streamlit", "Pandas"],
    contributors: ["Ashmita Dua", "Brighton Ca"],
    date: "Apr 2025 - Present",
    images: [slugquestThumbnail],
    link: "#",
    github: "https://github.com/Brightonca/SlugQuest"
  },
  {
    title: "Influenza Mutation Prediction",
    description: "End-to-end pipeline using codon-based Graph Neural Networks for virus mutation prediction",
    bulletPoints: [
      "Developed an end-to-end pipeline to predict influenza mutations with a codon-based Graph Neural Network",
      "Engineered sequence alignment, metadata filtering, and codon graph conversion for virus data",
      "Applied GNN architecture to model relationships between genetic sequences",
      "Processed large-scale bioinformatics datasets for training and validation"
    ],
    tags: ["GNNs", "Bioinformatics", "Python"],
    techStack: ["Python", "PyTorch Geometric", "BioPython", "NetworkX"],
    contributors: ["Ashmita Dua", "Devansh Patil"],
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
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
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

const ProjectModal = ({ project, onClose }: { project: ProjectData; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4" onClick={onClose}>
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-card border border-border rounded-lg overflow-hidden flex flex-col" 
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-10"
          onClick={onClose}
        >
          <X size={20} />
        </Button>
        
        <div className="overflow-y-auto flex-1">
          {/* Header with Image */}
          <div className="relative h-64 md:h-80">
            <ImageCarousel images={project.images} alt={project.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">{project.title}</h2>
              <p className="text-muted-foreground text-sm mt-1">{project.date}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Description */}
            <p className="text-muted-foreground">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">{tag}</Badge>
              ))}
            </div>

            {/* Association */}
            {project.association && (
              <div className="flex items-center gap-2 text-sm">
                <Building size={16} className="text-primary" />
                <span className="text-muted-foreground">Associated with:</span>
                <span className="font-medium text-foreground">{project.association}</span>
              </div>
            )}

            {/* Contributors */}
            <div className="flex items-start gap-2">
              <Users size={16} className="text-primary mt-0.5" />
              <div>
                <span className="text-sm text-muted-foreground">Contributors:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.contributors.map((contributor, index) => (
                    <span key={index} className="text-sm bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      {contributor}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bullet Points */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Key Highlights</h3>
              <ul className="space-y-2">
                {project.bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* PDF Display */}
            {project.pdfUrl && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Project Documentation</h3>
                <div className="border border-border rounded-lg overflow-hidden h-96">
                  <iframe
                    src={project.pdfUrl}
                    className="w-full h-full"
                    title={`${project.title} PDF`}
                  />
                </div>
              </div>
            )}

            {/* Links */}
            <div className="flex gap-4 pt-4 border-t border-border">
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={20} />
                  <span>View on GitHub</span>
                </a>
              )}
              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsGrid = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

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
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
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
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-1.5 font-medium">Tech Stack</p>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 4).map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="text-xs text-muted-foreground">+{project.techStack.length - 4}</span>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono">{project.date}</p>
                  <div className="flex gap-3 pt-2">
                    {project.github && project.github !== "#" && (
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Github size={16} />
                        GitHub
                      </span>
                    )}
                    {project.link && project.link !== "#" && (
                      <span className="flex items-center gap-1.5 text-sm font-medium bg-primary text-primary-foreground px-3 py-1.5 rounded-md">
                        <ExternalLink size={16} />
                        Live Demo
                      </span>
                    )}
                    {project.pdfUrl && (
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <FileText size={16} />
                        PDF
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
};

export default ProjectsGrid;
