import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
const projects = [{
  title: "Project One",
  description: "A modern web application built with React and TypeScript",
  tags: ["React", "TypeScript", "Tailwind CSS"],
  liveUrl: "#",
  githubUrl: "#",
  detailedContent: [
    {
      type: "text",
      content: "This project showcases a modern approach to web development using React and TypeScript. The application features a clean, responsive design and demonstrates best practices in component architecture."
    },
    {
      type: "image",
      src: "/placeholder.svg",
      alt: "Project screenshot"
    },
    {
      type: "text",
      content: "Key features include real-time updates, seamless navigation, and optimized performance. Built with scalability in mind, the codebase is well-structured and maintainable."
    }
  ]
}, {
  title: "Project Two",
  description: "Full-stack e-commerce platform with real-time features",
  tags: ["Next.js", "Node.js", "PostgreSQL"],
  liveUrl: "#",
  githubUrl: "#",
  detailedContent: [
    {
      type: "text",
      content: "A comprehensive e-commerce solution built with modern technologies. Features include product management, shopping cart, and secure checkout process."
    },
    {
      type: "image",
      src: "/placeholder.svg",
      alt: "E-commerce platform screenshot"
    }
  ]
}, {
  title: "Project Three",
  description: "AI-powered tool for content generation and analysis",
  tags: ["Python", "OpenAI", "FastAPI"],
  liveUrl: "#",
  githubUrl: "#",
  detailedContent: [
    {
      type: "text",
      content: "Leveraging the power of AI to automate content creation and provide intelligent analysis. This tool integrates with OpenAI's API to deliver high-quality results."
    },
    {
      type: "image",
      src: "/placeholder.svg",
      alt: "AI tool interface"
    }
  ]
}];
const Projects = () => {
  return <section id="projects" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">My Projects</h2>
        
        <div className="space-y-16">
          {projects.map((project, index) => <div key={index} className="space-y-6">
              <div className="bg-card rounded-lg border border-border overflow-hidden">
                {/* Sticky Header */}
                <div className="sticky top-0 z-10 bg-card/95 backdrop-blur-sm border-b border-border p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
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

                {/* Scrollable Content Area */}
                <div className="p-6 md:p-8 space-y-6">
                  {project.detailedContent.map((content, contentIndex) => (
                    <div key={contentIndex}>
                      {content.type === "text" ? (
                        <p className="text-muted-foreground leading-relaxed text-base">
                          {content.content}
                        </p>
                      ) : (
                        <img 
                          src={content.src} 
                          alt={content.alt}
                          className="w-full rounded-lg border border-border"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Projects;