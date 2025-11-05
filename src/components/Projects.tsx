import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
const projects = [{
  title: "Project One",
  slogan: "Everything you need to enroll in one place",
  skills: "React + TypeScript",
  date: "2024",
  description: "A modern web application built with React and TypeScript",
  tags: ["React", "TypeScript", "Tailwind CSS"],
  liveUrl: "#",
  githubUrl: "#",
  sections: [
    {
      image: "/placeholder.svg",
      imageAlt: "Project screenshot",
      text: "This project showcases a modern approach to web development using React and TypeScript. The application features a clean, responsive design and demonstrates best practices in component architecture."
    },
    {
      image: "/placeholder.svg",
      imageAlt: "Project features",
      text: "Key features include real-time updates, seamless navigation, and optimized performance. Built with scalability in mind, the codebase is well-structured and maintainable."
    }
  ]
}, {
  title: "Project Two",
  slogan: "Shop smart, shop fast",
  skills: "Next.js + Node.js",
  date: "2023",
  description: "Full-stack e-commerce platform with real-time features",
  tags: ["Next.js", "Node.js", "PostgreSQL"],
  liveUrl: "#",
  githubUrl: "#",
  sections: [
    {
      image: "/placeholder.svg",
      imageAlt: "E-commerce platform screenshot",
      text: "A comprehensive e-commerce solution built with modern technologies. Features include product management, shopping cart, and secure checkout process."
    }
  ]
}, {
  title: "Project Three",
  slogan: "AI-powered content at your fingertips",
  skills: "Python + OpenAI",
  date: "2023",
  description: "AI-powered tool for content generation and analysis",
  tags: ["Python", "OpenAI", "FastAPI"],
  liveUrl: "#",
  githubUrl: "#",
  sections: [
    {
      image: "/placeholder.svg",
      imageAlt: "AI tool interface",
      text: "Leveraging the power of AI to automate content creation and provide intelligent analysis. This tool integrates with OpenAI's API to deliver high-quality results."
    }
  ]
}];
const Projects = () => {
  return <section id="projects" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">My Projects</h2>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="space-y-6">
              {/* Sticky Header */}
              <div className="sticky top-20 z-10 bg-background py-4 border-b border-border">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-5xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {project.slogan}
                    </p>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{project.skills}</span>
                      <span>•</span>
                      <span>{project.date}</span>
                    </div>
                  </div>
                  <Button variant="default" size="lg" asChild className="shrink-0">
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