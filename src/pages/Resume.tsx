import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
const Resume = () => {
  return <div className="min-h-screen">
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
            {/* Education Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">Education</h2>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-foreground">B.Sc. Computer Science: Game Design</h3>
                    <span className="text-muted-foreground font-mono text-sm">Sept 2024 - June 2028</span>
                  </div>
                  <p className="text-primary mb-2">University of California, Santa Cruz</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Undergraduate student pursuing a Bachelor of Science in Computer Science with a focus on Game Design
                  </p>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">Experience</h2>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-foreground">Undergraduate Researcher</h3>
                    <span className="text-muted-foreground font-mono text-sm">Sept 2025 - Present</span>
                  </div>
                  <p className="text-primary mb-2">Augmented Design Lab</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Auditing the Lab through a 10-week independent study focused on generating game levels through AI and LLMs. Working with Procedural content generation through hierarchical wave function collapse.
                  </p>
                </div>

                

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-foreground">Website Designer</h3>
                    <span className="text-muted-foreground font-mono text-sm">Jan 2025 - Present</span>
                  </div>
                  <p className="text-primary mb-2">Undergraduate Admissions Office, UCSC</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Designed, edited, and maintained the company's website, ensuring a user-friendly interface and up-to-date content. Managed and updated digital records, organizing and maintaining structured data for improved accessibility and efficiency.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-foreground">Student Intern</h3>
                    <span className="text-muted-foreground font-mono text-sm">July 2024 - Sept 2024</span>
                  </div>
                  <p className="text-primary mb-2">iHub DivyaSampark, IIT Roorkee</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Developed and deployed machine learning models using Python, PyTorch, and Keras, focusing on real-world problems. Applied data preprocessing techniques, deep learning algorithms (CNNs, NLP), and supervised/unsupervised learning models. Collaborated on team-based projects to build machine learning pipelines and worked with real-world datasets across industries.
                  </p>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">Projects</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Woven - Mood-Based Storytelling LLM</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Developed Woven, a mood-based LLM generating personalized narratives by mapping users' current and target emotions. Designed branching prompts driven by emotion and user choices to gently guide mood transitions through the story. Implemented session memory and summarization to handle long contexts and ensure coherent multi-turn storytelling.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">ASL Decoder CNN Model</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Designed a CNN-based system for real-time American Sign Language (ASL) recognition using live video inputs. Applied data augmentation and optimized CNN architecture to enhance accuracy.
                  </p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">Skills & Languages</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Programming</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "SQL", "HTML/CSS"].map(skill => <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono">
                        {skill}
                      </span>)}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">AI/ML & Design</h3>
                  <div className="flex flex-wrap gap-2">
                    {["PyTorch", "Keras", "Neural Networks", "Graphic Design"].map(skill => <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono">
                        {skill}
                      </span>)}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {["English", "Hindi", "German"].map(skill => <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono">
                        {skill}
                      </span>)}
                  </div>
                </div>
              </div>
            </section>

            {/* Certificates Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">Certificates & Recognition</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-foreground">Goldman Sachs Possibilities Summit 2025</h3>
                    <span className="text-muted-foreground font-mono text-sm">Jan 2025 - Present</span>
                  </div>
                  <p className="text-primary">Delegate</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Resume;