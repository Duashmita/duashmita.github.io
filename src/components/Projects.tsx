import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
const projects = [{
  title: "Pewter Platformer",
  slogan: "Diagnosing and fixing LLM failure modes",
  skills: "Prompt Engineering + LLMs + Prompt Flow",
  date: "Sep 2025 - Present",
  description: "LLM agent validation and guardrail system",
  tags: ["Prompt Engineering", "LLMs", "Prompt Flow"],
  liveUrl: "#",
  githubUrl: "#",
  sections: [
    {
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      imageAlt: "LLM debugging",
      text: "Diagnosed an LLM failure mode where the agent entered repetitive validation loops during level creation. Associated with Augmented Design Lab."
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      imageAlt: "System optimization",
      text: "Iterated the system prompt + interaction flow to enforce 'action-first' behavior and structured tool use. Implemented a lightweight conversation-state guardrail to limit repeated follow-up questions and reset on tool calls."
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      imageAlt: "Benchmarking results",
      text: "Benchmarked over 30 test prompts: loop-rate 78.7% → 46.3%, significantly improving the agent's reliability and user experience."
    }
  ]
}, {
  title: "SlugQuest - Academic Advising LLM",
  slogan: "Personalized course recommendations powered by AI",
  skills: "LLMs + AI + Python",
  date: "Apr 2025 - Present",
  description: "Academic advisor chatbot for personalized guidance",
  tags: ["LLMs", "AI", "Machine Learning", "Python"],
  liveUrl: "#",
  githubUrl: "https://github.com/Brightonca/SlugQuest",
  sections: [
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      imageAlt: "Academic advising chatbot",
      text: "Developed academic advisor chatbot 'Samuel the Advisor' processing transcripts for personalized course recommendations."
    },
    {
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
      imageAlt: "Data integration",
      text: "Integrated data from course catalogs and RMP ratings for prerequisite and scheduling analysis."
    },
    {
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
      imageAlt: "Gemini API integration",
      text: "Implemented Gemini API calls with large context handling to generate personalized academic guidance."
    }
  ]
}, {
  title: "Woven - Interactive Story Builder",
  slogan: "Mood-driven interactive storytelling",
  skills: "LLMs + AI + Python",
  date: "Mar 2025 - Present",
  description: "Interactive storytelling app using GPT-3.5",
  tags: ["LLMs", "AI", "Machine Learning", "Python"],
  liveUrl: "#",
  githubUrl: "https://github.com/Duashmita/LLMStoryBuilderWoven",
  sections: [
    {
      image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff",
      imageAlt: "Interactive storytelling",
      text: "Built Woven, an interactive storytelling app using Streamlit and OpenAI's GPT-3.5."
    },
    {
      image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70",
      imageAlt: "Story mechanics",
      text: "Developed a turn-based story loop with mood-driven prompts and emotion-based story arcs."
    },
    {
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      imageAlt: "Session management",
      text: "Handled GPT memory, rate limits, and user input with session state and custom summarization."
    }
  ]
}, {
  title: "ASL Decoder CNN Model",
  slogan: "Real-time American Sign Language recognition",
  skills: "AI + Machine Learning + Python",
  date: "Feb 2025 - Mar 2025",
  description: "CNN-based system for ASL recognition",
  tags: ["AI", "Machine Learning", "Python"],
  liveUrl: "#",
  githubUrl: "https://github.com/natanielj/ASLDecoder-ML",
  sections: [
    {
      image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1",
      imageAlt: "ASL recognition",
      text: "Designed a CNN-based system for real-time American Sign Language (ASL) recognition using live video inputs."
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      imageAlt: "Model optimization",
      text: "Applied data augmentation and optimized CNN architecture to enhance accuracy."
    }
  ]
}, {
  title: "Influenza Mutation Prediction",
  slogan: "Codon-based Graph Neural Networks for virus prediction",
  skills: "GNNs + Bioinformatics + Python",
  date: "2024",
  description: "End-to-end pipeline for influenza mutation prediction",
  tags: ["GNNs", "Bioinformatics", "Machine Learning"],
  liveUrl: "#",
  githubUrl: "#",
  sections: [
    {
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
      imageAlt: "Influenza research",
      text: "Developed an end-to-end pipeline to predict influenza mutations with a codon-based Graph Neural Network."
    },
    {
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
      imageAlt: "Data engineering",
      text: "Engineered sequence alignment, metadata filtering, and codon graph conversion for virus data."
    }
  ]
}];
const Projects = () => {
  return <section id="projects" className="pt-8 pb-16 px-4">
      <div className="container mx-auto max-w-6xl px-0">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">My Projects</h2>
          <div className="flex-1 h-1 bg-primary"></div>
        </div>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index}>
              <div className="space-y-6">
                {/* Sticky Header with Liquid Glass */}
                <div className="sticky top-20 z-10 glass py-6 px-6 rounded-lg animate-fade-in">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-3xl md:text-5xl font-bold text-primary">
                        {project.title}
                      </h3>
                      <div className="space-y-2">
                        <p className="text-lg text-muted-foreground">
                          {project.slogan}
                        </p>
                        <div className="w-12 h-px bg-muted-foreground/30"></div>
                      </div>
                      <div className="flex gap-4 text-sm text-muted-foreground font-mono">
                        <span>{project.skills}</span>
                        <span>•</span>
                        <span>{project.date}</span>
                      </div>
                    </div>
                    <Button variant="default" size="lg" asChild className="shrink-0 hover-scale">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                        Check it out →
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Content Area with image and text in same row */}
                <div className="space-y-12">
                  {project.sections.map((section, sectionIndex) => {
                    const isEven = sectionIndex % 2 === 0;
                    
                    return (
                      <div key={sectionIndex} className="grid md:grid-cols-2 gap-12 items-center">
                        <div className={isEven ? "md:order-1" : "md:order-2"}>
                          <img 
                            src={section.image} 
                            alt={section.imageAlt}
                            className="w-full rounded-lg border border-border"
                          />
                        </div>
                        <div className={isEven ? "md:order-2" : "md:order-1"}>
                          <p className="text-muted-foreground leading-relaxed text-lg">
                            {section.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Separator between projects */}
              {index < projects.length - 1 && (
                <div className="w-full h-px bg-muted-foreground/20 mt-32"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>;
};
export default Projects;