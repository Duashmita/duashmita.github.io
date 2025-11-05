import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
const projects = [{
  title: "Project One",
  description: "A modern web application built with React and TypeScript",
  tags: ["React", "TypeScript", "Tailwind CSS"],
  liveUrl: "#",
  githubUrl: "#"
}, {
  title: "Project Two",
  description: "Full-stack e-commerce platform with real-time features",
  tags: ["Next.js", "Node.js", "PostgreSQL"],
  liveUrl: "#",
  githubUrl: "#"
}, {
  title: "Project Three",
  description: "AI-powered tool for content generation and analysis",
  tags: ["Python", "OpenAI", "FastAPI"],
  liveUrl: "#",
  githubUrl: "#"
}];
const Projects = () => {
  return <section id="projects" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">My Projects</h2>
        
        <div className="space-y-16">
          {projects.map((project, index) => <div key={index} className="space-y-6">
              <div className="bg-card rounded-lg p-6 md:p-8 border border-border">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {project.description}
                    </p>
                    <div className="flex gap-3 mt-3 text-sm text-muted-foreground font-mono">
                      {project.tags.map((tag, tagIndex) => <span key={tagIndex}>{tag}</span>)}
                    </div>
                  </div>
                  <Button variant="default" size="lg" asChild className="shrink-0">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                      Check it out →
                    </a>
                  </Button>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Projects;