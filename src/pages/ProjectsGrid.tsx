import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

const projectsData = [
  {
    title: "Project Alpha",
    description: "A modern web application",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "Project Beta",
    description: "E-commerce platform",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "Project Gamma",
    description: "AI-powered analytics",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "Project Delta",
    description: "Mobile app design",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "Project Epsilon",
    description: "Data visualization tool",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "Project Zeta",
    description: "Social media dashboard",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "Project Eta",
    description: "Content management system",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "Project Theta",
    description: "Real-time collaboration",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "Project Iota",
    description: "Machine learning pipeline",
    image: "/placeholder.svg",
    link: "#"
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
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsGrid;
