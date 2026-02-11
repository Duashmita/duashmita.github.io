import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import pewterMain from "@/assets/pewter-main.png";
import pewterDiagram from "@/assets/pewter-diagram.png";
import pewterAccuracy from "@/assets/pewter-accuracy.png";
import wovenScreenshot from "@/assets/woven-screenshot.png";
import wovenGameplay from "@/assets/woven-gameplay.png";

const projects = [{
  title: "Pewter Platformer",
  slogan: "2D Platformer level generator using LLM",
  skills: "Prompt Engineering + LLMs + Prompt Flow",
  date: "Sep 2025 - Present",
  description: "LLM agent validation and guardrail system",
  tags: ["Prompt Engineering", "LLMs", "Prompt Flow"],
  liveUrl: "https://pewter-classic-aaaaaaaaaaaaaaaaaa.vercel.app/?_vercel_share=Uq4de7RWU1nKA9oXpKS4JsaQC53AASZj",
  githubUrl: "#",
  sections: [
    {
      image: pewterMain,
      imageAlt: "Pewter Platformer main interface",
      text: "problemStatement",
      richText: true
    },
    {
      image: pewterDiagram,
      imageAlt: "Pewter system diagram",
      text: "solution",
      richText: true
    },
    {
      image: pewterAccuracy,
      imageAlt: "Pewter accuracy results",
      text: "result",
      richText: true
    }
  ]
}, {
  title: "Woven - Interactive Story Builder",
  slogan: "Mood-driven interactive storytelling",
  skills: "LLMs + AI + Python",
  date: "Mar 2025 - Dec 2025",
  description: "Interactive storytelling app using GPT-3.5",
  tags: ["LLMs", "AI", "Machine Learning", "Python"],
  liveUrl: "https://duashmita.github.io/woven/",
  githubUrl: "https://github.com/Duashmita/LLMStoryBuilderWoven",
  sections: [
    {
      image: wovenScreenshot,
      imageAlt: "Woven app screenshot",
      text: "Built Woven, an interactive storytelling app using Streamlit and OpenAI's GPT-3.5."
    },
    {
      image: wovenGameplay,
      imageAlt: "Woven gameplay interface",
      text: "Developed a turn-based story loop with mood-driven prompts and emotion-based story arcs."
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
                            {section.richText && section.text === "problemStatement" ? (
                              <>
                                <span className="text-blue-500 font-bold">Problem Statement:</span>
                                <br />
                                The pewter platformer faced a validation loop, where it kept asking questions to validate its design without calling any tool, i.e. making any real changes
                              </>
                            ) : section.richText && section.text === "solution" ? (
                              <>
                                <span className="text-blue-500 font-bold">Solution:</span>
                                <br />
                                1. Changed the system prompt to be 'action-first'
                                <br />
                                2. Implemented a lightweight conversation-state guardrail to limit repeated follow-up questions and reset on tool calls
                              </>
                            ) : section.richText && section.text === "result" ? (
                              <>
                                <span className="text-blue-500 font-bold">Result:</span>
                                <br />
                                Benchmarked over 30 test prompts: loop-rate <span className="text-blue-500 font-bold">78.7%</span> → <span className="text-blue-500 font-bold">46.3%</span>, significantly improving the agent's reliability and user experience.
                              </>
                            ) : (
                              section.text
                            )}
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
        
        {/* Check out more projects button */}
        <div className="flex justify-center mt-16">
          <Button variant="outline" size="lg" asChild className="hover-scale">
            <Link to="/projects">
              Check out more projects →
            </Link>
          </Button>
        </div>
      </div>
    </section>;
};
export default Projects;