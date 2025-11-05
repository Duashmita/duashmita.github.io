import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
const projects = [{
  title: "Woven - Mood-Based Storytelling LLM",
  slogan: "Guiding emotions through storytelling",
  skills: "Python + LLMs + NLP",
  date: "2025",
  description: "AI-powered narrative generation for emotional well-being",
  tags: ["Python", "LLMs", "NLP"],
  liveUrl: "#",
  githubUrl: "#",
  sections: [
    {
      image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff",
      imageAlt: "Emotion-driven narratives",
      text: "Developed Woven, a mood-based LLM that generates personalized narratives by mapping users' current and target emotions. The system creates dynamic stories that gently guide emotional transitions."
    },
    {
      image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70",
      imageAlt: "Intelligent branching system",
      text: "Designed branching prompts driven by emotion and user choices, creating an interactive storytelling experience that adapts to the user's emotional journey in real-time."
    },
    {
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      imageAlt: "Context management",
      text: "Implemented session memory and summarization techniques to handle long contexts, ensuring coherent and engaging multi-turn storytelling experiences."
    }
  ]
}, {
  title: "ASL Decoder CNN Model",
  slogan: "Breaking communication barriers with AI",
  skills: "Python + PyTorch + CNNs",
  date: "2024",
  description: "Real-time American Sign Language recognition",
  tags: ["Python", "PyTorch", "CNNs"],
  liveUrl: "#",
  githubUrl: "#",
  sections: [
    {
      image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1",
      imageAlt: "Real-time ASL recognition",
      text: "Designed a CNN-based system for real-time American Sign Language (ASL) recognition using live video inputs, making communication more accessible."
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      imageAlt: "Advanced optimization",
      text: "Applied data augmentation techniques and optimized CNN architecture to enhance accuracy and performance, ensuring reliable recognition across various lighting and hand positions."
    }
  ]
}];
const Projects = () => {
  return <section id="projects" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">My Projects</h2>
          <div className="flex-1 h-1 bg-primary"></div>
        </div>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="space-y-6">
              {/* Sticky Header with Liquid Glass */}
              <div className="sticky top-20 z-10 glass py-6 px-6 rounded-lg animate-fade-in">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-5xl font-bold text-primary border-4 border-primary p-4 inline-block">
                      {project.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {project.slogan}
                    </p>
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
          ))}
        </div>
      </div>
    </section>;
};
export default Projects;