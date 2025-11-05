import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 px-4 pb-16">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Resume</h1>
            <Button variant="default" size="lg" className="gap-2">
              <Download size={20} />
              Download PDF
            </Button>
          </div>

          <div className="space-y-12">
            {/* Experience Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">Experience</h2>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-foreground">Software Engineer</h3>
                    <span className="text-muted-foreground font-mono text-sm">2023 - Present</span>
                  </div>
                  <p className="text-primary mb-2">Tech Company</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Developed and maintained full-stack applications using React, TypeScript, and Node.js.
                    Collaborated with cross-functional teams to deliver high-quality products.
                  </p>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">Education</h2>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-foreground">Bachelor of Science in Computer Science</h3>
                    <span className="text-muted-foreground font-mono text-sm">2019 - 2023</span>
                  </div>
                  <p className="text-primary mb-2">University Name</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems
                  </p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">Skills</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Tailwind CSS", "Next.js"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Python", "PostgreSQL", "MongoDB"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
